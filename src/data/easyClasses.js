export const easyClassTemplate = {
  rank: 'S',
  name: '授業名を書く',
  category: '一般教養 / 専門 など',
  professor: '先生名を書く',
  grading: 'テスト / レポート / 発表 など',
  attendance: '緩め / 普通 / 厳しめ',
  summary: 'この授業が取りやすい理由を一言で書く',
}

// 追加したいときは、下の courses に easyClassTemplate と同じ形のデータを足します。
export const easyClassSections = [
  {
    rank: 'S',
    title: 'かなり取りやすい',
    description: 'まず候補に入れやすい授業を置くランクです。',
    courses: [
      {
        rank: 'S',
        name: 'メディア表現入門',
        category: '一般教養',
        professor: '佐野先生',
        grading: 'レポート中心',
        attendance: '緩め',
        summary: '短いレポートを積み上げる型で、試験より平常点が大きい授業です。',
      },
    ],
  },
  {
    rank: 'A',
    title: '取りやすい',
    description: '情報がそろっていれば安心して選びやすい授業です。',
    courses: [
      {
        rank: 'A',
        name: '地域文化フィールドワーク',
        category: '学部横断',
        professor: '岡本先生',
        grading: '発表 + 振り返り',
        attendance: '普通',
        summary: '提出物の形式が安定していて、全体像をつかみやすい授業です。',
      },
    ],
  },
  {
    rank: 'B',
    title: '普通',
    description: '対策すれば十分狙える授業を置くランクです。',
    courses: [
      {
        rank: 'B',
        name: 'データ活用基礎',
        category: '情報系',
        professor: '川上先生',
        grading: '小テスト中心',
        attendance: '厳しめ',
        summary: '出席は大事ですが、内容は素直で対策しやすい授業です。',
      },
    ],
  },
  {
    rank: 'C',
    title: 'やや注意',
    description: '条件次第で取りやすさが変わる授業を置くランクです。',
    courses: [],
  },
  {
    rank: 'D',
    title: '慎重に判断',
    description: '後から情報を増やすための空きランクです。',
    courses: [],
  },
]
