import { urlForImage } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProjectItem {
  ad: string;
  kategori?: string;
  gorsel: any;
}

interface ProjectsProps {
  data: {
    etiket?: string;
    baslik: string;
    liste: ProjectItem[];
  } | null;
}

const ProjectsSection = ({ data }: ProjectsProps) => {
  if (!data) return null;

  return (
    <section id="projeler" className="py-24 bg-[#EFECE8] dark:bg-[#1A1A1A]">
      <div className="px-12 md:px-24 mb-16 flex justify-between items-end">
        <div>
          {data.etiket && <span className="text-[10px] tracking-[0.3em] uppercase opacity-60 mb-4 block">{data.etiket}</span>}
          <h2 className="font-display text-5xl">{data.baslik}</h2>
        </div>
        <Link href="#" className="border-b border-primary dark:border-gray-400 pb-1 text-sm uppercase tracking-widest hover:opacity-50 transition-all">
          View Archive
        </Link>
      </div>
      
      <div className="masonry-grid px-12 md:px-24">
        {data.liste?.map((project, index) => {
            // Apply different classes for masonry feel based on index
            let spanClass = "col-span-12 md:col-span-6 h-[500px]"; // default
            if (index === 0) spanClass = "col-span-12 md:col-span-7 h-[600px]";
            if (index === 1) spanClass = "col-span-12 md:col-span-5 h-[400px] mt-12";
            if (index === 2) spanClass = "col-span-12 md:col-span-4 h-[500px]";
            if (index === 3) spanClass = "col-span-12 md:col-span-8 h-[700px] -mt-24";

            return (
                <div key={index} className={`${spanClass} relative overflow-hidden group`}>
                     {project.gorsel && (
                         <Image
                         src={urlForImage(project.gorsel).url()}
                         alt={project.gorsel.altMetin || project.ad || 'Project Image'}
                         fill
                         className="object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                     )}
                    <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.kategori && <p className="text-xs uppercase tracking-widest mb-1">{project.kategori}</p>}
                        <h4 className="font-display text-2xl">{project.ad}</h4>
                    </div>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
