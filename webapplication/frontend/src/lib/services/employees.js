import api from '@/lib/api';

// モックユーザーデータ
const mockUsers = [
  {
    // 一般考課者
    employeeId: '12345',
    employeeCode: 'E12345',
    lastName: '山田',
    firstName: '太郎',
    isAdmin: false,
    grade: 'G05',
    occupation: '介護職',
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
];

// 自分の情報を取得（モックとAPI切り替え）
export async function fetchMe(token) {
  // モック利用時
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // トークンがなくてもモックを返す
    return mockUsers[1]; // 例: 管理者
  }
  // 本番API
  if (!token) return null;
  return api('/api/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` }
  });
}

// パスワードリセット申請
export async function requestPasswordReset(employeeCode, facility) {
  return api('/api/auth/forgot', {
    method: 'POST',
    body: { employeeCode, facility }
  });
}