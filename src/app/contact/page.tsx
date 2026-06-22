import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | Bloem & Bloem huisartsen",
  description:
    "Openingstijden en contactgegevens van Bloem & Bloem huisartsen aan de Keizer Karelweg in Amstelveen.",
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
