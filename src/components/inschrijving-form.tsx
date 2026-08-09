"use client";

import { useLanguage } from "@/components/language-provider";
import { replaceParams } from "@/lib/i18n";
import { practiceEmail } from "@/lib/site";

export function InschrijvingForm() {
  const { t } = useLanguage();
  const helpParts = replaceParams(t.inschrijving.helpText, { email: practiceEmail }).split(
    practiceEmail,
  );

  return (
    <div className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 text-center">
      <h1 className="sr-only">{t.inschrijving.label}</h1>
      <p className="text-base font-medium leading-relaxed text-foreground md:text-lg">
        {t.inschrijving.ctaText}
      </p>
      <a
        href={`mailto:${practiceEmail}?subject=${encodeURIComponent(t.inschrijving.label)}`}
        className="bk-btn mt-8 min-h-16 w-full max-w-md px-10 text-lg font-semibold tracking-wide uppercase shadow-md md:min-h-20 md:max-w-lg md:text-xl"
      >
        {t.common.register}
      </a>
      <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-base">
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
