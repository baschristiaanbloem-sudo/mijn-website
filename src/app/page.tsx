import type { Metadata } from "next";
import { HomePage } from "@/components/home-page";

export const metadata: Metadata = {
  title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
  description:
    "Zoekt u een huisarts of GP in Amstelveen? Bloem Huisartsen verwelkomt nieuwe patiënten. Schrijf u eenvoudig online in.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
    description:
      "Zoekt u een huisarts of GP in Amstelveen? Bloem Huisartsen verwelkomt nieuwe patiënten. Schrijf u eenvoudig online in.",
  },
};

export default function Home() {
  return <HomePage />;
}
