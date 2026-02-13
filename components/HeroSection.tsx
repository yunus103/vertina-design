import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// Define interface for props
interface HeroProps {
  data: {
    baslik: string;
    altBaslik?: string;
    etiket?: string;
    gorsel: any;
    butonMetni?: string;
    butonLink?: string;
  } | null;
}

const HeroSection = ({ data }: HeroProps) => {
  if (!data) return null;

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {data.gorsel && (
        <div className="absolute inset-0 w-full h-full">
           <Image
            src={urlForImage(data.gorsel).url()}
            alt={data.gorsel.altMetin || 'Hero Image'}
            fill
            className="object-cover grayscale brightness-75"
            priority
          />
        </div>
      )}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative h-full flex flex-col justify-center px-12 md:px-24">
        <h1 className="font-display text-6xl md:text-8xl text-white max-w-4xl leading-[1.1] uppercase tracking-tight">
          {data.baslik} <br /> 
          {data.altBaslik && <span className="text-outline">{data.altBaslik}</span>}
        </h1>
      </div>

      <div className="absolute bottom-12 left-12 md:left-24 right-12 md:right-24 flex justify-between items-end border-t border-white/20 pt-8">
        <div className="max-w-md">
          {data.etiket && <h3 className="text-white font-display text-xl mb-2">{data.etiket}</h3>}
          <p className="text-white/70 text-sm leading-relaxed">
             Keeping it fresh. Be the first to browse the newest creator launches. New drops daily.
          </p>
        </div>
        <div className="flex gap-4">
          <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
            <span className="material-symbols-outlined">west</span>
          </button>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-opacity-80 transition-all">
            <span className="material-symbols-outlined">east</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
