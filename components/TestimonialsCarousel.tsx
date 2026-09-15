'use client';

import { motion } from 'motion/react';
import { useFetch } from '@/hooks';
interface Testimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  isActive?: boolean;
}

export default function TestimonialsCarousel() {
  const { data, isLoading } = useFetch<{ testimonials?: Testimonial[]; data?: Testimonial[] }>('/testimonials', { auth: false });

  const list = (data?.testimonials || data?.data || []).filter((t) => t.isActive !== false);

  if (isLoading) {
    return (
      <div className="flex gap-6 mt-14 overflow-x-auto px-5 lg:px-8 pb-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl shrink-0" style={{ height: 220, width: 320 }} />
        ))}
      </div>
    );
  }

  if (!list.length) return null;

  return (
    <div className="flex gap-6 mt-14 overflow-x-auto px-5 lg:px-8 pb-4" style={{ scrollbarWidth: 'none' }}>
      {list.map((t, i) => (
        <motion.div
          key={t._id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="glass rounded-2xl p-7 card-hover min-w-[300px] max-w-sm shrink-0"
        >
          <div className="text-[var(--brand-2)] text-lg mb-3">{'★'.repeat(t.rating || 5)}</div>
          <p className="text-slate-300 text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
          <div className="mt-5">
            <p className="font-display font-semibold text-white text-sm">{t.name}</p>
            <p className="text-slate-500 text-xs mt-0.5">
              {t.role}{t.company ? `, ${t.company}` : ''}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
