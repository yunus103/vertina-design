'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import SmoothScroll from './SmoothScroll';

import { Toaster } from 'sonner';

import WhatsAppButton from './WhatsAppButton';

interface LayoutWrapperProps {
  children: React.ReactNode;
  settings?: any;
  footerData?: any;
  contactNumber?: string;
}

const LayoutWrapper = ({ children, settings, footerData, contactNumber }: LayoutWrapperProps) => {
  const pathname = usePathname();
  // Check if we are in the studio
  const isStudio = pathname?.startsWith('/studio');

  return (
    <>
      <Toaster position="top-center" richColors />
      {isStudio ? (
        children
      ) : (
        <SmoothScroll>
          <Navbar settings={settings} />
          {children}
          <Footer data={footerData} />
          <WhatsAppButton phoneNumber={contactNumber} />
        </SmoothScroll>
      )}
    </>
  );
};

export default LayoutWrapper;
