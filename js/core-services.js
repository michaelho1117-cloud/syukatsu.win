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
      ...aliasList
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
