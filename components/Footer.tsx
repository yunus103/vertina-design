import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary dark:bg-black text-white py-24 px-12 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
        <div className="space-y-8">
          <span className="text-4xl font-display tracking-tighter block text-brandRed font-extrabold">V</span>
          <p className="text-xs text-gray-400 leading-loose max-w-xs">
            Crafting timeless environments through bespoke furniture design and thoughtful interior curation since 2012.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">public</span></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">photo_camera</span></Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">alternate_email</span></Link>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500">Navigation</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Our Stories</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Collection</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Design Lab</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Sustainability</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500">Legal</h4>
          <ul className="space-y-4 text-sm font-light">
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Return Policy</Link></li>
            <li><Link href="#" className="hover:text-accent-wood transition-colors">Shipping Info</Link></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-500">Visit Us</h4>
          <p className="text-sm font-light leading-relaxed text-gray-400">
            284 Minimalist Lane<br />
            Copenhagen, Denmark<br />
            DK-2300
          </p>
          <p className="text-sm font-light text-gray-400">
            +45 20 30 40 50<br />
            studio@vertina.design
          </p>
        </div>
      </div>
      <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] tracking-widest text-gray-500 uppercase">© 2024 Vertina Design. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] tracking-widest text-gray-500 uppercase">
          <span>London</span>
          <span>Oslo</span>
          <span>Berlin</span>
          <span>Istanbul</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
