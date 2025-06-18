import api from "@/lib/api";
import { mockCriteria } from "@/mock_data/mockCriteria";

// 人事考課の質問関連

// 質問一覧取得
export async function fetchEvaluationCriteria() {
  // モック利用時
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    // 必要に応じてモックデータをここに記述
    return mockCriteria;
  }
  return api("/evaluationCriteria", { method: "GET" });
}

// 質問1件更新
export async function updateEvaluationCriterion(criterion) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    // モック時は何もしない
    return criterion;
  }
  return api(`/evaluationCriteria/${criterion.id}`, {
    method: "PUT",
    body: criterion,
  });
}