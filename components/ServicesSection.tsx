import React from 'react';

interface ServiceItem {
  baslik: string;
  ikon?: string;
  aciklama: string;
}

interface ServicesProps {
  data: {
    baslik: string;
    liste: ServiceItem[];
  } | null;
}

const ServicesSection = ({ data }: ServicesProps) => {
  if (!data) return null;

  return (
    <section id="hizmetlerimiz" className="py-32 px-12 md:px-24 bg-background-light dark:bg-zinc-900">
      <div className="mb-24 text-center md:text-left">
        <h2 className="font-display text-6xl md:text-8xl tracking-tight">{data.baslik}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {data.liste?.map((service, index) => (
          <div key={index} className="space-y-6 group">
            <span className="material-symbols-outlined text-4xl text-accent-wood">{service.ikon || 'circle'}</span>
            <h3 className="font-display text-2xl uppercase tracking-wider">{service.baslik}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed border-l border-gray-200 dark:border-gray-800 pl-6">
              {service.aciklama}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
