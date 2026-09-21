// 必修科目カリキュラム定義
// 学年・学期ごとの必修科目データ

const CURRICULUM = {
  '1_1': [
    { code: 'B31L03A1', name: 'プログラミング基礎(メ)', period: 3, day: 'mon', type: 'required' },
    { code: 'B31L02A1', name: 'データサイエンス入門1(メ)', period: 1, day: 'tue', type: 'required' },
    { code: 'B31L01A1', name: 'コンピューターシステム入門1(メ)', period: 2, day: 'tue', type: 'required' },
    { code: 'B31L04A1', name: 'プログラミングのための基礎数学', period: 3, day: 'tue', type: 'required' },
    { code: 'B31N01A1', name: '確率統計リテラシー1(メ)', period: 4, day: 'tue', type: 'required' },
    { code: 'B30D01A1', name: '修学基礎', period: 1, day: 'wed', type: 'required' },
    { code: 'B31M01A1', name: '情報学実習A', periods: [3, 4], day: 'fri', type: 'required' }
  ],
  '1_2': [
    { code: 'B31L07K1', name: 'プログラミング実習', periods: [1, 2], day: 'tue', type: 'required' },
    { code: 'B31L05K1', name: 'データサイエンス入門2(メ)', period: 3, day: 'thu', type: 'required' },
    { code: 'B31L06K1', name: 'データサイエンスのためのプログラミング基礎(メ)', period: 4, day: 'thu', type: 'required' },
    { code: 'B31M02A1', name: '情報学実習B', periods: [3, 4], day: 'fri', type: 'required' }
  ],
  '2_1': [
    { code: 'DS201', name: 'データサイエンス基礎', period: 1, day: 'mon', type: 'required' },
    { code: 'CHEM201', name: '応用化学', period: 1, day: 'wed', type: 'elective' },
    { code: 'CS210', name: 'プログラミング演習', period: 2, day: 'tue', type: 'required' },
    { code: 'CS220', name: 'データベース', period: 2, day: 'thu', type: 'elective-required' },
    { code: 'STAT201', name: '統計学I', period: 3, day: 'mon', type: 'required' },
    { code: 'ENG201', name: '機械工学基礎', period: 3, day: 'fri', type: 'elective' },
    { code: 'BUS101', name: '経営学入門', period: 4, day: 'wed', type: 'other' }
  ],
  '2_2': [
    { code: 'B31L09K2', name: '情報倫理(メ)', period: 1, day: 'mon', type: 'required' },
    { code: 'B30B02A2', name: '共通基盤ワークショップ2B', periods: [3, 4], day: 'mon', type: 'required' }
  ],
  '3_1': [
    { code: 'ML301', name: '深層学習', period: 1, day: 'mon', type: 'required' },
    { code: 'CHE301', name: 'プロセス工学', period: 1, day: 'wed', type: 'elective' },
    { code: 'CS310', name: 'クラウドコンピューティング', period: 2, day: 'tue', type: 'elective-required' },
    { code: 'SEC301', name: 'セキュリティ概論', period: 2, day: 'thu', type: 'elective' },
    { code: 'DS301', name: 'データ可視化', period: 3, day: 'mon', type: 'other' },
    { code: 'ENG301', name: '設計製図演習', period: 3, day: 'fri', type: 'other' },
    { code: 'MKT301', name: 'マーケティング戦略', period: 4, day: 'wed', type: 'other' }
  ],
  '3_2': [
    { code: 'ML302', name: '自然言語処理', period: 1, day: 'mon', type: 'required' },
    { code: 'BIO301', name: 'バイオテクノロジー', period: 1, day: 'wed', type: 'elective' },
    { code: 'IOT301', name: 'IoT実践', period: 2, day: 'tue', type: 'elective-required' },
    { code: 'CS320', name: 'システム設計', period: 2, day: 'thu', type: 'elective' },
    { code: 'DS302', name: 'ビッグデータ分析', period: 3, day: 'mon', type: 'other' },
    { code: 'PM301', name: 'プロジェクト管理', period: 3, day: 'fri', type: 'other' },
    { code: 'SEM301', name: 'ゼミナール', period: 4, day: 'thu', type: 'required' }
  ],
  '4_1': [
    { code: 'THESIS401', name: '卒業研究A', period: 1, day: 'mon', type: 'required' }
  ],
  '4_2': [
    { code: 'B31M08Z4', name: '卒業研究B', period: 1, day: 'mon', type: 'required' }
  ]
};
