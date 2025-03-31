import { TLCurrentLang, TLLanguageSwitcher } from "./LanguageSwitcher.tsx";
import { translations } from "../data/ToolListLangPack.ts";

export default function ToolList() {
  const tl = translations[TLCurrentLang.value] || translations["繁體中文"];

  return (
    <div class="index-container">
      {/* <TLLanguageSwitcher /> */}
      {/* <br />    */}
      <ul class="tool-list">
        {tl.tools.map((tool) => (
          <li key={tool.path}>
            <a href={tool.path}>{tool.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
