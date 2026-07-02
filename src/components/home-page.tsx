"use client";

import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { useLanguage } from "@/components/language-provider";
import { replaceParams } from "@/lib/i18n";
import type { ServiceKey } from "@/lib/i18n/types";
import { googleMapsEmbedUrl, googleMapsUrl, practiceAddress, practicePhone, practicePhoneHref } from "@/lib/site";

const serviceKeys: ServiceKey[] = [
  "psychische",
  "chronische",
  "ouderenzorg",
  "kleineIngrepen",
  "vaccinaties",
  "rijbewijs",
  "vasectomie",
  "cosmetisch",
];

const serviceIcons: Record<ServiceKey, ReactNode> = {
  psychische: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 5.997.142 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
    </svg>
  ),
  chronische: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 6v6h4" /><circle cx="12" cy="12" r="10" />
    </svg>
  ),
  ouderenzorg: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="10" cy="7" r="3" /><path d="M10 10v3" /><path d="M6 21v-2a4 4 0 0 1 8 0v2" /><path d="M16 4v17" /><path d="M16 4 18 6" />
    </svg>
  ),
  kleineIngrepen: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" />
    </svg>
  ),
  vaccinaties: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="m18 2 4 4" /><path d="m17 7 3-3" /><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" /><path d="m9 11 4 4" /><path d="m5 19-3 3" /><path d="m14 4 6 6" />
    </svg>
  ),
  rijbewijs: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-2-3-2-3 2-3 2-2.7.6-4.5 1.1C4.7 11.3 4 12.1 4 13v3c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />
    </svg>
  ),
  vasectomie: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.12 15.88" /><path d="M14.47 14.48 20 20" /><path d="M8.12 8.12 12 12" />
    </svg>
  ),
  cosmetisch: (
    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  ),
};

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
            <p className="text-center text-sm font-medium text-[#8a7a62]">{t.home.heroWelcome}</p>
            <h1 className="mt-2 text-center font-heading text-2xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-3xl">
              {t.home.heroTitle}
            </h1>
            <p className="mt-4 text-center text-sm leading-relaxed text-muted-foreground md:text-base">
              {t.home.heroText}
            </p>

            <p className="mt-6 text-center text-sm font-semibold text-foreground">{t.home.heroCta}</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href="/inschrijving" className="bk-btn relative w-full justify-start pl-12">
                <svg className="absolute left-4 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.5a7.5 7.5 0 0 1 15 0v.75H4V19.5Z" />
                </svg>
                {t.home.buttons.register}
              </a>
              <a href="https://www.mijngezondheid.net" target="_blank" rel="noopener noreferrer" className="bk-btn relative w-full justify-start pl-12">
                <svg className="absolute left-4 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                </svg>
                {t.home.buttons.appointment}
              </a>
              <a href="https://www.mijngezondheid.net" target="_blank" rel="noopener noreferrer" className="bk-btn relative w-full justify-start pl-12">
                <svg className="absolute left-4 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M7.5 8.25h9m-9 3H12m-9 .75V19.5A2.25 2.25 0 0 0 4.5 21.75h15A2.25 2.25 0 0 0 21.75 19.5V6.75A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v12" />
                </svg>
                {t.home.buttons.econsult}
              </a>
              <a href="https://www.mijngezondheid.net" target="_blank" rel="noopener noreferrer" className="bk-btn relative w-full justify-start pl-12">
                <svg className="absolute left-4 size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                {t.home.buttons.results}
              </a>
            </div>

            <p className="mt-6 border-t border-border pt-4 text-center text-sm font-medium text-foreground">
              {t.home.openToday} <span className="text-primary">08:00 – 17:00 uur</span>
            </p>
          </div>
        </section>

        <section id="diensten" className="bg-secondary py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="bk-section-label">{t.home.servicesLabel}</p>
              <h2 className="mt-2 font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
                {t.home.servicesTitle}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-pretty text-muted-foreground">{t.home.servicesText}</p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {serviceKeys.map((key) => (
                <article key={key} className="group bk-card p-6 transition-shadow hover:shadow-md">
                  <span className="flex size-12 items-center justify-center bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {serviceIcons[key]}
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-medium text-foreground">
                    {t.home.services[key].title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{t.home.services[key].description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="afspraak" className="py-16 md:py-20">
          <div className="mx-auto max-w-3xl px-4 md:px-6">
            <div className="bk-card p-7 md:p-10">
              <div className="text-center">
                <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-foreground md:text-3xl">
                  {t.home.portalTitle}
                </h2>
              </div>

              <div className="mt-8 border border-border bg-secondary p-6 md:p-8">
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-14 items-center justify-center bg-primary text-primary-foreground">
                    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">MijnGezondheid.net</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">{t.home.portalDescription}</p>

                  <ul className="mt-6 flex flex-col gap-3 text-left text-sm text-foreground">
                    {t.home.portalFeatures.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-primary/15 text-primary">
                          <svg className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a href="https://www.mijngezondheid.net" target="_blank" rel="noopener noreferrer" className="bk-btn mt-8 w-full sm:w-auto">
                    {t.home.portalButton}
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                {t.home.portalEmergency}{" "}
                <a href={practicePhoneHref} className="font-medium text-primary hover:underline">
                  {practicePhone}
                </a>
                .
              </p>
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
