'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useFetch } from '@/hooks';
import { fallbackProjects } from '@/lib/data/fallback';

interface Project {
  _id: string;
  title: string;
  category: string;
  description?: string;
  isFeatured?: boolean;
  image?: { url?: string };
}

/** Square-tile portfolio strip (agency-02 style) that auto-slides and can be dragged/arrowed. */
export default function FeaturedProjects() {
  const { data, isLoading } = useFetch<{ projects?: Project[]; data?: Project[] }>('/projects', { auth: false });
  const all = data?.projects || data?.data || [];
  const base: Project[] = all.length ? all : fallbackProjects;
  const featured = base.filter((p) => p.isFeatured);
  const list = (featured.length ? featured : base).slice(0, 10);

  const track = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const slide = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const item = el.firstElementChild as HTMLElement | null;
    const w = (item?.offsetWidth || 300) + 24;
    const max = el.scrollWidth - el.clientWidth;
    if (dir === 1 && el.scrollLeft >= max - 4) el.scrollTo({ left: 0, behavior: 'smooth' });
    else if (dir === -1 && el.scrollLeft <= 4) el.scrollTo({ left: max, behavior: 'smooth' });
    else el.scrollBy({ left: dir * w, behavior: 'smooth' });
  };

  useEffect(() => {
    if (paused || list.length < 2) return;
    const t = setInterval(() => slide(1), 3200);
    return () => clearInterval(t);
  }, [paused, list.length]);

  if (isLoading && !list.length) return <div className="h-72 animate-pulse rounded-2xl bg-black/5" />;

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative">
      <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2" style={{ scrollbarWidth: 'none' }}>
        {list.map((p, i) => (
          <motion.div key={p._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }} className="w-[78%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
            <Link href="/portfolio" className="group relative block aspect-square overflow-hidden rounded-xl bg-gray-200">
              {p.image?.url && <Image src={p.image.url} alt={p.title} fill sizes="(max-width:640px) 78vw, (max-width:1024px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/30 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[12px] font-semibold uppercase tracking-wider text-brand">{p.category || 'Website'}</span>
                <h3 className="mt-1 text-[18px] font-semibold leading-snug text-white">{p.title}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => slide(-1)} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-brand hover:bg-brand hover:text-ink"><ChevronLeft size={20} /></button>
        <button onClick={() => slide(1)} aria-label="Next project" className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition hover:border-brand hover:bg-brand hover:text-ink"><ChevronRight size={20} /></button>
      </div>
    </div>
  );
}
