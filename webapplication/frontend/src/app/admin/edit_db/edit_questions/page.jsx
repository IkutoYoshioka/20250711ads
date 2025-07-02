"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Toaster, toast } from "sonner";
import { fetchEvaluationCriteria, updateEvaluationCriterion, createEvaluationCriterion } from "@/lib/services/questions";
import { FiEdit, FiPlus } from "react-icons/fi";
import EditModal from "./EditModal";
import Link from "next/link";


// セクションカード（編集・表示切り替え）
const SectionCard = ({ section, onEdit }) => (
  <div className="bg-white rounded-xl shadow border p-6 mb-6 flex flex-col gap-2 hover:shadow-lg transition">
    <div className="flex items-center justify-between mb-2">
      <div>
        <span className="font-bold text-lg text-blue-800">{section.sectionName}</span>
        <span className="ml-3 px-2 py-0.5 rounded bg-gray-100 text-xs text-gray-600 border">{section.type}</span>
        <span className="ml-2 text-xs text-gray-500">ID: {section.id}</span>
      </div>
      <Button size="sm" variant="outline" onClick={() => onEdit(section)}>
        <FiEdit className="mr-1" /> 編集
      </Button>
    </div>
    <div className="flex flex-wrap gap-4 text-xs text-gray-600 mb-1">
      <div>
        <span className="font-semibold">職種:</span>{" "}
        {section.occupation?.length ? section.occupation.join(", ") : "未設定"}
      </div>
      <div>
        <span className="font-semibold">等級:</span>{" "}
        {section.grade?.length ? section.grade.join(", ") : "未設定"}
      </div>
      <div>
        <span className="font-semibold">質問数:</span> {section.questions.length}
      </div>
      <div>
        <span className="font-semibold">合計スコア:</span>{" "}
        {section.questions.reduce((sum, q) => sum + (q.score || 0), 0)}
      </div>
    </div>
    <ul className="divide-y mt-2">
      {section.questions.map((q, idx) => (
        <li key={q.questionId} className="py-2 flex items-start gap-2">
          <span className="rounded bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-bold">{idx + 1}</span>
          <span className="font-medium">{q.text}</span>
          <span className="ml-auto text-xs text-gray-500">スコア: {q.score}</span>
        </li>
      ))}
    </ul>
  </div>
);

const EditQuestionsPage = () => {
  const [criteria, setCriteria] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [showCreate, setShowCreate] = useState(false);

  // データ取得
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchEvaluationCriteria();
        setCriteria(data);
      } catch (error) {
        toast.error("データの取得に失敗しました");
      }
    };
    fetchData();
  }, []);

  // セクション新規作成
  const handleCreate = async (newSection) => {
    try {
      const created = await createEvaluationCriterion(newSection);
      setCriteria((prev) => [...prev, created]);
      setShowCreate(false);
      toast.success("新しいセクションを作成しました。");
    } catch (error) {
      toast.error("作成に失敗しました。");
    }
  };

  // セクション編集
  const handleSave = async (updatedSection) => {
    try {
      await updateEvaluationCriterion(updatedSection);
      setCriteria((prev) =>
        prev.map((item) =>
          item.id === updatedSection.id ? updatedSection : item
        )
      );
      setEditingSection(null);
      toast.success("データを保存しました。");
    } catch (error) {
      toast.error("データの保存に失敗しました。");
    }
  };

  // typeごとにグループ化
  const grouped = criteria.reduce((acc, section) => {
    acc[section.type] = acc[section.type] || [];
    acc[section.type].push(section);
    return acc;
  }, {});

  const typeOrder = ["働き方の指針", "業務考課"];

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">セクション・質問内容マスター管理</h1>
          <Button variant="primary" className="w-38 bg-blue-700 text-white">
            <Link href="edit_questions/assign_questions">今期の人事考課作成</Link >
          </Button>
        </div>
        <div className="flex flex-col overflow-y-auto h-[70vh]">
          {typeOrder.map((type) =>
            grouped[type]?.length ? (
              <React.Fragment key={type}>
                <div className="text-xl font-bold mb-3 mt-5">{type}</div>
                {grouped[type].map((section) => (
                  <SectionCard key={section.id} section={section} onEdit={setEditingSection} />
                ))}
              </React.Fragment>
            ) : null
          )}
          <Button variant="default" onClick={() => setShowCreate(true)} className="w-38">
            <FiPlus className="mr-1" /> 新規セクション作成
          </Button>
        </div>
        
        {/* 編集モーダル */}
        {editingSection && (
          <EditModal
            criterion={editingSection}
            onSave={handleSave}
            onClose={() => setEditingSection(null)}
            mode="edit"
          />
        )}
        {/* 新規作成モーダル */}
        {showCreate && (
          <EditModal
            criterion={null}
            onSave={handleCreate}
            onClose={() => setShowCreate(false)}
            mode="create"
          />
        )}
      </div>
    </>
  );
};

export default EditQuestionsPage;