'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Horizontal filmstrip that auto-scrolls continuously and can also be
 * dragged/swiped or scrolled by hand at any time. Manual interaction only
 * pauses the auto-scroll for as long as it lasts (plus a short settle
 * delay) — it always resumes on its own afterwards. Works with any number
 * of children, so it's safe to use with API-driven lists.
 */
export default function AutoSlider({
  children,
  speed = 0.55,
  className = '',
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const pause = () => {
    pausedRef.current = true;
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
  };
  const resume = (delay = 900) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf: number;

    const step = () => {
      if (!pausedRef.current) {
        const max = el.scrollWidth - el.clientWidth;
        if (max > 0) {
          if (el.scrollLeft >= max - 1) {
            el.scrollLeft = 0;
          } else {
            el.scrollLeft += speed;
          }
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div
      ref={trackRef}
      onPointerDown={pause}
      onPointerUp={() => resume()}
      onPointerLeave={() => resume()}
      onTouchStart={pause}
      onTouchEnd={() => resume()}
      onWheel={() => {
        pause();
        resume();
      }}
      onMouseEnter={pause}
      onMouseLeave={() => resume(300)}
      className={`flex overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${className}`}
    >
      {children}
    </div>
  );
}
