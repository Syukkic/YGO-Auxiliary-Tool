import { useState } from "preact/hooks";
import { translations } from "../data/SimultaneousEquationCannonsLangPack.ts";
import { SCECurrentLang, SCELanguageSwitcher } from "./LanguageSwitcher.tsx";

export default function EquationCalc() {
  const [totalCards, setTotalCards] = useState<number>(0);
  const [xyzRank, setXyzRank] = useState<number>(0);
  const [fusionRank, setFusionRank] = useState<number>(0);
  const [targetRank, setTargetRank] = useState<number>(0);

  const isValidCombo = 2 * xyzRank + fusionRank === totalCards;
  const canActivateEffect = xyzRank + fusionRank === targetRank;
  const t = translations[SCECurrentLang.value] || translations["繁體中文"];

  return (
    <div class="equation-calculator">
      <h1>{t.title}</h1>
      {/* <SCELanguageSwitcher /> */}

      <div class="calc-phase">
        <h2>{t.phase1}</h2>
        <div class="calc-input">
          <label>
            {t.totalCards}
            <input
              type="number"
              value={totalCards}
              onChange={(e) => setTotalCards(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        <div class="calc-input">
          <label>
            {t.xyzRank}
            <input
              type="number"
              value={xyzRank}
              onChange={(e) => setXyzRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        <div class="calc-input">
          <label>
            {t.fusionRank}
            <input
              type="number"
              value={fusionRank}
              onChange={(e) => setFusionRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        {totalCards > 0 && (
          <div
            class={`result-feedback ${
              isValidCombo ? "result-valid" : "result-invalid"
            }`}
          >
            {isValidCombo ? t.validCombo : t.invalidCombo}
          </div>
        )}
      </div>

      <div class="calc-phase">
        <h2>{t.phase2}</h2>
        <div class="calc-input">
          <label>
            {t.targetRank}
            <input
              type="number"
              value={targetRank}
              onChange={(e) => setTargetRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        {targetRank > 0 && (
          <div
            class={`result-feedback ${
              canActivateEffect ? "result-valid" : "result-invalid"
            }`}
          >
            {canActivateEffect ? t.validEffect : t.invalidEffect}
          </div>
        )}
      </div>

      <div class="effect-description">
        <p>
          {t.effectText}
        </p>
      </div>
    </div>
  );
}
