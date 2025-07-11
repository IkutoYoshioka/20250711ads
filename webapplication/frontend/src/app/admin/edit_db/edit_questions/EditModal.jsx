import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiPlus, FiX } from "react-icons/fi";

// セクション編集・新規作成モーダル
const EditModal = ({
  criterion,
  onSave,
  onClose,
  mode = "edit",
}) => {
  // 新規作成時は空欄、編集時は既存値
  const [sectionName, setSectionName] = useState(criterion?.sectionName || "");
  const [type, setType] = useState(criterion?.type || "");
  const [grade, setGrade] = useState(criterion?.grade || []);
  const [position, setPosition] = useState(criterion?.position || []);
  const [questions, setQuestions] = useState(
    criterion?.questions?.length
      ? criterion.questions
      : [{ questionId: Date.now(), text: "", score: 1 }]
  );

  // 選択肢（必要に応じて編集可）
  const availableTypes = ["働き方の指針", "業務考課"];

  // 質問編集
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };
  const handleAddQuestion = () =>
    setQuestions((prev) => [...prev, { questionId: Date.now(), text: "", score: 1 }]);
  const handleRemoveQuestion = (id) =>
    setQuestions((prev) => prev.filter((q) => q.questionId !== id));

  // 保存
  const handleSave = () => {
    if (!sectionName.trim() || !type.trim() || questions.length === 0) {
      return;
    }
    onSave({
      ...(criterion || {}),
      sectionName,
      type,
      questions: questions.map((q) => ({
        ...q,
        score: Number(q.score) || 1,
      })),
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">
          {mode === "create" ? "新規セクション作成" : "セクション編集"}
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <input
              className="border rounded px-2 py-1 flex-1"
              placeholder="セクション名"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
            />
            <Select value={type} onValueChange={setType}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="type" />
              </SelectTrigger>
              <SelectContent>
                {availableTypes.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="mb-1 text-sm font-semibold">質問内容</div>
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th>質問内容</th>
                  <th>スコア</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q, idx) => (
                  <tr key={q.questionId}>
                    <td>
                      <input
                        className="border rounded px-2 py-1 w-full"
                        placeholder="質問内容"
                        value={q.text}
                        onChange={(e) => handleQuestionChange(idx, "text", e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border rounded px-2 py-1 w-16"
                        value={q.score}
                        min={1}
                        onChange={(e) => handleQuestionChange(idx, "score", e.target.value)}
                      />
                    </td>
                    <td>
                      <Button size="icon" variant="ghost" onClick={() => handleRemoveQuestion(q.questionId)}>
                        <FiX />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Button size="sm" variant="outline" onClick={handleAddQuestion}>
              <FiPlus className="mr-1" /> 質問追加
            </Button>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-6">
          <Button variant="outline" onClick={onClose}>キャンセル</Button>
          <Button onClick={handleSave}>保存</Button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;