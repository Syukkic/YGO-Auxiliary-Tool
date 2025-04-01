import { Translations } from './types.ts';

export interface Monster {
  id: number;
  name: string;
}

export interface RitualBeastTranslation {
  title: string;
  reset: string;
  monsters: Monster[];
}

export const translations: Translations<RitualBeastTranslation> = {
  繁體中文: {
    title: '靈獸特召記錄',
    reset: '重置',
    monsters: [
      { id: 1, name: '企鵝（獸）' },
      { id: 2, name: '川豚（獸）' },
      { id: 3, name: '新蕾拉（人獸）' },
      { id: 4, name: '星龍' },
      { id: 5, name: '火狮（獸）' },
      { id: 6, name: '老蕾拉（人）' },
      { id: 7, name: '薇茵達（人獸）' },
      { id: 8, name: '長老（人）' },
      { id: 9, name: '雯（人）' },
      { id: 10, name: '雷鹰（獸）' },
    ],
  },
  简体中文: {
    title: '灵兽特召记录',
    reset: '重置',
    monsters: [
      { id: 1, name: '企鹅（兽）' },
      { id: 2, name: '川豚（兽）' },
      { id: 3, name: '新蕾拉（人兽）' },
      { id: 4, name: '星龙' },
      { id: 5, name: '火狮（兽）' },
      { id: 6, name: '老蕾拉（人）' },
      { id: 7, name: '薇茵达（人兽）' },
      { id: 8, name: '长老（人）' },
      { id: 9, name: '雯（人）' },
      { id: 10, name: '雷鹰（兽）' },
    ],
  },
  English: {
    title: 'Ritual Beast Special Summon Tracker',
    reset: 'Reset',
    monsters: [
      { id: 1, name: 'Penguin (beast)' },
      { id: 2, name: 'Pettlephin (beast)' },
      { id: 3, name: 'New Lara (tamer-beast)' },
      { id: 4, name: 'Ulti-Nochiudrago' },
      { id: 5, name: 'Apelio (beast)' },
      { id: 6, name: 'Old Lara (tamer)' },
      { id: 7, name: 'Winda (tamer-Beast)' },
      { id: 8, name: 'Elder (tamer)' },
      { id: 9, name: 'Wen (tamer)' },
      { id: 10, name: 'Cannahawk (beast)' },
    ],
  },
  日本語: {
    title: '霊獣特殊召喚記録',
    reset: 'リセット',
    monsters: [
      { id: 1, name: 'ラムペンタ （精霊獣）' },
      { id: 2, name: 'ペトルフィン （精霊獣）' },
      { id: 3, name: 'レラ （精霊獣使い）' },
      { id: 4, name: 'ノチウドラゴ' },
      { id: 5, name: 'アペライオ （精霊獣）' },
      { id: 6, name: 'レラ （霊獣使）' },
      { id: 7, name: 'ウィンダ （精霊獣使い）' },
      { id: 8, name: '長老 （霊獣使い）' },
      { id: 9, name: 'ウェン （霊獣使い）' },
      { id: 10, name: 'カンナホーク （精霊獣）' },
    ],
  },
};

export type RBLanguage = keyof typeof translations;
