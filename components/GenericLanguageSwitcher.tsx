import { Signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

type Language = string;

interface GenericLanguageSwitcherProps {
  currentLang: Signal<Language>;
  // deno-lint-ignore no-explicit-any
  translations: Record<Language, any>;
  useUppercase?: boolean;
  initialLang?: Language;
}

export function GenericLanguageSwitcher({
  currentLang,
  translations,
  useUppercase = false,
  initialLang = "繁體中文",
}: GenericLanguageSwitcherProps) {
  useEffect(() => {
    if (initialLang && currentLang.value !== initialLang) {
      currentLang.value = initialLang;
    }
  }, []);

  return (
    <div class="language-switcher">
      {(Object.keys(translations) as Language[]).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => (currentLang.value = lang)}
          disabled={currentLang.value === lang}
          class={currentLang.value === lang ? "active" : ""}
          aria-current={currentLang.value === lang ? "true" : "false"}
        >
          {useUppercase ? lang.toUpperCase() : lang}
        </button>
      ))}
    </div>
  );
}
