/**
 * Blog Page (/blog)
 * Server Component (SSR)
 * Fetches published blog posts from backend API
 */

import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { PAGE_META, generateMetadata, injectSchema, getBreadcrumbSchema } from '@/lib/seo';
import NewsletterForm from '@/components/NewsletterForm';
import { SERVER_API_BASE } from '@/lib/api';

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
  const posts = await getBlogPosts();

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
          </div>
        </section>

        {/* ===== Blog Posts Grid ===== */}
        <section className="py-20 sm:py-32">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {posts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.map((post) => (
                    <article
                      key={post._id}
                      className="glass rounded-2xl overflow-hidden hover:border-[var(--brand)]/50 transition-all group"
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

        {/* ===== Newsletter CTA ===== */}
        <section className="py-20 sm:py-32 bg-[var(--bg-secondary)] border-t border-[var(--border)]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
