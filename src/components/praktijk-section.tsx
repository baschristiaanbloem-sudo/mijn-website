"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";
import type { ValueKey } from "@/lib/i18n/types";

const valueKeys: ValueKey[] = ["attention", "family", "fast", "accessible"];

const valueIcons: Record<ValueKey, ReactNode> = {
  attention: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  ),
  family: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.128a4 4 0 0 1 0 7.744" />
    </svg>
  ),
  fast: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
    </svg>
  ),
  accessible: (
    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="5" r="1" /><path d="m9 20 3-6 3 6" /><path d="M6 8l6 2 6-2" /><path d="M12 10v4" />
    </svg>
  ),
};

export function PraktijkSection() {
  const { t } = useLanguage();

  return (
    <section id="praktijk" className="py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <div>
          <p className="bk-section-label">{t.praktijk.label}</p>
          <h1 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
            {t.praktijk.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">{t.praktijk.paragraph1}</p>
          <p className="mt-4 leading-relaxed text-pretty text-muted-foreground">{t.praktijk.paragraph2}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {valueKeys.map((key) => (
            <article key={key} className="bk-card p-6">
              <span className="flex size-11 items-center justify-center bg-secondary text-primary">
                {valueIcons[key]}
              </span>
              <h2 className="mt-4 font-heading text-lg font-medium text-foreground">
                {t.praktijk.values[key].title}
              </h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {t.praktijk.values[key].description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
