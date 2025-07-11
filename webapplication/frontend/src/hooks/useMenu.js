import { menuConfig } from '@/config/menuConfig';

// ロールに応じたメニューを返すカスタムフック
// user: { isAdmin: boolean, grade: string, loginType?: string }
export function useMenu(user) {
  if (!user) return [];

  // 管理者ログイン画面からログインした場合のみadminメニュー
  // loginType: "admin" をadmin_loginでセットする想定
  if (user.isAdmin && user.loginType === "admin") {
    return menuConfig.admin;
  }

  console.log("useMenu user:", user.loginType);

  // 一般ログイン画面の場合はisAdminでもgradeで判定
  const evalGrades = ['G06', 'G05', 'G04', 'X01'];
  if (evalGrades.includes(user.grade)) {
    return menuConfig.eval.filter(item => {
      if (item.grade === "all" || item.grade === undefined) return true;
      if (Array.isArray(item.grade)) {
        return item.grade.includes(user.grade);
      }
      return false;
    });
  }

  // 非考課者（上記以外の等級）
  return menuConfig.non_eval;
}