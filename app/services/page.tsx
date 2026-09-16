import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata as buildMeta, PAGE_META } from '@/lib/seo';

export const metadata: Metadata = buildMeta(PAGE_META.services);

const cards = [
  {
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Web Design',
    title: 'Website Design & Development',
    desc: 'Custom-coded, fast-loading, fully responsive websites tailored to your brand, from portfolio sites to corporate platforms.',
    bullets: ['Responsive, mobile-first design', 'SEO-friendly structure', 'CMS / blog integration'],
    links: [
      { href: '/services/law-firms', label: 'Law Firms' },
      { href: '/services/real-estate', label: 'Real Estate' },
      { href: '/services/restaurant', label: 'Restaurants' },
      { href: '/services/med-spa', label: 'Med Spas' },
      { href: '/services/landing-page', label: 'Landing Pages' },
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'E-Commerce',
    title: 'E-Commerce',
    desc: 'Online stores built to convert, with secure payments, inventory management, and a smooth checkout experience.',
    bullets: ['Payment gateway integration', 'Product & order management', 'Multi-currency support'],
    links: [{ href: '/services/ecommerce', label: 'Ecommerce in Abuja' }],
  },
  {
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Mobile Apps',
    title: 'Mobile App Development',
    desc: 'Cross-platform mobile apps that feel native, ship faster, and cost less to maintain.',
    bullets: ['iOS & Android from one codebase', 'Push notifications & offline support', 'App store submission support'],
    links: [],
  },
  {
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Custom Software',
    title: 'Custom Software & Dashboards',
    desc: 'Bespoke internal tools, client portals, and automation systems built around your workflow.',
    bullets: ['Admin dashboards & APIs', 'Client project portals', 'Third-party integrations'],
    links: [],
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'SEO Growth',
    title: 'SEO & Growth',
    desc: 'Technical SEO, on-page optimization, and analytics setup so your site actually gets found.',
    bullets: ['Keyword & on-page optimization', 'Core Web Vitals tuning', 'Analytics & reporting'],
    links: [{ href: '/services/seo', label: 'SEO for Small Business →' }],
  },
  {
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&h=300&q=80',
    alt: 'Branding Design',
    title: 'Branding & UI/UX',
    desc: 'Visual identity and interface design that makes your product memorable and easy to use.',
    bullets: ['Logo & brand systems', 'Wireframes & prototypes', 'Design systems'],
    links: [],
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Services</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Everything you need to launch and scale online</h1>
        <p className="text-slate-400 mt-4">From a single landing page to a full custom platform, we scope, design, and build it end to end.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-16 section-hex py-8">
        {cards.map((c, i) => (
          <div key={c.title} className="glass rounded-2xl overflow-hidden card-hover tilt-hover item-pop" style={{ animationDelay: `${i * 0.08}s` }}>
            <Image src={c.img} alt={c.alt} width={600} height={300} className="w-full h-40 object-cover" />
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold text-white">{c.title}</h3>
              <p className="text-slate-400 text-sm mt-2">{c.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {c.bullets.map((b) => (
                  <li key={b}>&bull; {b}</li>
                ))}
              </ul>
              {c.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.links.map((l) => (
                    <Link key={l.href} href={l.href} className="text-xs text-[var(--brand-2)] hover:underline">{l.label}</Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-12 text-center mt-20 tilt-hover relative overflow-hidden">
        <div className="glow-orb-2 bg-[var(--brand-2)] w-64 h-64 -bottom-20 right-0 float" />
        <h2 className="font-display text-3xl font-bold text-white relative">Not sure what you need?</h2>
        <p className="text-slate-400 mt-3 relative">Book a free discovery call and we&apos;ll help you scope the right solution.</p>
        <Link href="/contact#schedule" className="btn-primary inline-block mt-6 px-7 py-3.5 rounded-xl relative">Book a Free Call</Link>
      </div>

      <section className="py-16 lg:py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden tilt-hover">
          <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2 float" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white relative">Ready to discuss your project?</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto relative">Let&apos;s explore how we can help grow your business with a custom web solution.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 relative">
            <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl">Get in Touch</Link>
            <Link href="/#schedule" className="btn-ghost px-7 py-3.5 rounded-xl">Schedule Free Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
