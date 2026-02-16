'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';

interface NavbarProps {
  settings?: {
    logo?: any;
    firmaAdi?: string;
  };
}

const Navbar = ({ settings }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navBaseClass = "fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all duration-500 ease-in-out";
  const scrolledClass = isScrolled 
    ? "bg-white/95 dark:bg-black/95 backdrop-blur-md py-3 md:py-4 shadow-sm" 
    : "bg-transparent py-4 md:py-6";

  const textClass = isScrolled
    ? "text-primary dark:text-white"
    : "text-white"; 

  return (
    <nav className={`${navBaseClass} ${scrolledClass}`}>
      <div className="flex items-center relative z-[70]">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          {settings?.logo ? (
             <div className="relative w-28 h-8 md:w-40 md:h-12">
               <Image 
                 src={urlForImage(settings.logo).url()} 
                 alt={settings.firmaAdi || 'Logo'} 
                 fill 
                 className="object-contain"
                 priority
               />
             </div>
          ) : (
             <span className={`text-2xl md:text-3xl font-display tracking-tighter font-extrabold hover:opacity-80 transition-opacity ${isMobileMenuOpen ? 'text-primary dark:text-white' : 'text-brandRed'}`}>
               {settings?.firmaAdi || 'Vetrina'}
             </span>
          )}
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${textClass}`}>
        <Link href="#ana-sayfa" className="hover:text-brandRed transition-colors">Ana Sayfa</Link>
        <Link href="#hizmetlerimiz" className="hover:text-brandRed transition-colors">Hizmetlerimiz</Link>
        <Link href="#projeler" className="hover:text-brandRed transition-colors">Projeler</Link>
        <Link href="#contact" className="hover:text-brandRed transition-colors">İletişim</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden relative z-[70] w-10 h-10 flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={`material-symbols-outlined text-3xl transition-colors duration-300 ${isMobileMenuOpen ? 'text-primary dark:text-white' : textClass.split(' ')[0]}`}>
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 h-[100dvh] bg-backgroundLight dark:bg-backgroundDark z-[60] flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center text-2xl tracking-[0.1em] uppercase font-display font-medium text-primary dark:text-white">
          <Link href="#ana-sayfa" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Ana Sayfa</Link>
          <Link href="#hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Hizmetlerimiz</Link>
          <Link href="#projeler" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Projeler</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
