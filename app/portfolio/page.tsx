import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as buildMeta, PAGE_META } from '@/lib/seo';
import PortfolioGrid from '@/components/PortfolioGrid';

export const metadata: Metadata = buildMeta(PAGE_META.portfolio);

export default function PortfolioPage() {
  return (
    <main className="pt-28 pb-24 max-w-7xl mx-auto px-5 lg:px-8">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-[var(--brand-2)] text-xs font-semibold uppercase tracking-widest">Portfolio</span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-3">Work we&apos;re proud of</h1>
        <p className="text-slate-400 mt-4">A selection of websites, apps and platforms we&apos;ve designed and built.</p>
      </div>

      <PortfolioGrid />

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
