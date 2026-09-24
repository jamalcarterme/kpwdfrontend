'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export interface CarouselSlide {
  id: string;
  image?: string;
  category?: string;
  title: string;
  description?: string;
  href?: string;
  liveUrl?: string;
}

/**
 * Multi-item image carousel: rounded media cards with title/description
 * beneath, a "Visit Site" overlay that appears on hover/tap, nav arrows
 * overlaid on the left/right edges of the image row, and pill-style dot
 * pagination underneath (one dot per slide).
 *
 * Auto-scrolls on its own, but any manual interaction (drag/swipe, wheel,
 * or the arrow/dot controls) immediately takes over and pauses autoplay;
 * autoplay quietly resumes a few seconds after the person stops
 * interacting. This same manual-first / auto-resume pattern is used by
 * every carousel on the site.
 */
export default function ImageCarousel({ slides, className = '', autoPlayMs = 4200 }: { slides: CarouselSlide[]; className?: string; autoPlayMs?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const step = useCallback(() => {
    const el = trackRef.current;
    const item = el?.firstElementChild as HTMLElement | null;
    return (item?.offsetWidth || 300) + 20;
  }, []);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const resume = (delay = 3200) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

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

  // Track which slide is centered so the dots + autoplay stay in sync.
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

  // Auto-advance one slide at a time, unless a manual interaction paused it.
  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      const el = trackRef.current;
      if (!el) return;
      const max = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
      else el.scrollBy({ left: step(), behavior: 'smooth' });
    }, autoPlayMs);
    return () => clearInterval(t);
  }, [slides.length, step, autoPlayMs]);

  if (!slides.length) return null;

  const manualHandlers = {
    onPointerDown: pause,
    onPointerUp: () => resume(),
    onPointerLeave: () => resume(),
    onTouchStart: pause,
    onTouchEnd: () => resume(),
    onWheel: () => {
      pause();
      resume();
    },
    onMouseEnter: pause,
    onMouseLeave: () => resume(1200),
  };

  return (
    <div className={className}>
      <div className="relative">
        <div
          ref={trackRef}
          {...manualHandlers}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth"
          style={{ scrollbarWidth: 'none' }}
        >
          {slides.map((s) => {
            const destination = s.liveUrl || s.href;
            const isExternal = !!s.liveUrl;
            const Media = (
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-200">
                {s.image && (
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width:640px) 85vw, (max-width:1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {/* Hover / tap overlay with a clear "Visit Site" affordance */}
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-300 group-hover:bg-ink/55 group-hover:opacity-100 group-focus-within:bg-ink/55 group-focus-within:opacity-100">
                  <span className="inline-flex translate-y-2 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[13px] font-semibold text-ink shadow-lg transition-transform duration-300 group-hover:translate-y-0">
                    Visit Site <ExternalLink size={15} />
                  </span>
                </div>
              </div>
            );
            const Body = (
              <div className="mt-5">
                {s.category && <span className="text-[12px] font-semibold uppercase tracking-wider text-brand">{s.category}</span>}
                <h3 className="mt-1 text-[19px] font-semibold leading-snug text-ink">{s.title}</h3>
                {s.description && <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.description}</p>}
              </div>
            );
            const cardClass = 'group w-[85%] shrink-0 snap-start sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]';
            if (!destination) {
              return (
                <div key={s.id} className={cardClass}>
                  {Media}
                  {Body}
                </div>
              );
            }
            return (
              <div key={s.id} className={cardClass}>
                {isExternal ? (
                  <a href={destination} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                    {Media}
                    {Body}
                  </a>
                ) : (
                  <Link href={destination} className="block cursor-pointer">
                    {Media}
                    {Body}
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        <button
          onClick={() => {
            pause();
            go(-1);
            resume();
          }}
          aria-label="Previous"
          className="absolute left-2 top-[19%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:-left-5"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => {
            pause();
            go(1);
            resume();
          }}
          aria-label="Next"
          className="absolute right-2 top-[19%] flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white shadow-lg backdrop-blur transition hover:bg-brand hover:text-white sm:-right-5"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => {
              pause();
              goTo(idx);
              resume();
            }}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all ${idx === active ? 'w-7 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
}
