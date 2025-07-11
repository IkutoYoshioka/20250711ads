// 評価データをcriteriaとresult統合形式で
export const mockEvaluationResults = [
  {
    employeeId: "1001",
    lastName: "山田",
    firstName: "太郎",
    facility: "本園",
    occupation: "保育士",
    grade: "G01",
    workGuidelinesPrimaryEvaluatorName: "佐藤 花子",
    workGuidelinesSecondaryEvaluatorName: "鈴木 一郎",
    workGuidelinesFinalEvaluatorName: "田中 次郎",
    performanceReviewsPrimaryEvaluatorName: "佐藤 花子",
    performanceReviewsSecondaryEvaluatorName: "鈴木 一郎",
    performanceReviewsFinalEvaluatorName: "田中 次郎",
    status: "2次考課中",
    sections: [
      {
        sectionId: "s1",
        sectionName: "主体性",
        type: "働き方の指針",
        questions: [
          {
            id: "q1",
            text: "自ら考えて行動したか",
            score: 10,
            obtainedScore: 8,
          },
          {
            id: "q2",
            text: "新しい提案をしたか",
            score: 10,
            obtainedScore: 7,
          },
        ],
      },
      {
        sectionId: "s2",
        sectionName: "協調性",
        type: "働き方の指針",
        questions: [
          {
            id: "q3",
            text: "チームで協力したか",
            score: 10,
            obtainedScore: 9,
          },
          {
            id: "q4",
            text: "他者の意見を尊重したか",
            score: 10,
            obtainedScore: 8,
          },
        ],
      },
      {
        sectionId: "s3",
        sectionName: "業務遂行",
        type: "業務考課",
        questions: [
          {
            id: "q5",
            text: "業務を期限内に完了したか",
            score: 20,
            obtainedScore: 18,
          },
          {
            id: "q6",
            text: "品質を保ったか",
            score: 20,
            obtainedScore: 19,
          },
        ],
      },
      {
        sectionId: "s4",
        sectionName: "改善提案",
        type: "業務考課",
        questions: [
          {
            id: "q7",
            text: "業務改善を提案したか",
            score: 10,
            obtainedScore: 7,
          },
          {
            id: "q8",
            text: "提案を実行したか",
            score: 10,
            obtainedScore: 8,
          },
        ],
      },
    ],
    sectionScores: [
      {
        sectionId: "s1",
        totalScore: 20,
        obtainedScore: 15,
      },
      {
        sectionId: "s2",
        totalScore: 20,
        obtainedScore: 17,
      },
      {
        sectionId: "s3",
        totalScore: 40,
        obtainedScore: 37,
      },
      {
        sectionId: "s4",
        totalScore: 20,
        obtainedScore: 15,
      },
    ],
    scores: {
      workGuidelines: 80,
      performanceReviews: 87,
      total: 84,
    },
  },
  {
    employeeId: "1002",
    lastName: "佐藤",
    firstName: "花子",
    facility: "分園",
    occupation: "看護師",
    grade: "G02",
    workGuidelinesPrimaryEvaluatorName: "佐藤 花子",
    workGuidelinesSecondaryEvaluatorName: "鈴木 一郎",
    workGuidelinesFinalEvaluatorName: "田中 次郎",
    performanceReviewsPrimaryEvaluatorName: "佐藤 花子",
    performanceReviewsSecondaryEvaluatorName: "鈴木 一郎",
    performanceReviewsFinalEvaluatorName: "田中 次郎",
    status: "3次考課中",
    sections: [
      {
        sectionId: "s1",
        sectionName: "主体性",
        type: "働き方の指針",
        questions: [
          {
            id: "q1",
            text: "自ら考えて行動したか",
            score: 10,
            obtainedScore: 6,
          },
          {
            id: "q2",
            text: "新しい提案をしたか",
            score: 10,
            obtainedScore: 7,
          },
        ],
      },
      {
        sectionId: "s2",
        sectionName: "協調性",
        type: "働き方の指針",
        questions: [
          {
            id: "q3",
            text: "チームで協力したか",
            score: 10,
            obtainedScore: 8,
          },
          {
            id: "q4",
            text: "他者の意見を尊重したか",
            score: 10,
            obtainedScore: 7,
          },
        ],
      },
      {
        sectionId: "s3",
        sectionName: "業務遂行",
        type: "業務考課",
        questions: [
          {
            id: "q5",
            text: "業務を期限内に完了したか",
            score: 20,
            obtainedScore: 15,
          },
          {
            id: "q6",
            text: "品質を保ったか",
            score: 20,
            obtainedScore: 16,
          },
        ],
      },
      {
        sectionId: "s4",
        sectionName: "改善提案",
        type: "業務考課",
        questions: [
          {
            id: "q7",
            text: "業務改善を提案したか",
            score: 10,
            obtainedScore: 6,
          },
          {
            id: "q8",
            text: "提案を実行したか",
            score: 10,
            obtainedScore: 7,
          },
        ],
      },
    ],
    sectionScores: [
      {
        sectionId: "s1",
        totalScore: 20,
        obtainedScore: 13,
      },
      {
        sectionId: "s2",
        totalScore: 20,
        obtainedScore: 15,
      },
      {
        sectionId: "s3",
        totalScore: 40,
        obtainedScore: 31,
      },
      {
        sectionId: "s4",
        totalScore: 20,
        obtainedScore: 13,
      },
    ],
    scores: {
      workGuidelines: 70,
      performanceReviews: 80,
      total: 75,
    },
  },
  {
    employeeId: "1003",
    lastName: "鈴木",
    firstName: "一郎",
    facility: "本園",
    occupation: "調理師",
    grade: "G01",
    workGuidelinesPrimaryEvaluatorName: "佐藤 花子",
    workGuidelinesSecondaryEvaluatorName: "鈴木 一郎",
    workGuidelinesFinalEvaluatorName: "田中 次郎",
    performanceReviewsPrimaryEvaluatorName: "佐藤 花子",
    performanceReviewsSecondaryEvaluatorName: "鈴木 一郎",
    performanceReviewsFinalEvaluatorName: "田中 次郎",
    status: "完了",
    sections: [
      {
        sectionId: "s1",
        sectionName: "主体性",
        type: "働き方の指針",
        questions: [
          {
            id: "q1",
            text: "自ら考えて行動したか",
            score: 10,
            obtainedScore: 10,
          },
          {
            id: "q2",
            text: "新しい提案をしたか",
            score: 10,
            obtainedScore: 10,
          },
        ],
      },
      {
        sectionId: "s2",
        sectionName: "協調性",
        type: "働き方の指針",
        questions: [
          {
            id: "q3",
            text: "チームで協力したか",
            score: 10,
            obtainedScore: 10,
          },
          {
            id: "q4",
            text: "他者の意見を尊重したか",
            score: 10,
            obtainedScore: 10,
          },
        ],
      },
      {
        sectionId: "s3",
        sectionName: "業務遂行",
        type: "業務考課",
        questions: [
          {
            id: "q5",
            text: "業務を期限内に完了したか",
            score: 20,
            obtainedScore: 20,
          },
          {
            id: "q6",
            text: "品質を保ったか",
            score: 20,
            obtainedScore: 20,
          },
        ],
      },
      {
        sectionId: "s4",
        sectionName: "改善提案",
        type: "業務考課",
        questions: [
          {
            id: "q7",
            text: "業務改善を提案したか",
            score: 10,
            obtainedScore: 10,
          },
          {
            id: "q8",
            text: "提案を実行したか",
            score: 10,
            obtainedScore: 10,
          },
        ],
      },
    ],
    sectionScores: [
      {
        sectionId: "s1",
        totalScore: 20,
        obtainedScore: 20,
      },
      {
        sectionId: "s2",
        totalScore: 20,
        obtainedScore: 20,
      },
      {
        sectionId: "s3",
        totalScore: 40,
        obtainedScore: 40,
      },
      {
        sectionId: "s4",
        totalScore: 20,
        obtainedScore: 20,
      },
    ],
    scores: {
      workGuidelines: 90,
      performanceReviews: 95,
      total: 92,
    },
  },
  {
    employeeId: "1004",
    lastName: "田中",
    firstName: "次郎",
    facility: "分園",
    occupation: "保育士",
    grade: "G03",
    workGuidelinesPrimaryEvaluatorName: "高橋 三郎",
    workGuidelinesSecondaryEvaluatorName: "田中 次郎",
    workGuidelinesFinalEvaluatorName: "鈴木 一郎",
    performanceReviewsPrimaryEvaluatorName: "高橋 三郎",
    performanceReviewsSecondaryEvaluatorName: "田中 次郎",
    performanceReviewsFinalEvaluatorName: "鈴木 一郎",
    status: "未開始",
    sections: [
      {
        sectionId: "s1",
        sectionName: "主体性",
        type: "働き方の指針",
        questions: [
          {
            id: "q1",
            text: "自ら考えて行動したか",
            score: 10,
            obtainedScore: 9,
          },
          {
            id: "q2",
            text: "新しい提案をしたか",
            score: 10,
            obtainedScore: 8,
          },
        ],
      },
      {
        sectionId: "s2",
        sectionName: "協調性",
        type: "働き方の指針",
        questions: [
          {
            id: "q3",
            text: "チームで協力したか",
            score: 10,
            obtainedScore: 9,
          },
          {
            id: "q4",
            text: "他者の意見を尊重したか",
            score: 10,
            obtainedScore: 8,
          },
        ],
      },
      {
        sectionId: "s3",
        sectionName: "業務遂行",
        type: "業務考課",
        questions: [
          {
            id: "q5",
            text: "業務を期限内に完了したか",
            score: 20,
            obtainedScore: 19,
          },
          {
            id: "q6",
            text: "品質を保ったか",
            score: 20,
            obtainedScore: 18,
          },
        ],
      },
      {
        sectionId: "s4",
        sectionName: "改善提案",
        type: "業務考課",
        questions: [
          {
            id: "q7",
            text: "業務改善を提案したか",
            score: 10,
            obtainedScore: 8,
          },
          {
            id: "q8",
            text: "提案を実行したか",
            score: 10,
            obtainedScore: 9,
          },
        ],
      },
    ],
    sectionScores: [
      {
        sectionId: "s1",
        totalScore: 20,
        obtainedScore: 17,
      },
      {
        sectionId: "s2",
        totalScore: 20,
        obtainedScore: 17,
      },
      {
        sectionId: "s3",
        totalScore: 40,
        obtainedScore: 37,
      },
      {
        sectionId: "s4",
        totalScore: 20,
        obtainedScore: 17,
      },
    ],
    scores: {
      workGuidelines: 85,
      performanceReviews: 90,
      total: 88,
    },
  },
];