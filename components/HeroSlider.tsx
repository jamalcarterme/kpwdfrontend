'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    img: '/images/hero-agency.jpg',
    alt: 'Web design agency team collaborating over laptops',
    eyebrow: 'Lagos · Serving 12+ countries',
    title: 'Built for Businesses Who Are Done Being Invisible Online.',
    cta: ['Book a Free Strategy Call', '/contact#schedule'],
  },
  {
    img: '/assets/img/portfolio-tasty-chops.png',
    alt: 'E-commerce website built by King Praise Web Design',
    eyebrow: 'E-commerce & SEO',
    title: 'Online Stores Built to Sell and Rank on Google.',
    cta: ['See Our Work', '/portfolio'],
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const touch = useRef<number | null>(null);
  const n = slides.length;
  useEffect(() => { const id = setInterval(() => setI((x) => (x + 1) % n), 6500); return () => clearInterval(id); }, [i, n]);
  const go = (d: number) => setI((x) => (x + d + n) % n);
  const t = slides[i];
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[100svh] overflow-hidden bg-ink text-white"
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const d = e.changedTouches[0].clientX - touch.current;
        if (Math.abs(d) > 50) go(d < 0 ? 1 : -1);
        touch.current = null;
      }}
    >
      {slides.map((s, k) => (
        <div key={s.img} className={`absolute inset-0 transition-opacity duration-[1400ms] ${k === i ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`absolute inset-0 ${k === i ? 'animate-drift' : ''}`}>
            <Image src={s.img} alt={s.alt} fill priority={k === 0} sizes="100vw" className="object-cover" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 bg-ink/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
      <div className="hex-pattern absolute inset-0 opacity-50" />
      <div className="relative flex min-h-[100svh] items-center justify-center px-6 text-center">
        <div key={i} className="max-w-3xl">
          <p className="animate-fadeUp text-xs font-bold uppercase tracking-[.3em] text-brand-2 sm:text-sm">{t.eyebrow}</p>
          {i === 0 ? (
            <h1 className="animate-fadeUp mt-8 font-display text-3xl font-light leading-snug tracking-wide text-white [animation-delay:.15s] sm:text-5xl lg:text-6xl">{t.title}</h1>
          ) : (
            <p className="animate-fadeUp mt-8 font-display text-3xl font-light leading-snug tracking-wide text-white [animation-delay:.15s] sm:text-5xl lg:text-6xl">{t.title}</p>
          )}
          <Link href={t.cta[1]} className="animate-fadeUp mt-10 inline-block rounded-md bg-brand px-10 py-4 text-sm font-medium text-white shadow-lg shadow-brand/30 transition hover:-translate-y-0.5 hover:bg-brand-2 [animation-delay:.3s]">{t.cta[0]}</Link>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-3">
        {slides.map((_, k) => <button key={k} aria-label={`Slide ${k + 1}`} onClick={() => setI(k)} className={`h-3.5 w-3.5 transition-all duration-300 ${k === i ? 'scale-110 bg-white' : 'bg-white/40 hover:bg-white/70'}`} />)}
      </div>
      <button aria-label="Previous slide" onClick={() => go(-1)} className="absolute left-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 transition hover:bg-white hover:text-ink md:grid"><ChevronLeft className="h-5 w-5" /></button>
      <button aria-label="Next slide" onClick={() => go(1)} className="absolute right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/30 transition hover:bg-white hover:text-ink md:grid"><ChevronRight className="h-5 w-5" /></button>
    </section>
  );
}
