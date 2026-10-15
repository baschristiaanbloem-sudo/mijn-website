"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { getMessages } from "@/lib/i18n";
import type { Locale, Messages } from "@/lib/i18n/types";
import {
  counterpartPath,
  localeFromPathname,
  pathsForLocale,
  routeFromPathname,
  type AppRoute,
} from "@/lib/routes";

type LanguageContextValue = {
  locale: Locale;
  t: Messages;
  paths: Record<AppRoute, string>;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const pageTitles: Record<string, keyof Messages["meta"]> = {
  "/": "home",
  "/en": "home",
  "/contact": "contact",
  "/en/contact": "contact",
  "/praktijk": "praktijk",
  "/en/practice": "praktijk",
  "/team": "team",
  "/en/team": "team",
  "/nieuw-in-amstelveen": "nieuwInAmstelveen",
  "/en/new-to-amstelveen": "nieuwInAmstelveen",
  "/gp-amstelveen": "gpAmstelveen",
  "/en/gp-amstelveen": "gpAmstelveen",
  "/inschrijving": "inschrijving",
  "/en/register": "inschrijving",
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = localeFromPathname(pathname);
  const t = useMemo(() => getMessages(locale), [locale]);
  const paths = useMemo(() => pathsForLocale(locale), [locale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    const pageKey = pageTitles[pathname] ?? pageTitles[pathname.replace(/\/$/, "") || "/"] ?? "home";
    document.title = t.meta[pageKey].title;
  }, [locale, pathname, t]);

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    router.push(counterpartPath(pathname, nextLocale));
  };

  return (
    <LanguageContext.Provider value={{ locale, t, paths, setLocale }}>
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

export function useCurrentRoute(): AppRoute {
  const pathname = usePathname();
  return routeFromPathname(pathname);
}
