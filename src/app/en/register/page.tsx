import type { Metadata } from "next";
import { InschrijvingForm } from "@/components/inschrijving-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Register with a GP in Amstelveen | Bloem Huisartsen",
  description:
    "Register online with GP practice Bloem Huisartsen Amstelveen. New patients welcome.",
  alternates: {
    canonical: "/en/register",
    ...languageAlternates("inschrijving"),
  },
  openGraph: {
    title: "Register with a GP in Amstelveen | Bloem Huisartsen",
    description:
      "Register online with GP practice Bloem Huisartsen Amstelveen. New patients welcome.",
    locale: "en_GB",
  },
};

export default function EnglishRegisterPage() {
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
