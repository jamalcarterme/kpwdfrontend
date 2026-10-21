'use client';
import { useEffect, useState } from 'react';

/** Three-dot load screen shown once per session, then fades out. */
export default function Preloader() {
  const [phase, setPhase] = useState<'show' | 'fade' | 'gone'>('show');
  const [dot, setDot] = useState(0);
  useEffect(() => {
    try {
      if (sessionStorage.getItem('kpwd-loaded')) { setPhase('gone'); return; }
      sessionStorage.setItem('kpwd-loaded', '1');
    } catch {}
    const d = setInterval(() => setDot((x) => (x + 1) % 3), 320);
    const t1 = setTimeout(() => setPhase('fade'), 1500);
    const t2 = setTimeout(() => setPhase('gone'), 2100);
    return () => { clearInterval(d); clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (phase === 'gone') return null;
  return (
    <div id="preloader" className={`fixed inset-0 z-[9999] grid place-items-center bg-ink transition-opacity duration-500 ${phase === 'fade' ? 'opacity-0' : 'opacity-100'}`}>
      <div className="flex gap-4">
        {[0, 1, 2].map((i) => <span key={i} className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${dot === i ? 'scale-125 bg-brand-2' : 'bg-brand-2/30'}`} />)}
      </div>
    </div>
  );
}
