"use client";

import { useLanguage } from "@/components/language-provider";

export function GpAmstelveenSection() {
  const { t } = useLanguage();
  const page = t.gpAmstelveen;

  return (
    <section id="gp-amstelveen" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="bk-section-label">{page.label}</p>
        <h1 className="mt-2 font-heading text-2xl font-bold tracking-wide text-foreground md:text-3xl">
          {page.title}
        </h1>
        {page.paragraphs.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            {paragraph}
          </p>
        ))}
        <a href="/inschrijving" className="bk-btn mt-8">
          {page.cta}
        </a>
      </div>
    </section>
  );
}
