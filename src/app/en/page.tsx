import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "English-speaking GP practice Amstelveen | Bloem Huisartsen",
  description:
    "Looking for a GP in Amstelveen? Bloem Huisartsen is taking over Dr Kieviet's practice. New patients welcome — register online.",
  alternates: {
    canonical: "/en",
    ...languageAlternates("home"),
  },
  openGraph: {
    title: "English-speaking GP practice Amstelveen | Bloem Huisartsen",
    description:
      "Looking for a GP in Amstelveen? Bloem Huisartsen is taking over Dr Kieviet's practice. New patients welcome — register online.",
    locale: "en_GB",
    url: "/en",
  },
};

export default function EnglishHomePage() {
  return <HomePage />;
}
