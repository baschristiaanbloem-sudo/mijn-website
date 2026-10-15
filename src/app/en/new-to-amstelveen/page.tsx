import type { Metadata } from "next";
import { NieuwInAmstelveenSection } from "@/components/nieuw-in-amstelveen-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "New to Amstelveen | Find a GP | Bloem Huisartsen",
  description:
    "New to Amstelveen? Register with a GP in good time. Bloem Huisartsen Amstelveen welcomes new patients.",
  alternates: {
    canonical: "/en/new-to-amstelveen",
    ...languageAlternates("nieuwInAmstelveen"),
  },
  openGraph: {
    title: "New to Amstelveen | Find a GP | Bloem Huisartsen",
    description:
      "New to Amstelveen? Register with a GP in good time. Bloem Huisartsen Amstelveen welcomes new patients.",
    locale: "en_GB",
    url: "/en/new-to-amstelveen",
  },
};

export default function EnglishNewToAmstelveenPage() {
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
