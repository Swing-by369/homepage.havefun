import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { site } from "@/content/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const noto = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name}｜${site.tagline}`,
    template: `%s｜${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `${site.name}｜${site.tagline}`,
    description: site.description,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1 pt-[72px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
