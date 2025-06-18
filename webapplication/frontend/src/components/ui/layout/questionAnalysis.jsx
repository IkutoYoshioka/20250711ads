// 設問分析

"use client";

import { useState, useEffect } from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchQuestionAnalysisData } from "@/lib/services/feedbacks";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const QuestionAnalysis = () => {
  const [evaluationCriteria, setEvaluationCriteria] = useState([]);
  const [evaluationDetails, setEvaluationDetails] = useState([]);
  const [selectedSection, setSelectedSection] = useState("全セクション");
  const [selectedType, setSelectedType] = useState("全タイプ");

  useEffect(() => {
    fetchQuestionAnalysisData().then((data) => {
      setEvaluationCriteria(data.evaluationCriteria);
      setEvaluationDetails(data.evaluationDetails);
    });
  }, []);

  // セクションごとの設問データを集計
  const aggregatedData = evaluationCriteria.flatMap((section) =>
    section.questions.map((question) => {
      const responses = evaluationDetails.filter((detail) => detail.questionId === question.id);
      const totalResponses = responses.length;
      const positiveResponses = responses.filter((response) => response.score > 0).length;
      const negativeResponses = responses.filter((response) => response.score === 0).length;
      const positivePercentage = totalResponses > 0 ? Math.round((positiveResponses / totalResponses) * 100) : 0;

      return {
        sectionName: section.sectionName,
        sectionType: section.type,
        questionId: question.id,
        questionText: question.text,
        negativeResponses,
        positiveResponses,
        positivePercentage,
      };
    })
  );

  // タイプでフィルタリング
  const filteredDataByType =
    selectedType === "全タイプ"
      ? aggregatedData
      : aggregatedData.filter((data) => data.sectionType === selectedType);

  // セクション選択と組み合わせたフィルタリング
  const filteredData =
    selectedSection === "全セクション"
      ? filteredDataByType
      : filteredDataByType.filter((data) => data.sectionName === selectedSection);

  // グラフデータ
  const graphData = {
    labels: [...new Set(filteredDataByType.map((data) => data.sectionName))],
    datasets: [
      {
        label: "可の人数の割合 (%)",
        data: [...new Set(filteredDataByType.map((data) => data.sectionName))].map((sectionName) => {
          const sectionData = filteredDataByType.filter((data) => data.sectionName === sectionName);
          const totalResponses = sectionData.reduce((sum, data) => sum + data.positiveResponses + data.negativeResponses, 0);
          const positiveResponses = sectionData.reduce((sum, data) => sum + data.positiveResponses, 0);
          return totalResponses > 0 ? Math.round((positiveResponses / totalResponses) * 100) : 0;
        }),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
        barPercentage: 0.8,
      },
    ],
  };

  const graphOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "セクション",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "可の人数の割合 (%)",
        },
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="p-2 mx-auto max-w-6xl flex gap-8">
      <div className="w-1/2">
        {/* タイプとセクション選択 */}
        <div className="flex space-x-4 mb-4">
          {/* タイプ選択 */}
          <Select onValueChange={setSelectedType} value={selectedType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="タイプを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="全タイプ">全タイプ</SelectItem>
              <SelectItem value="働き方の指針">働き方の指針</SelectItem>
              <SelectItem value="業務考課">業務考課</SelectItem>
            </SelectContent>
          </Select>

          {/* セクション選択 */}
          <Select onValueChange={setSelectedSection} value={selectedSection}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="セクションを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="全セクション">全セクション</SelectItem>
              {[...new Set(aggregatedData.map((data) => data.sectionName))].map((sectionName) => (
                <SelectItem key={sectionName} value={sectionName}>
                  {sectionName}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* グラフエリア */}
        <div className="bg-white p-2 rounded-lg shadow-md w-full">
          <h3 className="text-lg font-bold mb-3">セクション別 可の人数の割合</h3>
          <div className="relative max-w-[600px] h-[370px] mx-auto">
            <Bar data={graphData} options={graphOptions} />
          </div>
        </div>
      </div>

      {/* 設問データのテーブル */}
      <div className="bg-white p-2 rounded-lg shadow-md w-1/2">
        <h3 className="text-lg font-bold mb-3">設問データ</h3>
        <div className="overflow-y-auto max-h-[400px]">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">設問ID</th>
                <th className="border border-gray-300 px-4 py-2 text-left">セクション名</th>
                <th className="border border-gray-300 px-4 py-2 text-left">設問内容</th>
                <th className="border border-gray-300 px-4 py-2 text-left">可の人数</th>
                <th className="border border-gray-300 px-4 py-2 text-left">不可の人数</th>
                <th className="border border-gray-300 px-4 py-2 text-left">可の割合 (%)</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((data) => (
                <tr key={data.questionId} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{data.questionId}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.sectionName}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.questionText}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.positiveResponses}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.negativeResponses}</td>
                  <td className="border border-gray-300 px-4 py-2">{data.positivePercentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuestionAnalysis;