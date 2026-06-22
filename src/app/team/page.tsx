import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Ons team | Bloem & Bloem huisartsen",
  description:
    "Maak kennis met Dokter Bas Bloem en Dokter Stef Bloem van Bloem & Bloem huisartsen in Amstelveen.",
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
