'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <nav className={`${navBaseClass} ${scrolledClass}`}>
      <div className={`flex gap-8 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${textClass}`}>
        <Link href="#" className="hover:text-brandRed transition-colors">Ana Sayfa</Link>
        <Link href="#hakkimizda" className="hover:text-brandRed transition-colors">Hakkımızda</Link>
        <Link href="#hizmetlerimiz" className="hover:text-brandRed transition-colors">Hizmetlerimiz</Link>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/">
          <span className="text-4xl font-display tracking-tighter text-brandRed font-extrabold hover:opacity-80 transition-opacity">V</span>
        </Link>
      </div>
      <div className={`flex gap-8 text-[10px] tracking-[0.2em] uppercase font-medium transition-colors duration-300 ${textClass}`}>
        <Link href="#projeler" className="hover:text-brandRed transition-colors">Projeler</Link>
        <Link href="#contact" className="hover:text-brandRed transition-colors">İletişim</Link>
      </div>
    </nav>
  );
};

export default Navbar;
