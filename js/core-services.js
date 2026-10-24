/* =========================================================================
   syukatsu.win — Core Infrastructure, Indexing & Utility Services
   Provides:
   1. CatalogIndex      : O(1) Map-based entity lookup for catalog, ES, and StoryBank
   2. ClipboardService  : Unified async clipboard + fallback execCommand handler
   3. ExportService     : Unified Blob / UTF-8 BOM CSV / JSON / ICS downloader
   4. SearchNormalizer  : Japanese phonetic & corporate entity normalization engine
   5. FormatUtils       : Salary, employee count, industry classification & logo renderer
   6. DateUtils         : Deadline countdowns & relative date calculators
   ========================================================================= */

  // ===================== 1. O(1) REACTIVE ENTITY INDEX =====================
  const CatalogIndex = {
    _companyMap: new Map(),
    _esMap: new Map(),
    _storyMap: new Map(),
    _lastCatalogRef: null,
    _lastCatalogLen: -1,
    _lastEsRef: null,
    _lastEsLen: -1,
    _lastStoryRef: null,
    _lastStoryLen: -1,

    rebuild() {
      this._companyMap.clear();
      if (typeof catalog !== 'undefined' && Array.isArray(catalog)) {
        for (let i = 0; i < catalog.length; i++) {
          const c = catalog[i];
          if (c && c.id) this._companyMap.set(c.id, c);
        }
        this._lastCatalogRef = catalog;
        this._lastCatalogLen = catalog.length;
      }

      this._esMap.clear();
      if (typeof esList !== 'undefined' && Array.isArray(esList)) {
        for (let i = 0; i < esList.length; i++) {
          const e = esList[i];
          if (e && e.id) this._esMap.set(e.id, e);
        }
        this._lastEsRef = esList;
        this._lastEsLen = esList.length;
      }

      this._storyMap.clear();
      if (typeof storyBank !== 'undefined' && Array.isArray(storyBank)) {
        for (let i = 0; i < storyBank.length; i++) {
          const s = storyBank[i];
          if (s && s.id) this._storyMap.set(s.id, s);
        }
        this._lastStoryRef = storyBank;
        this._lastStoryLen = storyBank.length;
      }
    },

    getCompany(id) {
      if (!id) return undefined;
      if (typeof catalog !== 'undefined' && Array.isArray(catalog)) {
        if (this._lastCatalogRef !== catalog || this._lastCatalogLen !== catalog.length) {
          this.rebuild();
        }
        const hit = this._companyMap.get(id);
        if (hit) return hit;
        const fallback = catalog.find(x => x && x.id === id);
        if (fallback) this._companyMap.set(id, fallback);
        return fallback;
      }
      return undefined;
    },

    getEs(id) {
      if (!id) return undefined;
      if (typeof esList !== 'undefined' && Array.isArray(esList)) {
        if (this._lastEsRef !== esList || this._lastEsLen !== esList.length) {
          this.rebuild();
        }
        const hit = this._esMap.get(id);
        if (hit) return hit;
        const fallback = esList.find(x => x && x.id === id);
        if (fallback) this._esMap.set(id, fallback);
        return fallback;
      }
      return undefined;
    },

    getStory(id) {
      if (!id) return undefined;
      if (typeof storyBank !== 'undefined' && Array.isArray(storyBank)) {
        if (this._lastStoryRef !== storyBank || this._lastStoryLen !== storyBank.length) {
          this.rebuild();
        }
        const hit = this._storyMap.get(id);
        if (hit) return hit;
        const fallback = storyBank.find(x => x && x.id === id);
        if (fallback) this._storyMap.set(id, fallback);
        return fallback;
      }
      return undefined;
    }
  };

  function rebuildCatalogIndex() {
    CatalogIndex.rebuild();
  }
  function getCompanyById(id) {
    return CatalogIndex.getCompany(id);
  }
  function getEsById(id) {
    return CatalogIndex.getEs(id);
  }
  function getStoryById(id) {
    return CatalogIndex.getStory(id);
  }

  // ===================== 2. UNIFIED CLIPBOARD SERVICE =====================
  const ClipboardService = {
    copy(text, successMsg = 'コピーしました', emptyMsg = '⚠️ コピーする内容がありません') {
      if (!text) {
        if (typeof showToast === 'function') showToast(emptyMsg);
        return;
      }
      const formattedSuccess = successMsg.startsWith('📋') ? successMsg : `📋 ${successMsg}`;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          if (typeof showToast === 'function') showToast(formattedSuccess);
        }).catch(() => {
          this._fallbackCopy(text, formattedSuccess);
        });
      } else {
        this._fallbackCopy(text, formattedSuccess);
      }
    },

    _fallbackCopy(text, formattedSuccess) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        if (typeof showToast === 'function') showToast(formattedSuccess);
      } catch (e) {
        if (typeof showToast === 'function') showToast('⚠️ コピーに失敗しました');
      }
      document.body.removeChild(ta);
    }
  };

  // ===================== 3. UNIFIED EXPORT / BLOB DOWNLOAD SERVICE =====================
  const ExportService = {
    downloadBlob(content, mimeType, filename) {
      const blob = new Blob([content], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    },

    downloadCsv(headers, rows, filename, toastMsg = null) {
      const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
      this.downloadBlob(csvContent, 'text/csv;charset=utf-8;', filename);
      if (toastMsg && typeof showToast === 'function') {
        showToast(toastMsg);
      }
    },

    downloadJson(dataObj, filename, toastMsg = null) {
      const jsonStr = JSON.stringify(dataObj, null, 2);
      this.downloadBlob(jsonStr, 'application/json', filename);
      if (toastMsg && typeof showToast === 'function') {
        showToast(toastMsg);
      }
    }
  };

  // ===================== 4. HTML ESCAPING & CORPORATE NAME NORMALIZATION =====================
  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }

  function stripCorporateEntity(name, stripInternYear = false) {
    if (!name) return '';
    const pattern = stripInternYear
      ? /株式会社|\(株\)|（株）|合同会社|相互会社|Internship.*|インターン.*|202[0-9]/gi
      : /株式会社|\(株\)|（株）|合同会社|相互会社/gi;
    return String(name).replace(pattern, '').trim();
  }

  // ===================== 5. DISPLAY & FORMAT HELPERS =====================
  function fmtEmp(c) {
    if (c.emp == null) return '—';
    const n = c.emp;
    const s = n >= 10000 ? '約' + (n / 10000).toFixed(n >= 100000 ? 0 : 1).replace(/\.0$/, '') + '万人'
                         : n.toLocaleString() + '人';
    return s + (c.empNote ? ` ${c.empNote}` : '');
  }

  function sizeLabel(c) {
    if (c.emp == null) return null;
    if (c.emp >= 10000) return '大企業';
    if (c.emp >= 1000)  return '中堅';
    if (c.emp >= 300)   return '中小';
    return 'ベンチャー規模';
  }

  function fmtPay(c) {
    return c.payBachelor == null ? '—' : (c.payBachelor / 10000).toFixed(1) + '万円';
  }

  function fmtPayMaster(c) {
    return c.payMaster == null ? '—' : (c.payMaster / 10000).toFixed(1) + '万円';
  }

  function fmtAnnual(c) {
    return c.avgAnnual == null ? '—' : c.avgAnnual.toLocaleString() + '万円';
  }

  function catOf(c) {
    if (c.cat) return c.cat;
    const s = (c.sub || '') + ' ' + (c.ind17 || '');
    if (/不動産|ディベロッパー|建設|ゼネコン|住宅|ハウスメーカー/.test(s)) return '不動産・建設';
    if (/コンサル|シンクタンク|研究所/.test(s)) return 'コンサル・シンクタンク';
    if (/広告|メディア|マスコミ|テレビ|放送|出版|新聞|映画|アニメ|エンタメ|音楽/.test(s)) return '広告・マスコミ';
    if (/SIer|IT|ソフト|SaaS|Web|通信|ECサービス|ネット|システム|ゲーム|クラウド/.test(s)) return 'IT・通信';
    if (/商社|卸売/.test(s)) return '商社';
    if (/銀行|証券|保険|金融|FinTech|信託|リース|カード/.test(s)) return '金融';
    if (/鉄道|物流|運輸|電力|ガス|航空|海運|インフラ|エネルギー|鉱業/.test(s)) return 'インフラ・運輸';
    if (/小売|アパレル|流通|外食|サービス|ホテル|旅行|警備|テーマパーク|人材/.test(s)) return '小売・サービス';
    if (/自動車|電機|機械|鉄鋼|非鉄|食品|化学|医薬|部品|重工|精密|電子|飲料|総合電機|FA|水産|農林/.test(s)) return 'メーカー';
    return 'その他';
  }

  const NO_LOGO_SET = new Set();

  function cleanInitial(name) {
    if (!name) return '企';
    const clean = stripCorporateEntity(name, false);
    return (clean || name).slice(0, 1) || '企';
  }

  function companyIntlTagsHtml(c) {
    if (!c) return '';
    let html = '';
    if (c.intlStudentFriendly === true) {
      const label = '留学生歓迎';
      html += typeof TermGlossary !== 'undefined'
        ? `<span class="tag intl-friendly">${TermGlossary.hintHtml('intl_friendly', { label, mode: 'underline' })}</span>`
        : `<span class="tag intl-friendly" title="留学生の応募歓迎">留学生歓迎</span>`;
    }
    if (c.englishSelection === true) {
      const label = '英語選考';
      html += typeof TermGlossary !== 'undefined'
        ? `<span class="tag intl-english">${TermGlossary.hintHtml('english_selection', { label, mode: 'underline' })}</span>`
        : `<span class="tag intl-english" title="英語による選考あり">英語選考</span>`;
    }
    return html;
  }

  function logoHtml(c) {
    const initial = cleanInitial(c.name);
    const bg = c.color || '#8b7bff';
    if (NO_LOGO_SET.has(c.id)) {
      return `<div class="ico" style="background:${bg};color:#fff"><span>${initial}</span></div>`;
    }
    const domainFallback = c.domain && !c.domain.startsWith('quote/') ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(c.domain)}&sz=128` : '';
    const errHandler = domainFallback
      ? `if(!this.dataset.fb){this.dataset.fb='1';this.src='${domainFallback}';}else{this.remove();}`
      : `this.remove();`;
    return `<div class="ico" style="background:${bg};color:#fff"><img src="assets/logos/${c.id}.png" alt="${c.name}" loading="lazy" decoding="async" width="44" height="44" onerror="${errHandler}"><span>${initial}</span></div>`;
  }

  // ===================== 6. DATE & COUNTDOWN UTILITIES =====================
  function getDueStatus(c) {
    if (!c.due) {
      return { text: c.dueLabel || '', cls: '', badge: '', days: null };
    }
    const ymd = (c.due || '').match(/^(\d{4})-(\d{1,2})-(\d{1,2})/);
    const md = (c.due || '').match(/^(\d{1,2})\/(\d{1,2})/);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let targetDate = null;
    if (ymd) {
      targetDate = new Date(parseInt(ymd[1]), parseInt(ymd[2]) - 1, parseInt(ymd[3]));
    } else if (md) {
      targetDate = new Date(now.getFullYear(), parseInt(md[1]) - 1, parseInt(md[2]));
    }

    if (targetDate && !isNaN(targetDate.getTime())) {
      const diffMs = targetDate.getTime() - today.getTime();
      const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24));
      const label = c.dueLabel ? `${c.dueLabel} ` : '';
      const dateStr = `${targetDate.getMonth() + 1}/${targetDate.getDate()}`;

      if (diffDays < 0) {
        return { text: `${label}${dateStr}`, cls: 'urgent', badge: '期限超過', days: diffDays };
      } else if (diffDays === 0) {
        return { text: `${label}${dateStr}`, cls: 'urgent', badge: '本日締切', days: 0 };
      } else if (diffDays === 1) {
        return { text: `${label}${dateStr}`, cls: 'urgent', badge: '明日締切', days: 1 };
      } else if (diffDays <= 3) {
        return { text: `${label}${dateStr}`, cls: 'urgent', badge: `あと${diffDays}日`, days: diffDays };
      } else if (diffDays <= 7) {
        return { text: `${label}${dateStr}`, cls: 'soon', badge: `あと${diffDays}日`, days: diffDays };
      } else {
        return { text: `${label}${dateStr}`, cls: '', badge: `あと${diffDays}日`, days: diffDays };
      }
    }

    return { text: (c.dueLabel ? c.dueLabel + ' ' : '') + c.due, cls: c.dueLv || '', badge: c.dueLv === 'urgent' ? '至急' : (c.dueLv === 'soon' ? '近日期限' : ''), days: null };
  }

  function getDateOffsetStr(days, time = '23:59') {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day} ${time}`;
  }

  function getRadarCountdown(deadlineStr) {
    if (!deadlineStr) return null;
    const now = new Date();
    const parts = deadlineStr.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:\s+(\d{1,2}):(\d{1,2}))?/);
    if (!parts) return null;
    const target = new Date(
      parseInt(parts[1], 10),
      parseInt(parts[2], 10) - 1,
      parseInt(parts[3], 10),
      parts[4] ? parseInt(parts[4], 10) : 23,
      parts[5] ? parseInt(parts[5], 10) : 59
    );
    const diffMs = target.getTime() - now.getTime();
    if (diffMs < 0) return { expired: true, text: '締切終了', days: -1, isUrgent: false, isSoon: false };
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const days = Math.floor(diffHours / 24);
    const hours = diffHours % 24;

    let text = '';
    const isUrgent = days <= 3;
    const isSoon = days > 3 && days <= 7;

    if (days === 0) {
      text = `あと ${hours} 時間`;
    } else if (days <= 3) {
      text = `あと ${days} 日 ${hours}h`;
    } else {
      text = `あと ${days} 日`;
    }
    return { expired: false, text, days, hours, isUrgent, isSoon };
  }

  // ===================== 7. SMART PHONETIC SEARCH ENGINE =====================
  function toKatakana(str) {
    if (!str) return '';
    return str.replace(/[\u3041-\u3096]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
  }

  function normalizeSearchText(str) {
    if (!str) return '';
    const norm = toKatakana(String(str).normalize('NFKC').toLowerCase());
    return norm.replace(/キャ/g, 'キヤ').replace(/フィルム/g, 'フイルム');
  }

  function stripNoise(str) {
    if (!str) return '';
    const norm = normalizeSearchText(str);
    return norm
      .replace(/株式会社|（株）|\(株\)|有限会社|合同会社|ホールディングス|グループ/g, '')
      .replace(/[・\-\s_、。/／\(\)（）「」【】]/g, '');
  }

  const KNOWN_ALIASES = {
    c_unlisted_docomo_smtb_netbk: ['住信sbiネット銀行', '住信sbi', '住信', 'sbiネット銀行', 'netbk', 'ドコモsmtbネット銀行', 'ドコモ銀行', '7163', 'smtb', 'sbiネット', 'ネオバンク', 'docomo smtb'],
    c_unlisted_fujifilm_bi: ['富士フイルムビジネスイノベーション', '富士フィルムビジネスイノベーション', '富士ゼロックス', 'fujixerox', 'fuji xerox', '富士フイルムbi', '富士フィルムbi', 'fb', 'ゼロックス'],
    c_unlisted_canon_its: ['キヤノンit', 'キャノンit', 'キャノン', 'cits', 'canon its', 'キヤノンits', 'キャノンits'],
    c_canon: ['キヤノン', 'キャノン', 'canon'],
    c_4901: ['富士フイルム', '富士フィルム', 'fujifilm', '富士フイルムホールディングス', '富士フィルムホールディングス'],
    c_meiji_yasuda: ['明治安田', '明治安田生命', 'meiji yasuda', '明治安田 internship', '明治安田生命保険'],
    c_unlisted_nttdocomo: ['nttドコモ', 'docomo', 'ドコモ', 'nttdocomo'],
    c_unlisted_bdx: ['bdx', 'b&dx', 'ビーディーエックス', 'b and dx'],
    c_tcs: ['日本tcs', 'tcs', 'tata', 'タタ', 'タタコンサルタンシー', '三菱商事合弁', 'tata consultancy services'],
    c_itochu: ['itochu', '伊藤忠', 'いとうちゅう'],
    c_sony: ['sony', 'ソニー'],
    c_nri: ['nri', '野村総研', 'のむらそうごう'],
    c_fastretailing: ['uniqlo', 'ユニクロ', 'gu', 'ジーユー', 'ファストリ'],
    c_jreast: ['jr東日本', 'jr東', 'jreast'],
    c_jrwest: ['jr西日本', 'jr西', 'jrwest'],
    c_nec: ['nec', 'エヌイーシー', '日本電気'],
    c_ntt: ['ntt', 'エヌティティ'],
    c_nttdata: ['nttデータ', 'エヌティティデータ'],
    c_mufg: ['mufg', '三菱ufj'],
    c_smbc: ['smbc', '三井住友'],
    c_bcg: ['bcg', 'ボストンコンサルティング'],
    c_mckinsey: ['mckinsey', 'マッキンゼー'],
    c_bain: ['bain', 'ベイン'],
    c_accenture: ['accenture', 'アクセンチュア', 'ac'],
    c_deloitte: ['deloitte', 'デロイト', 'dtc', 'トーマツ'],
    c_pwc: ['pwc'],
    c_kpmg: ['kpmg'],
    c_ey: ['ey'],
    c_cyberagent: ['ca', 'サイバー', 'cyberagent', 'アベマ', 'abema'],
    c_mercari: ['mercari', 'メルカリ'],
    c_lycorp: ['yahoo', 'ヤフー', 'line', 'ライン', 'lycorp'],
    c_keyence: ['keyence', 'キーエンス'],
    c_toyota: ['toyota', 'トヨタ', 'とよた'],
    c_honda: ['honda', 'ホンダ', 'ほんだ'],
    c_nissan: ['nissan', '日産', 'にっさん'],
    c_hitachi: ['hitachi', '日立', 'ひたち'],
    c_panasonic: ['panasonic', 'パナソニック'],
    c_rakuten: ['rakuten', '楽天', 'らくてん'],
    c_softbank: ['softbank', 'ソフトバンク'],
    c_dentsu: ['dentsu', '電通'],
    c_ajinomoto: ['ajinomoto', '味の素', 'あじのもと'],
    c_suntory: ['suntory', 'サントリー'],
  };

  function getSearchHaystack(c) {
    if (c._searchHay) return c._searchHay;

    const aliasList = KNOWN_ALIASES[c.id] || [];
    const domain = c.domain || '';
    const domainClean = domain.replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/\.(co\.jp|jp|com|org|net)$/i, '');
    const idClean = (c.id || '').replace(/^c_/, '');

    const parts = [
      c.name || '',
      c.code || '',
      domain,
      domainClean,
      idClean,
      catOf(c),
      c.ind17 || '',
      c.sub || '',
      c.noteMotiv || '',
      c.noteEs || '',
      ...(c.tags || []),
      ...aliasList,
      c.intlStudentFriendly ? '留学生歓迎' : '',
      c.englishSelection ? '英語選考' : ''
    ];

    const raw = parts.join(' ');
    const norm = normalizeSearchText(raw);
    const clean = stripNoise(norm);
    const nameClean = stripNoise(c.name || '');

    c._searchHay = { norm, clean, nameClean };
    return c._searchHay;
  }

  function smartSearchMatches(c, rawQuery) {
    if (!rawQuery) return true;
    const normQuery = normalizeSearchText(rawQuery).trim();
    if (!normQuery) return true;

    const hay = getSearchHaystack(c);
    const cleanQuery = stripNoise(normQuery);

    if (hay.norm.includes(normQuery) || (cleanQuery && hay.clean.includes(cleanQuery))) {
      return true;
    }

    if (cleanQuery && hay.nameClean && (cleanQuery.includes(hay.nameClean) || hay.nameClean.includes(cleanQuery))) {
      return true;
    }

    const tokens = normQuery.split(/\s+/).filter(Boolean);
    if (tokens.length > 1) {
      const allTokensMatch = tokens.every(tok => {
        const tokClean = stripNoise(tok);
        if (hay.norm.includes(tok) || (tokClean && hay.clean.includes(tokClean))) {
          return true;
        }
        if (tokClean && hay.nameClean && (tokClean.includes(hay.nameClean) || hay.nameClean.includes(tokClean))) {
          return true;
        }
        return false;
      });
      if (allTokensMatch) return true;
    }

    return false;
  }

  // ===================== 8. SHARED ES UI HELPERS =====================
  function renderEsCharBadge(totalChars, totalLimit) {
    if (totalLimit) {
      let badgeClass = 'warn';
      let titleHint = `8割目安(${Math.ceil(totalLimit * 0.8)}字)まであと${Math.ceil(totalLimit * 0.8) - totalChars}字`;
      if (totalChars > totalLimit) {
        badgeClass = 'over';
        titleHint = `${totalChars - totalLimit}字超過`;
      } else if (totalChars >= Math.ceil(totalLimit * 0.8)) {
        badgeClass = 'ok';
        titleHint = `適正文字数 (${Math.round(totalChars / totalLimit * 100)}%)`;
      }
      return `<span class="es-char-badge ${badgeClass}" title="${titleHint}">計 ${totalChars} / ${totalLimit}字</span>`;
    }
    return `<span class="es-char-badge">計 ${totalChars}字</span>`;
  }

  function renderLinkedStoryPills(linkedStoryIds, maxTitleLen = null) {
    if (!Array.isArray(linkedStoryIds) || !linkedStoryIds.length) return '';
    return linkedStoryIds.map(sid => {
      const s = getStoryById(sid);
      if (!s) return '';
      const displayTitle = (maxTitleLen && s.title.length > maxTitleLen)
        ? `${s.title.slice(0, maxTitleLen)}…`
        : s.title;
      return `<span class="story-ref-badge" onclick="event.stopPropagation();openStoryModal('${s.id}')" title="${escapeHtml(s.title)}">🔗 ${escapeHtml(displayTitle)}</span>`;
    }).filter(Boolean).join(' ');
  }

  // ===================== 9. JOB-HUNTING TERM GLOSSARY (P1-4) =====================
  /** @type {Record<string, { label: string, ja: string, zh?: string, sort?: number }>} */
  const TERM_GLOSSARY = {
    es: {
      label: 'ES',
      ja: 'エントリーシートの略。企業への応募書類で、自己PR・志望動機・ガクチカなどを記入します。',
      zh: '求职申请书（网申问卷），常含自我介绍与志愿动机。',
      sort: 1
    },
    gakuchika: {
      label: 'ガクチカ',
      ja: '「学生時代に力を入れたこと」の略。ESや面接で経験の深掘りを聞かれる定番設問です。',
      zh: '「学生时代最投入的事」，日本求职经典经历题。',
      sort: 2
    },
    shiboudouki: {
      label: '志望動機',
      ja: 'なぜその企業・業界・職種を志望するかを書く設問。企業研究の成果が問われます。',
      zh: '志愿动机：说明为何选择该公司/行业/岗位。',
      sort: 3
    },
    jiko_pr: {
      label: '自己PR',
      ja: '自分の強み・魅力を短く伝える設問。ガクチカと組み合わせて書くことが多いです。',
      zh: '自我推销：概括自己的优势与特点。',
      sort: 4
    },
    honshinsotsu: {
      label: '本選考',
      ja: 'インターンや説明会とは別の、新卒採用の正式な選考プロセス。ES提出から内定までを指します。',
      zh: '正式选考流程（相对实习/说明会）。',
      sort: 5
    },
    entry: {
      label: 'エントリー',
      ja: '採用マイページへの登録や応募の第一歩。ここから書類・テスト・面接が始まります。',
      zh: '网申/报名入口，选考的第一步。',
      sort: 6
    },
    es_webtest: {
      label: 'ES・Webテスト',
      ja: '書類（ES）提出と、SPI・玉手箱などのオンライン適性検査の段階。通過率の分かれ目になりやすいです。',
      zh: '材料审查 + 线上性格/能力测试（如 SPI）。',
      sort: 7
    },
    webtest: {
      label: 'Webテスト',
      ja: 'Web上で受ける適性検査・テストの総称。SPI、玉手箱、TG-WEB などがあります。',
      zh: '网测/在线适性测验的统称。',
      sort: 8
    },
    first_interview: {
      label: '一次面接',
      ja: '最初の面接。人事や若手社員が担当することが多く、志望動機やガクチカの確認が中心です。',
      zh: '第一轮面试（一面）。',
      sort: 9
    },
    final_interview: {
      label: '最終面接',
      ja: '役員・社長などが実施する最終確認の面接。内定直前の段階です。',
      zh: '终面/高管面试。',
      sort: 10
    },
    naitei: {
      label: '内々定・内定',
      ja: '採用内定。内々定は正式な内定通知前の口頭・仮内定。承諾期限に注意します。',
      zh: '内定；内定前有时先有口头「内定」。',
      sort: 11
    },
    oinori: {
      label: 'お祈り・落選',
      ja: '不採用の結果。「お祈りメール」は就活用の婉曲表現です。次の企業に切り替えて再チャレンジします。',
      zh: '落选；「祈福邮件」是日本常见的婉拒说法。',
      sort: 12
    },
    shimekiri: {
      label: '締切',
      ja: 'ES提出・テスト受検・面接予約などの期限。複数社を並行すると見落としやすいのでカレンダー管理が有効です。',
      zh: '截止日期（提交/测试/预约等）。',
      sort: 13
    },
    ob: {
      label: 'OB訪問',
      ja: '先輩社員（OB/OG）に訪問・面談し、業界・仕事・社風を聞く活動。志望動機の材料になります。',
      zh: '拜访在职前辈（OB/OG）了解公司与行业。',
      sort: 14
    },
    intern: {
      label: 'インターン',
      ja: '短期の仕事体験。選考型インターンは参加・評価が本選考の優遇（早期ルート）に直結することがあります。',
      zh: '实习；选考型实习可能影响正式选考。',
      sort: 15
    },
    star: {
      label: 'STAR',
      ja: 'Situation（状況）・Task（課題）・Action（行動）・Result（結果）で話す回答の型。ガクチカ整理に使えます。',
      zh: 'STAR 结构化回答法（情境-任务-行动-结果）。',
      sort: 16
    },
    stage_status: {
      label: '選考ステージ',
      ja: '今どの選考段階にいるかの状態（エントリー→ES→面接→内定など）。カンバンやリストで管理します。',
      zh: '选考进度/当前阶段状态。',
      sort: 17
    },
    mypage: {
      label: 'マイページ',
      ja: '各社採用サイト上のあなた専用ページ。ES提出・日程予約・結果通知を受け取ります。',
      zh: '企业招聘官网上的个人申请页。',
      sort: 18
    },
    kanban: {
      label: 'カンバン',
      ja: '選考段階を列で並べ、企業カードをドラッグして進捗を更新するボードUI。',
      zh: '看板式进度板，拖拽更新阶段。',
      sort: 19
    },
    funnel: {
      label: '選考ファネル',
      ja: 'エントリーから内定まで、各段階に何人（何社）残っているかの通過イメージ。ボトルネックが見えます。',
      zh: '选考漏斗：各阶段通过人数/社数。',
      sort: 20
    },
    intl_friendly: {
      label: '留学生歓迎',
      ja: '外国人留学生・海外大学出身者の新卒応募を受け付けている、または積極採用している企業の目安です。公式要項で在留資格・語学条件を必ず確認してください。',
      zh: '欢迎留学生应聘（或积极招聘）的参考标签，请以官网募集要项为准。',
      sort: 21
    },
    english_selection: {
      label: '英語選考',
      ja: 'ES・面接・ケースなど、選考の一部または全体を英語で受けられるルートがある企業の目安です。',
      zh: '提供英语选考路径（部分或全程）的参考标签。',
      sort: 22
    }
  };

  const STAGE_TERM_IDS = {
    rejected: 'oinori',
    entry: 'entry',
    es: 'es_webtest',
    first: 'first_interview',
    final: 'final_interview',
    offer: 'naitei'
  };

  const ES_TYPE_TERM_IDS = {
    '自己PR': 'jiko_pr',
    'ガクチカ': 'gakuchika',
    '志望動機': 'shiboudouki',
    'ES': 'es'
  };

  const TermGlossary = {
    _inited: false,
    _popoverEl: null,
    _openBtn: null,

    get(id) {
      return TERM_GLOSSARY[id] || null;
    },

    hintHtml(id, opts = {}) {
      const term = this.get(id);
      if (!term) return escapeHtml(opts.label || opts.fallback || id || '');
      const label = opts.label != null ? opts.label : term.label;
      const mode = opts.mode || 'icon';
      const extra = opts.wrapClass ? ` ${opts.wrapClass}` : '';
      if (mode === 'underline') {
        return `<span class="term-hint-wrap${extra}"><button type="button" class="term-hint term-hint--underline" data-term="${escapeHtml(id)}" aria-expanded="false" aria-label="${escapeHtml(term.label)}の説明">${escapeHtml(label)}</button></span>`;
      }
      return `<span class="term-hint-wrap${extra}">${escapeHtml(label)}<button type="button" class="term-hint term-hint--icon" data-term="${escapeHtml(id)}" aria-expanded="false" aria-label="${escapeHtml(term.label)}の説明">?</button></span>`;
    },

    esTypeChipHtml(typeLabel, count) {
      const termId = ES_TYPE_TERM_IDS[typeLabel];
      const text = `${typeLabel} (${count})`;
      if (termId) return this.hintHtml(termId, { label: text, mode: 'underline' });
      return escapeHtml(text);
    },

    init() {
      if (this._inited) return;
      this._inited = true;
      this._popoverEl = document.getElementById('termPopover');
      if (!this._popoverEl) {
        this._popoverEl = document.createElement('div');
        this._popoverEl.id = 'termPopover';
        this._popoverEl.className = 'term-popover';
        this._popoverEl.setAttribute('role', 'dialog');
        this._popoverEl.setAttribute('aria-hidden', 'true');
        this._popoverEl.hidden = true;
        document.body.appendChild(this._popoverEl);
      }
      document.addEventListener('click', e => this._onDocumentClick(e));
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
          this.closePopover();
          this.closeDrawer();
        }
      });
      window.addEventListener('resize', () => {
        if (this._openBtn) this._positionPopover(this._openBtn);
      });
      this.renderDrawerList();
    },

    _onDocumentClick(e) {
      const btn = e.target.closest('.term-hint');
      if (btn) {
        e.preventDefault();
        e.stopPropagation();
        this._toggleFromButton(btn);
        return;
      }
      if (this._popoverEl && !e.target.closest('.term-popover') && !e.target.closest('.term-hint')) {
        this.closePopover();
      }
    },

    _toggleFromButton(btn) {
      const id = btn.getAttribute('data-term');
      if (!id) return;
      if (this._openBtn === btn && this._popoverEl && !this._popoverEl.hidden) {
        this.closePopover();
        return;
      }
      this._openBtn = btn;
      this._showPopover(id, btn);
    },

    _showPopover(id, anchorBtn) {
      const term = this.get(id);
      if (!term || !this._popoverEl) return;
      document.querySelectorAll('.term-hint[aria-expanded="true"]').forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });
      anchorBtn.setAttribute('aria-expanded', 'true');
      const zhBlock = term.zh
        ? `<div class="term-popover-zh"><span class="term-popover-zh-label">中文</span>${escapeHtml(term.zh)}</div>`
        : '';
      this._popoverEl.innerHTML = `
        <div class="term-popover-head">
          <strong class="term-popover-title">${escapeHtml(term.label)}</strong>
          <button type="button" class="term-popover-close" aria-label="閉じる" data-term-popover-close>✕</button>
        </div>
        <p class="term-popover-ja">${escapeHtml(term.ja)}</p>
        ${zhBlock}
        <button type="button" class="term-popover-more" data-term-open-glossary>📖 用語メモ一覧</button>
      `;
      this._popoverEl.hidden = false;
      this._popoverEl.setAttribute('aria-hidden', 'false');
      const closeBtn = this._popoverEl.querySelector('[data-term-popover-close]');
      if (closeBtn) closeBtn.addEventListener('click', ev => { ev.stopPropagation(); this.closePopover(); });
      const moreBtn = this._popoverEl.querySelector('[data-term-open-glossary]');
      if (moreBtn) moreBtn.addEventListener('click', ev => { ev.stopPropagation(); this.closePopover(); this.openDrawer(); });
      this._positionPopover(anchorBtn);
    },

    _positionPopover(anchorBtn) {
      if (!this._popoverEl || !anchorBtn) return;
      const rect = anchorBtn.getBoundingClientRect();
      const margin = 8;
      const pop = this._popoverEl;
      pop.style.visibility = 'hidden';
      pop.style.left = '0';
      pop.style.top = '0';
      pop.style.maxWidth = Math.min(320, window.innerWidth - margin * 2) + 'px';
      const popRect = pop.getBoundingClientRect();
      let left = rect.left + rect.width / 2 - popRect.width / 2;
      left = Math.max(margin, Math.min(left, window.innerWidth - popRect.width - margin));
      let top = rect.bottom + margin;
      if (top + popRect.height > window.innerHeight - margin) {
        top = rect.top - popRect.height - margin;
      }
      if (top < margin) top = margin;
      pop.style.left = `${Math.round(left)}px`;
      pop.style.top = `${Math.round(top)}px`;
      pop.style.visibility = '';
    },

    closePopover() {
      if (!this._popoverEl) return;
      this._popoverEl.hidden = true;
      this._popoverEl.setAttribute('aria-hidden', 'true');
      document.querySelectorAll('.term-hint[aria-expanded="true"]').forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });
      this._openBtn = null;
    },

    renderDrawerList() {
      const listEl = document.getElementById('glossaryDrawerList');
      if (!listEl) return;
      const entries = Object.entries(TERM_GLOSSARY)
        .sort((a, b) => (a[1].sort || 99) - (b[1].sort || 99) || a[1].label.localeCompare(b[1].label, 'ja'));
      listEl.innerHTML = entries.map(([id, t]) => {
        const zh = t.zh ? `<div class="glossary-item-zh">${escapeHtml(t.zh)}</div>` : '';
        return `<article class="glossary-item" id="glossary-item-${escapeHtml(id)}">
          <h3 class="glossary-item-label">${escapeHtml(t.label)}</h3>
          <p class="glossary-item-ja">${escapeHtml(t.ja)}</p>
          ${zh}
        </article>`;
      }).join('');
    },

    openDrawer() {
      this.closePopover();
      const drawer = document.getElementById('glossaryDrawer');
      const overlay = document.getElementById('glossaryDrawerOverlay');
      if (!drawer || !overlay) return;
      this.renderDrawerList();
      drawer.classList.add('open');
      overlay.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.classList.add('glossary-drawer-open');
    },

    closeDrawer() {
      const drawer = document.getElementById('glossaryDrawer');
      const overlay = document.getElementById('glossaryDrawerOverlay');
      if (drawer) {
        drawer.classList.remove('open');
        drawer.setAttribute('aria-hidden', 'true');
      }
      if (overlay) {
        overlay.classList.remove('open');
        overlay.setAttribute('aria-hidden', 'true');
      }
      document.body.classList.remove('glossary-drawer-open');
    }
  };
