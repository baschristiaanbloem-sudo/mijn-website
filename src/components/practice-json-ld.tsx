import type { Locale } from "@/lib/i18n/types";
import { getPracticeJsonLd } from "@/lib/structured-data";

export function PracticeJsonLd({ locale = "nl" }: { locale?: Locale }) {
  const jsonLd = getPracticeJsonLd(locale);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
