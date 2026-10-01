import type { Metadata } from "next";
import { NieuwInAmstelveenSection } from "@/components/nieuw-in-amstelveen-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Nieuw in Amstelveen | Bloem Huisartsen Amstelveen",
  description:
    "Nieuw in Amstelveen? Schrijf u op tijd in bij een huisarts. Inschrijven bij Bloem Huisartsen Amstelveen kost u niets.",
  alternates: {
    canonical: "/nieuw-in-amstelveen",
  },
};

export default function NieuwInAmstelveenPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <NieuwInAmstelveenSection />
      </main>
      <SiteFooter />
    </div>
  );
}
