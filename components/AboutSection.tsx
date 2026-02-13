import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface AboutProps {
  data: {
    etiket?: string;
    baslik: string;
    altBaslik?: string;
    icerik: any;
    gorsel: any;
  } | null;
}

const AboutSection = ({ data }: AboutProps) => {
  if (!data) return null;

  return (
    <section id="hakkimizda" className="py-32 px-12 md:px-24 bg-white dark:bg-zinc-950">
      <div className="flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-5/12 relative h-[600px]">
          <div className="absolute inset-0 bg-accent-wood/10 -translate-x-4 translate-y-4"></div>
          {data.gorsel && (
             <Image
             src={urlForImage(data.gorsel).url()}
             alt={data.gorsel.altMetin || 'About Image'}
             fill
             className="object-cover grayscale brightness-110 relative z-10"
           />
          )}
        </div>
        <div className="w-full md:w-7/12 space-y-8">
          {data.etiket && <span className="text-[10px] tracking-[0.3em] uppercase text-accent-wood font-medium">{data.etiket}</span>}
          <h2 className="font-display text-5xl md:text-6xl text-primary dark:text-white leading-tight">
            {data.baslik} <br />
            {data.altBaslik && <span className="italic font-light">{data.altBaslik}</span>}
          </h2>
          <div className="space-y-6 max-w-xl text-gray-600 dark:text-gray-300 font-display text-lg leading-relaxed">
             <div className="prose prose-sm dark:prose-invert">
                <PortableText value={data.icerik} />
             </div>
          </div>
          <div className="pt-4">
            <Link href="#" className="inline-block border-b border-primary dark:border-white pb-1 text-xs uppercase tracking-[0.2em] hover:text-brandRed hover:border-brandRed transition-colors">
              Hikayemizi Keşfedin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
