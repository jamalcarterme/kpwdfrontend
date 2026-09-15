import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { generateMetadata as buildMeta, PAGE_META, getBreadcrumbSchema } from '@/lib/seo';
import TeamGrid from '@/components/TeamGrid';
import AnnouncementsList from '@/components/AnnouncementsList';

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

      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">About Us</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3 leading-tight">A remote studio obsessed with craft</h1>
          <p className="text-slate-400 mt-5 leading-relaxed">
            King Praise Web Design is a remote-first digital agency helping founders and businesses ship premium websites, apps, and software. We combine sharp design with clean engineering, and we work with clients across Nigeria, the US, and beyond.
          </p>
          <p className="text-slate-400 mt-4 leading-relaxed">No bloated retainers, no jargon. Just clear scopes, honest timelines, and work that performs.</p>
        </div>
        <div className="glass rounded-2xl overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&h=380&q=80" alt="Remote design studio workspace" width={800} height={380} className="w-full h-48 object-cover" />
          <div className="grid grid-cols-2 gap-6 text-center p-8">
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
        <div className="glass rounded-2xl overflow-hidden order-1 lg:order-2">
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

      <div className="mt-24">
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
