'use client';

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
}

/** Single-slide testimonial (image + quote) with auto-advance, dots and arrows. */
export default function TestimonialsCarousel() {
  const { data } = useFetch<{ testimonials?: Testimonial[]; data?: Testimonial[] }>('/testimonials', { auth: false });
  const fetched = (data?.testimonials || data?.data || []).filter((t) => t.isActive !== false);
  const list: Testimonial[] = fetched.length ? fetched : fallbackTestimonials;
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = list.length;

  useEffect(() => {
    if (paused || n < 2) return;
    const t = setInterval(() => setI((c) => (c + 1) % n), 6000);
    return () => clearInterval(t);
  }, [paused, n]);

  const t = list[i % n];
  if (!t) return null;
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="mx-auto max-w-5xl">
      <AnimatePresence mode="wait">
        <motion.div key={t._id} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.5 }} className="grid items-center gap-10 md:grid-cols-[320px_1fr]">
          <div className="relative mx-auto flex aspect-square w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-ink to-[#1f2937]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/30 blur-3xl" />
            <span className="text-[110px] font-bold leading-none text-brand">{t.name.charAt(0)}</span>
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
      <div className="mt-10 flex items-center justify-center gap-5">
        <button onClick={() => setI((c) => (c - 1 + n) % n)} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-brand hover:bg-brand"><ChevronLeft size={18} /></button>
        <div className="flex gap-2">
          {list.map((_, idx) => <button key={idx} onClick={() => setI(idx)} aria-label={`Testimonial ${idx + 1}`} className={`h-2.5 rounded-full transition-all ${idx === i % n ? 'w-8 bg-brand' : 'w-2.5 bg-gray-300'}`} />)}
        </div>
        <button onClick={() => setI((c) => (c + 1) % n)} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 hover:border-brand hover:bg-brand"><ChevronRight size={18} /></button>
      </div>
    </div>
  );
}
