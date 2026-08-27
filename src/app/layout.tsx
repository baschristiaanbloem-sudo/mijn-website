import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { PracticeJsonLd } from "@/components/practice-json-ld";
import { Providers } from "@/components/providers";
import { practiceDescription, practiceName, siteUrl } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: practiceName,
  description: practiceDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: practiceName,
    title: practiceName,
    description: practiceDescription,
    images: [
      {
        url: "/images/hero-praktijk.png",
        width: 1200,
        height: 630,
        alt: practiceName,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <PracticeJsonLd />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
