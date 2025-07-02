"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { fetchInterviewData, saveInterviewData } from "@/lib/services/interviews";

const InterviewSheet = () => {
  const { employeeId } = useParams();
  const [interviewData, setInterviewData] = useState(null);
  const [comments, setComments] = useState({});

  useEffect(() => {
    if (!employeeId) return;
    const loadData = async () => {
      const data = await fetchInterviewData(employeeId);
      setInterviewData(data);
    };
    loadData();
  }, [employeeId]);

  console.log("面談データ:", interviewData);

  const handleChange = (key, value) => {
    setComments((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    if (!interviewData) return;

    const updated = {
      ...interviewData,
      EvaluatorResponses: comments,
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
    // { key: "satisfaction", label: "仕事の充実感" },
    // { key: "userRelation", label: "利用者との関係性" },
    // { key: "colleagueRelation", label: "仕事仲間との関係性" },
    // { key: "contribution", label: "職場に対するあなたの貢献度" },
    { key: "transfer", label: "異動の希望と希望する施設" },
    { key: "retirement", label: "退職の予定と希望・検討している場合の時期" },
  ];

  if (!interviewData) {
    return <div className="p-6 text-center text-gray-500">面談データを読み込み中...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Toaster position="top-right" richColors />
      <div className="overflow-y-auto h-[500px]">
        {/* ヘッダー情報 */}
        <Card className="bg-white shadow-md mb-4">
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
              <div>
                <h4 className="text-sm font-medium text-gray-700">考課者のコメント</h4>
                <Textarea
                  placeholder="ここにコメントを入力..."
                  value={comments[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
              </div>
            </CardContent>
          </Card>
        ))}

        {/* 保存ボタン */}
        <div className="flex justify-end p-4">
          <Button onClick={handleSave} className="bg-blue-600 text-white">
            保存
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSheet;
