"use client";

import type { ReactNode } from "react";
import { useLanguage } from "@/components/language-provider";

function formatRichText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("*") && part.endsWith("*")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
}

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
            {formatRichText(paragraph)}
          </p>
        ))}

        {page.sections.map((section) => (
          <div key={section.title} className="mt-10">
            <h2 className="font-heading text-xl font-bold tracking-wide text-foreground md:text-2xl">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                {formatRichText(paragraph)}
              </p>
            ))}
          </div>
        ))}

        <a href="/inschrijving" className="bk-btn mt-8">
          {page.cta}
        </a>

        <p className="mt-8 text-lg leading-relaxed text-pretty text-muted-foreground">
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
      </div>
    </section>
  );
}
