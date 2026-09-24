'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === '/';
  const solid = scrolled || !isHome || open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const active = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, delay: 1.9, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'bg-ink/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}
    >
      <div className={`mx-auto flex max-w-[1240px] items-center justify-between px-6 transition-all duration-300 ${solid ? 'h-[72px]' : 'h-[88px]'}`}>
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={36} height={36} priority />
          <span className="text-[17px] font-semibold text-white">
            King Praise <span className="text-brand">Web Design</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={`relative text-[15px] font-medium transition-colors ${active(n.href) ? 'text-brand' : 'text-white/85 hover:text-brand'}`}>
              {n.label}
              {active(n.href) && <motion.span layoutId="nav-dot" className="absolute -bottom-2 left-0 right-0 h-[2px] rounded bg-brand" />}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="hidden rounded-full bg-brand px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-brand-2 hover:shadow-[0_8px_24px_rgba(99,102,241,0.35)] lg:inline-block">
          Request Quote
        </Link>
        <button onClick={() => setOpen((o) => !o)} aria-label="Toggle menu" className="text-white lg:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden bg-ink lg:hidden">
            <div className="flex flex-col gap-1 px-6 pb-6">
              {nav.map((n) => (
                <Link key={n.href} href={n.href} className={`rounded-lg px-3 py-3 text-[16px] font-medium ${active(n.href) ? 'bg-white/10 text-brand' : 'text-white/85'}`}>{n.label}</Link>
              ))}
              <Link href="/contact" className="mt-3 rounded-full bg-brand px-6 py-3 text-center text-[14px] font-semibold text-white">Request Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
