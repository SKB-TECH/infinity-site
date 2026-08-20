"use client";

import { useLocale } from "@/context/LocaleContext";

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useLocale();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="simple-icon language-switcher"
      aria-label={locale === "en" ? "Passer en français" : "Switch to English"}
      title={locale === "en" ? "Français" : "English"}
    >
      <span>{locale === "en" ? "FR" : "EN"}</span>
    </button>
  );
}
