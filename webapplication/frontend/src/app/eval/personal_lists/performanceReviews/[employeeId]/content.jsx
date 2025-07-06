import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export default function CommonContent({ sections = [], individual = {} }) {
  // 「働き方の指針」だけを抽出
  const filteredSections = sections.filter(section => section.type === "業務考課");

  // typeごとにグループ化（ここでは「働き方の指針」だけ）
  const groupedSections = filteredSections.reduce((acc, section) => {
    if (!acc[section.type]) acc[section.type] = [];
    acc[section.type].push(section);
    return acc;
  }, {});

  return (
    <div className="max-h-[400px] overflow-y-auto border border-gray-300 rounded-lg p-4">
      {Object.entries(groupedSections).map(([type, sectionList]) => (
        <div key={type} className="mb-6">
          <h2 className="text-xl font-bold mb-4">{type}</h2>
          <Accordion type="multiple" className="w-full">
            {sectionList.map((section, index) => {
              const totalScore = section.questions.reduce((sum, q) => sum + q.score, 0);
              const obtainedScore = section.questions.reduce((sum, q) => sum + (q.obtainedScore ?? 0), 0);
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
                          {section.questions.map((q, qIndex) => (
                            <tr key={qIndex}>
                              <td className="border border-gray-300 px-2 py-1">{q.text}</td>
                              <td className="border border-gray-300 px-2 py-1 text-center">{q.score}</td>
                              <td className="border border-gray-300 px-2 py-1 text-center">
                                <input type="radio" checked={q.obtainedScore > 0} readOnly />
                              </td>
                              <td className="border border-gray-300 px-2 py-1 text-center">
                                <input type="radio" checked={q.obtainedScore === 0} readOnly />
                              </td>
                            </tr>
                          ))}
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
