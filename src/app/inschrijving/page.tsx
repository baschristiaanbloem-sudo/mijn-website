import type { Metadata } from "next";
import { InschrijvingForm } from "@/components/inschrijving-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Inschrijven | Bloem Huisartsen Amstelveen",
  description: "Schrijf u in bij Bloem Huisartsen Amstelveen.",
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
