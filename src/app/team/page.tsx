import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TeamSection } from "@/components/team-section";

export const metadata: Metadata = {
  title: "Ons team | Bloem Huisartsen Amstelveen",
  description: "Maak kennis met Bas Bloem en Stef Bloem van Bloem Huisartsen Amstelveen.",
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
