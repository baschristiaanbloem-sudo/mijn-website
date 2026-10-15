import type { Metadata } from "next";
import { PraktijkSection } from "@/components/praktijk-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Huisartsenpraktijk Amstelveen | Bloem Huisartsen",
  description:
    "Bloem Huisartsen neemt de huisartsenpraktijk van dokter Kieviet over aan de Keizer Karelweg in Amstelveen. Persoonlijke huisartsenzorg voor het hele gezin.",
  alternates: {
    canonical: "/praktijk",
    ...languageAlternates("praktijk"),
  },
  openGraph: {
    title: "Huisartsenpraktijk Amstelveen | Bloem Huisartsen",
    description:
      "Bloem Huisartsen neemt de huisartsenpraktijk van dokter Kieviet over aan de Keizer Karelweg in Amstelveen. Persoonlijke huisartsenzorg voor het hele gezin.",
    url: "/praktijk",
  },
};

export default function PraktijkPage() {
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
