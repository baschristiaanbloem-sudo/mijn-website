import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "English-speaking GP practice Amstelveen | Bloem Huisartsen",
  description:
    "English-speaking GP practice in Amstelveen. Bloem Huisartsen welcomes new patients at Keizer Karelweg. Register online.",
  alternates: {
    canonical: "/en",
    ...languageAlternates("home"),
  },
  openGraph: {
    title: "English-speaking GP practice Amstelveen | Bloem Huisartsen",
    description:
      "English-speaking GP practice in Amstelveen. Bloem Huisartsen welcomes new patients at Keizer Karelweg. Register online.",
    locale: "en_GB",
    url: "/en",
  },
};

export default function EnglishHomePage() {
  return <HomePage />;
}
