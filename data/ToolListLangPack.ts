import { Translations } from "./types.ts";

export interface ToolItem {
  name: string;
  path: string;
}
export interface ToolListTranslation {
  tools: ToolItem[];
}

export const translations: Translations<ToolListTranslation> = {
  繁體中文: {
    tools: [
      { name: "靈獸特召記錄", path: "./RitualBeast" },
      { name: "連慄砲固定式計算器", path: "./SimultaneousEquationCannons" },
    ],
  },
  简体中文: {
    tools: [
      { name: "灵兽特召记录", path: "./RitualBeast" },
      { name: "连栗炮固定式计算器", path: "./SimultaneousEquationCannons" },
    ],
  },
  English: {
    tools: [
      { name: "Ritual Beast Special Summon Tracker", path: "./RitualBeast" },
      {
        name: "Simultaneous Equation Cannons Calculator",
        path: "./SimultaneousEquationCannons",
      },
    ],
  },
  日本語: {
    tools: [
      { name: "霊獣特殊召喚記録", path: "./RitualBeast" },
      { name: "連慄砲固定式計算機", path: "./SimultaneousEquationCannons" },
    ],
  },
};

export type ToolListLanguage = keyof typeof translations;
