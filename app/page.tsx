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
import { Palette, Code2, Megaphone, Smartphone, ShoppingCart, LifeBuoy, Check, ChevronDown, ArrowRight } from 'lucide-react';
import { HexDeco, SectionHead } from '@/components/Ui';

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

const steps = [
  { t: 'Consult', d: 'Share your goals, budget and timeline on a free call.' },
  { t: 'Design', d: 'We map the pages and craft a conversion-focused design.' },
  { t: 'Build', d: 'Clean MERN-stack development with SEO baked in.' },
  { t: 'Launch', d: 'Go live fast, with 30 days of free bug fixes.' },
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
        <HeroSlider />

        {/* ===== SERVICES ===== */}
        <section id="services" className="relative overflow-hidden bg-white py-24">
          <HexDeco className="-left-16 top-24 h-64 w-64 text-brand-2" />
          <HexDeco className="-right-16 bottom-10 h-72 w-72 text-brand" />
          <div className="relative mx-auto max-w-6xl px-6">
            <Reveal className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">How can we help you?</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                We&apos;re a premium web design and software studio based in Lagos, working with law firms, real estate agencies, churches, restaurants and small businesses worldwide. Clean MERN-stack code, conversion-focused design and SEO from day one, so your site ranks on Google and builds instant trust.
              </p>
            </Reveal>
            <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {helpServices.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 0.12}>
                  <Link href={s.href} className="group block text-center">
                    <span className="relative mx-auto grid h-28 w-24 place-items-center">
                      <span className="hex absolute inset-0 bg-gradient-to-br from-brand to-brand-2 transition group-hover:scale-110" />
                      <s.icon className="relative h-9 w-9 text-white" />
                    </span>
                    <h3 className="mt-6 text-xl font-bold text-ink transition group-hover:text-brand">{s.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{s.desc}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand">Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="bg-[#F4F6FA] py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <SectionHead eyebrow="Our Work" title="Featured Projects" sub="A look at what we've shipped for clients across industries and continents." />
            <FeaturedProjects />
            <div className="mt-10 text-center">
              <Link href="/portfolio" className="btn bg-ink text-white hover:bg-brand">View All Projects <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section className="relative overflow-hidden bg-white py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
            <Reveal className="relative mx-auto h-[30rem] w-full max-w-lg sm:h-[34rem]">
              <div className="hex absolute left-0 top-0 h-[78%] w-[66%] bg-brand">
                <div className="hex absolute inset-1 overflow-hidden"><Image src="/images/hero-agency.jpg" alt="KPWD team at work" fill sizes="(min-width:1024px) 30vw, 60vw" className="object-cover" /></div>
              </div>
              <div className="hex absolute bottom-0 right-0 h-[62%] w-[56%] bg-brand-2">
                <div className="hex absolute inset-1 overflow-hidden"><Image src="/assets/img/portfolio-tasty-chops.png" alt="Website built by King Praise Web Design" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" /></div>
              </div>
              <div className="absolute bottom-6 left-0 rounded-2xl bg-ink p-5 text-white shadow-2xl">
                <p className="text-xs uppercase tracking-widest text-brand-2">Based in</p>
                <p className="font-display text-2xl font-extrabold">Lagos, Nigeria</p>
              </div>
            </Reveal>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[.25em] text-brand">About KPWD</span>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">Most designers build pretty websites. We build websites that generate revenue.</h2>
              <ul className="mt-8 grid gap-3">
                {why.map((w) => (
                  <li key={w} className="flex items-center gap-3 font-medium text-ink">
                    <span className="hex grid h-7 w-6 shrink-0 place-items-center bg-brand text-white"><Check className="h-3.5 w-3.5" /></span>{w}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn mt-10 bg-ink text-white hover:bg-brand">More About Us <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
          </div>
        </section>

        {/* ===== FACTS (parallax) ===== */}
        <section id="facts" className="parallax relative isolate py-28 text-white" style={{ backgroundImage: 'url(/images/hero-agency.jpg)' }}>
          <div className="absolute inset-0 -z-10 bg-ink/90" />
          <div className="hex-pattern absolute inset-0 -z-10" />
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="text-3xl font-bold !text-white sm:text-4xl">Why Businesses Choose KPWD</h2>
              <p className="mt-4 text-white/75">Results that keep clients coming back.</p>
            </Reveal>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.1} className="text-center">
                  <div className="relative mx-auto grid h-32 w-28 place-items-center">
                    <div className="hex absolute inset-0 bg-gradient-to-br from-brand to-brand-2" />
                    <span className="relative font-display text-3xl font-extrabold text-white"><Counter to={f.to} decimals={f.decimals} suffix={f.suffix} /></span>
                  </div>
                  <p className="mt-5 text-lg font-semibold text-white">{f.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-7xl px-6">
            <Reveal className="mb-14 text-center"><h2 className="text-3xl font-bold text-ink sm:text-4xl">A simple, transparent process</h2></Reveal>
            <div className="relative grid gap-10 md:grid-cols-4">
              <div className="absolute left-[12%] right-[12%] top-12 hidden border-t-2 border-dashed border-brand-2/50 md:block" />
              {steps.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.12} className="relative text-center">
                  <div className="hex relative mx-auto grid h-24 w-[5.4rem] place-items-center bg-ink font-display text-3xl font-extrabold text-brand-2">0{i + 1}</div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{s.t}</h3>
                  <p className="mt-2 text-sm text-gray-600">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CUSTOMERS ===== */}
        <section id="customers" className="bg-[#F4F6FA] py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <SectionHead eyebrow="Testimonials" title="Our Customers" sub="Businesses across Nigeria and beyond trust us to build their online presence." />
            <TestimonialsCarousel />
          </div>
        </section>

        {/* ===== TEAM ===== */}
        <section id="team" className="bg-white py-24">
          <div className="mx-auto max-w-[1240px] px-6">
            <SectionHead eyebrow="The Team" title="Meet Our Leadership" sub="The people behind every conversion-focused website we ship." />
            <TeamGrid />
          </div>
        </section>

        {/* ===== FAQ (matches FAQ schema) ===== */}
        <section className="bg-[#F4F6FA] py-24">
          <div className="mx-auto max-w-3xl px-6">
            <Reveal><h2 className="mb-10 text-center text-3xl font-bold text-ink sm:text-4xl">FAQs</h2></Reveal>
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.question} className="group overflow-hidden rounded-lg bg-ink text-white">
                  <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 font-display font-semibold">
                    <ChevronDown size={16} className="shrink-0 transition group-open:rotate-180" />{f.question}
                  </summary>
                  <p className="border-t border-white/15 px-5 py-4 text-sm leading-relaxed text-white/80">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="parallax relative isolate overflow-hidden py-24 text-center text-white" style={{ backgroundImage: 'url(/assets/img/portfolio-tasty-chops.png)' }}>
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-brand/80 to-ink/90" />
          <div className="hex-pattern absolute inset-0 -z-10" />
          <HexDeco className="left-4 top-6 h-40 w-40 text-brand-2" />
          <HexDeco className="bottom-4 right-8 h-56 w-56 text-brand-2" />
          <Reveal className="relative mx-auto max-w-3xl px-6">
            <h3 className="text-3xl font-bold !text-white sm:text-5xl">Would you like to start a project with us?</h3>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">Tell us about your business and we&apos;ll send you a free, no-obligation quote.</p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn btn-primary">Get a Quote <ArrowRight className="h-4 w-4" /></Link>
              <a href="https://wa.me/2349030232048" target="_blank" rel="noopener noreferrer" className="btn border border-white/40 text-white backdrop-blur hover:bg-white hover:text-ink">WhatsApp Us</a>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
