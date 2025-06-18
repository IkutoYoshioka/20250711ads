// 評価基準（設問定義）
export const mockEvaluationCriteria = [
  {
    sectionId: "s1",
    sectionName: "主体性",
    type: "働き方の指針",
    occupation: ["保育士", "看護師", "調理師", "施設長"],
    grade: ["G01", "G02", "G06"],
    questions: [
      { id: "q1", text: "自ら考えて行動したか", score: 10 },
      { id: "q2", text: "新しい提案をしたか", score: 10 },
    ],
  },
  {
    sectionId: "s2",
    sectionName: "協調性",
    type: "働き方の指針",
    occupation: ["保育士", "看護師", "調理師", "施設長"],
    grade: ["G01", "G02", "G06"],
    questions: [
      { id: "q3", text: "チームで協力したか", score: 10 },
      { id: "q4", text: "他者の意見を尊重したか", score: 10 },
    ],
  },
  {
    sectionId: "s3",
    sectionName: "業務遂行",
    type: "業務考課",
    occupation: ["保育士", "看護師", "調理師", "施設長"],
    grade: ["G01", "G02", "G06"],
    questions: [
      { id: "q5", text: "業務を期限内に完了したか", score: 20 },
      { id: "q6", text: "品質を保ったか", score: 20 },
    ],
  },
  {
    sectionId: "s4",
    sectionName: "改善提案",
    type: "業務考課",
    occupation: ["保育士", "看護師", "調理師", "施設長"],
    grade: ["G01", "G02", "G06"],
    questions: [
      { id: "q7", text: "業務改善を提案したか", score: 10 },
      { id: "q8", text: "提案を実行したか", score: 10 },
    ],
  },
];

// 各assignmentIdごとの評価データ
export const mockEvaluationResults = {
  A001: [
    { questionId: "q1", score: 8 },
    { questionId: "q2", score: 7 },
    { questionId: "q3", score: 9 },
    { questionId: "q4", score: 8 },
    { questionId: "q5", score: 18 },
    { questionId: "q6", score: 19 },
    { questionId: "q7", score: 7 },
    { questionId: "q8", score: 8 },
  ],
  A002: [
    { questionId: "q1", score: 6 },
    { questionId: "q2", score: 7 },
    { questionId: "q3", score: 8 },
    { questionId: "q4", score: 7 },
    { questionId: "q5", score: 15 },
    { questionId: "q6", score: 16 },
    { questionId: "q7", score: 6 },
    { questionId: "q8", score: 7 },
  ],
  A003: [
    { questionId: "q1", score: 10 },
    { questionId: "q2", score: 10 },
    { questionId: "q3", score: 10 },
    { questionId: "q4", score: 10 },
    { questionId: "q5", score: 20 },
    { questionId: "q6", score: 20 },
    { questionId: "q7", score: 10 },
    { questionId: "q8", score: 10 },
  ],
  A004: [
    { questionId: "q1", score: 9 },
    { questionId: "q2", score: 8 },
    { questionId: "q3", score: 9 },
    { questionId: "q4", score: 8 },
    { questionId: "q5", score: 19 },
    { questionId: "q6", score: 18 },
    { questionId: "q7", score: 8 },
    { questionId: "q8", score: 9 },
  ],
  // 他のassignmentIdも必要に応じて追加
};