'use client';

import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface Slide {
  baslik: string;
  altBaslik?: string;
  etiket?: string;
  aciklama?: string;
  gorsel: any;
}

interface HeroProps {
  data: {
    slider: Slide[];
  } | null;
}

const HeroSection = ({ data }: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = data?.slider || [];

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  if (slides.length === 0) return null;

  const current = slides[currentSlide];
 
  return (
    <header id="ana-sayfa" className="relative h-[100dvh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          {slide.gorsel && (
            <Image
              src={urlForImage(slide.gorsel).url()}
              alt={slide.baslik}
              fill
              className="object-cover"
              priority={index === 0}
            />
          )}
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 z-[1]"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24">
            <h1 className="font-display text-4xl md:text-8xl text-white max-w-4xl leading-[1.1] uppercase tracking-tight drop-shadow-2xl">
              {slide.baslik} <br /> 
              {slide.altBaslik && (
                <span className="text-outline block mt-2 opacity-90 transition-all duration-700">
                  {slide.altBaslik}
                </span>
              )}
            </h1>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-24 md:right-24 flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/20 pt-6 md:pt-8 z-10 gap-6 md:gap-0">
        <div className="max-w-md">
          {current.etiket && <h3 className="text-white font-display text-lg md:text-xl mb-2">{current.etiket}</h3>}
          <p className="text-white/70 text-xs md:text-sm leading-relaxed line-clamp-3 md:line-clamp-none">
             {current.aciklama || "Keeping it fresh. Be the first to browse the newest creator launches. New drops daily."}
          </p>
        </div>
        <div className="flex gap-4 self-end md:self-auto">
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
          >
            <span className="material-symbols-outlined text-sm md:text-base">west</span>
          </button>
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black hover:bg-opacity-80 transition-all"
          >
            <span className="material-symbols-outlined text-sm md:text-base">east</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
