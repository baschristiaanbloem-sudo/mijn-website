import type { Metadata } from "next";
import { InschrijvingForm } from "@/components/inschrijving-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Huisarts inschrijven Amstelveen | Bloem Huisartsen",
  description:
    "Schrijf u online in bij huisarts Bloem Huisartsen Amstelveen. Nieuwe patiënten welkom, eenvoudig inschrijven.",
  alternates: {
    canonical: "/inschrijving",
  },
  openGraph: {
    title: "Huisarts inschrijven Amstelveen | Bloem Huisartsen",
    description:
      "Schrijf u online in bij huisarts Bloem Huisartsen Amstelveen. Nieuwe patiënten welkom, eenvoudig inschrijven.",
  },
};

export default function InschrijvingPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex flex-1 items-center justify-center py-16 md:py-20">
        <div className="mx-auto w-full max-w-4xl px-4 md:px-6">
          <InschrijvingForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
