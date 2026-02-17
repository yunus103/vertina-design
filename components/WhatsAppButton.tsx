'use client';

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsAppButtonProps {
  phoneNumber?: string;
}

const WhatsAppButton = ({ phoneNumber }: WhatsAppButtonProps) => {
  if (!phoneNumber) return null;

  // Remove non-numeric characters for the WhatsApp link
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  
  // WhatsApp international format: https://wa.me/<number>
  // Ensure it doesn't have leading zeros if not intended, but usually +prefix is enough
  // Most Turkish numbers are 905xxxxxxxxx
  const whatsappUrl = `https://wa.me/${cleanNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 md:w-16 md:h-16 group"
      aria-label="WhatsApp üzerinden iletişime geçin"
    >
      <FaWhatsapp size={32} className="md:size-36" />
      
      {/* Tooltip for desktop */}
      <span className="absolute right-full mr-4 px-3 py-1 bg-white dark:bg-zinc-800 text-black dark:text-white text-xs font-medium rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">
        WhatsApp ile Bize Ulaşın
      </span>
      
      {/* Subtle pulse animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping -z-10"></span>
    </a>
  );
};

export default WhatsAppButton;
