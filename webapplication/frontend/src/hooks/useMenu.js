import { menuConfig } from '@/config/menuConfig';

// ロールに応じたメニューを返すカスタムフック
// user: { isAdmin: boolean, grade: string }
export function useMenu(user) {
  if (!user) return [];

  // 管理者（admin_loginからログインしisAdmin: trueのユーザーのみ）
  if (user.isAdmin) {
    return menuConfig.admin;
  }

  // 考課者（gradeがG06, G05, G04, X01のいずれか）
  const evalGrades = ['G06', 'G05', 'G04', 'X01'];
  if (evalGrades.includes(user.grade)) {
    // evalメニュー内のgrade条件を反映
    return menuConfig.eval.filter(item => {
      // grade: "all" または grade未指定 → 全員表示
      if (item.grade === "all" || item.grade === undefined) return true;
      // grade: 配列 → 指定されたgradeのみ表示
      if (Array.isArray(item.grade)) {
        return item.grade.includes(user.grade);
      }
      return false;
    });
  }

  // 非考課者（上記以外の等級）
  return menuConfig.non_eval;
}