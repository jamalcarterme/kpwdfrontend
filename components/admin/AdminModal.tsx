'use client';

import { useState } from 'react';

export interface FieldConfig {
  name: string;
  label: string;
  type?: 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'date' | 'file' | 'email' | 'tel';
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface AdminModalProps {
  title: string;
  fields: FieldConfig[];
  initial?: Record<string, any>;
  onClose: () => void;
  onSubmit: (payload: FormData | Record<string, unknown>, hasFile: boolean) => Promise<void>;
}

export default function AdminModal({ title, fields, initial, onClose, onSubmit }: AdminModalProps) {
  const [values, setValues] = useState<Record<string, any>>(() => {
    const base: Record<string, any> = {};
    fields.forEach((f) => {
      if (f.type === 'file') return;
      base[f.name] = initial?.[f.name] ?? (f.type === 'checkbox' ? false : '');
    });
    return base;
  });
  const [files, setFiles] = useState<Record<string, File>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hasFileField = fields.some((f) => f.type === 'file');

  function update(name: string, value: any) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      if (hasFileField) {
        const fd = new FormData();
        Object.entries(values).forEach(([k, v]) => {
          if (v !== undefined && v !== null && v !== '') fd.append(k, typeof v === 'boolean' ? String(v) : v);
        });
        Object.entries(files).forEach(([k, file]) => fd.append(k, file));
        await onSubmit(fd, true);
      } else {
        await onSubmit(values, false);
      }
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div className="glass rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white text-xl leading-none">&times;</button>
        </div>

        {error && <div className="toast error mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map((f) => (
            <div key={f.name}>
              <label className="block text-sm text-slate-400 mb-1.5">{f.label}{f.required && ' *'}</label>
              {f.type === 'textarea' ? (
                <textarea rows={4} required={f.required} value={values[f.name] || ''} onChange={(e) => update(f.name, e.target.value)} placeholder={f.placeholder} />
              ) : f.type === 'select' ? (
                <select required={f.required} value={values[f.name] || ''} onChange={(e) => update(f.name, e.target.value)}>
                  <option value="" disabled>Select…</option>
                  {f.options?.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
              ) : f.type === 'checkbox' ? (
                <input type="checkbox" className="w-5 h-5" checked={!!values[f.name]} onChange={(e) => update(f.name, e.target.checked)} />
              ) : f.type === 'file' ? (
                <input type="file" accept="image/*" onChange={(e) => e.target.files?.[0] && setFiles((fs) => ({ ...fs, [f.name]: e.target.files![0] }))} />
              ) : (
                <input
                  type={f.type || 'text'}
                  required={f.required}
                  value={values[f.name] || ''}
                  onChange={(e) => update(f.name, f.type === 'number' ? Number(e.target.value) : e.target.value)}
                  placeholder={f.placeholder}
                />
              )}
            </div>
          ))}

          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-ghost flex-1 py-2.5 rounded-lg">Cancel</button>
            <button type="submit" disabled={isSubmitting} className="btn-primary flex-1 py-2.5 rounded-lg">
              {isSubmitting ? 'Saving…' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
