'use client';

export interface ColumnConfig<T> {
  key: string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface AdminTableProps<T extends { _id: string }> {
  items: T[];
  columns: ColumnConfig<T>[];
  onEdit?: (item: T) => void;
  onDelete?: (item: T) => void;
  extraAction?: (item: T) => React.ReactNode;
  emptyLabel?: string;
}

export default function AdminTable<T extends { _id: string }>({
  items,
  columns,
  onEdit,
  onDelete,
  extraAction,
  emptyLabel = 'Nothing here yet.',
}: AdminTableProps<T>) {
  if (!items.length) {
    return <p className="text-slate-500 text-sm py-10 text-center">{emptyLabel}</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500 border-b border-white/10">
            {columns.map((c) => (
              <th key={c.key} className="py-3 pr-4 font-medium">{c.label}</th>
            ))}
            {(onEdit || onDelete || extraAction) && <th className="py-3 text-right">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item._id} className="border-b border-white/5 hover:bg-white/[0.02]">
              {columns.map((c) => (
                <td key={c.key} className="py-3 pr-4 text-slate-300 align-top">
                  {c.render ? c.render(item) : String((item as any)[c.key] ?? '')}
                </td>
              ))}
              {(onEdit || onDelete || extraAction) && (
                <td className="py-3 text-right whitespace-nowrap">
                  {extraAction?.(item)}
                  {onEdit && (
                    <button onClick={() => onEdit(item)} className="text-[var(--brand-2)] hover:underline mr-3 text-xs font-semibold">Edit</button>
                  )}
                  {onDelete && (
                    <button onClick={() => onDelete(item)} className="text-rose-400 hover:underline text-xs font-semibold">Delete</button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
