import type { Metadata } from "next";
import { headers } from "next/headers";
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
  title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
  description: practiceDescription,
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: siteUrl,
    siteName: practiceName,
    title: "Huisarts Amstelveen | Bloem Huisartsen (GP)",
    description: practiceDescription,
    images: [
      {
        url: "/images/hero-praktijk.png",
        width: 1200,
        height: 630,
        alt: "Huisartsenpraktijk Bloem Huisartsen Amstelveen",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "nl";

  return (
    <html
      lang={lang}
      className={`${poppins.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <PracticeJsonLd locale={lang} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
