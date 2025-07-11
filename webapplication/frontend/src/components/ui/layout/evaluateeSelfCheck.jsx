"use client";

import { useEffect, useState } from "react";
import { fetchSelfChecks, saveSelfCheck } from "@/lib/services/surveys";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";

const QUESTIONS = [
  { key: "stress", label: "最近ストレスを感じていますか？" },
  { key: "motivation", label: "仕事への意欲は高いですか？" },
  { key: "fatigue", label: "疲れを感じていますか？" },
  { key: "relationship", label: "職場の人間関係は良好ですか？" },
  { key: "support", label: "サポートを受けられていますか？" },
  { key: "worries", label: "悩みごとがありますか？" },
];

const SelfCheck = () => {
  const { employeeId } = useParams();
  const [answers, setAnswers] = useState({});
  const [history, setHistory] = useState([]);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!employeeId) return;
    const load = async () => {
      const data = await fetchSelfChecks(employeeId);
      setHistory(data || []);
      if (data && data.length > 0) {
        setAnswers(data[0].answers || {});
      } else {
        setAnswers({});
      }
    };
    load();
  }, [employeeId]);

  const handleChange = (key, value) => {
    setAnswers((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await saveSelfCheck(employeeId, { answers });
      toast.success("セルフチェックを保存しました");
      // 再取得
      const data = await fetchSelfChecks(employeeId);
      setHistory(data || []);
    } catch (e) {
      toast.error("保存に失敗しました");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto overflow-y-auto h-[500px]">
      <Toaster position="top-right" richColors />
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>セルフチェック（最新）</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSave();
            }}
            className="space-y-6"
          >
            {QUESTIONS.map((q) => (
              <div key={q.key}>
                <label className="block mb-1 font-medium">{q.label}</label>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500">あてはまらない</span>
                  <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={answers[q.key] ?? 50}
                    onChange={(e) => handleChange(q.key, Number(e.target.value))}
                    className="flex-1 accent-blue-500"
                  />
                  <span className="text-xs text-gray-500">あてはまる</span>
                  <span className="ml-2 w-10 text-right">{answers[q.key] ?? 50}</span>
                </div>
              </div>
            ))}
            <div className="flex justify-end">
              <Button type="submit" disabled={isSaving}>
                {isSaving ? "保存中..." : "保存"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      {history.length > 1 && (
        <Card>
          <CardHeader>
            <CardTitle>過去のセルフチェック履歴</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {history.slice(1).map((item, idx) => (
                <li key={item.date || idx} className="border-b pb-2">
                  <div className="text-xs text-gray-500 mb-1">{item.date || `履歴${idx + 1}`}</div>
                  {QUESTIONS.map((q) => (
                    <div key={q.key} className="flex items-center gap-2 text-sm">
                      <span className="w-48">{q.label}</span>
                      <span>{item.answers?.[q.key] ?? "-"}</span>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SelfCheck;