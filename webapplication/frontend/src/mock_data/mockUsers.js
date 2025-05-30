export const mockUsers = [
    {
    // 一般考課者
    employeeId: '12345',
    employeeCode: 'E12345',
    lastName: '山田',
    firstName: '太郎',
    isAdmin: false,
    grade: 'G05', // 例: G06, G05, G04, X01など 
    occupation: '介護職', // 例: 介護職, 看護職, 事務職など
    facility: 'あおば保育園',
},
    {
    // 管理者（役員）
    employeeId: '67890',
    employeeCode: 'E67890',
    lastName: '佐藤',
    firstName: '花子',
    isAdmin: true,
    grade: 'X01', 
    occupation: '役員',
    facility: 'あおば病院',
},
    {
    // 施設長
    employeeId: '54321',
    employeeCode: 'E54321',
    lastName: '鈴木',
    firstName: '次郎',
    isAdmin: false,
    grade: 'G06', 
    occupation: '施設長',
    facility: 'あおばクリニック',
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