'use client';

import { useCallback, useEffect, useState } from 'react';
import { endpoints } from '@/lib/api';
import { formatDateShort } from '@/lib/utils';

interface ContactMessage {
  _id: string;
  name: string;
  email: string;
  business?: string;
  country?: string;
  service?: string;
  message: string;
  isRead: boolean;
  createdAt: string;
}

export default function MessagesPanel() {
  const [items, setItems] = useState<ContactMessage[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res: any = await endpoints.contact.list();
      setItems(res?.messages || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load messages');
      setItems([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function markRead(id: string) {
    try {
      await endpoints.contact.markRead(id);
      load();
    } catch {
      setError('Could not update message');
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this message?')) return;
    try {
      await endpoints.contact.delete(id);
      load();
    } catch {
      setError('Could not delete message');
    }
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-white mb-5">Contact Messages</h2>
      {error && <div className="toast error mb-4">{error}</div>}
      {items === null ? (
        <div className="skeleton rounded-xl" style={{ height: 200 }} />
      ) : !items.length ? (
        <p className="text-slate-500 text-sm py-10 text-center">No messages yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((m) => (
            <div key={m._id} className={`glass rounded-xl p-5 ${!m.isRead ? 'border-l-2 !border-[var(--brand)]' : ''}`}>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-white font-semibold">
                    {m.name} <span className="text-slate-400 font-normal">&middot; {m.email}</span>
                    {!m.isRead && <span className="badge bg-[var(--brand)] text-white ml-2">New</span>}
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    {[m.business, m.country, m.service].filter(Boolean).join(' · ') || 'No extra details'}
                  </p>
                  <p className="text-slate-300 text-sm mt-2">{m.message}</p>
                  <p className="text-slate-600 text-xs mt-2">{formatDateShort(m.createdAt)}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  {!m.isRead && (
                    <button onClick={() => markRead(m._id)} className="text-[var(--brand-2)] hover:underline text-xs font-semibold">Mark read</button>
                  )}
                  <button onClick={() => remove(m._id)} className="text-rose-400 hover:underline text-xs font-semibold">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
