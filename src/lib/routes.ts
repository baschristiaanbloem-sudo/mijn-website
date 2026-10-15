import type { Locale } from "@/lib/i18n/types";

export type AppRoute =
  | "home"
  | "praktijk"
  | "team"
  | "nieuwInAmstelveen"
  | "gpAmstelveen"
  | "contact"
  | "inschrijving";

export const nlPaths: Record<AppRoute, string> = {
  home: "/",
  praktijk: "/praktijk",
  team: "/team",
  nieuwInAmstelveen: "/nieuw-in-amstelveen",
  /** EN-only landing; NL counterpart is the home page (avoids hreflang collision). */
  gpAmstelveen: "/",
  contact: "/contact",
  inschrijving: "/inschrijving",
};

export const enPaths: Record<AppRoute, string> = {
  home: "/en",
  praktijk: "/en/practice",
  team: "/en/team",
  nieuwInAmstelveen: "/en/new-to-amstelveen",
  gpAmstelveen: "/en/gp-amstelveen",
  contact: "/en/contact",
  inschrijving: "/en/register",
};

export function pathsForLocale(locale: Locale): Record<AppRoute, string> {
  return locale === "en" ? enPaths : nlPaths;
}

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl";
}

export function routeFromPathname(pathname: string): AppRoute {
  const normalized = pathname.replace(/\/$/, "") || "/";

  const entries = [
    ...Object.entries(enPaths),
    ...Object.entries(nlPaths),
  ] as [AppRoute, string][];

  const match = entries.find(([, path]) => path === normalized);
  return match?.[0] ?? "home";
}

export function counterpartPath(pathname: string, targetLocale: Locale): string {
  const route = routeFromPathname(pathname);
  return pathsForLocale(targetLocale)[route];
}

export function languageAlternates(route: AppRoute) {
  return {
    languages: {
      nl: nlPaths[route],
      en: enPaths[route],
      "x-default": nlPaths[route],
    },
  };
}
