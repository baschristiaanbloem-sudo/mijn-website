import { en } from "@/lib/i18n/en";
import { nl } from "@/lib/i18n/nl";
import type { Locale, Messages } from "@/lib/i18n/types";

export const messages: Record<Locale, Messages> = { nl, en };

export function getMessages(locale: Locale): Messages {
  return messages[locale];
}

export function replaceParams(text: string, params: Record<string, string>) {
  return Object.entries(params).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    text,
  );
}
