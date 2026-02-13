import { client } from "@/sanity/lib/client";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

// Query to fetch landing page data
const LANDING_PAGE_QUERY = `
  *[_type == "landingPage"][0] {
    hero {
      slider[] {
        ...,
        gorsel { asset->, altMetin }
      }
    },
    hizmetlerimiz {
      ...,
      liste[] {
        ...,
        gorsel { asset->, altMetin }
      }
    },
    projeler {
      ...,
      liste[] {
        ...,
        gorsel { asset->, altMetin }
      }
    },
    referanslar,
    iletisim {
      ...,
      gorsel { asset->, altMetin }
    }
  }
`;

export const revalidate = 60; // revalidate every 60 seconds

export default async function Home() {
  let data = null;
  
  try {
    data = await client.fetch(LANDING_PAGE_QUERY);
  } catch (error) {
    console.error("Sanity fetch error:", error);
  }

  if (!data) {
     return (
         <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
             <h1 className="text-2xl font-bold mb-4">Mevcut İçerik Bulunamadı</h1>
             <p className="text-gray-600 mb-2">Sanity bağlantısı yapılamadı veya içerik henüz eklenmedi.</p>
             <p className="text-sm text-gray-400">Lütfen .env.local dosyasındaki ayarları kontrol edin ve Sanity Studio'dan içerik ekleyin.</p>
         </div>
     )
  }

  return (
    <main className="min-h-screen bg-backgroundLight dark:bg-backgroundDark">
      <HeroSection data={data.hero} />
      {/* <AboutSection data={data.hakkimizda} /> */}
      <ServicesSection data={data.hizmetlerimiz} />
      <ProjectsSection data={data.projeler} />
      <TestimonialsSection data={data.referanslar} />
      <ContactSection data={data.iletisim} />
    </main>
  );
}
