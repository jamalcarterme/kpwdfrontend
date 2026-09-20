'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';

/** Number that counts up from 0 the first time it scrolls into view. */
export default function Counter({ to, decimals = 0, prefix = '', suffix = '', duration = 2 }: { to: number; decimals?: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(v) });
    return () => c.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
}
