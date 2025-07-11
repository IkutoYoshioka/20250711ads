"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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
import { fetchFacilityScoreDistributions } from "@/lib/services/feedbacks";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const categories = [
  { key: "workGuidelines", label: "働き方の指針" },
  { key: "performanceReviews", label: "業務考課" },
];

const scoreBands = [
  "0-9", "10-19", "20-29", "30-39", "40-49",
  "50-59", "60-69", "70-79", "80-89", "90-100"
];

const InsideFacilityAnalysisTimeSeries = () => {
  const [facilityOptions, setFacilityOptions] = useState([]);
  const [occupationOptions, setOccupationOptions] = useState([]);
  const [gradeOptions, setGradeOptions] = useState([]);
  const [periodOptions, setPeriodOptions] = useState([]);
  const [selectedFacility, setSelectedFacility] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("workGuidelines");
  const [selectedOccupations, setSelectedOccupations] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedPeriods, setSelectedPeriods] = useState([]);
  const [distributionData, setDistributionData] = useState([]);

  // 初期ロード時に全施設・職種・等級・期の選択肢を取得
  useEffect(() => {
    const loadOptions = async () => {
      const all = await fetchFacilityScoreDistributions({});
      // 施設一覧
      const facilities = Array.from(new Set(all.map(d => d.facility).filter(f => typeof f === "string" && f.trim() !== "")));
      setFacilityOptions(facilities);
      setSelectedFacility(facilities[0] || "");
      // 職種一覧
      const occupations = Array.from(new Set(all.map(d => d.occupation).filter(Boolean)));
      setOccupationOptions(occupations);
      setSelectedOccupations(occupations.slice(0, 1));
      // 等級一覧
      const grades = Array.from(new Set(all.map(d => d.grade).filter(Boolean)));
      setGradeOptions(grades);
      setSelectedGrades(grades.slice(0, 1));
      // 期一覧（降順）
      const periods = Array.from(new Set(all.map(d => d.period).filter(Boolean)));
      periods.sort((a, b) => b.localeCompare(a, "ja", { numeric: true }));
      setPeriodOptions(periods);
      setSelectedPeriods(periods.slice(0, 1)); // デフォルトで最新期のみ
    };
    loadOptions();
  }, []);

  // チェックボックスで職種選択
  const handleOccupationCheck = (occupation) => {
    setSelectedOccupations((prev) =>
      prev.includes(occupation)
        ? prev.filter(o => o !== occupation)
        : [...prev, occupation]
    );
  };

  // チェックボックスで等級選択
  const handleGradeCheck = (grade) => {
    setSelectedGrades((prev) =>
      prev.includes(grade)
        ? prev.filter(g => g !== grade)
        : [...prev, grade]
    );
  };

  // チェックボックスで期選択
  const handlePeriodCheck = (period) => {
    setSelectedPeriods((prev) =>
      prev.includes(period)
        ? prev.filter(p => p !== period)
        : [...prev, period]
    );
  };

  // 選択した期ごとに分布を取得
  useEffect(() => {
    const load = async () => {
      if (
        !selectedFacility ||
        selectedOccupations.length === 0 ||
        selectedGrades.length === 0 ||
        selectedPeriods.length === 0
      ) {
        setDistributionData([]);
        return;
      }
      // 選択した期ごとにデータを取得
      const queries = selectedPeriods.map(period =>
        Promise.all(
          selectedOccupations.flatMap(occupation =>
            selectedGrades.map(grade =>
              fetchFacilityScoreDistributions({
                facility: selectedFacility,
                occupation,
                grade,
                category: selectedCategory,
                period,
              })
            )
          )
        ).then(results => ({ period, items: results.flat().filter(Boolean) }))
      );
      const allResults = await Promise.all(queries);

      // 期ごとに合算
      const merged = allResults.map(({ period, items }) => {
        const bands = Object.fromEntries(scoreBands.map(b => [b, 0]));
        let total = 0;
        let grades = [];
        items.forEach(item => {
          grades.push(item.grade);
          scoreBands.forEach(band => {
            bands[band] += item.bands[band] || 0;
          });
          total += item.total || 0;
        });
        return {
          period,
          grades: Array.from(new Set(grades)),
          bands,
          total,
        };
      });

      setDistributionData(merged);
    };
    load();
  }, [selectedFacility, selectedOccupations, selectedGrades, selectedCategory, selectedPeriods]);

  // グラフ用データ
  const chartData = {
    labels: scoreBands,
    datasets: distributionData.map((item, idx) => ({
      label: item.period,
      data: scoreBands.map(band =>
        item.total > 0 ? Math.round((item.bands[band] / item.total) * 100) : 0
      ),
      borderColor: [
        "#2563eb", "#16a34a", "#f59e42", "#e11d48", "#a21caf", "#64748b", "#f43f5e", "#0ea5e9", "#fbbf24", "#22d3ee"
      ][idx % 10],
      backgroundColor: "rgba(0,0,0,0)",
      tension: 0.3,
      spanGaps: true,
      pointRadius: 3,
      pointHoverRadius: 5,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "right" },
      title: {
        display: true,
        text: `${selectedFacility}の得点分布（％）期別比較`
      },
      tooltip: {
        callbacks: {
          title: (ctx) => {
            // 期情報をタイトルに
            return `期: ${ctx[0].dataset.label}`;
          },
          beforeBody: () => {
            // 選択中の条件を明記
            return [
              `施設: ${selectedFacility}`,
              `評価種別: ${categories.find(c => c.key === selectedCategory)?.label ?? ""}`,
              `職種: ${selectedOccupations.join(", ") || "全て"}`,
              `等級: ${selectedGrades.join(", ") || "全て"}`
            ].join(" / ");
          },
          label: (ctx) => {
            const band = ctx.label;
            const item = distributionData[ctx.datasetIndex];
            const count = item?.bands?.[band] ?? 0;
            const percent = ctx.parsed.y ?? 0;
            return `${ctx.dataset.label}: ${percent}%（${count}人）`;
          }
        }
      }
    },
    scales: {
      x: { title: { display: true, text: "得点帯" } },
      y: {
        min: 0,
        max: 100,
        title: { display: true, text: "割合（％）" },
        ticks: { stepSize: 10, callback: v => `${v}%` },
      },
    },
  };

  return (
    <div className="p-2 mx-auto max-w-5xl flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-3/4">
        <div className="bg-white p-2 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-3">
            {categories.find(c => c.key === selectedCategory).label} - 得点分布期別比較
          </h3>
          <div className="relative h-[420px]">
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      {/* 右側の操作パネルだけスクロール可能に */}
      <div className="w-full md:w-1/4 flex flex-col gap-4 max-h-[500px] overflow-y-auto pb-6">
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">施設</div>
          <select
            className="w-full border rounded px-2 py-1"
            value={selectedFacility}
            onChange={e => setSelectedFacility(e.target.value)}
          >
            {facilityOptions.map(f => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">評価種別</div>
          <select
            className="w-full border rounded px-2 py-1"
            value={selectedCategory}
            onChange={e => setSelectedCategory(e.target.value)}
          >
            {categories.map(c => (
              <option key={c.key} value={c.key}>{c.label}</option>
            ))}
          </select>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">職種</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {occupationOptions.map(o => (
              <label key={o} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedOccupations.includes(o)}
                  onChange={() => handleOccupationCheck(o)}
                  className="accent-blue-600"
                />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">等級</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {gradeOptions.map(g => (
              <label key={g} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedGrades.includes(g)}
                  onChange={() => handleGradeCheck(g)}
                  className="accent-blue-600"
                />
                <span>{g}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg shadow-md">
          <div className="mb-2 font-semibold">期</div>
          <div className="flex flex-col gap-1 max-h-48 overflow-y-auto">
            {periodOptions.map(p => (
              <label key={p} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedPeriods.includes(p)}
                  onChange={() => handlePeriodCheck(p)}
                  className="accent-blue-600"
                />
                <span>{p}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideFacilityAnalysisTimeSeries;