'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { api, endpoints } from '@/lib/api';
import { formatDateShort, statusColors, milestoneStatusColors } from '@/lib/utils';

interface Milestone {
  _id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
  dueDate?: string;
}

interface Note {
  _id: string;
  text: string;
  createdAt: string;
  author?: { name?: string } | string;
}

interface ClientProject {
  _id: string;
  projectName: string;
  projectType?: string;
  description?: string;
  status: keyof typeof statusColors;
  progressPercent?: number;
  milestones: Milestone[];
  notes: Note[];
}

export default function ClientDashboardPage() {
  const router = useRouter();
  const [projects, setProjects] = useState<ClientProject[] | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [noteText, setNoteText] = useState('');
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = api.getUser();
    if (!user) {
      router.push('/client/login');
      return;
    }
    (async () => {
      try {
        const res: any = await endpoints.clientProjects.mine();
        const list: ClientProject[] = res?.projects || res?.data || (Array.isArray(res) ? res : []);
        setProjects(list);
        if (list.length) setActiveId(list[0]._id);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Could not load your projects.');
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const active = projects?.find((p) => p._id === activeId) || null;

  const progress = active?.progressPercent ?? (active?.milestones?.length
    ? Math.round((active.milestones.filter((m) => m.status === 'completed').length / active.milestones.length) * 100)
    : 0);

  async function handleAddNote(e: React.FormEvent) {
    e.preventDefault();
    if (!active || !noteText.trim()) return;
    setPosting(true);
    try {
      await endpoints.clientProjects.addNote(active._id, noteText.trim());
      const res: any = await endpoints.clientProjects.mine();
      const list: ClientProject[] = res?.projects || res?.data || (Array.isArray(res) ? res : []);
      setProjects(list);
      setNoteText('');
    } catch {
      setError('Could not send your note. Please try again.');
    } finally {
      setPosting(false);
    }
  }

  function handleLogout() {
    api.setToken(null);
    api.setUser(null);
    router.push('/client/login');
  }

  return (
    <main className="pt-28 pb-24 max-w-5xl mx-auto px-5 lg:px-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Client Portal</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">Your Project{projects && projects.length > 1 ? 's' : ''}</h1>
        </div>
        <button onClick={handleLogout} className="btn-ghost px-4 py-2 rounded-lg text-sm">Log out</button>
      </div>

      {error && <div className="toast error mt-6">{error}</div>}

      {projects === null && (
        <div className="grid gap-4 mt-10">
          <div className="skeleton rounded-2xl" style={{ height: 200 }} />
        </div>
      )}

      {projects && projects.length === 0 && (
        <div className="glass rounded-2xl p-10 text-center mt-10">
          <p className="text-slate-300">No project has been linked to your account yet.</p>
          <p className="text-slate-500 text-sm mt-2">Once we kick off your project, it will show up here automatically.</p>
        </div>
      )}

      {projects && projects.length > 1 && (
        <div className="flex flex-wrap gap-2 mt-8">
          {projects.map((p) => (
            <button key={p._id} onClick={() => setActiveId(p._id)} className={`px-4 py-2 rounded-lg text-sm ${activeId === p._id ? 'btn-primary' : 'btn-ghost'}`}>
              {p.projectName}
            </button>
          ))}
        </div>
      )}

      {active && (
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="glass rounded-2xl p-8">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="font-display text-2xl font-semibold text-white">{active.projectName}</h2>
                <span className={`badge ${statusColors[active.status] || statusColors['not-started']}`}>{active.status.replace('-', ' ')}</span>
              </div>
              {active.projectType && <p className="text-slate-500 text-xs mt-1">{active.projectType}</p>}
              {active.description && <p className="text-slate-400 text-sm mt-3">{active.description}</p>}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span>Overall progress</span>
                  <span>{progress}%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-display text-lg font-semibold text-white mb-4">Milestones</h3>
              {!active.milestones?.length && <p className="text-slate-500 text-sm">No milestones added yet.</p>}
              <ul className="space-y-3">
                {active.milestones?.map((m) => (
                  <li key={m._id} className="flex items-center justify-between gap-3 border-b border-white/5 pb-3 last:border-0">
                    <span className="text-slate-200 text-sm">{m.title}</span>
                    <span className={`badge ${milestoneStatusColors[m.status]}`}>{m.status.replace('-', ' ')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 flex flex-col max-h-[560px]">
            <h3 className="font-display text-lg font-semibold text-white mb-4">Notes &amp; Updates</h3>
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {!active.notes?.length && <p className="text-slate-500 text-sm">No notes yet.</p>}
              {active.notes?.map((n) => (
                <div key={n._id} className="bg-white/5 rounded-lg p-3">
                  <p className="text-slate-200 text-sm">{n.text}</p>
                  <p className="text-slate-500 text-xs mt-1">
                    {typeof n.author === 'string' ? n.author : n.author?.name || 'Team'} &middot; {formatDateShort(n.createdAt)}
                  </p>
                </div>
              ))}
            </div>
            <form onSubmit={handleAddNote} className="mt-4">
              <textarea rows={2} value={noteText} onChange={(e) => setNoteText(e.target.value)} placeholder="Send a note to the team…" />
              <button type="submit" disabled={posting || !noteText.trim()} className="btn-primary w-full mt-2 py-2">
                {posting ? 'Sending…' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}

      <p className="text-center text-slate-600 text-xs mt-16">
        Need help? <Link href="/contact" className="text-[var(--brand-2)]">Contact us</Link>
      </p>
    </main>
  );
}
