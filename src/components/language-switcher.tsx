"use client";

import { useLanguage } from "@/components/language-provider";

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

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => setLocale("nl")}
        aria-label={t.common.switchToNl}
        aria-pressed={locale === "nl"}
        className={`rounded p-1 transition-opacity ${locale === "nl" ? "opacity-100 ring-1 ring-primary" : "opacity-60 hover:opacity-100"}`}
      >
        <NlFlag />
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-label={t.common.switchToEn}
        aria-pressed={locale === "en"}
        className={`rounded p-1 transition-opacity ${locale === "en" ? "opacity-100 ring-1 ring-primary" : "opacity-60 hover:opacity-100"}`}
      >
        <GbFlag />
      </button>
    </div>
  );
}
