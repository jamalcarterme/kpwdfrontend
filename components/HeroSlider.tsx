'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const slides = [
  {
    eyebrow: 'Lagos · Serving 12+ countries',
    title: 'Built for Businesses Who Are Done Being Invisible Online.',
    text: 'A premium website, e-commerce store or custom software build, engineered to make you the obvious choice in your market and turn visitors into paying clients. Designed with intent, built with clean code, shipped fast.',
    cta: ['Book a Free Strategy Call', '/contact#schedule'],
  },
  {
    eyebrow: 'Full-stack web development',
    title: 'Custom Web Apps That Run Your Business.',
    text: 'From client portals to booking systems and admin dashboards, we build on the MERN stack (React, Node.js, MongoDB, Express) so your website works as hard as you do.',
    cta: ['Get a Free Quote', '/contact'],
  },
  {
    eyebrow: 'E-commerce & SEO',
    title: 'Online Stores Built to Sell and Rank on Google.',
    text: 'Secure checkout, online payments and on-page SEO from day one, so the right customers find you and buy from you with confidence.',
    cta: ['See Our Work', '/portfolio'],
  },
];

export default function HeroSlider() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchX = useRef<number | null>(null);

  const resume = (delay = 4000) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setPaused(false), delay);
  };
  const goTo = (idx: number) => {
    setPaused(true);
    setI((idx + slides.length) % slides.length);
    resume();
  };

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((c) => (c + 1) % slides.length), 7000);
    return () => clearInterval(t);
  }, [paused]);

  const s = slides[i];
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => resume(1500)}
      onTouchStart={(e) => {
        setPaused(true);
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const start = touchX.current;
        const end = e.changedTouches[0].clientX;
        if (start !== null && Math.abs(start - end) > 40) {
          setI((c) => (start - end > 0 ? (c + 1) % slides.length : (c - 1 + slides.length) % slides.length));
        }
        touchX.current = null;
        resume();
      }}
      className="relative min-h-[420px] max-w-3xl"
    >
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }}>
          <h4 className="text-[15px] font-semibold uppercase tracking-[0.18em] text-brand">{s.eyebrow}</h4>
          <h1 className="mt-5 text-[38px] font-bold leading-[1.12] text-white sm:text-[54px]">{s.title}</h1>
          <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-white/80">{s.text}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link href={s.cta[1]} className="rounded-full bg-brand px-8 py-3.5 text-[15px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(99,102,241,0.4)]">{s.cta[0]}</Link>
            <Link href="/contact" className="rounded-full border border-white/50 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:border-brand hover:text-brand">Get a Free Quote</Link>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-10 flex gap-2.5">
        {slides.map((_, idx) => (
          <button key={idx} onClick={() => goTo(idx)} aria-label={`Slide ${idx + 1}`} className={`h-1.5 rounded-full transition-all ${idx === i ? 'w-10 bg-brand' : 'w-4 bg-white/40'}`} />
        ))}
      </div>
    </div>
  );
}
