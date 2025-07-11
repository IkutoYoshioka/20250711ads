export const feedbacks = [
  {
    employeeId: "6034",
    lastName: "池田",
    firstName: "拓真",
    facility: "八幡デイ・サービスセンター",
    occupation: "管理職",
    grade: "G05",
    periods: [
      {
        period: "2022年度後期",
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
    employeeId: "6033",
    lastName: "山田",
    firstName: "拓真",
    facility: "八幡デイ・サービスセンター",
    occupation: "施設長",
    grade: "G06",
    periods: [
       {
        period: "2023年度前期",
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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
        workGuidelines: {
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
        performanceReviews: {
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

// 施設ごとの得点分布集計データのみを残す
export const facilityScoreDistributions = 
[
  {
    "facility": "アルテイル24",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 4,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 4,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 4,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 4,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 3,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 4,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 4,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 4,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 3,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 3,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 4,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル24",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 4,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 3,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 4,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 4,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 3,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 3,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 4,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル宮町",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 3,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 3,
      "30-39": 4,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 4,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 3,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 3,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 4,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 4,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 4,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 4,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "アルテイル青葉",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 3,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 3,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 3,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 4,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "エクレール青葉",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 3,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 3,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 4,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 5,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 4,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 3,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "つながる相談室",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 4,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 3,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 4,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 4,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 4,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 4,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 3,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 2,
      "30-39": 0,
      "40-49": 4,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 4,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 4,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 4,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "はちまんの風",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 5,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 4,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 3,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 4,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 3,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 3,
      "50-59": 0,
      "60-69": 2,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 4,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 4,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "フレンデル八木山",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 4
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 4,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 4,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 3,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 3,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 3,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 4,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 3,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 4,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "栗生あおばこども園",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 3,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 4,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 4,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 3,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 3,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 4,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 3,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "光陽ホーム",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 4,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 3,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 4,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 3,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 3,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 3,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 4
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 4,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "荒井あおばこども園",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 4,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 4,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 4,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 3,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 4,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 4,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 4
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 3,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 3,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 3,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 2,
      "70-79": 2,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 4,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "三居沢デイサービスセンター",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 3,
      "40-49": 1,
      "50-59": 4,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 4,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 3,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 5,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 4,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 3,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 3,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 3,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 3,
      "10-19": 1,
      "20-29": 0,
      "30-39": 3,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 3,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 3,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "清流ホーム",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 3,
      "20-29": 0,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 4,
      "10-19": 0,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 3,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 4,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 0,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 2,
      "40-49": 0,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 3,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 4,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "相談員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "相談員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 4,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 3,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 4,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 3,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 0,
      "30-39": 0,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 3,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "保育調理師・栄養士",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 0,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "訪問員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 2,
      "40-49": 1,
      "50-59": 2,
      "60-69": 3,
      "70-79": 0,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "訪問員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 2,
      "30-39": 0,
      "40-49": 1,
      "50-59": 2,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "訪問員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 4,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "訪問員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 3,
      "40-49": 0,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "本部事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "本部事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "本部事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 2,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉こども園",
    "occupation": "本部事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 3,
      "70-79": 1,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "ケアマネ",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 2,
      "70-79": 1,
      "80-89": 1,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "ケアマネ",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 2,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "ケアマネ",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 1,
      "50-59": 2,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "ケアマネ",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "介護員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 3,
      "50-59": 1,
      "60-69": 0,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "介護員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "介護員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 3,
      "50-59": 2,
      "60-69": 0,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "介護員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 0,
      "20-29": 3,
      "30-39": 2,
      "40-49": 2,
      "50-59": 1,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 2,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 4,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "管理職",
    "grade": "G05",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 1,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢看護師",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 0,
      "30-39": 1,
      "40-49": 1,
      "50-59": 3,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢看護師",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 0,
      "30-39": 4,
      "40-49": 1,
      "50-59": 0,
      "60-69": 0,
      "70-79": 3,
      "80-89": 0,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢看護師",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 1,
      "70-79": 0,
      "80-89": 0,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢看護師",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 2,
      "20-29": 1,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 0,
      "70-79": 2,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢事務員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 1,
      "30-39": 1,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 0,
      "80-89": 2,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢事務員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 2,
      "50-59": 2,
      "60-69": 0,
      "70-79": 0,
      "80-89": 0,
      "90-100": 3
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢事務員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 0,
      "30-39": 3,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 1,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "高齢事務員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 0,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "施設長",
    "grade": "G06",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 1,
      "20-29": 0,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 2,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "生活指導員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 0,
      "10-19": 1,
      "20-29": 1,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 2,
      "70-79": 2,
      "80-89": 1,
      "90-100": 2
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "生活指導員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 2,
      "30-39": 0,
      "40-49": 0,
      "50-59": 1,
      "60-69": 0,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "生活指導員",
    "grade": "G03",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 2,
      "10-19": 0,
      "20-29": 2,
      "30-39": 2,
      "40-49": 0,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "生活指導員",
    "grade": "G04",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 3,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 1,
      "60-69": 0,
      "70-79": 1,
      "80-89": 2,
      "90-100": 0
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "相談員",
    "grade": "G01",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 2,
      "20-29": 1,
      "30-39": 0,
      "40-49": 1,
      "50-59": 0,
      "60-69": 1,
      "70-79": 2,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
  {
    "facility": "青葉の家",
    "occupation": "相談員",
    "grade": "G02",
    "category": "workGuidelines",
    "period": "2024年前期",
    "bands": {
      "0-9": 1,
      "10-19": 0,
      "20-29": 2,
      "30-39": 1,
      "40-49": 2,
      "50-59": 0,
      "60-69": 2,
      "70-79": 0,
      "80-89": 1,
      "90-100": 1
    },
    "total": 10
  },
];