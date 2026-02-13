import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
});

// Import sanity client
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const SETTINGS_QUERY = `
  *[_type == "landingPage"][0] {
    seo {
      baslik,
      aciklama,
      favicon { asset-> },
      socialImage { asset-> }
    },
    ayarlar {
      firmaAdi,
      logo { asset->, altMetin }
    },
    footer {
      logo { asset->, altMetin },
      aciklama,
      sosyalMedya[],
      iletisimBilgileri,
      copyright
    }
  }
`;

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await client.fetch(SETTINGS_QUERY);
    const seo = data?.seo;
    
    return {
      title: seo?.baslik || "Vetrina Design | Ofis Yaşam Alanları",
      description: seo?.aciklama || "Ofis yaşam alanları tasarlıyoruz.",
      icons: seo?.favicon ? { icon: urlForImage(seo.favicon).width(32).height(32).url() } : undefined,
      openGraph: seo?.socialImage ? {
        images: [urlForImage(seo.socialImage).width(1200).height(630).url()],
      } : undefined,
    };
  } catch (error) {
    return {
      title: "Vetrina Design",
      description: "Ofis yaşam alanları tasarlıyoruz.",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings = null;
  let footerData = null;
  
  try {
    const data = await client.fetch(SETTINGS_QUERY);
    settings = data?.ayarlar;
    footerData = data?.footer;
  } catch (error) {
    console.error("Layout settings fetch error:", error);
  }

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-body bg-backgroundLight dark:bg-backgroundDark text-primary dark:text-gray-200 transition-colors duration-300 overflow-x-hidden`}
      >
        <LayoutWrapper settings={settings} footerData={footerData}>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
