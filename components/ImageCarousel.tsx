'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  image?: string;
  category?: string;
  title: string;
  description?: string;
  href?: string;
}

/**
 * Multi-item image carousel: rounded media cards with title/description
 * beneath, nav arrows overlaid on the left/right edges of the image row,
 * and pill-style dot pagination underneath (one dot per slide). Scrolls
 * one card at a time and supports drag/swipe via native scroll-snap.
 */
export default function ImageCarousel({ slides, className = '' }: { slides: CarouselSlide[]; className?: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const step = useCallback(() => {
    const el = trackRef.current;
    const item = el?.firstElementChild as HTMLElement | null;
    return (item?.offsetWidth || 300) + 20;
  }, []);

  const go = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: 'smooth' });
    else el.scrollBy({ left: dir * step(), behavior: 'smooth' });
  };

  const goTo = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: idx * step(), behavior: 'smooth' });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setActive(Math.round(el.scrollLeft / step())));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      el.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, [step]);

  if (!slides.length) return null;

  return (
    <div className={className}>
      <div className="relative">
        <div ref={trackRef} className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth" style={{ scrollbarWidth: 'none' }}>
          {slides.map((s) => {
            const Card = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-200">
                  {s.image && <Image src={s.image} alt={s.title} fill sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />}
                </div>
                <div className="mt-5">
                  {s.category && <span className="text-[12px] font-semibold uppercase tracking-wider text-brand">{s.category}</span>}
                  <h3 className="mt-1 text-[19px] font-semibold leading-snug text-ink">{s.title}</h3>
                  {s.description && <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.description}</p>}
                </div>
              </>
            );
            return (
              <div key={s.id} className="group w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]">
                {s.href ? <Link href={s.href} className="block">{Card}</Link> : Card}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => go(-1)}
          aria-label="Previous"
          className="absolute left-2 top-[19%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-ink sm:-left-5"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next"
          className="absolute right-2 top-[19%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-ink sm:-right-5"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${idx === active ? 'w-7 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
