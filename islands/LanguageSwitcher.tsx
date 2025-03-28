import { signal } from "@preact/signals";
import { Language, translations } from "../data/RitualBeastLangPack.ts";
import { useEffect } from "preact/hooks";

export const currentLang = signal<Language>("繁体中文");

export default function LanguageSwitcher() {
  useEffect(() => {
    if (currentLang.value !== "繁體中文") {
      currentLang.value = "繁體中文";
    }
  }, []);

  return (
    <div class="language-switcher">
      {Object.keys(translations).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => currentLang.value = lang}
          disabled={currentLang.value === lang}
          class={currentLang.value === lang ? "active" : ""}
          aria-current={currentLang.value === lang ? "true" : "false"}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
