// アンケート関連
import { mockSelfChecks } from "@/mock_data/mockSurveys";
import api from "@/lib/api";

// セルフチェック取得
export async function fetchSelfChecks(employeeId) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    return mockSelfChecks.filter((item) => item.employeeId === employeeId);
  }
  return api(`/api/surveys/selfcheck?employeeId=${employeeId}`, { method: "GET" });
}

// セルフチェック保存
export async function saveSelfCheck(employeeId, data) {
  if (process.env.NEXT_PUBLIC_USE_MOCK === "true") {
    mockSelfChecks.unshift({
      employeeId,
      date: new Date().toISOString().slice(0, 10),
      answers: data.answers,
    });
    return { success: true };
  }
  return api(`/api/surveys/selfcheck`, {
    method: "POST",
    body: { employeeId, ...data },
  });
}