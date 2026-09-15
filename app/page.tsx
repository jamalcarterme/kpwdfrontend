/**
 * Home Page (/)
 * Server Component (SSR)
 * Content ported 1:1 from the approved kpwd-new-frontend index.html source
 * (hero, why-choose, featured portfolio, services, process, team, city/industry
 * links, testimonials, Calendly booking, final CTA), converted to Tailwind/JSX
 * with the same copy and section order, wired to real backend data + fallbacks.
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PAGE_META, generateMetadata, injectSchema, getFAQSchema, getBreadcrumbSchema } from '@/lib/seo';
import FeaturedProjects from '@/components/FeaturedProjects';
import TeamGrid from '@/components/TeamGrid';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScheduleWidget from '@/components/ScheduleWidget';
import Reveal from '@/components/Reveal';

// ===== Metadata =====
export const metadata: Metadata = generateMetadata(PAGE_META.home);

// ===== FAQ Schema for Rich Snippet =====
const faqs = [
  {
    question: 'How much does a custom website cost for a small business in Nigeria?',
    answer:
      'Pricing depends on scope, but our small business websites are built to be affordable without cutting corners on design or performance. See our pricing page for exact packages, or book a free call for a custom quote.',
  },
  {
    question: 'Do you build websites for law firms and real estate agencies?',
    answer:
      'Yes, we specialize in conversion-focused websites for law firms, real estate agencies, churches and small businesses, including property listing pages, client intake forms and appointment booking.',
  },
  {
    question: 'Can I hire a remote web developer to build an e-commerce website?',
    answer:
      'Yes, we work remotely with clients worldwide and build full e-commerce stores with secure checkout, product management and mobile-optimized storefronts.',
  },
  {
    question: 'How long does it take to design and launch a business website?',
    answer:
      'Most small business websites launch within 2-4 weeks depending on complexity. Custom software and larger e-commerce builds take longer.',
  },
  {
    question: 'Do you offer SEO with website design so my business ranks on Google?',
    answer:
      'Every site we build includes on-page SEO fundamentals such as clean code, fast load times, structured data and keyword-optimized content.',
  },
  {
    question: 'Who is King Praise Web Design for?',
    answer:
      'We are a web solutions agency in Nigeria built for law firms, real estate agencies, churches, restaurants, ecommerce brands and small business owners across Lagos, Abuja and beyond who want an affordable web developer near them.',
  },
  {
    question: 'Do you build ecommerce websites with online payment in Nigeria?',
    answer:
      'Yes, we build ecommerce websites with online payment in Nigeria, including Flutterwave integration, for restaurants, food vendors and retail businesses.',
  },
  {
    question: 'Can I hire a full stack web developer in Nigeria for my business?',
    answer:
      'Yes, we work as a full stack web developer for hire in Nigeria using the MERN stack (MongoDB, Express, React, Node.js) to build custom websites and software.',
  },
];

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Home',
  url: 'https://www.kingpraisewebdesign.name.ng/',
  datePublished: '2026-01-15',
  dateModified: '2026-07-25',
  author: { '@type': 'Person', name: 'King Praise', url: 'https://www.kingpraisewebdesign.name.ng/about' },
  publisher: {
    '@type': 'Organization',
    name: 'King Praise Web Design',
    logo: { '@type': 'ImageObject', url: 'https://www.kingpraisewebdesign.name.ng/assets/img/logo-full.png' },
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.kingpraisewebdesign.name.ng/#localbusiness',
  name: 'King Praise Web Design',
  image: 'https://www.kingpraisewebdesign.name.ng/assets/img/og-image.png',
  url: 'https://www.kingpraisewebdesign.name.ng/',
  telephone: '+2349030232048',
  email: 'kingpraisewebdesign@gmail.com',
  priceRange: '$$',
  address: { '@type': 'PostalAddress', addressLocality: 'Lagos', addressRegion: 'Lagos', addressCountry: 'NG' },
  geo: { '@type': 'GeoCoordinates', latitude: 6.5244, longitude: 3.3792 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Lagos' },
    { '@type': 'City', name: 'Abuja' },
    { '@type': 'City', name: 'Port Harcourt' },
    { '@type': 'City', name: 'Ibadan' },
    { '@type': 'City', name: 'Benin City' },
    { '@type': 'Country', name: 'Nigeria' },
  ],
  knowsAbout: ['Web Design', 'Web Development', 'E-Commerce Development', 'SEO', 'Mobile App Development', 'MERN Stack'],
  sameAs: ['https://maps.app.goo.gl/rBd7D72nhfCLi8bRA', 'https://www.tiktok.com/@king_praise_web_design'],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'King Praise Web Design',
  alternateName: 'KPWD Digital',
  url: 'https://www.kingpraisewebdesign.name.ng/',
  inLanguage: 'en-NG',
  publisher: { '@type': 'Organization', name: 'King Praise Web Design' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.kingpraisewebdesign.name.ng/blog?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Web design services by industry and city',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Web Design Lagos', url: 'https://www.kingpraisewebdesign.name.ng/locations/lagos' },
    { '@type': 'ListItem', position: 2, name: 'Web Design Abuja', url: 'https://www.kingpraisewebdesign.name.ng/locations/abuja' },
    { '@type': 'ListItem', position: 3, name: 'Web Design Port Harcourt', url: 'https://www.kingpraisewebdesign.name.ng/locations/port-harcourt' },
    { '@type': 'ListItem', position: 4, name: 'Web Design Ibadan', url: 'https://www.kingpraisewebdesign.name.ng/locations/ibadan' },
    { '@type': 'ListItem', position: 5, name: 'Web Design Benin City', url: 'https://www.kingpraisewebdesign.name.ng/locations/benin-city' },
    { '@type': 'ListItem', position: 6, name: 'Law Firm Web Design', url: 'https://www.kingpraisewebdesign.name.ng/services/law-firms' },
    { '@type': 'ListItem', position: 7, name: 'Real Estate Website Design', url: 'https://www.kingpraisewebdesign.name.ng/services/real-estate' },
    { '@type': 'ListItem', position: 8, name: 'Restaurant Website Design', url: 'https://www.kingpraisewebdesign.name.ng/services/restaurant' },
    { '@type': 'ListItem', position: 9, name: 'E-Commerce Web Design Abuja', url: 'https://www.kingpraisewebdesign.name.ng/services/ecommerce' },
    { '@type': 'ListItem', position: 10, name: 'SEO Services for Small Business', url: 'https://www.kingpraisewebdesign.name.ng/services/seo' },
  ],
};

export default function HomePage() {
  return (
    <>
      {injectSchema(getFAQSchema(faqs))}
      {injectSchema(getBreadcrumbSchema([{ name: 'Home', url: '/' }]))}
      {injectSchema(webPageSchema)}
      {injectSchema(PAGE_META.home.schema as Record<string, unknown>)}
      {injectSchema(localBusinessSchema)}
      {injectSchema(websiteSchema)}
      {injectSchema(itemListSchema)}

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section id="hero" aria-label="Hero section featuring company value proposition" className="relative overflow-hidden isolate">
          {/* Video background — autoplay/muted/loop/playsInline so it starts
              instantly on load with no user interaction and no wasted time. */}
          <video
            className="absolute inset-0 w-full h-full object-cover -z-20"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay so text stays readable over any frame of the video */}
          <div className="absolute inset-0 -z-10 bg-black/65" />
          <div className="glow-orb bg-[var(--brand)] w-[500px] h-[500px] -top-40 -left-40 opacity-20" />
          <div className="glow-orb-2 bg-[var(--brand-2)] w-[400px] h-[400px] top-40 right-0 opacity-20" />

          <div className="max-w-4xl mx-auto px-5 lg:px-8 py-20 sm:py-28 lg:py-36 relative z-10 flex flex-col items-center text-center">
            <span className="chip"><span className="dot" /> Lagos &middot; Serving 12+ countries</span>
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mt-5 sm:mt-6">
              Built for Businesses Who Are <span className="text-gradient">Done Being Invisible Online</span>.
            </h1>
            <p className="text-slate-200 text-base sm:text-lg mt-4 sm:mt-6 max-w-2xl">
              A premium website, e-commerce store or custom software build, engineered to make you the obvious choice in your market and turn visitors into paying clients. Designed with intent, built with clean code, shipped fast.
            </p>
            <p className="text-slate-300 text-base sm:text-lg mt-4 max-w-2xl">
              We specialize in conversion-focused design for law firms, real estate agencies, e-commerce brands, restaurants, and small businesses across Lagos and Nigeria. Every site we build includes on-page SEO optimization, mobile responsiveness, and fast load times&mdash;ensuring you rank on Google and attract qualified leads.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6 sm:mt-8">
              <Link href="/contact#schedule" className="btn-primary px-7 py-3.5 rounded-xl">Book a Free Strategy Call</Link>
              <Link href="/contact" className="btn-ghost px-7 py-3.5 rounded-xl !border-white !text-white hover:!bg-white/10">Get a Free Quote</Link>
            </div>
            <div className="stat-row mt-10 sm:mt-12 justify-center">
              <div className="stat"><b className="text-white">12+</b><span className="text-slate-300">Countries served</span></div>
              <div className="stat"><b className="text-white">4.9/5</b><span className="text-slate-300">Client rating</span></div>
              <div className="stat"><b className="text-white">2&ndash;4</b><span className="text-slate-300">Weeks to launch</span></div>
              <div className="stat"><b className="text-white">98%</b><span className="text-slate-300">Clients who re-hire</span></div>
            </div>
          </div>

          <div className="border-y border-white/10 py-6 overflow-hidden relative z-10 bg-black/50">
            <div className="marquee-track text-slate-300 font-display text-sm uppercase tracking-widest">
              <span>Web Design</span><span>&middot;</span><span>E-Commerce</span><span>&middot;</span><span>Mobile Apps</span><span>&middot;</span><span>Custom Software</span><span>&middot;</span><span>SEO</span><span>&middot;</span><span>Branding</span>
              <span>Web Design</span><span>&middot;</span><span>E-Commerce</span><span>&middot;</span><span>Mobile Apps</span><span>&middot;</span><span>Custom Software</span><span>&middot;</span><span>SEO</span><span>&middot;</span><span>Branding</span>
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE KPWD ===== */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16 border-t border-[var(--border)]">
          <div className="text-center mb-12">
            <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Why Choose King Praise</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)] mt-3">Why Businesses Choose KPWD</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto">Most web designers build pretty websites. We build websites that generate revenue.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              { icon: '🎯', title: 'Conversion-Focused Design', desc: 'Every element is engineered to convert visitors into paying customers. Not just aesthetics—results.' },
              { icon: '⚡', title: 'Fast Delivery (2-4 Weeks)', desc: 'We ship websites quickly without cutting corners on quality. Most projects launch within 2-4 weeks.' },
              { icon: '🔍', title: 'SEO-Optimized from Day 1', desc: 'Every site includes keyword research, on-page optimization, and structured data for Google rankings.' },
              { icon: '📱', title: 'Mobile-First & Responsive', desc: 'Optimized for all devices with fast load times and smooth user experience across desktop, tablet, mobile.' },
              { icon: '💼', title: 'Dedicated Support', desc: 'Single point of contact throughout the project. 30 days of free bug fixes after launch.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden fees. Packages start at ₦50K for small business sites. Custom quotes for enterprises.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="bg-[var(--surface)] rounded-lg p-6 border border-[var(--border)] hover:border-[var(--brand)] transition h-full">
                  <div className="text-3xl mb-3">{c.icon}</div>
                  <h3 className="text-[var(--text-primary)] font-semibold text-lg mb-2">{c.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== FEATURED PORTFOLIO ===== */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Selected Work</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)] mt-3">Real projects, real results</h2>
              <p className="text-[var(--text-secondary)] mt-3 max-w-lg">A look at what we&apos;ve shipped for clients across industries and continents.</p>
            </div>
            <Link href="/portfolio" className="btn-primary px-5 py-2.5 rounded-lg text-sm whitespace-nowrap">View full portfolio →</Link>
          </div>
          <FeaturedProjects />
        </section>

        {/* ===== SERVICES & ABOUT ===== */}
        <section id="services" className="max-w-7xl mx-auto px-5 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Who We Are</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3 leading-[1.2]">No AI slop. No cookie-cutter templates. Just work that converts.</h2>
              <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">We&apos;re a premium web design and software studio based in Lagos, working with law firms, real estate agencies, churches, restaurants and small businesses worldwide. We combine conversion-focused design with clean, maintainable code on the MERN stack (React, Node.js, MongoDB, Express.js).</p>
              <p className="text-[var(--text-secondary)] mt-3 leading-relaxed">Our mission: give your business a web presence that ranks on Google, builds instant trust with visitors, and turns them into paying customers, not just another site sitting quietly in a corner of the internet.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['10+', 'Projects Shipped'],
                ['4.9/5', 'Client Rating'],
                ['12+', 'Countries Served'],
                ['2-4', 'Weeks to Launch'],
              ].map(([num, label]) => (
                <div key={label} className="glass rounded-xl p-6 text-center">
                  <div className="font-display text-3xl font-bold text-[var(--brand-2)]">{num}</div>
                  <p className="text-[var(--text-secondary)] text-sm mt-2">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">What We Deliver</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mt-3">Full-stack digital solutions built for conversion</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=500&h=300&q=80', alt: 'Web Design & Development', title: 'Web Design & Development', desc: 'Fast, responsive websites built to convert visitors into customers with SEO fundamentals baked in.', price: 'From $450' },
                { img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&h=300&q=80', alt: 'Mobile Apps', title: 'Mobile Apps', desc: 'Native-feel apps for iOS and Android built on a single codebase with real-time functionality.', price: 'From $3,000' },
                { img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500&h=300&q=80', alt: 'Custom Software', title: 'Custom Software', desc: 'Bespoke dashboards, internal tools and automation systems tailored to your exact needs.', price: 'From $3,000' },
              ].map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08}>
                  <div className="glass rounded-2xl overflow-hidden card-hover h-full">
                    <div className="relative w-full h-40">
                      <Image src={s.img} alt={s.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-lg font-semibold text-[var(--text-primary)]">{s.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm mt-3">{s.desc}</p>
                      <span className="price-tag">{s.price}</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {['Conversion-Focused', 'Mobile-Optimized', 'SEO-Ready', 'Fast Support'].map((t) => (
                <div key={t} className="glass rounded-xl p-5 text-center"><span className="text-emerald-400 text-lg">✓</span><p className="text-[var(--text-secondary)] text-sm font-medium mt-1">{t}</p></div>
              ))}
            </div>
            <div className="text-center mt-12"><Link href="/services" className="text-[var(--brand-2)] font-semibold hover:underline text-sm">Explore all services &rarr;</Link></div>
          </div>
        </section>

        {/* ===== HOW IT WORKS ===== */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">How It Works</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3">A calm, predictable process</h2>
            <p className="text-[var(--text-secondary)] mt-3">No black boxes, no surprise invoices &mdash; just a clear path from call to launch.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              ['01', 'Strategy call', '30 focused minutes on your market, offer and buyer. You leave with a plan either way.'],
              ['02', 'Blueprint & design', 'Messaging and wireframes, then a high-fidelity design you approve before we write code.'],
              ['03', 'Build & QA', 'Clean, fast, accessible code. Tested across devices and tuned for Core Web Vitals.'],
              ['04', 'Launch & grow', 'We ship, track the numbers, and keep optimizing what turns visitors into clients.'],
            ].map(([num, title, desc], i) => (
              <div key={String(num)} className="relative">
                <div className="step-num">{num}</div>
                {i < 3 && <div className="step-connector" />}
                <h3 className="font-display text-lg font-semibold text-[var(--text-primary)] mt-4">{title}</h3>
                <p className="text-[var(--text-secondary)] text-sm mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===== OUR TEAM ===== */}
        <section id="team-section" className="max-w-7xl mx-auto px-5 lg:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Our Team</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3">The people behind the work</h2>
          </div>
          <TeamGrid />
          <div className="text-center mt-10"><Link href="/about" className="text-[var(--brand-2)] font-semibold hover:underline">Meet the full team &rarr;</Link></div>
        </section>

        {/* ===== WEB DESIGN BY CITY & INDUSTRY ===== */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 py-24 border-t border-[var(--border)]">
          <div className="text-center mb-12">
            <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Services by Location & Industry</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[var(--text-primary)] mt-3">Web Design Services Across Nigeria</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/locations/lagos', title: 'Web Design Company Lagos', desc: 'Custom websites for businesses across Lagos. Conversion-focused design for law firms, real estate, e-commerce & startups.' },
              { href: '/locations/victoria-island', title: 'Website Designer Victoria Island', desc: 'Local professional web designer for Victoria Island, Lekki, and Ikoyi businesses.' },
              { href: '/locations/lagos', title: 'Web Design Agency Lagos', desc: 'Full-service web design agency offering design, development, SEO, and digital strategy.' },
              { href: '/locations/nigeria', title: 'Web Design Company Nigeria', desc: 'Remote-first web design serving Lagos, Abuja, Port Harcourt, and nationwide.' },
              { href: '/services/ecommerce', title: 'E-Commerce Website Developer', desc: 'Build online stores with Flutterwave & Paystack integration for Nigerian businesses.' },
              { href: '/services/logistics', title: 'Website Design for Logistics', desc: 'Specialized B2B websites with shipment tracking, quote management & lead generation.' },
            ].map((l) => (
              <Link key={l.title} href={l.href} className="group bg-[var(--surface)] border border-[var(--border)] rounded-lg p-6 hover:border-[var(--brand)] hover:bg-[var(--surface)] transition">
                <h3 className="text-[var(--text-primary)] font-semibold mb-2 group-hover:text-[var(--brand-2)]">{l.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section id="testimonials-section" className="py-24">
          <div className="max-w-7xl mx-auto px-5 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Client Voices</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3">Trusted by teams worldwide</h2>
            </div>
          </div>
          <TestimonialsCarousel />
        </section>

        {/* ===== SCHEDULE A CALL ===== */}
        <section id="schedule" className="max-w-7xl mx-auto px-5 lg:px-8 py-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Book Your Free Call</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mt-3">Schedule time with our team</h2>
            <p className="text-[var(--text-secondary)] mt-4">Pick a time that works best for you. We&apos;ll discuss your project, goals, and how we can help.</p>
          </div>
          <ScheduleWidget />
        </section>

        {/* ===== FAQ ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details key={index} className="glass p-6 rounded-xl cursor-pointer group">
                  <summary className="flex items-center justify-between font-semibold text-lg group-open:text-[var(--brand)]">
                    {faq.question}
                    <span className="text-xl group-open:rotate-180 transition-transform">▾</span>
                  </summary>
                  <p className="text-[var(--text-secondary)] mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10 mb-10">
          <div className="glass rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="glow-orb bg-[var(--brand)] w-72 h-72 -top-20 left-1/2 -translate-x-1/2" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] relative">Ready to build something great?</h2>
            <p className="text-[var(--text-secondary)] mt-4 max-w-lg mx-auto relative">Tell us about your project and we&apos;ll get back within 24 hours with a clear plan and quote.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-8 relative">
              <Link href="/contact#schedule" className="btn-primary px-7 py-3.5 rounded-xl">Book a Free Call</Link>
              <Link href="/pricing" className="btn-ghost px-7 py-3.5 rounded-xl">See Pricing</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
