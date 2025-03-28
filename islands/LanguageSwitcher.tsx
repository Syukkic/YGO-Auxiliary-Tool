import { signal } from "@preact/signals";
import { Language, translations } from "../data/RitualBeastLangPack.ts";

export const currentLang = signal<Language>("繁体中文");

export default function LanguageSwitcher() {
  return (
    <div class="language-switcher">
      {Object.keys(translations).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => currentLang.value = lang}
          disabled={currentLang.value === lang}
          class={currentLang.value === lang ? "active" : ""}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
