'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations/lagos', label: 'Locations' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '/locations/lagos', label: 'Web Design Company Lagos' },
  { href: '/locations/lagos', label: 'Website Designer Lagos' },
  { href: '/locations/lagos', label: 'Web Design Agency Lagos' },
  { href: '/locations/victoria-island', label: 'Website Designer Victoria Island' },
  { href: '/locations/nigeria', label: 'Web Design Company Nigeria' },
  { href: '/services/ecommerce', label: 'E-Commerce Developer Nigeria' },
  { href: '/services/corporate', label: 'Corporate Website Designer' },
  { href: '/services/logistics', label: 'Website Design - Logistics' },
  { href: '/services/law-firms', label: 'Web Design for Law Firms' },
  { href: '/services/real-estate', label: 'Real Estate Website Design' },
  { href: '/services/restaurant', label: 'Restaurant Website Design' },
  { href: '/services/med-spa', label: 'Med Spa Web Design' },
  { href: '/services/seo', label: 'SEO for Small Business' },
  { href: '/services/landing-page', label: 'Landing Page Design' },
  { href: '/services/ecommerce', label: 'Ecommerce Web Design (Abuja)' },
];

const locationLinks = [
  { href: '/locations/lagos', label: 'Web Design (Lagos)' },
  { href: '/locations/victoria-island', label: 'Victoria Island' },
  { href: '/locations/abuja', label: 'Abuja' },
  { href: '/locations/benin-city', label: 'Benin City' },
  { href: '/locations/port-harcourt', label: 'Port Harcourt' },
  { href: '/locations/ibadan', label: 'Ibadan' },
];

export default function Header() {
  const pathname = usePathname() || '/';
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));
  const svcActive = pathname.startsWith('/services');
  const locActive = pathname.startsWith('/locations');

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mt-3 glass rounded-2xl flex items-center justify-between px-5 py-3">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={32} height={32} className="logo-icon" />
              <span className="font-display font-semibold tracking-tight text-lg hidden sm:inline" style={{ color: 'var(--text)' }}>
                King Praise <span className="text-gradient">Web Design</span>
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-7">
              {nav.map((n) => {
                if (n.label === 'Services') {
                  return (
                    <div className="relative group" key={n.href}>
                      <Link
                        href="/services"
                        className={`nav-link text-sm font-medium ${pathname === '/services' || svcActive ? 'active text-white' : 'text-slate-300'} hover:text-white transition inline-flex items-center gap-1`}
                      >
                        Services
                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </Link>
                      <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50 transition-all duration-200">
                        <div className="glass rounded-xl p-4 w-[620px] max-w-[90vw] shadow-lg border border-white/10 grid grid-cols-3 gap-1">
                          {serviceLinks.map((s, i) => (
                            <Link key={`${s.href}-${i}`} href={s.href} className="mobile-menu-item block px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition">
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                if (n.label === 'Locations') {
                  return (
                    <div className="relative group" key={n.href}>
                      <Link
                        href="/locations/lagos"
                        className={`nav-link text-sm font-medium ${locActive ? 'active text-white' : 'text-slate-300'} hover:text-white transition inline-flex items-center gap-1`}
                      >
                        Locations
                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                      </Link>
                      <div className="absolute left-0 top-full pt-3 hidden group-hover:block z-50 transition-all duration-200">
                        <div className="glass rounded-xl p-4 w-[420px] max-w-[90vw] shadow-lg border border-white/10 grid grid-cols-2 gap-1">
                          {locationLinks.map((s) => (
                            <Link key={s.href} href={s.href} className="mobile-menu-item block px-4 py-3 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/5 transition">
                              {s.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <Link key={n.href} href={n.href} className={`nav-link text-sm font-medium ${isActive(n.href) && n.href !== '/' ? 'active text-white' : pathname === n.href ? 'active text-white' : 'text-slate-300'} hover:text-white transition`}>
                    {n.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/client/login" className="btn-ghost text-sm px-4 py-2 rounded-lg">Client Login</Link>
              <Link href="/contact#schedule" className="btn-primary text-sm px-4 py-2 rounded-lg">Book a Call</Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={() => setMenuOpen(true)} className="text-white p-2" aria-label="Open menu" aria-expanded={menuOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" /></svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} hidden={!menuOpen} onClick={() => setMenuOpen(false)} />
        <div className={`mobile-menu glass ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
          <div className="flex items-center justify-between mb-6">
            <span className="font-display font-semibold text-white text-lg">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-white p-2" aria-label="Close menu">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex flex-col gap-4">
            {nav.filter((n) => n.label !== 'Locations').map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-slate-200 hover:text-white font-medium">{n.label}</Link>
            ))}
            <div className="pl-3 border-l border-white/10 flex flex-col gap-3">
              {serviceLinks.map((s, i) => (
                <Link key={`${s.href}-m-${i}`} href={s.href} onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white text-sm">{s.label}</Link>
              ))}
            </div>
            <span className="text-slate-200 font-medium">Locations</span>
            <div className="pl-3 border-l border-white/10 flex flex-col gap-3">
              {locationLinks.map((s) => (
                <Link key={`m-${s.href}`} href={s.href} onClick={() => setMenuOpen(false)} className="text-slate-400 hover:text-white text-sm">{s.label}</Link>
              ))}
            </div>
            <hr className="border-white/10" />
            <Link href="/client/login" onClick={() => setMenuOpen(false)} className="btn-ghost text-center px-4 py-2 rounded-lg">Client Login</Link>
            <Link href="/admin/login" onClick={() => setMenuOpen(false)} className="text-sm text-center font-medium transition rounded-lg py-2" style={{ color: 'var(--text)', background: 'var(--surface-2)', border: '1px solid var(--border)' }}>Admin Login</Link>
            <Link href="/contact#schedule" onClick={() => setMenuOpen(false)} className="btn-primary text-center px-4 py-2 rounded-lg">Book a Call</Link>
          </div>
        </div>
      </header>
    </>
  );
}
