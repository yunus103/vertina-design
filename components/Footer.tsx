import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface FooterProps {
  data?: {
    logo?: any;
    aciklama?: string;
    sosyalMedya?: { platform: string; url: string }[];
    iletisimBilgileri?: {
      adres?: string;
      telefon?: string;
      email?: string;
    };
    copyright?: string;
  };
}

const getSocialIcon = (platform: string) => {
  const p = platform.toLowerCase();
  if (p.includes('instagram')) return 'photo_camera';
  if (p.includes('twitter') || p.includes('x')) return 'alternate_email';
  if (p.includes('linkedin')) return 'work';
  if (p.includes('facebook')) return 'public';
  return 'link';
};

const Footer = ({ data }: FooterProps) => {
  const instagramLink = data?.sosyalMedya?.find(s => s.platform.toLowerCase().includes('instagram'))?.url;

  return (
    <footer className="bg-primary text-white py-16 px-6 md:px-12 border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        
        {/* Brand & Description */}
        <div className="flex flex-col items-center md:items-start gap-6 text-center md:text-left basis-1/3">
          {data?.logo ? (
             <div className="relative w-48 h-20">
               <Image 
                 src={urlForImage(data.logo).url()} 
                 alt="Footer Logo" 
                 fill 
                 className="object-contain object-left"
               />
             </div>
          ) : (
             <span className="text-3xl font-display tracking-tighter block text-white font-extrabold">Vetrina</span>
          )}
          
          <p className="text-xs text-white/80 max-w-sm leading-relaxed">
            {data?.aciklama || "27 yıllık tecrübemizle hayalinizdeki çalışma alanlarını imalathanemizde gerçeğe dönüştürüyoruz."}
          </p>
        </div>

        {/* Middle Section: Follow Us / Instagram Special */}
        <div className="flex flex-col items-center md:items-start gap-4 basis-1/3">
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50">Bizi takip edin</h4>
          {instagramLink ? (
            <a 
              href={instagramLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 group transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-white/70 group-hover:text-white text-2xl">photo_camera</span>
              </div>
              <span className="text-sm font-medium tracking-wide text-white/80 group-hover:text-white">Instagram</span>
            </a>
          ) : (
            <div className="flex gap-4">
              {data?.sosyalMedya?.map((item, index) => (
                <a 
                  key={index} 
                  href={item.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all group"
                  title={item.platform}
                >
                  <span className="material-symbols-outlined text-white/70 group-hover:text-white text-lg">
                    {getSocialIcon(item.platform)}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex flex-col items-center md:items-end gap-6 basis-1/3">
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/50">Hızlı Menü</h4>
          <div className="flex gap-8 text-xs tracking-widest uppercase text-white/70 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Ana Sayfa</Link>
            <Link href="#hizmetlerimiz" className="hover:text-white transition-colors">Hizmetlerimiz</Link>
            <Link href="#projeler" className="hover:text-white transition-colors">Projeler</Link>
            <Link href="#contact" className="hover:text-white transition-colors">İletişim</Link>
          </div>
        </div>

      </div>

      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/40 uppercase tracking-widest">
        <p>{data?.copyright || "© 2026 Vertina Design. Tüm hakları saklıdır."}</p>
      </div>
    </footer>
  );
};

export default Footer;
