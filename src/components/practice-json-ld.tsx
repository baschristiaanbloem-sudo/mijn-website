import { getPracticeJsonLd } from "@/lib/structured-data";

export function PracticeJsonLd() {
  const jsonLd = getPracticeJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
