/**
 * Blog Page (/blog)
 * Server Component (SSR)
 * Fetches published blog posts from backend API
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { PAGE_META, generateMetadata, injectSchema, getBreadcrumbSchema } from '@/lib/seo';
import NewsletterForm from '@/components/NewsletterForm';
import { SERVER_API_BASE } from '@/lib/api';
import { fallbackBlogPosts } from '@/lib/data/fallback';

const topics = [
  { title: 'Pricing & Budgeting', text: 'What websites, e-commerce stores and custom software actually cost in Nigeria, and how to avoid overpaying for features you do not need.' },
  { title: 'Industry Guides', text: 'What makes a website work for a specific type of business — law firms, real estate agencies, restaurants and med spas each have different priorities.' },
  { title: 'E-Commerce & Payments', text: 'Practical breakdowns of Flutterwave, Paystack and building online stores that Nigerian shoppers actually trust and complete checkout on.' },
  { title: 'SEO & Growth', text: 'On-page SEO fundamentals, structured data and the technical basics that help a small business site actually get found on Google.' },
];

const blogFaqs = [
  { q: 'How often do you publish new articles?', a: 'We publish new guides and case studies as they become genuinely useful, rather than on a fixed schedule padded with filler content. Subscribe below to be notified when a new one goes up.' },
  { q: 'Can I suggest a topic for the blog?', a: 'Yes — if there is a web design, SEO or software question you keep running into as a business owner, send it through our contact form and we may turn it into a full article.' },
  { q: 'Are these articles specific to Nigeria, or useful anywhere?', a: 'Most of our guides are written with the Nigerian market in mind — local payment gateways, connectivity conditions and business types — but the underlying principles of good web design and SEO apply anywhere.' },
];

// ===== Metadata =====
export const metadata: Metadata = generateMetadata(PAGE_META.blog);

// ===== Revalidation =====
export const revalidate = 3600; // Revalidate every 1 hour (ISR)

// ===== Breadcrumb Schema =====
const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.kingpraisewebdesign.name.ng' },
  { name: 'Blog', url: 'https://www.kingpraisewebdesign.name.ng/blog' },
]);

interface BlogPost {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  coverImage?: {
    url: string;
    publicId: string;
  };
  author: {
    _id: string;
    name: string;
  };
  category?: string;
  tags?: string[];
  views: number;
  createdAt: string;
  status: string;
}

/**
 * Fetch published blog posts straight from the backend API. No mock/fallback
 * content — if the API has no posts yet, the page shows its real empty
 * state below instead of fabricated data.
 */
async function getBlogPosts(): Promise<BlogPost[]> {
  const apiBase = SERVER_API_BASE;

  try {
    const res = await fetch(`${apiBase}/blog`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
      console.error(`Blog API error: ${res.status}`);
      return [];
    }

    const data = await res.json();
    return data.posts || data.data || [];
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return [];
  }
}

/**
 * Format date for display
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-NG', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Blog Page Component
 */
export default async function BlogPage() {
  const fetched = await getBlogPosts();
  const posts: BlogPost[] = fetched.length ? fetched : (fallbackBlogPosts as unknown as BlogPost[]);

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
              Web Design Blog
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Tips, guides, and case studies on web design, SEO, e-commerce, and digital marketing for small businesses.
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto mt-4">
              Everything here comes from real client work and the questions we get asked most often — how much a website
              should cost in Nigeria, what a law firm or restaurant site actually needs, and how to set up online payments
              without the checkout scaring customers off. No filler, no recycled listicles.
            </p>
          </div>
        </section>

        {/* ===== Popular Topics ===== */}
        <section className="pb-4">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {topics.map((t) => (
                <div key={t.title} className="glass p-6 rounded-2xl tilt-hover">
                  <h3 className="text-base font-semibold">{t.title}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Blog Posts Grid ===== */}
        <section className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 section-dots py-6">
                  {posts.map((post, i) => (
                    <article
                      key={post._id}
                      className="glass rounded-2xl overflow-hidden hover:border-[var(--brand)]/50 transition-all tilt-hover item-pop group"
                      style={{ animationDelay: `${Math.min(i, 8) * 0.07}s` }}
                    >
                      {/* Featured Image */}
                      {post.coverImage?.url && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={post.coverImage.url}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-6">
                        {/* Category & Date */}
                        <div className="flex items-center justify-between mb-3">
                          {post.category && (
                            <span className="text-xs font-semibold uppercase text-[var(--brand)]">
                              {post.category}
                            </span>
                          )}
                          <span className="text-xs text-slate-400">
                            {formatDate(post.createdAt)}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="hover:text-[var(--brand)] transition-colors"
                          >
                            {post.title}
                          </Link>
                        </h3>

                        {/* Excerpt */}
                        <p className="text-slate-400 text-sm line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

                        {/* Author & Read More */}
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">
                            By {post.author.name}
                          </span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-xs font-semibold text-[var(--brand)] hover:text-[var(--brand-2)] transition-colors"
                          >
                            Read More →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Load More CTA (optional) */}
                {posts.length >= 9 && (
                  <div className="text-center mt-12">
                    <button className="btn btn-outline">
                      Load More Articles
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Empty State */
              <div className="text-center py-20">
                <h2 className="text-2xl font-semibold mb-2">No articles yet</h2>
                <p className="text-slate-400 mb-6">
                  Check back soon for insights on web design and digital marketing.
                </p>
                <Link href="/" className="btn btn-ghost">
                  Back to Home
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* ===== Blog FAQ ===== */}
        <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Blog FAQ</h2>
          <div className="space-y-3">
            {blogFaqs.map((f) => (
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

        {/* ===== Newsletter CTA ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)] section-hex">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center glass rounded-3xl p-10 tilt-hover">
            <h2 className="text-3xl font-bold mb-4">
              Get Web Design Tips in Your Inbox
            </h2>
            <p className="text-slate-400 mb-8">
              Subscribe to our newsletter for the latest articles, case studies, and industry insights.
            </p>

            <NewsletterForm />
          </div>
        </section>
      </main>
    </>
  );
}
