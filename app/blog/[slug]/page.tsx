/**
 * Blog Post Page (/blog/[slug])
 * Fetches the post from the backend API only — no mock/fallback content.
 */

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as buildMeta, getBlogPostMeta } from '@/lib/seo';
import { formatDate } from '@/lib/utils';
import { SERVER_API_BASE as API_BASE } from '@/lib/api';

interface BlogPost {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category?: string;
  tags?: string[];
  views?: number;
  createdAt: string;
  updatedAt?: string;
  coverImage?: { url?: string };
}

async function getPost(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_BASE}/blog/${slug}`, { next: { revalidate: 300 } });
    if (res.ok) {
      const data = await res.json();
      return data.post || data.data || null;
    }
  } catch (error) {
    console.error('Failed to fetch blog post:', error);
  }
  return null;
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return { title: 'Post Not Found' };
  return buildMeta(
    getBlogPostMeta({
      title: post.title,
      excerpt: post.excerpt || post.title,
      slug: post.slug,
      coverImage: post.coverImage?.url,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt || post.createdAt,
    })
  );
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const date = formatDate(post.createdAt);
  const updated = post.updatedAt && post.updatedAt !== post.createdAt ? formatDate(post.updatedAt) : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt || post.title,
    image: post.coverImage?.url ? [post.coverImage.url] : undefined,
    datePublished: post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: { '@type': 'Person', name: 'King Praise', url: 'https://www.kingpraisewebdesign.name.ng/about' },
    publisher: {
      '@type': 'Organization',
      name: 'King Praise Web Design',
      logo: { '@type': 'ImageObject', url: 'https://www.kingpraisewebdesign.name.ng/assets/img/logo-full.png' },
    },
  };

  return (
    <main className="pt-40 pb-24 max-w-3xl mx-auto px-5 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="flex items-center gap-4">
        <Link href="/" className="text-sm text-[var(--brand-2)] hover:underline">← Back to Home</Link>
        <span className="text-slate-600">|</span>
        <Link href="/blog" className="text-sm text-[var(--brand-2)] hover:underline">← Back to Blog</Link>
      </div>

      <article className="mt-8">
        <p className="text-[var(--brand-2)] text-sm font-semibold uppercase tracking-wide mb-3">{post.category || 'General'}</p>
        <h1 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
        <div className="flex items-center gap-3 text-slate-500 text-sm mt-5 flex-wrap">
          <Link href="/about" className="text-[var(--brand-2)] hover:underline">King Praise</Link>
          <span>&middot;</span>
          <span>{date}</span>
          {updated && (<><span>&middot;</span><span>Updated {updated}</span></>)}
          <span>&middot;</span>
          <span>{post.views || 0} views</span>
        </div>
        {post.coverImage?.url && (
          <div className="relative w-full mt-8 rounded-2xl overflow-hidden" style={{ maxHeight: 480, aspectRatio: '16/9' }}>
            <Image src={post.coverImage.url} alt={post.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
        )}
        <div className="prose-invert max-w-none mt-10 text-slate-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="flex flex-wrap gap-2 mt-10">
          {(post.tags || []).map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300">#{t}</span>
          ))}
        </div>
      </article>
    </main>
  );
}
