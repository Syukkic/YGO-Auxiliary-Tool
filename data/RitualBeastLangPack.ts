export interface RitualBeastTranslation {
  title: string;
  reset: string;
  monsters: string[];
}

export const translations: Record<string, RitualBeastTranslation> = {
  "繁體中文": {
    title: "靈獸特召記錄",
    reset: "重置",
    monsters: [
      "企鵝（獸）",
      "川豚（獸）",
      "新蕾拉（人獸）",
      "星龍",
      "火狮（獸）",
      "老蕾拉（人）",
      "薇茵達（人獸）",
      "長老（人）",
      "雯（人）",
      "雷鹰（獸）",
    ],
  },
  "简体中文": {
    title: "灵兽特召记录",
    reset: "重置",
    monsters: [
      "企鹅（兽）",
      "川豚（兽）",
      "新蕾拉（人兽）",
      "星龙",
      "火狮（兽）",
      "老蕾拉（人）",
      "薇茵达（人兽）",
      "长老（人）",
      "雯（人）",
      "雷鹰（兽）",
    ],
  },
  English: {
    title: "Ritual Beast Special Summon Tracker",
    reset: "Reset",
    monsters: [
      "Penguin (beast)",
      "Pettlephin (beast)",
      "New Lara (tamer-beast)",
      "Ulti-Nochiudrago",
      "Apelio (beast)",
      "Old Lara (tamer)",
      "Winda (tamer-Beast)",
      "Elder (tamer)",
      "Wen (tamer)",
      "Cannahawk (beast)",
    ],
  },
  "日本語": {
    title: "霊獣特殊召喚記録",
    reset: "リセット",
    monsters: [
      "ラムペンタ (精霊獣)",
      "ペトルフィン (精霊獣)",
      "レラ (精霊獣使い)",
      "ノチウドラゴ",
      "アペライオ (精霊獣)",
      "レラ (霊獣使)",
      "ウィンダ (精霊獣使い)",
      "長老 (霊獣使い)",
      "ウェン (霊獣使い)",
      "カンナホーク (精霊獣)",
    ],
  },
};

export type Language = keyof typeof translations;
