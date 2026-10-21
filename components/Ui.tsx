import Reveal from './Reveal';

export function HexDeco({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={`pointer-events-none absolute animate-float ${className}`} aria-hidden>
      <polygon points="50,2 94,26 94,74 50,98 6,74 6,26" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <polygon points="50,20 78,36 78,64 50,80 22,64 22,36" fill="currentColor" opacity=".12" />
    </svg>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.25em] text-brand">
        <span className="hex h-3 w-3 bg-brand" />{eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-bold leading-tight sm:text-5xl ${light ? '!text-white' : 'text-ink'}`}>{title}</h2>
      {sub && <p className={`mt-5 text-lg ${light ? 'text-white/75' : 'text-gray-600'}`}>{sub}</p>}
    </Reveal>
  );
}
