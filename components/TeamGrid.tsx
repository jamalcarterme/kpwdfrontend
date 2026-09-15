'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useFetch } from '@/hooks';
import { fallbackTeam, type FallbackTeamMember } from '@/lib/data/fallback';

type TeamMember = FallbackTeamMember & { isActive?: boolean };

export default function TeamGrid() {
  const { data, isLoading } = useFetch<{ team?: TeamMember[]; data?: TeamMember[] }>('/team', { auth: false });

  const fromApi = (data?.team || data?.data || []).filter((t) => t.isActive !== false);
  const list = (fromApi.length > 0 ? fromApi : fallbackTeam).sort((a, b) => (a.order || 0) - (b.order || 0));

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="skeleton rounded-2xl" style={{ height: 280 }} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {list.map((m, i) => (
        <motion.div
          key={m._id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="glass rounded-2xl p-6 text-center card-hover"
        >
          {m.photo?.url ? (
            <Image src={m.photo.url} alt={m.name || 'Team member'} width={96} height={96} className="avatar w-24 h-24 rounded-full object-cover mx-auto bg-[var(--surface-2)]" />
          ) : (
            <div className="avatar w-24 h-24 rounded-full mx-auto bg-[var(--surface-2)] flex items-center justify-center text-2xl font-display font-bold text-[var(--brand-2)]">
              {(m.name || '?').charAt(0)}
            </div>
          )}
          <h3 className="font-display font-semibold text-white mt-4">{m.name}</h3>
          <p className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-wide mt-1">{m.role}</p>
          {m.bio && <p className="text-slate-400 text-sm mt-3 clamp-3">{m.bio}</p>}
          <div className="flex justify-center gap-3 mt-4 text-slate-500">
            {m.socials?.linkedin && <a href={m.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">in</a>}
            {m.socials?.twitter && <a href={m.socials.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">tw</a>}
            {m.socials?.github && <a href={m.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">gh</a>}
            {m.socials?.instagram && <a href={m.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ig</a>}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
