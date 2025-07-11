import { mockOccupationGradePairs } from "@/mock_data/mockOthers";

// 疑似API: お知らせ一覧取得
export async function fetchNotifications() {
  // 実際は fetch('/api/notifications') などに置き換え
  return [
    {
      id: 1,
      message: "2025年度上期の評価期間は6/1〜6/30です。",
      type: "info", // info, warning, alert など
      targetRole: "eval", // eval, admin, non_eval, all
      createdAt: "2025-05-25T10:00:00Z"
    },
    {
      id: 2,
      message: "アンケートの回答締切は6/15です。",
      type: "warning",
      targetRole: ["eval", "non_eval"], // 複数ロール指定可能
      createdAt: "2025-05-20T10:00:00Z"
    },
    {
      id: 3,
      message: "システムメンテナンスのお知らせ",
      type: "alert",
      targetRole: "all", // 全ユーザー対象
      createdAt: "2025-05-18T10:00:00Z"
    }
  ];
}

// 疑似API: 評価期間取得
export async function fetchEvaluationPeriod() {
  // 実際は fetch('/api/evaluation-period') などに置き換え
  return {
    start: "2025-06-01",
    end: "2025-06-30",
    description: "2025年度上期の評価期間"
  };
}

// 職種・等級の組み合わせ取得API
export async function fetchOccupationGradePairs() {
  // 実際は fetch('/api/occupation-grade-pairs') などに置き換え
  return mockOccupationGradePairs;
}