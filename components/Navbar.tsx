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

  const navBaseClass = "fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-500 ease-in-out";
  const scrolledClass = isScrolled 
    ? "bg-white/80 dark:bg-black/80 backdrop-blur-md py-4 shadow-sm" 
    : "bg-transparent py-6";

  const textClass = isScrolled
    ? "text-primary dark:text-white"
    : "text-white"; // Assuming Hero is dark as per design

  return (
    <nav className={`${navBaseClass} ${scrolledClass} justify-between px-6 md:px-12`}>
      <div className="flex items-center relative z-50">
        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
          {settings?.logo ? (
             <div className="relative w-32 h-10 md:w-40 md:h-12">
               <Image 
                 src={urlForImage(settings.logo).url()} 
                 alt={settings.firmaAdi || 'Logo'} 
                 fill 
                 className="object-contain"
                 priority
               />
             </div>
          ) : (
            <span className={`text-3xl md:text-4xl font-display tracking-tighter font-extrabold hover:opacity-80 transition-opacity ${isMobileMenuOpen ? 'text-brandRed' : 'text-brandRed'}`}>
              {settings?.firmaAdi || 'Vetrina'}
            </span>
          )}
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className={`hidden md:flex gap-10 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${textClass}`}>
        <Link href="#" className="hover:text-brandRed transition-colors">Ana Sayfa</Link>
        <Link href="#hizmetlerimiz" className="hover:text-brandRed transition-colors">Hizmetlerimiz</Link>
        <Link href="#projeler" className="hover:text-brandRed transition-colors">Projeler</Link>
        <Link href="#contact" className="hover:text-brandRed transition-colors">İletişim</Link>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className={`material-symbols-outlined text-3xl transition-colors duration-300 ${isMobileMenuOpen ? 'text-black dark:text-white' : textClass.split(' ')[0]}`}>
          {isMobileMenuOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-backgroundLight dark:bg-backgroundDark z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-center text-xl tracking-[0.1em] uppercase font-display font-medium text-primary dark:text-white">
          <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Ana Sayfa</Link>
          <Link href="#hizmetlerimiz" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Hizmetlerimiz</Link>
          <Link href="#projeler" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">Projeler</Link>
          <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-brandRed transition-colors">İletişim</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
