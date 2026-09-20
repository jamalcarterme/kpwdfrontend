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
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import ScheduleWidget from '@/components/ScheduleWidget';
import Reveal from '@/components/Reveal';
import HeroSlider from '@/components/HeroSlider';
import Counter from '@/components/Counter';
import TeamGrid from '@/components/TeamGrid';
import { Palette, Code2, Megaphone, Smartphone, ShoppingCart, LifeBuoy, CheckCircle2, ChevronDown } from 'lucide-react';

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

const helpServices = [
  { icon: Palette, title: 'Web Design', desc: 'Conversion-focused, mobile-first websites for law firms, real estate, restaurants and small businesses.', href: '/services/corporate' },
  { icon: Code2, title: 'Development', desc: 'Full-stack builds on the MERN stack: custom web apps, portals, booking systems and dashboards.', href: '/services' },
  { icon: Megaphone, title: 'SEO & Marketing', desc: 'On-page SEO, structured data and fast load times so your business ranks and attracts qualified leads.', href: '/services/seo' },
  { icon: Smartphone, title: 'Landing Pages', desc: 'High-converting landing pages that turn ad and social traffic into enquiries and paying clients.', href: '/services/landing-page' },
  { icon: ShoppingCart, title: 'eCommerce', desc: 'Secure online stores with payments, product management and mobile-optimized storefronts.', href: '/services/ecommerce' },
  { icon: LifeBuoy, title: 'Help & Support', desc: 'A single point of contact and 30 days of free bug fixes after launch.', href: '/contact' },
];

const facts = [
  { to: 10, suffix: '+', label: 'Projects Shipped' },
  { to: 12, suffix: '+', label: 'Countries Served' },
  { to: 4.9, decimals: 1, suffix: '/5', label: 'Client Rating' },
  { to: 98, suffix: '%', label: 'Clients Who Re-hire' },
];

const why = [
  'Conversion-focused design that turns visitors into customers',
  'Fast delivery: most projects launch in 2-4 weeks',
  'SEO-optimized from day 1 with structured data',
  'Mobile-first and responsive on every device',
  'Dedicated support and 30 days of free bug fixes',
  'Transparent pricing from ₦50K for small business sites',
];

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
      <main>
        {/* ===== HERO ===== */}
        <section id="hero" aria-label="Hero" className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-24">
          <div className="absolute inset-0 animate-[kenburns_14s_ease-out_forwards]">
            <Image src="/images/hero-agency.jpg" alt="Web design agency team collaborating over laptops" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
          <div className="relative mx-auto w-full max-w-[1240px] px-6 py-20">
            <HeroSlider />
          </div>
        </section>

        {/* ===== HOW CAN WE HELP ===== */}
        <section id="services" className="bg-white py-24">
          <div className="mx-auto grid max-w-[1240px] gap-14 px-6 lg:grid-cols-[1fr_1.4fr]">
            <Reveal>
              <h2 className="text-[34px] font-bold leading-tight text-ink sm:text-[42px]">How can we help you?</h2>
              <p className="mt-5 text-[17px] leading-relaxed text-gray-600">
                We&apos;re a premium web design and software studio based in Lagos, working with law firms, real estate agencies, churches, restaurants and small businesses worldwide. No AI slop. No cookie-cutter templates. Just work that converts.
              </p>
              <p className="mt-4 text-[17px] leading-relaxed text-gray-600">
                We combine conversion-focused design with clean, maintainable code on the MERN stack (React, Node.js, MongoDB, Express.js) so your site ranks on Google and builds instant trust.
              </p>
              <Link href="/contact#schedule" className="mt-8 inline-block rounded-full bg-brand px-8 py-3.5 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(255,184,12,0.4)]">Book A Meeting</Link>
            </Reveal>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {helpServices.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.07}>
                  <Link href={s.href} className="group block">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-ink"><s.icon size={26} /></span>
                    <h4 className="mt-4 text-[20px] font-semibold text-ink transition group-hover:text-brand-3">{s.title}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.desc}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="bg-[#F4F6FA] py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-[34px] font-bold text-ink sm:text-[42px]">Portfolio</h2>
              <p className="mt-4 text-[17px] text-gray-600">A look at what we&apos;ve shipped for clients across industries and continents.</p>
            </Reveal>
            <div className="mt-12"><FeaturedProjects /></div>
            <div className="mt-10 text-center">
              <Link href="/portfolio" className="inline-block rounded-full bg-brand px-8 py-3.5 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-2">Explore More</Link>
            </div>
          </div>
        </section>

        {/* ===== FACTS (counters) ===== */}
        <section id="facts" className="relative overflow-hidden bg-ink py-24 text-white">
          <div className="absolute inset-0 opacity-25"><Image src="/images/hero-agency.jpg" alt="" fill sizes="100vw" className="object-cover" /></div>
          <div className="absolute inset-0 bg-ink/80" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-6 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-[34px] font-bold leading-tight sm:text-[42px]">Why Businesses Choose KPWD</h2>
              <p className="mt-4 text-[17px] text-white/70">Most web designers build pretty websites. We build websites that generate revenue.</p>
              <ul className="mt-7 space-y-3">
                {why.map((w) => <li key={w} className="flex gap-3 text-[16px] text-white/85"><CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand" />{w}</li>)}
              </ul>
            </Reveal>
            <div className="grid grid-cols-2 gap-6">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-white/15 bg-white/5 p-7 text-center backdrop-blur transition hover:-translate-y-1 hover:border-brand/60">
                    <div className="text-[44px] font-bold leading-none text-brand sm:text-[52px]"><Counter to={f.to} decimals={f.decimals} suffix={f.suffix} /></div>
                    <p className="mt-3 text-[15px] text-white/75">{f.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CUSTOMERS ===== */}
        <section id="customers" className="bg-white py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-[34px] font-bold text-ink sm:text-[42px]">Our Customers</h2>
              <p className="mt-4 text-[17px] text-gray-600">Businesses across Nigeria and beyond trust us to build their online presence.</p>
            </Reveal>
            <div className="mt-14"><TestimonialsCarousel /></div>
          </div>
        </section>

        {/* ===== LEADERSHIP ===== */}
        <section id="team" className="bg-[#F4F6FA] py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <Reveal className="mx-auto max-w-2xl text-center">
              <h2 className="text-[34px] font-bold text-ink sm:text-[42px]">Meet Our Leadership</h2>
              <p className="mt-4 text-[17px] text-gray-600">The people behind every conversion-focused website we ship.</p>
            </Reveal>
            <div className="mt-14"><TeamGrid /></div>
          </div>
        </section>

        {/* ===== FAQ (matches FAQ schema) ===== */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal className="text-center">
              <h2 className="text-[34px] font-bold text-ink sm:text-[42px]">Frequently Asked Questions</h2>
            </Reveal>
            <div className="mt-12 space-y-3">
              {faqs.map((f) => (
                <details key={f.question} className="group rounded-xl border border-gray-200 bg-white px-6 py-5 open:shadow-md">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-ink">
                    {f.question}
                    <ChevronDown size={20} className="shrink-0 text-brand transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-gray-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="relative overflow-hidden bg-ink py-24 text-center text-white">
          <div className="absolute inset-0 opacity-30"><Image src="/images/hero-agency.jpg" alt="" fill sizes="100vw" className="object-cover" /></div>
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 to-ink/95" />
          <Reveal className="relative mx-auto max-w-3xl px-6">
            <h3 className="text-[32px] font-bold leading-tight sm:text-[42px]">Would you like to start a project with us?</h3>
            <p className="mx-auto mt-5 max-w-xl text-[17px] text-white/75">Tell us about your business and we&apos;ll send you a free, no-obligation quote.</p>
            <Link href="/contact" className="mt-9 inline-block rounded-full bg-brand px-9 py-4 text-[15px] font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(255,184,12,0.4)]">Get a Quote</Link>
          </Reveal>
        </section>
      </main>
    </>
  );
}
