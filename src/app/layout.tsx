import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: "Gebäudereinigung Stuttgart & Region | Cleanmaster 1974",
  description:
    "Gebäudereinigung in Stuttgart vom Familienbetrieb ✓ Büroreinigung ✓ Treppenhausreinigung ✓ Winterdienst ✓ Festpreis-Garantie. Jetzt Angebot anfordern!",
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    title: "Gebäudereinigung Stuttgart & Region | Cleanmaster 1974",
    description:
      "Gebäudereinigung in Stuttgart vom Familienbetrieb ✓ Büroreinigung ✓ Treppenhausreinigung ✓ Winterdienst ✓ Festpreis-Garantie. Jetzt Angebot anfordern!",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${bricolage.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-950 focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
        >
          Zum Inhalt springen
        </a>
        <Header />
        <main id="inhalt" className="flex-1 pb-20 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
