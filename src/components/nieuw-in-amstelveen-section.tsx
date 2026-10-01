"use client";

import { useLanguage } from "@/components/language-provider";

export function NieuwInAmstelveenSection() {
  const { t } = useLanguage();
  const page = t.nieuwInAmstelveen;

  return (
    <section id="nieuw-in-amstelveen" className="py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <p className="bk-section-label">{page.label}</p>
        <h1 className="mt-2 font-heading text-2xl font-bold tracking-wide text-foreground md:text-3xl">
          {page.title}
        </h1>

        {page.intro.map((paragraph) => (
          <p key={paragraph} className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
            {paragraph}
          </p>
        ))}

        {page.sections.map((section) => (
          <div key={section.title} className="mt-10">
            <h2 className="font-heading text-xl font-bold tracking-wide text-foreground md:text-2xl">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <p className="mt-10 text-lg leading-relaxed text-pretty text-muted-foreground">
          {page.moreInfoPrefix}{" "}
          <a
            href={page.moreInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block whitespace-nowrap font-medium text-primary underline-offset-2 hover:underline"
          >
            {page.moreInfoLinkLabel}
          </a>
          .
        </p>

        <a href="/inschrijving" className="bk-btn mt-8">
          {page.cta}
        </a>
      </div>
    </section>
  );
}
