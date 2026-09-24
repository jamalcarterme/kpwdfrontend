'use client';

import { useFetch } from '@/hooks';
import { fallbackProjects } from '@/lib/data/fallback';
import ImageCarousel, { type CarouselSlide } from '@/components/ImageCarousel';

interface Project {
  _id: string;
  title: string;
  category: string;
  description?: string;
  isFeatured?: boolean;
  image?: { url?: string };
  liveUrl?: string;
}

/** Portfolio carousel (image + title + description) shown on the homepage. */
export default function FeaturedProjects() {
  const { data, isLoading } = useFetch<{ projects?: Project[]; data?: Project[] }>('/projects', { auth: false });
  const all = data?.projects || data?.data || [];
  const base: Project[] = all.length ? all : fallbackProjects;
  const featured = base.filter((p) => p.isFeatured);
  const list = (featured.length ? featured : base).slice(0, 10);

  if (isLoading && !list.length) return <div className="h-72 animate-pulse rounded-2xl bg-black/5" />;

  const slides: CarouselSlide[] = list.map((p) => ({
    id: p._id,
    image: p.image?.url,
    category: p.category || 'Website',
    title: p.title,
    description: p.description,
    href: '/portfolio',
    liveUrl: p.liveUrl,
  }));

  return <ImageCarousel slides={slides} />;
}
