'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';

interface QA {
  q: string;
  a: React.ReactNode;
}

const FAQS: QA[] = [
  {
    q: 'How much does a website cost?',
    a: (
      <>
        Packages start from ₦50K for a small business site. See our{' '}
        <Link href="/pricing" className="underline text-[var(--brand-2)]">
          pricing page
        </Link>{' '}
        or book a free call for a custom quote.
      </>
    ),
  },
  {
    q: 'How long does a project take?',
    a: 'Most small business websites launch within 2–4 weeks. E-commerce and custom software builds take longer depending on scope.',
  },
  {
    q: 'Do you build e-commerce stores?',
    a: 'Yes — full e-commerce stores with Flutterwave/Paystack payment integration, inventory management and a mobile-optimized storefront.',
  },
  {
    q: 'Can I speak to someone directly?',
    a: (
      <>
        Absolutely —{' '}
        <Link href="/contact" className="underline text-[var(--brand-2)]">
          send us a message
        </Link>{' '}
        or chat on{' '}
        <a
          href="https://wa.me/2349030232048"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[var(--brand-2)]"
        >
          WhatsApp
        </a>
        .
      </>
    ),
  },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [asked, setAsked] = useState<number[]>([]);

  return (
    <div className="chatbot-widget">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="glass rounded-2xl shadow-2xl w-[320px] max-w-[90vw] mb-3 overflow-hidden flex flex-col"
            style={{ maxHeight: 420 }}
            role="dialog"
            aria-label="King Praise Web Design chat assistant"
          >
            <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <span className="w-9 h-9 rounded-full bg-[var(--brand)] flex items-center justify-center text-white font-display font-bold">
                K
              </span>
              <div>
                <p className="font-display font-semibold text-white text-sm">KPWD Assistant</p>
                <p className="text-xs text-emerald-400">● Online</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ml-auto text-slate-400 hover:text-white text-lg leading-none"
              >
                ×
              </button>
            </div>

            <div className="p-4 overflow-y-auto flex-1 space-y-3">
              <div className="bg-white/5 rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-slate-200 max-w-[85%]">
                Hi! 👋 I&apos;m the King Praise Web Design assistant. Ask me a quick question, or pick one below.
              </div>
              {asked.map((i) => (
                <div key={i} className="space-y-2">
                  <div className="ml-auto bg-[var(--brand)] text-white rounded-xl rounded-tr-none px-4 py-2.5 text-sm max-w-[85%] w-fit">
                    {FAQS[i].q}
                  </div>
                  <div className="bg-white/5 rounded-xl rounded-tl-none px-4 py-2.5 text-sm text-slate-200 max-w-[85%]">
                    {FAQS[i].a}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 border-t border-white/10 flex flex-wrap gap-2">
              {FAQS.map((f, i) => (
                <button
                  key={f.q}
                  disabled={asked.includes(i)}
                  onClick={() => setAsked((prev) => [...prev, i])}
                  className="text-xs px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  {f.q}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        className="chatbot-toggle"
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width="24" height="24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.05 0-2.055-.16-2.988-.455L3 21l1.395-4.185C3.51 15.42 3 13.76 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>
    </div>
  );
}
