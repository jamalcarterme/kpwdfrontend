'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useFetch } from '@/hooks';
import { fallbackTestimonials } from '@/lib/data/fallback';

interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  isActive?: boolean;
  photo?: { url?: string };
  logo?: { url?: string };
}

/**
 * Single-slide testimonial (photo/company logo + quote) with auto-advance,
 * dots and arrows. Auto-advances on its own, but pauses immediately on any
 * manual interaction (hover, touch, drag, or the arrow/dot controls) and
 * quietly resumes a few seconds after the person stops interacting — the
 * same manual-first / auto-resume pattern used by every carousel on the site.
 */
export default function TestimonialsCarousel() {
  const { data } = useFetch<{ testimonials?: Testimonial[]; data?: Testimonial[] }>('/testimonials', { auth: false });
  const fetched = (data?.testimonials || data?.data || []).filter((t) => t.isActive !== false);
  const list: Testimonial[] = fetched.length ? fetched : fallbackTestimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = list.length;

  const pauseThenResume = (delay = 5000) => {
    setPaused(true);
    window.clearTimeout((pauseThenResume as unknown as { _t?: number })._t);
    (pauseThenResume as unknown as { _t?: number })._t = window.setTimeout(() => setPaused(false), delay);
  };

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((c) => (c + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = list[i % n];
  if (!t) return null;
  const image = t.photo?.url || t.logo?.url;
  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => pauseThenResume(1200)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => pauseThenResume()}
      className="mx-auto max-w-5xl"
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div key={t._id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
            <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-[#1f2937]">
              {image ? (
                <Image src={image} alt={t.company || t.name} fill sizes="320px" className="object-cover" />
              ) : (
                <>
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
                  <span className="text-[110px] font-bold leading-none text-brand">{t.name.charAt(0)}</span>
                </>
              )}
              <Quote className="absolute bottom-5 right-5 text-white/20" size={44} />
            </div>
            <div>
              <div className="text-[20px] tracking-widest text-brand">{'★'.repeat(t.rating || 5)}</div>
              <h3 className="mt-3 text-[22px] font-semibold leading-relaxed text-ink sm:text-[26px]">&ldquo;{t.quote}&rdquo;</h3>
              <p className="mt-6 text-[17px] font-semibold text-ink">{t.name}</p>
              <p className="text-[15px] text-gray-500">{t.role}{t.company ? `, ${t.company}` : ''}</p>
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => { pauseThenResume(); setI((c) => (c - 1 + n) % n); }} aria-label="Previous" className="absolute left-0 top-[19%] flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:-left-5"><ChevronLeft size={20} /></button>
        <button onClick={() => { pauseThenResume(); setI((c) => (c + 1) % n); }} aria-label="Next" className="absolute right-0 top-[19%] flex h-10 w-10 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:-right-5"><ChevronRight size={20} /></button>
      </div>
      <div className="mt-8 flex justify-center gap-2">
        {list.map((_, idx) => <button key={idx} onClick={() => { pauseThenResume(); setI(idx); }} aria-label={`Testimonial ${idx + 1}`} className={`h-2.5 rounded-full transition-all ${idx === i % n ? 'w-7 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`} />)}
      </div>
    </div>
  );
}
