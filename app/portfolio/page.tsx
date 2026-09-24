import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { generateMetadata as buildMeta, PAGE_META } from '@/lib/seo';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = buildMeta(PAGE_META.portfolio);

const process = [
  {
    step: '01',
    title: 'Discovery & Scoping',
    text: 'Every project starts with a short call or written brief where we map out what your business actually needs — the pages, the features, the integrations, and the timeline you are working with. We are not interested in selling you a bigger package than you need, so this stage usually ends with a fixed quote and a clear list of deliverables rather than a vague hourly estimate.',
  },
  {
    step: '02',
    title: 'Design & Wireframing',
    text: 'Before a single line of production code is written, we lay out the structure of your pages and the visual direction: colors, typography, imagery style and the layout of key sections like your hero, services and contact areas. You see and approve this before development begins, so there are no surprises later.',
  },
  {
    step: '03',
    title: 'Development',
    text: 'Depending on the project, we build on clean HTML/Tailwind/JavaScript for marketing sites, or the MERN stack (MongoDB, Express, React, Node.js) for anything that needs a database, user accounts, an admin dashboard or a booking/checkout flow. Code is written to be maintainable, not just functional, so future changes are cheap rather than painful.',
  },
  {
    step: '04',
    title: 'Content & SEO',
    text: 'We fold in on-page SEO fundamentals as we build — clean semantic markup, fast-loading images, descriptive metadata and, where relevant, structured data (Schema.org / JSON-LD) so search engines understand what your business does and where you operate.',
  },
  {
    step: '05',
    title: 'Testing & Launch',
    text: 'We test across devices and browsers, check forms and payment flows end-to-end, and confirm analytics and any third-party integrations (WhatsApp, Flutterwave, Paystack, Calendly, Cloudinary) are firing correctly before the project goes live on your domain.',
  },
  {
    step: '06',
    title: 'Support & Handover',
    text: 'Every project ships with 30 days of free bug fixes and a short walkthrough of anything you will manage yourself, whether that is a CMS, an admin dashboard, or simple content edits. Ongoing maintenance and feature add-ons are available afterward on a project basis.',
  },
];

const categories = [
  { name: 'Websites', desc: 'Conversion-focused marketing sites for small businesses, restaurants, med spas, interior designers and energy companies — built to load fast and rank on Google from day one.' },
  { name: 'Web Applications', desc: 'Full-stack platforms with a real backend: property listings, shortlet booking systems, church management tools and other custom software with authentication and role-based access.' },
  { name: 'Admin Dashboards', desc: 'CRUD-driven back offices with aggregated stats, review moderation, booking management and client project tracking, so business owners are not stuck emailing us for every small update.' },
  { name: 'E-Commerce', desc: 'Online stores with product management, cart-to-order checkout and Nigerian payment gateway integration (Flutterwave, Paystack), built for mobile-first shoppers.' },
];

const faqs = [
  { q: 'Can I see live examples of your work?', a: 'Yes — most projects below link out to the live site with a "Visit Site" button on hover. A few are private client dashboards or internal tools we can only walk you through on a call for confidentiality reasons.' },
  { q: 'Do you only build for Nigerian businesses?', a: 'Most of our current clients are based in Nigeria — Lagos, Abuja, Port Harcourt and beyond — but we work remotely with clients in other countries too, and every project is built to the same standard regardless of location.' },
  { q: 'What industries have you worked with?', a: 'Real estate, hospitality and shortlets, churches and ministries, food and events businesses, solar energy installers, beauty and med spas, and interior design and luxury real estate consultancies, among others.' },
  { q: 'Do you build the backend as well as the frontend?', a: 'Yes. A large share of the work in this portfolio is full-stack: a Node.js/Express/MongoDB API paired with a React or Next.js frontend, complete with authentication, admin dashboards and, where needed, a client portal.' },
  { q: 'Can you add features to an existing project later?', a: 'Yes, several of the projects below started smaller and grew — a static site becoming a dynamic, database-driven platform, or a basic dashboard gaining new panels and analytics as the business grew.' },
];

export default function PortfolioPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Portfolio</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink mt-3">Work we&apos;re proud of</h1>
        <p className="text-slate-500 mt-4">
          A selection of websites, web applications and admin dashboards we&apos;ve designed and built for real businesses across
          Nigeria and beyond — from property platforms and shortlet booking systems to church management software and
          conversion-focused marketing sites. Every card below is clickable: hover or tap a project to see a &ldquo;Visit
          Site&rdquo; link where a live version is available.
        </p>
      </div>

      <section className="mt-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <div key={c.name} className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">A little more about how this portfolio is built</h2>
        <p className="mt-5 text-[15px] leading-relaxed text-slate-400">
          Every project below is real client work, not a stock template dressed up for a portfolio page. Some, like Martins
          Realties and Neristay, started as static brochure sites and grew into full platforms with a database, an admin
          dashboard and role-based logins once the business needed more than a landing page. Others, like Russell Solar
          Energy and Kaima&apos;s Beauty &amp; Med Spa, are lean, fast-loading marketing sites built to convert local search
          traffic into phone calls and bookings without the overhead of a full backend the business does not yet need.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
          On the technical side, our full-stack builds run on the MERN stack — MongoDB for the database, Express for the API
          layer, React (often via Next.js) for the interface, and Node.js tying it all together — with JWT-based authentication,
          Cloudinary for image uploads, and role-based access control wherever a project needs an admin, a department head and a
          regular member or client to each see something different. Marketing-only sites are typically hand-built with HTML,
          Tailwind CSS and vanilla JavaScript, which keeps them extremely fast to load on a phone over a typical Nigerian mobile
          connection while still leaving room for structured data and clean, crawlable markup for SEO.
        </p>
        <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
          We also treat the admin side of a project as seriously as the public-facing side. A property platform is only useful
          to its owner if they can add and remove listings themselves; a church app only saves staff time if department heads
          can update their own members without calling a developer. That is why almost every full-stack project in this
          portfolio ships with some form of admin dashboard — CRUD screens, aggregated statistics, booking and message
          management, and in several cases a separate client-facing portal for tracking project milestones after handover.
        </p>
      </section>

      <div className="section-dots py-6">
        <PortfolioGrid />
      </div>

      <section className="py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">How we get from brief to launch</h2>
          <p className="text-slate-400 mt-4">
            Every project on this page, whether a two-page marketing site or a full platform with an admin dashboard, follows
            the same six-stage process. It keeps timelines predictable and means you always know what stage your project is at.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="glass rounded-2xl p-7">
              <div className="text-[13px] font-bold uppercase tracking-widest text-brand">{p.step}</div>
              <h3 className="mt-3 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-20 max-w-3xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white">Portfolio FAQ</h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
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

      <section className="py-16 lg:py-24">
        <div className="glass rounded-3xl p-12 text-center relative overflow-hidden tilt-hover">
          <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2 float" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white relative">Ready to discuss your project?</h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto relative">Let&apos;s explore how we can help grow your business with a custom web solution.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 relative">
            <Link href="/contact" className="btn-primary px-7 py-3.5 rounded-xl">Get in Touch</Link>
            <Link href="/contact#schedule" className="btn-ghost px-7 py-3.5 rounded-xl">Schedule Free Call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
