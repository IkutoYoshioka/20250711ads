import api from '@/lib/api';
import { mockUsers } from '@/mock_data/mockUsers';


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

// 全従業員一覧を取得
export async function fetchEmployees(params = {}) {
  // モック利用時
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // モック時はフロントでフィルタ
    return mockUsers.filter(user =>
      Object.entries(params).every(([key, value]) =>
        value ? String(user[key] ?? '').includes(value) : true
      )
    );
  }
  // クエリパラメータを付与（施設や職種でフィルタ）
  const query = new URLSearchParams(params).toString();
  const url = query ? `/api/employees?${query}` : '/api/employees';
  return api(url, { method: 'GET' });
}

// 従業員1人を取得
export async function fetchEmployeeById(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return mockUsers.find(user => user.employeeId === employeeId);
  }
  return api(`/api/employees/${employeeId}`, { method: 'GET' });
}

// 従業員情報を更新
export async function updateEmployee(employeeId, data) {
  // モック利用時
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    return mockUsers.find(user => user.employeeId === employeeId);
  }
  // 本番API
  return api(`/api/employees/${employeeId}`, {
    method: 'PUT',
    body: data
  });
}


// パスワードリセット申請
export async function requestPasswordReset(employeeCode, facility) {
  return api('/api/auth/forgot', {
    method: 'POST',
    body: { employeeCode, facility }
  });
}