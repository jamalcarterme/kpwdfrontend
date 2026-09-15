import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as buildMeta, PAGE_META } from '@/lib/seo';
import PricingTiers from '@/components/PricingTiers';

export const metadata: Metadata = buildMeta(PAGE_META.pricing);

export default function PricingPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Pricing</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Simple, honest pricing</h1>
      </div>

      <PricingTiers />

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-slate-900/50 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Transparent Web Design Pricing for Lagos &amp; Nigeria</h2>
        <p className="text-slate-300 mb-4">
          At King Praise Web Design, we offer transparent pricing with no hidden fees. Our packages start at ₦50,000 for small business websites and scale up to ₦500K+ for complex e-commerce stores. Below you&apos;ll find pricing for different business types. Need something custom? We offer enterprise quotes for agencies and large organizations.
        </p>
        <p className="text-slate-300">
          Most professional websites fall in the ₦100K–₦250K range depending on features, integrations, and scope. Every project is built to be affordable without cutting corners on design or performance.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 p-8 bg-slate-900/50 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-6">What&apos;s Included in Each Package</h2>
        <div className="grid md:grid-cols-3 gap-6 text-slate-300 text-sm">
          <div>
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
          <div>
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
          <div>
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

      <div className="max-w-4xl mx-auto mt-12 p-8 bg-slate-900/50 rounded-lg border border-white/10">
        <h2 className="text-2xl font-bold text-white mb-4">Custom Quotes for Agencies &amp; Enterprise</h2>
        <p className="text-slate-300 mb-4">
          If your project doesn&apos;t fit standard packages, we offer custom quotes. Examples include custom software builds, MERN stack applications, API integrations, and white-label solutions for agencies.
        </p>
        <p className="text-slate-300">
          Most custom projects range from ₦300K–₦2M depending on complexity. Contact us for a free 15-minute consultation to discuss your specific needs and get an exact quote.
        </p>
      </div>

      <div className="glass rounded-3xl p-12 text-center mt-20">
        <h2 className="font-display text-3xl font-bold text-white">Need something custom?</h2>
        <p className="text-slate-400 mt-3">Every business is different. Book a free call and we&apos;ll build a quote around your exact needs.</p>
        <Link href="/contact#schedule" className="btn-primary inline-block mt-6 px-7 py-3.5 rounded-xl">Book a Free Call</Link>
      </div>

      <section className="py-16 lg:py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2" />
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
