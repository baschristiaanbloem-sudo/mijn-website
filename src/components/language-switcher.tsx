"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n/types";

function NlFlag() {
  return (
    <svg viewBox="0 0 20 14" className="h-3.5 w-5 rounded-sm border border-border" aria-hidden="true">
      <rect width="20" height="4.67" fill="#AE1C28" />
      <rect y="4.67" width="20" height="4.67" fill="#FFFFFF" />
      <rect y="9.33" width="20" height="4.67" fill="#21468B" />
    </svg>
  );
}

function GbFlag() {
  return (
    <svg viewBox="0 0 20 14" className="h-3.5 w-5 rounded-sm border border-border" aria-hidden="true">
      <rect width="20" height="14" fill="#012169" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#FFFFFF" strokeWidth="2.2" />
      <path d="M0 0 20 14M20 0 0 14" stroke="#C8102E" strokeWidth="1" />
      <path d="M10 0V14M0 7H20" stroke="#FFFFFF" strokeWidth="3.2" />
      <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="1.6" />
    </svg>
  );
}

const languages: {
  locale: Locale;
  labelKey: "switchToNl" | "switchToEn";
  Flag: () => ReactNode;
}[] = [
  { locale: "nl", labelKey: "switchToNl", Flag: NlFlag },
  { locale: "en", labelKey: "switchToEn", Flag: GbFlag },
];

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      {languages.map(({ locale: code, labelKey, Flag }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-label={t.common[labelKey]}
          aria-pressed={locale === code}
          className={`rounded p-1 transition-opacity ${locale === code ? "opacity-100 ring-1 ring-primary" : "opacity-60 hover:opacity-100"}`}
        >
          <Flag />
        </button>
      ))}
    </div>
  );
}
