// 設問定義
export const mockQuestionAnalysis = {
  evaluationCriteria: [
    {
      sectionName: "主体性",
      type: "働き方の指針",
      questions: [
        { id: "q1", text: "自ら考えて行動したか" },
        { id: "q2", text: "新しい提案をしたか" },
      ],
    },
    {
      sectionName: "協調性",
      type: "働き方の指針",
      questions: [
        { id: "q3", text: "チームで協力したか" },
        { id: "q4", text: "他者の意見を尊重したか" },
      ],
    },
    {
      sectionName: "業務遂行",
      type: "業務考課",
      questions: [
        { id: "q5", text: "業務を期限内に完了したか" },
        { id: "q6", text: "品質を保ったか" },
      ],
    },
    {
      sectionName: "改善提案",
      type: "業務考課",
      questions: [
        { id: "q7", text: "業務改善を提案したか" },
        { id: "q8", text: "提案を実行したか" },
      ],
    },
  ],
  // 設問ごとの回答データ（例: 30人分、80%が可、20%が不可）
  evaluationDetails: Array.from({ length: 30 }, (_, i) =>
    [
      { questionId: "q1", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q2", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q3", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q4", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q5", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q6", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q7", score: Math.random() > 0.2 ? 1 : 0 },
      { questionId: "q8", score: Math.random() > 0.2 ? 1 : 0 },
    ]
  ).flat(),
};