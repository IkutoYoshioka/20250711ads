"use client";

import { useEffect, useState } from "react";
import { fetchSelfChecks } from "@/lib/services/surveys";
import { useParams } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Toaster } from "sonner";

// Chart.jsを利用
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const QUESTIONS = [
  { key: "stress", label: "ストレス" },
  { key: "motivation", label: "意欲" },
  { key: "fatigue", label: "疲れ" },
  { key: "relationship", label: "人間関係" },
  { key: "support", label: "サポート" },
  { key: "worries", label: "悩み" },
];

const EvaluatorSelfCheck = () => {
  const { employeeId } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (!employeeId) return;
    const load = async () => {
      const data = await fetchSelfChecks(employeeId);
      setHistory(data || []);
    };
    load();
  }, [employeeId]);

  // グラフ用データ整形
  const chartData = {
    labels: history.map((item) => item.date || ""),
    datasets: QUESTIONS.map((q, idx) => ({
      label: q.label,
      data: history.map((item) => item.answers?.[q.key] ?? null),
      borderColor: [
        "#2563eb", // blue-600
        "#16a34a", // green-600
        "#f59e42", // orange-400
        "#e11d48", // rose-600
        "#a21caf", // purple-700
        "#64748b", // slate-500
      ][idx],
      backgroundColor: "rgba(0,0,0,0)",
      tension: 0.3,
      spanGaps: true,
    })),
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "right" }, // ← 右側に表示
      title: { display: true, text: "セルフチェック時系列グラフ" },
    },
    maintainAspectRatio: false, // ← 高さを固定できるように
    scales: {
      y: {
        min: 0,
        max: 100,
        title: { display: true, text: "スコア" },
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto" style={{ height: 500 }}>
      <Toaster position="top-right" richColors />
      <Card>
        <CardHeader>
          <CardTitle>セルフチェック（被考課者の時系列グラフ）</CardTitle>
        </CardHeader>
        <CardContent style={{ height: 450 }}>
          {history.length > 0 ? (
            <Line data={chartData} options={chartOptions} height={350} />
          ) : (
            <div className="text-gray-500 text-center py-8">データがありません</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EvaluatorSelfCheck;