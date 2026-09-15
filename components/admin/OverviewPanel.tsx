'use client';

import { useEffect, useState } from 'react';
import { endpoints } from '@/lib/api';

const stats = [
  { key: 'projects', label: 'Projects', fetcher: () => endpoints.projects.list(), pick: (r: any) => r?.count ?? r?.projects?.length ?? 0 },
  { key: 'posts', label: 'Blog Posts', fetcher: () => endpoints.blog.list(), pick: (r: any) => r?.count ?? r?.posts?.length ?? 0 },
  { key: 'team', label: 'Team Members', fetcher: () => endpoints.team.list(), pick: (r: any) => r?.count ?? r?.team?.length ?? 0 },
  { key: 'testimonials', label: 'Testimonials', fetcher: () => endpoints.testimonials.list(), pick: (r: any) => r?.count ?? r?.testimonials?.length ?? 0 },
  { key: 'bookings', label: 'Bookings', fetcher: () => endpoints.bookings.list(), pick: (r: any) => r?.count ?? r?.bookings?.length ?? 0 },
  { key: 'messages', label: 'Contact Messages', fetcher: () => endpoints.contact.list(), pick: (r: any) => r?.count ?? r?.messages?.length ?? 0 },
  { key: 'clientProjects', label: 'Client Projects', fetcher: () => endpoints.clientProjects.list(), pick: (r: any) => r?.count ?? r?.projects?.length ?? 0 },
];

export default function OverviewPanel() {
  const [counts, setCounts] = useState<Record<string, number | null>>({});

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const results = await Promise.allSettled(stats.map((s) => s.fetcher()));
      if (cancelled) return;
      const next: Record<string, number | null> = {};
      results.forEach((r, i) => {
        next[stats[i].key] = r.status === 'fulfilled' ? stats[i].pick(r.value) : null;
      });
      setCounts(next);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-white mb-5">Overview</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.key} className="glass rounded-xl p-5">
            <p className="text-slate-500 text-xs uppercase tracking-wide">{s.label}</p>
            <p className="font-display text-3xl font-bold text-white mt-2">
              {counts[s.key] === undefined ? '—' : counts[s.key] === null ? 'N/A' : counts[s.key]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
