"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { fetchInterviewData, saveInterviewData } from "@/lib/services/interviews";
import { fetchMe } from "@/lib/services/employees"; // ログインユーザー情報取得用

const fields = [
  { key: "change", label: "考課期間における自分の変化" },
  { key: "impact", label: "自分が職場に与えた影響" },
  { key: "teammates", label: "頑張っていると思う仲間とその理由" },
  { key: "goal", label: "次期に向けての目標" },
  { key: "satisfaction", label: "仕事の充実感" },
  { key: "userRelation", label: "利用者との関係性" },
  { key: "colleagueRelation", label: "仕事仲間との関係性" },
  { key: "contribution", label: "職場に対するあなたの貢献度" },
  { key: "transfer", label: "異動の希望と希望する施設" },
  { key: "retirement", label: "退職の予定と希望・検討している場合の時期" },
];

const EvaluateeInterviewForm = () => {
  const router = useRouter();
  const [employeeId, setEmployeeId] = useState(null);
  const [interviewData, setInterviewData] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const me = await fetchMe();
        if (!me?.employeeId) throw new Error("employeeId が取得できません");
        setEmployeeId(me.employeeId);

        const data = await fetchInterviewData(me.employeeId);
        if (data) {
          setInterviewData(data);
          setResponses(data.EvaluateeResponses || {});
        }
      } catch (err) {
        console.error("データの取得に失敗:", err);
      }
    };

    load();
  }, []);

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

  return (
    <div className="mx-auto p-4 overflow-y-auto h-[500px]">
        <Toaster position="top-right" richColors />
      {/* ヘッダー情報 */}
        <Card className="bg-white shadow-md mb-4 mx-4">
          <CardContent className="grid grid-cols-2 gap-4 p-4">
            <div>
              <p className="text-sm text-gray-500">期</p>
              <p>{interviewData?.period || "未記入"}</p>
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
            />
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-end p-4">
        <Button onClick={handleSave} className="bg-blue-600 text-white">保存</Button>
      </div>
    </div>
  );
};

export default EvaluateeInterviewForm;
