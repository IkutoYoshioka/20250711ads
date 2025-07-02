export const feedbacks = [
  {
    employeeId: "1001",
    lastName: "山田",
    firstName: "太郎",
    facility: "本園",
    occupation: "保育士",
    grade: "G01",
    periods: [
      {
        period: "2022年度後期",
        workGuideline: {
          score: 93,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 96,
              questions: [
                { questionId: "1001-2022年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2022年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 90,
              questions: [
                { questionId: "1001-2022年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1001-2022年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 82,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 85,
              questions: [
                { questionId: "1001-2022年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2022年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 80,
              questions: [
                { questionId: "1001-2022年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2022年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (93 + 82) / 2, // 本番はバックエンドから取得するので、ここでは計算しない
      },
       {
        period: "2023年度前期",
        workGuideline: {
          score: 93,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 96,
              questions: [
                { questionId: "1001-2023年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 90,
              questions: [
                { questionId: "1001-2023年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1001-2023年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 82,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 85,
              questions: [
                { questionId: "1001-2023年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 80,
              questions: [
                { questionId: "1001-2023年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (93 + 82) / 2, // 本番はバックエンドから取得するので、ここでは計算しない
      },
      {
        period: "2023年度後期",
        workGuideline: {
          score: 93,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 96,
              questions: [
                { questionId: "1001-2023年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 90,
              questions: [
                { questionId: "1001-2023年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1001-2023年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 82,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 85,
              questions: [
                { questionId: "1001-2023年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 80,
              questions: [
                { questionId: "1001-2023年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (93 + 82) / 2, // 本番はバックエンドから取得するので、ここでは計算しない
      },
      {
        period: "2024年度前期",
        workGuideline: {
          score: 85,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 90,
              questions: [
                { questionId: "1001-2024年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1001-2024年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 80,
              questions: [
                { questionId: "1001-2024年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2024年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 88,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 90,
              questions: [
                { questionId: "1001-2024年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1001-2024年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 85,
              questions: [
                { questionId: "1001-2024年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2024年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 9 },
              ],
            },
          ],
        },
        totalScore: (85 + 88) / 2, // 86.5
      },
    ],
  },
  {
    employeeId: "1002",
    lastName: "佐藤",
    firstName: "花子",
    facility: "分園",
    occupation: "看護師",
    grade: "G02",
    periods: [
       {
        period: "2023年度前期",
        workGuideline: {
          score: 93,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 96,
              questions: [
                { questionId: "1001-2023年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 90,
              questions: [
                { questionId: "1001-2023年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1001-2023年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 82,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 85,
              questions: [
                { questionId: "1001-2023年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 80,
              questions: [
                { questionId: "1001-2023年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1001-2023年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (93 + 82) / 2, // 本番はバックエンドから取得するので、ここでは計算しない
      },
      {
        period: "2023年度後期",
        workGuideline: {
          score: 78,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 80,
              questions: [
                { questionId: "1002-2023年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1002-2023年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 8 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 75,
              questions: [
                { questionId: "1002-2023年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1002-2023年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 80,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 82,
              questions: [
                { questionId: "1002-2023年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1002-2023年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 8 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 78,
              questions: [
                { questionId: "1002-2023年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1002-2023年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (75 + 80) / 2, // 77.5
      },
      {
        period: "2024年度前期",
        workGuideline: {
          score: 78,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 80,
              questions: [
                { questionId: "1002-2024年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1002-2024年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 8 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 75,
              questions: [
                { questionId: "1002-2024年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 7 },
                { questionId: "1002-2024年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 82,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 85,
              questions: [
                { questionId: "1002-2024年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1002-2024年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 80,
              questions: [
                { questionId: "1002-2024年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1002-2024年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 8 },
              ],
            },
          ],
        },
        totalScore: (78 + 82) / 2, // 80
      },
    ],
  },
  {
    employeeId: "1003",
    lastName: "鈴木",
    firstName: "一郎",
    facility: "本園",
    occupation: "調理師",
    grade: "G01",
    periods: [
      {
        period: "2023年度後期",
        workGuideline: {
          score: 88,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 90,
              questions: [
                { questionId: "1003-2023年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1003-2023年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 85,
              questions: [
                { questionId: "1003-2023年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1003-2023年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 9 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 90,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 93,
              questions: [
                { questionId: "1003-2023年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1003-2023年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 9 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 88,
              questions: [
                { questionId: "1003-2023年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 8 },
                { questionId: "1003-2023年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 9 },
              ],
            },
          ],
        },
        totalScore: (88 + 90) / 2, // 89
      },
      {
        period: "2024年度前期",
        workGuideline: {
          score: 92,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 95,
              questions: [
                { questionId: "1003-2024年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1003-2024年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 10 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 90,
              questions: [
                { questionId: "1003-2024年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1003-2024年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 9 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 95,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 98,
              questions: [
                { questionId: "1003-2024年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1003-2024年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 10 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 92,
              questions: [
                { questionId: "1003-2024年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 9 },
                { questionId: "1003-2024年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 9 },
              ],
            },
          ],
        },
        totalScore: (92 + 95) / 2, // 93.5
      },
    ],
  },
  {
    employeeId: "1004",
    lastName: "田中",
    firstName: "美咲",
    facility: "分園",
    occupation: "保育士",
    grade: "G02",
    periods: [
      {
        period: "2023年度後期",
        workGuideline: {
          score: 60,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 65,
              questions: [
                { questionId: "1004-2023年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1004-2023年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 6 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 55,
              questions: [
                { questionId: "1004-2023年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 4 },
                { questionId: "1004-2023年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 5 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 65,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 70,
              questions: [
                { questionId: "1004-2023年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1004-2023年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 6 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 60,
              questions: [
                { questionId: "1004-2023年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1004-2023年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 6 },
              ],
            },
          ],
        },
        totalScore: (60 + 65) / 2, // 62.5
      },
      {
        period: "2024年度前期",
        workGuideline: {
          score: 65,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 70,
              questions: [
                { questionId: "1004-2024年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 6 },
                { questionId: "1004-2024年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 7 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 60,
              questions: [
                { questionId: "1004-2024年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1004-2024年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 6 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 70,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 75,
              questions: [
                { questionId: "1004-2024年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 6 },
                { questionId: "1004-2024年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 7 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 65,
              questions: [
                { questionId: "1004-2024年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 6 },
                { questionId: "1004-2024年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 7 },
              ],
            },
          ],
        },
        totalScore: (65 + 70) / 2, // 67.5
      },
    ],
  },
  {
    employeeId: "1005",
    lastName: "高橋",
    firstName: "健",
    facility: "本園",
    occupation: "看護師",
    grade: "G01",
    periods: [
      {
        period: "2023年度後期",
        workGuideline: {
          score: 50,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 55,
              questions: [
                { questionId: "1005-2023年度後期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 4 },
                { questionId: "1005-2023年度後期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 5 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 45,
              questions: [
                { questionId: "1005-2023年度後期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 3 },
                { questionId: "1005-2023年度後期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 4 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 55,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 60,
              questions: [
                { questionId: "1005-2023年度後期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 4 },
                { questionId: "1005-2023年度後期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 5 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 50,
              questions: [
                { questionId: "1005-2023年度後期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 4 },
                { questionId: "1005-2023年度後期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 5 },
              ],
            },
          ],
        },
        totalScore: (50 + 55) / 2, // 52.5
      },
      {
        period: "2024年度前期",
        workGuideline: {
          score: 55,
          sections: [
            {
              sectionId: "wg-1",
              section: "主体性",
              score: 60,
              questions: [
                { questionId: "1005-2024年度前期-wg-1-q1", question: "自ら考えて行動したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1005-2024年度前期-wg-1-q2", question: "新しい提案をしたか", maxScore: 10, obtainedScore: 6 },
              ],
            },
            {
              sectionId: "wg-2",
              section: "協調性",
              score: 50,
              questions: [
                { questionId: "1005-2024年度前期-wg-2-q1", question: "チームで協力したか", maxScore: 10, obtainedScore: 4 },
                { questionId: "1005-2024年度前期-wg-2-q2", question: "他者の意見を尊重したか", maxScore: 10, obtainedScore: 5 },
              ],
            },
          ],
        },
        performanceReview: {
          score: 60,
          sections: [
            {
              sectionId: "pr-1",
              section: "業務遂行",
              score: 65,
              questions: [
                { questionId: "1005-2024年度前期-pr-1-q1", question: "業務を期限内に完了したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1005-2024年度前期-pr-1-q2", question: "品質を保ったか", maxScore: 10, obtainedScore: 6 },
              ],
            },
            {
              sectionId: "pr-2",
              section: "改善提案",
              score: 55,
              questions: [
                { questionId: "1005-2024年度前期-pr-2-q1", question: "業務改善を提案したか", maxScore: 10, obtainedScore: 5 },
                { questionId: "1005-2024年度前期-pr-2-q2", question: "提案を実行したか", maxScore: 10, obtainedScore: 6 },
              ],
            },
          ],
        },
        totalScore: (55 + 60) / 2, // 57.5
      },
    ],
  },
];