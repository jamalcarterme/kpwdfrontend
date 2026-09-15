import type { MetadataRoute } from 'next';
import { locations } from '@/lib/data/locations';
import { services } from '@/lib/data/services';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng';
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:5000/api';

async function getBlogSlugs(): Promise<{ slug: string; updatedAt?: string }[]> {
  try {
    const res = await fetch(`${API_BASE}/blog?status=published&limit=200`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const data = await res.json();
    const posts = data.posts || data.data || [];
    return posts.map((p: any) => ({ slug: p.slug, updatedAt: p.updatedAt || p.createdAt }));
  } catch {
    // Backend unreachable at build time — sitemap still ships with every static route.
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/services`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/portfolio`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, changeFrequency: 'daily', priority: 0.7 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${SITE_URL}/locations/${l.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const blogSlugs = await getBlogSlugs();
  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : undefined,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticRoutes, ...locationRoutes, ...serviceRoutes, ...blogRoutes];
}
