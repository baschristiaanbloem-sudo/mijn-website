import type { Metadata } from "next";
import { NieuwInAmstelveenSection } from "@/components/nieuw-in-amstelveen-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Huisarts Amstelveen voor nieuwe inwoners | Bloem Huisartsen",
  description:
    "Nieuw in Amstelveen? Schrijf u op tijd in bij een huisarts. Bloem Huisartsen Amstelveen verwelkomt nieuwe patiënten.",
  alternates: {
    canonical: "/nieuw-in-amstelveen",
    ...languageAlternates("nieuwInAmstelveen"),
  },
  openGraph: {
    title: "Huisarts Amstelveen voor nieuwe inwoners | Bloem Huisartsen",
    description:
      "Nieuw in Amstelveen? Schrijf u op tijd in bij een huisarts. Bloem Huisartsen Amstelveen verwelkomt nieuwe patiënten.",
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
