import Image from 'next/image';
import Link from 'next/link';

const FOUNDED_YEAR = 2026;

export default function Footer() {
  const now = new Date().getFullYear();
  const yearLabel = now > FOUNDED_YEAR ? `${FOUNDED_YEAR}–${now}` : `${FOUNDED_YEAR}`;

  return (
    <footer className="border-t border-white/10 mt-24" style={{ background: 'var(--surface)' }}>
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={28} height={28} className="logo-icon" />
            <span className="font-display font-semibold" style={{ color: 'var(--text)' }}>
              King Praise <span className="text-gradient">Web Design</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Premium websites, e-commerce and custom software built as one system for growth, with no cookie-cutter templates and no corporate fluff.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.tiktok.com/@king_praise_web_design?_r=1&_t=ZS-99mYRbd4LUD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King Praise Web Design on TikTok"
              className="icon-bounce w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-[var(--brand)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.6 5.82c-1.02-.9-1.72-2.17-1.94-3.6h-3.02v13.6c0 1.53-1.24 2.77-2.77 2.77a2.77 2.77 0 0 1-2.77-2.77 2.77 2.77 0 0 1 2.77-2.77c.26 0 .51.04.75.1v-3.07a5.83 5.83 0 0 0-.75-.05A5.83 5.83 0 0 0 3 15.82 5.83 5.83 0 0 0 8.87 21.6a5.83 5.83 0 0 0 5.83-5.82V9.4a8.9 8.9 0 0 0 5.2 1.67V8.05c-1.19 0-2.36-.38-3.3-1.1a5.7 5.7 0 0 1 0 0 5.85 5.85 0 0 1 0-1.13Z" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@praisebuildsbrands?si=61Ti3WmIj1IHfdip"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="King Praise Web Design on YouTube"
              className="icon-bounce w-9 h-9 rounded-full flex items-center justify-center border border-white/10 text-slate-400 hover:text-white hover:border-[var(--brand)] transition-colors"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Company</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/about" className="hover:text-white transition">About &amp; Team</Link></li>
            <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
            <li><Link href="/locations/lagos" className="hover:text-white transition">Web Design in Lagos</Link></li>
            <li><Link href="/locations/abuja" className="hover:text-white transition">Web Design in Abuja</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Access</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><Link href="/client/login" className="hover:text-white transition">Client Portal</Link></li>
            <li><Link href="/client/register" className="hover:text-white transition">Create Account</Link></li>
            <li><Link href="/admin/login" className="hover:text-white transition">Admin Dashboard</Link></li>
            <li><Link href="/contact#schedule" className="hover:text-white transition">Schedule a Call</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="mailto:kingpraisewebdesign@gmail.com" className="hover:text-white transition">kingpraisewebdesign@gmail.com</a></li>
            <li><a href="https://wa.me/2349030232048" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">+234 903 023 2048 (NG/WhatsApp)</a></li>
            <li><a href="tel:+16507064845" className="hover:text-white transition">+1 650-706-4845 (US)</a></li>
            <li className="text-slate-500">Remote Company, Global Delivery</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-500">
        &copy; {yearLabel} King Praise Web Design. All rights reserved.
      </div>
    </footer>
  );
}
