// 管理者用
export const mockCriteria = [
  {
    id: 1,
    sectionId: "S01",
    sectionName: "業務遂行能力",
    type: "業務考課",
    questions: [
      { questionId: 101, text: "業務手順を正確に守っているか", score: 4 },
      { questionId: 102, text: "報告・連絡・相談が適切にできているか", score: 2 },
    ],
  },
  {
    id: 2,
    sectionId: "S02",
    sectionName: "協調性",
    type: "業務考課",
    questions: [
      { questionId: 201, text: "チームワークを大切にしているか", score: 4 },
      { questionId: 202, text: "他職種との連携ができているか", score: 2 },
    ],
  },
  {
    id: 3,
    sectionId: "S03",
    sectionName: "チームワーク",
    type: "業務考課",
    questions: [
      { questionId: 301, text: "チームワークがあるか", score: 4 },
      { questionId: 302, text: "連携できているか", score: 2 },
    ],
  },
  {
    id: 4,
    sectionId: "S04",
    sectionName: "車いす関連",
    type: "業務考課",
    questions: [
      { questionId: 401, text: "車いす", score: 4 },
      { questionId: 402, text: "車いす２", score: 2 },
    ],
  },
  {
    id: 5,
    sectionId: "S05",
    sectionName: "挨拶",
    type: "働き方の指針",
    questions: [
      { questionId: 501, text: "時間を守って行動しているか", score: 4 },
      { questionId: 502, text: "職場のルールを守っているか", score: 2 },
    ],
  },
  {
    id: 6,
    sectionId: "S06",
    sectionName: "リーダーシップ",
    type: "働き方の指針",
    questions: [
      { questionId: 601, text: "部下の指導・育成ができているか", score: 4 },
      { questionId: 602, text: "組織目標の達成に貢献しているか", score: 2 },
    ],
  },
  {
    id: 7,
    sectionId: "S07",
    sectionName: "考課者関連",
    type: "働き方の指針",
    questions: [
      { questionId: 601, text: "考課ができたか", score: 4 },
      { questionId: 602, text: "考課者コメントができたか", score: 2 },
    ],
  },
];