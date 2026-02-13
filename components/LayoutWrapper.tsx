'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutWrapperProps {
  children: React.ReactNode;
  settings?: any;
  footerData?: any;
}

const LayoutWrapper = ({ children, settings, footerData }: LayoutWrapperProps) => {
  const pathname = usePathname();
  // Check if we are in the studio
  const isStudio = pathname?.startsWith('/studio');

  return (
    <>
      {!isStudio && <Navbar settings={settings} />}
      {children}
      {!isStudio && <Footer data={footerData} />}
    </>
  );
};

export default LayoutWrapper;
