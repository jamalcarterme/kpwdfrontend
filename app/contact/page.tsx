/**
 * Contact Page (/contact)
 * Server Component with embedded Client Component Form
 * Page layout is SSR, form submission is CSR
 */

import { Metadata } from 'next';
import { PAGE_META, generateMetadata, injectSchema, getBreadcrumbSchema } from '@/lib/seo';
import ContactForm from '@/components/ContactForm';

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
                <div className="glass p-6 rounded-xl">
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

        {/* ===== Why Choose Us ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="text-4xl">🚀</div>
                <h3 className="text-lg font-semibold">Fast Turnaround</h3>
                <p className="text-slate-400 text-sm">
                  Most projects launch within 2-4 weeks. Quick, quality delivery.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">💰</div>
                <h3 className="text-lg font-semibold">Affordable</h3>
                <p className="text-slate-400 text-sm">
                  Professional design without premium prices. Transparent pricing.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">📊</div>
                <h3 className="text-lg font-semibold">Results-Focused</h3>
                <p className="text-slate-400 text-sm">
                  Every site is optimized for conversions, SEO, and mobile users.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🤝</div>
                <h3 className="text-lg font-semibold">Dedicated Support</h3>
                <p className="text-slate-400 text-sm">
                  We're here after launch. Updates, fixes, and new features included.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">🔍</div>
                <h3 className="text-lg font-semibold">SEO Built-In</h3>
                <p className="text-slate-400 text-sm">
                  Every site ranks for your target keywords. Organic growth.
                </p>
              </div>
              <div className="space-y-3">
                <div className="text-4xl">⚡</div>
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
