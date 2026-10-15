import type { Metadata } from "next";
import { PraktijkSection } from "@/components/praktijk-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Huisartsenpraktijk Amstelveen | Bloem Huisartsen",
  description:
    "Huisartsenpraktijk Amstelveen aan de Keizer Karelweg. Bloem Huisartsen biedt persoonlijke huisartsenzorg voor het hele gezin.",
  alternates: {
    canonical: "/praktijk",
  },
  openGraph: {
    title: "Huisartsenpraktijk Amstelveen | Bloem Huisartsen",
    description:
      "Huisartsenpraktijk Amstelveen aan de Keizer Karelweg. Bloem Huisartsen biedt persoonlijke huisartsenzorg voor het hele gezin.",
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
