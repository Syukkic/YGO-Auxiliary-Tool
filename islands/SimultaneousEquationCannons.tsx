import { useState } from 'preact/hooks';
import { translations } from '../data/SimultaneousEquationCannonsLangPack.ts';
import { SCECurrentLang, SCELanguageSwitcher } from './LanguageSwitcher.tsx';

export default function EquationCalc() {
  const [totalCards, setTotalCards] = useState<number | null>(null);
  const [xyzRank, setXyzRank] = useState<number | null>(null);
  const [fusionRank, setFusionRank] = useState<number | null>(null);
  const [targetRank, setTargetRank] = useState<number | null>(null);

  const isValidCombo =
    xyzRank !== null && fusionRank !== null
      ? 2 * xyzRank + fusionRank === totalCards
      : false;

  const canActivateEffect =
    xyzRank !== null && fusionRank !== null && targetRank !== null
      ? xyzRank + fusionRank === targetRank
      : false;
  const t = translations[SCECurrentLang.value] || translations['繁體中文'];

  const handleInputChange = (setter: (value: number) => void) => (e: Event) => {
    const value = (e.target as HTMLInputElement).value;
    setter(value === '' ? 0 : Number(value));
  };

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
              value={totalCards || ''}
              onInput={handleInputChange(setTotalCards)}
              // onChange={(e) => setTotalCards(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        <div class="calc-input">
          <label>
            {t.xyzRank}
            <input
              type="number"
              value={xyzRank || ''}
              onInput={handleInputChange(setXyzRank)}
              // onChange={(e) => setXyzRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        <div class="calc-input">
          <label>
            {t.fusionRank}
            <input
              type="number"
              value={fusionRank || ''}
              onInput={handleInputChange(setFusionRank)}
              // onChange={(e) => setFusionRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        {totalCards !== 0 && (
          <div
            class={`result-feedback ${
              isValidCombo ? 'result-valid' : 'result-invalid'
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
              value={targetRank || ''}
              onInput={handleInputChange(setTargetRank)}
              // onChange={(e) => setTargetRank(Number(e.currentTarget.value))}
            />
          </label>
        </div>

        {targetRank !== 0 && (
          <div
            class={`result-feedback ${
              canActivateEffect ? 'result-valid' : 'result-invalid'
            }`}
          >
            {canActivateEffect ? t.validEffect : t.invalidEffect}
          </div>
        )}
      </div>

      <div class="effect-description">
        <p>{t.effectText}</p>
      </div>
    </div>
  );
}
