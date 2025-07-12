// 評価データをcriteriaとresult統合形式で
export const mockEvaluationResults = [
  {
    employeeId: "6034",
    lastName: "池田",
    firstName: "拓真",
    facility: "八幡デイ・サービスセンター",
    occupation: "管理職",
    grade: "G05",
    workGuidelinesPrimaryEvaluatorName: "",
    workGuidelinesSecondaryEvaluatorName: "",
    workGuidelinesFinalEvaluatorName: "山田 拓真",
    performanceReviewsPrimaryEvaluatorName: "",
    performanceReviewsSecondaryEvaluatorName: "",
    performanceReviewsFinalEvaluatorName: "山田 拓真",
    status: "2次考課中",
    sections: [
    {
      sectionId: "s1",
      sectionName: "主体性",
      type: "働き方の指針",
      questions: [
        { id: "q1", text: `日常業務の中で非効率や改善点を自ら発見し、具体的な改善提案を行ったかを評価します。
                    以下の点を参考に評価してください：
                    - 業務上の課題に気づいているか
                    - 改善提案を適切に上申・共有しているか
                    - 提案後にフォローアップや実行に移しているか`, score: 6, obtainedScore: 6 },
        { id: "q2", text: "日常業務の中で非効率・ムダを自ら見つけ出し、業務改善の提案や実行に積極的に取り組んだかどうか", score: 4, obtainedScore: 0 },
        { id: "q3", text: "業務の目的やゴールを明確に理解した上で、目標達成に向けて具体的な計画を立て、着実に行動したかどうか", score: 6, obtainedScore: 6 },
        { id: "q4", text: "業務の目的やゴールを明確に理解した上で、目標達成に向けて具体的な計画を立て、着実に行動したかどうか", score: 2, obtainedScore: 2 },
      ],
    },
    {
      sectionId: "s2",
      sectionName: "協調性",
      type: "働き方の指針",
      questions: [
        { id: "q5", text: "チーム内で積極的に情報共有を行った", score: 4, obtainedScore: 4 },
        { id: "q6", text: "メンバーとの信頼関係を築いた", score: 6, obtainedScore: 6 },
        { id: "q7", text: "状況に応じて柔軟に役割を担った", score: 4, obtainedScore: 0 },
        { id: "q8", text: "他者の意見を傾聴し協議を重ねた", score: 6, obtainedScore: 6 },
      ],
    },
    {
      sectionId: "s3",
      sectionName: "業務遂行",
      type: "業務考課",
      questions: [
        { id: "q9", text: "業務を正確かつ迅速に遂行した", score: 6, obtainedScore: 6 },
        { id: "q10", text: "納期を遵守して成果物を提出した", score: 6, obtainedScore: 6 },
        { id: "q11", text: "担当業務の品質を維持した", score: 4, obtainedScore: 4 },
        { id: "q12", text: "複数業務を効率的に並行処理した", score: 6, obtainedScore: 0 },
      ],
    },
    {
      sectionId: "s4",
      sectionName: "改善提案",
      type: "業務考課",
      questions: [
        { id: "q13", text: "具体的な改善案を提案した", score: 6, obtainedScore: 6 },
        { id: "q14", text: "提案の実行とフォローアップを行った", score: 4, obtainedScore: 0 },
        { id: "q15", text: "業務効率化のための仕組みを構築した", score: 6, obtainedScore: 0 },
        { id: "q16", text: "改善提案にチームを巻き込んだ", score: 4, obtainedScore: 4 },
      ],
    },
    {
  sectionId: "s5",
  sectionName: "課題解決力",
  type: "働き方の指針",
  questions: [
    { id: "q17",  text: "問題の本質を捉えて分析を行った", score: 6, obtainedScore: 6 },
    { id: "q18", text: "課題に対して代替案を複数提示した", score: 4, obtainedScore: 0 },
    { id: "q19", text: "チームで課題解決に貢献した", score: 6, obtainedScore: 6 },
    { id: "q20", text: "課題に対して冷静に対処した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s6",
  sectionName: "コミュニケーション力",
  type: "働き方の指針",
  questions: [
    { id: "q21", text: "適切なタイミングで報告・連絡・相談を行った", score: 6, obtainedScore: 6 },
    { id: "q22", text: "目的に応じた表現で説明した", score: 4, obtainedScore: 0 },
    { id: "q23", text: "相手に応じて伝え方を工夫した", score: 6, obtainedScore: 0 },
    { id: "q24", text: "意見が異なる相手にも冷静に対応した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s7",
  sectionName: "責任感",
  type: "働き方の指針",
  questions: [
    { id: "q25", text: "任された業務を最後までやり遂げた", score: 6, obtainedScore: 6 },
    { id: "q26", text: "ミスやトラブルに責任を持って対応した", score: 4, obtainedScore: 4 },
    { id: "q27", text: "期待以上の成果を出す努力をした", score: 6, obtainedScore: 0 },
    { id: "q28", text: "自己の行動に対する説明責任を果たした", score: 4, obtainedScore: 0 },
  ],
},
{
  sectionId: "s8",
  sectionName: "成長意欲",
  type: "働き方の指針",
  questions: [
    { id: "q29", text: "自己の課題を明確に認識していた", score: 4, obtainedScore: 4 },
    { id: "q30", text: "スキルアップに向けて継続的に学習した", score: 6, obtainedScore: 6 },
    { id: "q31", text: "フィードバックを前向きに受け入れた", score: 6, obtainedScore: 0 },
    { id: "q32", text: "業務改善に向けた知識を自主的に収集した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s9",
  sectionName: "柔軟性",
  type: "働き方の指針",
  questions: [
    { id: "q33", text: "状況に応じて優先順位を柔軟に見直した", score: 4, obtainedScore: 0 },
    { id: "q34", text: "新しい業務や環境に前向きに適応した", score: 6, obtainedScore: 6 },
    { id: "q35", text: "変化に対して柔軟に対応できた", score: 6, obtainedScore: 6 },
    { id: "q36", text: "他者の意見を取り入れて行動を修正した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s10",
  sectionName: "タイムマネジメント",
  type: "働き方の指針",
  questions: [
    { id: "q37", text: "納期を意識してスケジュールを立てた", score: 6, obtainedScore: 6 },
    { id: "q38", text: "突発的な業務にも計画的に対応した", score: 4, obtainedScore: 4 },
    { id: "q39", text: "時間の優先順位を明確にしていた", score: 6, obtainedScore: 0 },
    { id: "q40", text: "ムダな作業を見直して効率化を図った", score: 2, obtainedScore: 2 },
  ],
},
{
  sectionId: "s11",
  sectionName: "リーダーシップ",
  type: "業務考課",
  questions: [
    { id: "q41", text: "チームをまとめるためのビジョンを示した", score: 6, obtainedScore: 6 },
    { id: "q42", text: "メンバーの意見を尊重しつつ方向性を示した", score: 4, obtainedScore: 0 },
    { id: "q43", text: "メンバーの成長を促す支援を行った", score: 6, obtainedScore: 0 },
    { id: "q44", text: "チームの目標達成に向けて率先して行動した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s12",
  sectionName: "イノベーション",
  type: "業務考課",
  questions: [
    { id: "q45", text: "新しいアイデアを積極的に提案した", score: 6, obtainedScore: 6 },
    { id: "q46", text: "業務の枠を超えた視点で考えた", score: 4, obtainedScore: 0 },
    { id: "q47", text: "革新的な解決策を実行に移した", score: 6, obtainedScore: 0 },
    { id: "q48", text: "チーム全体でイノベーションを促進した", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s13",
  sectionName: "顧客志向",
  type: "業務考課",
  questions: [
    { id: "q49", text: "顧客のニーズを的確に把握した", score: 6, obtainedScore: 6 },
    { id: "q50", text: "顧客満足度向上に向けた取り組みを行った", score: 4, obtainedScore: 0 },
    { id: "q51", text: "顧客からのフィードバックを活用した", score: 6, obtainedScore: 0 },
    { id: "q52", text: "顧客との信頼関係を築いた", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s14",
  sectionName: "戦略的思考",
  type: "業務考課",
  questions: [
    { id: "q53", text: "長期的な視点で業務を考えた", score: 6, obtainedScore: 6 },
    { id: "q54", text: "業務の戦略を明確に策定した", score: 4, obtainedScore: 0 },
    { id: "q55", text: "リスクを適切に評価して対策を講じた", score: 6, obtainedScore: 0 },
    { id: "q56", text: "戦略に基づいて行動計画を立てた", score: 4, obtainedScore: 4 },
  ],
},
{
  sectionId: "s15",
  sectionName: "データ分析力",
  type: "業務考課",
  questions: [
    { id: "q57", text: "データを基に業務の現状を分析した", score: 6, obtainedScore: 6 },
    { id: "q58", text: "データから有益なインサイトを抽出した", score: 4, obtainedScore: 0 },
    { id: "q59", text: "データを活用して業務改善を提案した", score: 6, obtainedScore: 0 },
    { id: "q60", text: "データ分析の結果をチームに共有した", score: 4, obtainedScore: 4 },
  ],
}

  ],
  sectionScores: [
    { sectionId: "s1", totalScore: 18, obtainedScore: 14 },
    { sectionId: "s2", totalScore: 20, obtainedScore: 16 },
    { sectionId: "s3", totalScore: 22, obtainedScore: 16 },
    { sectionId: "s4", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s5", totalScore: 20, obtainedScore: 12 },
    { sectionId: "s6", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s7", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s8", totalScore: 20, obtainedScore: 14 },
    { sectionId: "s9", totalScore: 20, obtainedScore: 16 },
    { sectionId: "s10", totalScore: 20, obtainedScore: 12 },
    { sectionId: "s11", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s12", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s13", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s14", totalScore: 20, obtainedScore: 10 },
    { sectionId: "s15", totalScore: 20, obtainedScore: 10 },
  ],
  scores: {
    workGuidelines: 86, // s1 + s2
    performanceReviews: 78, // s3 + s4
    total: 83,
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