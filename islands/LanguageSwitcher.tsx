import { signal } from "@preact/signals";
import { GenericLanguageSwitcher } from "../components/GenericLanguageSwitcher.tsx";
import {
  RBLanguage,
  translations as rbTranslations,
} from "../data/RitualBeastLangPack.ts";
import {
  SECLanguage,
  translations as secTranslations,
} from "../data/SimultaneousEquationCannonsLangPack.ts";
import {
  ToolListLanguage,
  translations as tlTranslations,
} from "../data/ToolListLangPack.ts";

export const rbCurrentLang = signal<RBLanguage>("繁體中文");
export const SCECurrentLang = signal<SECLanguage>("繁體中文");
export const TLCurrentLang = signal<ToolListLanguage>("繁體中文");

export function RBLanguageSwitcher() {
  return (
    <GenericLanguageSwitcher
      currentLang={rbCurrentLang}
      translations={rbTranslations}
    />
  );
}

export function SCELanguageSwitcher() {
  return (
    <GenericLanguageSwitcher
      currentLang={SCECurrentLang}
      translations={secTranslations}
    />
  );
}

export function TLLanguageSwitcher() {
  return (
    <GenericLanguageSwitcher
      currentLang={TLCurrentLang}
      translations={tlTranslations}
    />
  );
}
