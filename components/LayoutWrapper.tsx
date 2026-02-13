'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // Check if we are in the studio
  const isStudio = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudio && <Navbar />}
      {children}
      {!isStudio && <Footer />}
    </>
  );
};

export default LayoutWrapper;
