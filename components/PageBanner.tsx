'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { HexDeco } from './Ui';

export const BANNERS: Record<string, string> = {
  '/about': 'About Us',
  '/services': 'Our Services',
  '/portfolio': 'Our Portfolio',
  '/pricing': 'Pricing',
  '/blog': 'Blog',
  '/contact': 'Contact Us',
};

export default function PageBanner() {
  const path = (usePathname() || '/').replace(/\/$/, '') || '/';
  const title = BANNERS[path];
  if (!title) return null;
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-24 pt-44 text-white" aria-hidden="false">
      <Image src="/images/hero-agency.jpg" alt="" fill priority sizes="100vw" className="-z-20 scale-110 animate-drift object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 to-ink/60" />
      <div className="hex-pattern absolute inset-0 -z-10" />
      <HexDeco className="-right-10 top-24 h-72 w-72 text-brand-2" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <p className="animate-fadeUp text-sm font-semibold tracking-widest text-brand-2">HOME / {title.toUpperCase()}</p>
        <p className="animate-fadeUp mt-4 max-w-3xl font-display text-4xl font-bold text-white [animation-delay:.15s] sm:text-6xl">{title}</p>
      </div>
      <ChevronDown className="absolute bottom-6 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-brand-2" />
    </section>
  );
}
