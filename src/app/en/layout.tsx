import type { Metadata } from "next";
import { practiceName, siteUrl } from "@/lib/site";

const englishHomeDescription =
  "English-speaking GP practice in Amstelveen. Bloem Huisartsen welcomes new patients at Keizer Karelweg.";

export const metadata: Metadata = {
  openGraph: {
    locale: "en_GB",
    siteName: practiceName,
    url: `${siteUrl}/en`,
    description: englishHomeDescription,
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
