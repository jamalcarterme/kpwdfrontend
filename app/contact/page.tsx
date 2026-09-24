/**
 * Contact Page (/contact)
 * Server Component with embedded Client Component Form
 * Page layout is SSR, form submission is CSR
 */

import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';
import { PAGE_META, generateMetadata, injectSchema, getBreadcrumbSchema } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';
import ScheduleWidget from '@/components/ScheduleWidget';

const afterYouSubmit = [
  { title: 'We read your message the same day', text: 'Every enquiry lands in one inbox we check throughout the working day, so nothing sits unread for long, even over a weekend.' },
  { title: 'You get a reply within 24 hours', text: 'We respond with clarifying questions if we need them, or a straightforward next step if your brief is already clear enough to quote from.' },
  { title: 'We schedule a short call if useful', text: 'For anything beyond a very simple site, a 15-20 minute call is usually faster than a long email thread for nailing down scope.' },
  { title: 'You receive a written quote', text: 'A fixed price and estimated timeline, based on what we discussed, with no obligation to proceed if it is not the right fit.' },
];

const contactFaqs = [
  { q: 'What information should I include in my first message?', a: 'A short description of your business, what you want the website or app to do, any examples you like, and a rough budget or timeline if you have one. The more specific you are, the faster we can send an accurate quote.' },
  { q: 'Do you offer a free consultation?', a: 'Yes, we offer a free discovery call to discuss your project before you commit to anything. You can request one through the contact form or by scheduling directly below.' },
  { q: 'What is the best way to reach you urgently?', a: 'WhatsApp is fastest for time-sensitive questions. For anything that needs more detail — a full brief, files or reference links — email works better since it keeps a clear written record for both sides.' },
  { q: 'Do you take calls with clients outside Nigeria?', a: 'Yes, we regularly take video and phone calls with clients in the US and other countries, scheduled around a time zone that works for both sides.' },
  { q: 'How soon can you start on a new project?', a: 'This depends on our current workload, but we will always tell you honestly when we can start during our first conversation rather than after you have paid a deposit.' },
];

// ===== Metadata =====
export const metadata: Metadata = generateMetadata(PAGE_META.contact);

// ===== Breadcrumb Schema =====
const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.kingpraisewebdesign.name.ng' },
  { name: 'Contact', url: 'https://www.kingpraisewebdesign.name.ng/contact' },
]);

// ===== Contact Page Component =====
export default function ContactPage() {
  return (
    <>
      {/* Inject breadcrumb schema */}
      {injectSchema(breadcrumbSchema)}

      <main className="flex-1">
        {/* ===== Hero Section ===== */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="glow-orb bg-[var(--brand)] w-96 h-96 -top-32 -left-32" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
              Have a question or project in mind? We'd love to hear from you. Fill out the form below, and we'll respond within 24 hours.
            </p>
          </div>
        </section>

        {/* ===== Contact Section ===== */}
        <section className="py-20 sm:py-32">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2">📧 Email</h3>
                  <a
                    href="mailto:kingpraisewebdesign@gmail.com"
                    className="text-slate-400 hover:text-[var(--brand)] transition-colors"
                  >
                    kingpraisewebdesign@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">📱 Phone</h3>
                  <div className="space-y-2">
                    <div>
                      <p className="text-slate-400 mb-1">Nigeria (WhatsApp):</p>
                      <a
                        href="tel:+2349030232048"
                        className="text-[var(--brand)] hover:text-[var(--brand-2)] transition-colors"
                      >
                        +234 903 023 2048
                      </a>
                    </div>
                    <div>
                      <p className="text-slate-400 mb-1">US/Global:</p>
                      <a
                        href="tel:+16507064845"
                        className="text-[var(--brand)] hover:text-[var(--brand-2)] transition-colors"
                      >
                        +1 650-706-4845
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">⏰ Response Time</h3>
                  <p className="text-slate-400">
                    We respond to all inquiries within 24 hours. For urgent matters, please call or WhatsApp.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">🌍 Remote-First</h3>
                  <p className="text-slate-400">
                    Based in Lagos, Nigeria, we work with clients worldwide. All communication via email, phone, and video calls.
                  </p>
                </div>

                {/* Location Info */}
                <div className="glass p-6 rounded-xl tilt-hover">
                  <h4 className="font-semibold mb-3">Service Areas</h4>
                  <ul className="text-slate-400 text-sm space-y-1">
                    <li>✓ Lagos</li>
                    <li>✓ Abuja</li>
                    <li>✓ Benin City</li>
                    <li>✓ Ibadan</li>
                    <li>✓ Port Harcourt</li>
                    <li>✓ Worldwide (Remote)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Schedule a Call ===== */}
        <section id="schedule" className="py-20 sm:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Prefer to Book a Call Directly?</h2>
            <p className="text-slate-400 mb-10">Skip the back-and-forth and pick a time that works for you. We&apos;ll confirm by email or WhatsApp.</p>
            <ScheduleWidget />
          </div>
        </section>

        {/* ===== What Happens After You Submit ===== */}
        <section className="py-20 sm:py-32 border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-4">What Happens After You Reach Out</h2>
            <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
              We know reaching out to a new developer can feel uncertain, especially if you have been burned by slow
              communication before. Here is exactly what to expect once you send that first message.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {afterYouSubmit.map((s, i) => (
                <div key={s.title} className="glass p-6 rounded-2xl tilt-hover">
                  <div className="text-[13px] font-bold uppercase tracking-widest text-brand">{String(i + 1).padStart(2, '0')}</div>
                  <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contact FAQ ===== */}
        <section className="py-20 sm:py-32 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-10">Contact FAQ</h2>
          <div className="space-y-3">
            {contactFaqs.map((f) => (
              <details key={f.q} className="group rounded-xl border border-[var(--border)] px-6 py-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold">
                  {f.q}
                  <ChevronDown size={20} className="shrink-0 text-brand transition group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ===== Why Choose Us ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)] section-hex">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-group">
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">🚀</div>
                <h3 className="text-lg font-semibold">Fast Turnaround</h3>
                <p className="text-slate-400 text-sm">
                  Most projects launch within 2-4 weeks. Quick, quality delivery.
                </p>
              </div>
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">💰</div>
                <h3 className="text-lg font-semibold">Affordable</h3>
                <p className="text-slate-400 text-sm">
                  Professional design without premium prices. Transparent pricing.
                </p>
              </div>
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">📊</div>
                <h3 className="text-lg font-semibold">Results-Focused</h3>
                <p className="text-slate-400 text-sm">
                  Every site is optimized for conversions, SEO, and mobile users.
                </p>
              </div>
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">🤝</div>
                <h3 className="text-lg font-semibold">Dedicated Support</h3>
                <p className="text-slate-400 text-sm">
                  We're here after launch. Updates, fixes, and new features included.
                </p>
              </div>
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">🔍</div>
                <h3 className="text-lg font-semibold">SEO Built-In</h3>
                <p className="text-slate-400 text-sm">
                  Every site ranks for your target keywords. Organic growth.
                </p>
              </div>
              <div className="space-y-3 glass p-6 rounded-2xl tilt-hover">
                <div className="text-4xl icon-bounce">⚡</div>
                <h3 className="text-lg font-semibold">High Performance</h3>
                <p className="text-slate-400 text-sm">
                  Fast load times, mobile-first, optimized for Core Web Vitals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
