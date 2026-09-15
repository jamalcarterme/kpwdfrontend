'use client';

import { useCallback, useEffect, useState } from 'react';
import AdminTable, { ColumnConfig } from './AdminTable';
import AdminModal, { FieldConfig } from './AdminModal';

interface EntityPanelProps<T extends { _id: string }> {
  title: string;
  addLabel?: string;
  fields: FieldConfig[];
  columns: ColumnConfig<T>[];
  list: () => Promise<any>;
  create: (payload: any, hasFile: boolean) => Promise<any>;
  update: (id: string, payload: any, hasFile: boolean) => Promise<any>;
  remove: (id: string) => Promise<any>;
  extractList?: (res: any) => T[];
}

export default function EntityPanel<T extends { _id: string }>({
  title,
  addLabel = 'Add New',
  fields,
  columns,
  list,
  create,
  update,
  remove,
  extractList,
}: EntityPanelProps<T>) {
  const [items, setItems] = useState<T[] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await list();
      const arr = extractList ? extractList(res) : res?.data || res?.[Object.keys(res || {})[0]] || (Array.isArray(res) ? res : []);
      setItems(Array.isArray(arr) ? arr : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load');
      setItems([]);
    }
  }, [list, extractList]);

  useEffect(() => {
    load();
  }, [load]);

  async function handleSubmit(payload: any, hasFile: boolean) {
    if (editing) {
      await update(editing._id, payload, hasFile);
    } else {
      await create(payload, hasFile);
    }
    setEditing(null);
    await load();
  }

  async function handleDelete(item: T) {
    if (!confirm('Delete this item? This cannot be undone.')) return;
    try {
      await remove(item._id);
      await load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete');
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-display text-xl font-semibold text-white">{title}</h2>
        <button onClick={() => { setEditing(null); setModalOpen(true); }} className="btn-primary px-4 py-2 rounded-lg text-sm">{addLabel}</button>
      </div>

      {error && <div className="toast error mb-4">{error}</div>}

      {items === null ? (
        <div className="skeleton rounded-xl" style={{ height: 200 }} />
      ) : (
        <AdminTable
          items={items}
          columns={columns}
          onEdit={(item) => { setEditing(item); setModalOpen(true); }}
          onDelete={handleDelete}
        />
      )}

      {modalOpen && (
        <AdminModal
          title={editing ? `Edit ${title.replace(/s$/, '')}` : addLabel}
          fields={fields}
          initial={editing || undefined}
          onClose={() => { setModalOpen(false); setEditing(null); }}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}
