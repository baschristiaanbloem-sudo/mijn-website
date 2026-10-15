import type { Metadata } from "next";
import { practiceName } from "@/lib/site";

const englishHomeDescription =
  "Looking for a GP in Amstelveen? Bloem Huisartsen is taking over Dr Kieviet's practice. New patients welcome — register online.";

export const metadata: Metadata = {
  openGraph: {
    locale: "en_GB",
    siteName: practiceName,
    description: englishHomeDescription,
  },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return children;
}
