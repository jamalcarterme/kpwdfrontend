import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ShieldCheck, Rocket, Handshake, LineChart } from 'lucide-react';
import { generateMetadata as buildMeta, PAGE_META, getBreadcrumbSchema } from '@/lib/seo';
import TeamGrid from '@/components/TeamGrid';
import AnnouncementsList from '@/components/AnnouncementsList';

const values = [
  { icon: ShieldCheck, title: 'Direct Access, No Middlemen', text: 'You work with the person actually writing the code and making design decisions, not an account manager relaying messages between you and a developer you never speak to.' },
  { icon: Rocket, title: 'Fast, Honest Timelines', text: 'Most small business websites launch in 2-4 weeks. We would rather tell you a realistic date up front than promise something impossible and miss it.' },
  { icon: LineChart, title: 'Built To Perform, Not Just Look Good', text: 'Every site ships with on-page SEO fundamentals, fast load times and mobile-first layouts, because a beautiful site that nobody finds on Google is not doing its job.' },
  { icon: Handshake, title: 'Support That Continues After Launch', text: 'Thirty days of free bug fixes are included with every project, and ongoing maintenance or feature add-ons are available afterward on a straightforward, project-based basis.' },
];

const aboutFaqs = [
  { q: 'Where is King Praise Web Design based, and do you work internationally?', a: 'We are based in Nigeria and work remotely with clients across Lagos, Abuja, Port Harcourt and beyond, as well as clients in the US and other countries. Every project is delivered remotely, with regular check-ins by call, email or WhatsApp.' },
  { q: 'Who actually builds my website?', a: 'King Praise, the founder, is personally involved in every project as the lead full-stack developer, supported by the wider team for design, content and QA on larger builds. You are never handed off to an anonymous outsourced team.' },
  { q: 'What makes King Praise Web Design different from a template marketplace?', a: 'Templates are fast but generic, and they rarely fit a specific business perfectly. We build to your actual brief: your industry, your customers and the specific features your business needs, whether that is a simple brochure site or a full platform with an admin dashboard.' },
  { q: 'Do you take on projects outside of web design?', a: 'Yes. Alongside websites, we build full-stack web applications, admin dashboards, client portals and custom software on the MERN stack for businesses that have outgrown a simple website.' },
];

export const metadata: Metadata = buildMeta(PAGE_META.about);

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'King Praise',
  jobTitle: 'Founder',
  worksFor: { '@type': 'Organization', name: 'King Praise Web Design', url: 'https://www.kingpraisewebdesign.name.ng/' },
  description:
    'King Praise is a young entrepreneur in Nigeria and the founder of King Praise Web Design, a web solutions agency building websites for small businesses, law firms, real estate agencies and churches.',
  nationality: 'Nigerian',
};

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema([{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }])) }}
      />

      <div className="grid lg:grid-cols-2 gap-14 items-center section-hex py-6">
        <div className="item-pop">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight">A remote studio obsessed with craft</h1>
          <p className="text-slate-400 mt-5 leading-relaxed">
            King Praise Web Design is a remote-first digital agency helping founders and businesses ship premium websites, apps, and software. We combine sharp design with clean engineering, and we work with clients across Nigeria, the US, and beyond.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">No bloated retainers, no jargon. Just clear scopes, honest timelines, and work that performs.</p>
        </div>
        <div className="glass rounded-2xl overflow-hidden tilt-hover item-pop" style={{ animationDelay: '0.15s' }}>
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=380&q=80" alt="Remote design studio workspace" width={800} height={380} className="w-full h-48 object-cover" />
          <div className="grid grid-cols-2 gap-6 text-center p-8 reveal-group">
            <div><p className="font-display text-3xl font-bold text-white">50+</p><p className="text-slate-500 text-sm mt-1">Projects Delivered</p></div>
            <div><p className="font-display text-3xl font-bold text-white">12+</p><p className="text-slate-500 text-sm mt-1">Countries Served</p></div>
            <div><p className="font-display text-3xl font-bold text-white">4.9/5</p><p className="text-slate-500 text-sm mt-1">Average Rating</p></div>
            <div><p className="font-display text-3xl font-bold text-white">100%</p><p className="text-slate-500 text-sm mt-1">Remote Delivery</p></div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid lg:grid-cols-2 gap-14 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Meet the Founder</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 leading-tight">King Praise, Founder of King Praise Web Design</h2>
          <p className="text-slate-400 mt-5 leading-relaxed">
            King Praise Web Design was founded by <strong className="text-white">King Praise</strong>, a young entrepreneur based in Nigeria who set out to make premium, conversion-focused websites affordable for small businesses, law firms, real estate agencies and churches across Lagos, Abuja and beyond.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">
            As a full-stack developer and web solutions agency owner in Nigeria, King Praise leads every project personally, from Node.js/Express/MongoDB backends to fast, SEO-friendly frontends, ensuring each client gets a website built to rank on Google and convert visitors into customers.
          </p>
        </div>
        <div className="glass rounded-2xl overflow-hidden order-1 lg:order-2 tilt-hover">
          <Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=320&q=80" alt="Founder working on client project" width={800} height={320} className="w-full h-44 object-cover" />
          <div className="p-8">
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Why Clients Hire King Praise Web Design</p>
            <ul className="mt-4 space-y-3 text-slate-400 text-sm leading-relaxed list-disc list-inside">
              <li>Direct access to the founder on every project, not a middleman account manager</li>
              <li>Full-stack expertise: MERN stack development plus on-page &amp; technical SEO</li>
              <li>Affordable pricing built for Nigerian small businesses and startups</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">How We Work</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">What you can expect from us</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            We built King Praise Web Design around the things we found frustrating as clients ourselves before we became an
            agency: slow communication, vague scopes, and websites that looked nice in a mockup but never actually brought in
            business. These four commitments guide every project, big or small.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="glass rounded-2xl p-7 flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/15 text-brand"><v.icon size={24} /></span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Who We Work With</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">Industries we understand</h2>
          <p className="text-slate-400 mt-4 leading-relaxed">
            A generic website builder does not know the difference between what a law firm&apos;s visitors need to see and what
            a restaurant&apos;s customers are looking for. We have built specifically for these industries, which means we walk
            into a new project already understanding the pages, trust signals and calls to action that actually matter.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto text-sm text-slate-400 leading-relaxed">
          <p><strong className="text-white">Real estate &amp; property.</strong> Listing pages with search and filters, cart-to-order enquiry flows, and admin dashboards for agents to manage inventory themselves.</p>
          <p><strong className="text-white">Hospitality &amp; shortlets.</strong> Dynamic property listings, booking forms with WhatsApp fallback, and AI-assisted chat for guest questions around the clock.</p>
          <p><strong className="text-white">Churches &amp; ministries.</strong> Membership and department management, role-based access for admins and department heads, and analytics dashboards for leadership.</p>
          <p><strong className="text-white">Food &amp; events.</strong> Fast, mobile-first ordering and events sites tuned for customers browsing and buying from their phones.</p>
          <p><strong className="text-white">Energy &amp; installers.</strong> Trust-building marketing sites with structured data for local SEO, built to convert nearby search traffic into quote requests.</p>
          <p><strong className="text-white">Beauty, med spas &amp; interior design.</strong> Premium single-page and multi-page sites with strong brand palettes, scroll animations and local business structured data.</p>
        </div>
      </section>

      <section className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white">Frequently asked questions</h2>
        <div className="mt-10 space-y-3">
          {aboutFaqs.map((f) => (
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

      <div className="mt-24 section-dots py-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Our Team</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">The people behind the work</h2>
        </div>
        <TeamGrid />
      </div>

      <div className="mt-24">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Announcements</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3">Latest updates</h2>
        </div>
        <AnnouncementsList />
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
