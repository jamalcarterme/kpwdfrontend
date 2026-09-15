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
          <p className="text-slate-400 text-sm leading-relaxed">
            Premium websites, e-commerce and custom software built as one system for growth, with no cookie-cutter templates and no corporate fluff.
          </p>
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
