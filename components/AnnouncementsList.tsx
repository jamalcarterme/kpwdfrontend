'use client';

import { useFetch } from '@/hooks';
import { announcementColors } from '@/lib/utils';

interface Announcement {
  _id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'urgent';
  isPinned?: boolean;
  isActive?: boolean;
  audience?: string;
}

export default function AnnouncementsList() {
  const { data, isLoading } = useFetch<{ announcements?: Announcement[]; data?: Announcement[] }>('/announcements', { auth: false });

  const list = (data?.announcements || data?.data || []).filter((a) => a.isActive !== false && a.audience !== 'clients');

  if (isLoading) {
    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="skeleton rounded-xl" style={{ height: 120 }} />
        ))}
      </div>
    );
  }

  if (!list.length) return null;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
      {list.map((a) => (
        <div key={a._id} className="glass rounded-xl p-5">
          <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide ${announcementColors[a.type] || announcementColors.info}`}>
            {a.isPinned ? '📌 ' : ''}
            {a.type}
          </div>
          <h4 className="text-white font-semibold mt-2">{a.title}</h4>
          <p className="text-slate-400 text-sm mt-1">{a.message}</p>
        </div>
      ))}
    </div>
  );
}
