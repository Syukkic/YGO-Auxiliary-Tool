import { Translations } from "./types.ts";

export interface EquationCannonTranslation {
  title: string;
  phase1: string;
  phase2: string;
  totalCards: string;
  xyzRank: string;
  fusionRank: string;
  targetRank: string;
  validCombo: string;
  invalidCombo: string;
  validEffect: string;
  invalidEffect: string;
  effectText: string;
}

export const translations: Translations<EquationCannonTranslation> = {
  "繁體中文": {
    title: "連慄砲固定式計算器",
    phase1: "第一階段：除外條件",
    phase2: "第二階段：效果結算",
    totalCards: "雙方手牌+場上卡總數",
    xyzRank: "超量怪獸階級（2只相同）",
    fusionRank: "融合怪獸階級",
    targetRank: "目標怪獸等級/階級",
    validCombo: "✔️ 條件滿足：2×超量階級 + 融合階級 = 總卡數",
    invalidCombo: "❌ 不滿足條件：2×超量階級 + 融合階級 ≠ 總卡數",
    validEffect: "✔️ 效果可發動：超量 + 融合階級 = 目標階級",
    invalidEffect: "❌ 無法發動：階級總和與目標不匹配",
    effectText:
      "從額外牌組將等級·階級合計等於雙方手牌·場上卡數量的2只同階級超量怪獸和1只融合怪獸除外，" +
      "然後選擇對手1只表側怪獸，將階級合計等於該怪獸等級的1超量+1融合返回額外牌組，之後對手場上卡全部除外。",
  },
  "简体中文": {
    title: "连栗炮固定式计算器",
    phase1: "第一阶段：除外条件",
    phase2: "第二阶段：效果结算",
    totalCards: "双方手牌+场上卡总数",
    xyzRank: "超量怪兽阶级（2只相同）",
    fusionRank: "融合怪兽阶级",
    targetRank: "目标怪兽等级/阶级",
    validCombo: "✔️ 条件满足：2×超量阶级 + 融合阶级 = 总卡数",
    invalidCombo: "❌ 不满足条件：2×超量阶级 + 融合阶级 ≠ 总卡数",
    validEffect: "✔️ 效果可发动：超量 + 融合阶级 = 目标阶级",
    invalidEffect: "❌ 无法发动：阶级总和与目标不匹配",
    effectText:
      "从额外牌组将等级·阶级合计等于双方手牌·场上卡数量的2只同阶级超量怪兽和1只融合怪兽除外，" +
      "然后选择对手1只表侧怪兽，将阶级合计等于该怪兽等级的1超量+1融合返回额外牌组，之后对手场上卡全部除外。",
  },
  "English": {
    title: "Simultaneous Equation Cannons Calculator",
    phase1: "Phase 1: Exclusion Condition",
    phase2: "Phase 2: Effect Resolution",
    totalCards: "Total Cards (Hand + Field)",
    xyzRank: "Xyz Monster Rank (2 same rank)",
    fusionRank: "Fusion Monster Rank",
    targetRank: "Target Monster Level/Rank",
    validCombo: "✔️ Condition met: 2×Xyz Rank + Fusion Rank = Total Cards",
    invalidCombo:
      "❌ Condition not met: 2×Xyz Rank + Fusion Rank ≠ Total Cards",
    validEffect: "✔️ Effect can be activated: Xyz + Fusion Rank = Target Rank",
    invalidEffect: "❌ Cannot activate: Rank sum doesn't match target",
    effectText:
      "Banish 1 Fusion Monster and 2 Xyz Monsters with the same Rank from your Extra Deck, whose combined Level and Ranks equal the total number of cards in both players' hands and on the field, then you can apply this effect." +
      "Return 2 of your banished monsters to the Extra Deck (1 Xyz and 1 Fusion) whose combined Level and Rank equal the Level or Rank of 1 face-up monster your opponent controls, then banish all cards they control. ",
  },
  "日本語": {
    title: "連慄砲固定式計算機",
    phase1: "第一段階：除外条件",
    phase2: "第二段階：効果解決",
    totalCards: "双方の手札＋場のカード総数",
    xyzRank: "同ランクのエクシーズモンスター2体",
    fusionRank: "融合モンスターランク",
    targetRank: "対象モンスターレベル/ランク",
    validCombo: "✔️ 条件達成：2×エクシーズランク + 融合ランク = 総カード数",
    invalidCombo: "❌ 条件未達成：2×エクシーズランク + 融合ランク ≠ 総カード数",
    validEffect: "✔️ 効果発動可能：エクシーズ + 融合ランク = 対象ランク",
    invalidEffect: "❌ 発動不可：ランク合計が対象と不一致",
    effectText:
      "自分のエクストラデッキから、お互いの手札・フィールドのカードの数と同じレベル・ランク合計となる、同じランクのエクシーズモンスター2体と融合モンスター1体を除外する。その後、以下の効果を発動できる。" +
      "相手フィールドの表側表示モンスター1体を選び、そのモンスターのレベル・ランクと同じ合計となる、自分の除外状態のエクシーズモンスター1体と融合モンスター1体をエクストラデッキに戻す。その後、相手フィールドのカードを全て除外する。",
  },
};

export type SECLanguage = keyof typeof translations;
