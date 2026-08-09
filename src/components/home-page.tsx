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
            <h1 className="text-center text-sm font-medium text-[#8a7a62]">{t.home.heroWelcome}</h1>

            <div className="mt-5 border border-primary/25 bg-primary/10 px-4 py-5 text-center md:px-6 md:py-6">
              <p className="font-heading text-base font-semibold leading-snug text-foreground md:text-lg">
                {t.home.openToday}
              </p>
              <p className="mt-2 text-base font-semibold text-primary md:text-lg">{t.home.openTodayCta}</p>
            </div>

            <p className="mt-5 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.home.heroText}
            </p>

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
              <p className="bk-section-label">{t.home.locationLabel}</p>
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
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-foreground/50 via-transparent to-transparent p-6 transition-colors group-hover:from-foreground/60">
                  <div className="flex items-center gap-3 bg-card px-4 py-3 shadow-sm">
                    <span className="flex size-10 shrink-0 items-center justify-center bg-secondary text-primary">
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-heading text-base font-medium text-foreground">{practiceAddress}</p>
                      <p className="text-sm text-primary">{t.home.mapOpen}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
