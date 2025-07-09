import api from '@/lib/api';
import { mockUsers } from '@/mock_data/mockUsers';

// 認証関連

// ログイン処理（cookieで認証情報を管理）
export async function login(employeeCode, password) {
  // モック利用時
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // モックデータからユーザーを検索
    const user = mockUsers.find(user => user.employeeCode === employeeCode && user.password === password);
    if (!user) throw new Error('無効な社員IDまたはパスワードです');
    return user;
  }

  const res = await api('/api/auth/login', {
    method: 'POST',
    body: { employeeCode, password }
  });
  if (!res.user) throw new Error('ユーザー情報が取得できませんでした');
  return res.user;
}


// 施設一覧取得API
export async function fetchFacilities() {
  // 例外的に設置されているAPIエンドポイント
  return [
    { value: 'aoba-center', label: '青葉福祉センター' },
    { value: 'aoba-home', label: '青葉介護' },
    { value: 'midori-garden', label: '青葉学生寮' },
    { value: 'kibou-hall', label: 'あおば保育園' },
  ];
   // api('/api/auth/facilities', {
    //method: 'GET'
  //}
//);

}

// ログアウトAPI
export async function logout() {
  if (process.env.NEXT_PUBLIC_USE_MOCK === 'true') {
    // モック時はトークン(cookie)も消してからログイン画面に遷移
    if (typeof window !== "undefined") {
      document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.location.href = "/login";
    }
    return true;
  }
  await api('/api/auth/logout', {
    method: 'POST',
  });
}