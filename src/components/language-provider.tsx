"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import type { Locale, Messages } from "@/lib/i18n/types";

const STORAGE_KEY = "bloem-locale";

type LanguageContextValue = {
  locale: Locale;
  t: Messages;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const pageTitles: Record<string, keyof Messages["meta"]> = {
  "/": "home",
  "/contact": "contact",
  "/praktijk": "praktijk",
  "/team": "team",
  "/inschrijving": "inschrijving",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [locale, setLocaleState] = useState<Locale>("nl");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "nl" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const t = useMemo(() => getMessages(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    const pageKey = pageTitles[pathname] ?? "home";
    document.title = t.meta[pageKey].title;
  }, [locale, pathname, t]);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    localStorage.setItem(STORAGE_KEY, nextLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
