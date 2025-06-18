import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function CommonContent({ evaluationData = [], individual = {}, evaluationCriteria = [] }) {
  // 個人のoccupationとgradeに基づいてセクションをフィルタリング
  const filteredSections = evaluationCriteria.filter(
    (section) =>
      Array.isArray(section.occupation) &&
      Array.isArray(section.grade) &&
      section.occupation.includes(individual.occupation) &&
      section.grade.includes(individual.grade)
  );

  // セクションをtypeごとにグループ化
  const groupedSections = filteredSections.reduce((acc, section) => {
    if (!acc[section.type]) {
      acc[section.type] = [];
    }
    acc[section.type].push(section);
    return acc;
  }, {});

  return (
    <div className="max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg p-4">
      {Object.entries(groupedSections).map(([type, sections]) => (
        <div key={type} className="mb-6">
          {/* カテゴリの見出し */}
          <h2 className="text-xl font-bold mb-4">{type}</h2>
          <Accordion type="multiple" className="w-full">
            {sections.map((section, index) => {
              const totalScore = section.questions.reduce((sum, q) => sum + q.score, 0);
              const obtainedScore = section.questions.reduce((sum, q) => {
                const detail = evaluationData.find((data) => data.questionId === q.id);
                return sum + (detail ? detail.score : 0);
              }, 0);
              const sectionPercentage = totalScore > 0 ? Math.round((obtainedScore / totalScore) * 100) : 0;

              return (
                <AccordionItem key={section.sectionId} value={`item-${index}`}>
                  <AccordionTrigger>
                    <span className="text-lg font-bold pl-4">&lt; {section.sectionName} &gt;</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-y-auto max-h-[300px] border border-gray-200 rounded-lg">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead className="sticky top-0 bg-white">
                          <tr>
                            <th className="border border-gray-300 px-2 py-1">評価項目</th>
                            <th className="border border-gray-300 px-2 py-1">点数</th>
                            <th className="border border-gray-300 px-2 py-1">可</th>
                            <th className="border border-gray-300 px-2 py-1">不可</th>
                          </tr>
                        </thead>
                        <tbody>
                          {section.questions.map((question, qIndex) => {
                            const detail = evaluationData.find((data) => data.questionId === question.id);
                            const score = detail ? detail.score : null;

                            return (
                              <tr key={qIndex}>
                                <td className="border border-gray-300 px-2 py-1">{question.text}</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">{question.score}</td>
                                <td className="border border-gray-300 px-2 py-1 text-center">
                                  <input type="radio" checked={score > 0} readOnly />
                                </td>
                                <td className="border border-gray-300 px-2 py-1 text-center">
                                  <input type="radio" checked={score === 0} readOnly />
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-2 text-center font-bold">セクション得点率: {sectionPercentage}%</div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      ))}
    </div>
  );
}





