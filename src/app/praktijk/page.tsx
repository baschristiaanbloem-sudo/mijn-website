import type { Metadata } from "next";
import { PraktijkSection } from "@/components/praktijk-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Over de praktijk | Bloem & Bloem huisartsen",
  description:
    "Lees meer over Bloem & Bloem huisartsen aan de Keizer Karelweg in Amstelveen: persoonlijke zorg met aandacht voor het hele gezin.",
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
