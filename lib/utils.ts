/**
 * Small shared utilities used across pages/components.
 */

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function formatDate(value?: string | Date | null): string {
  if (!value) return '';
  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatDateShort(value?: string | Date | null): string {
  if (!value) return '';
  const date = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(date.getTime())) return '';
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function truncate(text: string, length = 140): string {
  if (!text) return '';
  const plain = text.replace(/<[^>]+>/g, '');
  return plain.length > length ? `${plain.slice(0, length).trim()}…` : plain;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ClientProject.status enum: not-started | in-progress | in-review | completed | on-hold
export const statusColors: Record<string, string> = {
  'not-started': 'bg-slate-500/20 text-slate-300',
  'in-progress': 'bg-blue-500/20 text-blue-300',
  'in-review': 'bg-amber-500/20 text-amber-300',
  completed: 'bg-emerald-500/20 text-emerald-300',
  'on-hold': 'bg-rose-500/20 text-rose-300',
};

// Milestone.status enum: pending | in-progress | completed | blocked
export const milestoneStatusColors: Record<string, string> = {
  pending: 'bg-slate-500/20 text-slate-300',
  'in-progress': 'bg-blue-500/20 text-blue-300',
  completed: 'bg-emerald-500/20 text-emerald-300',
  blocked: 'bg-rose-500/20 text-rose-300',
};

export const announcementColors: Record<string, string> = {
  info: 'text-[var(--brand-2)]',
  success: 'text-emerald-400',
  warning: 'text-amber-400',
  urgent: 'text-rose-400',
};
