import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "GPs in Amstelveen | Our team | Bloem Huisartsen",
  description: "Meet the GPs of Bloem Huisartsen Amstelveen: B.C.Bloem and S.J.Bloem.",
  alternates: {
    canonical: "/en/team",
    ...languageAlternates("team"),
  },
  openGraph: {
    title: "GPs in Amstelveen | Our team | Bloem Huisartsen",
    description: "Meet the GPs of Bloem Huisartsen Amstelveen: B.C.Bloem and S.J.Bloem.",
    locale: "en_GB",
    url: "/en/team",
  },
};

export default function EnglishTeamPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <TeamSection />
      </main>
      <SiteFooter />
    </div>
  );
}
