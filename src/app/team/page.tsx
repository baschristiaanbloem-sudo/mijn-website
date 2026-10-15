import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Huisartsen Amstelveen | Ons team | Bloem Huisartsen",
  description:
    "Maak kennis met de huisartsen van Bloem Huisartsen Amstelveen: B.C.Bloem en S.J.Bloem.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Huisartsen Amstelveen | Ons team | Bloem Huisartsen",
    description:
      "Maak kennis met de huisartsen van Bloem Huisartsen Amstelveen: B.C.Bloem en S.J.Bloem.",
  },
};

export default function TeamPage() {
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
