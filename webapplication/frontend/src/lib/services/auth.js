import api from '@/lib/api';

// 認証関連

// ログイン処理（cookieで認証情報を管理）
export async function login(employeeId, password) {
  const res = await api('/api/auth/login', {
    method: 'POST',
    body: { employeeId, password }
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
  await api('/api/auth/logout', {
    method: 'POST',
  });
}