"use client";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useLanguage } from "@/components/language-provider";
import { replaceParams } from "@/lib/i18n";
import { googleMapsEmbedUrl, googleMapsUrl, practiceAddress } from "@/lib/site";

export function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col bg-background text-foreground">
      <SiteHeader />

      <main>
        <section
          id="top"
          className="relative flex min-h-[80vh] items-center justify-center bg-cover bg-center px-4 py-16 md:py-24"
          style={{ backgroundImage: "url('/images/hero-praktijk.png')" }}
        >
          <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

          <div className="relative z-10 w-full max-w-xl border border-white/40 bg-white/90 p-8 shadow-xl backdrop-blur-sm md:p-10">
            <h1 className="sr-only">{t.footer.copyright}</h1>

            <div className="border border-primary/25 bg-primary/10 px-4 py-5 text-center md:px-6 md:py-6">
              <p className="font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
                {t.home.openToday}
              </p>
              <p className="mt-2 text-base font-semibold text-primary md:text-lg">
                <a href="/inschrijving" className="underline-offset-2 hover:underline">
                  {t.home.openTodayCta}
                </a>
              </p>
            </div>

            <div className="mt-5 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.home.heroText.map((paragraph, index) => {
                const isQuestion = paragraph.endsWith("?");
                const className = [
                  index > 0 ? (isQuestion ? "mt-5" : "mt-2") : undefined,
                  isQuestion ? "font-semibold text-foreground" : undefined,
                ]
                  .filter(Boolean)
                  .join(" ");

                if (isQuestion) {
                  return (
                    <h2 key={index} className={className}>
                      {paragraph}
                    </h2>
                  );
                }

                return (
                  <p key={index} className={className || undefined}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-6 flex justify-center">
              <a href="/inschrijving" className="bk-btn w-full sm:w-auto">
                {t.common.register}
              </a>
            </div>
          </div>
        </section>

        <section id="locatie" className="bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="bk-section-label">{t.home.locationLabel}</h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">
                {replaceParams(t.home.locationText, { address: practiceAddress })}
              </p>
            </div>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bk-card relative mx-auto mt-10 block w-[70%] overflow-hidden transition-shadow hover:shadow-md"
              aria-label={replaceParams(t.home.mapAria, { address: practiceAddress })}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
                <iframe
                  title={t.home.mapTitle}
                  src={googleMapsEmbedUrl}
                  className="pointer-events-none absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
