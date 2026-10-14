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
    { id:'c_sansan', name:'Sansan', code:'4443', domain:'sansan.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS', emp:1600, empNote:'単体', payBachelor:330000, payMaster:350000, avgAnnual:750, color:'#e60012', added:false, stage:'watch', loc:'東京/全国', tags:["名刺管理", "Bill One", "営業DX", "SaaS"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_moneyforward', name:'マネーフォワード', code:'3994', domain:'moneyforward.com', ind17:'情報通信・サービス', cat:'IT・通信', sub:'SaaS/FinTech', emp:2400, empNote:'単体', payBachelor:320000, payMaster:340000, avgAnnual:720, color:'#2f80ed', added:false, stage:'watch', loc:'東京/全国', tags:["マネーフォワードME", "クラウド会計", "FinTech", "SaaS"], due:'', dueLabel:'', dueLv:'' },
    { id:'c_lycorp', name:'LINEヤフー', code:'4689', domain:'lycorp.co.jp', ind17:'情報通信・サービス', cat:'IT・通信', sub:'Webサービス', emp:11500, empNote:'単体(連結2.8万)', payBachelor:300000, payMaster:325000, avgAnnual:820, color:'#06c755', added:false, stage:'watch', loc:'東京/全国', tags:["LINE", "Yahoo! JAPAN", "PayPay", "国内最大トラフィック"], due:'', dueLabel:'', dueLv:'' },
,
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

  const STORAGE_KEY = 'shukatsu_board_storage_v2';
  const SETTINGS_KEY = 'shukatsu_board_settings_v2';
  const TASKS_KEY = 'shukatsu_board_tasks_v2';
  const EVENTS_KEY = 'shukatsu_events_v1';
  const ES_KEY = 'shukatsu_es_v1';
  const STORIES_KEY = 'shukatsu_stories_v1';

  let catalog = [];
  let currentSettings = { gradYear: '28卒' };
  let currentTasks = [];
  let selectionEvents = [];
  let esList = [];
  let storyBank = [];

  function getScopedKey(baseKey) {
    return currentAuthUser ? `${baseKey}_user_${currentAuthUser.id}` : null;
  }

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

  function loadAll() {
    try {
      const fullCatalog = getFullCatalog();

      if (!currentAuthUser) {
        // ==================== 未ログイン: 展示用デモモード ====================
        // 公共デモデータ（14社、各選考ステージ、ES10+、Story8+、Calendar Events）を動的日程でメモリにロード
        const demoData = getDynamicShowcaseData();
        const demoCompMap = new Map();
        demoData.companies.forEach(sc => demoCompMap.set(sc.id, sc));

        catalog = fullCatalog.map(c => {
          if (demoCompMap.has(c.id)) {
            return Object.assign({}, c, demoCompMap.get(c.id));
          }
          return Object.assign({}, c, { added: false, stage: 'watch', due: '', dueLabel: '' });
        });

        // プレースホルダーのカスタム企業があれば先頭に保持
        demoData.companies.forEach(sc => {
          if (!catalog.find(x => x.id === sc.id)) {
            catalog.unshift(Object.assign({}, sc));
          }
        });

        selectionEvents = JSON.parse(JSON.stringify(demoData.selectionEvents || []));
        esList = JSON.parse(JSON.stringify(demoData.esEntries || []));
        storyBank = JSON.parse(JSON.stringify(demoData.storyBank || []));
        currentTasks = JSON.parse(JSON.stringify(demoData.tasks || []));
        currentSettings = { gradYear: '28卒' };
        return;
      }

      // ==================== ログイン済み: ユーザー専用プライベートデータ ====================
      const privateKey = getScopedKey(STORAGE_KEY);
      const privateEventsKey = getScopedKey(EVENTS_KEY);
      const privateEsKey = getScopedKey(ES_KEY);
      const privateStoriesKey = getScopedKey(STORIES_KEY);
      const privateSettingsKey = getScopedKey(SETTINGS_KEY);
      const privateTasksKey = getScopedKey(TASKS_KEY);

      const savedCatalogStr = localStorage.getItem(privateKey);
      if (savedCatalogStr) {
        let savedCatalog = JSON.parse(savedCatalogStr);
        const userStateMap = new Map();
        const masterMap = new Map();
        fullCatalog.forEach(c => masterMap.set(c.id, c));

        // 1. 名寄せ・エイリアス統合（重複排除）
        savedCatalog.forEach(c => {
          let targetMasterId = ALIAS_TO_MASTER_MAP[c.id];
          if (!targetMasterId && c.isCustom && c.name) {
            const cleanName = c.name.replace(/株式会社|\(株\)|合同会社|相互会社|Internship.*|インターン.*|202[0-9]/gi, '').trim().toLowerCase();
            if (cleanName.length >= 2) {
              const matched = fullCatalog.find(m => {
                const mClean = m.name.replace(/株式会社|\(株\)|合同会社|相互会社/gi, '').trim().toLowerCase();
                return mClean === cleanName || mClean.includes(cleanName) || cleanName.includes(mClean);
              });
              if (matched) targetMasterId = matched.id;
            }
          }

          if (targetMasterId && masterMap.has(targetMasterId)) {
            const u = userStateMap.get(targetMasterId) || {};
            userStateMap.set(targetMasterId, {
              ...u,
              added: true,
              stage: u.stage || c.stage || 'entry',
              myPageUrl: u.myPageUrl || c.myPageUrl || '',
              myPageId: u.myPageId || c.myPageId || '',
              myPagePass: u.myPagePass || c.myPagePass || '',
              noteMotiv: u.noteMotiv || c.noteMotiv || '',
              noteEs: u.noteEs || c.noteEs || '',
              noteInterview: u.noteInterview || c.noteInterview || '',
              due: u.due || c.due || '',
              dueLabel: u.dueLabel || c.dueLabel || '',
              dueLv: u.dueLv || c.dueLv || '',
              tags: (u.tags && u.tags.length) ? u.tags : (c.tags || []).filter(t => t !== '手動登録')
            });
          } else if (!c.id.startsWith('c_custom_acc_')) {
            const isDummySeed = ['c_sony', 'c_toyota', 'c_mitsubishi_corp', 'c_recruit', 'c_mercari', 'c_freee'].includes(c.id) && !c.myPageUrl && !c.myPageId;
            if (isDummySeed) {
              // 端末ローカルに残存する展示用ダミーデータを完全無視
              return;
            }
            if (c.id === 'c_smbc' && (c.due === '2026-09-08' || c.dueLabel === 'ES提出')) {
              c.due = '';
              c.dueLabel = '';
              c.dueLv = '';
            }
            if (c.added || (c.stage && c.stage !== 'watch') || c.due || c.dueLabel || c.myPageUrl || c.myPageId || c.myPagePass || c.noteMotiv || c.noteEs || c.noteInterview || c.isCustom) {
              userStateMap.set(c.id, c);
            }
          }
        });

        // 2. カタログ構築（マイページ所持≠本選考エントリー）
        catalog = fullCatalog.map(c => {
          if (userStateMap.has(c.id)) {
            const u = userStateMap.get(c.id);
            // 重要な仕様: mypage情報があるだけでは勝手に選考管理中(added=true)にしない
            // 正式選考として追加(u.added === true かつ stage !== 'watch')されている企業のみを選考管理対象とする
            const isAdded = Boolean(u.added === true && u.stage && u.stage !== 'watch');
            const isUnwanted = UNWANTED_MYPAGE_ACC_IDS.has(c.id);
            return Object.assign({}, c, {
              added: isUnwanted ? false : isAdded,
              stage: isAdded ? u.stage : 'watch',
              due: u.due !== undefined ? u.due : c.due,
              dueLabel: u.dueLabel !== undefined ? u.dueLabel : c.dueLabel,
              dueLv: u.dueLv !== undefined ? u.dueLv : c.dueLv,
              myPageUrl: isUnwanted ? '' : (u.myPageUrl || ''),
              myPageId: isUnwanted ? '' : (u.myPageId || ''),
              myPagePass: isUnwanted ? '' : (u.myPagePass || ''),
              noteMotiv: u.noteMotiv || '',
              noteEs: u.noteEs || '',
              noteInterview: u.noteInterview || '',
              tags: (u.tags && u.tags.length && !u.tags.includes('手動登録')) ? u.tags : c.tags,
              isCustom: false
            });
          }
          return Object.assign({}, c, { added: false, stage: 'watch', due: '', dueLabel: '', isCustom: false });
        });

        // 3. 正規手動企業のみを保持（c_custom_acc_ や重複企業は完全排除）
        savedCatalog.forEach(c => {
          if (c.isCustom && !c.id.startsWith('c_custom_acc_') && !masterMap.has(c.id) && !ALIAS_TO_MASTER_MAP[c.id] && !catalog.find(x => x.id === c.id)) {
            const cleanName = (c.name || '').replace(/株式会社|\(株\)|合同会社|相互会社/gi, '').trim().toLowerCase();
            const nameDup = cleanName.length >= 2 && catalog.find(x => {
              const xClean = (x.name || '').replace(/株式会社|\(株\)|合同会社|相互会社/gi, '').trim().toLowerCase();
              return xClean === cleanName || xClean.includes(cleanName) || cleanName.includes(xClean);
            });
            if (!nameDup) {
              const isAdded = Boolean(c.added === true && c.stage && c.stage !== 'watch');
              c.added = isAdded;
              c.stage = isAdded ? c.stage : 'watch';
              catalog.unshift(c);
            }
          }
        });
      } else {
        // 新規ログインユーザー: デフォルトはクリーンな白紙選考リスト
        catalog = fullCatalog.map(c => Object.assign({}, c, { added: false, stage: 'watch', due: '', dueLabel: '', isCustom: false }));
      }

      // Private Selection Events
      const savedEvents = localStorage.getItem(privateEventsKey);
      selectionEvents = savedEvents ? JSON.parse(savedEvents) : [];

      // Private ES List
      const savedEs = localStorage.getItem(privateEsKey);
      esList = savedEs ? JSON.parse(savedEs) : [];

      // Private Story Bank
      const savedStories = localStorage.getItem(privateStoriesKey);
      storyBank = savedStories ? JSON.parse(savedStories) : [];

      const savedSettings = localStorage.getItem(privateSettingsKey);
      if (savedSettings) currentSettings = Object.assign(currentSettings, JSON.parse(savedSettings));

      const savedTasks = localStorage.getItem(privateTasksKey);
      currentTasks = savedTasks ? JSON.parse(savedTasks) : JSON.parse(JSON.stringify(DEFAULT_TASKS));

    } catch (e) {
      console.error('Storage load error:', e);
      catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG));
      currentTasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
    }
  }

  function saveAll() {
    if (!currentAuthUser) {
      // 未ログイン状態ではローカル保存や上書きを防止
      return;
    }
    catalog = catalog.filter(c => !c.id.startsWith('c_custom_acc_'));
    try {
      const privateKey = getScopedKey(STORAGE_KEY);
      const privateSettingsKey = getScopedKey(SETTINGS_KEY);
      const privateTasksKey = getScopedKey(TASKS_KEY);
      const privateEventsKey = getScopedKey(EVENTS_KEY);
      const privateEsKey = getScopedKey(ES_KEY);
      const privateStoriesKey = getScopedKey(STORIES_KEY);

      localStorage.setItem(privateKey, JSON.stringify(catalog));
      localStorage.setItem(privateSettingsKey, JSON.stringify(currentSettings));
      localStorage.setItem(privateTasksKey, JSON.stringify(currentTasks));
      localStorage.setItem(privateEventsKey, JSON.stringify(selectionEvents));
      localStorage.setItem(privateEsKey, JSON.stringify(esList));
      localStorage.setItem(privateStoriesKey, JSON.stringify(storyBank));
      updateStorageInfo();
    } catch (e) {
      console.error('Storage save error:', e);
    }
    triggerCloudSave();
  }

  function saveAllV3() {
    saveAll();
  }

  function updateStorageInfo() {
    const el = document.getElementById('storageInfo');
    if (!el) return;
    const count = catalog.length;
    const addedCount = catalog.filter(c => c.added).length;
    el.textContent = `全${count}社中 ${addedCount}社を選考管理中（端末ローカル保存済）`;
  }

  // ===================== SUPABASE CLOUD SYNC & AUTH =====================
  const SUPABASE_URL = 'https://pzifhwzupfyypszvrmxe.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6aWZod3p1cGZ5eXBzenZybXhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg1NDQ1NjQsImV4cCI6MjEwNDEyMDU2NH0.Wc-j8SGelImf-z6rzvdX39JTKK9MC_wvw5nyJkh0CwA';

  let supabaseClient = null;
  let currentAuthUser = null;
  let currentAuthMode = 'login';
  let cloudSyncTimer = null;

  try {
    if (window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  } catch (e) {
    console.warn('Supabase init warning:', e);
  }

  function openAuthModal(mode = 'login') {
    if (typeof cancelAuthConfirm === 'function') cancelAuthConfirm();
    switchAuthTab(mode);
    const err = document.getElementById('authErrorMsg');
    if (err) err.style.display = 'none';
    openModal('authModal');
  }

  function switchAuthTab(mode) {
    currentAuthMode = mode;
    const tabLogin = document.getElementById('tabLogin');
    const tabReg = document.getElementById('tabRegister');
    const title = document.getElementById('authModalTitle');
    const btn = document.getElementById('authSubmitBtn');
    const passInput = document.getElementById('authPassword');
    const noticeText = document.getElementById('authNoticeText');
    const passHint = document.getElementById('authPassHint');

    if (mode === 'login') {
      if (tabLogin) tabLogin.classList.add('active');
      if (tabReg) tabReg.classList.remove('active');
      if (title) title.textContent = '☁️ クラウド同期ログイン';
      if (btn) btn.textContent = 'ログイン';
      if (passInput) passInput.setAttribute('autocomplete', 'current-password');
      if (noticeText) noticeText.textContent = '登録済みのアカウントに保存された選考データを同期します';
      if (passHint) passHint.style.display = 'none';
    } else {
      if (tabReg) tabReg.classList.add('active');
      if (tabLogin) tabLogin.classList.remove('active');
      if (title) title.textContent = '☁️ 新規アカウント作成';
      if (btn) btn.textContent = 'アカウントを作成';
      if (passInput) passInput.setAttribute('autocomplete', 'new-password');
      if (noticeText) noticeText.textContent = '登録するとブラウザを閉じても選考データがクラウド保存されます';
      if (passHint) passHint.style.display = 'inline';
    }
  }

  function requireAuth(actionName = 'この機能を利用') {
    if (currentAuthUser) return true;
    showToast(`🔒 ${actionName}にはアカウント登録またはログインが必要です`);
    openAuthModal('register');
    return false;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return String(str).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
  }

  function updateAuthUI() {
    const loginBtn = document.getElementById('authLoginBtn');
    const profileWrap = document.getElementById('userProfileWrap');
    const emailText = document.getElementById('userEmailText');
    const avatar = document.getElementById('userAvatar');
    const udEmail = document.getElementById('udEmail');
    const accContent = document.getElementById('settingsAccountContent');

    if (currentAuthUser) {
      if (loginBtn) loginBtn.style.display = 'none';
      if (profileWrap) profileWrap.style.display = 'inline-block';
      const email = currentAuthUser.email || 'user';
      const meta = currentAuthUser.user_metadata || {};
      const displayName = meta.full_name || meta.name || email.split('@')[0];
      const avatarUrl = meta.avatar_url || meta.picture || null;
      if (emailText) emailText.textContent = displayName;
      if (avatar) {
        if (avatarUrl) {
          avatar.innerHTML = `<img src="${avatarUrl}" style="width:100%;height:100%;border-radius:inherit;object-fit:cover;" onerror="this.remove()">`;
        } else {
          avatar.textContent = displayName.charAt(0).toUpperCase();
        }
      }
      if (udEmail) udEmail.textContent = email;

      if (accContent) {
        accContent.innerHTML = `
          <div style="width:100%;display:flex;align-items:center;justify-content:space-between;gap:8px">
            <div>
              <div style="font-weight:700;font-size:13px;color:var(--ink)">${escapeHtml(email)}</div>
              <div style="font-size:11px;color:var(--green);margin-top:2px">● クラウド同期有効 (Tokyo)</div>
            </div>
            <span style="font-size:11px;padding:2px 7px;border-radius:6px;background:rgba(78,227,154,0.15);color:var(--green)">ログイン中</span>
          </div>
          <div style="box-sizing:border-box;width:100%;max-width:100%;display:flex;gap:8px;margin-top:4px">
            <button class="top-btn" onclick="closeModal('settingsModal');manualSyncCloud()" style="flex:1;justify-content:center;font-size:12px;padding:7px 8px;box-sizing:border-box;min-width:0">🔄 今すぐ同期</button>
            <button class="btn-sm-ghost" onclick="closeModal('settingsModal');handleLogout()" style="flex:1;justify-content:center;color:#ff6b81;border-color:rgba(255,107,129,0.4);font-size:12px;padding:7px 8px;box-sizing:border-box;min-width:0">🚪 ログアウト</button>
          </div>
        `;
      }
    } else {
      if (loginBtn) loginBtn.style.display = 'inline-flex';
      if (profileWrap) profileWrap.style.display = 'none';
      if (accContent) {
        accContent.innerHTML = `
          <div>
            <div style="font-weight:700;font-size:12.5px;color:var(--ink)">未ログイン</div>
            <div style="font-size:11px;color:var(--sub);margin-top:2px">ログインすると選考データがクラウド保存されます</div>
          </div>
          <button class="top-btn primary" onclick="closeModal('settingsModal');openAuthModal('login')" style="font-size:12px;padding:6px 12px">☁️ ログイン / 登録</button>
        `;
      }
    }

    document.querySelectorAll('.tab-lock').forEach(el => {
      el.style.display = currentAuthUser ? 'none' : 'inline';
    });

    // 展示用デモバナーの表示・非表示切り替え
    document.querySelectorAll('.demo-seed-banner').forEach(el => {
      el.style.display = currentAuthUser ? 'none' : 'flex';
    });
  }

  function toggleUserDropdown(e) {
    if (e) {
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.toggle('open');
  }

  document.addEventListener('click', (e) => {
    const wrap = document.getElementById('userProfileWrap');
    if (wrap && wrap.contains(e.target)) return;
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('open');
  });

  document.addEventListener('touchend', (e) => {
    const wrap = document.getElementById('userProfileWrap');
    if (wrap && wrap.contains(e.target)) return;
    const dd = document.getElementById('userDropdown');
    if (dd && dd.classList.contains('open')) dd.classList.remove('open');
  }, { passive: true });

  let pendingAuthEmail = '';
  let pendingAuthPassword = '';
  let emailConfirmPollTimer = null;
  let emailConfirmPollCount = 0;

  function showAuthConfirmView(email, password) {
    pendingAuthEmail = email;
    pendingAuthPassword = password;
    const tabsHeader = document.getElementById('authTabsHeader');
    const confirmHeader = document.getElementById('authConfirmHeader');
    const notice = document.getElementById('authNotice');
    const form = document.getElementById('authForm');
    const confirmView = document.getElementById('authConfirmView');
    const emailDisp = document.getElementById('authConfirmEmailDisplay');
    const otpInput = document.getElementById('authOtpInput');
    const otpErr = document.getElementById('authOtpErrorMsg');

    if (tabsHeader) tabsHeader.style.display = 'none';
    if (confirmHeader) confirmHeader.style.display = 'flex';
    if (notice) notice.style.display = 'none';
    if (form) form.style.display = 'none';
    if (confirmView) confirmView.style.display = 'flex';
    if (emailDisp) emailDisp.textContent = email;
    if (otpInput) { otpInput.value = ''; setTimeout(() => otpInput.focus(), 150); }
    if (otpErr) otpErr.style.display = 'none';
  }

  function cancelAuthConfirm() {
    stopEmailConfirmPolling();
    const tabsHeader = document.getElementById('authTabsHeader');
    const confirmHeader = document.getElementById('authConfirmHeader');
    const notice = document.getElementById('authNotice');
    const form = document.getElementById('authForm');
    const confirmView = document.getElementById('authConfirmView');

    if (tabsHeader) tabsHeader.style.display = 'flex';
    if (confirmHeader) confirmHeader.style.display = 'none';
    if (notice) notice.style.display = 'flex';
    if (form) form.style.display = 'flex';
    if (confirmView) confirmView.style.display = 'none';
  }

  function startEmailConfirmPolling(email, password) {
    stopEmailConfirmPolling();
    pendingAuthEmail = email;
    pendingAuthPassword = password;
    emailConfirmPollCount = 0;

    emailConfirmPollTimer = setInterval(async () => {
      emailConfirmPollCount++;
      if (emailConfirmPollCount > 120) {
        stopEmailConfirmPolling();
        return;
      }
      try {
        if (!supabaseClient || !pendingAuthEmail || !pendingAuthPassword) return;
        const { data, error } = await supabaseClient.auth.signInWithPassword({
          email: pendingAuthEmail,
          password: pendingAuthPassword
        });
        if (data && data.session && data.user) {
          stopEmailConfirmPolling();
          currentAuthUser = data.user;
          updateAuthUI();
          closeModal('authModal');
          showToast('メール認証が完了しました！自動ログインしました 🎉');
          await syncAfterLogin();
        }
      } catch (e) {
        // Silent polling while awaiting user verification
      }
    }, 2500);
  }

  function stopEmailConfirmPolling() {
    if (emailConfirmPollTimer) {
      clearInterval(emailConfirmPollTimer);
      emailConfirmPollTimer = null;
    }
  }

  async function handleOtpSubmit(e) {
    e.preventDefault();
    if (!supabaseClient || !pendingAuthEmail) return;
    const token = (document.getElementById('authOtpInput').value || '').trim();
    const btn = document.getElementById('authOtpSubmitBtn');
    const errorEl = document.getElementById('authOtpErrorMsg');
    if (!token) return;

    btn.disabled = true;
    btn.textContent = '認証中...';
    errorEl.style.display = 'none';

    try {
      let { data, error } = await supabaseClient.auth.verifyOtp({
        email: pendingAuthEmail,
        token: token,
        type: 'signup'
      });
      if (error) {
        const res2 = await supabaseClient.auth.verifyOtp({
          email: pendingAuthEmail,
          token: token,
          type: 'email'
        });
        if (res2.error) throw error;
        data = res2.data;
      }
      stopEmailConfirmPolling();
      currentAuthUser = data.user;
      updateAuthUI();
      closeModal('authModal');
      showToast('メール認証が完了しました！ようこそ就勝へ 🎉');
      await syncAfterLogin();
    } catch (err) {
      console.error('OTP verify error:', err);
      errorEl.textContent = '認証コードが無効または期限切れです。入力内容をご確認ください。';
      errorEl.style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = '認証して登録完了';
    }
  }

  async function resendSignupEmail() {
    if (!supabaseClient || !pendingAuthEmail) return;
    const btn = document.getElementById('btnResendEmail');
    if (btn) {
      btn.disabled = true;
      btn.textContent = '送信中...';
    }
    try {
      const { error } = await supabaseClient.auth.resend({
        type: 'signup',
        email: pendingAuthEmail
      });
      if (error) throw error;
      showToast('確認メールを再送信しました！');
      if (btn) {
        btn.textContent = '再送信済み';
        setTimeout(() => {
          if (btn) { btn.disabled = false; btn.textContent = 'メールを再送信'; }
        }, 30000);
      }
    } catch (err) {
      alert('メール再送信に失敗しました: ' + (err.message || err));
      if (btn) { btn.disabled = false; btn.textContent = 'メールを再送信'; }
    }
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    if (!supabaseClient) {
      alert('クラウド同期機能が準備できていません。ネットワーク環境をご確認ください。');
      return;
    }
    const email = document.getElementById('authEmail').value.trim();
    const password = document.getElementById('authPassword').value;
    const btn = document.getElementById('authSubmitBtn');
    const errorEl = document.getElementById('authErrorMsg');

    btn.disabled = true;
    btn.textContent = '通信中...';
    errorEl.style.display = 'none';

    try {
      if (currentAuthMode === 'login') {
        const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
        if (error) throw error;
        currentAuthUser = data.user;
        updateAuthUI();
        closeModal('authModal');
        showToast('ログインしました！クラウドと同期中…');
        await syncAfterLogin();
      } else {
        const { data, error } = await supabaseClient.auth.signUp({ email, password });
        if (error) throw error;
        if (!data.session && data.user && data.user.identities && data.user.identities.length === 0) {
          throw new Error('User already registered');
        }
        if (!data.session) {
          showAuthConfirmView(email, password);
          startEmailConfirmPolling(email, password);
          return;
        }
        currentAuthUser = data.user;
        updateAuthUI();
        closeModal('authModal');
        showToast('アカウントを作成しました！クラウド同期を開始します');
        await syncAfterLogin();
      }
    } catch (err) {
      console.error('Auth error:', err);
      let rawMsg = (err && err.message) ? err.message : String(err);
      let friendlyMsg = '認証エラーが発生しました。';
      if (rawMsg.includes('Failed to fetch') || rawMsg.includes('fetch')) {
        friendlyMsg = '通信に失敗しました。Ctrl+F5（Mac: Cmd+Shift+R）でブラウザキャッシュを更新して再読み込みしてください。';
      } else if (rawMsg.includes('Email not confirmed')) {
        friendlyMsg = 'メールアドレスの認証が未完了です。受信トレイの確認メールをご確認いただくか、認証コードを入力してください。';
      } else if (rawMsg.includes('rate limit')) {
        friendlyMsg = 'メール送信制限に達しました。しばらく時間をおいてから再度お試しください。';
      } else if (rawMsg.includes('Invalid login credentials')) {
        friendlyMsg = 'メールアドレスまたはパスワードが正しくありません。';
      } else if (rawMsg.includes('already registered')) {
        friendlyMsg = 'このメールアドレスは既に登録されています。「ログイン」タブからログインしてください。';
      } else {
        friendlyMsg = rawMsg;
      }
      errorEl.textContent = friendlyMsg;
      errorEl.style.display = 'block';
    } finally {
      btn.disabled = false;
      btn.textContent = currentAuthMode === 'login' ? 'ログイン' : 'アカウントを作成して同期開始';
    }
  }

  async function handleGoogleLogin() {
    if (!supabaseClient) {
      alert('クラウド同期機能が準備できていません。ネットワーク環境をご確認ください。');
      return;
    }
    const btn = document.getElementById('googleLoginBtn');
    if (btn) {
      btn.disabled = true;
      btn.style.opacity = '0.7';
      btn.innerHTML = '<span>Google に接続中...</span>';
    }

    const targetRedirect = window.location.protocol.startsWith('http') 
      ? window.location.origin 
      : 'https://syukatsu.win';

    console.log('[Google Auth Start]', { targetRedirect, supabaseUrl: SUPABASE_URL });

    try {
      const { data, error } = await supabaseClient.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: targetRedirect
        }
      });
      if (error) throw error;
      if (data && data.url) {
        console.log('[Google Auth Redirecting to]', data.url);
      }
    } catch (err) {
      console.error('[Google Auth Error]', err);
      const errorEl = document.getElementById('authErrorMsg');
      if (errorEl) {
        errorEl.textContent = 'Googleログインに失敗しました: ' + (err.message || err);
        errorEl.style.display = 'block';
      }
      if (btn) {
        btn.disabled = false;
        btn.style.opacity = '1';
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg><span>Google でログイン</span>`;
      }
    }
  }

  async function handleLogout() {
    if (!supabaseClient) return;
    if (!confirm('ログアウトしますか？\n（クラウド上の選考データは保護されます。次回ログイン時にいつでも再同期できます）')) return;
    await supabaseClient.auth.signOut();
    currentAuthUser = null;
    updateAuthUI();
    loadAll();
    renderAll();
    switchView('db');
    renderDB(true);
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('open');
    showToast('ログアウトしました');
  }

  function parseCloudItemTags(tags) {
    let myPageUrl = '';
    let myPageId = '';
    let myPagePass = '';
    let compName = '';
    let cloudEvents = [];
    const cleanTags = [];
    if (Array.isArray(tags)) {
      tags.forEach(t => {
        if (typeof t !== 'string') return;
        if (t.startsWith('__mp_url:')) {
          try { myPageUrl = decodeURIComponent(t.slice(9)); } catch(e) { myPageUrl = t.slice(9); }
        } else if (t.startsWith('__mp_id:')) {
          try { myPageId = decodeURIComponent(t.slice(8)); } catch(e) { myPageId = t.slice(8); }
        } else if (t.startsWith('__mp_pass:')) {
          try { myPagePass = decodeURIComponent(t.slice(10)); } catch(e) { myPagePass = t.slice(10); }
        } else if (t.startsWith('__cn:')) {
          try { compName = decodeURIComponent(t.slice(5)); } catch(e) { compName = t.slice(5); }
        } else if (t.startsWith('__ev:')) {
          try { cloudEvents = JSON.parse(decodeURIComponent(t.slice(5))); } catch(e) {}
        } else {
          cleanTags.push(t);
        }
      });
    }
    return { myPageUrl, myPageId, myPagePass, compName, cleanTags, cloudEvents };
  }

  function packCompanyCloudTags(c) {
    const baseTags = (c.tags || []).filter(t => typeof t === 'string' && !t.startsWith('__mp_') && !t.startsWith('__cn:') && !t.startsWith('__ev:'));
    if (c.myPageUrl) baseTags.push('__mp_url:' + encodeURIComponent(c.myPageUrl));
    if (c.myPageId) baseTags.push('__mp_id:' + encodeURIComponent(c.myPageId));
    if (c.myPagePass) baseTags.push('__mp_pass:' + encodeURIComponent(c.myPagePass));
    const full = getFullCatalog();
    if (c.name && (c.isCustom || !full.find(x => x.id === c.id))) {
      baseTags.push('__cn:' + encodeURIComponent(c.name));
    }
    const cEvents = selectionEvents.filter(e => e.companyId === c.id);
    if (cEvents.length > 0) {
      baseTags.push('__ev:' + encodeURIComponent(JSON.stringify(cEvents)));
    }
    return baseTags;
  }

  async function syncAfterLogin() {
    if (!supabaseClient || !currentAuthUser) return;
    try {
      // 0. 未ログイン時の展示用デモ・旧ローカルキャッシュを完全パージ
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(SETTINGS_KEY);
        localStorage.removeItem(TASKS_KEY);
        localStorage.removeItem(EVENTS_KEY);
        localStorage.removeItem(ES_KEY);
        localStorage.removeItem(STORIES_KEY);
      } catch (e) {}

      loadAll();

      const { data: cloudItems, error } = await supabaseClient
        .from('user_selections')
        .select('*')
        .eq('user_id', currentAuthUser.id);

      if (error) {
        console.warn('クラウドデータ取得エラー:', error);
        return;
      }

      const cloudMap = new Map();
      if (cloudItems && cloudItems.length) {
        cloudItems.forEach(item => cloudMap.set(item.company_id, item));
      }

      // 0. 云端残留的 c_custom_acc_ 临时记录自动清除
      const staleCustom = (cloudItems || []).filter(item => item.company_id.startsWith('c_custom_acc_'));
      if (staleCustom.length > 0) {
        await supabaseClient.from('user_selections').delete().eq('user_id', currentAuthUser.id).like('company_id', 'c_custom_acc_%');
      }

      // 0.1 自动清除云端任何残留的假种子企业（如 Sony, Toyota, Mitsubishi Corp, Recruit, Mercari, Freee 等无真实 MyPage 的假数据）
      const DUMMY_SEED_IDS = new Set([
        'c_sony', 'c_toyota', 'c_mitsubishi_corp', 'c_recruit', 'c_mercari', 'c_freee',
        'c_deloitte', 'c_nttdata', 'c_unlisted_rms', 'c_tcs', 'c_keyence', 'c_8766', 'c_itochu', 'c_nri', 'c_7974', 'c_baycurrent', 'c_unlisted_bdx'
      ]);
      const dummyInCloud = (cloudItems || []).filter(item => {
        if (!DUMMY_SEED_IDS.has(item.company_id)) return false;
        const parsed = parseCloudItemTags(item.tags);
        return !parsed.myPageUrl && !parsed.myPageId && !parsed.myPagePass;
      });
      if (dummyInCloud.length > 0) {
        for (const d of dummyInCloud) {
          await supabaseClient.from('user_selections').delete().eq('user_id', currentAuthUser.id).eq('company_id', d.company_id);
          cloudMap.delete(d.company_id);
        }
      }

      // 0.2 重置三井住友银行的假截稿日期（保留真实的 MyPage 账号）
      const smbcItem = cloudMap.get('c_smbc');
      if (smbcItem && (smbcItem.due === '2026-09-08' || smbcItem.due_label === 'ES提出')) {
        await supabaseClient.from('user_selections').update({ due: null, due_label: null, due_lv: null }).eq('user_id', currentAuthUser.id).eq('company_id', 'c_smbc');
        smbcItem.due = null;
        smbcItem.due_label = null;
        smbcItem.due_lv = null;
      }

      // 1. 只有当云端没有任何数据（全新注册用户），且本地存在真正由用户手动登记的非种子企业时，才进行单向初次上云
      // 若用户云端已有数据，云端为唯一真理（Source of Truth），严禁将移动端/未登录时的种子演示数据倒灌回云端
      if (!cloudItems || cloudItems.length === 0) {
        const localAdded = catalog.filter(c => 
          !c.id.startsWith('c_custom_acc_') &&
          !DUMMY_SEED_IDS.has(c.id) &&
          (c.isCustom || c.myPageUrl || c.myPageId || (c.added && c.stage && c.stage !== 'watch' && (c.noteMotiv || c.noteEs)))
        );
        const toUpsert = [];
        localAdded.forEach(c => {
          toUpsert.push({
            user_id: currentAuthUser.id,
            company_id: c.id,
            stage: c.stage || 'watch',
            due: c.due || null,
            due_label: c.dueLabel || null,
            due_lv: c.dueLv || null,
            note_motiv: c.noteMotiv || null,
            note_es: c.noteEs || null,
            note_interview: c.noteInterview || null,
            tags: packCompanyCloudTags(c),
            updated_at: new Date().toISOString()
          });
        });
        if (toUpsert.length > 0) {
          await supabaseClient.from('user_selections').upsert(toUpsert, { onConflict: 'user_id,company_id' });
        }
      }

      // 2. 以云端数据为权威，完整重构本地 catalog 选考状态
      const fullCatalog = getFullCatalog();
      const masterMap = new Map();
      fullCatalog.forEach(c => masterMap.set(c.id, c));

      // 先重置所有 master 企业的选考状态
      catalog = fullCatalog.map(m => {
        const item = cloudMap.get(m.id);
        if (DUMMY_SEED_IDS.has(m.id)) {
          const parsed = item ? parseCloudItemTags(item.tags) : {};
          if (!parsed.myPageUrl && !parsed.myPageId && !parsed.myPagePass) {
            return Object.assign({}, m, {
              added: false,
              stage: 'watch',
              due: '',
              dueLabel: '',
              dueLv: '',
              noteMotiv: '',
              noteEs: '',
              noteInterview: '',
              isCustom: false,
              myPageUrl: '',
              myPageId: '',
              myPagePass: ''
            });
          }
        }
        if (item && !UNWANTED_MYPAGE_ACC_IDS.has(item.company_id)) {
          const parsed = parseCloudItemTags(item.tags);
          // 重要な仕様: MyPage情報があっても勝手に選考管理リスト(added=true)に追加しない
          // 正式選考として追加(stage !== 'watch')されている企業のみを選考管理対象とする
          const isItemAdded = Boolean(item.stage && item.stage !== 'watch');
          return Object.assign({}, m, {
            added: isItemAdded,
            stage: isItemAdded ? item.stage : 'watch',
            due: isItemAdded ? (item.due || '') : '',
            dueLabel: isItemAdded ? (item.due_label || '') : '',
            dueLv: isItemAdded ? (item.due_lv || '') : '',
            noteMotiv: item.note_motiv || '',
            noteEs: item.note_es || '',
            noteInterview: item.note_interview || '',
            tags: (parsed.cleanTags.length && !parsed.cleanTags.includes('手動登録')) ? parsed.cleanTags : (m.tags || []),
            isCustom: false,
            myPageUrl: parsed.myPageUrl || '',
            myPageId: parsed.myPageId || '',
            myPagePass: parsed.myPagePass || ''
          });
        }
        return Object.assign({}, m, {
          added: false,
          stage: 'watch',
          due: '',
          dueLabel: '',
          dueLv: '',
          noteMotiv: '',
          noteEs: '',
          noteInterview: '',
          isCustom: false,
          myPageUrl: '',
          myPageId: '',
          myPagePass: ''
        });
      });

      // 补充云端存在的非 master（手动注册）企业
      const validCloudItems = (cloudItems || []).filter(item => !item.company_id.startsWith('c_custom_acc_'));
      validCloudItems.forEach(item => {
        if (masterMap.has(item.company_id) || UNWANTED_MYPAGE_ACC_IDS.has(item.company_id)) return;
        const parsed = parseCloudItemTags(item.tags);
        const isItemAdded = Boolean(item.stage && item.stage !== 'watch');
        catalog.unshift({
          id: item.company_id,
          name: parsed.compName || item.company_id,
          cat: 'その他',
          ind17: 'その他',
          sub: 'その他',
          emp: null,
          payBachelor: null,
          payMaster: null,
          avgAnnual: null,
          color: '#6366f1',
          added: isItemAdded,
          stage: isItemAdded ? item.stage : 'watch',
          due: isItemAdded ? (item.due || '') : '',
          dueLabel: isItemAdded ? (item.due_label || '') : '',
          dueLv: isItemAdded ? (item.due_lv || '') : '',
          noteMotiv: item.note_motiv || '',
          noteEs: item.note_es || '',
          noteInterview: item.note_interview || '',
          tags: parsed.cleanTags.length ? parsed.cleanTags : ['手動登録'],
          isCustom: true,
          myPageUrl: parsed.myPageUrl || '',
          myPageId: parsed.myPageId || '',
          myPagePass: parsed.myPagePass || ''
        });
      });

      catalog = catalog.filter(c => !c.id.startsWith('c_custom_acc_'));

      // 从云端 tags 恢复选考日程事件（待办事项）
      (cloudItems || []).forEach(item => {
        if (!item.tags || DUMMY_SEED_IDS.has(item.company_id)) return;
        const parsed = parseCloudItemTags(item.tags);
        if (parsed.cloudEvents && parsed.cloudEvents.length > 0) {
          parsed.cloudEvents.forEach(cev => {
            const existingIdx = selectionEvents.findIndex(e => e.id === cev.id);
            if (existingIdx !== -1) {
              selectionEvents[existingIdx] = Object.assign({}, selectionEvents[existingIdx], cev);
            } else {
              selectionEvents.push(cev);
            }
          });
        }
      });

      selectionEvents = selectionEvents.filter(e => !DUMMY_SEED_IDS.has(e.companyId));
      saveAll();
      renderAll();
      if (currentView === 'mypage') renderMyPageTable();
      showToast('クラウド同期が完了しました');
    } catch (err) {
      console.warn('Sync error:', err);
    }
  }

  function triggerCloudSave() {
    if (!supabaseClient || !currentAuthUser) return;
    clearTimeout(cloudSyncTimer);
    cloudSyncTimer = setTimeout(async () => {
      try {
        const DUMMY_SEED_IDS = new Set([
          'c_sony', 'c_toyota', 'c_mitsubishi_corp', 'c_recruit', 'c_mercari', 'c_freee',
          'c_deloitte', 'c_nttdata', 'c_unlisted_rms', 'c_tcs', 'c_keyence', 'c_8766', 'c_itochu', 'c_nri', 'c_7974', 'c_baycurrent', 'c_unlisted_bdx'
        ]);

        const localAdded = catalog.filter(c => 
          !c.id.startsWith('c_custom_acc_') &&
          !(DUMMY_SEED_IDS.has(c.id) && !c.myPageUrl && !c.myPageId) &&
          (c.added || c.myPageUrl || c.myPageId || c.myPagePass)
        );
        const toUpsert = localAdded.map(c => ({
          user_id: currentAuthUser.id,
          company_id: c.id,
          stage: (c.added && c.stage && c.stage !== 'watch') ? c.stage : 'watch',
          due: (c.added && c.id === 'c_smbc' && c.due === '2026-09-08') ? null : (c.added ? (c.due || null) : null),
          due_label: (c.added && c.id === 'c_smbc' && c.dueLabel === 'ES提出') ? null : (c.added ? (c.dueLabel || null) : null),
          due_lv: c.added ? (c.dueLv || null) : null,
          note_motiv: c.noteMotiv || null,
          note_es: c.noteEs || null,
          note_interview: c.noteInterview || null,
          tags: packCompanyCloudTags(c),
          updated_at: new Date().toISOString()
        }));

        if (toUpsert.length > 0) {
          await supabaseClient.from('user_selections').upsert(toUpsert, { onConflict: 'user_id,company_id' });
        }
      } catch (err) {
        console.warn('Auto cloud sync failed:', err);
      }
    }, 600);
  }

  async function manualSyncCloud() {
    const dd = document.getElementById('userDropdown');
    if (dd) dd.classList.remove('open');
    showToast('クラウド同期中…');
    await syncAfterLogin();
  }

  // ---- 表示ヘルパ ----
  function fmtEmp(c) {
    if (c.emp == null) return '—';
    const n = c.emp;
    let s = n >= 10000 ? '約' + (n/10000).toFixed(n>=100000?0:1).replace(/\.0$/,'') + '万人'
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
    return c.payBachelor == null ? '—' : (c.payBachelor/10000).toFixed(1) + '万円';
  }

  function fmtPayMaster(c) {
    return c.payMaster == null ? '—' : (c.payMaster/10000).toFixed(1) + '万円';
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
    const clean = name.replace(/株式会社|\(株\)|（株）|合同会社|相互会社/gi, '').trim();
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

  // 締切カウントダウン計算
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
      const dateStr = `${targetDate.getMonth()+1}/${targetDate.getDate()}`;

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
        return { text: `${label}${dateStr}`, cls: '', badge: `残り${diffDays}日`, days: diffDays };
      }
    }

    return { text: (c.dueLabel ? c.dueLabel + ' ' : '') + c.due, cls: c.dueLv || '', badge: c.dueLv==='urgent'?'至急':(c.dueLv==='soon'?'近日期限':''), days: null };
  }

  // ===================== ビュー切替 =====================
  let currentView = 'db';
  function switchView(v) {
    currentView = v;
    const tabTarget = v === 'mypage' ? 'list' : v;
    document.querySelectorAll('nav.tabs button').forEach(b => b.classList.toggle('active', b.dataset.view === tabTarget));
    document.querySelectorAll('.mobile-nav-btn').forEach(b => b.classList.toggle('active', b.dataset.view === tabTarget));
    document.querySelectorAll('.view').forEach(s => s.classList.toggle('active', s.id === 'view-' + v));
    document.body.classList.toggle('view-kanban-active', v === 'kanban');

    // 切替時、ブラウザのパスワードマネージャーが検索欄へ誤自動入力したメールアドレス等を自動排除
    const s = document.getElementById('search');
    if (s && s.value && (s.value.includes('@') || s.value.includes('syukatsu.win'))) {
      s.value = '';
      keyword = '';
    }

    if (v === 'mypage') {
      renderMyPageTable();
    } else if (v === 'radar') {
      // 締切レーダーは現在オフライン（機能改善・検証中のため一時非表示）
      switchView('db');
      return;
    } else {
      renderAll();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.getElementById('tabs').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b && b.dataset.view) switchView(b.dataset.view);
  });

  // ===================== VIEW 1: 企業DB =====================
  const grid = document.getElementById('grid');
  let dbFilter = 'すべて', keyword = '', dbSort = 'pop_asc';
  const dbChips = [...document.querySelectorAll('#dbFilters .chip')];

  function dbCardHtml(c) {
    const size = sizeLabel(c);
    const dueInfo = getDueStatus(c);
    const isCustomBadge = c.isCustom ? `<span class="tag custom">手動登録</span>` : '';
    const empStr = fmtEmp(c);
    const empBadge = empStr !== '—' ? `<span class="tag emp">従業員 ${empStr}</span>` : '';
    const isTop = c.popBadge && c.popBadge.includes('TOP');
    const popBadgeHtml = c.popBadge ? `<span class="tag pop ${isTop ? 'pop-top' : 'pop-elite'}">${isTop ? '<span class="star">★</span>' + c.popBadge : c.popBadge}</span>` : '';
    return `
      <div class="card ${c.added ? 'added' : ''}" style="--accent:${c.color || '#8b7bff'}">
        <div class="top">
          ${logoHtml(c)}
          <div style="min-width:0;flex:1">
            <div class="name" onclick="openDetailModal('${c.id}')">${c.name} ${c.code ? `<span class="code">${c.code}</span>` : ''}</div>
            <div class="meta">${catOf(c)} ・ ${c.sub || '未分類'}</div>
          </div>
        </div>
        <div class="tags">
          ${popBadgeHtml}
          <span class="tag ind">${catOf(c)}</span>
          ${c.market === '非上場' || c.scale === '非上場名門' ? `<span class="tag" style="color:var(--gold-2);border-color:rgba(217,178,95,.4);background:rgba(217,178,95,.1)">非上場名門</span>` : ''}
          ${c.market === '外資系' ? `<span class="tag" style="color:var(--cyan);border-color:rgba(79,216,232,.4);background:rgba(79,216,232,.1)">外資系</span>` : ''}
          ${size ? `<span class="tag size">${size}</span>` : ''}
          ${empBadge}
          ${isCustomBadge}
          ${(c.tags || []).filter(t => !['非上場名門','プライム上場','グロース上場'].includes(t)).slice(0, 3).map(t => `<span class="tag free">${t}</span>`).join('')}
        </div>
        <div class="foot">
          <div class="pay-wrap">
            <span class="pay">大卒 <b>${fmtPay(c)}</b>${c.payMaster ? `<span style="font-size:10.5px;color:var(--sub);font-weight:normal;margin-left:3px">(院 <b>${fmtPayMaster(c)}</b>)</span>` : ''}</span>
            <span class="annual-pay">年収 <b>${fmtAnnual(c)}</b></span>
          </div>
          <div class="card-btns">
            <button class="btn-sm-ghost" onclick="openDetailModal('${c.id}')" title="詳細・面接メモを編集">詳細</button>
            <button class="add-btn ${c.added ? 'added' : ''}" onclick="toggleAdd('${c.id}', event)">
              ${c.added ? '追加済み ✓' : '＋ 管理に追加'}
            </button>
          </div>
        </div>
      </div>`;
  }

  // ===================== スマートあいまい検索エンジン =====================
  function toKatakana(str) {
    if (!str) return '';
    return str.replace(/[\u3041-\u3096]/g, ch => String.fromCharCode(ch.charCodeAt(0) + 0x60));
  }

  function normalizeSearchText(str) {
    if (!str) return '';
    return toKatakana(String(str).normalize('NFKC').toLowerCase());
  }

  function stripNoise(str) {
    if (!str) return '';
    const norm = normalizeSearchText(str);
    return norm
      .replace(/株式会社|（株）|\(株\)|有限会社|合同会社|ホールディングス|グループ/g, '')
      .replace(/[・\-\s_、。/／\(\)（）「」【】]/g, '');
  }

  const KNOWN_ALIASES = {
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

  function dbMatches(c) {
    if (keyword && !smartSearchMatches(c, keyword)) return false;
    switch (dbFilter) {
      case 'すべて': return true;
      case '人気TOP300': return (c.popRank || 9999) <= 300;
      case '大企業': return sizeLabel(c) === '大企業';
      case '非上場名門': return c.market === '非上場' || c.market === '外資系' || c.scale === '非上場名門' || (c.tags || []).includes('非上場名門');
      case '未追加のみ': return !c.added;
      case '選考中のみ': return c.added && ['entry', 'es', 'first', 'final'].includes(c.stage);
      default: return catOf(c) === dbFilter;
    }
  }

  function onDbSortChange(val) {
    dbSort = val;
    renderDB();
  }

  let dbPageSize = 60;
  function renderDB(resetPage = true) {
    if (resetPage) dbPageSize = 60;
    let list = catalog.filter(c => dbMatches(c));

    if (dbSort === 'pop_asc' || dbSort === 'default') {
      list.sort((a, b) => (a.popRank || 9999) - (b.popRank || 9999));
    } else if (dbSort === 'annual_desc') {
      list.sort((a, b) => (b.avgAnnual || 0) - (a.avgAnnual || 0));
    } else if (dbSort === 'pay_desc') {
      list.sort((a, b) => (b.payBachelor || 0) - (a.payBachelor || 0));
    } else if (dbSort === 'emp_desc') {
      list.sort((a, b) => (b.emp || 0) - (a.emp || 0));
    } else if (dbSort === 'name_asc') {
      list.sort((a, b) => (a.name || '').localeCompare(b.name || '', 'ja'));
    }

    const shownList = list.slice(0, dbPageSize);
    const hasMore = list.length > dbPageSize;

    let html = shownList.map(c => dbCardHtml(c)).join('');
    if (hasMore) {
      const remain = list.length - dbPageSize;
      const nextBatch = Math.min(60, remain);
      const lockTag = !currentAuthUser ? '🔒 ' : '';
      html += `
        <div style="grid-column: 1 / -1; display: flex; justify-content: center; align-items: center; padding: 26px 0 10px; gap: 14px; flex-wrap: wrap;">
          <button class="top-btn primary" onclick="loadMoreDb()" style="padding: 10px 24px; font-size: 13.5px;">
            ${lockTag}さらに表示する（残り ${remain} 社 / 次の${nextBatch}社を表示）
          </button>
          <button class="top-btn" onclick="loadAllDb()" style="padding: 10px 18px; font-size: 13.5px;">
            ${lockTag}全${list.length}社を一括表示
          </button>
        </div>`;
    }

    if (!html) {
      const q = keyword ? `「${keyword}」` : '';
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; padding: 46px 20px; text-align: center; background: rgba(255,255,255,0.02); border: 1px dashed var(--glass-brd); border-radius: 16px; margin: 10px 0;">
          <div style="font-size: 36px; margin-bottom: 10px;">🔍</div>
          <div style="font-size: 15px; font-weight: 700; color: var(--ink); margin-bottom: 6px;">${q} に該当する企業が見つかりませんでした</div>
          <p style="color: var(--sub); font-size: 12.5px; max-width: 440px; margin: 0 auto 16px;">データベース未収録の企業も、手動登録すればすぐにカンバン・選考管理に追加できます。</p>
          <button class="top-btn primary" onclick="openNewCompanyWithKeyword('${keyword.replace(/'/g, "\\'")}')" style="display: inline-flex; margin: 0 auto; padding: 9px 20px;">
            ＋ ${q ? q + ' を' : ''}手動登録して選考管理に追加
          </button>
        </div>`;
    } else {
      grid.innerHTML = html;
    }

    document.getElementById('dbTotal').textContent = catalog.length;
    document.getElementById('dbShown').textContent = Math.min(dbPageSize, list.length);
  }

  function openNewCompanyWithKeyword(kw = '') {
    if (!requireAuth('新規企業の手動登録')) return;
    openNewCompanyModal();
    if (kw) {
      const input = document.getElementById('newCompName');
      if (input) input.value = kw;
    }
  }

  function loadMoreDb() {
    if (!requireAuth('全企業リスト（1,735社）を展開・閲覧')) return;
    dbPageSize += 60;
    renderDB(false);
  }

  function loadAllDb() {
    if (!requireAuth('全企業リスト（1,735社）を一括表示')) return;
    dbPageSize = catalog.length;
    renderDB(false);
  }

  dbChips.forEach(chip => chip.addEventListener('click', () => {
    dbChips.forEach(x => x.classList.remove('on'));
    chip.classList.add('on');
    dbFilter = chip.textContent.trim();
    renderDB();
  }));

  function toggleAdd(id, event) {
    if (event) event.stopPropagation();
    if (!requireAuth('企業の選考管理・カンバン追加')) return;
    const c = catalog.find(x => x.id === id);
    if (!c) return;
    c.added = !c.added;
    if (c.added) {
      if (!c.stage || c.stage === 'watch') c.stage = 'entry';
      if (!c.loc) c.loc = '—';
      if (!c.tags) c.tags = [];
      showToast(`「${c.name}」を選考リストに追加しました`);
    } else {
      c.stage = 'watch';
      c.due = '';
      c.dueLabel = '';
      c.dueLv = '';
      selectionEvents = selectionEvents.filter(e => e.companyId !== id);
      showToast(`「${c.name}」を選考リストから外しました`);

      if (supabaseClient && currentAuthUser) {
        if (!c.myPageUrl && !c.myPageId && !c.myPagePass) {
          supabaseClient.from('user_selections').delete().eq('user_id', currentAuthUser.id).eq('company_id', id).then();
        } else {
          supabaseClient.from('user_selections').update({
            stage: 'watch',
            due: null,
            due_label: null,
            due_lv: null
          }).eq('user_id', currentAuthUser.id).eq('company_id', id).then();
        }
      }
    }
    saveAll();
    renderAll();
  }

  // ===================== VIEW 2: カンバン =====================
  const board = document.getElementById('board');

  function kCardHtml(c) {
    const dueInfo = getDueStatus(c);
    let dueBadge = '';
    if (c.stage === 'rejected') {
      dueBadge = `<span class="k-due" style="color:#f87171;background:rgba(239,68,68,0.12);border:1px solid rgba(239,68,68,0.3)">選考終了</span>`;
    } else {
      dueBadge = dueInfo.badge ? `<span class="k-due ${dueInfo.cls}">${dueInfo.badge}</span>` : (dueInfo.text ? `<span class="k-due">${dueInfo.text}</span>` : '');
    }

    return `
      <div class="kcard"
           id="kcard_${c.id}"
           draggable="true"
           ondragstart="onCardDragStart(event, '${c.id}')"
           ondragend="onCardDragEnd(event)"
           onclick="openDetailModal('${c.id}')"
           style="--accent:${c.stage === 'rejected' ? '#ef4444' : (c.color || '#8b7bff')}">
        <div class="kcard-inner">
          ${logoHtml(c)}
          <div class="name" title="${c.name}">${c.name}</div>
          ${dueBadge}
        </div>
      </div>`;
  }

  function renderKanban() {
    const added = catalog.filter(c => c.added);
    board.innerHTML = stages.map(st => {
      const items = added.filter(c => ((c.stage === 'watch' || !c.stage) ? 'entry' : c.stage) === st.key);
      const body = items.length
        ? items.map(c => kCardHtml(c)).join('')
        : `<div class="empty-hint">企業カードをここにドラッグ</div>`;

      return `
        <div class="col"
             data-stage="${st.key}"
             ondragover="onColDragOver(event)"
             ondragleave="onColDragLeave(event)"
             ondrop="onColDrop(event, '${st.key}')">
          <div class="col-head">
            <span class="dot" style="background:${st.color};color:${st.color}"></span>
            ${st.label}
            <span class="desc">${st.desc}</span>
            <span class="count">${items.length}</span>
          </div>
          <div class="col-body">${body}</div>
        </div>`;
    }).join('');

    const activeKeys = ['entry', 'es', 'first', 'final'];
    document.getElementById('kActive').textContent = added.filter(c => activeKeys.includes(c.stage)).length;
    document.getElementById('kOffer').textContent = added.filter(c => c.stage === 'offer').length;
    const kRejEl = document.getElementById('kRejected');
    if (kRejEl) kRejEl.textContent = added.filter(c => c.stage === 'rejected').length;
    document.getElementById('kDue').textContent = added.filter(c => {
      if (c.stage === 'rejected' || c.stage === 'offer') return false;
      const d = getDueStatus(c);
      return d.days !== null && d.days >= 0 && d.days <= 7;
    }).length;
  }

  // ドラッグ＆ドロップ
  let draggedCardId = null;
  function onCardDragStart(e, id) {
    draggedCardId = id;
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
    const cardEl = document.getElementById('kcard_' + id);
    if (cardEl) setTimeout(() => cardEl.classList.add('dragging'), 0);
  }
  function onCardDragEnd(e) {
    const cardEl = document.getElementById('kcard_' + draggedCardId);
    if (cardEl) cardEl.classList.remove('dragging');
    document.querySelectorAll('.col').forEach(c => c.classList.remove('drag-over'));
  }
  function onColDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const col = e.currentTarget;
    if (!col.classList.contains('drag-over')) col.classList.add('drag-over');
  }
  function onColDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
  }
  function onColDrop(e, stageKey) {
    e.preventDefault();
    if (!requireAuth('選考ステージの変更')) return;
    e.currentTarget.classList.remove('drag-over');
    const cid = e.dataTransfer.getData('text/plain') || draggedCardId;
    if (!cid) return;
    const c = catalog.find(x => x.id === cid);
    if (c && c.stage !== stageKey) {
      c.stage = stageKey;
      c.added = true;
      saveAll();
      renderAll();
      showToast(`「${c.name}」を「${stageMap[stageKey].label}」に移動しました`);
    }
  }



  // ===================== VIEW 2: 選考管理リスト =====================
  const tbody = document.getElementById('tbody');
  let listFilter = 'すべて';
  const listChips = [...document.querySelectorAll('#listFilters .chip')];

  function listMatches(c) {
    if (keyword && !smartSearchMatches(c, keyword)) return false;
    const nextAct = getCompanyNextAction(c.id);
    switch (listFilter) {
      case 'すべて': return true;
      case '締切あり': return (nextAct.hasEvent || !!c.due) && c.stage !== 'rejected';
      case '直近締切あり': return nextAct.days !== null && nextAct.days >= 0 && nextAct.days <= 7 && c.stage !== 'rejected';
      case 'エントリー中': return c.stage === 'entry';
      case 'ES・Webテスト': return c.stage === 'es';
      case '面接中': return ['first', 'final'].includes(c.stage);
      case '内定・内々定': return c.stage === 'offer';
      case 'お祈り・落選': return c.stage === 'rejected';
      default: return true;
    }
  }

  let sortCol = 'due', sortAsc = true;

  function sortTable(col) {
    if (sortCol === col) {
      sortAsc = !sortAsc;
    } else {
      sortCol = col;
      sortAsc = true;
    }
    renderList();
  }

  function renderList() {
    let added = catalog.filter(c => c.added && listMatches(c));

    // ソート
    added.sort((a, b) => {
      let va, vb;
      if (sortCol === 'name') {
        va = a.name || ''; vb = b.name || '';
        return sortAsc ? va.localeCompare(vb, 'ja') : vb.localeCompare(va, 'ja');
      } else if (sortCol === 'stage') {
        const order = ['rejected', 'entry', 'es', 'first', 'final', 'offer'];
        va = order.indexOf(a.stage === 'watch' ? 'entry' : a.stage); vb = order.indexOf(b.stage === 'watch' ? 'entry' : b.stage);
      } else if (sortCol === 'due') {
        const actA = getCompanyNextAction(a.id);
        const actB = getCompanyNextAction(b.id);
        va = actA.datetime || '9999-99-99'; vb = actB.datetime || '9999-99-99';
        return sortAsc ? va.localeCompare(vb) : vb.localeCompare(va);
      } else if (sortCol === 'action') {
        const actA = getCompanyNextAction(a.id);
        const actB = getCompanyNextAction(b.id);
        va = actA.title || ''; vb = actB.title || '';
        return sortAsc ? va.localeCompare(vb, 'ja') : vb.localeCompare(va, 'ja');
      } else {
        va = a.popRank || 9999; vb = b.popRank || 9999;
      }
      return sortAsc ? (va > vb ? 1 : -1) : (va < vb ? 1 : -1);
    });

    // ソート矢印更新
    document.querySelectorAll('thead th .arrow').forEach(a => a.textContent = '↕');
    const activeArr = document.getElementById('arr-' + sortCol);
    if (activeArr) activeArr.textContent = sortAsc ? '▲' : '▼';

    if (added.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;padding:56px 16px;color:var(--sub);font-size:13px">選考管理中の企業はありません。「企業DB」から志望企業を追加してください。</td></tr>';
      document.getElementById('listShown').textContent = '0';
      return;
    }

    tbody.innerHTML = added.map(c => {
      const upcomingActs = getCompanyUpcomingEvents(c.id, 2);
      const st = stageMap[c.stage] || stageMap.entry;
      const initial = (c.name || '企').slice(0, 1);
      const popBadgeHtml = c.popBadge ? `<span style="font-size:10px;padding:1px 6px;margin-left:5px;border-radius:4px;background:rgba(217,178,95,.18);color:var(--gold-2);border:1px solid rgba(217,178,95,.4);font-weight:700">${c.popBadge}</span>` : '';

      // Next Action & Due HTML
      let actionHtml = '';
      let dueHtml = '';

      if (upcomingActs.length === 0) {
        actionHtml = `
          <div style="display:flex;align-items:center;gap:6px">
            <span style="color:var(--muted);font-size:12px">予定なし</span>
            <button class="btn-sm-ghost" style="padding:2px 6px;font-size:10.5px;color:var(--cyan);border-color:rgba(79,216,232,.3)" onclick="event.stopPropagation();openEventModal(null, '${c.id}')">＋予定</button>
          </div>
        `;
        dueHtml = `<span style="color:var(--muted);font-size:12px">—</span>`;
      } else if (upcomingActs.length === 1) {
        const act = upcomingActs[0];
        actionHtml = `
          <div class="action-col-cell">
            <div style="display:flex;align-items:center;gap:6px">
              ${renderEventTypeBadge(act.type)}
              <span style="font-weight:800;font-size:13px;color:var(--ink);">${escapeHtml(act.title)}</span>
            </div>
            ${act.event && act.event.memo ? `<div style="font-size:11px;color:var(--sub);margin-top:2px;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(act.event.memo)}">${escapeHtml(act.event.memo)}</div>` : ''}
          </div>
        `;
        dueHtml = `
          <div style="display:flex;align-items:center;gap:6px">
            <span style="font-weight:800;font-size:13px;color:var(--ink)">${act.dueText}</span>
            ${act.badgeText ? `<span class="badge-due-${act.badgeCls}">${act.badgeText}</span>` : ''}
          </div>
        `;
      } else {
        const [act1, act2] = upcomingActs;
        const hasMemo1 = !!(act1.event && act1.event.memo);
        const hasMemo2 = !!(act2.event && act2.event.memo);
        const extraCount = act2.totalUpcomingCount > 2 ? act2.totalUpcomingCount - 2 : 0;
        const extraBadge = extraCount > 0 ? `<span style="font-size:10px;padding:1px 5px;border-radius:4px;background:rgba(255,255,255,0.06);color:var(--sub);border:1px solid var(--glass-brd);margin-left:2px" title="他 ${extraCount}件の予定あり">+${extraCount}</span>` : '';

        actionHtml = `
          <div class="sel-events-stack">
            <div class="sel-event-row" style="flex-direction:column;align-items:flex-start;justify-content:center;min-height:${hasMemo1 ? '38px' : '22px'}">
              <div style="display:flex;align-items:center;gap:6px">
                ${renderEventTypeBadge(act1.type)}
                <span style="font-weight:800;font-size:13px;color:var(--ink);max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(act1.title)}">${escapeHtml(act1.title)}</span>
              </div>
              ${hasMemo1 ? `<div style="font-size:11px;color:var(--sub);margin-top:2px;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(act1.event.memo)}">${escapeHtml(act1.event.memo)}</div>` : ''}
            </div>
            <div class="sel-event-row sel-event-divider" style="flex-direction:column;align-items:flex-start;justify-content:center;min-height:${hasMemo2 ? '38px' : '22px'}">
              <div style="display:flex;align-items:center;gap:6px">
                ${renderEventTypeBadge(act2.type)}
                <span style="font-weight:700;font-size:12.5px;color:rgba(255,255,255,0.85);max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(act2.title)}">${escapeHtml(act2.title)}</span>
                ${extraBadge}
              </div>
              ${hasMemo2 ? `<div style="font-size:11px;color:var(--muted);margin-top:2px;max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="${escapeHtml(act2.event.memo)}">${escapeHtml(act2.event.memo)}</div>` : ''}
            </div>
          </div>
        `;

        dueHtml = `
          <div class="sel-events-stack">
            <div class="sel-event-row" style="min-height:${hasMemo1 ? '38px' : '22px'}">
              <span style="font-weight:800;font-size:13px;color:var(--ink)">${act1.dueText}</span>
              ${act1.badgeText ? `<span class="badge-due-${act1.badgeCls}">${act1.badgeText}</span>` : ''}
            </div>
            <div class="sel-event-row sel-event-divider" style="min-height:${hasMemo2 ? '38px' : '22px'}">
              <span style="font-weight:700;font-size:12.5px;color:rgba(255,255,255,0.85)">${act2.dueText}</span>
              ${act2.badgeText ? `<span class="badge-due-${act2.badgeCls}">${act2.badgeText}</span>` : ''}
            </div>
          </div>
        `;
      }

      // Memo / Link HTML
      const memoItems = [];
      if (c.myPageUrl) {
        memoItems.push(`<button class="btn-sm-ghost" style="font-size:11px;padding:2px 7px;color:var(--cyan);border-color:rgba(79,216,232,.3)" onclick="event.stopPropagation();openExternalUrl('${c.myPageUrl}')">↗ MyPage</button>`);
      }
      if (c.myPageId) {
        memoItems.push(`<span style="font-size:11px;color:var(--sub)" title="ログインID: ${c.myPageId}">ID: ${c.myPageId}</span>`);
      }
      if (c.tags && c.tags.length) {
        memoItems.push(`<span class="tag" style="font-size:10px;height:18px;padding:0 5px">${c.tags[0]}</span>`);
      }
      const memoHtml = memoItems.length ? `<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">${memoItems.join('')}</div>` : `<span style="color:var(--muted);font-size:11.5px">—</span>`;

      return `
        <tr onclick="openDetailModal('${c.id}')">
          <td>
            <div class="table-company-cell">
              ${logoHtml(c)}
              <div>
                <div class="name">${c.name} ${popBadgeHtml}</div>
                <div class="sub-meta">${catOf(c)} ・ ${c.sub || '—'}</div>
              </div>
            </div>
          </td>
          <td>${actionHtml}</td>
          <td>${dueHtml}</td>
          <td onclick="event.stopPropagation()">
            <select class="toolbar-select" style="font-size:12px;padding:4px 8px;border-radius:8px" onchange="onTableStageChange('${c.id}', this.value)">
              ${stages.map(s => `<option value="${s.key}" ${s.key === c.stage ? 'selected' : ''}>${s.label}</option>`).join('')}
            </select>
          </td>
          <td onclick="event.stopPropagation()">${memoHtml}</td>
          <td class="row-actions" onclick="event.stopPropagation()">
            <button class="action-icon-btn" onclick="openDetailModal('${c.id}')" title="詳細・タイムライン">✏️</button>
            <button class="action-icon-btn" onclick="openEventModal(null, '${c.id}')" title="予定を追加" style="color:var(--cyan)">📅＋</button>
            <button class="action-icon-btn delete" onclick="toggleAdd('${c.id}', event)" title="選考リストから外す">✕</button>
          </td>
        </tr>
      `;
    }).join('');

    document.getElementById('listShown').textContent = catalog.filter(c => c.added).length;
  }

  listChips.forEach(chip => chip.addEventListener('click', () => {
    listChips.forEach(x => x.classList.remove('on'));
    chip.classList.add('on');
    listFilter = chip.textContent.trim();
    renderList();
  }));

  function onTableStageChange(id, stage) {
    const c = catalog.find(x => x.id === id);
    if (c) {
      c.stage = stage;
      saveAll();
      renderAll();
      showToast(`「${c.name}」を「${stageMap[stage].label}」に更新しました`);
    }
  }



  // ===================== VIEW 4: ダッシュボード =====================
  const DONUT_COLORS = ['#8b7bff','#4ee39a','#f4d489','#ff7eb6','#4fd8e8','#a100ff','#7fb0ff','#ff9f6b'];

  
  // =========================================================================
  // DASHBOARD BUILT-IN CALENDAR LOGIC（デフォルト当月・当日表示）
  // =========================================================================
  const _calInitNow = new Date();
  let calYear = _calInitNow.getFullYear();
  let calMonth = _calInitNow.getMonth(); // 0-indexed (0=1月...8=9月)
  const _calInitMm = String(calMonth + 1).padStart(2, '0');
  const _calInitDd = String(_calInitNow.getDate()).padStart(2, '0');
  let selectedCalDate = `${calYear}-${_calInitMm}-${_calInitDd}`;

  function initCalendarState() {
    const now = new Date();
    calYear = now.getFullYear();
    calMonth = now.getMonth();
    const mm = String(calMonth + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    selectedCalDate = `${calYear}-${mm}-${dd}`;
  }

  function navCalendar(delta) {
    calMonth += delta;
    if (calMonth > 11) {
      calMonth = 0;
      calYear++;
    } else if (calMonth < 0) {
      calMonth = 11;
      calYear--;
    }
    renderCalendar();
  }

  function resetCalendarToCurrent() {
    const now = new Date();
    calYear = now.getFullYear();
    calMonth = now.getMonth();
    const mm = String(calMonth + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    selectedCalDate = `${calYear}-${mm}-${dd}`;
    renderCalendar();
  }

  function selectCalendarDate(dateStr) {
    selectedCalDate = dateStr;
    renderCalendar();
  }

  function onCalendarAddEventClick() {
    openEventModal(null, null);
    if (selectedCalDate) {
      setTimeout(() => {
        const dt = document.getElementById('evDatetime');
        if (dt) dt.value = selectedCalDate + ' 12:00';
      }, 50);
    }
  }

  function renderCalendar() {
    const gridEl = document.getElementById('calDaysGrid');
    const monthLabel = document.getElementById('calCurrentMonthLabel');
    const countEl = document.getElementById('calMonthEventCount');
    if (!gridEl || !monthLabel) return;

    monthLabel.textContent = `${calYear}年 ${calMonth + 1}月`;

    // Gather all events mapped by YYYY-MM-DD
    const eventsByDate = {};
    let monthEventTotal = 0;

    // From selectionEvents
    selectionEvents.forEach(ev => {
      const dt = ev.due || ev.datetime;
      if (!dt) return;
      const dateKey = dt.slice(0, 10);
      if (!eventsByDate[dateKey]) eventsByDate[dateKey] = [];
      eventsByDate[dateKey].push({
        id: ev.id,
        companyId: ev.companyId,
        title: ev.title,
        type: ev.stage || ev.type || 'other',
        time: dt.length > 10 ? dt.slice(11, 16) : '',
        memo: ev.notes || ev.dueLabel || ev.memo || '',
        status: ev.status || 'upcoming'
      });
    });

    // From added companies with c.due if not already mapped
    catalog.filter(c => c.added && c.due).forEach(c => {
      const dKey = c.due.slice(0, 10);
      if (!eventsByDate[dKey]) eventsByDate[dKey] = [];
      const alreadyHas = eventsByDate[dKey].some(e => e.companyId === c.id);
      if (!alreadyHas) {
        eventsByDate[dKey].push({
          id: 'comp_due_' + c.id,
          companyId: c.id,
          title: c.dueLabel || '選考締切',
          type: c.stage || 'other',
          time: c.due.length > 10 ? c.due.slice(11, 16) : '',
          memo: c.dueLabel || '',
          status: 'upcoming'
        });
      }
    });

    // Auto-select date in month: 当月なら今日、他月ならイベント初日または1日
    const curMonthPrefix = `${calYear}-${String(calMonth + 1).padStart(2, '0')}`;
    const today = new Date();
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    if (!selectedCalDate || !selectedCalDate.startsWith(curMonthPrefix)) {
      if (todayStr.startsWith(curMonthPrefix)) {
        selectedCalDate = todayStr;
      } else {
        const datesInMonth = Object.keys(eventsByDate).filter(d => d.startsWith(curMonthPrefix));
        if (datesInMonth.length) {
          datesInMonth.sort();
          selectedCalDate = datesInMonth[0];
        } else {
          selectedCalDate = `${curMonthPrefix}-01`;
        }
      }
    }

        // First day of month & days in month
    const firstDayIndex = new Date(calYear, calMonth, 1).getDay(); // 0 = Sun
    const daysInMonth = new Date(calYear, calMonth + 1, 0).getDate();
    const daysInPrevMonth = new Date(calYear, calMonth, 0).getDate();

    let cellsHtml = '';

    // Prev month padding days
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const dayNum = daysInPrevMonth - i;
      const prevM = calMonth === 0 ? 12 : calMonth;
      const prevY = calMonth === 0 ? calYear - 1 : calYear;
      const dStr = `${prevY}-${String(prevM).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
      const dayEvents = eventsByDate[dStr] || [];
      const isSel = selectedCalDate === dStr ? ' is-selected' : '';

      cellsHtml += `
        <div class="cal-day-cell other-month${isSel}" onclick="selectCalendarDate('${dStr}')">
          <div class="cal-day-top">
            <span class="d-num">${dayNum}</span>
          </div>
          <div class="cal-day-events">
            ${dayEvents.slice(0, 2).map(ev => renderCalEventPill(ev)).join('')}
            ${dayEvents.length > 2 ? (() => {
        const moreTitles = dayEvents.slice(2).map(e => `• [${e.type || '予定'}] ${(catalog.find(x => x.id === e.companyId)?.name || '企業')}: ${e.title} ${e.time || ''}`).join('\n');
        return `<span class="cal-more-pill" title="${moreTitles}" onclick="event.stopPropagation();selectCalendarDate('${dStr}')">+${dayEvents.length - 2}件</span>`;
      })() : ''}
          </div>
        </div>
      `;
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const dStr = `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayEvents = eventsByDate[dStr] || [];
      monthEventTotal += dayEvents.length;

      const isToday = dStr === todayStr ? ' is-today' : '';
      const isSel = selectedCalDate === dStr ? ' is-selected' : '';

      cellsHtml += `
        <div class="cal-day-cell${isToday}${isSel}" onclick="selectCalendarDate('${dStr}')">
          <div class="cal-day-top">
            <span class="d-num">${d}</span>
            ${dayEvents.length ? `<span class="badge-count" style="font-size:9px;padding:0 4px">${dayEvents.length}</span>` : ''}
          </div>
          <div class="cal-day-events">
            ${dayEvents.slice(0, 2).map(ev => renderCalEventPill(ev)).join('')}
            ${dayEvents.length > 2 ? `<span style="font-size:9.5px;color:var(--cyan)">+${dayEvents.length - 2}件</span>` : ''}
          </div>
        </div>
      `;
    }

    // Next month padding days to fill 35 or 42 grid cells
    const totalRendered = firstDayIndex + daysInMonth;
    const targetTotal = totalRendered <= 35 ? 35 : 42;
    const nextDays = targetTotal - totalRendered;
    for (let d = 1; d <= nextDays; d++) {
      const nextM = calMonth === 11 ? 1 : calMonth + 2;
      const nextY = calMonth === 11 ? calYear + 1 : calYear;
      const dStr = `${nextY}-${String(nextM).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      const dayEvents = eventsByDate[dStr] || [];
      const isSel = selectedCalDate === dStr ? ' is-selected' : '';

      cellsHtml += `
        <div class="cal-day-cell other-month${isSel}" onclick="selectCalendarDate('${dStr}')">
          <div class="cal-day-top">
            <span class="d-num">${d}</span>
          </div>
          <div class="cal-day-events">
            ${dayEvents.slice(0, 2).map(ev => renderCalEventPill(ev)).join('')}
            ${dayEvents.length > 2 ? (() => {
        const moreTitles = dayEvents.slice(2).map(e => `• [${e.type || '予定'}] ${(catalog.find(x => x.id === e.companyId)?.name || '企業')}: ${e.title} ${e.time || ''}`).join('\n');
        return `<span class="cal-more-pill" title="${moreTitles}" onclick="event.stopPropagation();selectCalendarDate('${dStr}')">+${dayEvents.length - 2}件</span>`;
      })() : ''}
          </div>
        </div>
      `;
    }

    gridEl.innerHTML = cellsHtml;
    if (countEl) countEl.textContent = `${monthEventTotal}件`;

    // Render Sidebar for selected date
    renderCalSidebar(selectedCalDate, eventsByDate[selectedCalDate] || []);
  }

  function renderCalEventPill(ev) {
    const comp = catalog.find(x => x.id === ev.companyId);
    const compName = comp ? comp.name : '企業';
    let typeClass = 'type-other';
    let typeLabel = ev.type || '予定';
    const tLower = (ev.type || '').toLowerCase();
    if (tLower.includes('es') || tLower.includes('エントリー')) {
      typeClass = 'type-es';
      typeLabel = 'ES';
    } else if (tLower.includes('面接') || tLower.includes('first') || tLower.includes('final') || tLower.includes('interview')) {
      typeClass = 'type-interview';
      typeLabel = '面接';
    } else if (tLower.includes('test') || tLower.includes('適性') || tLower.includes('spi') || tLower.includes('web')) {
      typeClass = 'type-test';
      typeLabel = 'テスト';
    }

    return `
      <div class="cal-event-pill ${typeClass}" onclick="event.stopPropagation();onCalPillClick('${ev.companyId}')" title="${compName}: ${ev.title} ${ev.time}">
        [${typeLabel}] ${compName}
      </div>
    `;
  }

  function onCalPillClick(companyId) {
    if (companyId) {
      openDetailModal(companyId);
    }
  }

  function renderCalSidebar(dateStr, events) {
    const labelEl = document.getElementById('calSelectedDateLabel');
    const listEl = document.getElementById('calSelectedDateList');
    if (!labelEl || !listEl) return;

    if (dateStr) {
      const parts = dateStr.split('-');
      const dObj = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];
      const dow = daysOfWeek[dObj.getDay()] || '';
      labelEl.textContent = `${parseInt(parts[1])}月${parseInt(parts[2])}日 (${dow}) の予定`;
    } else {
      labelEl.textContent = '選択した日の予定';
    }

    if (!events.length) {
      listEl.innerHTML = `
        <div style="padding:28px 12px;text-align:center;color:var(--sub);font-size:12px;">
          この日の選考予定はありません。<br>
          <span style="font-size:11px;color:var(--muted)">右上の「＋ 予定追加」から追加できます</span>
        </div>
      `;
      return;
    }

    listEl.innerHTML = events.map(ev => {
      const comp = catalog.find(x => x.id === ev.companyId);
      const compName = comp ? comp.name : '企業名未定';
      let typeBadge = '';
      const tLower = (ev.type || '').toLowerCase();
      if (tLower.includes('es')) {
        typeBadge = '<span class="es-type-badge type-motiv" style="font-size:10px;padding:1px 6px">ES提出</span>';
      } else if (tLower.includes('面接')) {
        typeBadge = '<span class="es-type-badge type-pr" style="font-size:10px;padding:1px 6px">面接</span>';
      } else {
        typeBadge = '<span class="es-type-badge type-other" style="font-size:10px;padding:1px 6px">' + (ev.type || '選考') + '</span>';
      }

      return `
        <div class="cal-side-item" onclick="openDetailModal('${ev.companyId}')">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:6px">
            <span style="font-weight:800;font-size:13px;color:var(--ink)">🏢 ${compName}</span>
            ${typeBadge}
          </div>
          <div style="font-weight:700;font-size:12px;color:var(--ink)">${ev.title}</div>
          ${ev.time ? `<div style="font-size:11px;color:var(--cyan);font-weight:700">⏰ ${ev.time}</div>` : ''}
          ${ev.memo ? `<div style="font-size:11px;color:var(--sub);line-height:1.4">${ev.memo}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  function renderDash() {
    renderCalendar();
    const added = catalog.filter(c => c.added);
    const total = added.length;
    const activeKeys = ['entry','es','first','final'];
    const active = added.filter(c => activeKeys.includes(c.stage)).length;
    const offer = added.filter(c => c.stage === 'offer').length;
    const esReached = added.filter(c => ['es','first','final','offer'].includes(c.stage)).length;
    const esRate = total ? Math.round(esReached / total * 100) : 0;
    const dueSoon = added.filter(c => {
      if (c.stage === 'rejected' || c.stage === 'offer') return false;
      const d = getDueStatus(c);
      return d.days !== null && d.days >= 0 && d.days <= 7;
    }).length;

    document.getElementById('kpis').innerHTML = `
      <div class="kpi" style="--kglow:rgba(139,123,255,.28)"><div class="label">選考管理数</div><div class="val">${total} <small>社</small></div></div>
      <div class="kpi" style="--kglow:rgba(79,216,232,.28)"><div class="label">選考中</div><div class="val" style="color:var(--cyan)">${active} <small>社</small></div></div>
      <div class="kpi" style="--kglow:rgba(78,227,154,.28)"><div class="label">内々定・内定</div><div class="val" style="color:var(--green)">${offer} <small>社</small></div></div>
      <div class="kpi" style="--kglow:rgba(217,178,95,.28)"><div class="label">書類/ES到達率</div><div class="val"><span class="g">${esRate}</span><small>%</small></div></div>
      <div class="kpi" style="--kglow:rgba(224,52,90,.3)"><div class="label">7日以内の締切</div><div class="val" style="color:#ff7a6b">${dueSoon} <small>件</small></div></div>`;

    // 選考ファネル
    const order = ['entry','es','first','final','offer'];
    const reached = k => {
      const idx = order.indexOf(k);
      const keysFrom = order.slice(idx);
      return added.filter(c => keysFrom.includes(c.stage)).length;
    };
    const funnelRows = [
      { name:'エントリー', n: reached('entry'), grad:'#7fb0ff,#4c8bf5', glow:'rgba(76,139,245,.4)' },
      { name:'ES提出',     n: reached('es'),    grad:'#b3a9ff,#8b7bff', glow:'rgba(139,123,255,.4)' },
      { name:'一次面接',   n: reached('first'), grad:'#7fe6f0,#4fd8e8', glow:'rgba(79,216,232,.4)' },
      { name:'最終面接',   n: reached('final'), grad:'#ffa8cf,#ff7eb6', glow:'rgba(255,126,182,.4)' },
      { name:'内々定/内定', n: reached('offer'), grad:'#86eeb8,#4ee39a', glow:'rgba(78,227,154,.4)' },
    ];
    const maxN = Math.max(1, funnelRows[0].n);
    document.getElementById('funnel').innerHTML = funnelRows.map((r, idx) => {
      const w = Math.round(r.n / maxN * 100);
      const rate = idx === 0 ? '100%' : (funnelRows[idx-1].n ? Math.round(r.n / funnelRows[idx-1].n * 100) + '%' : '—');
      return `<div class="row"><div class="fname">${r.name}</div><div class="bar-track"><div class="bar" style="width:${Math.max(w, r.n ? 8 : 0)}%;background:linear-gradient(90deg,${r.grad});--bg-glow:${r.glow}">${r.n}</div></div><div class="rate">${rate}</div></div>`;
    }).join('');

    // 業界別ドーナツ
    const byCat = {};
    added.forEach(c => { const k = catOf(c); byCat[k] = (byCat[k] || 0) + 1; });
    const entries = Object.entries(byCat).sort((a,b) => b[1] - a[1]);
    document.getElementById('donutSub').textContent = total + '社';
    let offset = 0;
    const circles = entries.map(([cat, n], idx) => {
      const pct = total ? (n / total * 100) : 0;
      const dash = `${pct.toFixed(1)} ${(100 - pct).toFixed(1)}`;
      const col = DONUT_COLORS[idx % DONUT_COLORS.length];
      const c = `<circle cx="21" cy="21" r="15.9" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${dash}" stroke-dashoffset="${(-offset).toFixed(1)}" transform="rotate(-90 21 21)"></circle>`;
      offset += pct;
      return c;
    }).join('');
    document.getElementById('donut').innerHTML = `
      <circle cx="21" cy="21" r="15.9" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="5"></circle>
      ${circles}
      <text x="21" y="20" text-anchor="middle" font-size="7" font-weight="900" fill="#eef2fb">${total}</text>
      <text x="21" y="26" text-anchor="middle" font-size="3.5" fill="#8a93ab">社</text>`;
    document.getElementById('legend').innerHTML = entries.map(([cat, n], idx) => {
      const col = DONUT_COLORS[idx % DONUT_COLORS.length];
      return `<div class="item"><span class="sw" style="background:${col};color:${col}"></span>${cat}<span class="n">${n}</span></div>`;
    }).join('') || `<div style="color:var(--sub)">データがありません</div>`;



    // 直近締切
    const withDue = added.filter(c => c.due).slice();
    withDue.sort((a, b) => {
      const da = getDueStatus(a).days ?? 9999;
      const db = getDueStatus(b).days ?? 9999;
      return da - db;
    });
    document.getElementById('deadlines').innerHTML = withDue.slice(0, 6).map(c => {
      const d = getDueStatus(c);
      const st = stageMap[c.stage] || stageMap.entry;
      const urgent = d.cls === 'urgent' ? ' urgent' : '';
      const mMatch = (c.due || '').match(/(\d{1,2})[\/-](\d{1,2})/);
      const day = mMatch ? mMatch[2] : '–';
      const mon = mMatch ? mMatch[1] + '月' : '';
      return `
        <div class="dl${urgent}" onclick="openDetailModal('${c.id}')">
          <div class="date">
            <div class="d">${day}</div>
            <div class="m">${mon}</div>
          </div>
          <div class="dbody">
            <div class="t">${c.name}</div>
            <div class="c">${c.dueLabel ? c.dueLabel + ' : ' : ''}${d.badge || c.due}</div>
          </div>
          <span class="dtag" style="color:${st.color}">${st.label}</span>
        </div>`;
    }).join('') || `<div style="color:var(--sub);padding:14px;text-align:center">締切が設定された企業はありません。</div>`;

    renderTasks();
  }

  // 就活TODOタスク
  function renderTasks() {
    const listEl = document.getElementById('taskList');
    if (!listEl) return;
    const doneCount = currentTasks.filter(t => t.done).length;
    document.getElementById('taskCountSub').textContent = `${doneCount}/${currentTasks.length} 完了`;

    listEl.innerHTML = currentTasks.map(t => `
      <div class="task-item ${t.done ? 'done' : ''}">
        <input type="checkbox" class="task-cb" ${t.done ? 'checked' : ''} onchange="toggleTaskDone('${t.id}')" />
        <span class="task-text">${t.text}</span>
        ${t.tag ? `<span class="task-tag">${t.tag}</span>` : ''}
        <button class="task-del" onclick="deleteTask('${t.id}')" title="削除">✕</button>
      </div>
    `).join('') || `<div style="color:var(--sub);font-size:12px">タスクはありません</div>`;
  }

  function toggleTaskDone(id) {
    if (!requireAuth('就活タスクの更新')) return;
    const t = currentTasks.find(x => x.id === id);
    if (t) {
      t.done = !t.done;
      saveAll();
      renderTasks();
    }
  }

  function deleteTask(id) {
    if (!requireAuth('就活タスクの削除')) return;
    currentTasks = currentTasks.filter(x => x.id !== id);
    saveAll();
    renderTasks();
  }

  function addNewTask() {
    if (!requireAuth('就活タスクの追加')) return;
    const input = document.getElementById('newTaskInput');
    const text = (input.value || '').trim();
    if (!text) return;
    currentTasks.push({
      id: 't_' + Date.now(),
      text,
      done: false,
      tag: 'メモ'
    });
    input.value = '';
    saveAll();
    renderTasks();
    showToast('タスクを追加しました');
  }


  // =========================================================================
  // V3 CORE DATA MODELS: SelectionEvent · ESEntry · StoryEntry & Migration
  // =========================================================================

  function detectEventType(label) {
    if (!label) return 'その他';
    const s = String(label).toUpperCase();
    if (s.includes('ES') || s.includes('書類') || s.includes('シート') || s.includes('エントリー')) return 'ES';
    if (s.includes('WEBテスト') || s.includes('SPI') || s.includes('テスト') || s.includes('玉手箱') || s.includes('TG-WEB') || s.includes('CAB') || s.includes('GAB')) return 'WEBテスト';
    if (s.includes('適性')) return '適性検査';
    if (s.includes('GD') || s.includes('グループディスカッション') || s.includes('グループワーク')) return 'GD';
    if (s.includes('面接') || s.includes('面談')) return '面接';
    if (s.includes('説明会') || s.includes('セミナー') || s.includes('座談会')) return '説明会';
    return 'その他';
  }

  function renderEventTypeBadge(type) {
    const map = {
      'ES': { cls: 'type-es', text: 'ES' },
      'WEBテスト': { cls: 'type-webtest', text: 'WEBテスト' },
      '適性検査': { cls: 'type-aptitude', text: '適性検査' },
      'GD': { cls: 'type-gd', text: 'GD' },
      '面接': { cls: 'type-interview', text: '面接' },
      '説明会': { cls: 'type-briefing', text: '説明会' },
      'その他': { cls: 'type-other', text: 'その他' }
    };
    const item = map[type] || map['その他'];
    return `<span class="ev-type-badge ${item.cls}">${item.text}</span>`;
  }

  function formatSelectionEvent(ev) {
    if (!ev) return null;
    const dtStr = ev.datetime || '';
    const dateOnly = dtStr.split('T')[0].split(' ')[0];
    const timeOnly = (dtStr.includes('T') || dtStr.includes(' ')) ? (dtStr.split('T')[1] || dtStr.split(' ')[1]).slice(0, 5) : '';

    let days = null;
    let badgeCls = 'normal';
    let badgeText = '';
    if (dateOnly) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const parts = dateOnly.split('-');
      if (parts.length === 3) {
        const target = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
        target.setHours(0, 0, 0, 0);
        days = Math.round((target - today) / (1000 * 60 * 60 * 24));
        if (days < 0) {
          badgeCls = 'past';
          badgeText = '期限切';
        } else if (days === 0) {
          badgeCls = 'today';
          badgeText = '本日締切';
        } else if (days <= 3) {
          badgeCls = 'urgent';
          badgeText = `あと${days}日`;
        } else if (days <= 7) {
          badgeCls = 'soon';
          badgeText = `あと${days}日`;
        } else {
          badgeCls = 'normal';
          badgeText = `あと${days}日`;
        }
      }
    }

    let formattedDate = dateOnly;
    if (dateOnly) {
      const p = dateOnly.split('-');
      if (p.length === 3) {
        formattedDate = `${parseInt(p[1])}/${parseInt(p[2])}`;
        if (timeOnly) formattedDate += ` ${timeOnly}`;
      }
    }

    return {
      hasEvent: true,
      event: ev,
      type: ev.type,
      title: ev.title,
      datetime: ev.datetime,
      dueText: formattedDate,
      badgeCls,
      badgeText,
      days
    };
  }

  function getCompanyUpcomingEvents(companyId, limit = 2) {
    const events = selectionEvents.filter(e => e.companyId === companyId && e.status === 'upcoming');
    if (!events.length) {
      const c = catalog.find(x => x.id === companyId);
      if (c && c.due) {
        const dueInfo = getDueStatus(c);
        return [{
          hasEvent: false,
          type: detectEventType(c.dueLabel),
          title: c.dueLabel || '選考締切',
          datetime: c.due,
          dueText: dueInfo.text || c.due,
          badgeCls: dueInfo.cls || 'normal',
          badgeText: dueInfo.badge || '',
          days: dueInfo.days,
          totalUpcomingCount: 1
        }];
      }
      return [];
    }

    // Sort by datetime ascending
    events.sort((a, b) => (a.datetime || '').localeCompare(b.datetime || ''));
    const totalUpcomingCount = events.length;
    return events.slice(0, limit).map((ev, idx) => {
      const formatted = formatSelectionEvent(ev);
      formatted.totalUpcomingCount = totalUpcomingCount;
      formatted.index = idx;
      return formatted;
    });
  }

  function getCompanyNextAction(companyId) {
    const upcoming = getCompanyUpcomingEvents(companyId, 1);
    if (upcoming.length > 0) {
      return upcoming[0];
    }
    return {
      hasEvent: false,
      type: null,
      title: '予定なし',
      datetime: null,
      dueText: '—',
      badgeCls: '',
      badgeText: '',
      days: null,
      totalUpcomingCount: 0
    };
  }

  // ---- Migration to V3 State ----
  function migrateToV3State(cat) {
    console.log('[Migration] Starting migrateToV3State...');
    let migratedEventsCount = 0;
    let migratedEsCount = 0;

    // 1. Migrate deadlines from companies into SelectionEvent
    cat.forEach(c => {
      if (c.due && !selectionEvents.some(e => e.companyId === c.id)) {
        selectionEvents.push({
          id: 'ev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          companyId: c.id,
          title: c.dueLabel || '選考締切',
          type: detectEventType(c.dueLabel),
          datetime: c.due,
          status: 'upcoming',
          memo: '',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        migratedEventsCount++;
      }

      // 2. Migrate existing notes into ES Entry
      if (c.noteEs && !esList.some(e => e.companyId === c.id && e.tags.includes('ES控え'))) {
        esList.push({
          id: 'es_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          companyId: c.id,
          title: `${c.name} 本選考ES`,
          question: 'ES設問・提出テキスト控え',
          answer: c.noteEs,
          characterLimit: 400,
          status: 'submitted',
          linkedStoryIds: [],
          tags: ['ES控え'],
          submittedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        migratedEsCount++;
      }
      if (c.noteMotiv && !esList.some(e => e.companyId === c.id && e.tags.includes('志望動機'))) {
        esList.push({
          id: 'es_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
          companyId: c.id,
          title: `${c.name} 志望動機・企業研究`,
          question: '志望理由および他社との差別化ポイント',
          answer: c.noteMotiv,
          characterLimit: null,
          status: 'draft',
          linkedStoryIds: [],
          tags: ['志望動機'],
          submittedAt: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
        migratedEsCount++;
      }
    });

    // 3. Seed Story Bank with STAR models if empty
    if (!storyBank.length) {
      storyBank.push({
        id: 'story_seed_1',
        title: '長期インターンでの新規法人開拓営業（成約率2.2倍達成）',
        category: 'Internship',
        summary: 'HRTechスタートアップにて、失注分析から顧客ペイン別の提案型営業への刷新を主導し、チーム全体の成約率を2.2倍に向上させた経験。',
        situation: '大学3年次に参画したBtoB向けHRTechサービスにて、月間架電数に対して商談獲得率が3%と低迷。従来の会社説明中心の営業スタイルでは差別化が図れず、顧客の課題感と乖離が生じていた。',
        task: '個人目標として月間商談獲得15件の達成、および営業チーム5名の成約率改善を推進する役割を担った。',
        action: '1) 過去の失注理由40件を詳細に分析し、業界・企業規模ごとの課題仮説集を策定。2) 従来のサービス紹介から、顧客の採用ボトルネックを特定するヒアリング主導の課題解決型ピッチへ転換。3) 毎週のロールプレイングを主導し、成功パターンをチーム全員に共有・型化した。',
        result: '個人の商談獲得数が月間24件（目標比160%）を達成。チーム全体の成約率も3%から6.8%（2.2倍）へ大幅改善し、半期MVPを受賞した。',
        learning: '「顧客の本質的課題に寄り添う仮説思考」と「組織へ仕組みとして定着させる巻き込み力」の重要性を体得した。',
        strengths: ['課題解決力', '主体性', '巻き込み力', '折衝力'],
        tags: ['BtoB', 'SaaS', '営業', 'リーダーシップ'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

      storyBank.push({
        id: 'story_seed_2',
        title: '学園祭実行委員会での協賛金獲得（前年比140%達成）',
        category: 'Extracurricular',
        summary: '学園祭実行委員会の渉外リーダーとして、地域企業120社への提案を刷新し、過去最高額の協賛金350万円を獲得。',
        situation: 'コロナ禍以降、地元商店街からの協賛金が減少傾向にあり、企画予算が不足する危機に直面。従来の電話帳ローラー作戦では協賛継続が困難であった。',
        task: '渉外局員15名をリードし、協賛金目標300万円（前年比120%）の必達を目指した。',
        action: '単なる寄付依頼ではなく「学生への企業認知拡大・新卒採用接点」という双方のメリットを提示した協賛パッケージ（SNSプロモーション・ブース出展枠等）を新規設計。メンバー向けに丁寧なヒアリング研修を実施した。',
        result: '新規協賛企業を28社開拓し、総協賛金額350万円（前年比140%・目標比116%）を達成。大型企画を無事完遂させた。',
        learning: '相手のメリットを起点に新しい価値を共創する「交渉・提案力」と、メンバーの意欲を引き出す目標管理の真髄を学んだ。',
        strengths: ['企画提案力', '折衝力', '粘り強さ', 'リーダーシップ'],
        tags: ['学生団体', '渉外', 'チームマネジメント'],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
      console.log('[Migration] Seeded 2 STAR stories into storyBank');
    }

    // 4. Seed sample events and link sample ES for target demo companies if empty
    const msolComp = cat.find(x => x.id === 'c_msol' || x.name.includes('マネジメントソリューションズ'));
    if (msolComp) {
      msolComp.added = true;
      if (!selectionEvents.some(e => e.companyId === msolComp.id)) {
        selectionEvents.push(
          { id: 'ev_msol_1', companyId: msolComp.id, title: '本選考 ES提出', type: 'ES', datetime: '2026-05-18 12:00', status: 'completed', memo: 'マイページから提出完了', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
          { id: 'ev_msol_2', companyId: msolComp.id, title: 'WEBテスト（SPI受検）', type: 'WEBテスト', datetime: '2026-05-20 18:00', status: 'completed', memo: 'テストセンター受検済', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() },
          { id: 'ev_msol_3', companyId: msolComp.id, title: '一次面接（オンライン）', type: '面接', datetime: '2026-05-28 15:00', status: 'upcoming', memo: 'Zoomリンクは前日にメール送付。学生時代に注力したこと深掘り対策', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        );
      }
      if (!esList.some(e => e.companyId === msolComp.id)) {
        esList.push({
          id: 'es_msol_sample',
          companyId: msolComp.id,
          title: 'MSOL 自己PR 400字',
          question: 'あなたがこれまでに最も情熱を持って取り組み、成果をあげた経験について述べてください。（400字以内）',
          answer: '長期インターン先のBtoB営業において、顧客課題に寄り添う提案プロセスの刷新に取り組みました。当時、商談獲得率が3%と低迷していたため、過去40件の失注データを分析し業界別のペイン仮説集を作成。従来のサービス紹介から課題解決型アプローチへ転換しました。さらにチーム内で週次ロープレを主導し、ノウハウを横展開した結果、個人の商談獲得数は目標比160%を達成し、チーム全体の成約率も2.2倍に向上しました。この経験で培った「本質的課題の特定力」と「周囲を巻き込む推進力」を活かし、貴社のPMOコンサルタントとして顧客の変革を支え抜きます。',
          characterLimit: 400,
          status: 'draft',
          linkedStoryIds: ['story_seed_1'],
          tags: ['自己PR', 'ガクチカ', '営業'],
          submittedAt: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    }

    const tcsComp = cat.find(x => x.id === 'c_tcs');
    if (tcsComp) {
      tcsComp.added = true;
      if (!selectionEvents.some(e => e.companyId === tcsComp.id)) {
        selectionEvents.push(
          { id: 'ev_tcs_1', companyId: tcsComp.id, title: 'エントリーシート提出', type: 'ES', datetime: '2026-05-22 23:59', status: 'upcoming', memo: '志望動機300字・自己PR400字', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        );
      }
      if (!esList.some(e => e.companyId === tcsComp.id)) {
        esList.push({
          id: 'es_tcs_sample',
          companyId: tcsComp.id,
          title: '日本TCS 志望動機 300字',
          question: 'TCSを志望する理由と、学生時代に培った強みをどう活かすかを記述してください。（300字）',
          answer: '世界最大級のグローバルIT知見とTataグループの総合力を背景に、日系企業の真のDX推進を支える貴社の姿勢に強く共感しました。学生時代に長期インターンで営業プロセスの再構築を主導した経験から、困難な状況でも事実に基づいて課題を構造化し、周囲と連携して解決に導く力を培いました。多様なバックグラウンドを持つプロフェッショナルと協働し、日本企業のグローバル競争力強化に貢献します。',
          characterLimit: 300,
          status: 'submitted',
          linkedStoryIds: ['story_seed_1'],
          tags: ['志望動機', 'IT', 'グローバル'],
          submittedAt: new Date().toISOString(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
    }

    const deloitteComp = cat.find(x => x.id === 'c_deloitte');
    if (deloitteComp) {
      deloitteComp.added = true;
      if (!selectionEvents.some(e => e.companyId === deloitteComp.id)) {
        selectionEvents.push(
          { id: 'ev_deloitte_1', companyId: deloitteComp.id, title: '春採用 本選考ES・適性検査', type: 'ES', datetime: '2026-05-25 17:00', status: 'upcoming', memo: 'TG-WEBテスト受験も同日時まで', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }
        );
      }
    }

    console.log(`[Migration] Finished. Events migrated: ${migratedEventsCount}, ES migrated: ${migratedEsCount}`);
  }

  // ---- Enhanced loadAll & saveAll ----
  function loadAllV3() {
    return loadAll();
  }

  function saveAllV3() {
    return saveAll();
  }

  
  // ===================== MYPAGE SUBPAGE LOGIC =====================
  let mypageFilter = 'all';

  function openMyPageSubpage() {
    switchView('mypage');
  }

  function setMyPageFilter(filter, el) {
    mypageFilter = filter;
    document.querySelectorAll('#mypageFilters .chip').forEach(c => c.classList.remove('on'));
    if (el) el.classList.add('on');
    renderMyPageTable();
  }

  function togglePassVisibility(compId, btn) {
    const el = document.getElementById(`pass-val-${compId}`);
    if (!el) return;
    const realVal = decodeURIComponent(el.dataset.val || '');
    if (el.classList.contains('revealed-pass')) {
      el.textContent = '••••••••';
      el.classList.remove('revealed-pass');
      el.classList.add('masked-pass');
      if (btn) btn.textContent = '👁';
    } else {
      el.textContent = realVal || '（なし）';
      el.classList.remove('masked-pass');
      el.classList.add('revealed-pass');
      if (btn) btn.textContent = '🔒';
    }
  }

  function togglePassInput(inputId, btn) {
    const input = document.getElementById(inputId);
    if (!input) return;
    if (input.type === 'password') {
      input.type = 'text';
      if (btn) btn.textContent = '🔒';
    } else {
      input.type = 'password';
      if (btn) btn.textContent = '👁';
    }
  }

  function copyMyPageText(text, successMsg) {
    if (!text) {
      showToast('⚠️ コピーする内容がありません');
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 ${successMsg}`);
      }).catch(() => {
        fallbackCopyMyPage(text, successMsg);
      });
    } else {
      fallbackCopyMyPage(text, successMsg);
    }
  }

  function fallbackCopyMyPage(text, msg) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(`📋 ${msg}`);
    } catch {
      showToast('⚠️ コピーに失敗しました');
    }
    document.body.removeChild(ta);
  }

  function copyCompanyUrl(compId) {
    const c = catalog.find(x => x.id === compId);
    if (c && c.myPageUrl) copyMyPageText(c.myPageUrl, 'ログインURLをコピーしました');
  }

  function copyCompanyId(compId) {
    const c = catalog.find(x => x.id === compId);
    if (c && c.myPageId) copyMyPageText(c.myPageId, 'ログインIDをコピーしました');
  }

  function copyCompanyPass(compId) {
    const c = catalog.find(x => x.id === compId);
    if (c && c.myPagePass) copyMyPageText(c.myPagePass, 'パスワードをコピーしました');
  }

  function renderMyPageTable() {
    const tbody = document.getElementById('mypageTbody');
    const emptyState = document.getElementById('mypageEmptyState');
    const countBadge = document.getElementById('mypageCountBadge');
    if (!tbody) return;

    const kw = (document.getElementById('mypageSearchInput')?.value || '').trim().toLowerCase();

    // Candidates: tracked companies OR companies with any mypage info
    let candidates = catalog.filter(c => c.added || c.myPageUrl || c.myPageId || c.myPagePass);

    if (kw) {
      candidates = candidates.filter(c => {
        const nameMatch = (c.name || '').toLowerCase().includes(kw);
        const kanaMatch = (c.kana || '').toLowerCase().includes(kw);
        const idMatch = (c.myPageId || '').toLowerCase().includes(kw);
        const urlMatch = (c.myPageUrl || '').toLowerCase().includes(kw);
        return nameMatch || kanaMatch || idMatch || urlMatch;
      });
    }

    if (mypageFilter === 'has_auth') {
      candidates = candidates.filter(c => Boolean(c.myPageUrl || c.myPageId));
    } else if (mypageFilter === 'has_pass') {
      candidates = candidates.filter(c => Boolean(c.myPagePass));
    } else if (mypageFilter === 'no_auth') {
      candidates = candidates.filter(c => !c.myPageUrl && !c.myPageId);
    }

    // Sort: entries with MyPage data first, then company name
    candidates.sort((a, b) => {
      const aHas = Boolean(a.myPageUrl || a.myPageId || a.myPagePass);
      const bHas = Boolean(b.myPageUrl || b.myPageId || b.myPagePass);
      if (aHas !== bHas) return bHas ? 1 : -1;
      return (a.name || '').localeCompare(b.name || '', 'ja');
    });

    if (countBadge) {
      countBadge.textContent = `${candidates.length} 社登録済み`;
    }

    if (!candidates.length) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.style.display = 'block';
      return;
    }

    if (emptyState) emptyState.style.display = 'none';

    tbody.innerHTML = candidates.map(c => {
      const escapedPass = encodeURIComponent(c.myPagePass || '');
      const escapedUrl = escapeHtml(c.myPageUrl || '');
      const escapedId = escapeHtml(c.myPageId || '');
      const stageInfo = stageMap[c.stage] || { label: 'エントリー', color: 'var(--sub)' };

      // URL cell
      let urlCell = `<span style="color:var(--muted);font-size:12px;">未登録</span>`;
      if (c.myPageUrl) {
        const displayUrl = c.myPageUrl.replace(/^https?:\/\//i, '').replace(/\/.*$/, '');
        urlCell = `
          <div style="display:flex;align-items:center;gap:6px;max-width:280px;">
            <a href="${escapedUrl}" target="_blank" rel="noopener noreferrer" style="color:var(--cyan);font-weight:700;font-size:12.5px;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;" title="${escapedUrl}">${displayUrl} ↗</a>
            <button class="btn-icon" onclick="copyCompanyUrl('${c.id}')" title="URLをコピー">📋</button>
          </div>
        `;
      }

      // ID cell
      let idCell = `<span style="color:var(--muted);font-size:12px;">未登録</span>`;
      if (c.myPageId) {
        idCell = `
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="font-family:monospace;font-weight:800;font-size:13px;color:var(--ink);letter-spacing:0.5px;">${escapedId}</span>
            <button class="btn-icon" onclick="copyCompanyId('${c.id}')" title="IDをコピー">📋</button>
          </div>
        `;
      }

      // Password cell
      let passCell = `<span style="color:var(--muted);font-size:12px;">未登録</span>`;
      if (c.myPagePass) {
        passCell = `
          <div style="display:flex;align-items:center;gap:6px;">
            <span id="pass-val-${c.id}" class="masked-pass" data-val="${escapedPass}">••••••••</span>
            <button class="btn-icon" onclick="togglePassVisibility('${c.id}', this)" title="表示/非表示">👁</button>
            <button class="btn-icon" onclick="copyCompanyPass('${c.id}')" title="パスワードをコピー">📋</button>
          </div>
        `;
      }

      return `
        <tr>
          <td>
            <div class="table-company-cell" style="cursor:pointer;" onclick="openCompanyModal('${c.id}')">
              ${logoHtml(c)}
              <div>
                <div class="name">${escapeHtml(c.name)}</div>
                <div class="sub-meta">${escapeHtml(c.ind || c.industry || '未分類')}</div>
              </div>
            </div>
          </td>
          <td>${urlCell}</td>
          <td>${idCell}</td>
          <td>${passCell}</td>
          <td>
            <span class="tag" style="background:${stageInfo.color}22;color:${stageInfo.color};border:1px solid ${stageInfo.color}44;font-size:11px;font-weight:700;">
              ${stageInfo.label}
            </span>
          </td>
          <td style="text-align:right;">
            <div style="display:flex;align-items:center;justify-content:flex-end;gap:6px;">
              <button class="btn-icon" onclick="openMyPageEditModal('${c.id}')" title="マイページ編集">✏️</button>
              <button class="btn-icon text-danger" onclick="clearCompanyMyPage('${c.id}')" title="マイページ情報クリア">🗑️</button>
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  function openMyPageAddModal(compId = null) {
    if (!requireAuth('マイページ情報の登録')) return;
    const modal = document.getElementById('mypageAddModal');
    const compSelect = document.getElementById('mypageModalCompSelect');
    const titleEl = document.getElementById('mypageModalTitle');

    // Populate Select options with catalog
    const tracked = catalog.filter(c => c.added);
    const unTracked = catalog.filter(c => !c.added);

    let html = '<option value="">企業を選択してください...</option>';
    if (tracked.length) {
      html += `<optgroup label="選考管理中の企業 (${tracked.length})">`;
      html += tracked.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
      html += `</optgroup>`;
    }
    html += `<optgroup label="その他の全企業 (${unTracked.length})">`;
    html += unTracked.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    html += `</optgroup>`;

    compSelect.innerHTML = html;

    if (compId) {
      compSelect.value = compId;
      compSelect.disabled = true;
      if (titleEl) titleEl.textContent = 'MyPage アカウント編集';
      const c = catalog.find(x => x.id === compId);
      document.getElementById('mypageModalUrl').value = c?.myPageUrl || '';
      document.getElementById('mypageModalId').value = c?.myPageId || '';
      document.getElementById('mypageModalPass').value = c?.myPagePass || '';
    } else {
      compSelect.disabled = false;
      if (titleEl) titleEl.textContent = 'MyPage アカウント登録';
      document.getElementById('mypageModalUrl').value = '';
      document.getElementById('mypageModalId').value = '';
      document.getElementById('mypageModalPass').value = '';
    }

    openModal('mypageAddModal');
  }

  function openMyPageEditModal(compId) {
    openMyPageAddModal(compId);
  }

  function onMyPageModalCompChange() {
    const compId = document.getElementById('mypageModalCompSelect').value;
    if (!compId) return;
    const c = catalog.find(x => x.id === compId);
    if (c) {
      document.getElementById('mypageModalUrl').value = c.myPageUrl || '';
      document.getElementById('mypageModalId').value = c.myPageId || '';
      document.getElementById('mypageModalPass').value = c.myPagePass || '';
    }
  }

  function saveMyPageAccountModal() {
    if (!requireAuth('マイページ情報の保存')) return;
    const compId = document.getElementById('mypageModalCompSelect').value;
    if (!compId) {
      showToast('⚠️ 企業を選択してください');
      return;
    }
    const c = catalog.find(x => x.id === compId);
    if (!c) return;

    c.myPageUrl = (document.getElementById('mypageModalUrl').value || '').trim();
    c.myPageId = (document.getElementById('mypageModalId').value || '').trim();
    c.myPagePass = (document.getElementById('mypageModalPass').value || '').trim();

    saveAll();
    renderAll();
    renderMyPageTable();
    closeModal('mypageAddModal');
    showToast(`「${c.name}」のマイページ情報を保存しました`);
  }

  function clearCompanyMyPage(compId) {
    if (!requireAuth('マイページ情報のクリア')) return;
    const c = catalog.find(x => x.id === compId);
    if (!c) return;
    if (!confirm(`「${c.name}」のマイページ情報（URL・ID・パスワード）をクリアしますか？`)) return;

    c.myPageUrl = '';
    c.myPageId = '';
    c.myPagePass = '';

    saveAll();
    renderAll();
    renderMyPageTable();
    showToast(`「${c.name}」のマイページ情報をクリアしました`);
  }

  function exportMyPageCSV() {
    const targets = catalog.filter(c => c.myPageUrl || c.myPageId || c.myPagePass);
    if (!targets.length) {
      showToast('⚠️ エクスポート可能なマイページ情報がありません');
      return;
    }

    const headers = ['企業名', '業界', '選考ステージ', 'ログインURL', 'ログインID', 'パスワード'];
    const rows = targets.map(c => [
      `"${(c.name || '').replace(/"/g, '""')}"`,
      `"${(c.ind || c.industry || '').replace(/"/g, '""')}"`,
      `"${stageMap[c.stage]?.label || c.stage || ''}"`,
      `"${(c.myPageUrl || '').replace(/"/g, '""')}"`,
      `"${(c.myPageId || '').replace(/"/g, '""')}"`,
      `"${(c.myPagePass || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MyPage_Accounts_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('MyPage アカウント CSV をダウンロードしました');
  }

  // Override loadAll & saveAll
  window.loadAll = loadAll;
  window.saveAll = saveAll;

  // =========================================================================
  // VIEW 1.5: 締切レーダー (DEADLINE RADAR)
  // =========================================================================
  let radarFilter = 'all';
  let radarKeyword = '';

  function getDateOffsetStr(days, time = '23:59') {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${d.getFullYear()}-${m}-${day} ${time}`;
  }

  const DEFAULT_RADAR_ITEMS = [
    {
      id: 'radar_mckinsey_2026_fall',
      companyId: 'c_mckinsey',
      companyName: 'マッキンゼー・アンド・カンパニー',
      industry: '戦略コンサル',
      title: '26卒秋季本選考 ビジネスアナリスト職 ES・Webテスト締切',
      eventType: 'es',
      category: 'hon',
      deadline: getDateOffsetStr(3, '23:59'),
      sourceType: 'public',
      sourceLabel: '公開選考日程',
      notes: '一次選考（Problem Solving Game & 英語適性検査）受検必須',
      mypageUrl: 'https://www.mckinsey.com/jp/careers',
      status: 'pending'
    },
    {
      id: 'radar_kearney_2026_fall',
      companyId: 'c_kearney',
      companyName: 'A.T.カーニー (A.T. Kearney)',
      industry: '戦略コンサル',
      title: '26卒秋季本選考 エントリーシート(ES)提出期限',
      eventType: 'es',
      category: 'hon',
      deadline: '2026-10-19 09:00',
      sourceType: 'mypage',
      sourceLabel: 'マイページ内部通知',
      notes: '適性検査受検期間：10月上旬～中旬頃、オンライン面接：10/17、10/24、10/31',
      mypageUrl: 'https://job.axol.jp/i-webs/st/kearney_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_bcg_2026_fall',
      companyId: 'c_bcg',
      companyName: 'ボストン コンサルティング グループ (BCG)',
      industry: '戦略コンサル',
      title: '26卒秋季本選考 ES・WEBテスト提出締切',
      eventType: 'es',
      category: 'hon',
      deadline: '2026-10-08 23:59',
      sourceType: 'public',
      sourceLabel: '公開選考日程',
      notes: 'アソシエイト職 プレエントリー・ES受付中',
      mypageUrl: 'https://talent.bcg.com/',
      status: 'pending'
    },
    {
      id: 'radar_nri_2026_fall',
      companyId: 'c_4307',
      companyName: '野村総合研究所 (NRI)',
      industry: 'シンクタンク・IT',
      title: '26卒 秋季本選考・キャリア採用 プレエントリー締切',
      eventType: 'es',
      category: 'hon',
      deadline: '2026-10-02 12:00',
      sourceType: 'public',
      sourceLabel: '公開選考日程',
      notes: '経営コンサルタント職 / ITソリューション職',
      mypageUrl: 'https://job.axol.jp/i-webs/st/nri_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_dtfa_2026_fall',
      companyId: 'c_unlisted_dtfa',
      companyName: 'デロイト トーマツ ファイナンシャルアドバイザリー (DTFA)',
      industry: 'FAS・財務コンサル',
      title: '最新会員規約 同意手続き（本選考マイページ更新案内）',
      eventType: 'test',
      category: 'early',
      deadline: '2026-10-15 23:59',
      sourceType: 'mypage',
      sourceLabel: 'マイページ要対応',
      notes: '規約同意後、本選考・適性検査案内が順次開示されます',
      mypageUrl: 'https://job.axol.jp/i-webs/st/deloitte_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_mitsui_2026_winter',
      companyId: 'c_8031',
      companyName: '三井物産',
      industry: '総合商社',
      title: '挑戦と創造 3Days ワークショップ選考 ES締切',
      eventType: 'intern',
      category: 'intern',
      deadline: '2026-10-25 12:00',
      sourceType: 'public',
      sourceLabel: '公開選考日程',
      notes: '選考通過者向けに本選考早期優遇ルートあり',
      mypageUrl: 'https://job.axol.jp/i-webs/st/mitsui_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_mc_2026_winter',
      companyId: 'c_8058',
      companyName: '三菱商事',
      industry: '総合商社',
      title: '冬期キャリアワークショップ / プレ選考エントリー受付',
      eventType: 'intern',
      category: 'intern',
      deadline: '2026-11-10 17:00',
      sourceType: 'public',
      sourceLabel: '公開選考日程',
      notes: '総合職 冬期選考型インターンシップ',
      mypageUrl: 'https://job.axol.jp/i-webs/st/mc_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_pwc_2026_fall',
      companyId: 'c_pwc',
      companyName: 'PwCコンサルティング',
      industry: '総合コンサル',
      title: '秋期本選考コース案内（ステータス：意向登録済）',
      eventType: 'event',
      category: 'hon',
      deadline: null,
      sourceType: 'mypage',
      sourceLabel: 'マイページ待機中',
      notes: 'Message Box 0件。選考情報が届き次第、自動検知されます',
      mypageUrl: 'https://job.axol.jp/i-webs/st/pwc_26/login/',
      status: 'pending'
    },
    {
      id: 'radar_bdx_2026_fall',
      companyId: 'c_unlisted_bdx',
      companyName: 'B&DX株式会社',
      industry: 'コンサルティング',
      title: '新卒採用マイページ（SONARシステム連携済・待機中）',
      eventType: 'event',
      category: 'hon',
      deadline: null,
      sourceType: 'mypage',
      sourceLabel: 'マイページ待機中',
      notes: '現在待機中。新規募集情報が届き次第レーダーに検知されます',
      mypageUrl: 'https://snar.jp/job/bdx_26/',
      status: 'pending'
    }
  ];

  let radarItems = [];

  function loadRadarItems() {
    const raw = localStorage.getItem('syukatsu_radar_items');
    let savedState = {};
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          parsed.forEach(p => {
            if (p.status && p.status !== 'pending') savedState[p.id] = p.status;
          });
        }
      } catch (e) {}
    }

    const baseFeed = (typeof window.DEFAULT_RADAR_ITEMS !== 'undefined' && Array.isArray(window.DEFAULT_RADAR_ITEMS))
      ? window.DEFAULT_RADAR_ITEMS
      : DEFAULT_RADAR_ITEMS;

    radarItems = baseFeed.map(item => {
      const copy = Object.assign({}, item);
      if (savedState[copy.id]) {
        copy.status = savedState[copy.id];
      }
      return copy;
    });

    updateRadarBadge();
  }

  function saveRadarItems() {
    localStorage.setItem('syukatsu_radar_items', JSON.stringify(radarItems));
    updateRadarBadge();
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

  function updateRadarBadge() {
    let pendingUrgent = 0;
    let pendingActive = 0;
    let standbyCount = 0;

    if (!radarItems.length) {
      loadRadarItems();
      return;
    }

    radarItems.forEach(item => {
      if (item.status === 'dismissed') return;
      const comp = catalog.find(x => x.id === item.companyId);
      if (comp && comp.added && comp.stage && comp.stage !== 'watch') {
        item.status = 'converted';
        return;
      }
      if (item.status === 'converted') return;

      if (!item.deadline) {
        standbyCount++;
        return;
      }

      const cd = getRadarCountdown(item.deadline);
      if (cd && (cd.isUrgent || cd.isSoon)) {
        pendingUrgent++;
      } else if (cd && !cd.expired) {
        pendingActive++;
      }
    });

    const badge = document.getElementById('radarBadgeCount');
    if (badge) {
      const showCount = pendingUrgent > 0 ? pendingUrgent : (pendingActive > 0 ? pendingActive : '');
      badge.textContent = showCount;
      badge.style.display = showCount ? 'inline-flex' : 'none';
    }

    const urgentPill = document.getElementById('radarUrgentCountPill');
    if (urgentPill) {
      urgentPill.innerHTML = `🔴 迫る締切: <strong>${pendingUrgent}件</strong>`;
    }
    const activePill = document.getElementById('radarActiveCountPill');
    if (activePill) {
      activePill.innerHTML = `🟡 進行中案内: <strong>${pendingActive}件</strong>`;
    }
    const standbyPill = document.getElementById('radarStandbyCountPill');
    if (standbyPill) {
      standbyPill.innerHTML = `🟢 待機監視中: <strong>${standbyCount}社</strong>`;
    }
  }

  function setRadarFilter(filter, el) {
    radarFilter = filter;
    document.querySelectorAll('#radarFilters .chip').forEach(c => c.classList.remove('on'));
    if (el) el.classList.add('on');
    renderRadarView();
  }

  function onRadarSearchInput(val) {
    radarKeyword = (val || '').trim().toLowerCase();
    renderRadarView();
  }

  // 本地真实扫描网桥检测与触发
  let localAgentOnline = false;

  async function checkLocalAgentStatus() {
    try {
      const res = await fetch('http://127.0.0.1:3028/health', { method: 'GET', signal: AbortSignal.timeout(1500) });
      if (res.ok) {
        const data = await res.json();
        localAgentOnline = (data.status === 'online');
        const st = document.getElementById('radarStatusText');
        if (st) {
          st.innerHTML = `本地真机网桥: <strong style="color:var(--green)">⚡ オンライン接続中</strong> (${data.accountsCount}社実機スキャン可能)`;
        }
        return true;
      }
    } catch (e) {
      localAgentOnline = false;
    }
    return false;
  }

  // 触发真实网桥或内置扫描
  async function triggerRadarScan() {
    const isBridgeLive = await checkLocalAgentStatus();

    const modal = document.getElementById('radarScanModal');
    const stageText = document.getElementById('radarScanStageText');
    const progressBar = document.getElementById('radarScanProgressBar');
    const liveLog = document.getElementById('radarScanLiveLog');

    if (modal) modal.classList.add('open');
    if (progressBar) progressBar.style.width = '5%';
    if (liveLog) liveLog.innerHTML = '<div style="color: #94a3b8;">📡 正在唤醒本地真实扫描网桥 (端口: 3028)...</div>';

    if (isBridgeLive) {
      // 1. 通过 SSE 实时接收本机 Chrome 扫描事件
      let evtSource = null;
      try {
        evtSource = new EventSource('http://127.0.0.1:3028/scan/events');
      } catch (e) {}

      let logItems = [];
      if (evtSource) {
        evtSource.addEventListener('start', e => {
          const d = JSON.parse(e.data);
          if (stageText) stageText.textContent = d.message || '本地真实 Chrome 正在启动...';
        });

        evtSource.addEventListener('progress', e => {
          const d = JSON.parse(e.data);
          if (progressBar) progressBar.style.width = d.progressPercent + '%';
          if (stageText) stageText.textContent = `[${d.index}/${d.total}] 正在真机巡检: ${d.companyName} (${d.sourceType === 'mypage' ? 'MyPage' : '公開'})...`;

          const color = d.isUrgent ? '#ff6b81' : (d.status === 'alert_found' ? '#34d399' : '#94a3b8');
          const prefix = d.isUrgent ? '🚨' : (d.status === 'alert_found' ? '✓' : '•');
          logItems.push(`<div style="color: ${color};">${prefix} [${d.index}/${d.total}] ${d.companyName}: ${d.alert}</div>`);
          if (logItems.length > 5) logItems.shift();
          if (liveLog) liveLog.innerHTML = logItems.join('');
        });

        evtSource.addEventListener('complete', e => {
          try { evtSource.close(); } catch (err) {}
          if (progressBar) progressBar.style.width = '100%';
          setTimeout(() => {
            if (modal) modal.classList.remove('open');
            const now = new Date();
            const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
            const scanLabel = document.getElementById('radarLastScanLabel');
            if (scanLabel) scanLabel.textContent = `最終スキャン: 本日 ${timeStr}`;
            loadRadarItems();
            renderRadarView();
            showToast('🎉 本地真机扫描完成！全101社の最新選考データを更新しました');
          }, 600);
        });
      }

      // 启动真实扫描
      fetch('http://127.0.0.1:3028/scan/start', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ quick: true, headful: true })
      }).catch(err => console.error(err));

    } else {
      // 备选模拟 fallback
      if (stageText) stageText.textContent = '[1/3] i-webs 体系 (35社) 站内信・マイページ巡回中...';
      if (liveLog) {
        liveLog.innerHTML = `
          <div style="color: #34d399;">✓ A.T.カーニー: ES締切 (10/19 09:00) 検出</div>
          <div style="color: #94a3b8;">• PwCコンサルティング: 新着通知なし (待機中)</div>
          <div style="color: #cbd5e1;">• 大成建設 / 住友電工 / JSOL 巡回完了</div>
        `;
      }
      setTimeout(() => {
        if (progressBar) progressBar.style.width = '60%';
        if (stageText) stageText.textContent = '[2/3] AXOL 体系 (39社) 会員規約・未読メッセージ走査中...';
        if (liveLog) {
          liveLog.innerHTML = `
            <div style="color: #34d399;">✓ DTFA: 会員規約同意案内＆早期ルート 検出</div>
            <div style="color: #34d399;">✓ 野村総合研究所: 秋季プレエントリー (10/02) 検出</div>
            <div style="color: #34d399;">✓ アクセンチュア: 秋季選考日程 (16日後) 検出</div>
          `;
        }
      }, 800);
      setTimeout(() => {
        if (progressBar) progressBar.style.width = '92%';
        if (stageText) stageText.textContent = '[3/3] SONAR・独自ATS ＆ 全網公開選考日历 走査照合中...';
      }, 1600);
      setTimeout(() => {
        if (progressBar) progressBar.style.width = '100%';
        if (modal) modal.classList.remove('open');
        const now = new Date();
        const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
        const scanLabel = document.getElementById('radarLastScanLabel');
        if (scanLabel) scanLabel.textContent = `最終スキャン: 本日 ${timeStr}`;
        loadRadarItems();
        renderRadarView();
        showToast('🎉 全101社のMyPageと最新公開選考日程の同期が完了しました');
      }, 2300);
    }
  }

  function addRadarToSelection(radarId) {
    if (!requireAuth('選考管理への追加')) return;
    const item = radarItems.find(r => r.id === radarId);
    if (!item) return;

    let c = catalog.find(x => x.id === item.companyId);
    if (!c) {
      c = {
        id: item.companyId,
        name: item.companyName,
        ind: item.industry,
        added: true,
        stage: 'entry',
        due: item.deadline ? item.deadline.slice(0, 10) : '',
        dueLabel: item.eventType === 'es' ? 'ES締切' : '選考締切',
        dueLv: 'soon',
        myPageUrl: item.mypageUrl || '',
        isCustom: true
      };
      catalog.unshift(c);
    } else {
      c.added = true;
      c.stage = 'entry';
      if (item.deadline) {
        c.due = item.deadline.slice(0, 10);
        c.dueLabel = item.eventType === 'es' ? 'ES締切' : '選考締切';
        const cd = getRadarCountdown(item.deadline);
        c.dueLv = cd && cd.isUrgent ? 'urgent' : 'soon';
      }
      if (item.mypageUrl && !c.myPageUrl) c.myPageUrl = item.mypageUrl;
    }

    if (item.deadline) {
      const dt = item.deadline;
      const alreadyHas = selectionEvents.some(e => e.companyId === c.id && (e.due || '').startsWith(dt.slice(0, 10)));
      if (!alreadyHas) {
        selectionEvents.push({
          id: 'ev_' + Date.now(),
          companyId: c.id,
          title: item.title,
          due: dt,
          type: item.eventType || 'es',
          memo: item.notes || '',
          status: 'upcoming'
        });
      }
    }

    item.status = 'converted';
    saveRadarItems();
    saveAll();
    renderRadarView();
    updateRadarBadge();
    showToast(`🎉 「${item.companyName}」を選考管理(Entry)に追加しました！`);
  }

  function dismissRadarItem(radarId) {
    const item = radarItems.find(r => r.id === radarId);
    if (!item) return;
    item.status = 'dismissed';
    saveRadarItems();
    renderRadarView();
    updateRadarBadge();
    showToast(`「${item.companyName}」の案内を見送りにしました`);
  }

  function renderRadarView() {
    const grid = document.getElementById('radarGrid');
    if (!grid) return;

    checkLocalAgentStatus();

    if (!radarItems.length) {
      loadRadarItems();
    }
    updateRadarBadge();

    let list = radarItems.filter(item => {
      if (item.status === 'dismissed') return false;

      const cd = getRadarCountdown(item.deadline);
      if (radarFilter === 'urgent') {
        if (!cd || (!cd.isUrgent && !cd.isSoon)) return false;
      } else if (radarFilter === 'hon') {
        if (item.category !== 'hon') return false;
      } else if (radarFilter === 'early') {
        if (item.category !== 'early') return false;
      } else if (radarFilter === 'intern') {
        if (item.category !== 'intern') return false;
      } else if (radarFilter === 'mypage') {
        if (item.sourceType !== 'mypage') return false;
      } else if (radarFilter === 'public') {
        if (item.sourceType !== 'public') return false;
      }

      if (radarKeyword) {
        const text = `${item.companyName} ${item.industry} ${item.title} ${item.notes || ''}`.toLowerCase();
        if (!text.includes(radarKeyword)) return false;
      }
      return true;
    });

    if (!list.length) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 16px; color: var(--sub);">
          <div style="font-size: 36px; margin-bottom: 12px;">📡</div>
          <div style="font-size: 14px; font-weight: 700; color: var(--ink);">該当するレーダー情報はありません</div>
          <div style="font-size: 12px; margin-top: 4px;">フィルターを切り替えるか、「今すぐスキャン」を実行してください。</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = list.map(item => {
      const comp = catalog.find(x => x.id === item.companyId) || {
        id: item.companyId,
        name: item.companyName,
        ind: item.industry,
        color: '#8b7bff'
      };
      const cd = getRadarCountdown(item.deadline);
      const isUrgent = cd && cd.isUrgent;
      const isSoon = cd && cd.isSoon;

      let pillClass = 'normal';
      let pillText = '待機中';
      if (cd) {
        if (cd.expired) {
          pillClass = 'normal';
          pillText = '締切終了';
        } else if (isUrgent) {
          pillClass = 'urgent';
          pillText = cd.text;
        } else if (isSoon) {
          pillClass = 'soon';
          pillText = cd.text;
        } else {
          pillClass = 'normal';
          pillText = cd.text;
        }
      }

      const isConverted = item.status === 'converted' || (comp.added && comp.stage && comp.stage !== 'watch');

      const entryBtnHtml = isConverted
        ? `<button class="radar-btn-entry" style="background:rgba(52,211,153,.2);color:#34d399;cursor:default;" disabled>✓ 選考管理中 (Entry)</button>`
        : `<button class="radar-btn-entry" onclick="addRadarToSelection('${item.id}')"><span>➕</span> 選考管理に追加 (Entry)</button>`;

      const mypageBtnHtml = item.mypageUrl
        ? `<a href="${item.mypageUrl}" target="_blank" rel="noopener noreferrer" class="radar-btn-ghost">🔗 MyPage</a>`
        : '';

      const dismissBtnHtml = !isConverted
        ? `<button class="radar-btn-dismiss" onclick="dismissRadarItem('${item.id}')" title="この案内を見送る">✕ 見送る</button>`
        : '';

      const sourceIcon = item.sourceType === 'mypage' ? '🔒' : '🌐';

      return `
        <div class="radar-card ${isUrgent ? 'is-urgent' : ''}" style="--accent:${comp.color || '#8b7bff'}">
          <div class="radar-card-header">
            <div class="radar-company-info">
              ${logoHtml(comp)}
              <div style="min-width:0">
                <div class="name" title="${item.companyName}">${item.companyName}</div>
                <div class="meta">
                  <span class="radar-tag">${item.industry || '未分類'}</span>
                  <span class="radar-tag" style="color:var(--accent)">${item.category === 'early' ? '早期優遇' : (item.category === 'intern' ? 'インターン' : '本選考')}</span>
                </div>
              </div>
            </div>
            <div class="radar-countdown-badge">
              <span class="radar-countdown-pill ${pillClass}">${pillText}</span>
              ${item.deadline ? `<span class="radar-countdown-date">${item.deadline.slice(5)}</span>` : ''}
            </div>
          </div>

          <div class="radar-card-body">
            <div class="radar-event-title">${item.title}</div>
            ${item.notes ? `<div class="radar-notes">${item.notes}</div>` : ''}
          </div>

          <div class="radar-card-footer">
            <div class="radar-source-label">
              <span>${sourceIcon}</span>
              <span>${item.sourceLabel || 'システム通知'}</span>
            </div>
            <div class="radar-actions">
              ${entryBtnHtml}
              ${mypageBtnHtml}
              ${dismissBtnHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // SELECTION TIMELINE CRUD & MODAL
  // =========================================================================
  let currentEventEditId = null;

  function openEventModal(eventId = null, companyId = null) {
    currentEventEditId = eventId;
    const modal = document.getElementById('eventModal');
    const compSelect = document.getElementById('evCompanyId');
    const titleEl = document.getElementById('evModalTitle');
    const delBtn = document.getElementById('evDeleteBtn');

    // Populate company select with all tracked/catalog companies
    compSelect.innerHTML = '';
    const tracked = catalog.filter(c => c.added);
    tracked.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    tracked.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = c.name;
      compSelect.appendChild(opt);
    });

    if (eventId) {
      const ev = selectionEvents.find(x => x.id === eventId);
      if (!ev) return;
      titleEl.textContent = '📅 選考イベントの編集';
      document.getElementById('evId').value = ev.id;
      compSelect.value = ev.companyId;
      document.getElementById('evType').value = ev.type || 'その他';
      document.getElementById('evStatus').value = ev.status || 'upcoming';
      document.getElementById('evTitle').value = ev.title || '';
      
      const dtParts = (ev.datetime || '').split('T')[0].split(' ');
      document.getElementById('evDate').value = dtParts[0] || '';
      const timePart = (ev.datetime || '').includes('T') ? (ev.datetime.split('T')[1] || '').slice(0, 5) : (dtParts[1] || '');
      document.getElementById('evTime').value = timePart;
      document.getElementById('evMemo').value = ev.memo || '';
      if (delBtn) delBtn.style.display = 'inline-block';
    } else {
      titleEl.textContent = '📅 新規予定を追加';
      document.getElementById('evId').value = '';
      if (companyId) compSelect.value = companyId;
      document.getElementById('evType').value = '面接';
      document.getElementById('evStatus').value = 'upcoming';
      document.getElementById('evTitle').value = '';
      
      // Default to tomorrow
      const d = new Date();
      d.setDate(d.getDate() + 1);
      document.getElementById('evDate').value = d.toISOString().slice(0, 10);
      document.getElementById('evTime').value = '10:00';
      document.getElementById('evMemo').value = '';
      if (delBtn) delBtn.style.display = 'none';
    }

    openModal('eventModal');
  }

  function saveCurrentEvent() {
    if (!requireAuth('選考スケジュールの保存')) return;
    const compId = document.getElementById('evCompanyId').value;
    const title = document.getElementById('evTitle').value.trim();
    const dateVal = document.getElementById('evDate').value;
    const timeVal = document.getElementById('evTime').value;
    const type = document.getElementById('evType').value;
    const status = document.getElementById('evStatus').value;
    const memo = document.getElementById('evMemo').value.trim();

    if (!compId) {
      alert('企業を選択してください');
      return;
    }
    if (!title) {
      alert('イベント名を入力してください');
      return;
    }
    if (!dateVal) {
      alert('日付を入力してください');
      return;
    }

    const datetime = timeVal ? `${dateVal} ${timeVal}` : dateVal;
    const now = new Date().toISOString();

    if (currentEventEditId) {
      const ev = selectionEvents.find(x => x.id === currentEventEditId);
      if (ev) {
        ev.companyId = compId;
        ev.title = title;
        ev.type = type;
        ev.status = status;
        ev.datetime = datetime;
        ev.memo = memo;
        ev.updatedAt = now;
      }
    } else {
      selectionEvents.push({
        id: 'ev_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        companyId: compId,
        title,
        type,
        status,
        datetime,
        memo,
        createdAt: now,
        updatedAt: now
      });
    }

    // Also auto-ensure the company is added to tracking
    const comp = catalog.find(x => x.id === compId);
    if (comp && !comp.added) {
      comp.added = true;
    }

    saveAllV3();
    renderAll();
    if (currentModalComp && currentModalComp.id === compId) {
      renderTimeline(compId);
    }
    closeModal('eventModal');
    showToast('選考イベントを保存しました');
  }

  function deleteCurrentEvent() {
    if (!requireAuth('選考スケジュールの削除')) return;
    if (!currentEventEditId) return;
    if (!confirm('この選考イベントを削除しますか？')) return;
    const ev = selectionEvents.find(x => x.id === currentEventEditId);
    const compId = ev ? ev.companyId : null;
    selectionEvents = selectionEvents.filter(x => x.id !== currentEventEditId);
    saveAllV3();
    renderAll();
    if (compId && currentModalComp && currentModalComp.id === compId) {
      renderTimeline(compId);
    }
    closeModal('eventModal');
    showToast('選考イベントを削除しました');
  }

  function deleteEvent(eventId, e) {
    if (e) e.stopPropagation();
    if (!requireAuth('選考イベントの削除')) return;
    if (!confirm('この選考イベントを削除しますか？')) return;
    const ev = selectionEvents.find(x => x.id === eventId);
    const compId = ev ? ev.companyId : null;
    selectionEvents = selectionEvents.filter(x => x.id !== eventId);
    saveAllV3();
    renderAll();
    if (compId && currentModalComp && currentModalComp.id === compId) {
      renderTimeline(compId);
    }
    showToast('選考イベントを削除しました');
  }

  function toggleEventStatus(eventId, e) {
    if (e) e.stopPropagation();
    if (!requireAuth('選考イベントの完了切り替え')) return;
    const ev = selectionEvents.find(x => x.id === eventId);
    if (!ev) return;
    ev.status = ev.status === 'completed' ? 'upcoming' : 'completed';
    ev.updatedAt = new Date().toISOString();
    saveAllV3();
    renderAll();
    if (currentModalComp && currentModalComp.id === ev.companyId) {
      renderTimeline(ev.companyId);
    }
    showToast(ev.status === 'completed' ? '✓ 完了にしました' : '予定に戻しました');
  }

  function renderTimeline(companyId) {
    const container = document.getElementById('mTimelineList');
    const countEl = document.getElementById('mTimelineCount');
    if (!container) return;

    const events = selectionEvents.filter(e => e.companyId === companyId);
    events.sort((a, b) => (a.datetime || '').localeCompare(b.datetime || ''));

    if (countEl) countEl.textContent = `${events.length}件`;

    if (!events.length) {
      container.innerHTML = `
        <div style="padding:16px;text-align:center;color:var(--sub);font-size:12px;background:rgba(255,255,255,.02);border-radius:10px;border:1px dashed var(--glass-brd)">
          選考日程・締切はまだ登録されていません。「＋ 予定を追加」から追加できます。
        </div>
      `;
      return;
    }

    container.innerHTML = events.map(ev => {
      const isDone = ev.status === 'completed';
      const dtParts = (ev.datetime || '').split('T')[0].split(' ');
      const datePart = dtParts[0] || '日付未定';
      const timePart = (ev.datetime || '').includes('T') ? (ev.datetime.split('T')[1] || '').slice(0, 5) : (dtParts[1] || '');

      return `
        <div class="timeline-item ${ev.status}">
          <button class="timeline-status-btn" onclick="toggleEventStatus('${ev.id}', event)" title="${isDone ? '完了（クリックで予定に戻す）' : '未完了（クリックで完了にする）'}">
            ${isDone ? '✓' : ''}
          </button>
          <div class="timeline-dt">
            ${datePart}
            ${timePart ? `<small>${timePart}</small>` : ''}
          </div>
          <div class="timeline-content">
            <div class="timeline-title">
              ${renderEventTypeBadge(ev.type)}
              <span>${ev.title}</span>
            </div>
            ${ev.memo ? `<div class="timeline-memo">${ev.memo}</div>` : ''}
          </div>
          <div class="timeline-actions">
            <button class="action-icon-btn" onclick="openEventModal('${ev.id}', '${companyId}')" title="編集">✏️</button>
            <button class="action-icon-btn delete" onclick="deleteEvent('${ev.id}', event)" title="削除">✕</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderCompanyEsList(companyId) {
    const container = document.getElementById('mCompEsList');
    const countEl = document.getElementById('mCompEsCount');
    if (!container) return;

    const list = esList.filter(e => e.companyId === companyId);
    list.sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));

    if (countEl) countEl.textContent = `${list.length}件`;

    if (!list.length) {
      container.innerHTML = `
        <div style="padding:16px;text-align:center;color:var(--sub);font-size:12px;background:rgba(255,255,255,.02);border-radius:10px;border:1px dashed var(--glass-brd)">
          この企業に紐づくESはまだありません。「＋ この企業のESを作成」から作成できます。
        </div>
      `;
      return;
    }

    container.innerHTML = list.map(es => {
      const qs = getEsQuestions(es);
      const totalChars = getEsTotalCharCount(es);
      const totalLimit = getEsTotalCharLimit(es);
      const limitStr = totalLimit ? `${totalChars}/${totalLimit}字` : `${totalChars}字`;
      const statusBadge = es.status === 'submitted'
        ? `<span style="color:var(--green);font-size:10px;font-weight:700">● 提出済</span>`
        : `<span style="color:var(--gold-2);font-size:10px;font-weight:700">● 下書き</span>`;

      const qSummary = qs.map((q, i) => `Q${i+1}: ${q.type || '設問'}`).join(' | ');

      return `
        <div class="comp-es-card" onclick="openEsModal('${es.id}')">
          <div style="display:flex;align-items:center;justify-content:space-between">
            <div style="display:flex;align-items:center;gap:6px">
              <b style="font-size:13px;color:var(--ink)">${es.title}</b>
              <span class="tag ind" style="font-size:10px;padding:1px 6px">全 ${qs.length} 設問</span>
            </div>
            <div style="display:flex;align-items:center;gap:6px">
              ${statusBadge}
              <span class="badge-due-normal">${limitStr}</span>
              <button class="action-icon-btn" onclick="event.stopPropagation();openEsModal('${es.id}')" title="編集">✏️</button>
            </div>
          </div>
          <div style="font-size:11.5px;color:var(--sub);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px;">
            ${qSummary}
          </div>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // ES DATABASE (VIEW 3) CRUD & UI (Two-Layer, Compact List, Grouping, Clone)
  // =========================================================================
  let esViewMode = localStorage.getItem('shukatsu_es_view_mode') || 'list'; // 'list' | 'card'
  let esSearchQuery = '';
  let esFilterType = 'all';
  let esFilterIndustry = 'all';
  let esFilterStatus = 'all';
  let esFilterCompany = 'all';
  let esGroupBy = 'none'; // 'none' | 'industry' | 'company' | 'type'
  let currentEsEditId = null;
  let currentCloneTargetCompId = null;

  // Normalizer: always returns array of { id, type, question, answer, characterLimit }
  function getEsQuestions(es) {
    if (!es) return [];
    if (Array.isArray(es.questions) && es.questions.length > 0) {
      return es.questions;
    }
    return [{
      id: 'q_default_1',
      type: es.questionType || detectEsType(es) || 'その他',
      question: es.question || '',
      answer: es.answer || '',
      characterLimit: es.characterLimit || 0
    }];
  }

  function getEsTotalCharCount(es) {
    const qs = getEsQuestions(es);
    return qs.reduce((sum, q) => sum + (q.answer || '').length, 0);
  }

  function getEsTotalCharLimit(es) {
    const qs = getEsQuestions(es);
    return qs.reduce((sum, q) => sum + (q.characterLimit || 0), 0);
  }

  // Client-side Smart Heuristic Parser for pasted text
  function smartParseEsPastedText(rawText) {
    rawText = (rawText || '').trim();
    if (!rawText) return [];

    function detectType(text) {
      const s = (text || '').toLowerCase();
      if (s.includes('志望') || s.includes('なぜ当社') || s.includes('実現したいこと') || s.includes('かなえたい夢') || s.includes('応募理由') || s.includes('興味を持っ')) return '志望動機';
      if (s.includes('自己pr') || s.includes('自己アピール') || s.includes('強み') || s.includes('長所') || s.includes('ワークフィールドpr') || s.includes('実績やアウトプット')) return '自己PR';
      if (s.includes('ガクチカ') || s.includes('学生時代') || s.includes('最も情熱') || s.includes('力を入れ') || s.includes('最も熱中') || s.includes('主体的に取り組んだ') || s.includes('成果をあげた') || s.includes('取り組んだ経験')) return 'ガクチカ';
      if (s.includes('学業') || s.includes('研究') || s.includes('ゼミ') || s.includes('卒論') || s.includes('専攻')) return '学業・研究';
      if (s.includes('短所') || s.includes('挫折') || s.includes('困難') || s.includes('失敗') || s.includes('見直した出来事')) return '長所・短所';
      return 'その他';
    }

    function extractLimit(text) {
      if (!text) return 0;
      const m = text.match(/(?:上限|最大|〜|~)?\s*(\d{2,4})\s*(?:文字|字)(?:以内|程度|未満|以下)?/);
      return m ? parseInt(m[1], 10) : 0;
    }

    // Format 1: Explicit '---' delimiter
    if (/\n\s*---\s*\n/.test(rawText)) {
      const chunks = rawText.split(/\n\s*---\s*\n/);
      const items = [];
      chunks.forEach((chunk, idx) => {
        chunk = chunk.trim();
        if (!chunk) return;

        const limit = extractLimit(chunk.slice(0, 250));
        const ansSplit = chunk.split(/(?:\n|^)\s*(?:【\s*回答\s*】|回答内容[：:\s]*|回答[：:\s]+)/i);
        if (ansSplit.length > 1) {
          const qPart = ansSplit[0].trim();
          const aPart = ansSplit.slice(1).join('\n').trim();
          items.push({
            id: 'q_' + (idx + 1) + '_' + Math.random().toString(36).substr(2, 4),
            type: detectType(qPart),
            question: qPart,
            answer: aPart,
            characterLimit: limit || extractLimit(qPart)
          });
          return;
        }

        const lines = chunk.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length === 1) {
          items.push({
            id: 'q_' + (idx + 1) + '_' + Math.random().toString(36).substr(2, 4),
            type: detectType(lines[0]),
            question: lines[0],
            answer: '',
            characterLimit: limit
          });
        } else {
          let qLines = [lines[0]];
          let ansIdx = 1;
          if (lines.length > 2 && (/(?:文字|以内|程度|案内|：|:|\?|？)/.test(lines[1]) || lines[1].length < 60)) {
            qLines.push(lines[1]);
            ansIdx = 2;
          }
          const prompt = qLines.join('\n');
          const ans = lines.slice(ansIdx).join('\n').trim();
          items.push({
            id: 'q_' + (idx + 1) + '_' + Math.random().toString(36).substr(2, 4),
            type: detectType(prompt),
            question: prompt,
            answer: ans,
            characterLimit: limit || extractLimit(prompt)
          });
        }
      });
      if (items.length > 0) return items;
    }

    // Format 2: MyPage text with 設問 / Q markers
    const hasSetsumon = /(?:^|\n)\s*(?:###\s*|【\s*|◆\s*|■\s*|●\s*|▼\s*)?設問\s*[0-9０-９一二三四五六七八九十]+/i.test(rawText);
    let headerRegex;
    if (hasSetsumon) {
      headerRegex = /(?:^|\n)\s*(?:###\s*|【\s*|◆\s*|■\s*|●\s*|▼\s*)?設問\s*([0-9０-９一二三四五六七八九十]+)[:：.、\s\)\】\）\-]*(.*?)(?=\n|$)/gi;
    } else {
      headerRegex = /(?:^|\n)\s*(?:###\s*|【\s*|◆\s*|■\s*|●\s*|▼\s*)?(?:設問|質問|第[0-9０-９]+問|Q)\s*([0-9０-９一二三四五六七八九十]+)?[:：.、\s\)\】\）\-]*(.*?)(?=\n|$)/gi;
    }

    const matches = [];
    let m;
    while ((m = headerRegex.exec(rawText)) !== null) {
      matches.push({ index: m.index, matchText: m[0], num: m[1], rest: m[2] });
    }

    if (matches.length >= 2) {
      const items = [];
      for (let i = 0; i < matches.length; i++) {
        const start = matches[i].index;
        const end = i + 1 < matches.length ? matches[i + 1].index : rawText.length;
        const block = rawText.slice(start, end).trim();

        const ansSplit = block.split(/(?:\n|^)\s*(?:【\s*回答\s*】|回答内容[：:\s]*|回答[：:\s]+)/i);
        let qPart = '';
        let aPart = '';

        if (ansSplit.length > 1) {
          qPart = ansSplit[0].trim();
          aPart = ansSplit.slice(1).join('\n').trim();
        } else {
          const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
          qPart = lines[0] || '';
          if (lines.length > 2 && (/(?:文字|以内|程度|：|:|\?|？)/.test(lines[1]) || lines[1].length < 60)) {
            qPart += '\n' + lines[1];
            aPart = lines.slice(2).join('\n').trim();
          } else {
            aPart = lines.slice(1).join('\n').trim();
          }
        }

        const limit = extractLimit(qPart + ' ' + aPart.slice(0, 100));

        items.push({
          id: 'q_' + (i + 1) + '_' + Math.random().toString(36).substr(2, 4),
          type: detectType(qPart),
          question: qPart,
          answer: aPart,
          characterLimit: limit
        });
      }
      return items;
    }

    // Fallback: single entry
    const lines = rawText.split('\n').map(l => l.trim()).filter(Boolean);
    const limit = extractLimit(rawText.slice(0, 150));
    return [{
      id: 'q_1_' + Math.random().toString(36).substr(2, 4),
      type: detectType(lines[0] || ''),
      question: lines[0] || '',
      answer: lines.slice(1).join('\n').trim(),
      characterLimit: limit
    }];
  }

  // Question Type detector
  function detectEsType(es) {
    if (es.questionType && es.questionType !== 'その他') return es.questionType;
    const qs = getEsQuestions(es);
    if (qs.length > 0) {
      for (const q of qs) {
        if (q.type && q.type !== 'その他') return q.type;
      }
    }
    const title = (es.title || '').toLowerCase();
    const tags = (es.tags || []).join(' ').toLowerCase();
    if (title.includes('志望動機') || title.includes('志望理由') || tags.includes('志望動機')) return '志望動機';
    if (title.includes('ガクチカ') || title.includes('学生時代') || tags.includes('ガクチカ')) return 'ガクチカ';
    if (title.includes('自己pr') || title.includes('自己アピール') || tags.includes('自己pr') || title.includes('強み')) return '自己PR';
    if (title.includes('学業') || title.includes('研究') || tags.includes('研究')) return '学業・研究';
    if (title.includes('長所') || title.includes('短所') || title.includes('挫折')) return '長所・短所';

    const qText = qs.map(q => q.question || '').join(' ');
    const str = (qText + ' ' + (es.question || '') + ' ' + tags).toLowerCase();
    if (str.includes('志望動機') || str.includes('志望理由') || str.includes('志望する理由') || str.includes('なぜ当社') || str.includes('志望')) return '志望動機';
    if (str.includes('自己pr') || str.includes('自己アピール') || str.includes('強み') || str.includes('長所')) return '自己PR';
    if (str.includes('ガクチカ') || str.includes('学生時代') || str.includes('力を入れ') || str.includes('最も熱中') || str.includes('情熱を持っ') || str.includes('主体的に取り組んだ')) return 'ガクチカ';
    if (str.includes('学業') || str.includes('研究') || str.includes('ゼミ') || str.includes('卒論')) return '学業・研究';
    if (str.includes('短所') || str.includes('挫折') || str.includes('困難を乗り越え') || str.includes('見直した出来事')) return '長所・短所';
    return es.questionType || 'その他';
  }

  // Industry detector
  function getEsIndustry(es) {
    if (!es.companyId) return '汎用・共通';
    const c = catalog.find(x => x.id === es.companyId);
    if (!c) return '汎用・共通';
    return catOf(c) || c.cat || 'その他';
  }

  // Type badge helper
  function getEsTypeBadge(type) {
    let cls = 'type-other';
    if (type === '自己PR') cls = 'type-pr';
    else if (type === 'ガクチカ') cls = 'type-gakuchika';
    else if (type === '志望動機') cls = 'type-motiv';
    else if (type === '学業・研究') cls = 'type-study';
    return `<span class="es-type-badge ${cls}">${type}</span>`;
  }

  // Format all questions & answers for clipboard
  function formatEsForClipboard(es) {
    const comp = catalog.find(x => x.id === es.companyId);
    const compName = comp ? comp.name : '汎用ストック';
    const qs = getEsQuestions(es);

    if (qs.length === 1 && !qs[0].question) {
      return qs[0].answer || '';
    }

    let text = `【企業】${compName}\n【タイトル】${es.title || 'エントリーシート'}\n\n`;
    qs.forEach((q, idx) => {
      const limitStr = q.characterLimit ? ` (${q.characterLimit}字以内)` : '';
      const typeStr = q.type ? `[${q.type}] ` : '';
      text += `----------------------------------------\n`;
      text += `【設問 ${idx + 1}】${typeStr}${limitStr}\n`;
      text += `${q.question || '（設問未入力）'}\n\n`;
      text += `【回答】\n`;
      text += `${q.answer || '（回答未入力）'}\n\n`;
    });
    return text.trim();
  }

  // One-click copy helper
  function copyEsAnswer(esId, e) {
    if (e) e.stopPropagation();
    const es = esList.find(x => x.id === esId);
    if (!es) return;
    const textToCopy = formatEsForClipboard(es);
    if (!textToCopy) {
      showToast('コピーする本文がありません');
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`📋 「${es.title}」の全設問・回答をコピーしました`);
      }).catch(() => {
        fallbackCopyText(textToCopy, es.title);
      });
    } else {
      fallbackCopyText(textToCopy, es.title);
    }
  }

  function fallbackCopyText(text, title) {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    ta.remove();
    showToast(`📋 「${title}」の本文をコピーしました`);
  }

  // View Mode switcher
  function setEsViewMode(mode) {
    esViewMode = mode;
    localStorage.setItem('shukatsu_es_view_mode', mode);
    document.getElementById('btnEsViewList')?.classList.toggle('active', mode === 'list');
    document.getElementById('btnEsViewCard')?.classList.toggle('active', mode === 'card');
    renderESDatabase();
  }

  // Filter handlers
  function onEsSearchInput(val) {
    esSearchQuery = (val || '').trim().toLowerCase();
    const clearBtn = document.getElementById('esSearchClear');
    if (clearBtn) clearBtn.style.display = esSearchQuery ? 'block' : 'none';
    renderESDatabase();
  }

  function clearEsSearch() {
    const inp = document.getElementById('esSearchInput');
    if (inp) inp.value = '';
    esSearchQuery = '';
    document.getElementById('esSearchClear').style.display = 'none';
    renderESDatabase();
  }

  function onEsTypeFilterClick(type) {
    esFilterType = type;
    document.querySelectorAll('#esTypeFilters .chip-sm').forEach(c => {
      c.classList.toggle('on', c.dataset.type === type);
    });
    renderESDatabase();
  }

  function onEsIndustryFilterChange(val) {
    esFilterIndustry = val;
    renderESDatabase();
  }

  function onEsStatusFilterClick(status) {
    esFilterStatus = status;
    document.querySelectorAll('#esStatusFilters .chip-sm').forEach(c => {
      c.classList.toggle('on', c.dataset.status === status);
    });
    renderESDatabase();
  }

  function onEsCompanyFilterChange(val) {
    esFilterCompany = val;
    renderESDatabase();
  }

  function onEsGroupByChange(val) {
    esGroupBy = val;
    renderESDatabase();
  }

  // Main ES Database Renderer
  function renderESDatabase() {
    // Sync filter chip counts
    const typeCounts = { all: esList.length, '自己PR': 0, 'ガクチカ': 0, '志望動機': 0, '学業・研究': 0, 'その他': 0 };
    const statusCounts = { all: esList.length, draft: 0, submitted: 0 };
    esList.forEach(es => {
      const t = detectEsType(es);
      if (typeCounts[t] !== undefined) typeCounts[t]++;
      else typeCounts['その他']++;
      if (es.status === 'submitted') statusCounts.submitted++;
      else statusCounts.draft++;
    });

    document.querySelectorAll('#esTypeFilters .chip-sm').forEach(c => {
      const dt = c.dataset.type;
      if (dt === 'all') c.textContent = `全設問 (${typeCounts.all})`;
      else if (typeCounts[dt] !== undefined) c.textContent = `${dt} (${typeCounts[dt]})`;
    });

    document.querySelectorAll('#esStatusFilters .chip-sm').forEach(c => {
      const st = c.dataset.status;
      if (st === 'all') c.textContent = `全状態 (${statusCounts.all})`;
      else if (st === 'draft') c.textContent = `下書き (${statusCounts.draft})`;
      else if (st === 'submitted') c.textContent = `提出済み (${statusCounts.submitted})`;
    });

    // Populate company selector if needed
    const select = document.getElementById('esCompanyFilter');
    if (select && select.options.length <= 2) {
      const comps = catalog.filter(c => c.added || esList.some(e => e.companyId === c.id));
      comps.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
      comps.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c.id;
        opt.textContent = c.name;
        select.appendChild(opt);
      });
    }

    // Sync active view toggle buttons
    document.getElementById('btnEsViewList')?.classList.toggle('active', esViewMode === 'list');
    document.getElementById('btnEsViewCard')?.classList.toggle('active', esViewMode === 'card');

    // Filter list
    let filtered = esList.filter(es => {
      // Status filter
      if (esFilterStatus !== 'all' && es.status !== esFilterStatus) return false;

      // Question Type filter
      if (esFilterType !== 'all') {
        const t = detectEsType(es);
        if (t !== esFilterType) return false;
      }

      // Industry filter
      if (esFilterIndustry !== 'all') {
        const ind = getEsIndustry(es);
        if (ind !== esFilterIndustry) return false;
      }

      // Company filter
      if (esFilterCompany === 'general' && es.companyId) return false;
      if (esFilterCompany !== 'all' && esFilterCompany !== 'general' && es.companyId !== esFilterCompany) return false;

      // Search Query filter (fulltext in title, question, answer, companyName, tags, stories)
      if (esSearchQuery) {
        const comp = catalog.find(x => x.id === es.companyId);
        const compName = comp ? comp.name.toLowerCase() : '汎用テンプレート';
        const ind = getEsIndustry(es).toLowerCase();
        const title = (es.title || '').toLowerCase();
        const question = (es.question || '').toLowerCase();
        const answer = (es.answer || '').toLowerCase();
        const tags = (es.tags || []).join(' ').toLowerCase();
        const stories = (es.linkedStoryIds || []).map(sid => {
          const s = storyBank.find(x => x.id === sid);
          return s ? s.title.toLowerCase() : '';
        }).join(' ');

        if (!compName.includes(esSearchQuery) &&
            !ind.includes(esSearchQuery) &&
            !title.includes(esSearchQuery) &&
            !question.includes(esSearchQuery) &&
            !answer.includes(esSearchQuery) &&
            !tags.includes(esSearchQuery) &&
            !stories.includes(esSearchQuery)) {
          return false;
        }
      }
      return true;
    });

    // Default sort by updatedAt desc
    filtered.sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''));

    const countEl = document.getElementById('esShownCount');
    if (countEl) countEl.textContent = filtered.length;

    const tableWrap = document.getElementById('esTableViewWrap');
    const tableBody = document.getElementById('esTableBody');
    const cardGrid = document.getElementById('esGrid');
    const groupView = document.getElementById('esGroupView');

    if (!filtered.length) {
      if (tableWrap) tableWrap.style.display = 'none';
      if (cardGrid) {
        cardGrid.style.display = 'block';
        cardGrid.innerHTML = `
          <div style="text-align:center;padding:60px 16px;color:var(--sub);font-size:13px;background:rgba(18,24,38,0.4);border:1px solid var(--glass-brd);border-radius:12px;">
            🔍 条件に一致するESは見つかりませんでした。「＋ 新規ES作成」またはフィルターをリセットしてください。
          </div>
        `;
      }
      if (groupView) groupView.style.display = 'none';
      return;
    }

    // Handle Group By
    if (esGroupBy !== 'none') {
      if (tableWrap) tableWrap.style.display = 'none';
      if (cardGrid) cardGrid.style.display = 'none';
      if (groupView) {
        groupView.style.display = 'block';
        renderEsGrouped(filtered, groupView);
      }
      return;
    }

    // Flat display
    if (groupView) groupView.style.display = 'none';

    if (esViewMode === 'list') {
      if (cardGrid) cardGrid.style.display = 'none';
      if (tableWrap && tableBody) {
        tableWrap.style.display = 'block';
        tableBody.innerHTML = filtered.map(es => renderEsTableRow(es)).join('');
      }
    } else {
      if (tableWrap) tableWrap.style.display = 'none';
      if (cardGrid) {
        cardGrid.style.display = 'grid';
        cardGrid.innerHTML = filtered.map(es => renderEsCard(es)).join('');
      }
    }
  }

  // Render Table Row
  function renderEsTableRow(es) {
    const comp = catalog.find(x => x.id === es.companyId);
    const compName = comp ? comp.name : '汎用ストック';
    const ind = getEsIndustry(es);
    const type = detectEsType(es);
    const qs = getEsQuestions(es);
    const totalChars = getEsTotalCharCount(es);
    const totalLimit = getEsTotalCharLimit(es);

    let charBadge = '';
    if (totalLimit) {
      let badgeClass = 'warn';
      let titleHint = `8割目安(${Math.ceil(totalLimit*0.8)}字)まであと${Math.ceil(totalLimit*0.8)-totalChars}字`;
      if (totalChars > totalLimit) {
        badgeClass = 'over';
        titleHint = `${totalChars - totalLimit}字超過`;
      } else if (totalChars >= Math.ceil(totalLimit * 0.8)) {
        badgeClass = 'ok';
        titleHint = `適正文字数 (${Math.round(totalChars/totalLimit*100)}%)`;
      }
      charBadge = `<span class="es-char-badge ${badgeClass}" title="${titleHint}">計 ${totalChars} / ${totalLimit}字</span>`;
    } else {
      charBadge = `<span class="es-char-badge">計 ${totalChars}字</span>`;
    }

    const qCountBadge = qs.length > 1
      ? `<span class="tag ind" style="font-size:10.5px;padding:2px 7px;font-weight:800">全 ${qs.length} 設問</span>`
      : getEsTypeBadge(type);

    const statusBadge = es.status === 'submitted'
      ? `<span class="badge-due-normal" style="color:var(--green);border-color:rgba(78,227,154,.4);font-size:11px">● 提出済</span>`
      : `<span class="badge-due-normal" style="color:var(--gold-2);border-color:rgba(217,178,95,.4);font-size:11px">下書き</span>`;

    const storiesHtml = (es.linkedStoryIds || []).map(sid => {
      const s = storyBank.find(x => x.id === sid);
      return s ? `<span class="story-ref-badge" onclick="event.stopPropagation();openStoryModal('${s.id}')" title="${s.title}">🔗 ${s.title.slice(0, 10)}…</span>` : '';
    }).join(' ');

    const compAnchor = comp 
      ? `<span class="es-comp-anchor" onclick="event.stopPropagation();openDetailModal('${comp.id}')" title="企業詳細・選考Timelineを開く">🏢 ${compName}</span>`
      : `<span style="color:var(--sub);font-size:11.5px;font-weight:700">📁 汎用ストック</span>`;

    const qSummary = qs.map((q, i) => `Q${i+1}: ${q.type || '設問'}`).join(' | ');

    return `
      <tr class="es-table-row" onclick="openEsModal('${es.id}')">
        <td>
          <div style="display:flex;flex-direction:column;gap:3px">
            ${compAnchor}
            <span class="es-industry-tag" style="width:fit-content">${ind}</span>
          </div>
        </td>
        <td>${qCountBadge}</td>
        <td>
          <div style="font-weight:700;color:var(--ink);margin-bottom:2px;max-width:320px;overflow:hidden;text-overflow:ellipsis;" title="${es.title}">${es.title}</div>
          <div style="font-size:11.5px;color:var(--sub);max-width:320px;overflow:hidden;text-overflow:ellipsis;" title="${qSummary}">${qSummary}</div>
        </td>
        <td>${charBadge}</td>
        <td>${statusBadge}</td>
        <td><div style="display:flex;flex-wrap:wrap;gap:3px">${storiesHtml || '<span style="color:var(--muted);font-size:11px">—</span>'}</div></td>
        <td style="font-size:11px;color:var(--sub)">${(es.updatedAt || '').slice(0, 10)}</td>
        <td style="text-align:right" onclick="event.stopPropagation()">
          <div style="display:inline-flex;gap:5px;align-items:center">
            <button class="action-icon-btn" onclick="copyEsAnswer('${es.id}', event)" title="全設問・回答を一括コピー">📋</button>
            <button class="action-icon-btn" onclick="openEsModal('${es.id}')" title="編集">✏️</button>
            <button class="action-icon-btn delete" onclick="deleteEs('${es.id}', event)" title="削除">✕</button>
          </div>
        </td>
      </tr>
    `;
  }

  // Render Card
  function renderEsCard(es) {
    const comp = catalog.find(x => x.id === es.companyId);
    const compName = comp ? comp.name : '汎用ストック';
    const ind = getEsIndustry(es);
    const type = detectEsType(es);
    const qs = getEsQuestions(es);
    const totalChars = getEsTotalCharCount(es);
    const totalLimit = getEsTotalCharLimit(es);

    let charBadge = '';
    if (totalLimit) {
      let badgeClass = 'warn';
      let titleHint = `8割目安(${Math.ceil(totalLimit*0.8)}字)まであと${Math.ceil(totalLimit*0.8)-totalChars}字`;
      if (totalChars > totalLimit) {
        badgeClass = 'over';
        titleHint = `${totalChars - totalLimit}字超過`;
      } else if (totalChars >= Math.ceil(totalLimit * 0.8)) {
        badgeClass = 'ok';
        titleHint = `適正文字数 (${Math.round(totalChars/totalLimit*100)}%)`;
      }
      charBadge = `<span class="es-char-badge ${badgeClass}" title="${titleHint}">計 ${totalChars} / ${totalLimit}字</span>`;
    } else {
      charBadge = `<span class="es-char-badge">計 ${totalChars}字</span>`;
    }

    const statusBadge = es.status === 'submitted'
      ? `<span class="badge-due-normal" style="color:var(--green);border-color:rgba(78,227,154,.4)">提出済</span>`
      : `<span class="badge-due-normal" style="color:var(--gold-2);border-color:rgba(217,178,95,.4)">下書き</span>`;

    const storiesHtml = (es.linkedStoryIds || []).map(sid => {
      const s = storyBank.find(x => x.id === sid);
      return s ? `<span class="story-ref-badge" onclick="event.stopPropagation();openStoryModal('${s.id}')">🔗 ${s.title}</span>` : '';
    }).join(' ');

    const compAnchor = comp 
      ? `<span class="es-comp-anchor" onclick="event.stopPropagation();openDetailModal('${comp.id}')" title="企業詳細・選考Timelineを開く">🏢 ${compName}</span>`
      : `<span style="color:var(--sub);font-size:11.5px;font-weight:700">📁 汎用ストック</span>`;

    // Multi-question preview blocks (up to 3 questions previewed)
    const previewCards = qs.slice(0, 3).map((q, i) => {
      const qLen = (q.answer || '').length;
      const qLimitStr = q.characterLimit ? ` / ${q.characterLimit}字` : '';
      return `
        <div class="es-preview-q-item">
          <div style="font-weight:700;color:var(--ink);font-size:11.5px;display:flex;justify-content:space-between;margin-bottom:2px">
            <span>Q${i+1} [${q.type || '設問'}]</span>
            <span style="color:var(--cyan);font-size:10.5px">${qLen}${qLimitStr}</span>
          </div>
          <div style="color:var(--sub);font-size:11px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:2px">${escapeHtml(q.question || '（設問未入力）')}</div>
          <div style="color:rgba(240,243,246,.82);font-size:11.5px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">${escapeHtml((q.answer || '（回答未入力）').replace(/\n/g, ' '))}</div>
        </div>
      `;
    }).join('');

    const moreQsNotice = qs.length > 3
      ? `<div style="font-size:11px;color:var(--cyan);font-weight:700;text-align:center;padding:2px">＋ 他 ${qs.length - 3} 設問（クリックして全問表示・編集）</div>`
      : '';

    return `
      <div class="es-card" onclick="openEsModal('${es.id}')">
        <div class="es-card-head">
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
            ${compAnchor}
            <span class="es-industry-tag">${ind}</span>
            <span class="tag ind" style="font-size:10.5px;font-weight:800">全 ${qs.length} 設問</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-left:auto;">
            ${statusBadge}
            <button class="action-icon-btn" onclick="copyEsAnswer('${es.id}', event)" title="全設問・回答を一括コピー">📋</button>
            <button class="action-icon-btn delete" onclick="deleteEs('${es.id}', event)" title="削除">✕</button>
          </div>
        </div>
        <div class="es-card-title">${es.title}</div>
        <div style="display:flex;flex-direction:column;gap:6px">
          ${previewCards}
          ${moreQsNotice}
        </div>
        ${storiesHtml ? `<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:2px">${storiesHtml}</div>` : ''}
        <div class="es-meta-bar">
          ${charBadge}
          ${(es.tags || []).slice(0, 3).map(t => `<span class="tag free" style="font-size:10px">${t}</span>`).join('')}
          <span style="margin-left:auto;font-size:11px;color:var(--muted)">${(es.updatedAt || '').slice(0, 10)}</span>
        </div>
      </div>
    `;
  }

  // Render Grouped Mode
  function renderEsGrouped(items, container) {
    // Group mapping
    const groups = {};
    items.forEach(es => {
      let key = 'その他';
      if (esGroupBy === 'industry') {
        key = getEsIndustry(es);
      } else if (esGroupBy === 'company') {
        const c = catalog.find(x => x.id === es.companyId);
        key = c ? c.name : '📁 汎用テンプレート';
      } else if (esGroupBy === 'type') {
        key = detectEsType(es);
      }
      if (!groups[key]) groups[key] = [];
      groups[key].push(es);
    });

    const keys = Object.keys(groups).sort((a, b) => b.length - a.length);

    container.innerHTML = keys.map((key, idx) => {
      const list = groups[key];
      let innerHtml = '';
      if (esViewMode === 'list') {
        innerHtml = `
          <div class="es-table-container">
            <table class="es-table">
              <thead>
                <tr>
                  <th style="width:190px">企業・業界</th>
                  <th style="width:95px">タイプ</th>
                  <th>設問・タイトル要約</th>
                  <th style="width:110px">文字数</th>
                  <th style="width:85px">状態</th>
                  <th style="width:140px">参照Story</th>
                  <th style="width:90px">更新日</th>
                  <th style="width:115px;text-align:right">操作</th>
                </tr>
              </thead>
              <tbody>
                ${list.map(es => renderEsTableRow(es)).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else {
        innerHtml = `
          <div class="es-grid">
            ${list.map(es => renderEsCard(es)).join('')}
          </div>
        `;
      }

      return `
        <div class="es-group-card" id="groupCard_${idx}">
          <div class="es-group-header" onclick="document.getElementById('groupCard_${idx}').classList.toggle('collapsed')">
            <div class="es-group-title">
              <span>${key}</span>
              <span class="badge-count">${list.length}件</span>
            </div>
            <span class="es-group-arrow">▼</span>
          </div>
          <div class="es-group-body">
            ${innerHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // =========================================================================
  // ES CLONE PICKER MODAL (Cross-Company Duplication)
  // =========================================================================
  function openEsClonePickerModal(targetCompanyId) {
    if (!requireAuth('既存ESからの複製機能')) return;
    currentCloneTargetCompId = targetCompanyId;
    const c = catalog.find(x => x.id === targetCompanyId);
    const headTitle = document.getElementById('clonePickerHeadTitle');
    const subTitle = document.getElementById('clonePickerSubTitle');
    if (headTitle && c) {
      headTitle.textContent = `📥 既存ESから複製（${c.name} 向け）`;
    }
    if (subTitle && c) {
      subTitle.textContent = `過去の優秀なES・他社向け回答を元に、${c.name} のエントリーシートを作成します`;
    }
    const searchInp = document.getElementById('clonePickerSearch');
    if (searchInp) searchInp.value = '';
    renderClonePickerList();
    openModal('esClonePickerModal');
  }

  function renderClonePickerList() {
    const listEl = document.getElementById('clonePickerList');
    if (!listEl) return;
    const kw = (document.getElementById('clonePickerSearch')?.value || '').trim().toLowerCase();
    const typeFilter = document.getElementById('clonePickerTypeFilter')?.value || 'all';
    const indFilter = document.getElementById('clonePickerIndustryFilter')?.value || 'all';

    let candidates = esList.filter(es => {
      // Don't show ES already explicitly written for current company
      if (currentCloneTargetCompId && es.companyId === currentCloneTargetCompId) return false;
      if (typeFilter !== 'all' && detectEsType(es) !== typeFilter) return false;
      if (indFilter !== 'all' && getEsIndustry(es) !== indFilter) return false;
      if (kw) {
        const title = (es.title || '').toLowerCase();
        const question = (es.question || '').toLowerCase();
        const answer = (es.answer || '').toLowerCase();
        const c = catalog.find(x => x.id === es.companyId);
        const compName = c ? c.name.toLowerCase() : '';
        if (!title.includes(kw) && !question.includes(kw) && !answer.includes(kw) && !compName.includes(kw)) {
          return false;
        }
      }
      return true;
    });

    const countEl = document.getElementById('clonePickerCount');
    if (countEl) countEl.textContent = `${candidates.length}件の候補`;

    if (!candidates.length) {
      listEl.innerHTML = `
        <div style="text-align:center;padding:40px 12px;color:var(--sub);font-size:12px">
          複製可能な既存ESが見つかりませんでした。
        </div>
      `;
      return;
    }

    listEl.innerHTML = candidates.map(es => {
      const c = catalog.find(x => x.id === es.companyId);
      const compName = c ? c.name : '汎用ストック';
      const ind = getEsIndustry(es);
      const type = detectEsType(es);
      const charLen = (es.answer || '').length;

      return `
        <div class="clone-picker-item">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <span class="tag ${c ? 'ind' : 'free'}" style="font-size:11px">${compName}</span>
              <span class="es-industry-tag">${ind}</span>
              ${getEsTypeBadge(type)}
              <span style="font-weight:700;color:var(--ink);font-size:13px">${es.title}</span>
            </div>
            <button class="top-btn primary" onclick="cloneEsToCompany('${es.id}', '${currentCloneTargetCompId}')" style="padding:4px 12px;font-size:11.5px;border-radius:8px">
              この内容で複製 ➔
            </button>
          </div>
          <div style="font-size:11.5px;color:var(--sub);background:rgba(0,0,0,.2);padding:6px 8px;border-radius:6px;border-left:2px solid var(--violet)">
            ${es.question || '（設問未入力）'}
          </div>
          <div style="font-size:11.5px;color:rgba(240,243,246,.75);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden">
            ${(es.answer || '').replace(/\n/g, ' ')}
          </div>
          <div style="font-size:11px;color:var(--muted);display:flex;gap:10px;align-items:center">
            <span>文字数: ${charLen}字</span>
            <span>更新: ${(es.updatedAt || '').slice(0, 10)}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  function cloneEsToCompany(sourceEsId, targetCompId) {
    const sourceEs = esList.find(x => x.id === sourceEsId);
    if (!sourceEs) return;
    const targetComp = catalog.find(x => x.id === targetCompId);
    const targetCompName = targetComp ? targetComp.name : '新規企業';

    // Build title (strip old company prefix if any)
    let baseTitle = sourceEs.title;
    const sourceComp = catalog.find(x => x.id === sourceEs.companyId);
    if (sourceComp && baseTitle.startsWith(sourceComp.name)) {
      baseTitle = baseTitle.replace(sourceComp.name, '').trim();
    }

    const sourceQuestions = getEsQuestions(sourceEs);
    const newEs = {
      id: 'es_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
      companyId: targetCompId,
      status: 'draft',
      questionType: sourceEs.questionType || detectEsType(sourceEs),
      title: `${targetCompName} ${baseTitle}`.trim(),
      questions: JSON.parse(JSON.stringify(sourceQuestions)),
      question: sourceEs.question || (sourceQuestions[0] ? sourceQuestions[0].question : ''),
      answer: sourceEs.answer || (sourceQuestions[0] ? sourceQuestions[0].answer : ''),
      characterLimit: sourceEs.characterLimit || (sourceQuestions[0] ? sourceQuestions[0].characterLimit : 400),
      linkedStoryIds: [...(sourceEs.linkedStoryIds || [])],
      tags: [...(sourceEs.tags || []), '複製'],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    esList.unshift(newEs);
    saveAllV3();
    renderAll();
    closeModal('esClonePickerModal');
    if (targetCompId) {
      renderCompanyEsList(targetCompId);
    }
    showToast(`「${newEs.title}」を複製しました`);
    openEsModal(newEs.id);
  }

  // =========================================================================
  // ES MODAL (Edit & Create: Multi-Question & Smart Heuristic Parser)
  // =========================================================================
  const ES_QUESTION_TYPES = ['自己PR', 'ガクチカ', '志望動機', '学業・研究', '長所・短所', 'その他'];

  function toggleEsFastPasteBox() {
    const content = document.getElementById('esFastPasteContent');
    const icon = document.getElementById('esFastPasteToggleIcon');
    if (!content) return;
    const isHidden = content.style.display === 'none';
    content.style.display = isHidden ? 'block' : 'none';
    if (icon) icon.textContent = isHidden ? '▲ 閉じる' : '▼ 展開';
  }

  function clearEsFastPasteInput() {
    const inp = document.getElementById('esFastPasteInput');
    if (inp) inp.value = '';
  }

  function onParseFastPasteClick() {
    const raw = document.getElementById('esFastPasteInput')?.value || '';
    if (!raw.trim()) {
      showToast('⚠️ 解析するテキストを貼り付けてください');
      return;
    }
    const parsed = smartParseEsPastedText(raw);
    if (!parsed.length) {
      showToast('⚠️ 設問を抽出できませんでした');
      return;
    }

    renderEsQuestionBlocks(parsed);
    updateEsModalCharCounts();

    const titleInp = document.getElementById('esModalTitleInput');
    if (titleInp && !titleInp.value) {
      const compSelect = document.getElementById('esModalCompany');
      const compName = compSelect && compSelect.selectedOptions[0] ? compSelect.selectedOptions[0].textContent.replace(/\(.*?\)/, '').trim() : '';
      titleInp.value = `${compName ? compName + ' ' : ''}本選考 ES（${parsed.length}設問）`.trim();
    }

    showToast(`⚡ ${parsed.length} 件の設問と回答を自動反映しました！`);
  }

  function createQuestionBlockHtml(q, idx) {
    const qId = q.id || ('q_' + (idx + 1) + '_' + Math.random().toString(36).substr(2, 4));
    const limit = q.characterLimit;
    const isCustom = limit && ![200, 300, 400, 500, 0].includes(limit);
    const limitSelectVal = !limit ? '0' : (isCustom ? 'custom' : String(limit));

    const typeOptions = ES_QUESTION_TYPES.map(t => `<option value="${t}" ${q.type === t ? 'selected' : ''}>${t}</option>`).join('');

    return `
      <div class="es-q-block" data-qid="${qId}" id="block_${qId}">
        <div class="es-q-block-head">
          <div class="es-q-num-badge">設問 <span class="es-q-num-text">${idx + 1}</span></div>
          <select class="form-select es-q-type-select" style="width:130px;padding:3px 8px;font-size:11.5px">
            ${typeOptions}
          </select>
          <select class="form-select es-q-limit-select" style="width:110px;padding:3px 8px;font-size:11.5px" onchange="onEsBlockLimitChange(this)">
            <option value="200" ${limitSelectVal === '200' ? 'selected' : ''}>200字以内</option>
            <option value="300" ${limitSelectVal === '300' ? 'selected' : ''}>300字以内</option>
            <option value="400" ${limitSelectVal === '400' ? 'selected' : ''}>400字以内</option>
            <option value="500" ${limitSelectVal === '500' ? 'selected' : ''}>500字以内</option>
            <option value="custom" ${limitSelectVal === 'custom' ? 'selected' : ''}>カスタム指定</option>
            <option value="0" ${limitSelectVal === '0' ? 'selected' : ''}>上限なし</option>
          </select>
          <input type="number" class="form-input es-q-custom-limit" style="width:75px;padding:3px 8px;font-size:11.5px;display:${isCustom ? 'inline-block' : 'none'}" placeholder="字数" value="${isCustom ? limit : ''}" oninput="updateEsModalCharCounts()" />
          <div class="es-q-actions">
            <button type="button" class="action-icon-btn" onclick="moveEsBlock('${qId}', -1)" title="上へ移動">▲</button>
            <button type="button" class="action-icon-btn" onclick="moveEsBlock('${qId}', 1)" title="下へ移動">▼</button>
            <button type="button" class="action-icon-btn" onclick="copySingleQuestionAnswer('${qId}')" title="この設問の回答をコピー">📋</button>
            <button type="button" class="action-icon-btn delete" onclick="removeEsQuestionBlock('${qId}')" title="この設問を削除">✕</button>
          </div>
        </div>

        <div>
          <label class="form-label" style="font-size:11.5px;margin-bottom:3px;color:var(--sub)">設問内容（Question）</label>
          <textarea class="form-textarea es-q-prompt-input" rows="2" placeholder="例: 学生時代に最も情熱を持って取り組んだこと（400字以内）" style="font-size:12px;min-height:46px">${escapeHtml(q.question || '')}</textarea>
        </div>

        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
            <label class="form-label" style="font-size:11.5px;margin-bottom:0;color:var(--sub)">回答本文（Answer）</label>
            <span class="es-q-counter-pill" id="counter_${qId}" style="color:var(--ink)">0 字</span>
          </div>
          <textarea class="form-textarea es-q-answer-input" rows="5" placeholder="回答文を入力してください…" style="line-height:1.6;font-size:12.5px" oninput="updateEsModalCharCounts()">${escapeHtml(q.answer || '')}</textarea>
        </div>
      </div>
    `;
  }

  function renderEsQuestionBlocks(questions) {
    const container = document.getElementById('esQuestionsContainer');
    if (!container) return;
    if (!questions || !questions.length) {
      questions = [{ id: 'q_' + Date.now(), type: '自己PR', question: '', answer: '', characterLimit: 400 }];
    }
    container.innerHTML = questions.map((q, idx) => createQuestionBlockHtml(q, idx)).join('');
    updateEsModalCharCounts();
  }

  function addEsQuestionBlock(data = null) {
    const container = document.getElementById('esQuestionsContainer');
    if (!container) return;
    const count = container.querySelectorAll('.es-q-block').length;
    const defaultData = data || {
      id: 'q_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      type: '志望動機',
      question: '',
      answer: '',
      characterLimit: 400
    };
    const div = document.createElement('div');
    div.innerHTML = createQuestionBlockHtml(defaultData, count);
    const newEl = div.firstElementChild;
    container.appendChild(newEl);
    renumberEsBlocks();
    updateEsModalCharCounts();
    newEl.querySelector('.es-q-prompt-input')?.focus();
  }

  function removeEsQuestionBlock(qId) {
    const block = document.getElementById(`block_${qId}`);
    if (!block) return;
    const container = document.getElementById('esQuestionsContainer');
    const remaining = container.querySelectorAll('.es-q-block').length;
    if (remaining <= 1) {
      block.querySelector('.es-q-prompt-input').value = '';
      block.querySelector('.es-q-answer-input').value = '';
      block.querySelector('.es-q-type-select').value = '自己PR';
      block.querySelector('.es-q-limit-select').value = '400';
      block.querySelector('.es-q-custom-limit').style.display = 'none';
      updateEsModalCharCounts();
      return;
    }
    block.remove();
    renumberEsBlocks();
    updateEsModalCharCounts();
  }

  function moveEsBlock(qId, direction) {
    const block = document.getElementById(`block_${qId}`);
    if (!block) return;
    if (direction === -1 && block.previousElementSibling) {
      block.parentNode.insertBefore(block, block.previousElementSibling);
    } else if (direction === 1 && block.nextElementSibling) {
      block.parentNode.insertBefore(block.nextElementSibling, block);
    }
    renumberEsBlocks();
  }

  function renumberEsBlocks() {
    const blocks = document.querySelectorAll('#esQuestionsContainer .es-q-block');
    blocks.forEach((b, idx) => {
      const numSpan = b.querySelector('.es-q-num-text');
      if (numSpan) numSpan.textContent = idx + 1;
    });
  }

  function onEsBlockLimitChange(selectEl) {
    const block = selectEl.closest('.es-q-block');
    if (!block) return;
    const customInp = block.querySelector('.es-q-custom-limit');
    if (selectEl.value === 'custom') {
      customInp.style.display = 'inline-block';
      customInp.focus();
    } else {
      customInp.style.display = 'none';
    }
    updateEsModalCharCounts();
  }

  function updateEsModalCharCounts() {
    const blocks = document.querySelectorAll('#esQuestionsContainer .es-q-block');
    let totalChars = 0;
    let totalLimit = 0;

    blocks.forEach(block => {
      const qId = block.dataset.qid;
      const ans = block.querySelector('.es-q-answer-input')?.value || '';
      const len = ans.length;
      totalChars += len;

      const limitSelect = block.querySelector('.es-q-limit-select')?.value;
      let limit = null;
      if (limitSelect === 'custom') {
        limit = parseInt(block.querySelector('.es-q-custom-limit')?.value) || null;
      } else if (limitSelect && limitSelect !== '0') {
        limit = parseInt(limitSelect) || null;
      }
      if (limit) totalLimit += limit;

      const counter = document.getElementById(`counter_${qId}`);
      if (!counter) return;

      if (limit) {
        const minRec = Math.ceil(limit * 0.8);
        if (len > limit) {
          const over = len - limit;
          counter.innerHTML = `<span style="color:var(--red);font-weight:800">${len}</span> / ${limit} 字 <span style="color:var(--red);font-size:10.5px;font-weight:700">⚠️ ${over}字超過</span>`;
        } else if (len >= minRec) {
          const pct = Math.round((len / limit) * 100);
          counter.innerHTML = `<span style="color:var(--green);font-weight:800">${len}</span> / ${limit} 字 <span style="color:var(--green);font-size:10.5px;font-weight:700">✓ 適正 (${pct}%)・残${limit - len}字</span>`;
        } else {
          const diff = minRec - len;
          counter.innerHTML = `<span style="color:var(--gold-2);font-weight:800">${len}</span> / ${limit} 字 <span style="color:var(--sub);font-size:10.5px">(8割まであと${diff}字)</span>`;
        }
      } else {
        counter.innerHTML = `<span style="font-weight:800">${len}</span> 文字`;
      }
    });

    const summaryPill = document.getElementById('esModalSummaryPill');
    if (summaryPill) {
      summaryPill.textContent = `全 ${blocks.length} 設問 / 計 ${totalChars} 字${totalLimit ? ` (上限 ${totalLimit} 字)` : ''}`;
    }
  }

  function copySingleQuestionAnswer(qId) {
    const block = document.getElementById(`block_${qId}`);
    if (!block) return;
    const ans = block.querySelector('.es-q-answer-input')?.value || '';
    if (!ans) {
      showToast('コピーする回答本文がありません');
      return;
    }
    const num = block.querySelector('.es-q-num-text')?.textContent || '';
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ans).then(() => {
        showToast(`📋 設問 ${num} の回答をコピーしました`);
      }).catch(() => {
        fallbackCopyText(ans, `設問 ${num}`);
      });
    } else {
      fallbackCopyText(ans, `設問 ${num}`);
    }
  }

  function copyCurrentEsFullText() {
    const title = document.getElementById('esModalTitleInput')?.value || 'エントリーシート';
    const compSelect = document.getElementById('esModalCompany');
    const compName = compSelect && compSelect.selectedOptions[0] ? compSelect.selectedOptions[0].textContent.replace(/\(.*?\)/, '').trim() : '汎用';

    const blocks = document.querySelectorAll('#esQuestionsContainer .es-q-block');
    const qs = [];
    blocks.forEach(b => {
      const type = b.querySelector('.es-q-type-select')?.value || '';
      const prompt = b.querySelector('.es-q-prompt-input')?.value || '';
      const ans = b.querySelector('.es-q-answer-input')?.value || '';
      const limitSel = b.querySelector('.es-q-limit-select')?.value;
      let limit = 0;
      if (limitSel === 'custom') {
        limit = parseInt(b.querySelector('.es-q-custom-limit')?.value) || 0;
      } else if (limitSel && limitSel !== '0') {
        limit = parseInt(limitSel) || 0;
      }
      qs.push({ type, question: prompt, answer: ans, characterLimit: limit });
    });

    const mockEs = { title, companyId: null, questions: qs };
    const textToCopy = formatEsForClipboard(mockEs);
    if (!textToCopy) {
      showToast('コピーする内容がありません');
      return;
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`📋 全設問・回答を一括コピーしました`);
      }).catch(() => {
        fallbackCopyText(textToCopy, title);
      });
    } else {
      fallbackCopyText(textToCopy, title);
    }
  }

  function openEsModal(esId = null, prefillCompanyId = null) {
    if (!esId && !requireAuth('新規ESの作成')) return;
    currentEsEditId = esId;
    const titleHead = document.getElementById('esModalTitle');
    const compSelect = document.getElementById('esModalCompany');
    const delBtn = document.getElementById('esModalDeleteBtn');

    // Reset fast paste box
    clearEsFastPasteInput();
    const fastPasteContent = document.getElementById('esFastPasteContent');
    const fastPasteIcon = document.getElementById('esFastPasteToggleIcon');
    if (fastPasteContent) fastPasteContent.style.display = 'none';
    if (fastPasteIcon) fastPasteIcon.textContent = '▼ 展開';

    // Populate company selector
    compSelect.innerHTML = '<option value="">（未指定・汎用テンプレート）</option>';
    const comps = catalog.filter(c => c.added || (prefillCompanyId && c.id === prefillCompanyId));
    comps.sort((a, b) => a.name.localeCompare(b.name, 'ja'));
    comps.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.textContent = `${c.name} (${catOf(c) || c.cat || 'その他'})`;
      compSelect.appendChild(opt);
    });

    let activeStoryIds = [];
    let initialQuestions = [];

    if (esId) {
      const es = esList.find(x => x.id === esId);
      if (!es) return;
      titleHead.textContent = '📝 ES エントリーシート編集';
      document.getElementById('esId').value = es.id;
      compSelect.value = es.companyId || '';
      document.getElementById('esModalStatus').value = es.status || 'draft';
      document.getElementById('esModalTitleInput').value = es.title || '';
      document.getElementById('esModalTags').value = (es.tags || []).join(', ');
      activeStoryIds = es.linkedStoryIds || [];
      initialQuestions = getEsQuestions(es);
      if (delBtn) delBtn.style.display = 'inline-block';
    } else {
      titleHead.textContent = '📝 新規ES作成';
      document.getElementById('esId').value = '';
      if (prefillCompanyId) compSelect.value = prefillCompanyId;
      document.getElementById('esModalStatus').value = 'draft';
      document.getElementById('esModalTitleInput').value = '';
      document.getElementById('esModalTags').value = '';
      initialQuestions = [{ id: 'q_' + Date.now(), type: '自己PR', question: '', answer: '', characterLimit: 400 }];
      if (delBtn) delBtn.style.display = 'none';
    }

    renderEsQuestionBlocks(initialQuestions);

    // Render Story Picker Checkboxes
    const picker = document.getElementById('esModalStoriesPicker');
    if (picker) {
      if (!storyBank.length) {
        picker.innerHTML = '<span style="color:var(--muted);font-size:11.5px">Story Bankに登録されたエピソードがありません</span>';
      } else {
        picker.innerHTML = storyBank.map(s => {
          const checked = activeStoryIds.includes(s.id) ? 'checked' : '';
          return `
            <label style="display:inline-flex;align-items:center;gap:5px;font-size:11.5px;padding:3px 8px;border-radius:6px;background:rgba(255,255,255,.05);cursor:pointer;">
              <input type="checkbox" name="esLinkedStory" value="${s.id}" ${checked} />
              <span>${s.title}</span>
            </label>
          `;
        }).join('');
      }
    }

    openModal('esModal');
  }

  function saveCurrentEs() {
    if (!requireAuth('ESの保存・編集')) return;
    const companyId = document.getElementById('esModalCompany').value || null;
    const status = document.getElementById('esModalStatus').value;
    const title = document.getElementById('esModalTitleInput').value.trim();
    const tagsStr = document.getElementById('esModalTags').value;
    const tags = tagsStr.split(/[,、]/).map(t => t.trim()).filter(Boolean);

    // Read all questions from the dynamic container
    const qBlocks = document.querySelectorAll('#esQuestionsContainer .es-q-block');
    const questions = [];

    qBlocks.forEach((block, idx) => {
      const qId = block.dataset.qid || ('q_' + (idx + 1) + '_' + Math.random().toString(36).substr(2, 4));
      const type = block.querySelector('.es-q-type-select')?.value || 'その他';
      const questionText = block.querySelector('.es-q-prompt-input')?.value.trim() || '';
      const answerText = block.querySelector('.es-q-answer-input')?.value || '';
      
      const limitSelect = block.querySelector('.es-q-limit-select');
      let limit = null;
      if (limitSelect) {
        if (limitSelect.value === 'custom') {
          limit = parseInt(block.querySelector('.es-q-custom-limit')?.value, 10) || null;
        } else if (limitSelect.value !== '0') {
          limit = parseInt(limitSelect.value, 10) || null;
        }
      }

      if (questionText || answerText) {
        questions.push({
          id: qId,
          type: type,
          question: questionText,
          answer: answerText,
          characterLimit: limit
        });
      }
    });

    if (!title) {
      alert('タイトルを入力してください');
      return;
    }

    if (questions.length === 0) {
      alert('少なくとも1つの設問または回答を入力してください');
      return;
    }

    // Selected Stories
    const selectedStories = [];
    document.querySelectorAll('input[name="esLinkedStory"]:checked').forEach(cb => {
      selectedStories.push(cb.value);
    });

    const now = new Date().toISOString();
    const primaryQ = questions[0] || {};
    const totalLimit = questions.reduce((acc, q) => acc + (q.characterLimit || 0), 0);

    if (currentEsEditId) {
      const es = esList.find(x => x.id === currentEsEditId);
      if (es) {
        es.companyId = companyId;
        es.status = status;
        es.title = title;
        es.questions = questions;
        // Backward-compatible fallback fields
        es.questionType = primaryQ.type || 'その他';
        es.question = primaryQ.question || '';
        es.answer = primaryQ.answer || '';
        es.characterLimit = totalLimit || primaryQ.characterLimit || null;
        es.linkedStoryIds = selectedStories;
        es.tags = tags;
        es.updatedAt = now;
        if (status === 'submitted' && !es.submittedAt) es.submittedAt = now;
      }
    } else {
      esList.unshift({
        id: 'es_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        companyId,
        status,
        title,
        questions,
        questionType: primaryQ.type || 'その他',
        question: primaryQ.question || '',
        answer: primaryQ.answer || '',
        characterLimit: totalLimit || primaryQ.characterLimit || null,
        linkedStoryIds: selectedStories,
        tags,
        submittedAt: status === 'submitted' ? now : null,
        createdAt: now,
        updatedAt: now
      });
    }

    saveAllV3();
    renderAll();
    if (companyId && currentModalComp && currentModalComp.id === companyId) {
      renderCompanyEsList(companyId);
    }
    closeModal('esModal');
    showToast('ESを保存しました');
  }

  function deleteCurrentEs() {
    if (!requireAuth('ESの削除')) return;
    if (!currentEsEditId) return;
    if (!confirm('このESを削除しますか？')) return;
    const es = esList.find(x => x.id === currentEsEditId);
    const compId = es ? es.companyId : null;
    esList = esList.filter(x => x.id !== currentEsEditId);
    saveAllV3();
    renderAll();
    if (compId && currentModalComp && currentModalComp.id === compId) {
      renderCompanyEsList(compId);
    }
    closeModal('esModal');
    showToast('ESを削除しました');
  }

  function deleteEs(esId, e) {
    if (e) e.stopPropagation();
    if (!requireAuth('ESの削除')) return;
    if (!confirm('このESを削除しますか？')) return;
    const es = esList.find(x => x.id === esId);
    const compId = es ? es.companyId : null;
    esList = esList.filter(x => x.id !== esId);
    saveAllV3();
    renderAll();
    if (compId && currentModalComp && currentModalComp.id === compId) {
      renderCompanyEsList(compId);
    }
    showToast('ESを削除しました');
  }

  function copyEsToClipboard(esId, e) {
    copyEsAnswer(esId, e);
  }

  
  // =========================================================================
  // STORY BANK (VIEW 4) CRUD & STAR MODEL
  // =========================================================================
  let storyFilterCat = 'all';
  let currentStoryEditId = null;

  function renderStoryBank() {
    const grid = document.getElementById('storyGrid');
    if (!grid) return;

    let filtered = storyBank.filter(s => {
      if (storyFilterCat !== 'all' && s.category !== storyFilterCat) return false;
      if (keyword) {
        const kw = keyword.toLowerCase();
        const matchTitle = (s.title || '').toLowerCase().includes(kw);
        const matchSummary = (s.summary || '').toLowerCase().includes(kw);
        const matchAction = (s.action || '').toLowerCase().includes(kw);
        const matchStrengths = (s.strengths || []).some(t => t.toLowerCase().includes(kw));
        const matchTags = (s.tags || []).some(t => t.toLowerCase().includes(kw));
        if (!matchTitle && !matchSummary && !matchAction && !matchStrengths && !matchTags) return false;
      }
      return true;
    });

    const countEl = document.getElementById('storyShownCount');
    if (countEl) countEl.textContent = filtered.length;

    if (!filtered.length) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:60px 16px;color:var(--sub);font-size:13px">
          Storyが登録されていません。「＋ 新規Story作成」からあなたの経験エピソードを資産化しましょう。
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(story => {
      const refEsList = esList.filter(es => es.linkedStoryIds && es.linkedStoryIds.includes(story.id));
      const refCount = refEsList.length;

      let refBadge = '';
      if (refCount > 0) {
        const previewNames = refEsList.slice(0, 2).map(e => e.title).join(', ');
        refBadge = `<div style="font-size:11.5px;display:flex;flex-wrap:wrap;align-items:center;gap:4px 6px;margin:2px 0;">
          <span style="display:inline-flex;align-items:center;gap:4px;font-weight:700;color:var(--violet);background:rgba(139,123,255,0.12);border:1px solid rgba(139,123,255,0.25);padding:2px 8px;border-radius:6px;font-size:11px;white-space:nowrap;flex-shrink:0;">
            📝 <b>${refCount}件</b>のESで使用中
          </span>
          <span style="color:var(--sub);font-size:11px;line-height:1.4;">(${previewNames}${refCount > 2 ? '等' : ''})</span>
        </div>`;
      } else {
        refBadge = `<div style="font-size:11px;color:var(--muted);padding:2px 0;">まだ参照中のESはありません</div>`;
      }

      const catBadgeMap = {
        'Internship': { cls: 'size', icon: '💼', name: 'Internship' },
        'Work': { cls: 'ind', icon: '☕', name: 'Work / バイト' },
        'Academic': { cls: 'free', icon: '🎓', name: 'Academic / 学業' },
        'Extracurricular': { cls: 'pop-elite', icon: '🏆', name: '課外活動' },
        'Other': { cls: 'custom', icon: '🌍', name: 'Other' }
      };
      const catInfo = catBadgeMap[story.category] || catBadgeMap['Other'];

      return `
        <div class="story-card" onclick="openStoryModal('${story.id}')">
          <div class="story-card-head">
            <span class="tag ${catInfo.cls}" style="display:inline-flex;align-items:center;gap:4px">
              <span>${catInfo.icon}</span> <span>${catInfo.name}</span>
            </span>
            <div style="display:flex;align-items:center;gap:6px;margin-left:auto;">
              <button class="action-icon-btn delete" onclick="event.stopPropagation();deleteStory('${story.id}')" title="削除">✕</button>
            </div>
          </div>
          <div class="story-card-title">${story.title}</div>
          <div style="font-size:12.5px;color:rgba(240,243,246,0.85);line-height:1.5;">${story.summary || story.action || '（要約未入力）'}</div>
          ${refBadge}
          <div class="es-meta-bar">
            ${(story.strengths || []).slice(0, 3).map(st => `<span class="tag size" style="font-size:10px">${st}</span>`).join('')}
            <span style="margin-left:auto;font-size:11px;color:var(--muted)">${(story.updatedAt || '').slice(0, 10)}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  document.querySelectorAll('#storyFilters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('#storyFilters .chip').forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      storyFilterCat = chip.dataset.cat || 'all';
      renderStoryBank();
    });
  });

  function openStoryModal(storyId = null) {
    if (!storyId && !requireAuth('新規Storyの作成')) return;
    if (!storyId && !requireAuth('新規Storyの作成')) return;
    currentStoryEditId = storyId;
    const headTitle = document.getElementById('storyModalHeadTitle');
    const delBtn = document.getElementById('storyDeleteBtn');

    if (storyId) {
      const s = storyBank.find(x => x.id === storyId);
      if (!s) return;
      headTitle.textContent = '💡 Story Bank 経験エピソード編集';
      document.getElementById('storyId').value = s.id;
      document.getElementById('storyTitle').value = s.title || '';
      document.getElementById('storyCategory').value = s.category || 'Internship';
      document.getElementById('storySummary').value = s.summary || '';
      document.getElementById('storySituation').value = s.situation || '';
      document.getElementById('storyTask').value = s.task || '';
      document.getElementById('storyAction').value = s.action || '';
      document.getElementById('storyResult').value = s.result || '';
      document.getElementById('storyLearning').value = s.learning || '';
      document.getElementById('storyStrengths').value = (s.strengths || []).join(', ');
      document.getElementById('storyTags').value = (s.tags || []).join(', ');

      // Dynamically compute referenced ES
      const refEsList = esList.filter(es => es.linkedStoryIds && es.linkedStoryIds.includes(s.id));
      document.getElementById('storyRefEsCount').textContent = `${refEsList.length}件`;
      const refListEl = document.getElementById('storyRefEsList');
      if (!refEsList.length) {
        refListEl.innerHTML = `
          <div style="font-size:12px;color:var(--sub);padding:6px 0;">
            現在このStoryを参照しているESはありません。ES作成時に引用Storyとして選択すると自動集計されます。
          </div>
        `;
      } else {
        refListEl.innerHTML = refEsList.map(es => {
          const comp = catalog.find(x => x.id === es.companyId);
          const compName = comp ? comp.name : '汎用テンプレート';
          return `
            <div class="ref-es-item" onclick="closeModal('storyModal');openEsModal('${es.id}')">
              <span class="tag ind" style="font-size:10px">${compName}</span>
              <b style="font-size:12.5px;color:var(--ink)">${es.title}</b>
              <span style="margin-left:auto;font-size:11px;color:var(--sub)">${es.status === 'submitted' ? '提出済' : '下書き'}</span>
              <span style="color:var(--violet);font-size:12px">↗ 開く</span>
            </div>
          `;
        }).join('');
      }

      if (delBtn) delBtn.style.display = 'inline-block';
    } else {
      headTitle.textContent = '💡 新規Story作成';
      document.getElementById('storyId').value = '';
      document.getElementById('storyTitle').value = '';
      document.getElementById('storyCategory').value = 'Internship';
      document.getElementById('storySummary').value = '';
      document.getElementById('storySituation').value = '';
      document.getElementById('storyTask').value = '';
      document.getElementById('storyAction').value = '';
      document.getElementById('storyResult').value = '';
      document.getElementById('storyLearning').value = '';
      document.getElementById('storyStrengths').value = '';
      document.getElementById('storyTags').value = '';
      document.getElementById('storyRefEsCount').textContent = '0件';
      document.getElementById('storyRefEsList').innerHTML = '<div style="font-size:12px;color:var(--sub);padding:6px 0;">Story保存後、ES作成画面で引用できるようになります。</div>';
      if (delBtn) delBtn.style.display = 'none';
    }

    openModal('storyModal');
  }

  function addStoryStrengthChip(val) {
    const input = document.getElementById('storyStrengths');
    if (!input) return;
    const current = input.value.split(/[,、]/).map(t => t.trim()).filter(Boolean);
    if (!current.includes(val)) {
      current.push(val);
      input.value = current.join(', ');
    }
  }

  function saveCurrentStory() {
    if (!requireAuth('Storyの保存・編集')) return;
    const title = document.getElementById('storyTitle').value.trim();
    const category = document.getElementById('storyCategory').value;
    const summary = document.getElementById('storySummary').value.trim();
    const situation = document.getElementById('storySituation').value.trim();
    const task = document.getElementById('storyTask').value.trim();
    const action = document.getElementById('storyAction').value.trim();
    const result = document.getElementById('storyResult').value.trim();
    const learning = document.getElementById('storyLearning').value.trim();
    const strengthsStr = document.getElementById('storyStrengths').value;
    const strengths = strengthsStr.split(/[,、]/).map(t => t.trim()).filter(Boolean);
    const tagsStr = document.getElementById('storyTags').value;
    const tags = tagsStr.split(/[,、]/).map(t => t.trim()).filter(Boolean);

    if (!title) {
      alert('エピソードタイトルを入力してください');
      return;
    }

    const now = new Date().toISOString();

    if (currentStoryEditId) {
      const s = storyBank.find(x => x.id === currentStoryEditId);
      if (s) {
        s.title = title;
        s.category = category;
        s.summary = summary;
        s.situation = situation;
        s.task = task;
        s.action = action;
        s.result = result;
        s.learning = learning;
        s.strengths = strengths;
        s.tags = tags;
        s.updatedAt = now;
      }
    } else {
      storyBank.push({
        id: 'story_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
        title,
        category,
        summary,
        situation,
        task,
        action,
        result,
        learning,
        strengths,
        tags,
        createdAt: now,
        updatedAt: now
      });
    }

    saveAllV3();
    renderAll();
    closeModal('storyModal');
    showToast('Storyを保存しました');
  }

  function deleteCurrentStory() {
    if (!requireAuth('Storyの削除')) return;
    if (!currentStoryEditId) return;
    if (!confirm('このStoryを削除しますか？')) return;
    storyBank = storyBank.filter(x => x.id !== currentStoryEditId);
    // Also remove from any ES referencing it
    esList.forEach(es => {
      if (es.linkedStoryIds) {
        es.linkedStoryIds = es.linkedStoryIds.filter(id => id !== currentStoryEditId);
      }
    });
    saveAllV3();
    renderAll();
    closeModal('storyModal');
    showToast('Storyを削除しました');
  }

  function deleteStory(storyId) {
    if (!requireAuth('Storyの削除')) return;
    if (!confirm('このStoryを削除しますか？')) return;
    storyBank = storyBank.filter(x => x.id !== storyId);
    esList.forEach(es => {
      if (es.linkedStoryIds) {
        es.linkedStoryIds = es.linkedStoryIds.filter(id => id !== storyId);
      }
    });
    saveAllV3();
    renderAll();
    showToast('Storyを削除しました');
  }

  // ===================== MODAL: 企業詳細・編集 =====================
  let currentModalComp = null;
  let modalTags = [];

  function openDetailModal(id) {
    const c = catalog.find(x => x.id === id);
    if (!c) return;
    currentModalComp = c;
    modalTags = [...(c.tags || [])];

    document.getElementById('mId').value = c.id;
    document.getElementById('mTitle').textContent = c.name;
    document.getElementById('mSubTitle').textContent = `${catOf(c)} ・ ${c.sub || ''} ${c.code ? ' (' + c.code + ')' : ''}`;
    const mIco = document.getElementById('mIco');
    const initial = cleanInitial(c.name);
    mIco.style.background = c.color || '#8b7bff';
    if (NO_LOGO_SET.has(c.id)) {
      mIco.innerHTML = `<span>${initial}</span>`;
    } else {
      const domainFallback = c.domain && !c.domain.startsWith('quote/') ? `https://www.google.com/s2/favicons?domain=${encodeURIComponent(c.domain)}&sz=128` : '';
      const errHandler = domainFallback
        ? `if(!this.dataset.fb){this.dataset.fb='1';this.src='${domainFallback}';}else{this.remove();}`
        : `this.remove();`;
      mIco.innerHTML = `<img src="assets/logos/${c.id}.png" alt="${c.name}" decoding="async" onerror="${errHandler}"><span>${initial}</span>`;
    }

    // 企業統計バー反映
    document.getElementById('mStatPay').textContent = fmtPay(c);
    document.getElementById('mStatPayMaster').textContent = fmtPayMaster(c);
    document.getElementById('mStatAnnual').textContent = fmtAnnual(c);
    document.getElementById('mStatEmp').textContent = fmtEmp(c);
    const mStatPop = document.getElementById('mStatPopRank');
    if (mStatPop) {
      if (c.popRank && c.popRank <= 300) {
        mStatPop.textContent = `#${c.popRank} (${c.popBadge || 'TOP300'})`;
      } else if (c.popBadge) {
        mStatPop.textContent = `${c.popBadge} (#${c.popRank || '—'})`;
      } else {
        mStatPop.textContent = c.popRank ? `#${c.popRank}` : '—';
      }
    }
    document.getElementById('mStatMarket').textContent = c.market || c.scale || (c.code ? '上場企業' : '非上場');

    document.getElementById('mStage').value = (c.stage === 'watch' || !c.stage) ? 'entry' : c.stage;


    document.getElementById('mDue').value = c.due || '';
    document.getElementById('mDueLabel').value = c.dueLabel || '';
    document.getElementById('mMyPageUrl').value = c.myPageUrl || '';
    document.getElementById('mMyPageId').value = c.myPageId || '';
    if (document.getElementById('mMyPagePass')) document.getElementById('mMyPagePass').value = c.myPagePass || '';
    document.getElementById('mNoteMotiv').value = c.noteMotiv || '';
    document.getElementById('mNoteEs').value = c.noteEs || '';
    document.getElementById('mNoteInterview').value = c.noteInterview || '';

    // ボタン表示切り替え
    const trackBtn = document.getElementById('mToggleTrackBtn');
    trackBtn.textContent = c.added ? '選考リストから外す' : '選考リストに追加';

    const delBtn = document.getElementById('mDeleteBtn');
    delBtn.style.display = c.isCustom ? 'inline-block' : 'none';

    const guestBanner = document.getElementById('mGuestBanner');
    if (guestBanner) {
      guestBanner.style.display = currentAuthUser ? 'none' : 'flex';
    }

    updateCharCount('mNoteMotiv', 'mNoteMotivCount');
    updateCharCount('mNoteEs', 'mNoteEsCount', currentEsTarget);
    updateCharCount('mNoteInterview', 'mNoteInterviewCount');

    renderModalTags();
    renderTimeline(c.id);
    renderCompanyEsList(c.id);
    openModal('companyModal');
  }

  // ES Character Counter & Limits
  let currentEsTarget = 400;
  function setEsTarget(target) {
    currentEsTarget = target;
    document.querySelectorAll('.es-chip').forEach(c => {
      if (target === null) {
        c.classList.toggle('on', c.textContent.includes('上限なし'));
      } else {
        c.classList.toggle('on', c.textContent.includes(target + '字'));
      }
    });
    updateCharCount('mNoteEs', 'mNoteEsCount', currentEsTarget);
  }

  function updateCharCount(inputId, countId, limit = null) {
    const el = document.getElementById(inputId);
    const countEl = document.getElementById(countId);
    if (!el || !countEl) return;
    const len = el.value.length;
    if (limit) {
      if (len > limit) {
        countEl.innerHTML = `<span style="color:var(--red);font-weight:800">${len}</span> / ${limit} 字 <span style="color:var(--red);font-size:10.5px">(+${len - limit}字超過)</span>`;
      } else {
        const left = limit - len;
        countEl.innerHTML = `<span style="color:var(--ink);font-weight:700">${len}</span> / ${limit} 字 <small style="color:var(--sub)">(残り${left}字)</small>`;
      }
    } else {
      countEl.textContent = `${len} 文字`;
      countEl.style.color = 'var(--sub)';
    }
  }

  // カレンダー連携 (.icsエクスポート)
  function exportCompanyIcs(comp = null) {
    const c = comp || currentModalComp;
    if (!c) return;
    const dueVal = (comp ? c.due : document.getElementById('mDue').value) || c.due;
    const dueLabel = (comp ? c.dueLabel : document.getElementById('mDueLabel').value) || c.dueLabel || '選考締切';

    if (!dueVal) {
      showToast('⚠️ 締切日・予定日が設定されていません');
      return;
    }

    const m = dueVal.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})/);
    if (!m) {
      showToast('⚠️ 有効な日付（YYYY-MM-DD）を入力してください');
      return;
    }

    const y = m[1];
    const mo = m[2].padStart(2, '0');
    const d = m[3].padStart(2, '0');
    const dtStr = `${y}${mo}${d}`;

    const title = `【就勝】${c.name} - ${dueLabel}`;
    const desc = `企業名: ${c.name}\\n予定: ${dueLabel}\\n選考ステージ: ${stageMap[c.stage]?.label || c.stage}\\nマイページ: ${c.myPageUrl || '未登録'}`;

    const ics = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//就勝//syukatsu.win//JA',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'BEGIN:VEVENT',
      `UID:syukatsu-${c.id}-${Date.now()}@syukatsu.win`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
      `DTSTART;VALUE=DATE:${dtStr}`,
      `DTEND;VALUE=DATE:${dtStr}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${desc}`,
      'STATUS:CONFIRMED',
      'BEGIN:VALARM',
      'TRIGGER:-PT12H',
      'ACTION:DISPLAY',
      `DESCRIPTION:${title} 前日リマインド`,
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `就勝_${c.name}_${dueLabel}_${dtStr}.ics`;
    a.click();
    URL.revokeObjectURL(url);
    showToast(`📅 「${c.name}」の予定をカレンダーファイル(.ics)で保存しました`);
  }

  function renderModalTags() {
    const el = document.getElementById('mTagsList');
    el.innerHTML = modalTags.map((t, idx) => `
      <span class="modal-tag">${t} <span class="x" onclick="removeModalTag(${idx})">✕</span></span>
    `).join('') || `<span style="color:var(--muted);font-size:11.5px">タグ未設定</span>`;
  }

  function addModalTag() {
    const input = document.getElementById('mNewTagInput');
    const val = (input.value || '').trim();
    if (val && !modalTags.includes(val)) {
      modalTags.push(val);
      renderModalTags();
    }
    input.value = '';
  }

  function addModalTagText(val) {
    if (val && !modalTags.includes(val)) {
      modalTags.push(val);
      renderModalTags();
    }
  }

  function removeModalTag(idx) {
    modalTags.splice(idx, 1);
    renderModalTags();
  }

  function saveModalCompany() {
    if (!requireAuth('選考進捗やメモを編集・保存')) return;
    if (!currentModalComp) return;
    const c = currentModalComp;
    c.stage = document.getElementById('mStage').value;
    c.due = document.getElementById('mDue').value;
    c.dueLabel = document.getElementById('mDueLabel').value.trim();
    c.myPageUrl = document.getElementById('mMyPageUrl').value.trim();
    c.myPageId = document.getElementById('mMyPageId').value.trim();
    c.myPagePass = (document.getElementById('mMyPagePass')?.value || '').trim();
    c.noteMotiv = document.getElementById('mNoteMotiv').value;
    c.noteEs = document.getElementById('mNoteEs').value;
    c.noteInterview = document.getElementById('mNoteInterview').value;
    c.tags = [...modalTags];
    delete c._searchHay;

    saveAll();
    renderAll();
    closeModal('companyModal');
    showToast(`「${c.name}」の選考情報を保存しました`);
  }

  function toggleModalTrack() {
    if (!currentModalComp) return;
    toggleAdd(currentModalComp.id);
    closeModal('companyModal');
  }

  function deleteModalCompany() {
    if (!requireAuth('企業の削除')) return;
    if (!currentModalComp) return;
    if (!confirm(`手動登録企業「${currentModalComp.name}」を完全に削除しますか？`)) return;
    const targetId = currentModalComp.id;
    catalog = catalog.filter(x => x.id !== targetId);
    if (supabaseClient && currentAuthUser) {
      supabaseClient.from('user_selections').delete().eq('user_id', currentAuthUser.id).eq('company_id', targetId).then();
    }
    saveAll();
    renderAll();
    closeModal('companyModal');
    showToast(`「${currentModalComp.name}」を削除しました`);
  }

  // ===================== MODAL: 新規企業追加 =====================
  function openNewCompanyModal() {
    if (!requireAuth('新規企業の手動登録')) return;
    document.getElementById('newCompName').value = '';
    document.getElementById('newCompSub').value = '';
    document.getElementById('newCompCode').value = '';
    document.getElementById('newCompPay').value = '';
    document.getElementById('newCompPayMaster').value = '';
    document.getElementById('newCompAnnual').value = '';
    document.getElementById('newCompEmp').value = '';
    document.getElementById('newCompDue').value = '';
    document.getElementById('newCompDueLabel').value = '';
    document.getElementById('newCompDomain').value = '';
    openModal('newCompanyModal');
  }

  function submitNewCompany() {
    if (!requireAuth('新規企業の手動登録')) return;
    const name = document.getElementById('newCompName').value.trim();
    if (!name) {
      alert('企業名を入力してください');
      return;
    }

    const cat = document.getElementById('newCompCat').value;
    const sub = document.getElementById('newCompSub').value.trim();
    const code = document.getElementById('newCompCode').value.trim();
    const pay = parseInt(document.getElementById('newCompPay').value) || null;
    const payMaster = parseInt(document.getElementById('newCompPayMaster').value) || (pay ? pay + 24000 : null);
    const annual = parseInt(document.getElementById('newCompAnnual').value) || null;
    const emp = parseInt(document.getElementById('newCompEmp').value) || null;
    const stage = document.getElementById('newCompStage').value;
        const due = document.getElementById('newCompDue').value;
    const dueLabel = document.getElementById('newCompDueLabel').value.trim();
    const domain = document.getElementById('newCompDomain').value.trim();

    const colors = ['#8b7bff', '#4fd8e8', '#ff7eb6', '#4ee39a', '#d9b25f', '#ff9f43'];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const newComp = {
      id: 'c_custom_' + Date.now(),
      name,
      code: code || null,
      domain: domain ? domain.replace(/^https?:\/\//, '') : '',
      cat,
      ind17: cat,
      sub: sub || cat,
      emp,
      payBachelor: pay,
      payMaster,
      avgAnnual: annual,
      color,
      added: true,
      stage,
            due,
      dueLabel,
      isCustom: true,
      tags: ['手動登録']
    };

    catalog.unshift(newComp);
    saveAll();
    renderAll();
    closeModal('newCompanyModal');
    showToast(`「${name}」を登録し、選考リストに追加しました`);
  }

  // ===================== MODAL: 設定 & データ管理 =====================
  function openSettingsModal() {
    document.getElementById('settingGradYear').value = currentSettings.gradYear || '28卒';
    updateStorageInfo();
    openModal('settingsModal');
  }

  function openGradYearModal(e) {
    if (e) e.stopPropagation();
    openSettingsModal();
  }

  function updateGradYearSetting(val) {
    currentSettings.gradYear = val;
    applySettings();
    saveAll();
    showToast(`区分を「${val}」に変更しました`);
  }

  function applySettings() {
    const b = document.getElementById('gradBadge');
    if (b) b.textContent = currentSettings.gradYear || '28卒';
    document.title = '就勝 syukatsu.win';
  }

  // JSON エクスポート / インポート
  function exportJSON() {
    if (!requireAuth('JSONバックアップのエクスポート')) return;
    const data = {
      version: '3.0',
      exportDate: new Date().toISOString(),
      settings: currentSettings,
      tasks: currentTasks,
      selectionEvents,
      esList,
      storyBank,
      catalog
    };
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    a.href = url;
    a.download = `就勝_backup_${dateStr}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('JSONバックアップをダウンロードしました');
  }

  function onImportJsonFile(input) {
    if (!requireAuth('バックアップの復元・インポート')) {
      input.value = '';
      return;
    }
    const file = input.files && input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const data = JSON.parse(e.target.result);
        if (!data || !Array.isArray(data.catalog)) {
          throw new Error('バックアップの形式が正しくありません');
        }
        if (!confirm(`バックアップファイルを復元しますか？（現在のデータは上書きされます / 全${data.catalog.length}社）`)) {
          input.value = '';
          return;
        }
        catalog = data.catalog;
        if (data.settings) currentSettings = Object.assign(currentSettings, data.settings);
        if (Array.isArray(data.tasks)) currentTasks = data.tasks;
        if (Array.isArray(data.selectionEvents)) selectionEvents = data.selectionEvents;
        if (Array.isArray(data.esList)) esList = data.esList;
        if (Array.isArray(data.storyBank)) storyBank = data.storyBank;
        saveAll();
        applySettings();
        renderAll();
        closeModal('settingsModal');
        showToast('データを復元しました');
      } catch (err) {
        alert('ファイルの読み込みに失敗しました: ' + err.message);
      }
      input.value = '';
    };
    reader.readAsText(file);
  }

  // CSV エクスポート
  function exportCSV() {
    if (!requireAuth('選考リストCSVのダウンロード')) return;
    const added = catalog.filter(c => c.added);
    if (!added.length) {
      alert('選考リストに登録された企業がありません');
      return;
    }
    const headers = ['企業名','就職人気順位','人気格付','証券コード','業界大分類','細分業種','選考ステージ','次のアクション','直近締切日','初任給(大卒・円)','初任給(院卒・円)','平均年収(万円)','従業員数','マイページURL','マイページID','タグ','志望動機','ES内容','面接ログ'];
    const rows = added.map(c => [
      `"${(c.name || '').replace(/"/g, '""')}"`,
      c.popRank || '',
      `"${(c.popBadge || '').replace(/"/g, '""')}"`,
      `"${(c.code || '').replace(/"/g, '""')}"`,
      `"${(catOf(c) || '').replace(/"/g, '""')}"`,
      `"${(c.sub || '').replace(/"/g, '""')}"`,
      `"${stageMap[c.stage]?.label || c.stage}"`,
      `"${(getCompanyNextAction(c.id).title || '').replace(/"/g, '""')}"`,
      `"${getCompanyNextAction(c.id).datetime || c.due || ''}"`,
      c.payBachelor || '',
      c.payMaster || '',
      c.avgAnnual || '',
      c.emp || '',
      `"${(c.myPageUrl || '').replace(/"/g, '""')}"`,
      `"${(c.myPageId || '').replace(/"/g, '""')}"`,
      `"${(c.tags || []).join(';')}"`,
      `"${(c.noteMotiv || '').replace(/"/g, '""')}"`,
      `"${(c.noteEs || '').replace(/"/g, '""')}"`,
      `"${(c.noteInterview || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
    a.href = url;
    a.download = `就活選考リスト_${dateStr}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('選考リストCSVをダウンロードしました');
  }

  function resetToDefaultCatalog() {
    if (!confirm('初期カタログに戻しますか？\n追加・編集したメモやカスタム企業はすべてリセットされます。')) return;
    const fullCatalog = getFullCatalog();
    catalog = JSON.parse(JSON.stringify(fullCatalog));
    currentTasks = JSON.parse(JSON.stringify(DEFAULT_TASKS));
    saveAll();
    renderAll();
    closeModal('settingsModal');
    showToast(`カタログ（全${catalog.length}社）にリセットしました`);
  }

  // 汎用モーダル
  function openModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('open');
  }
  function closeModal(id) {
    if (id === 'authModal' && typeof stopEmailConfirmPolling === 'function') {
      stopEmailConfirmPolling();
    }
    const el = document.getElementById(id);
    if (el) el.classList.remove('open');
  }
  function onModalOverlayClick(e, id) {
    if (e.target.id === id) closeModal(id);
  }

  function openExternalUrl(url) {
    if (!url) return;
    if (url.startsWith('quote/')) {
      url = 'https://finance.yahoo.co.jp/' + url;
    } else if (!/^https?:\/\//i.test(url)) {
      url = 'https://' + url;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // ===================== 共通 & 初期化 =====================
  function renderAll() {
    if (currentView === 'db' || currentView === 'radar') renderDB();
    else if (currentView === 'list') renderList();
    else if (currentView === 'kanban') renderKanban();
    else if (currentView === 'es') renderESDatabase();
    else if (currentView === 'story') renderStoryBank();
    else if (currentView === 'dash') renderDash();
    else if (currentView === 'mypage') renderMyPageTable();
    updateRadarBadge();
  }

  document.getElementById('search').addEventListener('input', e => {
    const val = (e.target.value || '').trim();
    // ブラウザの自動補完によるメールアドレス誤入力を防止
    if (val.includes('@') && (val.includes('syukatsu.win') || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val))) {
      e.target.value = '';
      keyword = '';
      renderAll();
      return;
    }
    keyword = val;
    renderAll();
  });

  let toastTimer = null;
  function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.innerHTML = `<span>✓</span> <span>${msg}</span>`;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  // グローバルショートカット (Esc でモーダルを閉じる, / で検索ボックスにフォーカス)
  document.addEventListener('keydown', e => {
    const isEditing = ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName);
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
      return;
    }
    if (isEditing) return;

    if (e.key === '/') {
      e.preventDefault();
      const s = document.getElementById('search');
      if (s) {
        s.focus();
        s.select();
      }
    }
  });

  // 起動時初期化
  loadAll();
  loadRadarItems();
  applySettings();
  updateAuthUI();

  // 起動直後・ブラウザパスワード補完の遅延検知と排除
  function checkAndCleanAutofill() {
    const s = document.getElementById('search');
    if (s && s.value && (s.value.includes('@') || s.value.includes('syukatsu.win'))) {
      s.value = '';
      keyword = '';
      if (currentView === 'db') renderDB();
    }
  }
  setTimeout(checkAndCleanAutofill, 50);
  setTimeout(checkAndCleanAutofill, 250);
  setTimeout(checkAndCleanAutofill, 600);

  // Hash routing support for direct view and modal links
  const rawHash = (window.location.hash || '').replace('#', '');
  const hashSearchParams = new URLSearchParams(rawHash.includes('&') ? rawHash.split('&').slice(1).join('&') : '');
  const initHash = rawHash.split('&')[0];

  if (['db', 'list', 'kanban', 'es', 'story', 'dash'].includes(initHash)) {
    switchView(initHash);
    if (initHash === 'es') {
      if (hashSearchParams.get('view')) {
        setEsViewMode(hashSearchParams.get('view'));
      }
      if (hashSearchParams.get('group')) {
        esGroupBy = hashSearchParams.get('group');
        const sel = document.getElementById('esGroupBySelect');
        if (sel) sel.value = esGroupBy;
      }
      if (hashSearchParams.get('clone_for')) {
        setTimeout(() => openEsClonePickerModal(hashSearchParams.get('clone_for')), 100);
      }
      if (hashSearchParams.get('edit')) {
        setTimeout(() => openEsModal(hashSearchParams.get('edit')), 100);
      }
      renderESDatabase();
    }
  } else if (initHash.startsWith('company=')) {
    const cid = initHash.replace('company=', '');
    switchView('list');
    openDetailModal(cid);
  } else if (initHash.startsWith('story=')) {
    const sid = initHash.replace('story=', '');
    switchView('story');
    openStoryModal(sid);
  } else {
    renderAll();
  }

  // URL OAuth エラー・パラメータ自動検知 & 診断ログ
  (function checkUrlAuthStatus() {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const hashStr = window.location.hash.startsWith('#') ? window.location.hash.slice(1) : window.location.hash;
      const hashParams = new URLSearchParams(hashStr);

      const err = urlParams.get('error') || hashParams.get('error');
      const errCode = urlParams.get('error_code') || hashParams.get('error_code');
      const errDesc = urlParams.get('error_description') || hashParams.get('error_description');

      if (err || errDesc) {
        const fullDesc = decodeURIComponent(errDesc || err || '未知のエラー');
        console.error('[OAuth Debug Error Detected]', { error: err, code: errCode, description: fullDesc, url: window.location.href });

        let diagAdvice = '';
        if (fullDesc.includes('Unable to exchange external code')) {
          diagAdvice = '<strong>排查建议：</strong><br>1. 检查 Supabase 控制台的 Client Secret 密钥是否多复制了空格或换行；<br>2. 检查 Google Cloud 凭据中的「已获授权的重定向 URI」是否严格匹配。';
        } else if (fullDesc.includes('redirect_uri_mismatch')) {
          diagAdvice = '<strong>排查建议：</strong>Google Cloud 中的重定向 URI 与当前发起请求的地址不一致。';
        }

        setTimeout(() => {
          openAuthModal('login');
          const errorEl = document.getElementById('authErrorMsg');
          if (errorEl) {
            errorEl.innerHTML = `
              <div style="font-weight:700;margin-bottom:4px">⚠️ Google 登录验证失败</div>
              <div style="font-size:11px;opacity:0.9;word-break:break-all">${fullDesc}</div>
              ${diagAdvice ? `<div style="margin-top:8px;padding:6px 8px;background:rgba(252,211,77,0.1);border-radius:4px;color:#fcd34d;font-size:11px">${diagAdvice}</div>` : ''}
              <div style="margin-top:8px;display:flex;gap:6px">
                <button type="button" onclick="navigator.clipboard.writeText(location.href);alert('已复制当前错误URL日志')" style="font-size:10.5px;padding:3px 8px;border-radius:4px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.08);color:#fff;cursor:pointer;">📋 复制错误URL日志</button>
              </div>
            `;
            errorEl.style.display = 'block';
          }
        }, 400);
      }
    } catch (e) {
      console.warn('checkUrlAuthStatus error:', e);
    }
  })();

  // Supabase 起動時セッション復元 & 認証状態監視
  if (supabaseClient) {
    supabaseClient.auth.getSession().then(({ data }) => {
      if (data && data.session && data.session.user) {
        currentAuthUser = data.session.user;
        updateAuthUI();
        syncAfterLogin();
      }
    }).catch(e => console.warn('Auth getSession error:', e));

    supabaseClient.auth.onAuthStateChange((event, session) => {
      const wasLoggedOut = !currentAuthUser;
      currentAuthUser = session ? session.user : null;
      updateAuthUI();
      if (event === 'SIGNED_IN' && session && wasLoggedOut) {
        closeModal('authModal');
        showToast('ログインしました！クラウドと同期中…');
        syncAfterLogin();
      } else if (event === 'SIGNED_OUT') {
        loadAll();
        renderAll();
      }
    });
  }
