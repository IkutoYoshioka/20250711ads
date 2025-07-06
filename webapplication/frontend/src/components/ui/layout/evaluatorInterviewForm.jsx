"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { fetchInterviewData, saveInterviewData, fetchInterviewHistory } from "@/lib/services/interviews";
import { fetchEmployeeById } from "@/lib/services/employees";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const InterviewSheet = () => {
  const { employeeId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [evaluatorComment, setEvaluatorComment] = useState("");
  const [periods, setPeriods] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [history, setHistory] = useState([]);
  const [employeeDetail, setEmployeeDetail] = useState(null);

  // 被考課者の詳細情報を取得
  useEffect(() => {
    if (!employeeId) return;
    const loadEmployee = async () => {
      const detail = await fetchEmployeeById(employeeId);
      setEmployeeDetail(detail);
    };
    loadEmployee();
  }, [employeeId]);

  // 面談履歴を取得
  useEffect(() => {
    if (!employeeId) return;
    const loadHistory = async () => {
      const list = await fetchInterviewHistory(employeeId);
      // 新しい順に並べる
      list.sort((a, b) => (a.period < b.period ? 1 : -1));
      setHistory(list);
      setPeriods(list.map((d) => d.period));
      if (list.length > 0) {
        setSelectedPeriod(list[0].period);
        setInterviewData(list[0]);
        setEvaluatorComment(list[0].EvaluatorComment || "");
      }
    };
    loadHistory();
  }, [employeeId]);

  // 期を切り替えたとき
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    const data = history.find((d) => d.period === period);
    setInterviewData(data);
    setEvaluatorComment(data?.EvaluatorComment || "");
  };

  const handleSave = async () => {
    if (!interviewData) return;

    const updated = {
      ...interviewData,
      EvaluatorComment: evaluatorComment,
    };

    try {
      const res = await saveInterviewData(employeeId, updated);
      if (res.success) {
        toast.success("保存に成功しました！");
      } else {
        toast.error("保存に失敗しました。");
      }
    } catch (err) {
      console.error(err);
      toast.error("エラーが発生しました。");
    }
  };

  const fields = [
    { key: "change", label: "考課期間における自分の変化" },
    { key: "impact", label: "自分が職場に与えた影響" },
    { key: "teammates", label: "頑張っていると思う仲間とその理由" },
    { key: "goal", label: "次期に向けての目標" },
    { key: "transfer", label: "異動の希望と希望する施設" },
    { key: "retirement", label: "退職の予定と希望・検討している場合の時期" },
  ];

  if (!interviewData) {
    return <div className="p-6 text-center text-gray-500">面談データを読み込み中...</div>;
  }

  // 最新の期のみ編集可
  const isLatest = history.length > 0 && interviewData.period === history[0].period;

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-right" richColors />
      <div className="overflow-y-auto h-[500px]">
        {/* 被考課者の詳細情報 */}
        {employeeDetail && (
        <Card className="bg-blue-50 shadow mb-4">
          <CardHeader>
            <CardTitle>被考課者カルテ</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 p-4">
            <div>
              <p className="text-sm text-gray-500">氏名</p>
              <p>{employeeDetail.lastName}{employeeDetail.firstName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">職種・等級</p>
              <p>{employeeDetail.occupation}・{employeeDetail.grade}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">施設名</p>
              <p>{employeeDetail.facility}</p>
            </div>
            {/* <div>
              <p className="text-sm text-gray-500">メール</p>
              <p>{employeeDetail.email || "未登録"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">電話番号</p>
              <p>{employeeDetail.phone || "未登録"}</p>
            </div> */}
            <div>
              <p className="text-sm text-gray-500">取得資格</p>
              <p>{employeeDetail.licensesObtained || "なし"}</p>
            </div>
            <div className="col-span-2">
              <p className="text-sm text-gray-500">今後取得予定の資格</p>
              {employeeDetail.licensesFuture && employeeDetail.licensesFuture.length > 0 ? (
                <ul className="list-disc ml-5">
                  {employeeDetail.licensesFuture.map((lic, idx) => (
                    <li key={idx}>
                      {lic.name}（予定日: {lic.date}、理由: {lic.reason}）
                    </li>
                  ))}
                </ul>
              ) : (
                <span>なし</span>
              )}
            </div>
            <div>
              <p className="text-sm text-gray-500">職歴</p>
              {employeeDetail.workHistory && employeeDetail.workHistory.length > 0 ? (
                <ul className="list-disc ml-5">
                  {employeeDetail.workHistory.map((job, idx) => (
                    <li key={idx}>
                      {job.occupation}・{job.grade}  {job.facility} ({job.period})
                    </li>
                  ))}
                </ul>
              ) : (
                <span>なし</span>
              )}
            </div>
          </CardContent>
        </Card>
        )}

        {/* ヘッダー情報 */}
        <Card className="bg-white shadow-md mb-4">
          <CardContent className="grid grid-cols-2 gap-4 p-4">
            <div>
              <p className="text-sm text-gray-500">期</p>
              <Select value={selectedPeriod} onValueChange={handlePeriodChange}>
                <SelectTrigger>
                  {selectedPeriod || "選択してください"}
                </SelectTrigger>
                <SelectContent>
                  {periods.map((period) => (
                    <SelectItem key={period} value={period}>
                      {period}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="text-sm text-gray-500">施設名</p>
              <p>{interviewData?.facility || "未記入"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">氏名</p>
              <p>{interviewData?.lastName}{interviewData?.firstName || "未記入"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">面談者</p>
              <p>{interviewData?.interviewEvaluatorName || "未記入"}</p>
            </div>
          </CardContent>
        </Card>

        {/* 面談項目一覧 */}
        {fields.map(({ key, label }) => (
          <Card key={key} className="bg-white shadow-md mb-4">
            <CardHeader>
              <CardTitle>{label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700">被考課者の記入内容</h4>
                <div className="bg-gray-100 p-3 rounded text-gray-800">
                  {interviewData?.EvaluateeResponses?.[key] || "未記入"}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* 考課者コメント（まとめて） */}
        <Card className="bg-white shadow-md mb-4">
          <CardHeader>
            <CardTitle>考課者のコメント（まとめて記入）</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="ここにコメントを入力..."
              value={evaluatorComment}
              onChange={(e) => setEvaluatorComment(e.target.value)}
              rows={5}
              disabled={!isLatest}
            />
            {!isLatest && (
              <div className="text-xs text-gray-500 mt-2">過去の期のコメントは編集できません</div>
            )}
          </CardContent>
        </Card>

        {/* 保存ボタン */}
        {isLatest && (
          <div className="flex justify-end p-4">
            <Button onClick={handleSave} className="bg-blue-600 text-white">
              保存
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewSheet;
