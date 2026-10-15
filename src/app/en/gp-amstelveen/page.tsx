import type { Metadata } from "next";
import { GpAmstelveenSection } from "@/components/gp-amstelveen-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "GP Amstelveen | Bloem Huisartsen",
  description:
    "Looking for a GP in Amstelveen? Bloem Huisartsen welcomes new patients. Register online with our general practice in Amstelveen.",
  alternates: {
    // Consolidate SEO signal with the EN home page; avoids hreflang clash with /nieuw-in-amstelveen.
    canonical: "/en",
    ...languageAlternates("home"),
  },
  openGraph: {
    title: "GP Amstelveen | Bloem Huisartsen",
    description:
      "Looking for a GP in Amstelveen? Bloem Huisartsen welcomes new patients. Register online with our general practice in Amstelveen.",
    locale: "en_GB",
    url: "/en",
  },
};

export default function EnglishGpAmstelveenPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <GpAmstelveenSection />
      </main>
      <SiteFooter />
    </div>
  );
}
