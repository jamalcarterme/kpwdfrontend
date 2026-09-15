'use client';

import { useCallback, useEffect, useState } from 'react';
import { endpoints } from '@/lib/api';
import { formatDateShort } from '@/lib/utils';

interface Booking {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}

const STATUS_OPTIONS: Booking['status'][] = ['pending', 'confirmed', 'completed', 'cancelled'];

export default function BookingsPanel() {
  const [items, setItems] = useState<Booking[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res: any = await endpoints.bookings.list();
      setItems(res?.bookings || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load bookings');
      setItems([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function updateStatus(id: string, status: string) {
    try {
      await endpoints.bookings.updateStatus(id, status);
      load();
    } catch {
      setError('Could not update status');
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this booking?')) return;
    try {
      await endpoints.bookings.delete(id);
      load();
    } catch {
      setError('Could not delete booking');
    }
  }

  return (
    <div>
      <h2 className="font-display text-xl font-semibold text-white mb-5">Bookings</h2>
      {error && <div className="toast error mb-4">{error}</div>}
      {items === null ? (
        <div className="skeleton rounded-xl" style={{ height: 200 }} />
      ) : !items.length ? (
        <p className="text-slate-500 text-sm py-10 text-center">No bookings yet.</p>
      ) : (
        <div className="space-y-4">
          {items.map((b) => (
            <div key={b._id} className="glass rounded-xl p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-white font-semibold">{b.name} &middot; <span className="text-slate-400 font-normal">{b.email}</span></p>
                  <p className="text-slate-500 text-xs mt-1">
                    {b.company && `${b.company} · `}{b.projectType || 'General inquiry'}
                  </p>
                  <p className="text-slate-400 text-sm mt-2">{formatDateShort(b.preferredDate)} at {b.preferredTime}</p>
                  {b.message && <p className="text-slate-500 text-sm mt-2 italic">&ldquo;{b.message}&rdquo;</p>}
                </div>
                <div className="flex items-center gap-2">
                  <select value={b.status} onChange={(e) => updateStatus(b._id, e.target.value)} className="!w-auto text-sm">
                    {STATUS_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <button onClick={() => remove(b._id)} className="text-rose-400 hover:underline text-xs font-semibold">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
