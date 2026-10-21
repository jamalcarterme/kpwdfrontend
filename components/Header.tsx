'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { services } from '@/lib/data/services';
import { BANNERS } from './PageBanner';

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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [svc, setSvc] = useState(false);
  const hasDark = pathname === '/' || pathname.replace(/\/$/, '') in BANNERS;
  const solid = scrolled || !hasDark;
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 50);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => { setOpen(false); setSvc(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  const active = (h: string) => (h === '/' ? pathname === '/' : pathname.startsWith(h));
  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${solid ? 'bg-white py-3 shadow-md' : 'bg-transparent py-5'}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" aria-label="King Praise Web Design home" className="flex items-center gap-2.5">
            <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={40} height={40} priority />
            <span className={`text-[17px] font-semibold transition-colors ${solid ? 'text-ink' : 'text-white'}`}>King Praise <span className="text-brand">Web Design</span></span>
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="btn btn-primary hidden !py-2.5 md:inline-flex">Request Quote</Link>
            <button onClick={() => setOpen(true)} aria-label="Open menu" className={`flex items-center gap-3 text-sm font-medium transition-colors ${solid ? 'text-slate-600' : 'text-white'}`}>
              Menu <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <div className={`fixed inset-0 z-[70] ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/70 transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`} />
        <aside className={`absolute right-0 top-0 flex h-full w-[86%] max-w-md flex-col overflow-y-auto bg-white px-10 pb-8 pt-8 shadow-2xl transition-transform duration-500 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="ml-auto text-slate-400 transition hover:text-ink"><X className="h-6 w-6" /></button>
          <nav className="mt-6 flex-1" aria-label="Main">
            {nav.map((l) => l.label === 'Services' ? (
              <div key={l.href}>
                <div className="flex items-center justify-between">
                  <Link href={l.href} className={`block py-3 text-xl transition hover:text-brand ${active(l.href) ? 'text-brand' : 'text-slate-600'}`}>{l.label}</Link>
                  <button aria-label="Toggle services" onClick={() => setSvc(!svc)} className="p-2 text-slate-400"><ChevronDown className={`h-5 w-5 transition ${svc ? 'rotate-180' : ''}`} /></button>
                </div>
                <div className={`overflow-hidden pl-4 transition-all duration-500 ${svc ? 'max-h-[40rem]' : 'max-h-0'}`}>
                  {services.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="block py-2 text-base text-slate-500 hover:text-brand">{s.serviceName}</Link>)}
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href} className={`block py-3 text-xl transition hover:text-brand ${active(l.href) ? 'text-brand' : 'text-slate-600'}`}>{l.label}</Link>
            ))}
            <Link href="/contact" className="btn btn-primary mt-6 w-full">Request Quote</Link>
          </nav>
          <p className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} King Praise Web Design</p>
        </aside>
      </div>
    </>
  );
}
