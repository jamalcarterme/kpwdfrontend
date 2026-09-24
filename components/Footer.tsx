import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone, Star } from 'lucide-react';

const FOUNDED_YEAR = 2026;
const TIKTOK = 'https://www.tiktok.com/@king_praise_web_design?_r=1&_t=ZS-99mYRbd4LUD';
const YOUTUBE = 'https://www.youtube.com/@praisebuildsbrands';
const GOOGLE = 'https://maps.app.goo.gl/rBd7D72nhfCLi8bRA';

const locations = [
  ['Lagos', '/locations/lagos'], ['Victoria Island', '/locations/victoria-island'], ['Abuja', '/locations/abuja'],
  ['Port Harcourt', '/locations/port-harcourt'], ['Ibadan', '/locations/ibadan'], ['Benin City', '/locations/benin-city'], ['Nigeria', '/locations/nigeria'],
];
const industries = [
  ['E-Commerce', '/services/ecommerce'], ['Law Firms', '/services/law-firms'], ['Real Estate', '/services/real-estate'], ['Restaurants', '/services/restaurant'],
  ['Corporate', '/services/corporate'], ['Logistics', '/services/logistics'], ['Med Spa', '/services/med-spa'], ['SEO', '/services/seo'], ['Landing Pages', '/services/landing-page'],
];

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.82c-1.02-.9-1.72-2.17-1.94-3.6h-3.02v13.6c0 1.53-1.24 2.77-2.77 2.77a2.77 2.77 0 0 1-2.77-2.77 2.77 2.77 0 0 1 2.77-2.77c.26 0 .51.04.75.1v-3.07a5.83 5.83 0 0 0-.75-.05A5.83 5.83 0 0 0 3 15.82 5.83 5.83 0 0 0 8.87 21.6a5.83 5.83 0 0 0 5.83-5.82V9.4a8.9 8.9 0 0 0 5.2 1.67V8.05c-1.19 0-2.36-.38-3.3-1.1a5.85 5.85 0 0 1-1-1.13Z" /></svg>
);
const YouTubeIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.51 3.5 12 3.5 12 3.5s-7.51 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.87.55 9.38.55 9.38.55s7.51 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.6 15.6V8.4l6.27 3.6-6.27 3.6Z" /></svg>
);

export default function Footer() {
  const now = new Date().getFullYear();
  const yearLabel = now > FOUNDED_YEAR ? `${FOUNDED_YEAR}–${now}` : `${FOUNDED_YEAR}`;
  const h = 'mb-5 text-[18px] font-semibold text-white';
  const a = 'text-[15px] text-white/65 transition hover:text-brand';
  const soc = 'flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-brand hover:text-white';
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <Image src="/assets/img/logo-icon.png" alt="King Praise Web Design" width={34} height={34} />
            <span className="text-[17px] font-semibold">King Praise <span className="text-brand">Web Design</span></span>
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/65">
            Premium websites, e-commerce and custom software built as one system for growth, with no cookie-cutter templates and no corporate fluff.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="King Praise Web Design on TikTok" className={soc}><TikTokIcon /></a>
            <a href={YOUTUBE} target="_blank" rel="noopener noreferrer" aria-label="King Praise Web Design on YouTube" className={soc}><YouTubeIcon /></a>
            <a href={GOOGLE} target="_blank" rel="noopener noreferrer" aria-label="Google Reviews" className={soc}><Star size={16} /></a>
          </div>
        </div>
        <div>
          <h4 className={h}>Company</h4>
          <ul className="space-y-3">
            {[['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Pricing', '/pricing'], ['Blog', '/blog'], ['Contact', '/contact']].map(([l, h2]) => <li key={h2}><Link href={h2} className={a}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className={h}>Business</h4>
          <ul className="space-y-3">
            {[['Projects', '/#portfolio'], ['Our Team', '/#team'], ['Facts', '/#facts'], ['Customers', '/#customers'], ['Client Portal', '/client/login'], ['Admin Dashboard', '/admin/login']].map(([l, h2]) => <li key={l}><Link href={h2} className={a}>{l}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className={h}>Get In Touch</h4>
          <ul className="space-y-4 text-[15px] text-white/65">
            <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-brand" />Remote Company, Global Delivery</li>
            <li className="flex gap-3"><Mail size={18} className="mt-0.5 shrink-0 text-brand" /><a href="mailto:kingpraisewebdesign@gmail.com" className="hover:text-brand">kingpraisewebdesign@gmail.com</a></li>
            <li className="flex gap-3"><MessageCircle size={18} className="mt-0.5 shrink-0 text-brand" /><a href="https://wa.me/2349030232048" target="_blank" rel="noopener noreferrer" className="hover:text-brand">+234 903 023 2048 (NG/WhatsApp)</a></li>
            <li className="flex gap-3"><Phone size={18} className="mt-0.5 shrink-0 text-brand" /><a href="tel:+16507064845" className="hover:text-brand">+1 650-706-4845 (US)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-[1240px] gap-6 px-6 py-8 md:grid-cols-2">
          <p className="text-[14px] leading-loose text-white/50"><b className="mr-2 text-white/80">Web design locations:</b>{locations.map(([l, h2], i) => <span key={h2}><Link href={h2} className="hover:text-brand">{l}</Link>{i < locations.length - 1 ? ' · ' : ''}</span>)}</p>
          <p className="text-[14px] leading-loose text-white/50"><b className="mr-2 text-white/80">Industries:</b>{industries.map(([l, h2], i) => <span key={h2}><Link href={h2} className="hover:text-brand">{l}</Link>{i < industries.length - 1 ? ' · ' : ''}</span>)}</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-[14px] text-white/50">&copy; {yearLabel} King Praise Web Design. All rights reserved.</div>
    </footer>
  );
}
