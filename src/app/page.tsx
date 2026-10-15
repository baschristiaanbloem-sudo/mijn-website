import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";
import { languageAlternates } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
  description:
    "Zoekt u een huisarts in Amstelveen? Bloem Huisartsen neemt de praktijk van dokter Kieviet over. Nieuwe patiënten welkom — schrijf u online in.",
  alternates: {
    canonical: "/",
    ...languageAlternates("home"),
  },
  openGraph: {
    title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
    description:
      "Zoekt u een huisarts in Amstelveen? Bloem Huisartsen neemt de praktijk van dokter Kieviet over. Nieuwe patiënten welkom — schrijf u online in.",
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}
