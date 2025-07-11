export const mockUsers = 
[
  {
    // 非考課者
    "employeeId": "6061",
    "employeeCode": "E11241",
    "lastName": "太田",
    "firstName": "あすか",
    "password": "password",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "看護師",
    "facility": "はちまんの風",
    "email": "kimuraakemi@example.net",
    "phone": "44-2836-6329",
    "licensesObtained": "公認栄養士, 介護福祉士",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-06-10",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2026-02-17",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉の風",
        "occupation": "ケアマネ",
        "grade": "G04",
        "period": "2020-08-05 - 2023-06-09",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "はちまんの風",
        "occupation": "看護師",
        "grade": "G02",
        "period": "2022-06-05 - 2023-06-09",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    // 施設長
    "employeeId": "6033",
    "employeeCode": "E98916",
    "lastName": "山田",
    "firstName": "拓真",
    "password": "password",
    "isAdmin": false,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "八幡デイ・サービスセンター",
    "email": "fmatsumoto@example.net",
    "phone": "070-3068-4716",
    "licensesObtained": "看護師免許, CPR資格",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2026-06-12",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "本部事務員",
        "grade": "G03",
        "period": "2018-11-10 - 2020-11-13",
        "description": "保育業務を担当"
      },
      {
        "facility": "アルテイル宮町",
        "occupation": "訪問員",
        "grade": "G03",
        "period": "2020-11-14 - 2023-11-13",
        "description": "保育業務を担当"
      },
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-02-14 - 2023-11-13",
        "description": "保育業務を担当"
      }
    ]
  },
  // 役員
  {
    "employeeId": "6076",
    "employeeCode": "E27338",
    "lastName": "遠藤",
    "firstName": "明美",
    "password": "password",
    "isAdmin": true,
    "grade": "X01",
    "occupation": "役員",
    "facility": "本部",
    "email": "satokenichi@example.org",
    "phone": "070-0211-4617",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "相談員",
        "grade": "G03",
        "period": "2022-05-31 - 2023-11-21",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉ハイツ",
        "occupation": "高齢看護師",
        "grade": "G02",
        "period": "2021-12-13 - 2023-11-21",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    // 考課者
    "employeeId": "6048",
    "employeeCode": "E94275",
    "lastName": "鈴木",
    "firstName": "くみ子",
    "password": "password",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "訪問員",
    "facility": "エクレール青葉",
    "email": "gyamashita@example.com",
    "phone": "070-3366-0002",
    "licensesObtained": "公認栄養士, 簿記",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2027-06-16",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "高齢事務員",
        "grade": "G01",
        "period": "2018-05-29 - 2020-05-28",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "つながる相談室",
        "occupation": "施設長",
        "grade": "G02",
        "period": "2020-05-29 - 2023-02-03",
        "description": "保育業務を担当"
      },
      {
        "facility": "エクレール青葉",
        "occupation": "訪問員",
        "grade": "G04",
        "period": "2021-09-18 - 2023-02-03",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6020",
    "employeeCode": "E11577",
    "lastName": "佐々木",
    "firstName": "治",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "荒井あおばこども園",
    "email": "yamadananami@example.net",
    "phone": "090-8368-7101",
    "licensesObtained": "看護師免許, CPR資格, 公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "荒井あおばこども園",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-02-01 - 2023-01-12",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6047",
    "employeeCode": "E35052",
    "lastName": "中川",
    "firstName": "直子",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "保育看護師",
    "facility": "エクレール青葉",
    "email": "tomoya29@example.net",
    "phone": "070-5979-7991",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2021-11-16 - 2023-02-14",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6049",
    "employeeCode": "E68805",
    "lastName": "西村",
    "firstName": "涼平",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "高齢事務員",
    "facility": "荒井あおばこども園",
    "email": "yuta21@example.org",
    "phone": "090-2765-5500",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "相談員",
        "grade": "G01",
        "period": "2018-05-17 - 2020-08-27",
        "description": "保育業務を担当"
      },
      {
        "facility": "アルテイル24",
        "occupation": "看護師",
        "grade": "G03",
        "period": "2020-08-28 - 2023-07-22",
        "description": "保育業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "高齢事務員",
        "grade": "G02",
        "period": "2022-01-09 - 2023-07-22",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6034",
    "employeeCode": "E24154",
    "lastName": "池田",
    "firstName": "拓真",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "八幡デイ・サービスセンター",
    "email": "kaorihashimoto@example.com",
    "phone": "090-9338-5224",
    "licensesObtained": "介護福祉士",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2025-07-16",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "施設長",
        "grade": "G01",
        "period": "2019-11-16 - 2021-12-27",
        "description": "介護業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "高齢事務員",
        "grade": "G04",
        "period": "2021-12-28 - 2023-11-10",
        "description": "介護業務を担当"
      },
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-01-16 - 2023-11-10",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6043",
    "employeeCode": "E27984",
    "lastName": "山田",
    "firstName": "篤司",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "介護員",
    "facility": "三居沢デイサービスセンター",
    "email": "yokoyamada@example.org",
    "phone": "090-5832-6738",
    "licensesObtained": "公認栄養士, 保育士資格",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "介護員",
        "grade": "G04",
        "period": "2021-11-05 - 2023-01-14",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6021",
    "employeeCode": "E92609",
    "lastName": "山下",
    "firstName": "英樹",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "三居沢デイサービスセンター",
    "email": "syamazaki@example.org",
    "phone": "74-3684-9295",
    "licensesObtained": "ケアマネージャー, 簿記",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "介護員",
        "grade": "G02",
        "period": "2018-09-26 - 2021-07-17",
        "description": "介護業務を担当"
      },
      {
        "facility": "アルテイル24",
        "occupation": "訪問員",
        "grade": "G04",
        "period": "2021-07-18 - 2023-08-19",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-01-22 - 2023-08-19",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6075",
    "employeeCode": "E19854",
    "lastName": "岡田",
    "firstName": "充",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "訪問員",
    "facility": "栗生あおばこども園",
    "email": "yukiinoue@example.net",
    "phone": "090-1316-0332",
    "licensesObtained": "保育士資格, 公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉の風",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2021-03-01 - 2023-02-17",
        "description": "介護業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "訪問員",
        "grade": "G02",
        "period": "2021-04-19 - 2023-02-17",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6031",
    "employeeCode": "E70104",
    "lastName": "木村",
    "firstName": "健一",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "青葉ハイツ",
    "email": "minorumatsumoto@example.com",
    "phone": "07-6147-9528",
    "licensesObtained": "保育士資格, 公認栄養士",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2026-08-06",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル青葉",
        "occupation": "保育士",
        "grade": "G03",
        "period": "2021-04-19 - 2023-07-11",
        "description": "保育業務を担当"
      },
      {
        "facility": "青葉ハイツ",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-08-30 - 2023-07-11",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6040",
    "employeeCode": "E97619",
    "lastName": "森",
    "firstName": "春香",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "本部事務員",
    "facility": "法人本部",
    "email": "tanakakazuya@example.org",
    "phone": "070-2993-2956",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2026-12-16",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2026-04-11",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "本部事務員",
        "grade": "G04",
        "period": "2021-11-08 - 2023-09-06",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6002",
    "employeeCode": "E24314",
    "lastName": "佐藤",
    "firstName": "加奈",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "アルテイル24",
    "email": "kito@example.com",
    "phone": "86-6495-8585",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "介護員",
        "grade": "G04",
        "period": "2021-10-30 - 2023-11-05",
        "description": "介護業務を担当"
      },
      {
        "facility": "アルテイル24",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-04-13 - 2023-11-05",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6089",
    "employeeCode": "E13231",
    "lastName": "鈴木",
    "firstName": "真綾",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "保育士",
    "facility": "フレンデル八木山",
    "email": "yumikokato@example.org",
    "phone": "080-3962-0953",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2026-10-03",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "保育看護師",
        "grade": "G02",
        "period": "2020-01-16 - 2021-11-22",
        "description": "介護業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "本部事務員",
        "grade": "G03",
        "period": "2021-11-23 - 2023-06-10",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "フレンデル八木山",
        "occupation": "保育士",
        "grade": "G02",
        "period": "2022-02-05 - 2023-06-10",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6032",
    "employeeCode": "E75482",
    "lastName": "橋本",
    "firstName": "涼平",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "青葉ハイツ",
    "email": "reiishii@example.net",
    "phone": "090-4777-9261",
    "licensesObtained": "保育士資格, 看護師免許, CPR資格",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2025-09-09",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-02-28 - 2022-12-31",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6003",
    "employeeCode": "E78230",
    "lastName": "渡辺",
    "firstName": "太郎",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "アルテイル宮町",
    "email": "kobayashinaoko@example.com",
    "phone": "71-7424-3486",
    "licensesObtained": "保育士資格",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-04-04",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル宮町",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-02-27 - 2023-06-11",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6037",
    "employeeCode": "E56961",
    "lastName": "岡田",
    "firstName": "康弘",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "本部事務員",
    "facility": "法人本部",
    "email": "yoshidasotaro@example.org",
    "phone": "070-7751-4108",
    "licensesObtained": "保育士資格, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2026-08-22",
        "reason": "業務拡張のため"
      },
      {
        "name": "公認栄養士",
        "date": "2026-12-30",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "栗生あおばこども園",
        "occupation": "施設長",
        "grade": "G02",
        "period": "2021-03-29 - 2023-10-26",
        "description": "介護業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "本部事務員",
        "grade": "G01",
        "period": "2022-01-08 - 2023-10-26",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6051",
    "employeeCode": "E89398",
    "lastName": "鈴木",
    "firstName": "篤司",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "看護師",
    "facility": "アルテイル青葉",
    "email": "miturumatsumoto@example.org",
    "phone": "10-2067-3408",
    "licensesObtained": "介護福祉士, 簿記",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-03-20",
        "reason": "業務拡張のため"
      },
      {
        "name": "公認栄養士",
        "date": "2027-01-09",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "フレンデル八木山",
        "occupation": "相談員",
        "grade": "G02",
        "period": "2022-10-03 - 2023-10-07",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "アルテイル青葉",
        "occupation": "看護師",
        "grade": "G04",
        "period": "2022-05-05 - 2023-10-07",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6019",
    "employeeCode": "E36556",
    "lastName": "高橋",
    "firstName": "くみ子",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "荒井あおばこども園",
    "email": "yokokimura@example.net",
    "phone": "070-4286-8776",
    "licensesObtained": "公認栄養士, 介護福祉士",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2027-06-26",
        "reason": "業務拡張のため"
      },
      {
        "name": "公認栄養士",
        "date": "2026-08-09",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "施設長",
        "grade": "G01",
        "period": "2019-08-26 - 2022-05-31",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "保育看護師",
        "grade": "G02",
        "period": "2022-06-01 - 2023-11-27",
        "description": "介護業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-04-24 - 2023-11-27",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6038",
    "employeeCode": "E83910",
    "lastName": "佐藤",
    "firstName": "淳",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "本部事務員",
    "facility": "法人本部",
    "email": "zyamazaki@example.org",
    "phone": "070-7844-6069",
    "licensesObtained": "看護師免許, CPR資格, ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "生活指導員",
        "grade": "G03",
        "period": "2020-09-08 - 2023-01-28",
        "description": "保育業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "本部事務員",
        "grade": "G02",
        "period": "2021-10-07 - 2023-01-28",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6015",
    "employeeCode": "E28590",
    "lastName": "鈴木",
    "firstName": "健一",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "栗生あおばこども園",
    "email": "takahashinaoko@example.org",
    "phone": "090-4230-1153",
    "licensesObtained": "保育士資格, 看護師免許, CPR資格",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "本部事務員",
        "grade": "G04",
        "period": "2021-11-03 - 2023-07-25",
        "description": "保育業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-01-14 - 2023-07-25",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6044",
    "employeeCode": "E50115",
    "lastName": "田中",
    "firstName": "舞",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "看護師",
    "facility": "栗生あおばこども園",
    "email": "jun51@example.org",
    "phone": "080-7458-6936",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-09-04",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八木山あおばこども園",
        "occupation": "ケアマネ",
        "grade": "G01",
        "period": "2020-03-06 - 2021-03-11",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "アルテイル宮町",
        "occupation": "看護師",
        "grade": "G03",
        "period": "2021-03-12 - 2023-08-05",
        "description": "保育業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "看護師",
        "grade": "G04",
        "period": "2022-01-14 - 2023-08-05",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6062",
    "employeeCode": "E40631",
    "lastName": "清水",
    "firstName": "和也",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "訪問員",
    "facility": "フレンデル八木山",
    "email": "yoichi89@example.org",
    "phone": "090-0018-8812",
    "licensesObtained": "保育士資格",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2026-05-04",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2026-12-02",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "施設長",
        "grade": "G02",
        "period": "2017-11-04 - 2020-07-16",
        "description": "介護業務を担当"
      },
      {
        "facility": "フレンデル八木山",
        "occupation": "訪問員",
        "grade": "G04",
        "period": "2020-07-17 - 2023-06-08",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "フレンデル八木山",
        "occupation": "訪問員",
        "grade": "G01",
        "period": "2022-01-31 - 2023-06-08",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6084",
    "employeeCode": "E77972",
    "lastName": "斎藤",
    "firstName": "零",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "保育看護師",
    "facility": "つながる相談室",
    "email": "minoruhayashi@example.net",
    "phone": "04-8743-2544",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-04-30",
        "reason": "業務拡張のため"
      },
      {
        "name": "看護師免許, CPR資格",
        "date": "2026-01-07",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉の風",
        "occupation": "施設長",
        "grade": "G03",
        "period": "2021-07-01 - 2023-11-26",
        "description": "介護業務を担当"
      },
      {
        "facility": "つながる相談室",
        "occupation": "保育看護師",
        "grade": "G02",
        "period": "2022-10-15 - 2023-11-26",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6097",
    "employeeCode": "E43352",
    "lastName": "中村",
    "firstName": "裕樹",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "保育士",
    "facility": "三居沢デイサービスセンター",
    "email": "fujiiminoru@example.net",
    "phone": "20-8342-2479",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "保育士",
        "grade": "G01",
        "period": "2021-09-09 - 2023-08-25",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6063",
    "employeeCode": "E32403",
    "lastName": "小川",
    "firstName": "桃子",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "高齢事務員",
    "facility": "青葉の風",
    "email": "nakamurakazuya@example.org",
    "phone": "090-4539-4446",
    "licensesObtained": "介護福祉士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉の風",
        "occupation": "高齢事務員",
        "grade": "G02",
        "period": "2021-11-23 - 2023-06-04",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6027",
    "employeeCode": "E32951",
    "lastName": "中村",
    "firstName": "稔",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "青葉の家",
    "email": "takuma94@example.com",
    "phone": "080-8779-5712",
    "licensesObtained": "保育士資格, 公認栄養士",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2026-08-19",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "施設長",
        "grade": "G04",
        "period": "2018-09-04 - 2021-01-02",
        "description": "介護業務を担当"
      },
      {
        "facility": "アルテイル宮町",
        "occupation": "本部事務員",
        "grade": "G03",
        "period": "2021-01-03 - 2023-04-23",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉の家",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-04-06 - 2023-04-23",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6088",
    "employeeCode": "E47105",
    "lastName": "伊藤",
    "firstName": "香織",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "ケアマネ",
    "facility": "八幡デイ・サービスセンター",
    "email": "maayamatsuda@example.org",
    "phone": "31-6755-4195",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2025-12-29",
        "reason": "業務拡張のため"
      },
      {
        "name": "ケアマネージャー",
        "date": "2026-12-03",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "ケアマネ",
        "grade": "G01",
        "period": "2021-11-07 - 2023-02-14",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6092",
    "employeeCode": "E75883",
    "lastName": "吉田",
    "firstName": "直人",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "相談員",
    "facility": "栗生あおばこども園",
    "email": "hiroshiito@example.com",
    "phone": "090-9696-6279",
    "licensesObtained": "保育士資格",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2027-02-10",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "生活指導員",
        "grade": "G04",
        "period": "2019-07-01 - 2022-02-08",
        "description": "保育業務を担当"
      },
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "訪問員",
        "grade": "G02",
        "period": "2022-02-09 - 2023-07-14",
        "description": "介護業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "相談員",
        "grade": "G02",
        "period": "2022-06-23 - 2023-07-14",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6050",
    "employeeCode": "E69924",
    "lastName": "小林",
    "firstName": "結衣",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "ケアマネ",
    "facility": "はちまんの風",
    "email": "tsaito@example.org",
    "phone": "070-6107-0076",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2025-07-30",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "ケアマネ",
        "grade": "G04",
        "period": "2022-03-30 - 2023-09-24",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6030",
    "employeeCode": "E43936",
    "lastName": "阿部",
    "firstName": "零",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "青葉の風",
    "email": "minoruishikawa@example.net",
    "phone": "23-5344-1253",
    "licensesObtained": "簿記, 保育士資格",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "荒井あおばこども園",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2020-04-16 - 2021-11-06",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉の風",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2021-11-07 - 2023-08-04",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉の風",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-06-05 - 2023-08-04",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6022",
    "employeeCode": "E49888",
    "lastName": "中川",
    "firstName": "翼",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "三居沢デイサービスセンター",
    "email": "iyamashita@example.com",
    "phone": "070-0391-7340",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-06-13 - 2023-09-12",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6024",
    "employeeCode": "E63901",
    "lastName": "松本",
    "firstName": "里佳",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "清流ホーム",
    "email": "hsato@example.org",
    "phone": "13-1278-0466",
    "licensesObtained": "看護師免許, CPR資格, 簿記",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "清流ホーム",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-09-24 - 2023-07-01",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6098",
    "employeeCode": "E16770",
    "lastName": "吉田",
    "firstName": "真綾",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "介護員",
    "facility": "光陽ホーム",
    "email": "znakagawa@example.org",
    "phone": "070-6416-5890",
    "licensesObtained": "簿記, 保育士資格",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "保育調理師・栄養士",
        "grade": "G01",
        "period": "2021-08-30 - 2023-02-13",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2021-02-22 - 2023-02-13",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6082",
    "employeeCode": "E20894",
    "lastName": "吉田",
    "firstName": "直人",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "生活指導員",
    "facility": "エクレール青葉",
    "email": "yasuhiroito@example.net",
    "phone": "080-9359-9340",
    "licensesObtained": "ケアマネージャー, 簿記",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2027-06-25",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "施設長",
        "grade": "G03",
        "period": "2019-04-01 - 2021-12-05",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉の家",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2021-12-06 - 2023-01-08",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "エクレール青葉",
        "occupation": "生活指導員",
        "grade": "G01",
        "period": "2021-06-14 - 2023-01-08",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6006",
    "employeeCode": "E22911",
    "lastName": "藤井",
    "firstName": "知実",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "アルテイル青葉",
    "email": "yamamotoyoichi@example.net",
    "phone": "080-4291-6759",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-01-20",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉の家",
        "occupation": "ケアマネ",
        "grade": "G02",
        "period": "2021-08-21 - 2023-04-16",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "アルテイル青葉",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-12-26 - 2023-04-16",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6073",
    "employeeCode": "E22360",
    "lastName": "藤原",
    "firstName": "知実",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "高齢事務員",
    "facility": "荒井あおばこども園",
    "email": "suzukiatsushi@example.net",
    "phone": "090-4428-4222",
    "licensesObtained": "介護福祉士",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2026-09-02",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2026-06-03",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "看護師",
        "grade": "G02",
        "period": "2018-03-22 - 2020-06-13",
        "description": "保育業務を担当"
      },
      {
        "facility": "アルテイル24",
        "occupation": "高齢事務員",
        "grade": "G01",
        "period": "2020-06-14 - 2023-02-20",
        "description": "介護業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "高齢事務員",
        "grade": "G01",
        "period": "2021-08-08 - 2023-02-20",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6065",
    "employeeCode": "E78444",
    "lastName": "小林",
    "firstName": "花子",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "保育士",
    "facility": "つながる相談室",
    "email": "hayashiryosuke@example.net",
    "phone": "070-4673-0376",
    "licensesObtained": "簿記, 公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2022-03-31 - 2023-07-16",
        "description": "保育業務を担当"
      },
      {
        "facility": "つながる相談室",
        "occupation": "保育士",
        "grade": "G04",
        "period": "2021-11-30 - 2023-07-16",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6091",
    "employeeCode": "E38261",
    "lastName": "伊藤",
    "firstName": "裕太",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "訪問員",
    "facility": "八幡デイ・サービスセンター",
    "email": "tomoyakondo@example.net",
    "phone": "070-1220-5167",
    "licensesObtained": "保育士資格",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2027-07-05",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2026-09-13",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "高齢看護師",
        "grade": "G04",
        "period": "2020-01-28 - 2021-12-30",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "訪問員",
        "grade": "G01",
        "period": "2021-12-31 - 2023-02-27",
        "description": "介護業務を担当"
      },
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "訪問員",
        "grade": "G01",
        "period": "2021-10-15 - 2023-02-27",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6025",
    "employeeCode": "E72573",
    "lastName": "高橋",
    "firstName": "智也",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "青葉こども園",
    "email": "takuma02@example.com",
    "phone": "080-4926-1852",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2027-02-21",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2026-10-20",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-12-24 - 2023-07-30",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6078",
    "employeeCode": "E92734",
    "lastName": "小林",
    "firstName": "和也",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "介護員",
    "facility": "清流ホーム",
    "email": "miturusuzuki@example.net",
    "phone": "070-7885-0097",
    "licensesObtained": "ケアマネージャー, 保育士資格",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-01-28",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2027-05-05",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八木山あおばこども園",
        "occupation": "保育士",
        "grade": "G01",
        "period": "2017-11-29 - 2020-09-17",
        "description": "保育業務を担当"
      },
      {
        "facility": "アルテイル青葉",
        "occupation": "施設長",
        "grade": "G02",
        "period": "2020-09-18 - 2023-01-27",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "介護員",
        "grade": "G03",
        "period": "2021-08-08 - 2023-01-27",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6008",
    "employeeCode": "E94088",
    "lastName": "小林",
    "firstName": "晃",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "エクレール青葉",
    "email": "yamamotokazuya@example.com",
    "phone": "48-6007-1456",
    "licensesObtained": "保育士資格",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2027-01-23",
        "reason": "業務拡張のため"
      },
      {
        "name": "公認栄養士",
        "date": "2027-05-04",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "本部事務員",
        "grade": "G04",
        "period": "2018-08-22 - 2021-08-17",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉こども園",
        "occupation": "保育看護師",
        "grade": "G02",
        "period": "2021-08-18 - 2023-10-04",
        "description": "保育業務を担当"
      },
      {
        "facility": "エクレール青葉",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-04-03 - 2023-10-04",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6053",
    "employeeCode": "E43336",
    "lastName": "佐藤",
    "firstName": "香織",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "訪問員",
    "facility": "三居沢デイサービスセンター",
    "email": "hasegawatsubasa@example.net",
    "phone": "15-9792-5919",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "清流ホーム",
        "occupation": "ケアマネ",
        "grade": "G02",
        "period": "2019-04-25 - 2021-08-28",
        "description": "保育業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2021-08-29 - 2023-06-26",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "訪問員",
        "grade": "G01",
        "period": "2021-11-29 - 2023-06-26",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6017",
    "employeeCode": "E93284",
    "lastName": "長谷川",
    "firstName": "京助",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "光陽ホーム",
    "email": "shotamori@example.net",
    "phone": "29-2824-3496",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-09-09",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2026-08-08",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "フレンデル八木山",
        "occupation": "ケアマネ",
        "grade": "G04",
        "period": "2021-09-15 - 2023-10-12",
        "description": "保育業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-03-16 - 2023-10-12",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6005",
    "employeeCode": "E34371",
    "lastName": "加藤",
    "firstName": "学",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "アルテイル青葉",
    "email": "okamotosatomi@example.org",
    "phone": "080-3774-8131",
    "licensesObtained": "看護師免許, CPR資格, 保育士資格",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-05-01",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2026-06-22",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル青葉",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-08-27 - 2023-03-06",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6100",
    "employeeCode": "E29259",
    "lastName": "林",
    "firstName": "淳",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "保育士",
    "facility": "清流ホーム",
    "email": "umatsuda@example.net",
    "phone": "080-4028-5296",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-07-03",
        "reason": "業務拡張のため"
      },
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-06-24",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2020-07-05 - 2023-03-15",
        "description": "保育業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "保育士",
        "grade": "G03",
        "period": "2021-11-19 - 2023-03-15",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6081",
    "employeeCode": "E30292",
    "lastName": "太田",
    "firstName": "英樹",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "高齢看護師",
    "facility": "青葉の家",
    "email": "yasuhiro80@example.net",
    "phone": "080-7325-4354",
    "licensesObtained": "保育士資格, 公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "施設長",
        "grade": "G03",
        "period": "2020-06-22 - 2021-12-11",
        "description": "保育業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "施設長",
        "grade": "G04",
        "period": "2021-12-12 - 2023-03-22",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉の家",
        "occupation": "高齢看護師",
        "grade": "G01",
        "period": "2021-04-23 - 2023-03-22",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6014",
    "employeeCode": "E61144",
    "lastName": "松田",
    "firstName": "学",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "フレンデル八木山",
    "email": "akirahashimoto@example.org",
    "phone": "080-4757-5714",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2021-03-11 - 2023-01-27",
        "description": "保育業務を担当"
      },
      {
        "facility": "フレンデル八木山",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-05-08 - 2023-01-27",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6045",
    "employeeCode": "E89308",
    "lastName": "高橋",
    "firstName": "舞",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "訪問員",
    "facility": "つながる相談室",
    "email": "kazuyatakahashi@example.org",
    "phone": "090-5686-1849",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉の風",
        "occupation": "管理職",
        "grade": "G02",
        "period": "2021-08-18 - 2023-11-04",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "つながる相談室",
        "occupation": "訪問員",
        "grade": "G02",
        "period": "2022-01-22 - 2023-11-04",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6071",
    "employeeCode": "E35267",
    "lastName": "山口",
    "firstName": "直人",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "ケアマネ",
    "facility": "清流ホーム",
    "email": "haruka41@example.org",
    "phone": "090-8570-9675",
    "licensesObtained": "看護師免許, CPR資格",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉の家",
        "occupation": "本部事務員",
        "grade": "G03",
        "period": "2020-07-28 - 2021-08-07",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "保育看護師",
        "grade": "G04",
        "period": "2021-08-08 - 2023-10-24",
        "description": "介護業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "ケアマネ",
        "grade": "G03",
        "period": "2022-04-07 - 2023-10-24",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6074",
    "employeeCode": "E39539",
    "lastName": "吉田",
    "firstName": "あすか",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "訪問員",
    "facility": "三居沢デイサービスセンター",
    "email": "nishimurachiyo@example.com",
    "phone": "37-7048-2775",
    "licensesObtained": "看護師免許, CPR資格, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-01-09",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2026-05-31",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "保育看護師",
        "grade": "G01",
        "period": "2018-03-02 - 2020-12-03",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "八木山あおばこども園",
        "occupation": "生活指導員",
        "grade": "G04",
        "period": "2020-12-04 - 2023-06-02",
        "description": "介護業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "訪問員",
        "grade": "G02",
        "period": "2021-09-17 - 2023-06-02",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6013",
    "employeeCode": "E29179",
    "lastName": "鈴木",
    "firstName": "あすか",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "フレンデル八木山",
    "email": "vsaito@example.com",
    "phone": "070-6657-3275",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-10-16",
        "reason": "業務拡張のため"
      },
      {
        "name": "公認栄養士",
        "date": "2027-01-26",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "栗生あおばこども園",
        "occupation": "施設長",
        "grade": "G01",
        "period": "2020-11-01 - 2023-05-22",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "フレンデル八木山",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-05-01 - 2023-05-22",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6011",
    "employeeCode": "E84561",
    "lastName": "伊藤",
    "firstName": "幹",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "はちまんの風",
    "email": "naokitakahashi@example.com",
    "phone": "070-3437-4031",
    "licensesObtained": "簿記, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2027-01-02",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2025-09-03",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-09-12 - 2023-04-05",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6064",
    "employeeCode": "E76359",
    "lastName": "前田",
    "firstName": "稔",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "介護員",
    "facility": "アルテイル宮町",
    "email": "itosatomi@example.com",
    "phone": "080-8030-2344",
    "licensesObtained": "公認栄養士, 保育士資格",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-01-05",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "看護師",
        "grade": "G02",
        "period": "2018-09-13 - 2021-06-08",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "本部事務員",
        "grade": "G04",
        "period": "2021-06-09 - 2023-09-08",
        "description": "介護業務を担当"
      },
      {
        "facility": "アルテイル宮町",
        "occupation": "介護員",
        "grade": "G04",
        "period": "2021-12-29 - 2023-09-08",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6096",
    "employeeCode": "E74192",
    "lastName": "西村",
    "firstName": "桃子",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "相談員",
    "facility": "三居沢デイサービスセンター",
    "email": "gsaito@example.net",
    "phone": "090-6436-6508",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-04-11",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "相談員",
        "grade": "G03",
        "period": "2021-11-03 - 2023-06-20",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6068",
    "employeeCode": "E91088",
    "lastName": "渡辺",
    "firstName": "京助",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "保育士",
    "facility": "光陽ホーム",
    "email": "ishikawayuki@example.net",
    "phone": "080-8845-3622",
    "licensesObtained": "公認栄養士, 介護福祉士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "保育士",
        "grade": "G04",
        "period": "2022-02-09 - 2023-07-15",
        "description": "介護業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "保育士",
        "grade": "G02",
        "period": "2022-05-20 - 2023-07-15",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6087",
    "employeeCode": "E18862",
    "lastName": "中島",
    "firstName": "和也",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "高齢事務員",
    "facility": "八幡デイ・サービスセンター",
    "email": "itomituru@example.org",
    "phone": "080-5185-4218",
    "licensesObtained": "介護福祉士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "八幡デイ・サービスセンター",
        "occupation": "高齢事務員",
        "grade": "G03",
        "period": "2021-11-28 - 2023-07-14",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6055",
    "employeeCode": "E20469",
    "lastName": "田中",
    "firstName": "裕太",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "保育士",
    "facility": "光陽ホーム",
    "email": "nishimurakazuya@example.net",
    "phone": "26-7362-0462",
    "licensesObtained": "介護福祉士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "荒井あおばこども園",
        "occupation": "高齢事務員",
        "grade": "G03",
        "period": "2017-10-25 - 2020-10-23",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "保育調理師・栄養士",
        "grade": "G01",
        "period": "2020-10-24 - 2023-07-03",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "保育士",
        "grade": "G02",
        "period": "2021-10-17 - 2023-07-03",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6083",
    "employeeCode": "E90671",
    "lastName": "山口",
    "firstName": "裕太",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "訪問員",
    "facility": "荒井あおばこども園",
    "email": "sayuri27@example.net",
    "phone": "070-4003-7482",
    "licensesObtained": "看護師免許, CPR資格, ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2021-01-28 - 2022-02-06",
        "description": "介護業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "保育看護師",
        "grade": "G01",
        "period": "2022-02-07 - 2023-11-29",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "訪問員",
        "grade": "G01",
        "period": "2022-02-28 - 2023-11-29",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6029",
    "employeeCode": "E94429",
    "lastName": "山崎",
    "firstName": "聡太郎",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "青葉の風",
    "email": "satomi31@example.com",
    "phone": "070-8806-0631",
    "licensesObtained": "介護福祉士, 簿記",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-07-30",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2027-06-04",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "介護員",
        "grade": "G04",
        "period": "2020-04-06 - 2023-02-11",
        "description": "保育業務を担当"
      },
      {
        "facility": "青葉の風",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-03-07 - 2023-02-11",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6095",
    "employeeCode": "E97151",
    "lastName": "小林",
    "firstName": "幹",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "介護員",
    "facility": "栗生あおばこども園",
    "email": "yamamotomikako@example.org",
    "phone": "090-7265-7961",
    "licensesObtained": "簿記",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-01-06",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "栗生あおばこども園",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2021-11-30 - 2023-02-06",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6001",
    "employeeCode": "E22423",
    "lastName": "藤原",
    "firstName": "美加子",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "アルテイル24",
    "email": "ryosukeogawa@example.org",
    "phone": "070-3061-6655",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2020-09-19 - 2023-06-26",
        "description": "介護業務を担当"
      },
      {
        "facility": "アルテイル24",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-12-22 - 2023-06-26",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6059",
    "employeeCode": "E67692",
    "lastName": "鈴木",
    "firstName": "晃",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "訪問員",
    "facility": "青葉の風",
    "email": "satomi68@example.com",
    "phone": "59-8131-4525",
    "licensesObtained": "看護師免許, CPR資格, 介護福祉士",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2025-12-14",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "施設長",
        "grade": "G01",
        "period": "2020-02-03 - 2021-11-26",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉の風",
        "occupation": "ケアマネ",
        "grade": "G04",
        "period": "2021-11-27 - 2023-06-22",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉の風",
        "occupation": "訪問員",
        "grade": "G03",
        "period": "2021-11-29 - 2023-06-22",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6060",
    "employeeCode": "E51159",
    "lastName": "坂本",
    "firstName": "智也",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "看護師",
    "facility": "荒井あおばこども園",
    "email": "yuta95@example.com",
    "phone": "22-9343-3706",
    "licensesObtained": "介護福祉士, 看護師免許, CPR資格",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2025-12-26",
        "reason": "業務拡張のため"
      },
      {
        "name": "ケアマネージャー",
        "date": "2027-06-30",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "荒井あおばこども園",
        "occupation": "相談員",
        "grade": "G04",
        "period": "2021-05-13 - 2023-02-28",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "看護師",
        "grade": "G03",
        "period": "2021-10-22 - 2023-02-28",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6004",
    "employeeCode": "E88537",
    "lastName": "清水",
    "firstName": "春香",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "アルテイル宮町",
    "email": "pmatsumoto@example.net",
    "phone": "090-5993-4997",
    "licensesObtained": "ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "看護師",
        "grade": "G04",
        "period": "2021-05-07 - 2023-09-12",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "アルテイル宮町",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-01-31 - 2023-09-12",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6054",
    "employeeCode": "E44862",
    "lastName": "松本",
    "firstName": "桃子",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "ケアマネ",
    "facility": "青葉ハイツ",
    "email": "ikedataichi@example.com",
    "phone": "080-2583-0214",
    "licensesObtained": "保育士資格, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2026-09-19",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "ケアマネ",
        "grade": "G04",
        "period": "2021-08-18 - 2023-04-20",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6035",
    "employeeCode": "E41907",
    "lastName": "佐藤",
    "firstName": "知実",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "八木山あおばこども園",
    "email": "yamaguchinaoto@example.net",
    "phone": "18-1070-8627",
    "licensesObtained": "介護福祉士, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2025-07-21",
        "reason": "業務拡張のため"
      },
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-02-16",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "看護師",
        "grade": "G02",
        "period": "2019-04-12 - 2020-07-20",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "管理職",
        "grade": "G04",
        "period": "2020-07-21 - 2023-01-15",
        "description": "介護業務を担当"
      },
      {
        "facility": "八木山あおばこども園",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-11-09 - 2023-01-15",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6039",
    "employeeCode": "E56004",
    "lastName": "斉藤",
    "firstName": "修平",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "本部事務員",
    "facility": "法人本部",
    "email": "fujitaminoru@example.com",
    "phone": "43-6228-9158",
    "licensesObtained": "簿記, 公認栄養士",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "アルテイル宮町",
        "occupation": "介護員",
        "grade": "G02",
        "period": "2020-03-24 - 2021-07-11",
        "description": "保育業務を担当"
      },
      {
        "facility": "栗生あおばこども園",
        "occupation": "生活指導員",
        "grade": "G03",
        "period": "2021-07-12 - 2023-05-15",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "本部事務員",
        "grade": "G01",
        "period": "2022-03-24 - 2023-05-15",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6007",
    "employeeCode": "E83730",
    "lastName": "福田",
    "firstName": "亮介",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "エクレール青葉",
    "email": "osato@example.net",
    "phone": "29-1927-8740",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "看護師免許, CPR資格",
        "date": "2027-02-19",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2025-10-18",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "相談員",
        "grade": "G03",
        "period": "2021-08-18 - 2023-01-04",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "エクレール青葉",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-01-23 - 2023-01-04",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6090",
    "employeeCode": "E76933",
    "lastName": "山田",
    "firstName": "千代",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "介護員",
    "facility": "清流ホーム",
    "email": "fyoshida@example.net",
    "phone": "44-2674-9345",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-02-07",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "清流ホーム",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2021-07-25 - 2023-06-17",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6042",
    "employeeCode": "E98837",
    "lastName": "松本",
    "firstName": "学",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "介護員",
    "facility": "つながる相談室",
    "email": "gototomoya@example.org",
    "phone": "070-4112-8139",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2025-11-14",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2027-05-08",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2022-01-02 - 2023-05-21",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6079",
    "employeeCode": "E65268",
    "lastName": "吉田",
    "firstName": "真綾",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "保育調理師・栄養士",
    "facility": "アルテイル24",
    "email": "gtakahashi@example.com",
    "phone": "070-7980-9378",
    "licensesObtained": "簿記",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2025-09-24",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2026-12-16",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "保育調理師・栄養士",
        "grade": "G01",
        "period": "2021-07-23 - 2023-05-14",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6072",
    "employeeCode": "E49238",
    "lastName": "鈴木",
    "firstName": "翼",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "生活指導員",
    "facility": "青葉ハイツ",
    "email": "pwatanabe@example.net",
    "phone": "080-7022-2808",
    "licensesObtained": "看護師免許, CPR資格, ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "青葉の家",
        "occupation": "保育士",
        "grade": "G04",
        "period": "2020-04-09 - 2021-05-21",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "保育調理師・栄養士",
        "grade": "G02",
        "period": "2021-05-22 - 2023-07-09",
        "description": "介護業務を担当"
      },
      {
        "facility": "青葉ハイツ",
        "occupation": "生活指導員",
        "grade": "G02",
        "period": "2022-02-14 - 2023-07-09",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6018",
    "employeeCode": "E55338",
    "lastName": "伊藤",
    "firstName": "智也",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "光陽ホーム",
    "email": "yasuhirowatanabe@example.com",
    "phone": "070-3196-1193",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2026-05-09",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2026-12-14",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八木山あおばこども園",
        "occupation": "介護員",
        "grade": "G03",
        "period": "2021-01-18 - 2023-10-10",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-11-16 - 2023-10-10",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6052",
    "employeeCode": "E74351",
    "lastName": "佐藤",
    "firstName": "亮介",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "看護師",
    "facility": "荒井あおばこども園",
    "email": "yoichiishikawa@example.net",
    "phone": "080-6265-4615",
    "licensesObtained": "看護師免許, CPR資格",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2027-02-11",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2020-05-23 - 2021-11-20",
        "description": "保育業務を担当"
      },
      {
        "facility": "アルテイル青葉",
        "occupation": "介護員",
        "grade": "G03",
        "period": "2021-11-21 - 2023-07-25",
        "description": "介護業務を担当"
      },
      {
        "facility": "荒井あおばこども園",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2022-02-25 - 2023-07-25",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6080",
    "employeeCode": "E95385",
    "lastName": "池田",
    "firstName": "あすか",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "訪問員",
    "facility": "八木山あおばこども園",
    "email": "lyamada@example.net",
    "phone": "24-8167-4855",
    "licensesObtained": "看護師免許, CPR資格",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2027-02-15",
        "reason": "業務拡張のため"
      },
      {
        "name": "ケアマネージャー",
        "date": "2025-11-02",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "介護員",
        "grade": "G03",
        "period": "2018-10-22 - 2021-04-23",
        "description": "保育業務を担当"
      },
      {
        "facility": "エクレール青葉",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2021-04-24 - 2023-05-31",
        "description": "保育業務を担当"
      },
      {
        "facility": "八木山あおばこども園",
        "occupation": "訪問員",
        "grade": "G04",
        "period": "2022-04-22 - 2023-05-31",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6036",
    "employeeCode": "E90807",
    "lastName": "佐々木",
    "firstName": "直子",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "八木山あおばこども園",
    "email": "junhasegawa@example.net",
    "phone": "070-0345-0256",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-06-13",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "八木山あおばこども園",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-03-28 - 2023-03-14",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6067",
    "employeeCode": "E85230",
    "lastName": "西村",
    "firstName": "知実",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "保育看護師",
    "facility": "青葉こども園",
    "email": "sayuri86@example.org",
    "phone": "090-7420-5158",
    "licensesObtained": "簿記, 介護福祉士",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2027-01-09",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2026-10-17",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2020-08-08 - 2023-06-20",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉こども園",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2021-07-22 - 2023-06-20",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6069",
    "employeeCode": "E66642",
    "lastName": "鈴木",
    "firstName": "桃子",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "生活指導員",
    "facility": "光陽ホーム",
    "email": "maaya41@example.com",
    "phone": "080-4561-6726",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "生活指導員",
        "grade": "G03",
        "period": "2022-05-18 - 2023-11-27",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6041",
    "employeeCode": "E18398",
    "lastName": "佐々木",
    "firstName": "花子",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "本部事務員",
    "facility": "法人本部",
    "email": "hanako19@example.net",
    "phone": "090-9665-4887",
    "licensesObtained": "保育士資格, ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "法人本部",
        "occupation": "本部事務員",
        "grade": "G02",
        "period": "2022-05-13 - 2023-10-04",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6058",
    "employeeCode": "E29098",
    "lastName": "木村",
    "firstName": "花子",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "保育士",
    "facility": "八木山あおばこども園",
    "email": "fujitahiroshi@example.org",
    "phone": "090-7024-2299",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-04-21",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "管理職",
        "grade": "G02",
        "period": "2020-05-09 - 2023-01-04",
        "description": "介護業務を担当"
      },
      {
        "facility": "八木山あおばこども園",
        "occupation": "保育士",
        "grade": "G01",
        "period": "2021-11-15 - 2023-01-04",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6028",
    "employeeCode": "E87252",
    "lastName": "鈴木",
    "firstName": "直人",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "青葉の家",
    "email": "kobayashitsubasa@example.com",
    "phone": "090-3073-2214",
    "licensesObtained": "簿記",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "看護師",
        "grade": "G01",
        "period": "2019-03-22 - 2020-12-04",
        "description": "介護業務を担当"
      },
      {
        "facility": "法人本部",
        "occupation": "高齢看護師",
        "grade": "G03",
        "period": "2020-12-05 - 2023-04-20",
        "description": "保育業務を担当"
      },
      {
        "facility": "青葉の家",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-07-11 - 2023-04-20",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6056",
    "employeeCode": "E32561",
    "lastName": "山田",
    "firstName": "陽子",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "相談員",
    "facility": "フレンデル八木山",
    "email": "ntakahashi@example.org",
    "phone": "090-1841-8679",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2025-12-15",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2025-12-08",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "フレンデル八木山",
        "occupation": "相談員",
        "grade": "G01",
        "period": "2022-01-20 - 2023-11-03",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6057",
    "employeeCode": "E13683",
    "lastName": "石川",
    "firstName": "直子",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "保育看護師",
    "facility": "光陽ホーム",
    "email": "ayamaguchi@example.com",
    "phone": "080-4558-5798",
    "licensesObtained": "公認栄養士",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2025-08-23",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "栗生あおばこども園",
        "occupation": "保育士",
        "grade": "G01",
        "period": "2021-05-12 - 2023-07-08",
        "description": "介護業務を担当"
      },
      {
        "facility": "光陽ホーム",
        "occupation": "保育看護師",
        "grade": "G03",
        "period": "2022-04-06 - 2023-07-08",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6026",
    "employeeCode": "E98865",
    "lastName": "中村",
    "firstName": "翔太",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "青葉こども園",
    "email": "sota@example.org",
    "phone": "070-3155-3553",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "エクレール青葉",
        "occupation": "高齢事務員",
        "grade": "G03",
        "period": "2018-11-14 - 2021-11-06",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉こども園",
        "occupation": "訪問員",
        "grade": "G04",
        "period": "2021-11-07 - 2023-02-27",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉こども園",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-10-11 - 2023-02-27",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6010",
    "employeeCode": "E98710",
    "lastName": "渡辺",
    "firstName": "英樹",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "つながる相談室",
    "email": "xkobayashi@example.org",
    "phone": "070-4179-2727",
    "licensesObtained": "看護師免許, CPR資格, 保育士資格",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2027-02-14",
        "reason": "業務拡張のため"
      },
      {
        "name": "保育士資格",
        "date": "2027-07-04",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-05-16 - 2023-10-06",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6016",
    "employeeCode": "E51619",
    "lastName": "小林",
    "firstName": "京助",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "栗生あおばこども園",
    "email": "akira64@example.com",
    "phone": "090-7215-4585",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "栗生あおばこども園",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2021-08-22 - 2023-08-21",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6099",
    "employeeCode": "E58411",
    "lastName": "山田",
    "firstName": "治",
    "isAdmin": false,
    "grade": "G02",
    "occupation": "保育士",
    "facility": "光陽ホーム",
    "email": "chiyo92@example.net",
    "phone": "070-3699-2902",
    "licensesObtained": "保育士資格, 公認栄養士",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2025-10-30",
        "reason": "業務拡張のため"
      },
      {
        "name": "介護福祉士",
        "date": "2027-02-10",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "保育士",
        "grade": "G02",
        "period": "2021-09-18 - 2023-06-14",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6023",
    "employeeCode": "E43610",
    "lastName": "松本",
    "firstName": "翔太",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "清流ホーム",
    "email": "nishimurakumiko@example.com",
    "phone": "080-4191-1277",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "ケアマネージャー",
        "date": "2026-01-24",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2025-12-09",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "清流ホーム",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2022-06-25 - 2023-10-11",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6046",
    "employeeCode": "E95301",
    "lastName": "佐々木",
    "firstName": "智也",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "保育調理師・栄養士",
    "facility": "青葉こども園",
    "email": "osamu10@example.org",
    "phone": "090-6297-4360",
    "licensesObtained": "ケアマネージャー",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-01-21",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "保育調理師・栄養士",
        "grade": "G04",
        "period": "2022-04-15 - 2023-05-05",
        "description": "事務・総務業務を担当"
      }
    ]
  },
  {
    "employeeId": "6009",
    "employeeCode": "E47506",
    "lastName": "渡辺",
    "firstName": "康弘",
    "isAdmin": true,
    "grade": "G06",
    "occupation": "施設長",
    "facility": "つながる相談室",
    "email": "maedakumiko@example.net",
    "phone": "070-9917-3721",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "フレンデル八木山",
        "occupation": "ケアマネ",
        "grade": "G01",
        "period": "2019-12-23 - 2021-08-06",
        "description": "介護業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "管理職",
        "grade": "G02",
        "period": "2021-08-07 - 2023-03-09",
        "description": "保育業務を担当"
      },
      {
        "facility": "つながる相談室",
        "occupation": "施設長",
        "grade": "G06",
        "period": "2021-03-14 - 2023-03-09",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6012",
    "employeeCode": "E41561",
    "lastName": "佐藤",
    "firstName": "明美",
    "isAdmin": false,
    "grade": "G05",
    "occupation": "管理職",
    "facility": "はちまんの風",
    "email": "wmatsumoto@example.org",
    "phone": "080-1765-7203",
    "licensesObtained": "",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "はちまんの風",
        "occupation": "管理職",
        "grade": "G05",
        "period": "2022-08-31 - 2023-10-05",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6085",
    "employeeCode": "E97939",
    "lastName": "佐藤",
    "firstName": "修平",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "看護師",
    "facility": "アルテイル青葉",
    "email": "watanabetsubasa@example.org",
    "phone": "070-4290-7649",
    "licensesObtained": "ケアマネージャー",
    "licensesFuture": [
      {
        "name": "公認栄養士",
        "date": "2026-07-15",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2026-03-05",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル青葉",
        "occupation": "高齢事務員",
        "grade": "G01",
        "period": "2020-07-16 - 2021-07-21",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "青葉の家",
        "occupation": "ケアマネ",
        "grade": "G02",
        "period": "2021-07-22 - 2023-03-30",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "アルテイル青葉",
        "occupation": "看護師",
        "grade": "G03",
        "period": "2022-01-30 - 2023-03-30",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6086",
    "employeeCode": "E54697",
    "lastName": "橋本",
    "firstName": "舞",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "訪問員",
    "facility": "光陽ホーム",
    "email": "ryoheisasaki@example.net",
    "phone": "080-1661-3162",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "介護福祉士",
        "date": "2025-12-17",
        "reason": "業務拡張のため"
      },
      {
        "name": "ケアマネージャー",
        "date": "2027-01-06",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "光陽ホーム",
        "occupation": "訪問員",
        "grade": "G03",
        "period": "2021-08-24 - 2022-12-31",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6070",
    "employeeCode": "E64035",
    "lastName": "鈴木",
    "firstName": "康弘",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "高齢事務員",
    "facility": "青葉ハイツ",
    "email": "rikamaeda@example.com",
    "phone": "080-1310-3800",
    "licensesObtained": "",
    "licensesFuture": [
      {
        "name": "保育士資格",
        "date": "2027-05-25",
        "reason": "業務拡張のため"
      },
      {
        "name": "簿記",
        "date": "2027-02-26",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉ハイツ",
        "occupation": "高齢事務員",
        "grade": "G01",
        "period": "2021-04-12 - 2023-03-10",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6093",
    "employeeCode": "E28464",
    "lastName": "石井",
    "firstName": "康弘",
    "isAdmin": false,
    "grade": "G03",
    "occupation": "保育調理師・栄養士",
    "facility": "つながる相談室",
    "email": "lkato@example.com",
    "phone": "34-6557-4344",
    "licensesObtained": "公認栄養士, 保育士資格",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2026-08-25",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "つながる相談室",
        "occupation": "保育調理師・栄養士",
        "grade": "G03",
        "period": "2021-11-06 - 2023-08-20",
        "description": "介護業務を担当"
      }
    ]
  },
  {
    "employeeId": "6066",
    "employeeCode": "E48365",
    "lastName": "鈴木",
    "firstName": "康弘",
    "isAdmin": false,
    "grade": "G04",
    "occupation": "高齢看護師",
    "facility": "三居沢デイサービスセンター",
    "email": "akiramiura@example.com",
    "phone": "070-7186-4767",
    "licensesObtained": "介護福祉士, 保育士資格",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2027-03-02",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "青葉こども園",
        "occupation": "高齢看護師",
        "grade": "G01",
        "period": "2021-02-27 - 2023-08-03",
        "description": "保育業務を担当"
      },
      {
        "facility": "三居沢デイサービスセンター",
        "occupation": "高齢看護師",
        "grade": "G04",
        "period": "2021-11-05 - 2023-08-03",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6094",
    "employeeCode": "E50173",
    "lastName": "加藤",
    "firstName": "康弘",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "生活指導員",
    "facility": "清流ホーム",
    "email": "ryosuke35@example.com",
    "phone": "090-3212-6713",
    "licensesObtained": "看護師免許, CPR資格, ケアマネージャー",
    "licensesFuture": [
      {
        "name": "簿記",
        "date": "2025-10-24",
        "reason": "業務拡張のため"
      }
    ],
    "workHistory": [
      {
        "facility": "アルテイル宮町",
        "occupation": "ケアマネ",
        "grade": "G02",
        "period": "2021-07-20 - 2023-06-04",
        "description": "事務・総務業務を担当"
      },
      {
        "facility": "清流ホーム",
        "occupation": "生活指導員",
        "grade": "G01",
        "period": "2022-01-18 - 2023-06-04",
        "description": "保育業務を担当"
      }
    ]
  },
  {
    "employeeId": "6077",
    "employeeCode": "E32236",
    "lastName": "松本",
    "firstName": "美加子",
    "isAdmin": false,
    "grade": "G01",
    "occupation": "介護員",
    "facility": "アルテイル24",
    "email": "taro64@example.org",
    "phone": "80-7571-8684",
    "licensesObtained": "保育士資格, ケアマネージャー",
    "licensesFuture": [],
    "workHistory": [
      {
        "facility": "アルテイル24",
        "occupation": "介護員",
        "grade": "G01",
        "period": "2022-08-17 - 2023-08-19",
        "description": "事務・総務業務を担当"
      }
    ]
  }
]