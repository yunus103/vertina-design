import React from 'react';

interface TestimonialItem {
  ad: string;
}

interface TestimonialsProps {
  data: {
    baslik: string;
    liste: TestimonialItem[];
  } | null;
}

const TestimonialsSection = ({ data }: TestimonialsProps) => {
  if (!data) return null;

  return (
    <section className="py-16 md:py-32 bg-background-light dark:bg-background-dark border-y border-gray-200 dark:border-gray-800">
      <div className="px-6 md:px-24 mb-12">
        <h2 className="font-display text-4xl uppercase tracking-widest">{data.baslik}</h2>
      </div>
      <div className="relative overflow-hidden py-12">
        <div className="flex whitespace-nowrap animate-marquee">
            {/* Duplicated list for seamless infinite scroll */}
            <div className="flex items-center gap-24 px-12">
                {data.liste?.map((item, index) => (
                     <span key={`1-${index}`} className="text-2xl md:text-5xl font-display uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity cursor-default">
                        {item.ad}
                     </span>
                ))}
            </div>
             <div className="flex items-center gap-24 px-12">
                {data.liste?.map((item, index) => (
                     <span key={`2-${index}`} className="text-4xl md:text-5xl font-display uppercase tracking-[0.2em] opacity-30 hover:opacity-100 transition-opacity cursor-default">
                        {item.ad}
                     </span>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
