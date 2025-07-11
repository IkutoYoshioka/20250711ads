"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { fetchInterviewData, saveInterviewData, fetchInterviewHistory } from "@/lib/services/interviews";
import { fetchMe, fetchEmployeeById } from "@/lib/services/employees";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

const fields = [
  { key: "change", label: "考課期間における自分の変化" },
  { key: "impact", label: "自分が職場に与えた影響" },
  { key: "teammates", label: "頑張っていると思う仲間とその理由" },
  { key: "goal", label: "次期に向けての目標" },
  { key: "transfer", label: "異動の希望と希望する施設" },
  { key: "retirement", label: "退職の予定と希望・検討している場合の時期" },
];

const EvaluateeInterviewForm = () => {
  const [employeeId, setEmployeeId] = useState(null);
  const [interviewData, setInterviewData] = useState(null);
  const [responses, setResponses] = useState({});
  const [history, setHistory] = useState([]);
  const [periods, setPeriods] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("");
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
    const load = async () => {
      try {
        const me = await fetchMe();
        if (!me?.employeeId) throw new Error("employeeId が取得できません");
        setEmployeeId(me.employeeId);

        const list = await fetchInterviewHistory(me.employeeId);
        // 新しい順に並べる
        list.sort((a, b) => (a.period < b.period ? 1 : -1));
        setHistory(list);
        setPeriods(list.map((d) => d.period));
        if (list.length > 0) {
          setSelectedPeriod(list[0].period);
          setInterviewData(list[0]);
          setResponses(list[0].EvaluateeResponses || {});
        }
      } catch (err) {
        console.error("データの取得に失敗:", err);
      }
    };
    load();
  }, []);

  // 期を切り替えたとき
  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    const data = history.find((d) => d.period === period);
    setInterviewData(data);
    setResponses(data?.EvaluateeResponses || {});
  };

  const handleChange = (key, value) => {
    setResponses((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    if (!interviewData || !employeeId) return;

    const updated = {
      ...interviewData,
      EvaluateeResponses: responses,
    };

    try {
      const res = await saveInterviewData(employeeId, updated);
      if (res.success) {
        toast.success("保存しました！");
      } else {
        toast.error("保存に失敗しました。");
      }
    } catch (err) {
      console.error(err);
      toast.error("保存時にエラーが発生しました。");
    }
  };

  if (!interviewData) {
    return <p className="text-center text-gray-500">面談データを読み込み中...</p>;
  }

  // 最新の期のみ編集可
  const isLatest = history.length > 0 && interviewData.period === history[0].period;

  return (
    <div className="mx-auto p-4 overflow-y-auto h-[500px]">
      <Toaster position="top-right" richColors />

      {/* ヘッダー情報 */}
      <Card className="bg-white shadow-md mb-4 mx-4">
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

      {/* 入力欄 */}
      {fields.map(({ key, label }) => (
        <Card key={key} className="bg-white shadow-md m-4">
          <CardHeader>
            <CardTitle>{label}</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="ここに入力してください"
              value={responses[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              disabled={!isLatest}
            />
            {!isLatest && (
              <div className="text-xs text-gray-500 mt-2">過去の期の内容は編集できません</div>
            )}
          </CardContent>
        </Card>
      ))}

      {isLatest && (
        <div className="flex justify-end p-4">
          <Button onClick={handleSave} className="bg-blue-600 text-white">保存</Button>
        </div>
      )}
    </div>
  );
};

export default EvaluateeInterviewForm;
