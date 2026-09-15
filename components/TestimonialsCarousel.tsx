'use client';

import { motion } from 'motion/react';
import { useFetch } from '@/hooks';
interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  country?: string;
  quote: string;
  rating?: number;
  isActive?: boolean;
  photo?: { url?: string };
}

export default function TestimonialsCarousel() {
  const { data, isLoading } = useFetch<{ testimonials?: Testimonial[]; data?: Testimonial[] }>('/testimonials', { auth: false });

  const list = (data?.testimonials || data?.data || []).filter((t) => t.isActive !== false);

  if (isLoading) {
    return (
      <div className="flex gap-5 sm:gap-6 mt-14 overflow-x-auto px-5 lg:px-8 pb-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl shrink-0" style={{ height: 200, width: 260 }} />
        ))}
      </div>
    );
  }

  if (!list.length) return null;

  return (
    <div className="flex gap-5 sm:gap-6 mt-14 overflow-x-auto snap-x snap-mandatory px-5 lg:px-8 pb-4 justify-start sm:justify-center" style={{ scrollbarWidth: 'none' }}>
      {list.map((t, i) => (
        <motion.div
          key={t._id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="glass rounded-2xl p-5 sm:p-7 card-hover snap-center min-w-[260px] sm:min-w-[300px] max-w-[85vw] sm:max-w-sm shrink-0"
        >
          <div className="text-[var(--brand-2)] text-base sm:text-lg mb-3">{'★'.repeat(t.rating || 5)}</div>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="flex items-center gap-3 mt-5">
            {t.photo?.url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={t.photo.url}
                alt={t.name || 'Client'}
                className="w-10 h-10 rounded-full object-cover bg-[var(--surface-2)] shrink-0"
                loading="lazy"
              />
            ) : (
              <div className="w-10 h-10 rounded-full bg-[var(--surface-2)] flex items-center justify-center text-sm font-display font-bold text-[var(--brand-2)] shrink-0">
                {(t.name || '?').charAt(0)}
              </div>
            )}
            <div>
              <p className="font-display font-semibold text-[var(--text-primary)] text-sm">{t.name}</p>
              <p className="text-[var(--text-secondary)] text-xs mt-0.5">
                {t.role}{t.company ? `, ${t.company}` : ''}{t.country ? ` · ${t.country}` : ''}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
