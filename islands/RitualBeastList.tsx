import { useSignal } from "@preact/signals";
import { rbCurrentLang, RBLanguageSwitcher } from "./LanguageSwitcher.tsx";
import { translations } from "../data/RitualBeastLangPack.ts";

export default function MonsterList() {
  const rb = translations[rbCurrentLang.value] || translations["繁體中文"];
  const specialSummon = useSignal<boolean[]>(
    Array(rb.monsters.length).fill(false),
  );
  const handleReset = () => {
    specialSummon.value = new Array(rb.monsters.length).fill(false);
  };

  return (
    <div class="container">
      <h1>{rb.title}</h1>
      {/* <RBLanguageSwitcher /> */}
      <div class="monster-list">
        {rb.monsters.map((name, index) => (
          <div class="monster-item" key={index}>
            <span>{name}</span>
            <label class="switch">
              <input
                type="checkbox"
                checked={specialSummon.value[index]}
                onChange={(e) => {
                  const newStates = [...specialSummon.value];
                  newStates[index] = e.currentTarget.checked;
                  specialSummon.value = newStates;
                }}
              />
              <span class="slider round"></span>
            </label>
          </div>
        ))}
      </div>
      <button type="reset" id="resetButton" onClick={handleReset}>
        {rb.reset}
      </button>
    </div>
  );
}
