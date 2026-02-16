'use client';

import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/schemas/contact';
import { sendContactEmail } from '@/app/actions/contact';
import { toast } from 'sonner';

interface ContactProps {
  data: {
    baslik: string;
    etiket?: string;
    gorsel: any;
    adres: string;
    eposta: string;
    telefon: string;
  } | null;
}

const ContactSection = ({ data }: ContactProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  if (!data) return null;

  const onSubmit = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendContactEmail(formData);
      
      if (result.success) {
        toast.success("Mesajınız başarıyla gönderildi! Sizinle en kısa sürede iletişime geçeceğiz.");
        reset();
      } else {
        toast.error(result.error || "Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin.");
      }
    } catch (error) {
      toast.error("Beklenmedik bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="grid grid-cols-1 md:grid-cols-2 min-h-[auto] md:min-h-[500px] scroll-mt-20">
      <div className="relative overflow-hidden flex flex-col justify-center px-6 py-12 md:px-20 md:py-16">
        {data.gorsel && (
             <Image
             src={urlForImage(data.gorsel).url()}
             alt={data.gorsel.altMetin || 'İletişim Görseli'}
             fill
             className="object-cover brightness-[0.9]"
           />
        )}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-white space-y-8 md:space-y-10">
          <div>
            {data.etiket && <span className="text-[10px] tracking-[0.4em] uppercase opacity-70 mb-2 block">{data.etiket}</span>}
            <h2 className="font-display text-3xl md:text-5xl">{data.baslik}</h2>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-white text-xl">location_on</span>
              </div>
              <div>
                <span className="text-[9px] tracking-widest uppercase opacity-50 block mb-1">Stüdyo Adresi</span>
                <p className="text-base md:text-lg font-medium tracking-wide whitespace-pre-line">{data.adres}</p>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-white text-xl">mail</span>
              </div>
              <div>
                <span className="text-[9px] tracking-widest uppercase opacity-50 block mb-1">E-posta</span>
                 <p className="text-base md:text-lg font-medium tracking-wide">
                    <a href={`mailto:${data.eposta}`} className="hover:opacity-80 transition-opacity">{data.eposta}</a>
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4 md:gap-6 group">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all">
                <span className="material-symbols-outlined text-white text-xl">call</span>
              </div>
              <div>
                <span className="text-[9px] tracking-widest uppercase opacity-50 block mb-1">Telefon</span>
                <p className="text-base md:text-lg font-medium tracking-wide">
                    <a href={`tel:${data.telefon}`} className="hover:opacity-80 transition-opacity">{data.telefon}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-zinc-900 flex items-center px-6 py-12 md:px-20 md:py-16">
        <div className="w-full max-w-md mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="ADINIZ" 
                  {...register("name")}
                  className={`w-full bg-transparent border-0 border-b ${errors.name ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} py-3 px-0 focus:ring-0 focus:border-brandRed transition-colors placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest uppercase text-sm`} 
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter italic">{errors.name.message}</span>}
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="SOYADINIZ" 
                  {...register("surname")}
                  className={`w-full bg-transparent border-0 border-b ${errors.surname ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} py-3 px-0 focus:ring-0 focus:border-brandRed transition-colors placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest uppercase text-sm`} 
                />
                {errors.surname && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter italic">{errors.surname.message}</span>}
              </div>
            </div>
            <div className="relative">
              <input 
                type="email" 
                placeholder="E-POSTA ADRESİNİZ" 
                {...register("email")}
                className={`w-full bg-transparent border-0 border-b ${errors.email ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} py-3 px-0 focus:ring-0 focus:border-brandRed transition-colors placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest uppercase text-sm`} 
              />
              {errors.email && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter italic">{errors.email.message}</span>}
            </div>
            <div className="relative">
              <textarea 
                rows={3} 
                placeholder="MESAJINIZ" 
                {...register("message")}
                className={`w-full bg-transparent border-0 border-b ${errors.message ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'} py-3 px-0 focus:ring-0 focus:border-brandRed transition-colors placeholder:text-gray-400 placeholder:text-[10px] placeholder:tracking-widest uppercase text-sm resize-none`}
              ></textarea>
              {errors.message && <span className="text-[10px] text-red-500 mt-1 uppercase tracking-tighter italic">{errors.message.message}</span>}
            </div>
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full group flex items-center justify-between bg-primary text-white dark:bg-white dark:text-black px-6 py-4 uppercase text-[10px] tracking-[0.3em] font-medium hover:bg-brandRed hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'GÖNDERİLİYOR...' : 'MESAJ GÖNDER'}</span>
                {!isSubmitting && <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">east</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
