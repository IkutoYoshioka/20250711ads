"use client";

import { useRouter } from "next/navigation";
import { UserIcon } from "lucide-react";
import { useEffect, useState } from "react";

// フィードバックのページだがassignmentのデータを表示する
import { fetchAssignments } from "@/lib/services/assignments";

const PersonEvaluation = () => {
  const router = useRouter();
  const [feedbackList, setFeedbackList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAssignments();
        setFeedbackList(data);
      } catch (error) {
        console.error("データの取得に失敗しました:", error);
      } finally {
        setIsLoading(false);
      }
    };


    fetchData();
  }, []);

  if (isLoading) {
    return (
      <>
        <div className="p-4 mx-auto w-2/3">
          <h2 className="text-2xl font-bold mb-5 text-gray-800">読み込み中...</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-4 mx-auto w-2/3">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">被考課者リスト</h2>

        <div className="space-y-3 overflow-y-auto h-[520px] pb-4">
          {feedbackList.map((person) => (
            <div
              key={person.employeeId}
              className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:scale-[1.01] cursor-pointer"
              onClick={() => router.push(`/eval/feedbacks/${person.employeeId}`)}
            >
              {/* ユーザーアイコンと名前 */}
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <UserIcon className="h-6 w-6 text-blue-500" />
                </div>
                <span className="text-gray-900 font-medium text-base">{person.lastName}{person.firstName}</span>
              </div>

              {/* ユーザーID */}
              <span className="text-sm text-gray-500">ID: {person.employeeId}　　職種: {person.occupation}　　等級: {person.grade}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PersonEvaluation;



