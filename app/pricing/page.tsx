import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { generateMetadata as buildMeta, PAGE_META } from '@/lib/seo';
import PricingTiers from '@/components/PricingTiers';

export const metadata: Metadata = buildMeta(PAGE_META.pricing);

const costFactors = [
  { title: 'Number of unique page designs', text: 'A five-page brochure site costs far less than a twenty-page site with several distinct layouts, since each unique design needs to be built and tested on its own.' },
  { title: 'Whether you need a custom backend', text: 'A static site is cheaper than one with user accounts, a database, an admin dashboard, or a booking/checkout system, because a backend adds its own development, hosting and security work.' },
  { title: 'Payment gateway integration', text: 'Adding Flutterwave, Paystack or another payment processor for e-commerce or bookings adds development and testing time beyond a standard contact form.' },
  { title: 'Content and photography', text: 'Projects move faster and cost less when you can supply your own copy and photos. If we need to source stock imagery or write copy from scratch, that is scoped in separately.' },
  { title: 'Third-party integrations', text: 'Calendly booking widgets, WhatsApp click-to-chat, Google Maps, CRM connections and AI chat assistants are all achievable, but each one adds setup and testing time to the quote.' },
  { title: 'Timeline', text: 'Rush timelines that compress our normal 2–4 week delivery window into a week or less typically carry a priority fee to cover the extra hours needed.' },
];

const pricingFaqs = [
  { q: 'Is there a deposit required before you start work?', a: 'Yes, we typically require a deposit before development begins, with the balance due at agreed milestones or on completion. Exact terms are confirmed in your quote.' },
  { q: 'What happens if my project needs change midway through?', a: 'Small clarifications are normal and expected. If the scope changes meaningfully — new pages, new features, a different platform — we will let you know before doing the work and agree on any price adjustment first, never after the fact.' },
  { q: 'Do you offer payment plans?', a: 'For larger custom builds, we can split payment across agreed milestones (for example: deposit, midpoint, and final delivery) rather than requiring the full amount up front.' },
  { q: 'Are hosting and domain costs included in the price?', a: 'Domain registration is included free for the first year on most packages. Ongoing hosting is billed separately at cost, since hosting needs vary a lot between a simple site and a full-stack application with a database.' },
  { q: 'How do I get an exact quote for my project?', a: 'The fastest way is a free 15-minute call where we ask a few questions about your business and what you need the site or app to do, then send a written quote with a fixed price and timeline.' },
];

export default function PricingPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Pricing</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Simple, honest pricing</h1>
      </div>

      <PricingTiers />

      <div className="max-w-4xl mx-auto mt-16 p-8 glass rounded-2xl tilt-hover section-hex">
        <h2 className="text-2xl font-bold text-white mb-4">Transparent Web Design Pricing for Lagos &amp; Nigeria</h2>
        <p className="text-slate-300 mb-4">
          At King Praise Web Design, we offer transparent pricing with no hidden fees. Our packages start at ₦50,000 for small business websites and scale up to ₦500K+ for complex e-commerce stores. Below you&apos;ll find pricing for different business types. Need something custom? We offer enterprise quotes for agencies and large organizations.
        </p>
        <p className="text-slate-300">
          Most professional websites fall in the ₦100K–₦250K range depending on features, integrations, and scope. Every project is built to be affordable without cutting corners on design or performance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-8 glass rounded-2xl">
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included in Each Package</h2>
        <div className="grid md:grid-cols-3 gap-6 text-slate-300 text-sm reveal-group">
          <div className="p-5 rounded-xl border border-white/10 tilt-hover">
            <h3 className="text-white font-semibold mb-3">STARTER (₦50K–₦100K)</h3>
            <ul className="space-y-2">
              <li>✓ 5–10 pages</li>
              <li>✓ Mobile responsive design</li>
              <li>✓ SEO basics (meta tags, H1s)</li>
              <li>✓ SSL certificate included</li>
              <li>✓ Free domain first year</li>
              <li>✓ 2-week delivery</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-white/10 tilt-hover">
            <h3 className="text-white font-semibold mb-3">PROFESSIONAL (₦100K–₦250K)</h3>
            <ul className="space-y-2">
              <li>✓ 10–20 pages</li>
              <li>✓ Advanced SEO optimization</li>
              <li>✓ Contact forms &amp; automation</li>
              <li>✓ Google Analytics 4 setup</li>
              <li>✓ Blog/content management</li>
              <li>✓ 3-week delivery</li>
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-white/10 tilt-hover">
            <h3 className="text-white font-semibold mb-3">ENTERPRISE (₦250K+)</h3>
            <ul className="space-y-2">
              <li>✓ E-commerce integration</li>
              <li>✓ Unlimited pages</li>
              <li>✓ Advanced features &amp; APIs</li>
              <li>✓ Monthly SEO optimization</li>
              <li>✓ Priority support</li>
              <li>✓ 4-week delivery</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 p-8 glass rounded-2xl tilt-hover section-dots">
        <h2 className="text-2xl font-bold text-white mb-4">Custom Quotes for Agencies &amp; Enterprise</h2>
        <p className="text-slate-300 mb-4">
          If your project doesn&apos;t fit standard packages, we offer custom quotes. Examples include custom software builds, MERN stack applications, API integrations, and white-label solutions for agencies.
        </p>
        <p className="text-slate-300">
          Most custom projects range from ₦300K–₦2M depending on complexity. Contact us for a free 15-minute consultation to discuss your specific needs and get an exact quote.
        </p>
      </div>

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-white mb-3 text-center">What Actually Drives the Cost Up or Down</h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
          Two websites that look similar on the surface can cost very different amounts once you factor in what happens
          behind the scenes. Here is what we actually look at when scoping a fixed quote.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {costFactors.map((c) => (
            <div key={c.title} className="p-5 rounded-xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Pricing FAQ</h2>
        <div className="space-y-3">
          {pricingFaqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-white/10 bg-white/[0.03] px-6 py-5 open:shadow-md">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold text-white">
                {f.q}
                <ChevronDown size={20} className="shrink-0 text-brand transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="glass rounded-3xl p-12 text-center mt-20 tilt-hover relative overflow-hidden">
        <div className="glow-orb-2 bg-[var(--brand-2)] w-64 h-64 -top-16 right-0 float" />
        <h2 className="font-display text-3xl font-bold text-white relative">Need something custom?</h2>
        <p className="text-slate-400 mt-3 relative">Every business is different. Book a free call and we&apos;ll build a quote around your exact needs.</p>
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
