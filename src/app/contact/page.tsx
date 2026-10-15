import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Contact huisarts Amstelveen | Bloem Huisartsen",
  description:
    "Contactgegevens en openingstijden van huisarts Bloem Huisartsen Amstelveen aan de Keizer Karelweg.",
  alternates: {
    canonical: "/contact",
    ...languageAlternates("contact"),
  },
  openGraph: {
    title: "Contact huisarts Amstelveen | Bloem Huisartsen",
    description:
      "Contactgegevens en openingstijden van huisarts Bloem Huisartsen Amstelveen aan de Keizer Karelweg.",
  },
};

export default function ContactPage() {
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
