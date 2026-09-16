'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type Region = 'NG' | 'INTL';

interface Tier {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  featured?: boolean;
}

const plans: Record<Region, { currency: string; label: string; tiers: Tier[] }> = {
  NG: {
    currency: '₦',
    label: 'Nigeria (NGN)',
    tiers: [
      { name: 'Starter', price: '350,000', period: 'one-time', desc: 'A polished single site to launch your brand online.', features: ['Up to 5 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form integration', '2 rounds of revisions'] },
      { name: 'Business', price: '850,000', period: 'one-time', desc: 'For growing businesses that need more firepower.', features: ['Up to 12 pages', 'CMS / blog included', 'Advanced SEO + analytics', 'Payment integration', '4 rounds of revisions', '1 month free support'], featured: true },
      { name: 'Premium / App', price: '2,000,000+', period: 'project-based', desc: 'Custom web apps, e-commerce or mobile apps.', features: ['Custom web or mobile app', 'Admin dashboard & APIs', 'Third-party integrations', 'Dedicated project manager', '3 months free support'] },
    ],
  },
  INTL: {
    currency: '$',
    label: 'International (USD)',
    tiers: [
      { name: 'Starter', price: '450', period: 'one-time', desc: 'A polished single site to launch your brand online.', features: ['Up to 5 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form integration', '2 rounds of revisions'] },
      { name: 'Business', price: '1,200', period: 'one-time', desc: 'For growing businesses that need more firepower.', features: ['Up to 12 pages', 'CMS / blog included', 'Advanced SEO + analytics', 'Payment integration', '4 rounds of revisions', '1 month free support'], featured: true },
      { name: 'Premium / App', price: '3,000+', period: 'project-based', desc: 'Custom web apps, e-commerce or mobile apps.', features: ['Custom web or mobile app', 'Admin dashboard & APIs', 'Third-party integrations', 'Dedicated project manager', '3 months free support'] },
    ],
  },
};

export default function PricingTiers() {
  const [region, setRegion] = useState<Region>('INTL');

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('https://ipwho.is/');
        const data = await res.json();
        if (!cancelled) setRegion(data && data.country_code === 'NG' ? 'NG' : 'INTL');
      } catch {
        if (!cancelled) setRegion('INTL');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const data = plans[region];

  return (
    <>
      <p className="text-slate-400 mt-4 text-center">
        Pricing shown for <span className="text-white font-semibold">{data.label}</span>. Every project is scoped individually. These are starting points.
      </p>
      <div className="flex justify-center gap-3 mt-6">
        {(['NG', 'INTL'] as Region[]).map((r) => (
          <button key={r} onClick={() => setRegion(r)} className={`px-4 py-2 rounded-lg text-sm ${region === r ? 'btn-primary' : 'btn-ghost'}`}>
            {r === 'NG' ? 'Nigeria (NGN)' : 'International (USD)'}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {data.tiers.map((tier, i) => (
          <div key={tier.name} className={`glass rounded-2xl p-8 card-hover tilt-hover item-pop relative ${tier.featured ? 'border-2 !border-[var(--brand)]' : ''}`} style={{ animationDelay: `${i * 0.1}s` }}>
            {tier.featured && <span className="absolute -top-3 left-8 badge bg-[var(--brand)] text-white">Most Popular</span>}
            <h3 className="font-display text-xl font-semibold text-white">{tier.name}</h3>
            <p className="text-slate-400 text-sm mt-2 min-h-[40px]">{tier.desc}</p>
            <div className="mt-6 flex items-end gap-1">
              <span className="text-3xl font-display font-bold text-white">{data.currency}{tier.price}</span>
              <span className="text-slate-500 text-sm mb-1">/ {tier.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {tier.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-[var(--brand-2)] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact#schedule" className="mt-8 block text-center btn-primary rounded-lg py-3">Get Started</Link>
          </div>
        ))}
      </div>
    </>
  );
}
