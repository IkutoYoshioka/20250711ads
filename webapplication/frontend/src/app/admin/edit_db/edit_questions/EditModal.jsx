import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";
import { toast } from "sonner";

// 過去の質問比較用リスト
const PastQuestionsList = ({ pastQuestions, currentQuestions }) => (
  <div className="bg-gray-50 rounded p-3 mb-4">
    <h4 className="font-semibold mb-2 text-sm text-gray-700">過去の割り当て質問</h4>
    {pastQuestions.length === 0 ? (
      <div className="text-xs text-gray-400">過去の割り当てはありません</div>
    ) : (
      <ul className="space-y-1 text-xs">
        {pastQuestions.map((q) => {
          const isNow = currentQuestions.some((cq) => cq.id === q.id);
          return (
            <li key={q.id} className={isNow ? "text-green-700" : "text-gray-700"}>
              {q.text}（スコア: {q.score}）{isNow ? "（現在も割当）" : ""}
            </li>
          );
        })}
      </ul>
    )}
  </div>
);

const EditModal = ({
  criterion,
  onSave,
  onClose,
  pastQuestions = [],
}) => {
  const [sectionName, setSectionName] = useState(criterion.sectionName);
  const [type, setType] = useState(criterion.type);
  const [grade, setGrade] = useState(criterion.grade);
  const [position, setPosition] = useState(criterion.position);
  const [questions, setQuestions] = useState(criterion.questions);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [changes, setChanges] = useState([]);

  // バックエンドから動的に生成する予定
  const availableTypes = ["働き方の指針", "業務考課"];
  const availableGrades = ["G01", "G02", "G03", "G04", "G05", "G06", "S03", "S04", "T01", "A01", "P01"];
  const availablePositions = ["施設長", "保育士", "調理師", "事務員", "看護師", "介護士", "支援員"];

  // 等級追加・削除
  const handleAddGrade = (value) => {
    if (!grade.includes(value)) setGrade((prev) => [...prev, value]);
  };
  const handleRemoveGrade = (value) => setGrade((prev) => prev.filter((g) => g !== value));

  // 職種追加・削除
  const handleAddPosition = (value) => {
    if (!position.includes(value)) setPosition((prev) => [...prev, value]);
  };
  const handleRemovePosition = (value) => setPosition((prev) => prev.filter((p) => p !== value));

  // 質問編集
  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = { ...updatedQuestions[index], [field]: value };
    setQuestions(updatedQuestions);
  };
  const handleAddQuestion = () => setQuestions((prev) => [...prev, { id: Date.now(), text: "", score: 0 }]);
  const handleRemoveQuestion = (id) => setQuestions((prev) => prev.filter((q) => q.id !== id));

  // 保存前の差分確認
  const handleSaveClick = () => {
    const upDatedChanges = [];
    if (sectionName !== criterion.sectionName) upDatedChanges.push(`セクション名: ${criterion.sectionName} → ${sectionName}`);
    if (type !== criterion.type) upDatedChanges.push(`種類: ${criterion.type} → ${type}`);
    if (JSON.stringify(grade) !== JSON.stringify(criterion.grade)) upDatedChanges.push(`施行等級: ${criterion.grade.join(", ")} → ${grade.join(", ")}`);
    if (JSON.stringify(position) !== JSON.stringify(criterion.position)) upDatedChanges.push(`職種: ${criterion.position.join(", ")} → ${position.join(", ")}`);
    if (JSON.stringify(questions) !== JSON.stringify(criterion.questions)) {
      upDatedChanges.push("質問内容:");
      questions.forEach((q, index) => {
        const originalQuestion = criterion.questions.find((oq) => oq.id === q.id);
        if (!originalQuestion) {
          upDatedChanges.push(`  + 新規追加: ${q.text} (スコア: ${q.score})`);
        } else if (q.text !== originalQuestion.text || q.score !== originalQuestion.score) {
          upDatedChanges.push(`  - 質問${index + 1}: ${originalQuestion.text} (スコア: ${originalQuestion.score}) → ${q.text} (スコア: ${q.score})`);
        }
      });
      criterion.questions.forEach((oq) => {
        if (!questions.find((q) => q.id === oq.id)) {
          upDatedChanges.push(`  - 削除: ${oq.text} (スコア: ${oq.score})`);
        }
      });
    }
    if (upDatedChanges.length === 0) {
      toast("変更はありません。");
      return;
    }
    setChanges(upDatedChanges);
    setIsDialogOpen(true);
  };

  const handleConfirmSave = () => {
    onSave({
      ...criterion,
      sectionName,
      grade,
      position,
      questions,
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-3/5 max-h-[80vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">セクション編集</h2>
        <div className="space-y-4">
          <Input
            placeholder="セクション名"
            value={sectionName}
            onChange={(e) => setSectionName(e.target.value)}
          />
          <div>
            <h3 className="text-lg font-semibold mb-2">種類</h3>
            <Select disabled value={type}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="種類を選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={type}>{type}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">施行等級</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {grade.map((g) => (
                <span
                  key={g}
                  className="inline-flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                >
                  {g}
                  <button
                    onClick={() => handleRemoveGrade(g)}
                    className="ml-2 text-red-500 hover:text-red-700"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <Select onValueChange={handleAddGrade}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="等級を追加" />
              </SelectTrigger>
              <SelectContent>
                {availableGrades.filter((gr) => !grade.includes(gr)).map((gr) => (
                  <SelectItem key={gr} value={gr}>
                    {gr}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {criterion.type !== "働き方の指針" && (
            <div>
              <h3 className="text-lg font-semibold mb-2">職種</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {position.map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center bg-gray-200 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {p}
                    <button
                      onClick={() => handleRemovePosition(p)}
                      className="ml-2 text-red-500 hover:text-red-700"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <Select onValueChange={handleAddPosition}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="職種を追加" />
                </SelectTrigger>
                <SelectContent>
                  {availablePositions.filter((pos) => !position.includes(pos)).map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* --- 過去の質問比較 --- */}
          <PastQuestionsList pastQuestions={pastQuestions} currentQuestions={questions} />

          {/* --- 質問内容編集 --- */}
          <div>
            <h3 className="text-lg font-semibold mb-2">質問内容</h3>
            <ul className="space-y-4">
              {questions.map((q, index) => (
                <li key={q.id} className="p-4 bg-gray-100 rounded-lg shadow-sm space-y-2">
                  <Input
                    placeholder="質問内容"
                    value={q.text}
                    onChange={(e) => handleQuestionChange(index, "text", e.target.value)}
                  />
                  <Select
                    value={q.score.toString()}
                    onValueChange={(value) => handleQuestionChange(index, "score", parseInt(value, 10) || 0)}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="スコアを選択" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 2, 4, 6].map((score) => (
                        <SelectItem key={score} value={score.toString()}>
                          {score}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Button variant="destructive" size="sm" onClick={() => handleRemoveQuestion(q.id)}>
                    質問を削除
                  </Button>
                </li>
              ))}
            </ul>
            <Button variant="outline" size="sm" onClick={handleAddQuestion}>
              + 質問を追加
            </Button>
          </div>
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <Button variant="outline" onClick={onClose}>
            キャンセル
          </Button>
          <Button onClick={handleSaveClick}>保存</Button>
        </div>
      </div>
      {/* AlertDialog */}
      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent className="w-2/3 max-h-[500px] overflow-y-auto">
          <AlertDialogHeader>
            <AlertDialogTitle>変更内容の確認</AlertDialogTitle>
            <AlertDialogDescription>
              以下の内容で保存しますか？
              <ul className="mt-4 space-y-2">
                {changes.map((change, index) => (
                  <li key={index}>{change}</li>
                ))}
              </ul>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              キャンセル
            </Button>
            <Button onClick={handleConfirmSave}>保存</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default EditModal;