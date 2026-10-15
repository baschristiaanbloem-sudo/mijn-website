import type { Metadata } from "next";
import { PraktijkSection } from "@/components/praktijk-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "GP practice Amstelveen | Bloem Huisartsen",
  description:
    "Bloem Huisartsen is taking over Dr Kieviet's GP practice on Keizer Karelweg in Amstelveen. Personal GP care for the whole family.",
  alternates: {
    canonical: "/en/practice",
    ...languageAlternates("praktijk"),
  },
  openGraph: {
    title: "GP practice Amstelveen | Bloem Huisartsen",
    description:
      "Bloem Huisartsen is taking over Dr Kieviet's GP practice on Keizer Karelweg in Amstelveen. Personal GP care for the whole family.",
    locale: "en_GB",
    url: "/en/practice",
  },
};

export default function EnglishPracticePage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <PraktijkSection />
      </main>
      <SiteFooter />
    </div>
  );
}
