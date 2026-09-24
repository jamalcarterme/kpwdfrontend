/**
 * Location Landing Page (/locations/[slug])
 * Was previously a mistaken copy of the blog-post page (fetching /blog/:slug),
 * which meant every /locations/* URL 404'd — the root cause of the audit's
 * "Broken Links / 404 Errors" finding for location-based pages. Rebuilt to
 * use the real per-city content already authored in lib/data/locations.ts,
 * following the same pattern as app/services/[slug]/page.tsx.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as buildMeta, getLocationMeta, getBreadcrumbSchema, getFAQSchema, injectSchema } from '@/lib/seo';
import { locations, getLocation } from '@/lib/data/locations';

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = getLocation(params.slug);
  if (!location) return {};
  return buildMeta(getLocationMeta(location));
}

export default function LocationSlugPage({ params }: { params: { slug: string } }) {
  const location = getLocation(params.slug);
  if (!location) notFound();

  return (
    <main className="pt-28 pb-24 max-w-4xl mx-auto px-5 lg:px-8 section-dots">
      {injectSchema(
        getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Locations', url: '/locations/lagos' },
          { name: location.cityName, url: `/locations/${location.slug}` },
        ])
      )}
      {injectSchema(getLocationMeta(location).schema as Record<string, unknown>)}
      {location.faqs && location.faqs.length > 0 && injectSchema(getFAQSchema(location.faqs))}

      <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">{location.badge}</span>
      <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 leading-tight">{location.h1}</h1>
      <p className="text-slate-400 mt-5 text-lg leading-relaxed">{location.intro}</p>

      <div className="mt-10 space-y-4">
        {location.body.map((p) => (
          <p key={p} className="text-slate-400 leading-relaxed">{p}</p>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mt-10 reveal-group">
        {[
          'Custom, mobile-responsive design',
          'On-page SEO built in from day one',
          'Fast 2–4 week turnaround',
          'Direct access to the developer, no middleman',
        ].map((f) => (
          <div key={f} className="glass rounded-xl p-5 flex items-start gap-3 tilt-hover">
            <svg className="w-5 h-5 text-[var(--brand-2)] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-slate-300 text-sm">{f}</span>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-white mb-4">Why {location.cityName} businesses choose us</h2>
        <div className="space-y-4 text-slate-400 leading-relaxed">
          <p>
            Every business in {location.cityName} is competing for attention with dozens of others in the same industry, most
            of whom now have some kind of website. The businesses that actually win customers online are the ones whose sites
            load fast, look credible on a phone screen, and make it obvious what to do next — call, message on WhatsApp, or
            fill out a form. That is the standard we build every {location.cityName} project to.
          </p>
          <p>
            We combine conversion-focused design with clean, maintainable code on the MERN stack (React, Node.js, MongoDB,
            Express) for anything that needs a database or a dashboard, and hand-coded HTML, Tailwind CSS and JavaScript for
            fast, lightweight marketing sites. Either way, every {location.cityName} project ships with on-page SEO
            fundamentals — clean semantic markup, descriptive metadata, and structured data where relevant — so search
            engines understand who you are and where you operate.
          </p>
          <p>
            Because we work remotely, working with a {location.cityName} business does not mean waiting around for an
            in-person meeting to get anything done. Discovery calls, design reviews and progress updates all happen over
            phone, video call, email or WhatsApp, which usually means things move faster, not slower, than a traditional
            local agency relationship.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-white mb-4">Our process for {location.cityName} clients</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { t: 'Discovery Call', d: `We start with a short call to understand your ${location.cityName} business, your customers and what the site actually needs to do.` },
            { t: 'Fixed Quote', d: 'You receive a written scope and a fixed price before any development work begins — no open-ended hourly billing.' },
            { t: 'Design & Build', d: 'We design your key pages first for your sign-off, then build on clean code so the site stays fast and easy to maintain.' },
            { t: 'Launch & Support', d: 'We test across devices, connect your domain, and include 30 days of free bug fixes after your site goes live.' },
          ].map((s) => (
            <div key={s.t} className="glass rounded-xl p-6">
              <h3 className="text-white font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {location.faqs && location.faqs.length > 0 && (
        <section className="mt-16">
          <h2 className="font-display text-xl font-semibold text-white mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            {location.faqs.map((faq) => (
              <details key={faq.question} className="glass rounded-xl p-5">
                <summary className="text-white font-medium cursor-pointer">{faq.question}</summary>
                <p className="text-slate-400 text-sm mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="py-16 lg:py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden tilt-hover">
          <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2" />
          <h2 className="font-display text-3xl font-bold text-white relative">Ready to build your {location.cityName} website?</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto relative">Book a free call and we&apos;ll scope it around your exact needs.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 relative">
            <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl">Get in Touch</Link>
            <Link href="/pricing" className="btn-ghost px-7 py-3.5 rounded-xl">See Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
