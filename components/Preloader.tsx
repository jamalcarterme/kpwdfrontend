'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';

/** Full-screen load animation: logo + progress counter, then the curtain slides up. */
export default function Preloader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    let raf = 0;
    const start = performance.now();
    const D = 1700;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / D);
      setPct(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => { setShow(false); document.body.style.overflow = ''; }, 250);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.body.style.overflow = ''; };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="preloader"
          key="preloader"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink text-white"
        >
          <motion.div initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }}>
            <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={72} height={72} priority />
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-5 text-lg font-semibold tracking-wide">
            King Praise <span className="text-brand">Web Design</span>
          </motion.p>
          <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/15">
            <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
          </div>
          <p className="mt-3 text-sm tabular-nums text-white/60">{pct}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
