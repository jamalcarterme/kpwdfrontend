'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useFetch } from '@/hooks';
import { fallbackTeam } from '@/lib/data/fallback';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  order?: number;
  isActive?: boolean;
  photo?: { url?: string };
  socials?: { linkedin?: string; twitter?: string; github?: string; instagram?: string };
}

export default function TeamGrid() {
  const { data } = useFetch<{ team?: TeamMember[]; data?: TeamMember[] }>('/team', { auth: false });
  const fetched = (data?.team || data?.data || []).filter((t) => t.isActive !== false);
  const list: TeamMember[] = (fetched.length ? fetched : fallbackTeam).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {list.map((m, i) => (
        <motion.div key={m._id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5, delay: i * 0.1 }} className="group w-full max-w-[340px] text-center sm:w-[calc(33.333%-22px)]">
          <div className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-ink to-[#1f2937]">
            {m.photo?.url ? (
              <Image src={m.photo.url} alt={m.name || 'Team member'} fill sizes="340px" className="object-cover transition-transform duration-700 group-hover:scale-105" />
            ) : (
              <div className="flex h-full items-center justify-center text-[90px] font-bold text-brand">{(m.name || '?').charAt(0)}</div>
            )}
          </div>
          <h4 className="mt-5 text-[20px] font-semibold text-ink">{m.name}</h4>
          <p className="mt-1 text-[15px] text-gray-500">{m.role}</p>
          <div className="mt-3 flex justify-center gap-3 text-[13px] font-semibold text-gray-500">
            {m.socials?.linkedin && <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand">LinkedIn</a>}
            {m.socials?.twitter && <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Twitter</a>}
            {m.socials?.github && <a href={m.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand">GitHub</a>}
            {m.socials?.instagram && <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Instagram</a>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
