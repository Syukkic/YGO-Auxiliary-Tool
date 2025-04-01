import { useSignal } from '@preact/signals';
import { rbCurrentLang, RBLanguageSwitcher } from './LanguageSwitcher.tsx';
import { translations } from '../data/RitualBeastLangPack.ts';

export default function MonsterList() {
  const rb = translations[rbCurrentLang.value] || translations['繁體中文'];
  const specialSummon = useSignal<boolean[]>(
    Array(rb.monsters.length).fill(false),
  );
  const announcement = useSignal('');

  const handleToggle = (index: number, checked: boolean) => {
    const newState = [...specialSummon.value];
    newState[index] = checked;
    specialSummon.value = newState;
    announcement.value = `${rb.monsters[index].name} ${
      checked ? '已特召' : '未特召'
    }`;
  };
  const handleReset = () => {
    specialSummon.value = new Array(rb.monsters.length).fill(false);
    announcement.value = '已重置所有靈獸狀態';
    document.querySelector<HTMLInputElement>('.switch input')?.focus();
  };

  return (
    <div class="container" role="region" aria-label="靈獸特召記錄面板">
      <h1 id="ritual-beast-title">{rb.title}</h1>
      {/* <RBLanguageSwitcher /> */}
      <div
        class="monster-list"
        role="list"
        aria-labelledby="ritual-beast-title"
      >
        {rb.monsters.map((monster, index) => (
          <div class="monster-item" key={monster.id} role="listitem">
            <span id={`monster-name-${index}`}>{monster.name}</span>
            <label class="switch">
              <input
                type="checkbox"
                checked={specialSummon.value[index]}
                onChange={(e) => handleToggle(index, e.currentTarget.checked)}
                aria-labelledby={`monster-name-${index}`}
                aria-checked={specialSummon.value[index]}
              />
              <span class="slider round" aria-hidden="true"></span>
            </label>
          </div>
        ))}
      </div>
      <button
        type="reset"
        id="resetButton"
        onClick={handleReset}
        aria-label="重置所有靈獸特招狀態"
      >
        {rb.reset}
      </button>
      <div aria-live="polite" class="sr-only">
        {announcement.value}
      </div>
    </div>
  );
}
