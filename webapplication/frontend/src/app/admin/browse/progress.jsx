import React, { useEffect, useState } from "react";
import { fetchProgress } from "@/lib/services/assignments";

const ProgressTable = ({ period, facility }) => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProgress({ period, facility });
      setProgress(data);
    };
    fetchData();
  }, [period, facility]);

  return (
    <div className="overflow-x-auto border border-gray-200 shadow-sm rounded-lg">
      <div className="max-h-[500px] overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">名前</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">施設</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">1次考課者</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">2次考課者</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">最終考課者</th>
              <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">状況</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {progress.map((person) => (
              <tr key={person.employeeId}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{person.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{person.facility}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {person.firstEvaluators.map((ev, i) => (
                    <div key={i}>{ev}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {person.secondEvaluators.map((ev, i) => (
                    <div key={i}>{ev}</div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {person.finalEvaluators.map((ev, i) => (
                    <div key={i}>{ev}</div>
                  ))}
                </td>
                <td className={"px-6 py-4 whitespace-nowrap text-sm font-semibold"
                    + (person.status === "完了" ? " text-red-600" : " text-blue-600")}>
                  {person.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProgressTable;