// 選択必修科目データ
// 学年・学期に応じた選択必修科目を管理
// grade: 対象学年, semester: 対象学期("1":前期, "2":後期), periods/period: 時限, day: 曜日
// グループに periods/day を書くと全科目共通、科目側に書くとその科目だけの時限・曜日になる

const ELECTIVE_REQUIRED_GROUPS = {
  // 1年前期：共通基盤ワークショップ１Ａ(月曜1-2コマ)
  workshop_1a: {
    name: "共通基盤ワークショップ１Ａ(月曜1-2コマ)",
    description: "1つ選択してください",
    grade: [1],
    semester: ["1"],
    maxSelect: 1,
    periods: [1, 2],
    day: "mon",
    courses: [
      { code: "B30A01A1", name: "共通基盤ワークショップ１Ａ　～「豊かさ」とは何だろう？～", type: "required" },
      { code: "B30A01B1", name: "共通基盤ワークショップ１Ａ　～ＳＤＧｓから世界の問題を見つめてみよう～", type: "required" },
      { code: "B30A01C1", name: "共通基盤ワークショップ１Ａ　～スポーツを創造しよう～", type: "required" },
      { code: "B30A01D1", name: "共通基盤ワークショップ１Ａ　～マインドスポーツ（テーブルゲーム）の考案～", type: "required" },
      { code: "B30A01E1", name: "共通基盤ワークショップ１Ａ　～中小企業について考えてみよう～", type: "required" },
      { code: "B30A01F1", name: "共通基盤ワークショップ１Ａ　～対人関係とコミュニケーション～", type: "required" },
      { code: "B30A01G1", name: "共通基盤ワークショップ１Ａ　～音楽文化の歴史と未来～", type: "required" },
      { code: "B30A01H1", name: "共通基盤ワークショップ１Ａ　～自分らしくを楽しめるセルフプロデュース～", type: "required" },
      { code: "B30A01J1", name: "共通基盤ワークショップ１Ａ　～考える力（思考力・決断力）を科学する～", type: "required" },
      { code: "B30A01K1", name: "共通基盤ワークショップ１Ａ　～社会問題を解決に導く工学とは～", type: "required" },
      { code: "B30A01L1", name: "共通基盤ワークショップ１Ａ　～科学技術について考えてみよう～", type: "required" },
      { code: "B30A01M1", name: "共通基盤ワークショップ１Ａ　～ＡＩを使い倒してみる～", type: "required" },
      { code: "B30A01N1", name: "共通基盤ワークショップ１Ａ　～未来の湘南工科大学をみんなで創ろう～", type: "required" },
      { code: "B30A01P1", name: "共通基盤ワークショップ１Ａ　～シミュレーションで身近な社会課題を解決～", type: "required" },
      { code: "B30A01Q1", name: "共通基盤ワークショップ１Ａ　～湘南地域とデザイン～", type: "required" },
      { code: "B30A01R1", name: "共通基盤ワークショップ１Ａ　～プラスチックについて学ぶ～", type: "required" }
    ]
  },

  // 1年後期：共通基盤ワークショップ１Ｂ(月曜1-2コマ)
  workshop_1b: {
    name: "共通基盤ワークショップ１Ｂ(月曜1-2コマ)",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    periods: [1, 2],
    day: "mon",
    courses: [
      { code: "B30A02A1", name: "共通基盤ワークショップ１Ｂ　～「豊かさ」とは何だろう？～", type: "required" },
      { code: "B30A02B1", name: "共通基盤ワークショップ１Ｂ　～ＳＤＧｓから世界の問題を見つめてみよう～", type: "required" },
      { code: "B30A02C1", name: "共通基盤ワークショップ１Ｂ　～スポーツを創造しよう～", type: "required" },
      { code: "B30A02D1", name: "共通基盤ワークショップ１Ｂ　～マインドスポーツ（テーブルゲーム）の考案～", type: "required" },
      { code: "B30A02E1", name: "共通基盤ワークショップ１Ｂ　～中小企業について考えてみよう～", type: "required" },
      { code: "B30A02F1", name: "共通基盤ワークショップ１Ｂ　～対人関係とコミュニケーション～", type: "required" },
      { code: "B30A02G1", name: "共通基盤ワークショップ１Ｂ　～音楽文化の歴史と未来～", type: "required" },
      { code: "B30A02H1", name: "共通基盤ワークショップ１Ｂ　～自分らしくを楽しめるセルフプロデュース～", type: "required" },
      { code: "B30A02J1", name: "共通基盤ワークショップ１Ｂ　～考える力（思考力・決断力）を科学する～", type: "required" },
      { code: "B30A02K1", name: "共通基盤ワークショップ１Ｂ　～社会問題を解決に導く工学とは～", type: "required" },
      { code: "B30A02L1", name: "共通基盤ワークショップ１Ｂ　～科学技術について考えてみよう～", type: "required" },
      { code: "B30A02M1", name: "共通基盤ワークショップ１Ｂ　～ＡＩを使い倒してみる～", type: "required" },
      { code: "B30A02N1", name: "共通基盤ワークショップ１Ｂ　～未来の湘南工科大学をみんなで創ろう～", type: "required" },
      { code: "B30A02P1", name: "共通基盤ワークショップ１Ｂ　～シミュレーションで身近な社会課題を解決～", type: "required" },
      { code: "B30A02Q1", name: "共通基盤ワークショップ１Ｂ　～湘南地域とデザイン～", type: "required" },
      { code: "B30A02R1", name: "共通基盤ワークショップ１Ｂ　～プラスチックについて学ぶ～", type: "required" }
    ]
  },

  // 1年後期：学科選択必修
  elective_1b: {
    name: "学科選択必修",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    courses: [
      { code: "B31N03K1", name: "線形代数(メ)(火曜4コマ)", period: 4, day: "tue", type: "elective-required" },
      { code: "B31Q04K1", name: "ゲーム制作実習(月曜3-4コマ)", periods: [3, 4], day: "mon", type: "elective-required" },
      { code: "B31N04K1", name: "微分積分学(メ)(金曜1コマ)", period: 1, day: "fri", type: "elective-required" },
      { code: "B31Q03K1", name: "コンピュータグラフィックス活用実習(水曜1-2コマ)", periods: [1, 2], day: "wed", type: "elective-required" },
      { code: "B31N02K1", name: "確率統計リテラシー2(メ)(火曜3コマ)", period: 3, day: "tue", type: "elective-required" }
    ]
  },

  // 1年後期：IT演習基礎1(メ)(火曜)
  IT_Enshu_kiso: {
    name: "IT演習基礎1(メ)(火曜)",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    day: "tue",
    courses: [
      { code: "B31R01K1", name: "IT演習基礎1(メ)(4限)", period: 4, type: "required" },
      { code: "B31R01K1", name: "IT演習基礎1(メ)(5限)", period: 5, type: "required" }
    ]
  },

  // 1年前期：英語総合基礎
  group_9: {
    name: "英語総合基礎",
    description: "1つ選択してください",
    grade: [1],
    semester: ["1"],
    maxSelect: 1,
    period: 4,
    day: "thu",
    courses: [
      { code: "B30G01D1", name: "英語総合基礎(木4-1)", type: "elective-required" },
      { code: "B30G01F1", name: "英語総合基礎(木4-2)", type: "elective-required" },
      { code: "B30G01G1", name: "英語総合基礎(木4-3)", type: "elective-required" },
      { code: "B30G01H1", name: "英語総合基礎(木4-4)", type: "elective-required" }
    ]
  },

  // 1年後期：英語総合発展
  group_10: {
    name: "英語総合発展",
    description: "1つ選択してください",
    grade: [1],
    semester: ["2"],
    maxSelect: 1,
    day: "thu",
    courses: [
      { code: "B30G02E1", name: "英語総合発展(木4-1)", period: 4, type: "elective-required" },
      { code: "B30G02F1", name: "英語総合発展(木4-2)", period: 4, type: "elective-required" },
      { code: "B30G02G1", name: "英語総合発展(木4-3)", period: 4, type: "elective-required" },
      { code: "B30G02H1", name: "英語総合発展(木4-4)", period: 4, type: "elective-required" },
      { code: "B30G02A1", name: "英語総合発展(木3-1)", period: 3, type: "elective-required" },
      { code: "B30G02B1", name: "英語総合発展(木3-2)", period: 3, type: "elective-required" },
      { code: "B30G02C1", name: "英語総合発展(木3-3)", period: 3, type: "elective-required" },
      { code: "B30G02D1", name: "英語総合発展(木3-4)", period: 3, type: "elective-required" }
    ]
  },

  // 2年前期：共通基盤ワークショップ２Ａ(月曜1-2コマ)
  workshop_2a: {
    name: "共通基盤ワークショップ２Ａ(月曜1-2コマ)",
    description: "1つ選択してください",
    grade: [2],
    semester: ["1"],
    maxSelect: 1,
    periods: [3, 4],
    day: "mon",
    courses: [
      { code: "B30B01A2", name: "共通基盤ワークショップ２Ａ　～アイデア活用演習プロジェクト～", type: "required" },
      { code: "B30B01B2", name: "共通基盤ワークショップ２Ａ　～デザイン思考＠基礎プロジェクト～", type: "required" },
      { code: "B30B01C2", name: "共通基盤ワークショップ２Ａ　～アイデアの作り方プロジェクト～", type: "required" },
      { code: "B30B01D2", name: "共通基盤ワークショップ２Ａ　～機械創造設計製作プロジェクト～", type: "required" },
      { code: "B30B01E2", name: "共通基盤ワークショップ２Ａ　～キャリアデザインプロジェクト～", type: "required" },
      { code: "B30B01F2", name: "共通基盤ワークショップ２Ａ　～アイデア発想プロジェクト～", type: "required" },
      { code: "B30B01G2", name: "共通基盤ワークショップ２Ａ　～IoTファブレスへの挑戦プロジェクト(a)～", type: "required" },
      { code: "B30B01H2", name: "共通基盤ワークショップ２Ａ　～社会人基礎力プロジェクト(a)～", type: "required" },
      { code: "B30B01J2", name: "共通基盤ワークショップ２Ａ　～プリント回路基盤開発プロジェクト～", type: "required" },
      { code: "B30B01K2", name: "共通基盤ワークショップ２Ａ　～生成AIを活用した課題解決プロジェクト～", type: "required" },
      { code: "B30B01L2", name: "共通基盤ワークショップ２Ａ　～新しい数学授業を提案するプロジェクト～", type: "required" },
      { code: "B30B01M2", name: "共通基盤ワークショップ２Ａ　～Webサイト制作プロジェクト～", type: "required" },
      { code: "B30B01N2", name: "共通基盤ワークショップ２Ａ　～IoTファブレスへの挑戦プロジェクト(b)～", type: "required" },
      { code: "B30B01P2", name: "共通基盤ワークショップ２Ａ　～サイエンス教室資料作成プロジェクト～", type: "required" },
      { code: "B30B01Q2", name: "共通基盤ワークショップ２Ａ　～３Ｄゲーム制作プロジェクト～", type: "required" },
      { code: "B30B01R2", name: "共通基盤ワークショップ２Ａ　～プレゼンデザインプロジェクト～", type: "required" },
      { code: "B30B01S2", name: "共通基盤ワークショップ２Ａ　～地域デザインプロジェクト～", type: "required" },
      { code: "B30B01T2", name: "共通基盤ワークショップ２Ａ　～人生目標設定プロジェクト～", type: "required" },
      { code: "B30B01U2", name: "共通基盤ワークショップ２Ａ　～スポーツデータサイエンスプロジェクト～", type: "required" },
      { code: "B30B01V2", name: "共通基盤ワークショップ２Ａ　～ことばの分析プロジェクト～", type: "required" }
    ]
  },

  // 2年後期：専攻選択必修科目
  group_6: {
    name: "専攻選択必修科目",
    description: "3つ選択してください",
    grade: [2],
    semester: ["2"],
    maxSelect: 3,
    courses: [
      { code: "B31M04K2", name: "情報学課題解決実習2B(1-2コマ)", periods: [1, 2], day: "thu", type: "elective-required" },
      { code: "B31M04K2", name: "情報学課題解決実習2B(3-4コマ)", periods: [3, 4], day: "thu", type: "elective-required" },
      { code: "B31P05K2", name: "データベース(メ)", period: 1, day: "fri", type: "elective-required" },
      { code: "B31P07K2", name: "オペレーティングシステム実習(鈴木)", periods: [3, 4], day: "tue", type: "elective-required" },
      { code: "B31P07L2", name: "オペレーティングシステム実習(浅野)", periods: [3, 4], day: "tue", type: "elective-required" },
      { code: "B31Q16K2", name: "Webクライアントプログラミング(メ)", period: 5, day: "mon", type: "elective-required" }
    ]
  },

  // 2年後期：社会人基礎2年次選択必修科目(公共系)
  group_7: {
    name: "社会人基礎2年次選択必修科目(公共系)",
    description: "1つ選択してください",
    grade: [2],
    semester: ["2"],
    maxSelect: 1,
    courses: [
      { code: "B30F06K2", name: "くらしと法(水1コマ)", period: 1, day: "wed", type: "elective-required" },
      { code: "B30F06L2", name: "くらしと法(水2コマ)", period: 2, day: "wed", type: "elective-required" },
      { code: "B30F06M2", name: "くらしと法(木2コマ)", period: 2, day: "thu", type: "elective-required" },
      { code: "B30F07K2", name: "政治行動(水1コマ)", period: 1, day: "wed", type: "elective-required" },
      { code: "B30F07L2", name: "政治行動(水2コマ)", period: 2, day: "wed", type: "elective-required" },
      { code: "B30F07M2", name: "政治行動(木1コマ)", period: 1, day: "thu", type: "elective-required" },
      { code: "B30F07N2", name: "政治行動(木1コマ)", period: 2, day: "thu", type: "elective-required" },
      { code: "B30F08K2", name: "日本国憲法(木1コマ)", period: 1, day: "thu", type: "elective-required" }
    ]
  },

  // 2年後期：スポーツで健康を科学する(必修)
  group_8: {
    name: "スポーツで健康を科学する(必修)",
    description: "1つ選択してください",
    grade: [2],
    semester: ["2"],
    maxSelect: 1,
    courses: [
      { code: "B30H02A2", name: "スポーツで健康を科学する(榊)水1-1", period: 1, day: "wed", type: "required" },
      { code: "B30H02B2", name: "スポーツで健康を科学する(松原)水1-2", period: 1, day: "wed", type: "required" },
      { code: "B30H02C2", name: "スポーツで健康を科学する(中務)水1-3", period: 1, day: "wed", type: "required" },
      { code: "B30H02D2", name: "スポーツで健康を科学する(榊)水2-1", period: 2, day: "wed", type: "required" },
      { code: "B30H02E2", name: "スポーツで健康を科学する(松原)水2-2", period: 2, day: "wed", type: "required" },
      { code: "B30H02F2", name: "スポーツで健康を科学する(中務)水2-3", period: 2, day: "wed", type: "required" },
      { code: "B30H02G2", name: "スポーツで健康を科学する(榊)木1-1", period: 1, day: "thu", type: "required" },
      { code: "B30H02H2", name: "スポーツで健康を科学する(是石)木1-2", period: 1, day: "thu", type: "required" },
      { code: "B30H02J2", name: "スポーツで健康を科学する(松原)木1-3", period: 1, day: "thu", type: "required" },
      { code: "B30H02K2", name: "スポーツで健康を科学する(榊)木2-1", period: 2, day: "thu", type: "required" },
      { code: "B30H02L2", name: "スポーツで健康を科学する(東條)木2-2", period: 2, day: "thu", type: "required" },
      { code: "B30H02M2", name: "スポーツで健康を科学する(松原)木2-3", period: 2, day: "thu", type: "required" }
    ]
  }
};
