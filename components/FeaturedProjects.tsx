'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useFetch } from '@/hooks';
import { truncate } from '@/lib/utils';
interface Project {
  _id: string;
  title: string;
  category: string;
  description: string;
  isFeatured?: boolean;
  image?: { url?: string };
}

export default function FeaturedProjects() {
  const { data, isLoading } = useFetch<{ projects?: Project[]; data?: Project[] }>('/projects', { auth: false });

  const all = data?.projects || data?.data || [];
  const featured = all.filter((p) => p.isFeatured);
  const list = (featured.length ? featured : all).slice(0, 3);

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl" style={{ height: 300 }} />
        ))}
      </div>
    );
  }

  if (!isLoading && list.length === 0) {
    return <p className="text-center text-slate-400 mt-10">Projects coming soon — check back shortly.</p>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-6 mt-10">
      {list.map((p, i) => (
        <motion.div
          key={p._id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
        >
          <Link href="/portfolio" className="reveal glass rounded-2xl overflow-hidden card-hover group block">
            <div className="aspect-[4/3] overflow-hidden bg-[var(--surface-2)] relative">
              {p.image?.url && (
                <Image
                  src={p.image.url}
                  alt={p.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              )}
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold text-[var(--brand-2)] uppercase tracking-wide">{p.category || 'Website'}</span>
              <h3 className="font-display text-lg font-semibold text-white mt-1">{p.title}</h3>
              <p className="text-slate-400 text-sm mt-2 clamp-2">{truncate(p.description || '', 120)}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
