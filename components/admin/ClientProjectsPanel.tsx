'use client';

import { useCallback, useEffect, useState } from 'react';
import { endpoints } from '@/lib/api';
import { statusColors, milestoneStatusColors, formatDateShort } from '@/lib/utils';
import AdminModal, { FieldConfig } from './AdminModal';

interface ClientOption {
  _id: string;
  name: string;
  email: string;
}

interface Milestone {
  _id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed' | 'blocked';
}

interface Note {
  _id: string;
  text: string;
  createdAt: string;
  author?: { name?: string } | string;
}

interface ClientProjectItem {
  _id: string;
  projectName: string;
  projectType?: string;
  description?: string;
  status: keyof typeof statusColors;
  progressPercent?: number;
  client: { _id: string; name?: string; email?: string } | string;
  milestones: Milestone[];
  notes: Note[];
}

const PROJECT_TYPES = ['Website', 'Mobile App', 'Custom Software'];
const STATUS_OPTIONS: (keyof typeof statusColors)[] = ['not-started', 'in-progress', 'in-review', 'completed', 'on-hold'];
const MILESTONE_STATUS: Milestone['status'][] = ['pending', 'in-progress', 'completed', 'blocked'];

export default function ClientProjectsPanel() {
  const [items, setItems] = useState<ClientProjectItem[] | null>(null);
  const [clients, setClients] = useState<ClientOption[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<ClientProjectItem | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [newMilestone, setNewMilestone] = useState('');
  const [newNote, setNewNote] = useState('');
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const [projRes, clientRes]: any = await Promise.all([endpoints.clientProjects.list(), endpoints.clientProjects.listClients()]);
      setItems(projRes?.projects || []);
      setClients(clientRes?.clients || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load client projects');
      setItems([]);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const fields: FieldConfig[] = [
    { name: 'client', label: 'Client', type: 'select', required: true, options: clients.map((c) => ({ value: c._id, label: `${c.name} (${c.email})` })) },
    { name: 'projectName', label: 'Project Name', required: true },
    { name: 'projectType', label: 'Project Type', type: 'select', options: PROJECT_TYPES.map((t) => ({ value: t, label: t })) },
    { name: 'description', label: 'Description', type: 'textarea' },
    { name: 'status', label: 'Status', type: 'select', options: STATUS_OPTIONS.map((s) => ({ value: s, label: s })) },
    { name: 'progressPercent', label: 'Progress % (0-100)', type: 'number' },
    { name: 'startDate', label: 'Start Date', type: 'date' },
    { name: 'estimatedEndDate', label: 'Estimated End Date', type: 'date' },
  ];

  async function handleSubmit(payload: any) {
    if (editing) {
      const { client, ...rest } = payload;
      await endpoints.clientProjects.update(editing._id, rest);
    } else {
      await endpoints.clientProjects.create(payload);
    }
    setEditing(null);
    await load();
  }

  async function remove(id: string) {
    if (!confirm('Delete this client project?')) return;
    try {
      await endpoints.clientProjects.delete(id);
      load();
    } catch {
      setError('Could not delete project');
    }
  }

  async function addMilestone(id: string) {
    if (!newMilestone.trim()) return;
    try {
      await endpoints.clientProjects.addMilestone(id, newMilestone.trim());
      setNewMilestone('');
      load();
    } catch {
      setError('Could not add milestone');
    }
  }

  async function setMilestoneStatus(projectId: string, milestoneId: string, status: string) {
    try {
      await endpoints.clientProjects.updateMilestone(projectId, milestoneId, status);
      load();
    } catch {
      setError('Could not update milestone');
    }
  }

  async function removeMilestone(projectId: string, milestoneId: string) {
    try {
      await endpoints.clientProjects.deleteMilestone(projectId, milestoneId);
      load();
    } catch {
      setError('Could not delete milestone');
    }
  }

  async function addNote(id: string) {
    if (!newNote.trim()) return;
    try {
      await endpoints.clientProjects.addNote(id, newNote.trim());
      setNewNote('');
      load();
    } catch {
      setError('Could not add note');
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl font-semibold text-white">Client Projects</h2>
        <button onClick={() => { setEditing(null); setModalOpen(true); }} className="btn-primary px-4 py-2 rounded-lg text-sm">New Project</button>
      </div>

      {error && <div className="toast error mb-4">{error}</div>}

      {items === null ? (
        <div className="skeleton rounded-xl" style={{ height: 200 }} />
      ) : !items.length ? (
        <p className="text-slate-500 text-sm py-10 text-center">No client projects yet.</p>
      ) : (
        <div className="space-y-3">
          {items.map((p) => {
            const clientLabel = typeof p.client === 'string' ? p.client : `${p.client?.name || ''} (${p.client?.email || ''})`;
            const expanded = expandedId === p._id;
            return (
              <div key={p._id} className="glass rounded-xl p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-white font-semibold">{p.projectName}</p>
                    <p className="text-slate-500 text-xs mt-1">{clientLabel} &middot; {p.projectType || 'Website'}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`badge ${statusColors[p.status] || statusColors['not-started']}`}>{p.status}</span>
                    <button onClick={() => setExpandedId(expanded ? null : p._id)} className="text-[var(--brand-2)] hover:underline text-xs font-semibold">
                      {expanded ? 'Hide' : 'Manage'}
                    </button>
                    <button onClick={() => { setEditing(p); setModalOpen(true); }} className="text-[var(--brand-2)] hover:underline text-xs font-semibold">Edit</button>
                    <button onClick={() => remove(p._id)} className="text-rose-400 hover:underline text-xs font-semibold">Delete</button>
                  </div>
                </div>

                {expanded && (
                  <div className="grid md:grid-cols-2 gap-5 mt-5 pt-5 border-t border-white/10">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">Milestones</p>
                      <ul className="space-y-2 mb-3">
                        {p.milestones?.map((m) => (
                          <li key={m._id} className="flex items-center justify-between gap-2 text-sm">
                            <span className="text-slate-200">{m.title}</span>
                            <div className="flex items-center gap-2">
                              <select value={m.status} onChange={(e) => setMilestoneStatus(p._id, m._id, e.target.value)} className={`!w-auto text-xs ${milestoneStatusColors[m.status]}`}>
                                {MILESTONE_STATUS.map((s) => (
                                  <option key={s} value={s}>{s}</option>
                                ))}
                              </select>
                              <button onClick={() => removeMilestone(p._id, m._id)} className="text-rose-400 text-xs">✕</button>
                            </div>
                          </li>
                        ))}
                        {!p.milestones?.length && <p className="text-slate-600 text-sm">No milestones yet.</p>}
                      </ul>
                      <div className="flex gap-2">
                        <input value={newMilestone} onChange={(e) => setNewMilestone(e.target.value)} placeholder="New milestone title" />
                        <button onClick={() => addMilestone(p._id)} className="btn-ghost px-3 rounded-lg text-sm shrink-0">Add</button>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-slate-500 mb-3">Notes</p>
                      <div className="space-y-2 mb-3 max-h-48 overflow-y-auto">
                        {p.notes?.map((n) => (
                          <div key={n._id} className="bg-white/5 rounded-lg p-2.5">
                            <p className="text-slate-200 text-sm">{n.text}</p>
                            <p className="text-slate-500 text-xs mt-1">{formatDateShort(n.createdAt)}</p>
                          </div>
                        ))}
                        {!p.notes?.length && <p className="text-slate-600 text-sm">No notes yet.</p>}
                      </div>
                      <div className="flex gap-2">
                        <input value={newNote} onChange={(e) => setNewNote(e.target.value)} placeholder="Add a note for the client" />
                        <button onClick={() => addNote(p._id)} className="btn-ghost px-3 rounded-lg text-sm shrink-0">Add</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {modalOpen && (
        <AdminModal
          title={editing ? 'Edit Client Project' : 'New Client Project'}
          fields={editing ? fields.filter((f) => f.name !== 'client') : fields}
          initial={editing || undefined}
          onClose={() => { setModalOpen(false); setEditing(null); }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
