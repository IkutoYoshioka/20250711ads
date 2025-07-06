export const mockUsers = [
    {
    // 一般考課者
    employeeId: '1001',
    employeeCode: 'E12345',
    lastName: '山田',
    firstName: '太郎',
    isAdmin: false,
    grade: 'G05', // 例: G06, G05, G04, X01など 
    occupation: '介護職', // 例: 介護職, 看護職, 事務職など
    facility: 'あおば保育園',
    email: 'sample.main@hospital.com',
    phone: '03-1234-5678',
    licensesObtained: '看護師免許, CPR資格',
    licensesFuture: [                  // 今後取得予定の資格（配列）
    {
      name: "ケアマネージャー",     // 資格名
      date: "2025-12-31",           // 予定日（文字列）
      reason: "キャリアアップのため" // 理由
    },
    {
      name: "看護師",
      date: "2026-03-01",
      reason: "業務拡張のため"
    }],
    workHistory: [
      {
        facility: 'あおば保育園',
        occupation: '保育士',
        grade: 'G05',
        period: '2020-04-01 - 2022-03-31',
        description: '子どもたちの保育業務全般を担当'
      },
      {
        facility: 'あおば福祉センター',
        occupation: '介護職',
        grade: 'G04',
        period: '2022-04-01 - 現在',
        description: '高齢者の介護業務を担当'
      }
    ]
},
    {
    // 
    employeeId: '1002',
    employeeCode: 'E67890',
    lastName: '佐藤',
    firstName: '花子',
    isAdmin: false,
    grade: 'G06', 
    occupation: '施設長',
    facility: '分園',
    email: 'sample.main@hospital.com',
    phone: '03-1234-5678',
    licensesObtained: '看護師免許, CPR資格',
    licensesFuture: [                  // 今後取得予定の資格（配列）
    {
      name: "ケアマネージャー",     // 資格名
      date: "2025-12-31",           // 予定日（文字列）
      reason: "キャリアアップのため" // 理由
    },
    {
      name: "看護師",
      date: "2026-03-01",
      reason: "業務拡張のため"
    }
  ],

},
    {
    // 管理者
    employeeId: '54321',
    employeeCode: 'E54321',
    lastName: '鈴木',
    firstName: '次郎',
    isAdmin: true,
    grade: 'X01', 
    occupation: '役員',
    facility: '本部',
},
    {
    // 非考課者
    employeeId: '98765',
    employeeCode: 'E98765',
    lastName: '田中',
    firstName: '三郎',
    isAdmin: false,
    grade: 'G03', 
    occupation: '事務職',
    facility: 'あおば福祉センター',
},
]