/* =========================================================================
   syukatsu.win — Static Seed Catalog, Stage Definitions & Demo Dataset
   Extracted from monolithic bundle for clean data/logic separation.
   ========================================================================= */

  const DUMMY_SEED_IDS = new Set([
    'c_sony', 'c_toyota', 'c_mitsubishi_corp', 'c_recruit', 'c_mercari', 'c_freee',
    'c_deloitte', 'c_nttdata', 'c_unlisted_rms', 'c_tcs', 'c_keyence', 'c_8766',
    'c_itochu', 'c_nri', 'c_7974', 'c_baycurrent', 'c_unlisted_bdx'
  ]);
/* =========================================================================
     単一マスターデータ定義 & 初期カタログ（48社）
     Tier A / Tier B / 既存サンプル / コンサル / IT・SIer
     ========================================================================= */
  const DEFAULT_CATALOG = [
    // ── Tier A: 公式/有報で検証済みの主要大手 ─────────────────────────
    { id:'c_toyota', name:'トヨタ自動車', code:'7203', domain:'toyota.jp', ind17:'自動車・輸送機', cat:'メーカー', sub:'自動車', emp:73133, empNote:'単体(連結39.1万)', payBachelor:275000, payMaster:299000, avgAnnual:895, color:'#c0392b', added:false, stage:'watch', loc:'愛知/東京', tags:["技術職", "福利厚生◎"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mitsubishi_corp', name:'三菱商事', code:'8058', domain:'mitsubishicorp.com', ind17:'商社・卸売', cat:'商社', sub:'総合商社', emp:5448, empNote:'単体', payBachelor:340000, payMaster:380000, avgAnnual:2112, color:'#8e44ad', added:false, stage:'watch', loc:'東京', tags:["総合職", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_sony', name:'ソニーグループ', code:'6758', domain:'sony.com', ind17:'電機・精密', cat:'広告・マスコミ', sub:'電機/エンタメ', emp:113000, empNote:'連結', payBachelor:333000, payMaster:360000, avgAnnual:1100, color:'#2c3e50', added:false, stage:'watch', loc:'東京', tags:["技術職"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_smbc', name:'三井住友銀行', code:'8316', domain:'smbc.co.jp', ind17:'銀行', cat:'金融', sub:'銀行', emp:28000, empNote:'単体(連結9.4万)', payBachelor:280000, payMaster:305000, avgAnnual:1160, color:'#27ae60', added:false, stage:'watch', loc:'東京/全国', tags:["SMBCグループ", "3大メガバンク", "総合職", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_nri', name:'野村総合研究所', code:'4307', domain:'nri.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'日系最大手 シンクタンク・経営/ITコンサル', emp:6700, empNote:'単体(連結1.7万)', payBachelor:336500, payMaster:361000, avgAnnual:1332, color:'#2980b9', added:false, stage:'watch', loc:'東京', tags:["シンクタンク", "日系最高峰", "高年収", "技術職"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_itochu', name:'伊藤忠商事', code:'8001', domain:'itochu.co.jp', ind17:'商社・卸売', cat:'商社', sub:'総合商社', emp:4200, empNote:'単体(連結11万)', payBachelor:325000, payMaster:365000, avgAnnual:1804, color:'#004098', added:false, stage:'watch', loc:'東京/全国', tags:["総合商社", "5大商社首位級", "高年収", "総合職"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mufg', name:'三菱UFJ銀行', code:'8306', domain:'mufg.jp', ind17:'銀行', cat:'金融', sub:'銀行', emp:30000, empNote:'単体(連結12万)', payBachelor:300000, payMaster:325000, avgAnnual:1150, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["三菱グループ", "メガバンク首位", "海外展開", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_honda', name:'本田技研工業', code:'7267', domain:'honda.co.jp', ind17:'自動車・輸送機', cat:'メーカー', sub:'自動車', emp:30530, empNote:'単体', payBachelor:270000, payMaster:296000, avgAnnual:820, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },

    // ── Tier B: 公開一覧(Baseconnect/JPX)由来 ──
    { id:'c_denso', name:'デンソー', code:'6902', domain:'denso.com', ind17:'自動車・輸送機', cat:'メーカー', sub:'自動車部品', emp:51687, empNote:'(Baseconnect)', payBachelor:265000, payMaster:291000, avgAnnual:830, color:'#dc0000', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_jreast', name:'東日本旅客鉄道(JR東日本)', code:'9020', domain:'jreast.co.jp', ind17:'運輸・物流', cat:'インフラ・運輸', sub:'鉄道', emp:48891, empNote:'(Baseconnect)', payBachelor:250000, payMaster:272000, avgAnnual:720, color:'#008803', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mitsubishi_elec', name:'三菱電機', code:'6503', domain:'mitsubishielectric.co.jp', ind17:'電機・精密', cat:'メーカー', sub:'総合電機/FA', emp:47353, empNote:'(Baseconnect)', payBachelor:265000, payMaster:289000, avgAnnual:850, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_aisin', name:'アイシン', code:'7259', domain:'aisin.com', ind17:'自動車・輸送機', cat:'メーカー', sub:'自動車部品', emp:40139, empNote:'(Baseconnect)', payBachelor:260000, payMaster:284000, avgAnnual:760, color:'#005bac', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mhi', name:'三菱重工業', code:'7011', domain:'mhi.com', ind17:'機械', cat:'メーカー', sub:'重工/防衛', emp:34665, empNote:'(Baseconnect)', payBachelor:265000, payMaster:291000, avgAnnual:910, color:'#003288', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_nippon_steel', name:'日本製鉄', code:'5401', domain:'nipponsteel.com', ind17:'鉄鋼・非鉄', cat:'メーカー', sub:'鉄鋼', emp:33355, empNote:'(Baseconnect)', payBachelor:265000, payMaster:289000, avgAnnual:880, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_hitachi', name:'日立製作所', code:'6501', domain:'hitachi.co.jp', ind17:'電機・精密', cat:'IT・通信', sub:'総合電機/IT', emp:33046, empNote:'単体(Baseconnect)', payBachelor:270000, payMaster:294000, avgAnnual:920, color:'#e60027', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_yamazaki', name:'山崎製パン', code:'2212', domain:'yamazakipan.co.jp', ind17:'食品', cat:'メーカー', sub:'食品', emp:32589, empNote:'(Baseconnect)', payBachelor:240000, payMaster:261000, avgAnnual:610, color:'#e50012', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_jrwest', name:'西日本旅客鉄道(JR西日本)', code:'9021', domain:'westjr.co.jp', ind17:'運輸・物流', cat:'インフラ・運輸', sub:'鉄道', emp:29271, empNote:'(Baseconnect)', payBachelor:245000, payMaster:267000, avgAnnual:670, color:'#0072bc', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_nissan', name:'日産自動車', code:'7201', domain:'nissan-global.com', ind17:'自動車・輸送機', cat:'メーカー', sub:'自動車', emp:27522, empNote:'(Baseconnect)', payBachelor:265000, payMaster:289000, avgAnnual:815, color:'#c3002f', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_softbank', name:'ソフトバンク', code:'9434', domain:'softbank.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'通信', emp:26053, empNote:'(Baseconnect)', payBachelor:265000, payMaster:288000, avgAnnual:830, color:'#a3a3a3', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_canon', name:'キヤノン', code:'7751', domain:'canon.jp', ind17:'電機・精密', cat:'メーカー', sub:'精密機器', emp:25970, empNote:'(Baseconnect)', payBachelor:265000, payMaster:289000, avgAnnual:820, color:'#cc0000', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_kyocera', name:'京セラ', code:'6971', domain:'kyocera.co.jp', ind17:'電機・精密', cat:'メーカー', sub:'電子部品', emp:15000, empNote:'単体(連結8.1万)', payBachelor:260000, payMaster:284000, avgAnnual:750, color:'#c00', added:false, stage:'watch', loc:'東京/全国', tags:["電子部品", "半導体素材", "アメーバ経営", "京都名門"], due:'', dueLabel:'', dueLv:'' },

    // ── 既存サンプル ──
    { id:'c_keyence', name:'キーエンス', code:'6861', domain:'keyence.co.jp', ind17:'電機・精密', cat:'メーカー', sub:'FA機器', emp:3000, empNote:'単体(連結1.0万)', payBachelor:280000, payMaster:300000, avgAnnual:2178, color:'#e67e22', added:false, stage:'watch', loc:'大阪', tags:["高年収日本一", "FA機器", "高収益", "営業・開発"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mercari', name:'メルカリ', code:'4385', domain:'mercari.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'Webサービス', emp:2200, empNote:'単体(連結3500)', payBachelor:350000, payMaster:380000, avgAnnual:980, color:'#e4405f', added:false, stage:'watch', loc:'東京/リモート', tags:["メガベンチャー", "フリマアプリ", "リモート可", "エンジニア"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_cyberagent', name:'サイバーエージェント', code:'4751', domain:'cyberagent.co.jp', ind17:'情報通信・サービス', cat:'広告・マスコミ', sub:'広告/メディア', emp:3200, empNote:'単体(連結7200)', payBachelor:420000, payMaster:450000, avgAnnual:780, color:'#16a085', added:false, stage:'watch', loc:'東京', tags:["AbemaTV", "ゲーム開発", "ネット広告首位", "若手抜擢"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_recruit', name:'リクルート', code:'6098', domain:'recruit.co.jp', ind17:'情報通信・サービス', cat:'広告・マスコミ', sub:'HR/メディア', emp:16000, empNote:'主要グループ', payBachelor:335000, payMaster:360000, avgAnnual:1130, color:'#0aa0d1', added:false, stage:'watch', loc:'東京', tags:["HR/メディア", "グローバル", "起業家輩出", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_fastretailing', name:'ファーストリテイリング', code:'9983', domain:'fastretailing.com', ind17:'小売', cat:'小売・サービス', sub:'アパレル', emp:5600, empNote:'単体(連結5.7万)', payBachelor:300000, payMaster:319000, avgAnnual:1150, color:'#c0392b', added:false, stage:'watch', loc:'東京/山口', tags:["ユニクロ", "グローバルSPA", "アパレル世界首位級", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_freee', name:'freee', code:'4478', domain:'freee.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS', emp:1200, empNote:'単体', payBachelor:350000, payMaster:375000, avgAnnual:840, color:'#2f6fed', added:false, stage:'watch', loc:'東京/リモート', tags:["クラウド会計", "SaaS", "FinTech", "リモート可"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_nttdata', name:'NTTデータ', code:'9613', domain:'nttdata.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer', emp:14000, empNote:'単体(連結19万)', payBachelor:280000, payMaster:305000, avgAnnual:880, color:'#1f6feb', added:false, stage:'watch', loc:'東京/全国', tags:["SIer首位", "NTTグループ", "社会インフラ", "安定"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_ntt', name:'日本電信電話(NTT)', code:'9432', domain:'group.ntt', ind17:'情報通信・サービス', cat:'IT・通信', sub:'通信', emp:1000, empNote:'持株(連結33万)', payBachelor:280000, payMaster:305000, avgAnnual:950, color:'#0072bc', added:false, stage:'watch', loc:'東京/全国', tags:["通信最大手", "インフラ", "安定", "IOWN"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_panasonic', name:'パナソニック', code:'6752', domain:'panasonic.com', ind17:'電機・精密', cat:'メーカー', sub:'電機', emp:13000, empNote:'単体(連結23万)', payBachelor:265000, payMaster:289000, avgAnnual:900, color:'#0033a0', added:false, stage:'watch', loc:'東京/全国', tags:["総合電機", "車載電池", "空質空調", "グローバル"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_dentsu', name:'電通', code:'4324', domain:'dentsu.co.jp', ind17:'情報通信・サービス', cat:'広告・マスコミ', sub:'広告・エンタメ・出版', emp:7000, empNote:'単体(連結6.5万)', payBachelor:300000, payMaster:320000, avgAnnual:1520, color:'#000000', added:false, stage:'watch', loc:'東京/全国', tags:["広告最大手", "マーケティング", "コンテンツ", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_dena', name:'DeNA', code:'2432', domain:'dena.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'Webサービス', emp:2500, empNote:'単体(連結3100)', payBachelor:380000, payMaster:400000, avgAnnual:810, color:'#008ac9', added:false, stage:'watch', loc:'東京/全国', tags:["Webサービス", "ゲーム", "ヘルスケア", "スポーツ"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_suntory', name:'サントリー', code:null, domain:'suntory.co.jp', ind17:'食品', cat:'メーカー', sub:'食品・飲料', emp:1500, empNote:'持株(連結4.1万)', payBachelor:280000, payMaster:304000, avgAnnual:1140, color:'#003b6f', added:false, stage:'watch', loc:'東京/全国', tags:["食品飲料首位級", "ビール洋酒", "やってみなはれ", "グローバル"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_rakuten', name:'楽天グループ', code:'4755', domain:'rakuten.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'ECサービス', emp:32000, empNote:'連結', payBachelor:300000, payMaster:320000, avgAnnual:790, color:'#bf0000', added:false, stage:'watch', loc:'東京/全国', tags:["楽天市場", "FinTech", "楽天エコシステム", "グローバル"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_ajinomoto', name:'味の素', code:'2802', domain:'ajinomoto.co.jp', ind17:'食品', cat:'メーカー', sub:'食品', emp:3500, empNote:'単体(連結3.4万)', payBachelor:280000, payMaster:304000, avgAnnual:1040, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["食品首位級", "アミノ酸技術", "半導体絶縁材(ABF)", "高年収"], due:'', dueLabel:'', dueLv:'' },

    // ── コンサルティング業界 ──
    { id:'c_accenture', name:'アクセンチュア', code:null, domain:'accenture.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'世界最大手 総合コンサルティングファーム', emp:23000, empNote:'日本(概数)', payBachelor:360000, payMaster:390000, avgAnnual:1050, color:'#a100ff', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "総合コンサル", "ITコンサル", "急成長"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_abeam', name:'アビームコンサルティング', code:null, domain:'abeam.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'日系発祥 総合コンサルティングファーム最大手', emp:9632, empNote:'連結', payBachelor:340000, payMaster:365000, avgAnnual:980, color:'#7a1f2b', added:false, stage:'watch', loc:'東京/全国', tags:["総合コンサル", "日系最大手", "グローバル展開"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_baycurrent', name:'ベイカレント', code:'6532', domain:'baycurrent.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'日系独立系 総合コンサルティングファーム(高収益)', emp:4200, empNote:'単体', payBachelor:416000, payMaster:430000, avgAnnual:1150, color:'#0b2e6e', added:false, stage:'watch', loc:'東京/全国', tags:["総合コンサル", "日系独立系", "高年収", "急成長"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mri', name:'三菱総合研究所', code:'3636', domain:'mri.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'三菱グループ総合シンクタンク・政策提言/経営コンサル', emp:1100, empNote:'単体(連結4500)', payBachelor:290000, payMaster:315000, avgAnnual:1180, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["三菱グループ", "シンクタンク", "政策提言", "経営コンサル"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_jri', name:'日本総合研究所(JRI)', code:null, domain:'jri.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'SMBCグループの中核総合シンクタンク・ITソリューション', emp:3000, empNote:'単体', payBachelor:280000, payMaster:304000, avgAnnual:1050, color:'#00913a', added:false, stage:'watch', loc:'東京/全国', tags:["シンクタンク", "メガバンク系列", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_dir', name:'大和総研(DIR)', code:null, domain:'dir.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'大和証券グループの総合シンクタンク・先端システム', emp:2500, empNote:'単体', payBachelor:285000, payMaster:308000, avgAnnual:1020, color:'#093', added:false, stage:'watch', loc:'東京/全国', tags:["シンクタンク", "大和証券グループ", "リサーチ"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_murc', name:'三菱UFJリサーチ&コンサルティング(MURC)', code:null, domain:'murc.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'MUFGグループ総合シンクタンク・経営コンサル', emp:1000, empNote:'単体', payBachelor:290000, payMaster:316000, avgAnnual:980, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["シンクタンク", "メガバンク系列", "経営コンサル"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_deloitte', name:'デロイト トーマツ コンサルティング', code:null, domain:'deloitte.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'BIG4最大手 総合経営戦略・DXコンサルティング', emp:4500, empNote:'日本', payBachelor:450000, payMaster:475000, avgAnnual:1150, color:'#86bc25', added:false, stage:'watch', loc:'東京/全国', tags:["BIG4", "総合コンサル", "経営戦略", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_pwc', name:'PwCコンサルティング', code:null, domain:'pwc.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'BIG4 総合コンサルティングファーム', emp:4000, empNote:'日本', payBachelor:450000, payMaster:475000, avgAnnual:1120, color:'#d04a02', added:false, stage:'watch', loc:'東京/全国', tags:["BIG4", "総合コンサル", "戦略コンサル", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_kpmg', name:'KPMGコンサルティング', code:null, domain:'kpmg.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'BIG4 総合コンサルティングファーム', emp:2000, empNote:'日本', payBachelor:450000, payMaster:475000, avgAnnual:1080, color:'#00338d', added:false, stage:'watch', loc:'東京/全国', tags:["BIG4", "総合コンサル", "リスク管理", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_ey', name:'EYストラテジー・アンド・コンサルティング', code:null, domain:'ey.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'BIG4 総合・戦略コンサルティングファーム', emp:3200, empNote:'日本', payBachelor:450000, payMaster:475000, avgAnnual:1100, color:'#2e2e38', added:false, stage:'watch', loc:'東京/全国', tags:["BIG4", "総合コンサル", "戦略コンサル", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_mckinsey', name:'マッキンゼー・アンド・カンパニー', code:null, domain:'mckinsey.com/jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'世界最高峰 経営戦略コンサルティングファーム(MBB)', emp:600, empNote:'日本', payBachelor:550000, payMaster:550000, avgAnnual:2100, color:'#051c2c', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "戦略コンサル", "MBB", "最高峰年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_bcg', name:'ボストン コンサルティング グループ(BCG)', code:null, domain:'bcg.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'世界最高峰 戦略コンサル(MBB)', emp:800, empNote:'日本(概数)', payBachelor:550000, payMaster:550000, avgAnnual:2050, color:'#177b57', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "戦略コンサル", "最高峰年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_bain', name:'ベイン・アンド・カンパニー', code:null, domain:'bain.com/ja', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'世界最高峰 経営戦略コンサルティングファーム(MBB)', emp:400, empNote:'日本', payBachelor:550000, payMaster:550000, avgAnnual:2000, color:'#c8102e', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "戦略コンサル", "MBB", "最高峰年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_kearney', name:'A.T.カーニー(Kearney)', code:null, domain:'kearney.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'世界大手 戦略コンサル(オペレーション/事業変革)', emp:350, empNote:'日本', payBachelor:500000, payMaster:520000, avgAnnual:1700, color:'#6b1f7c', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "戦略コンサル", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_rolandberger', name:'ローランド・ベルガー(Roland Berger)', code:null, domain:'rolandberger.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'欧州最大手 経営戦略コンサルファーム', emp:300, empNote:'日本', payBachelor:500000, payMaster:520000, avgAnnual:1650, color:'#009b3a', added:false, stage:'watch', loc:'東京/全国', tags:["外資名門", "戦略コンサル", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_funaisoken', name:'船井総研ホールディングス', code:'9757', domain:'funaisoken.co.jp', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'中堅・中小企業向け 総合経営コンサルティング最大手', emp:1400, empNote:'連結', payBachelor:250000, payMaster:274000, avgAnnual:740, color:'#e50012', added:false, stage:'watch', loc:'東京/全国', tags:["中小企業支援", "経営コンサル", "業種特化"], due:'', dueLabel:'', dueLv:'' },
        { id:'c_msol', name:'株式会社マネジメントソリューションズ', code:'7033', domain:'msols.com', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'PMO / 経営・ITマネジメントコンサルティング', emp:950, empNote:'連結', payBachelor:300000, payMaster:320000, avgAnnual:830, color:'#8b7bff', added:false, stage:'watch', loc:'東京', tags:['PMO', '東証プライム', 'コンサル', '急成長'], due:'', dueLabel:'', dueLv:'', popRank:180, popBadge:'TOP 300' },
    { id:'c_tcs', name:'日本タタ・コンサルタンシー・サービシズ', code:null, domain:'tcs.com/jp-ja', ind17:'情報通信・サービス', cat:'コンサル・シンクタンク', sub:'外資系ITコンサル・SIer (三菱商事合弁)', emp:4000, empNote:'国内(グローバル60万)', payBachelor:305000, payMaster:330000, avgAnnual:860, color:'#000000', added:false, stage:'watch', loc:'東京/全国', tags:["外資系", "ITコンサル", "三菱商事系", "グローバル", "日本TCS", "TCS", "Tata", "タタ"], due:'', dueLabel:'', dueLv:'', popRank:140, popBadge:'TOP 300' },

    // ── IT/SIer業界 ──
    { id:'c_fujitsu', name:'富士通', code:'6702', domain:'fujitsu.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:99000, empNote:'連結', payBachelor:270000, payMaster:295000, avgAnnual:890, color:'#ff0000', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_nec', name:'日本電気(NEC)', code:'6701', domain:'nec.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:21000, empNote:'単体(連結11万)', payBachelor:265000, payMaster:289000, avgAnnual:850, color:'#1414a0', added:false, stage:'watch', loc:'東京/全国', tags:["SIer/ITサービス", "生体認証", "宇宙・防衛", "社会インフラ"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_scsk', name:'SCSK', code:'9719', domain:'scsk.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:21015, empNote:'連結', payBachelor:265000, payMaster:289000, avgAnnual:800, color:'#009fe3', added:false, stage:'watch', loc:'東京/全国', tags:[], due:'', dueLabel:'', dueLv:'' },
    { id:'c_tis', name:'TIS', code:'3626', domain:'tis.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:6000, empNote:'単体(連結2.1万)', payBachelor:265000, payMaster:289000, avgAnnual:760, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["金融決済IT", "SIer", "基幹システム", "プライム上場"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_otsuka', name:'大塚商会', code:'4768', domain:'otsuka-shokai.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:9300, empNote:'単体', payBachelor:265000, payMaster:285000, avgAnnual:870, color:'#e50012', added:false, stage:'watch', loc:'東京/全国', tags:["ITソリューション", "OA機器", "システムインテグレータ", "高収益"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_ctc', name:'伊藤忠テクノソリューションズ(CTC)', code:'4739', domain:'ctc-g.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer/ITサービス', emp:4600, empNote:'単体(連結9000)', payBachelor:285000, payMaster:310000, avgAnnual:950, color:'#004098', added:false, stage:'watch', loc:'東京/全国', tags:["SIer", "マルチクラウド", "ネットワーク", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_hitachi_sol', name:'日立ソリューションズ', code:null, domain:'hitachi-solutions.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer(メーカー系)', emp:5000, empNote:'単体', payBachelor:230000, payMaster:249000, avgAnnual:800, color:'#e60027', added:false, stage:'watch', loc:'東京/全国', tags:["SIer", "セキュリティ", "モビリティDX"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_hitachi_sys', name:'日立システムズ', code:null, domain:'hitachi-systems.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SIer(メーカー系)', emp:10000, empNote:'単体', payBachelor:210000, payMaster:232000, avgAnnual:700, color:'#e60027', added:false, stage:'watch', loc:'東京/全国', tags:["SIer", "ITインフラ運用", "クラウドソリューション"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_oracle', name:'日本オラクル', code:'4716', domain:'oracle.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'ソフトウェア(外資)', emp:2600, empNote:'単体', payBachelor:350000, payMaster:374000, avgAnnual:1120, color:'#c74634', added:false, stage:'watch', loc:'東京/全国', tags:["データベース", "クラウドERP", "外資系", "高年収"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_gmo', name:'GMOインターネットグループ', code:'9449', domain:'gmo.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'Webサービス/インフラ', emp:7500, empNote:'連結', payBachelor:260000, payMaster:279000, avgAnnual:830, color:'#009fce', added:false, stage:'watch', loc:'東京/全国', tags:["ネットインフラ", "ドメイン・ホスティング", "FinTech"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_shift', name:'SHIFT', code:'3697', domain:'shiftinc.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'ソフトウェアテスト', emp:12000, empNote:'連結', payBachelor:280000, payMaster:300000, avgAnnual:620, color:'#0b8a3e', added:false, stage:'watch', loc:'東京/全国', tags:["ソフトウェアテスト", "品質保証DX", "超急成長"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_rakus', name:'ラクス', code:'3923', domain:'rakus.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS', emp:2600, empNote:'連結', payBachelor:280000, payMaster:301000, avgAnnual:650, color:'#e8380d', added:false, stage:'watch', loc:'東京/全国', tags:["楽楽精算", "SaaS", "バックオフィスDX", "高収益"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_unlisted_docomo_smtb_netbk', name:'ドコモSMTBネット銀行', code:null, domain:'netbk.co.jp', ind17:'金融（除く銀行）', cat:'金融', sub:'ネット銀行・BaaS・FinTech', emp:1200, empNote:'単体', payBachelor:400000, payMaster:420000, avgAnnual:920, color:'#003b8e', added:false, stage:'watch', loc:'東京', tags:['ネット銀行', 'FinTech', 'BaaS', 'NTTドコモ系', '高初任給', '旧住信SBI'], due:'', dueLabel:'', dueLv:'', popRank:145, popBadge:'注目企業' },
    { id:'c_unlisted_fujifilm_bi', name:'富士フイルムビジネスイノベーション', code:null, domain:'fujifilm.com', ind17:'情報通信・サービスその他', cat:'IT・通信', sub:'ドキュメントDX・複合機・クラウド・メーカー系SIer', emp:6500, empNote:'単体(連結3.6万)', payBachelor:255000, payMaster:279000, avgAnnual:750, color:'#009a44', added:false, stage:'watch', loc:'東京/全国', tags:['メーカー系SIer', '旧富士ゼロックス', '富士フイルム系', 'ドキュメントDX'], due:'', dueLabel:'', dueLv:'', popRank:210, popBadge:'大手優良' },
    { id:'c_unlisted_canon_its', name:'キヤノンITソリューションズ', code:null, domain:'canon-its.co.jp', ind17:'情報通信・サービスその他', cat:'IT・通信', sub:'EDI・セキュリティ・製造/金融SIer', emp:4200, empNote:'単体', payBachelor:250000, payMaster:270000, avgAnnual:760, color:'#cc0000', added:false, stage:'watch', loc:'東京', tags:['メーカー系SIer', 'キヤノン系', 'サイバーセキュリティ', 'EDI首位'], due:'', dueLabel:'', dueLv:'', popRank:470, popBadge:'大手優良' },
    { id:'c_sansan', name:'Sansan', code:'4443', domain:'sansan.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS', emp:1600, empNote:'単体', payBachelor:330000, payMaster:350000, avgAnnual:750, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["名刺管理", "Bill One", "営業DX", "SaaS"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_moneyforward', name:'マネーフォワード', code:'3994', domain:'moneyforward.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS/FinTech', emp:2400, empNote:'単体', payBachelor:320000, payMaster:340000, avgAnnual:720, color:'#2f80ed', added:false, stage:'watch', loc:'東京/全国', tags:["マネーフォワードME", "クラウド会計", "FinTech", "SaaS"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_lycorp', name:'LINEヤフー', code:'4689', domain:'lycorp.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'Webサービス', emp:11500, empNote:'単体(連結2.8万)', payBachelor:300000, payMaster:325000, avgAnnual:820, color:'#06c755', added:false, stage:'watch', loc:'東京/全国', tags:["LINE", "Yahoo! JAPAN", "PayPay", "国内最大トラフィック"], due:'', dueLabel:'', dueLv:'' },

    // ── マイページ連携・追加公式企業（22社） ──
    {"id":"c_unlisted_bdx","name":"B&DX株式会社","code":null,"domain":"bdx.co.jp","cat":"コンサル・シンクタンク","ind17":"情報・通信業","sub":"総合・DX・ビジネストランスフォーメーションコンサルティング","emp":130,"empNote":"単体","payBachelor":350000,"payMaster":375000,"avgAnnual":1050,"color":"#0a2540","added":false,"stage":"watch","stars":3,"scale":"新進気鋭ブティック","market":"非上場","tags":["DXコンサル","事業変革","ブティック","高年収"],"loc":"東京","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_nttdocomo","name":"株式会社NTTドコモ","code":null,"domain":"docomo.ne.jp","cat":"IT・通信","ind17":"情報・通信業","sub":"移動通信・モバイルサービス・スマートライフ事業","emp":8500,"empNote":"単体(連結2.7万)","payBachelor":265000,"payMaster":285000,"avgAnnual":875,"color":"#cc0033","added":false,"stage":"watch","stars":4,"scale":"大手インフラ","market":"非上場","tags":["5G/通信","スマートライフ","NTTグループ","インフラ"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_jera","name":"株式会社JERA","code":null,"domain":"jera.co.jp","cat":"インフラ・運輸","ind17":"電気・ガス業","sub":"グローバルエネルギー・国内最大手発電(東電×中電合弁)","emp":4800,"empNote":"連結","payBachelor":260000,"payMaster":280000,"avgAnnual":920,"color":"#004f9f","added":false,"stage":"watch","stars":4,"scale":"大手インフラ","market":"非上場","tags":["国内最大発電","グローバルLNG","脱炭素","インフラ"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_nippon_steel_eng","name":"日鉄エンジニアリング株式会社","code":null,"domain":"eng.nipponsteel.com","cat":"メーカー","ind17":"機械","sub":"製鉄・環境エネルギー・海洋・総合エンジニアリング","emp":3200,"empNote":"単体","payBachelor":255000,"payMaster":275000,"avgAnnual":950,"color":"#002d62","added":false,"stage":"watch","stars":3,"scale":"非上場名門","market":"非上場","tags":["総合エンジ","日本製鉄グループ","プラント","グローバル"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_2130","name":"株式会社メンバーズ","code":"2130","domain":"members.co.jp","cat":"IT・通信","ind17":"サービス業","sub":"デジタルビジネス運用・Web総合支援・ソーシャルDX","emp":2500,"empNote":"単体","payBachelor":245000,"payMaster":260000,"avgAnnual":580,"color":"#009688","added":false,"stage":"watch","stars":3,"scale":"プライム上場","market":"プライム上場","tags":["デジタルマーケ","DXクリエイター","フルリモート推進"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_5036","name":"日本ビジネスシステムズ株式会社","code":"5036","domain":"jbs.co.jp","cat":"IT・通信","ind17":"情報・通信業","sub":"クラウドインテグレーション(Microsoft最上位パートナー)","emp":2600,"empNote":"単体","payBachelor":260000,"payMaster":280000,"avgAnnual":710,"color":"#0078d4","added":false,"stage":"watch","stars":3,"scale":"スタンダード上場","market":"スタンダード上場","tags":["Microsoft最上位","クラウドSIer","DX推進"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_aflac","name":"アフラック生命保険株式会社","code":null,"domain":"aflac.co.jp","cat":"金融","ind17":"保険業","sub":"生命保険(がん保険・医療保険国内最大手)","emp":5200,"empNote":"日本単体","payBachelor":260000,"payMaster":280000,"avgAnnual":850,"color":"#00a3e0","added":false,"stage":"watch","stars":4,"scale":"外資系","market":"外資系","tags":["がん保険首位","外資系生保","ホワイト企業","DX生保"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_jsol","name":"株式会社JSOL","code":null,"domain":"jsol.co.jp","cat":"IT・通信","ind17":"情報・通信業","sub":"ITコンサルティング・ERP・CAE(NTTデータ×日本総研)","emp":1400,"empNote":"単体","payBachelor":260000,"payMaster":280000,"avgAnnual":820,"color":"#d9232e","added":false,"stage":"watch","stars":3,"scale":"非上場名門","market":"非上場","tags":["NTTデータ系列","日本総研系列","ERP/製造CAE","ITコンサル"],"loc":"東京/大阪","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_nestle_jp","name":"ネスレ日本株式会社","code":null,"domain":"nestle.co.jp","cat":"メーカー","ind17":"食料品","sub":"世界最大手食品飲料メーカー日本法人(ネスカフェ・キットカット)","emp":2300,"empNote":"日本単体","payBachelor":255000,"payMaster":275000,"avgAnnual":840,"color":"#1e5b97","added":false,"stage":"watch","stars":4,"scale":"外資系","market":"外資系","tags":["スイス外資","世界最大食品","キットカット","高待遇"],"loc":"神戸/東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_kpmg_azsa","name":"有限責任 あずさ監査法人","code":null,"domain":"kpmg.com/jp","cat":"コンサル・シンクタンク","ind17":"サービス業","sub":"BIG4監査法人最大手(監査・保証業務・財務アドバイザリー)","emp":6500,"empNote":"全体","payBachelor":335000,"payMaster":350000,"avgAnnual":920,"color":"#00338d","added":false,"stage":"watch","stars":4,"scale":"BIG4名門","market":"非上場","tags":["BIG4","監査法人首位","KPMG","会計・ガバナンス"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_mumss","name":"三菱UFJモルガン・スタンレー証券株式会社","code":null,"domain":"sc.mufg.jp","cat":"金融","ind17":"証券、商品先物取引業","sub":"総合証券(MUFG×モルガン・スタンレー合弁大手)","emp":5100,"empNote":"単体","payBachelor":285000,"payMaster":305000,"avgAnnual":1020,"color":"#e60012","added":false,"stage":"watch","stars":4,"scale":"大手証券","market":"非上場","tags":["5大証券","MUFG系列","投資銀行","高年収"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_mufg_it","name":"三菱UFJインフォメーションテクノロジー株式会社","code":null,"domain":"it.mufg.jp","cat":"IT・通信","ind17":"情報・通信業","sub":"メガバンク中核金融IT・フィンテック(MUFGグループ)","emp":3300,"empNote":"単体","payBachelor":260000,"payMaster":280000,"avgAnnual":810,"color":"#e60012","added":false,"stage":"watch","stars":3,"scale":"大手金融IT","market":"非上場","tags":["ユーザー系SIer首位","MUFG中核","金融基幹IT","高安定"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_deloitte_cyber","name":"デロイト トーマツ サイバー合同会社","code":null,"domain":"deloitte.com/jp","cat":"コンサル・シンクタンク","ind17":"サービス業","sub":"サイバーセキュリティ戦略・インシデント対応・リスクコンサル","emp":350,"empNote":"単体","payBachelor":365000,"payMaster":385000,"avgAnnual":980,"color":"#86bc25","added":false,"stage":"watch","stars":4,"scale":"BIG4名門","market":"非上場","tags":["デロイト系列","サイバーセキュリティ","BIG4","高年収"],"loc":"東京","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_deloitte_ra","name":"合同会社デロイト トーマツ (リスクアドバイザリー)","code":null,"domain":"deloitte.com/jp","cat":"コンサル・シンクタンク","ind17":"サービス業","sub":"企業統治・規制対応・内部統制・ESGリスクコンサルティング","emp":1800,"empNote":"単体","payBachelor":365000,"payMaster":385000,"avgAnnual":980,"color":"#86bc25","added":false,"stage":"watch","stars":4,"scale":"BIG4名門","market":"非上場","tags":["デロイト系列","リスクアドバイザリー","内部統制","BIG4"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_nttdata_ft","name":"株式会社NTTデータ フィナンシャルテクノロジー","code":null,"domain":"nttdata-ft.com","cat":"IT・通信","ind17":"情報・通信業","sub":"金融系ミッションクリティカル基幹システム・先端フィンテック","emp":1900,"empNote":"単体","payBachelor":255000,"payMaster":275000,"avgAnnual":780,"color":"#004098","added":false,"stage":"watch","stars":3,"scale":"NTT系列","market":"非上場","tags":["NTTデータ金融中核","決済インフラ","FinTech"],"loc":"東京","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_abeam_sys","name":"アビームシステムズ株式会社","code":null,"domain":"abeam-s.com","cat":"IT・通信","ind17":"情報・通信業","sub":"エンタープライズIT・SAP・業務改革(アビーム×ブラザー)","emp":1200,"empNote":"単体","payBachelor":245000,"payMaster":265000,"avgAnnual":720,"color":"#ed1a3b","added":false,"stage":"watch","stars":3,"scale":"大手IT","market":"非上場","tags":["アビーム系列","ブラザー工業系列","SAP導入","安定性"],"loc":"名古屋/東京","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_persol_ct","name":"パーソルクロステクノロジー株式会社","code":null,"domain":"persol-xtech.co.jp","cat":"IT・通信","ind17":"サービス業","sub":"機電・IT・先端テクノロジー受託開発＆エンジニアリング","emp":5800,"empNote":"単体","payBachelor":240000,"payMaster":255000,"avgAnnual":620,"color":"#f39800","added":false,"stage":"watch","stars":3,"scale":"パーソル系列","market":"非上場","tags":["パーソル技術中核","メカ・エレ・IT","モビリティ開発"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_persol_bpd","name":"パーソルビジネスプロセスデザイン株式会社","code":null,"domain":"persol-bd.co.jp","cat":"小売・サービス","ind17":"サービス業","sub":"BPO・セールスマーケティング・DX業務オペレーション設計","emp":2800,"empNote":"単体","payBachelor":235000,"payMaster":250000,"avgAnnual":560,"color":"#f39800","added":false,"stage":"watch","stars":3,"scale":"パーソル系列","market":"非上場","tags":["BPO大手","パーソル系列","業務プロセス設計","DX推進"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_nihon_keiei","name":"株式会社日本経営","code":null,"domain":"nkgr.co.jp","cat":"コンサル・シンクタンク","ind17":"サービス業","sub":"医療機関・病院経営・福祉・ヘルスケア総合コンサル国内首位","emp":600,"empNote":"グループ全体","payBachelor":270000,"payMaster":290000,"avgAnnual":750,"color":"#005bac","added":false,"stage":"watch","stars":3,"scale":"業界特化首位","market":"非上場","tags":["医療経営コンサル","ヘルスケア首位","地域医療DX"],"loc":"大阪/東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_louisvuitton_jp","name":"ルイ・ヴィトン ジャパン株式会社","code":null,"domain":"louisvuitton.com","cat":"小売・サービス","ind17":"商業（卸売業、小売業）","sub":"世界的ラグジュアリーブランド日本法人(LVMHグループ首位)","emp":2000,"empNote":"日本単体","payBachelor":260000,"payMaster":275000,"avgAnnual":780,"color":"#6f523b","added":false,"stage":"watch","stars":4,"scale":"外資トップ","market":"外資系","tags":["LVMHグループ","最高峰ラグジュアリー","外資名門","ホスピタリティ"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_unlisted_bebit","name":"株式会社ビービット","code":null,"domain":"bebit.co.jp","cat":"コンサル・シンクタンク","ind17":"サービス業","sub":"UXデザインコンサルティング・SaaS(USERGRAM)パイオニア","emp":180,"empNote":"単体","payBachelor":300000,"payMaster":320000,"avgAnnual":780,"color":"#e4002b","added":false,"stage":"watch","stars":3,"scale":"UX名門ブティック","market":"非上場","tags":["UXコンサル","顧客体験デザイン","東大生人気ブティック","SaaS"],"loc":"東京","due":"","dueLabel":"","dueLv":"","hasLogo":true},
    {"id":"c_rakuten_bu","name":"楽天グループ (ビジネス職・サマーインターン)","code":"4755","domain":"rakuten.co.jp","cat":"IT・通信","ind17":"情報・通信業","sub":"Eコマース・フィンテック・通信(ビジネス職総合選考)","emp":17000,"empNote":"単体(連結3.2万)","payBachelor":310000,"payMaster":330000,"avgAnnual":797,"color":"#bf0000","added":false,"stage":"watch","stars":4,"scale":"TOPIX100","market":"プライム上場","tags":["メガベンチャー","英語公用語","サマーインターン","総合職"],"loc":"東京/全国","due":"","dueLabel":"","dueLv":"","hasLogo":true}
  ];

  const UNWANTED_MYPAGE_ACC_IDS = new Set(['c_6562', 'c_387A', 'c_441A']);

  const ALIAS_TO_MASTER_MAP = {
    'c_custom_acc_87': 'c_meiji_yasuda',
    'c_custom_acc_57': 'c_unlisted_nttdocomo',
    'c_custom_acc_53': 'c_unlisted_bdx',
    'c_custom_acc_98': 'c_rakuten_bu',
    'c_custom_acc_102': 'c_funaisoken',
    'c_custom_acc_100': 'c_unlisted_bebit',
    'c_custom_acc_99': 'c_unlisted_louisvuitton_jp',
    'c_custom_acc_96': 'c_unlisted_deloitte_ra',
    'c_custom_acc_88': 'c_unlisted_persol_bpd',
    'c_custom_acc_84': 'c_unlisted_jsol',
    'c_custom_acc_81': 'c_5036',
    'c_custom_acc_77': 'c_2130',
    'c_custom_acc_75': 'c_unlisted_jera',
    'c_custom_acc_74': 'c_unlisted_nihon_keiei',
    'c_custom_acc_65': 'c_4901',
    'c_custom_acc_47': 'c_unlisted_kpmg_azsa',
    'c_custom_acc_45': 'c_unlisted_nestle_jp',
    'c_custom_acc_44': 'c_nttdata',
    'c_custom_acc_28': 'c_unlisted_abeam_sys',
    'c_custom_acc_25': 'c_unlisted_persol_ct',
    'c_custom_acc_24': 'c_unlisted_mufg_it',
    'c_custom_acc_17': 'c_7532',
    'c_custom_acc_16': 'c_tcs',
    'c_custom_acc_7': 'c_unlisted_deloitte_cyber',
    'c_custom_acc_1': 'c_pwc'
  };

  function getFullCatalog() {
    let full = (window.OFFICIAL_CATALOG_1500 && window.OFFICIAL_CATALOG_1500.length)
      ? window.OFFICIAL_CATALOG_1500
      : DEFAULT_CATALOG;
    if (window.OFFICIAL_CATALOG_1500 && window.OFFICIAL_CATALOG_1500.length) {
      const idSet = new Set(window.OFFICIAL_CATALOG_1500.map(x => x.id));
      DEFAULT_CATALOG.forEach(dc => {
        if (!idSet.has(dc.id)) {
          window.OFFICIAL_CATALOG_1500.push(dc);
          idSet.add(dc.id);
        }
      });
      full = window.OFFICIAL_CATALOG_1500;
    }
    return full;
  }

  const DEFAULT_TASKS = [
    { id: 't_spi', text: 'SPI・玉手箱のWEBテスト問題集を1周解く', done: false, tag: 'テスト対策' },
    { id: 't_es_pr', text: '自己PR・ガクチカ（学生時代に力を入れたこと）の骨子をまとめる', done: false, tag: 'ES作成' },
    { id: 't_photo', text: '就活用の証明写真をデータ付きで撮影する', done: false, tag: '準備' },
    { id: 't_ob', text: '第一志望群の企業のOB/OG訪問を申し込む', done: false, tag: '企業研究' },
    { id: 't_suit', text: '面接用スーツ・WEB面接用の照明/マイク動作確認', done: false, tag: '準備' },
  ];

  // ---- 選考ステージ定義 ----
  const stages = [
    { key:'rejected',label:'お祈り/落選', color:'#ef4444', cls:'s-rejected',desc:'選考終了・お祈り' },
    { key:'entry',  label:'エントリー',   color:'#4c8bf5', cls:'s-entry',  desc:'マイページ登録・応募準備' },
    { key:'es',     label:'ES/Webテスト', color:'#8b7bff', cls:'s-es',     desc:'書類選考・SPI/適性受検' },
    { key:'first',  label:'一次面接',     color:'#4fd8e8', cls:'s-first',  desc:'人事/若手面接・GD' },
    { key:'final',  label:'二次・最終面接',color:'#ff7eb6',cls:'s-final',  desc:'役員・社長面接' },
    { key:'offer',  label:'内々定/内定',  color:'#4ee39a', cls:'s-offer',  desc:'承諾検討・内定者フォロー' },
  ];
  const stageMap = Object.fromEntries(stages.map(s => [s.key, s]));

  // ---- LocalStorage 管理 ----
    const SHOWCASE_DATA = {
  "companies": [
    {
      "id": "c_toyota",
      "name": "トヨタ自動車",
      "code": "7203",
      "domain": "toyota.jp",
      "ind17": "自動車・輸送機",
      "cat": "メーカー",
      "sub": "自動車",
      "emp": 73133,
      "payBachelor": 275000,
      "payMaster": 299000,
      "avgAnnual": 895,
      "color": "#c0392b",
      "added": true,
      "stage": "offer",
      "loc": "愛知/東京",
      "tags": [
        "内々定",
        "グローバル",
        "本命"
      ],
      "due": "2026-06-30",
      "dueLabel": "内々定面談・承諾回答",
      "dueLv": "soon"
    },
    {
      "id": "c_mitsubishi_corp",
      "name": "三菱商事",
      "code": "8058",
      "domain": "mitsubishicorp.com",
      "ind17": "商社・卸売",
      "cat": "商社",
      "sub": "総合商社",
      "emp": 5448,
      "payBachelor": 340000,
      "payMaster": 380000,
      "avgAnnual": 2112,
      "color": "#8e44ad",
      "added": true,
      "stage": "final",
      "loc": "東京(丸の内)",
      "tags": [
        "総合商社",
        "最終面接",
        "海外展開"
      ],
      "due": "2026-06-18",
      "dueLabel": "役員最終面接(対面)",
      "dueLv": "soon"
    },
    {
      "id": "c_deloitte",
      "name": "デロイト トーマツ コンサルティング",
      "code": null,
      "domain": "deloitte.com",
      "ind17": "情報通信・サービスその他",
      "cat": "コンサル・シンクタンク",
      "sub": "総合経営戦略・DXコンサルティング",
      "emp": 5000,
      "payBachelor": 450000,
      "payMaster": 470000,
      "avgAnnual": 1050,
      "color": "#27ae60",
      "added": true,
      "stage": "final",
      "loc": "東京(丸の内)",
      "tags": [
        "BIG4",
        "戦略コンサル",
        "二次面接"
      ],
      "due": "2026-06-12",
      "dueLabel": "ケース二次面接",
      "dueLv": "soon"
    },
    {
      "id": "c_sony",
      "name": "ソニーグループ",
      "code": "6758",
      "domain": "sony.com",
      "ind17": "電機・精密",
      "cat": "広告・マスコミ",
      "sub": "総合電機・エンタメ・半導体",
      "emp": 5448,
      "payBachelor": 333000,
      "payMaster": 360000,
      "avgAnnual": 1100,
      "color": "#2c3e50",
      "added": true,
      "stage": "first",
      "loc": "東京(品川)",
      "tags": [
        "エンタメ",
        "技術",
        "一次面接"
      ],
      "due": "2026-06-08",
      "dueLabel": "現場マネージャー面接",
      "dueLv": "soon"
    },
    {
      "id": "c_nttdata",
      "name": "NTTデータ",
      "code": "9613",
      "domain": "nttdata.com",
      "ind17": "情報通信・サービスその他",
      "cat": "IT・通信",
      "sub": "大規模SIer / ITコンサル",
      "emp": 14000,
      "payBachelor": 260000,
      "payMaster": 285000,
      "avgAnnual": 905,
      "color": "#0984e3",
      "added": true,
      "stage": "es",
      "loc": "東京(豊洲)",
      "tags": [
        "SIer首位",
        "公共・金融IT",
        "書類選考中"
      ],
      "due": "2026-05-31",
      "dueLabel": "本選考ES＆適性検査",
      "dueLv": "soon"
    },
    {
      "id": "c_unlisted_rms",
      "name": "リクルートマネジメントソリューションズ",
      "code": null,
      "domain": "recruit-ms.co.jp",
      "ind17": "情報通信・サービスその他",
      "cat": "コンサル・シンクタンク",
      "sub": "リクルートグループの組織人事コンサル・SPI開発",
      "emp": 700,
      "payBachelor": 320000,
      "payMaster": 343000,
      "avgAnnual": 1060,
      "color": "#0984e3",
      "added": true,
      "stage": "first",
      "loc": "東京",
      "tags": [
        "組織人事",
        "高年収",
        "一次面接"
      ],
      "due": "2026-05-28",
      "dueLabel": "一次面接（オンライン）",
      "dueLv": "soon"
    },
    {
      "id": "c_tcs",
      "name": "日本タタ・コンサルタンシー・サービシズ",
      "code": null,
      "domain": "tcs.com",
      "ind17": "情報通信・サービスその他",
      "cat": "コンサル・シンクタンク",
      "sub": "外資系ITコンサル・SIer (三菱商事合弁)",
      "emp": 4000,
      "payBachelor": 305000,
      "payMaster": 330000,
      "avgAnnual": 860,
      "color": "#00b894",
      "added": true,
      "stage": "es",
      "loc": "東京",
      "tags": [
        "外資系IT",
        "三菱商事系",
        "書類選考中"
      ],
      "due": "2026-05-22",
      "dueLabel": "ES提出締切",
      "dueLv": "soon"
    },
    {
      "id": "c_smbc",
      "name": "三井住友銀行",
      "code": "8316",
      "domain": "smbc.co.jp",
      "ind17": "金融・証券・保険",
      "cat": "金融",
      "sub": "メガバンク",
      "emp": 28000,
      "payBachelor": 255000,
      "payMaster": 275000,
      "avgAnnual": 880,
      "color": "#16a085",
      "added": true,
      "stage": "entry",
      "loc": "東京(丸の内)",
      "tags": [
        "メガバンク",
        "志望検討",
        "リクルーター面談"
      ],
      "due": "2026-06-05",
      "dueLabel": "インターン参加者座談会",
      "dueLv": "soon"
    },
    {
      "id": "c_keyence",
      "name": "キーエンス",
      "code": "6861",
      "domain": "keyence.co.jp",
      "ind17": "電機・精密",
      "cat": "メーカー",
      "sub": "ファクトリーオートメーション・精密センサ",
      "emp": 3000,
      "payBachelor": 350000,
      "payMaster": 370000,
      "avgAnnual": 2279,
      "color": "#e74c3c",
      "added": true,
      "stage": "rejected",
      "loc": "大阪/東京",
      "tags": [
        "選考終了",
        "お祈り"
      ],
      "due": "",
      "dueLabel": "選考終了",
      "dueLv": ""
    },
    {
      "id": "c_8766",
      "name": "東京海上日動火災保険",
      "code": "8766",
      "domain": "tokiomarine-nichido.co.jp",
      "ind17": "金融・証券・保険",
      "cat": "金融",
      "sub": "損害保険首位",
      "emp": 17000,
      "payBachelor": 260000,
      "payMaster": 285000,
      "avgAnnual": 1450,
      "color": "#2980b9",
      "added": true,
      "stage": "final",
      "loc": "東京(丸の内)",
      "tags": [
        "損保トップ",
        "OB訪問済",
        "二次面接"
      ],
      "due": "2026-06-15",
      "dueLabel": "二次人事面接",
      "dueLv": "soon"
    },
    {
      "id": "c_itochu",
      "name": "伊藤忠商事",
      "code": "8001",
      "domain": "itochu.co.jp",
      "ind17": "商社・卸売",
      "cat": "商社",
      "sub": "総合商社首位級",
      "emp": 4200,
      "payBachelor": 325000,
      "payMaster": 365000,
      "avgAnnual": 1804,
      "color": "#d35400",
      "added": true,
      "stage": "entry",
      "loc": "東京(青山)",
      "tags": [
        "総合商社",
        "非資源No1",
        "エントリー検討"
      ],
      "due": "2026-06-01",
      "dueLabel": "本選考プレエントリー開始",
      "dueLv": "soon"
    },
    {
      "id": "c_nri",
      "name": "野村総合研究所",
      "code": "4307",
      "domain": "nri.co.jp",
      "ind17": "情報通信・サービスその他",
      "cat": "コンサル・シンクタンク",
      "sub": "国内最大手シンクタンク・ITソリューション",
      "emp": 6700,
      "payBachelor": 280000,
      "payMaster": 305000,
      "avgAnnual": 1242,
      "color": "#34495e",
      "added": true,
      "stage": "first",
      "loc": "東京(大手町)",
      "tags": [
        "NRI",
        "コンサル最高峰",
        "一次面接"
      ],
      "due": "2026-06-07",
      "dueLabel": "現場コンサルタント面接",
      "dueLv": "soon"
    },
    {
      "id": "c_mercari",
      "name": "メルカリ",
      "code": "4385",
      "domain": "about.mercari.com",
      "ind17": "情報通信・サービスその他",
      "cat": "IT・通信",
      "sub": "CtoCマーケットプレイス・フィンテック",
      "emp": 2000,
      "payBachelor": 380000,
      "payMaster": 410000,
      "avgAnnual": 920,
      "color": "#e84393",
      "added": true,
      "stage": "es",
      "loc": "東京(六本木)",
      "tags": [
        "メガベンチャー",
        "プロダクト思考",
        "ES提出済"
      ],
      "due": "2026-05-25",
      "dueLabel": "コーディングテスト受検",
      "dueLv": "soon"
    },
    {
      "id": "c_7974",
      "name": "任天堂",
      "code": "7974",
      "domain": "nintendo.co.jp",
      "ind17": "その他製品",
      "cat": "メーカー",
      "sub": "家庭用ゲーム機・ソフト世界的大手",
      "emp": 2800,
      "payBachelor": 260000,
      "payMaster": 277000,
      "avgAnnual": 988,
      "color": "#e74c3c",
      "added": true,
      "stage": "entry",
      "loc": "京都/東京",
      "tags": [
        "独創性",
        "グローバルIP",
        "ES執筆中"
      ],
      "due": "2026-06-03",
      "dueLabel": "クリエイティブES提出",
      "dueLv": "soon"
    }
  ],
  "selectionEvents": [
    {
      "id": "ev_demo_1",
      "companyId": "c_unlisted_rms",
      "type": "es",
      "title": "本選考 ES提出",
      "datetime": "2026-05-18 12:00",
      "due": "2026-05-18 12:00",
      "status": "completed",
      "format": "マイページ提出",
      "notes": "マイページから提出完了（ガクチカ・志望動機）"
    },
    {
      "id": "ev_demo_2",
      "companyId": "c_unlisted_rms",
      "type": "test",
      "title": "WEBテスト（SPI受検）",
      "datetime": "2026-05-20 18:00",
      "due": "2026-05-20 18:00",
      "status": "completed",
      "format": "テストセンター",
      "notes": "テストセンター受検済、言語・非言語手応えあり"
    },
    {
      "id": "ev_demo_3",
      "companyId": "c_tcs",
      "type": "es",
      "title": "エントリーシート提出",
      "datetime": "2026-05-22 23:59",
      "due": "2026-05-22 23:59",
      "status": "completed",
      "format": "マイページ",
      "notes": "志望動機300字・自己PR400字"
    },
    {
      "id": "ev_demo_4",
      "companyId": "c_mercari",
      "type": "test",
      "title": "技術オンラインテスト",
      "datetime": "2026-05-25 20:00",
      "due": "2026-05-25 20:00",
      "status": "upcoming",
      "format": "オンライン",
      "notes": "アルゴリズム・SQL基礎の確認"
    },
    {
      "id": "ev_demo_5",
      "companyId": "c_deloitte",
      "type": "es",
      "title": "春採用 本選考ES・適性検査",
      "datetime": "2026-05-25 17:00",
      "due": "2026-05-25 17:00",
      "status": "completed",
      "format": "TG-WEB",
      "notes": "TG-WEBテスト受検も同日時まで"
    },
    {
      "id": "ev_demo_6",
      "companyId": "c_unlisted_rms",
      "type": "interview_1",
      "title": "一次面接（オンライン）",
      "datetime": "2026-05-28 15:00",
      "due": "2026-05-28 15:00",
      "status": "upcoming",
      "format": "Zoom",
      "notes": "Zoomリンクは前日にメール送付。学生時代に注力したこと深掘り対策"
    },
    {
      "id": "ev_demo_7",
      "companyId": "c_nttdata",
      "type": "es",
      "title": "本選考ES提出締切",
      "datetime": "2026-05-31 23:59",
      "due": "2026-05-31 23:59",
      "status": "upcoming",
      "format": "マイページ",
      "notes": "「ITを使って社会インフラを変革する提案」400字"
    },
    {
      "id": "ev_demo_8",
      "companyId": "c_7974",
      "type": "es",
      "title": "クリエイティブES提出",
      "datetime": "2026-06-03 17:00",
      "due": "2026-06-03 17:00",
      "status": "upcoming",
      "format": "郵送/WEB",
      "notes": "「自分をゲームのキャラクターに例えると」300字"
    },
    {
      "id": "ev_demo_9",
      "companyId": "c_smbc",
      "type": "interview_1",
      "title": "リクルーター個別面談",
      "datetime": "2026-06-05 14:00",
      "due": "2026-06-05 14:00",
      "status": "upcoming",
      "format": "対面(東京本店)",
      "notes": "金融業界を志望する動機とキャリアプランの壁打ち"
    },
    {
      "id": "ev_demo_10",
      "companyId": "c_nri",
      "type": "interview_1",
      "title": "一次面接（現場コンサル）",
      "datetime": "2026-06-07 10:00",
      "due": "2026-06-07 10:00",
      "status": "upcoming",
      "format": "オンライン",
      "notes": "論理的思考力と仮説構築力のチェック"
    },
    {
      "id": "ev_demo_11",
      "companyId": "c_sony",
      "type": "interview_1",
      "title": "現場エンジニア一次面接",
      "datetime": "2026-06-08 16:30",
      "due": "2026-06-08 16:30",
      "status": "upcoming",
      "format": "オンライン",
      "notes": "研究テーマ概要とソニーの事業とのシナジー"
    },
    {
      "id": "ev_demo_12",
      "companyId": "c_keyence",
      "type": "interview_1",
      "title": "説得面接（一次選考）",
      "datetime": "2026-06-10 13:00",
      "due": "2026-06-10 13:00",
      "status": "upcoming",
      "format": "オンライン",
      "notes": "20秒自己PR＋「なぜその選択をしたか」を3分で説得"
    },
    {
      "id": "ev_demo_13",
      "companyId": "c_deloitte",
      "type": "interview_2",
      "title": "ケース二次面接",
      "datetime": "2026-06-12 11:00",
      "due": "2026-06-12 11:00",
      "status": "upcoming",
      "format": "対面(丸の内オフィス)",
      "notes": "お題「某カフェチェーンの売上を2倍にする施策」を15分で立案"
    },
    {
      "id": "ev_demo_14",
      "companyId": "c_8766",
      "type": "interview_2",
      "title": "二次人事面接",
      "datetime": "2026-06-15 15:30",
      "due": "2026-06-15 15:30",
      "status": "upcoming",
      "format": "対面",
      "notes": "志望順位と他社選考状況の確認"
    },
    {
      "id": "ev_demo_15",
      "companyId": "c_mitsubishi_corp",
      "type": "interview_final",
      "title": "役員最終面接",
      "datetime": "2026-06-18 10:00",
      "due": "2026-06-18 10:00",
      "status": "upcoming",
      "format": "対面(丸の内本店役員フロア)",
      "notes": "商社パーソンとしての気概・グローバルでの覚悟を熱量を持って伝える"
    },
    {
      "id": "ev_demo_16",
      "companyId": "c_toyota",
      "type": "offer",
      "title": "内々定承諾面談",
      "datetime": "2026-06-30 14:00",
      "due": "2026-06-30 14:00",
      "status": "upcoming",
      "format": "対面(名古屋オフィス)",
      "notes": "配属希望部署のヒアリングと入社意思確認"
    }
  ],
  "esEntries": [
    {
      "id": "es_docomo_sample",
      "companyId": "c_nttdata",
      "questionType": "ガクチカ",
      "title": "株式会社NTTドコモ 本選考（ジョブマッチング面談）",
      "question": "Q10. 経験①：主体的に取り組んだ経験（400字程度）",
      "answer": "外資系戦略コンサルの長期インターンにおいて、台湾発OTA企業の日本市場戦略プロジェクトに参画した経験です。海外オフィスのコンサルタントが作成した戦略案が、日本の商習慣や消費者インサイトと乖離していたため、過去3年分の国内旅行市場データと競合5社のUI/UXを徹底分析。日本市場特有のペインを特定し、ローカライズ提案書を作成しました。さらに現地マネージャーとの英語ディスカッションを重ねて合意を形成し、新規プロダクトのローンチを成功させました。この「多様なステークホルダーと協働しながら事実に基づき課題を突破する力」を活かし、ドコモのオープンイノベーションを加速させます。",
      "characterLimit": 1600,
      "status": "submitted",
      "questions": [
        {
          "id": "q_docomo_1",
          "type": "ガクチカ",
          "question": "Q10. 経験①：主体的に取り組んだ経験（400字程度）",
          "answer": "外資系戦略コンサルの長期インターンにおいて、台湾発OTA企業の日本市場戦略プロジェクトに参画した経験です。海外オフィスのコンサルタントが作成した戦略案が、日本の商習慣や消費者インサイトと乖離していたため、過去3年分の国内旅行市場データと競合5社のUI/UXを徹底分析。日本市場特有のペインを特定し、ローカライズ提案書を作成しました。さらに現地マネージャーとの英語ディスカッションを重ねて合意を形成し、新規プロダクトのローンチを成功させました。この「多様なステークホルダーと協働しながら事実に基づき課題を突破する力」を活かし、ドコモのオープンイノベーションを加速させます。",
          "characterLimit": 400
        },
        {
          "id": "q_docomo_2",
          "type": "ガクチカ",
          "question": "Q11. 経験②：主体的に取り組んだ経験（400字程度）",
          "answer": "大学院において、留学生支援コミュニティの代表としてオンライン学習プラットフォームの刷新を主導した経験です。コロナ禍において留学生の孤立と学修相談の停滞が課題となっていたため、SlackとNotionを連携させた24時間質問解決システムを構築。日本人学生メンター30名と協働して質問対応のマニュアル化と週次フォローミーティングを実施しました。結果、利用率は前年比240%に達し、退学・休学率をほぼゼロに抑えることができました。「課題に対してゼロから仕組みを構築し、周囲を巻き込んで成果につなげる推進力」を発揮します。",
          "characterLimit": 400
        },
        {
          "id": "q_docomo_3",
          "type": "長所・短所",
          "question": "Q13. 経験の中で自分の考えや判断を見直した出来事（400字程度）",
          "answer": "ハッカソンにおいて技術選定に固執し、チームの開発進行を停滞させてしまった経験です。当初、最新の分散処理技術を導入することで優位性を出そうとしましたが、メンバー間のスキルセットの差を考慮せず、実装フェーズで手詰まりを起こしました。私は自身の技術先行の判断を真摯に反省し、即座に要件定義をピボット。全員が習熟しているフレームワークへ切り替え、タスクをモジュール単位で再配分しました。結果、期限内にプロトタイプを完成させ審査員特別賞を受賞。「手段ではなくユーザー価値とチームの力を最大化すること」の重要性を深く学びました。",
          "characterLimit": 400
        },
        {
          "id": "q_docomo_4",
          "type": "志望動機",
          "question": "Q14. ドコモでかなえたい夢・実現したいこと（400字程度）",
          "answer": "モバイル通信網とスマートライフ事業の強固な顧客基盤を掛け合わせ、地方自治体や中小企業のDXを抜本的に推進したいです。少子高齢化が進む地域において、医療・モビリティ・決済のデジタル化は生活インフラそのものです。私は貴社が持つ圧倒的なデータ基盤とパートナーアセットを活用し、誰もが直感的に恩恵を享受できるスマートシティ基盤の社会実装に挑みます。ステークホルダーを泥臭く繋ぎ合わせ、一人ひとりの可能性を拡張する持続可能な社会インフラの実現に貢献します。",
          "characterLimit": 400
        }
      ],
      "linkedStoryIds": [
        "story_intern_sales",
        "story_lab_algo"
      ],
      "tags": [
        "Docomo",
        "本選考",
        "通信",
        "SE・開発"
      ],
      "createdAt": "2026-05-18T10:00:00.000Z",
      "updatedAt": "2026-05-20T14:30:00.000Z"
    },
    {
      "id": "es_jri_sample",
      "companyId": "c_smbc",
      "questionType": "自己PR",
      "title": "株式会社日本総合研究所（JRI） インターン選考（PM / ITサービスマネジメント）",
      "question": "【PM】学生時代に力を入れていることと強み（400字以下）",
      "answer": "私の強みは「複雑な課題を事実に基づき構造化し、周囲を巻き込んで解決する力」です。長期インターン先において、商談獲得率が3%と低迷していた営業プロセスの再構築を主導しました。過去40件の失注データを分析し業界別のペイン仮説集を作成するとともに、週次ロープレを主導してチーム全体に定着させました。結果、個人目標160%達成に加え、チーム全体の成約率を2.2倍に向上させました。このプロジェクト推進力を活かし、大規模かつミッションクリティカルな社会インフラを支えるPMとして貢献します。",
      "characterLimit": 700,
      "status": "submitted",
      "questions": [
        {
          "id": "q_jri_1",
          "type": "自己PR",
          "question": "【PM】学生時代に力を入れていることと強み（400字以下）",
          "answer": "私の強みは「複雑な課題を事実に基づき構造化し、周囲を巻き込んで解決する力」です。長期インターン先において、商談獲得率が3%と低迷していた営業プロセスの再構築を主導しました。過去40件の失注データを分析し業界別のペイン仮説集を作成するとともに、週次ロープレを主導してチーム全体に定着させました。結果、個人目標160%達成に加え、チーム全体の成約率を2.2倍に向上させました。このプロジェクト推進力を活かし、大規模かつミッションクリティカルな社会インフラを支えるPMとして貢献します。",
          "characterLimit": 400
        },
        {
          "id": "q_jri_2",
          "type": "志望動機",
          "question": "【PM】インターン志望理由と期待すること（300字以下）",
          "answer": "SMBCグループ全体の巨大金融インフラを支えつつ、最先端テクノロジーによる外販・新ビジネス創出に挑む貴社の「総合力と挑戦精神」に惹かれ志望します。本インターンを通じて、大規模ITプロジェクトにおける要件定義やリスクマネジメントのリアルを体感し、現役PMの思考プロセスと伴走力を吸収したいです。",
          "characterLimit": 300
        }
      ],
      "linkedStoryIds": [
        "story_intern_sales"
      ],
      "tags": [
        "JRI",
        "ITコンサル",
        "PM",
        "三井住友"
      ],
      "createdAt": "2026-05-19T11:00:00.000Z",
      "updatedAt": "2026-05-21T16:00:00.000Z"
    },
    {
      "id": "es_msol_sample",
      "companyId": "c_unlisted_rms",
      "questionType": "ガクチカ",
      "title": "RMS ガクチカ 400字",
      "question": "あなたがこれまでに最も情熱を持って取り組み、成果をあげた経験について述べてください。（400字以内）",
      "answer": "長期インターン先のBtoB営業において、顧客課題に寄り添う提案プロセスの刷新に取り組みました。当時、商談獲得率が3%と低迷していたため、過去40件の失注データを分析し業界別のペイン仮説集を作成。従来のサービス紹介から課題解決型アプローチへ転換しました。さらにチーム内で週次ロープレを主導し、ノウハウを横展開した結果、個人の商談獲得数は目標比160%を達成し、チーム全体の成約率も2.2倍に向上しました。この経験で培った「本質的課題の特定力」と「周囲を巻き込む推進力」を活かし、貴社の組織コンサルタントとして顧客の変革を支え抜きます。",
      "characterLimit": 400,
      "status": "submitted",
      "linkedStoryIds": [
        "story_intern_sales"
      ],
      "tags": [
        "営業",
        "ガクチカ",
        "課題解決",
        "リーダーシップ"
      ],
      "createdAt": "2026-05-15T10:00:00.000Z",
      "updatedAt": "2026-05-18T11:30:00.000Z"
    },
    {
      "id": "es_tcs_sample",
      "companyId": "c_tcs",
      "questionType": "志望動機",
      "title": "日本TCS 志望動機 300字",
      "question": "TCSを志望する理由と、学生時代に培った強みをどう活かすかを記述してください。（300字）",
      "answer": "世界最大級のグローバルIT知見とTataグループの総合力を背景に、日系企業の真のDX推進を支える貴社の姿勢に強く共感しました。学生時代に長期インターンで営業プロセスの再構築を主導した経験から、困難な状況でも事実に基づいて課題を構造化し、周囲と連携して解決に導く力を培いました。多様な国籍のエンジニアと密に協働し、日本企業の海外展開や業務効率化を具現化するプロジェクトマネージャーとして貢献します。",
      "characterLimit": 300,
      "status": "submitted",
      "linkedStoryIds": [
        "story_intern_sales"
      ],
      "tags": [
        "志望動機",
        "IT",
        "グローバル"
      ],
      "createdAt": "2026-05-19T14:00:00.000Z",
      "updatedAt": "2026-05-22T19:20:00.000Z"
    },
    {
      "id": "es_deloitte_sample",
      "companyId": "c_deloitte",
      "questionType": "志望動機",
      "title": "DTC 志望理由 500字",
      "question": "コンサルティング業界およびデロイト トーマツ コンサルティングを志望する理由を教えてください。（500字以内）",
      "answer": "企業の変革に伴走し、社会に確固たる価値を生み出したいと考えコンサルティング業界を志望します。その中で貴社を強く志望する理由は、単なる戦略立案に留まらず、テクノロジーと業界専門性を融合した「End-to-Endの実装力」を有している点です。私は大学祭実行委員会において、協賛金集めの仕組みをデジタル化し前年比140%を達成した経験から、仕組みの改革が組織を根本から活性化させる手応えを得ました。世界規模の知見とローカルでの泥臭い伴走力を兼ね備える貴社で、顧客のDXと成長戦略を最後までやり遂げるプロフェッショナルを目指します。",
      "characterLimit": 500,
      "status": "submitted",
      "linkedStoryIds": [
        "story_fest_lead"
      ],
      "tags": [
        "志望理由",
        "戦略コンサル",
        "DX"
      ],
      "createdAt": "2026-05-20T09:00:00.000Z",
      "updatedAt": "2026-05-25T15:00:00.000Z"
    },
    {
      "id": "es_toyota_sample",
      "companyId": "c_toyota",
      "questionType": "自己PR",
      "title": "トヨタ自動車 自己PR 400字",
      "question": "あなたの強みと、それを発揮した具体的なエピソードを教えてください。（400字以内）",
      "answer": "私の強みは「泥臭く仮説検証を繰り返す粘り強さ」です。大学祭実行委員会では、地域企業120社への協賛金獲得を主導しました。当初は対面での断りが続き前年割れの危機に瀕していましたが、私は訪問先ごとに「学生客層へのリーチメリット」を定量化した提案書を再作成。断られた企業にも再度アプローチし、対話を重ねる中でニーズを汲み取りました。結果として過去最高の350万円の協賛金を獲得し、前年比140%を達成しました。トヨタの「現地現物」「カイゼン」の精神と合致するこの実行力を活かし、モビリティ社会の実現に向けて困難な課題にも前向きに挑戦し続けます。",
      "characterLimit": 400,
      "status": "submitted",
      "linkedStoryIds": [
        "story_fest_lead"
      ],
      "tags": [
        "自己PR",
        "カイゼン",
        "粘り強さ"
      ],
      "createdAt": "2026-05-10T11:00:00.000Z",
      "updatedAt": "2026-05-12T16:00:00.000Z"
    },
    {
      "id": "es_mitsubishi_sample",
      "companyId": "c_mitsubishi_corp",
      "questionType": "志望動機",
      "title": "三菱商事 挑戦したいビジネス 400字",
      "question": "三菱商事で成し遂げたいことや挑戦したいビジネス領域について記述してください。（400字）",
      "answer": "次世代エネルギー・脱炭素分野において、世界規模のサプライチェーン変革を牽引したいです。東南アジア留学中、インフラの未発達により停電が頻発する地域を目の当たりにし、エネルギーの安定供給が生活の基盤であることを痛感しました。総合商社の持つ産業横断的なネットワークと事業投資力を活かし、現地政府や企業と手を取り合いながらクリーンエネルギーの普及に挑みたいです。異なる文化を持つ仲間をまとめ上げたリーダーシップを武器に、地球規模の社会課題解決をビジネスの力で実現します。",
      "characterLimit": 400,
      "status": "submitted",
      "linkedStoryIds": [
        "story_abroad_debate"
      ],
      "tags": [
        "志望動機",
        "エネルギー",
        "グローバルリーダー"
      ],
      "createdAt": "2026-05-16T18:00:00.000Z",
      "updatedAt": "2026-05-18T20:00:00.000Z"
    },
    {
      "id": "es_sony_sample",
      "companyId": "c_sony",
      "questionType": "ガクチカ",
      "title": "ソニー ガクチカ 500字",
      "question": "学生時代に成し遂げた最も大きな成果と、その過程での困難について述べてください。（500字以内）",
      "answer": "大学院の研究室において、新規画像処理アルゴリズムの開発に挑戦し、処理速度を従来の35%高速化したことです。当初は既存モデルの精度限界に直面し、2ヶ月間成果が出ない焦りがありました。しかし私は失敗を単なるエラーと捉えず、データごとのボトルネックを可視化。並列計算の構造見直しとメモリ配置の最適化を愚直に試行錯誤しました。また指導教員や共同研究者とのディスカッションを週2回設定し、客観的な知見を積極的に取り入れました。結果、国際学会での口頭発表に採択され、技術的ブレークスルーを果たすことができました。「好奇心を起点に粘り強く未知を切り拓く力」をソニーの研究開発で発揮します。",
      "characterLimit": 500,
      "status": "submitted",
      "linkedStoryIds": [
        "story_lab_algo"
      ],
      "tags": [
        "ガクチカ",
        "研究開発",
        "学会発表"
      ],
      "createdAt": "2026-05-22T13:00:00.000Z",
      "updatedAt": "2026-05-24T17:00:00.000Z"
    },
    {
      "id": "es_nttdata_sample",
      "companyId": "c_nttdata",
      "questionType": "志望動機",
      "title": "NTTデータ 志望動機 400字",
      "question": "NTTデータでどのような社会課題を解決したいか具体的に述べてください。（400字以内）",
      "answer": "社会基盤を支える大規模システムのDXを通じて、行政サービスの利便性向上と地域間格差の是正に挑みたいです。大学時代、地方自治体との協働プロジェクトに参加した際、レガシーシステムによる手続きの煩雑さを実感しました。日本屈指の信頼性と最先端IT技術を併せ持つ貴社において、官公庁・自治体向けプラットフォームの刷新に携わり、すべての住民が恩恵を受けられるデジタル社会の構築に貢献したいです。",
      "characterLimit": 400,
      "status": "draft",
      "linkedStoryIds": [
        "story_hackathon"
      ],
      "tags": [
        "志望動機",
        "公共IT",
        "社会課題"
      ],
      "createdAt": "2026-05-26T15:00:00.000Z",
      "updatedAt": "2026-05-28T10:00:00.000Z"
    },
    {
      "id": "es_keyence_sample",
      "companyId": "c_keyence",
      "questionType": "自己PR",
      "title": "キーエンス 20秒自己PR",
      "question": "簡潔にあなたの最大の強みを述べてください。（100字程度）",
      "answer": "私の強みは「徹底的なファクト重視の課題解決力」です。長期インターンでは商談成約率の低迷に対し、失注データを構造化して改善策を打ち出し、チーム売上を2.2倍に向上させました。",
      "characterLimit": 150,
      "status": "submitted",
      "linkedStoryIds": [
        "story_intern_sales"
      ],
      "tags": [
        "自己PR",
        "ファクト重視",
        "簡潔"
      ],
      "createdAt": "2026-05-27T08:00:00.000Z",
      "updatedAt": "2026-05-27T08:30:00.000Z"
    },
    {
      "id": "es_nri_sample",
      "companyId": "c_nri",
      "questionType": "志望動機",
      "title": "NRI 経営コンサル志望理由 400字",
      "question": "野村総合研究所の経営コンサルタントを志望する動機を記述してください。（400字以内）",
      "answer": "政策提言からビジネス実行まで一貫して社会を動かす「ナビゲーション×ソリューション」に惹かれ志望します。研究活動で培ったデータ分析力と、インターンで発揮した現場巻き込み力を活かし、産業の構造変化を見据えた実践的な成長戦略をクライアントと共に描き出します。",
      "characterLimit": 400,
      "status": "draft",
      "linkedStoryIds": [
        "story_lab_algo",
        "story_intern_sales"
      ],
      "tags": [
        "志望動機",
        "シンクタンク",
        "経営戦略"
      ],
      "createdAt": "2026-05-28T11:00:00.000Z",
      "updatedAt": "2026-05-28T12:00:00.000Z"
    },
    {
      "id": "es_mercari_sample",
      "companyId": "c_mercari",
      "questionType": "ガクチカ",
      "title": "メルカリ 挑戦したこと 400字",
      "question": "これまでに最も大きな挑戦（Go Boldな経験）について述べてください。（400字以内）",
      "answer": "学部3年時にハッカソンへ初参加し、3人チームのリーダーとして生成AIを用いた学習支援アプリを48時間で開発した経験です。全員が未経験のフレームワークを採用する大胆な挑戦を選び、タスクをモジュール化して並行開発を推進。最終的に技術革新賞を受賞しました。",
      "characterLimit": 400,
      "status": "submitted",
      "linkedStoryIds": [
        "story_hackathon"
      ],
      "tags": [
        "GoBold",
        "ハッカソン",
        "アジャイル"
      ],
      "createdAt": "2026-05-20T16:00:00.000Z",
      "updatedAt": "2026-05-21T09:00:00.000Z"
    }
  ],
  "storyBank": [
    {
      "id": "story_intern_sales",
      "title": "長期インターンでの新規法人開拓営業（成約率2.2倍達成）",
      "category": "Internship",
      "situation": "HRTechスタートアップの長期インターンにおいて、新規顧客開拓を担当。当初は商談獲得率が3%と低迷していた。",
      "task": "商談獲得率を10%まで引き上げ、チーム全体の月間成約目標を達成すること。",
      "action": "過去40件の失注要因を徹底分析し、業界別のペイン仮説集を作成。単なる機能訴求から顧客課題解決型のアプローチへ刷新した。また週1回チーム勉強会を主催しノウハウを共有した。",
      "result": "個人として月間商談獲得目標160%を達成。チーム全体の成約率も従来の2.2倍に向上した。",
      "learning": "事実（データ）に基づく現状分析と、周囲を巻き込む仕組み化が組織の成果を最大化することを学んだ。",
      "tags": [
        "課題解決力",
        "主体性",
        "巻き込み力",
        "営業"
      ],
      "createdAt": "2026-05-01T10:00:00.000Z",
      "updatedAt": "2026-05-01T10:00:00.000Z"
    },
    {
      "id": "story_fest_lead",
      "title": "学園祭実行委員会での協賛金獲得（前年比140%達成）",
      "category": "Extracurricular",
      "situation": "学園祭実行委員会の渉外責任者として、地域企業からの協賛金集めを担当。コロナ禍後の景気後退により、既存の依頼先から断りが相次いだ。",
      "task": "目標協賛金300万円を達成し、ステージ企画の縮小を回避すること。",
      "action": "地域企業120社を一軒ずつ訪問。学生アンケートを元に「若者向けマーケティング効果」を可視化した独自協賛プランを提案。断られてもニーズを聞き出し再提案した。",
      "result": "過去最高の350万円の協賛金を獲得（前年比140%達成）。ステージ企画を完全実施できた。",
      "learning": "相手の立場に立った価値提案と、決して諦めない粘り強い対話が信頼を勝ち取る源泉であると学んだ。",
      "tags": [
        "企画提案力",
        "折衝力",
        "粘り強さ",
        "リーダーシップ"
      ],
      "createdAt": "2026-05-02T11:00:00.000Z",
      "updatedAt": "2026-05-02T11:00:00.000Z"
    },
    {
      "id": "story_lab_algo",
      "title": "研究室でのアルゴリズム開発（処理速度35%高速化・学会発表）",
      "category": "Academic",
      "situation": "大学院での画像処理研究において、新規アルゴリズムの計算負荷が高く実用化が困難であった。",
      "task": "精度を落とすことなく処理速度を30%以上短縮し、国際学会への投稿基準を満たすこと。",
      "action": "ボトルネック箇所をプロファイラで特定し、並列処理モデルを再設計。数式展開を簡略化する数学的アプローチとメモリ空間の効率化を両立させた。",
      "result": "処理時間を35%高速化することに成功。査読付き国際学会に筆頭著者として採択された。",
      "learning": "複雑な課題も要素分解し、仮説検証を積み重ねることでブレークスルーが生み出せることを体感した。",
      "tags": [
        "論理的思考",
        "研究力",
        "粘り強さ",
        "学会発表"
      ],
      "createdAt": "2026-05-03T09:00:00.000Z",
      "updatedAt": "2026-05-03T09:00:00.000Z"
    },
    {
      "id": "story_abroad_debate",
      "title": "留学先での英語ディベート大会（多国籍チーム準優勝）",
      "category": "Academic",
      "situation": "交換留学先のシンガポールにて、現地大学主催の政策提言ディベート大会に日本人1名で多国籍チームに参加。",
      "task": "文化や価値観の異なる4名のチームで共通の提言方針をまとめ、大会で入賞すること。",
      "action": "語学力では及ばない分、データ収集と論理構成の可視化でチームに貢献。意見対立時はホワイトボードを使って論点を整理し、合意形成をリードした。",
      "result": "参加32チーム中、準優勝を獲得。最優秀ディベーター賞にもノミネートされた。",
      "learning": "多様性のある環境では、互いの強みを認め合い、事実を基にした対話で共通目標に向かう重要性を学んだ。",
      "tags": [
        "グローバル",
        "ファシリテーション",
        "多様性",
        "英語力"
      ],
      "createdAt": "2026-05-04T15:00:00.000Z",
      "updatedAt": "2026-05-04T15:00:00.000Z"
    },
    {
      "id": "story_hackathon",
      "title": "48時間ハッカソン初挑戦（生成AIアプリ開発・技術革新賞）",
      "category": "Other",
      "situation": "学生向け全国ハッカソンに、大学の友人3名で初出場。制限時間48時間で動作するプロダクトを完成させる必要があった。",
      "task": "「教育格差の是正」をテーマに、AIを活用した直感的な学習アプリをプロトタイプとして開発すること。",
      "action": "リーダーとしてアジャイル開発を導入。機能を最小限（MVP）に絞り込み、フロントエンドとバックエンドの連携仕様を初動3時間で固めた。",
      "result": "期限内に完全動作するデモを完成させ、審査員から実用性を高く評価され「技術革新賞」を受賞。",
      "learning": "限られた時間とリソースの中で、勇気を持ってスコープを絞り込みスピード感を持ってやり切る大切さを学んだ。",
      "tags": [
        "アジャイル",
        "迅速な決断力",
        "技術力",
        "チームワーク"
      ],
      "createdAt": "2026-05-05T14:00:00.000Z",
      "updatedAt": "2026-05-05T14:00:00.000Z"
    },
    {
      "id": "story_club_captain",
      "title": "体育会バドミントン部主将としてリーグ昇格（練習改革）",
      "category": "Extracurricular",
      "situation": "体育会バドミントン部の主将を務めたが、部員のモチベーション格差により3年連続でリーグ残留に甘んじていた。",
      "task": "チーム全員の当事者意識を高め、秋季リーグで2部昇格を果たすこと。",
      "action": "全員一律の練習を廃止し、部員各自の得意ショットを伸ばす「個別カルテ制」を導入。月1回の個人面談で目標を共有し、チームの勝利への貢献を実感できる環境を整えた。",
      "result": "秋季リーグ全勝優勝を果たし、念願の2部昇格を達成。",
      "learning": "個々の個性に目を向け、自発的な動機付けを行うことが真のチーム力向上に繋がると学んだ。",
      "tags": [
        "リーダーシップ",
        "組織改革",
        "モチベーション管理"
      ],
      "createdAt": "2026-05-06T16:00:00.000Z",
      "updatedAt": "2026-05-06T16:00:00.000Z"
    }
  ],
  "tasks": [
    {
      "id": "t1",
      "text": "SPI・玉手箱のWEBテスト問題集を1周解く",
      "done": false,
      "tag": "テスト対策"
    },
    {
      "id": "t2",
      "text": "自己PR・ガクチカの400字要約を完成させる",
      "done": true,
      "tag": "ES対策"
    },
    {
      "id": "t3",
      "text": "商社・コンサル・IT業界の選考スケジュール一覧を整理する",
      "done": true,
      "tag": "業界研究"
    },
    {
      "id": "t4",
      "text": "志望企業3社のOB/OG訪問アポを取る",
      "done": false,
      "tag": "OB訪問"
    },
    {
      "id": "t5",
      "text": "逆質問リスト（役員面接用・現場社員用）を各5個作成する",
      "done": false,
      "tag": "面接対策"
    }
  ]
};

  // 展示用デモデータの動的日程正規化（閲覧日を起点に生き生きとした選考進捗・締切アラート・カレンダー予定を再現）
  function getDynamicShowcaseData() {
    const raw = JSON.parse(JSON.stringify(SHOWCASE_DATA));
    const now = new Date();

    const addDays = (offset, time = '12:00') => {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return { date: `${y}-${m}-${day}`, datetime: `${y}-${m}-${day} ${time}` };
    };

    const compSchedule = {
      'c_unlisted_rms': { offset: 2, label: '一次面接（オンライン）', lv: 'urgent' },
      'c_mercari': { offset: 4, label: '技術オンラインテスト', lv: 'soon' },
      'c_deloitte': { offset: 6, label: 'ケース二次面接', lv: 'soon' },
      'c_nttdata': { offset: 9, label: '本選考ES＆適性検査', lv: 'soon' },
      'c_7974': { offset: 13, label: 'クリエイティブES提出', lv: 'soon' },
      'c_8766': { offset: 15, label: '二次人事面接', lv: 'soon' },
      'c_smbc': { offset: 17, label: 'リクルーター個別面談', lv: 'soon' },
      'c_nri': { offset: 20, label: '現場コンサルタント面接', lv: 'soon' },
      'c_sony': { offset: 23, label: '現場エンジニア一次面接', lv: 'soon' },
      'c_keyence': { offset: 26, label: '説得面接（一次選考）', lv: 'soon' },
      'c_mitsubishi_corp': { offset: 29, label: '役員最終面接(対面)', lv: 'soon' },
      'c_toyota': { offset: 33, label: '内々定面談・承諾回答', lv: 'soon' },
      'c_tcs': { offset: 7, label: '適性検査受検締切', lv: 'soon' },
      'c_itochu': { offset: 11, label: 'プレエントリー締切', lv: 'soon' }
    };

    raw.companies.forEach(c => {
      const sch = compSchedule[c.id];
      if (sch) {
        c.due = addDays(sch.offset).date;
        if (sch.label) c.dueLabel = sch.label;
        if (sch.lv !== undefined) c.dueLv = sch.lv;
      }
    });

    const eventSchedule = [
      { id: 'ev_demo_1', offset: -12, time: '12:00' },
      { id: 'ev_demo_2', offset: -8, time: '18:00' },
      { id: 'ev_demo_3', offset: -4, time: '23:59' },
      { id: 'ev_demo_4', offset: 4, time: '20:00' },
      { id: 'ev_demo_5', offset: -2, time: '17:00' },
      { id: 'ev_demo_6', offset: 2, time: '15:00' },
      { id: 'ev_demo_7', offset: 9, time: '23:59' },
      { id: 'ev_demo_8', offset: 13, time: '17:00' },
      { id: 'ev_demo_9', offset: 17, time: '14:00' },
      { id: 'ev_demo_10', offset: 20, time: '10:00' },
      { id: 'ev_demo_11', offset: 23, time: '16:30' },
      { id: 'ev_demo_12', offset: 26, time: '13:00' },
      { id: 'ev_demo_13', offset: 6, time: '11:00' },
      { id: 'ev_demo_14', offset: 15, time: '15:30' },
      { id: 'ev_demo_15', offset: 29, time: '10:00' },
      { id: 'ev_demo_16', offset: 33, time: '14:00' }
    ];

    (raw.selectionEvents || []).forEach(ev => {
      const sch = eventSchedule.find(s => s.id === ev.id);
      if (sch) {
        const dt = addDays(sch.offset, sch.time);
        ev.datetime = dt.datetime;
        ev.due = dt.datetime;
      }
    });

    (raw.esEntries || []).forEach((es, idx) => {
      es.updatedAt = addDays(-(idx % 10) - 1).date;
    });

    return raw;
  }
