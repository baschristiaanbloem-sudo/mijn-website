"use client";

import { useLanguage } from "@/components/language-provider";
import { replaceParams } from "@/lib/i18n";
import { practiceEmail, registrationFormUrl } from "@/lib/site";

export function InschrijvingForm() {
  const { t } = useLanguage();
  const helpParts = replaceParams(t.inschrijving.helpText, { email: practiceEmail }).split(
    practiceEmail,
  );

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="bk-section-label">{t.inschrijving.label}</h1>
      <p className="mt-4 text-base font-medium leading-relaxed text-foreground md:text-lg">
        {t.inschrijving.ctaText}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {t.inschrijving.redirectNote}
      </p>
      <a
        href={registrationFormUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bk-btn mt-8 min-h-16 w-full max-w-md px-10 text-lg font-semibold tracking-wide uppercase shadow-md md:min-h-20 md:max-w-lg md:text-xl"
      >
        {t.common.register}
      </a>
      <h2 className="mt-10 font-heading text-base font-semibold text-foreground md:text-lg">
        {t.inschrijving.helpTitle}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
        {helpParts[0]}
        <a
          href={`mailto:${practiceEmail}`}
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          {practiceEmail}
        </a>
        {helpParts[1]}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
        {t.inschrijving.helpFollowUp}
      </p>
    </div>
  );
}
