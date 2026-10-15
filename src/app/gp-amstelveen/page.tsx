import type { Metadata } from "next";
import { GpAmstelveenSection } from "@/components/gp-amstelveen-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "GP Amstelveen | Bloem Huisartsen",
  description:
    "Looking for a GP in Amstelveen? Bloem Huisartsen welcomes new patients. Register online with our general practice in Amstelveen.",
  alternates: {
    canonical: "/gp-amstelveen",
  },
  openGraph: {
    title: "GP Amstelveen | Bloem Huisartsen",
    description:
      "Looking for a GP in Amstelveen? Bloem Huisartsen welcomes new patients. Register online with our general practice in Amstelveen.",
  },
};

export default function GpAmstelveenPage() {
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
