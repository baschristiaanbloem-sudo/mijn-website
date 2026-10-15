import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact GP Amstelveen | Bloem Huisartsen",
  description:
    "Opening hours and contact details for GP practice Bloem Huisartsen Amstelveen on Keizer Karelweg.",
  alternates: {
    canonical: "/en/contact",
    ...languageAlternates("contact"),
  },
  openGraph: {
    title: "Contact GP Amstelveen | Bloem Huisartsen",
    description:
      "Opening hours and contact details for GP practice Bloem Huisartsen Amstelveen on Keizer Karelweg.",
    locale: "en_GB",
    url: "/en/contact",
  },
};

export default function EnglishContactPage() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
