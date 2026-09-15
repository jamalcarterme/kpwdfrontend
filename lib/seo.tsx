/**
 * SEO Metadata Generator
 * Centralized metadata for all pages
 * Used with Next.js generateMetadata() function
 */

import { Metadata, ResolvingMetadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng';
const SITE_NAME = 'King Praise Web Design';
const BRAND_EMAIL = 'kingpraisewebdesign@gmail.com';
const BRAND_PHONE = '+2349030232048';
const OG_IMAGE = `${SITE_URL}/assets/img/og-image.png`;

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: 'website' | 'article' | 'business.business';
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: Record<string, unknown>;
  articlePublished?: string;
  articleModified?: string;
  articleAuthor?: string;
  geo?: {
    region: string;
    placename: string;
    position: string;
    icbm: string;
  };
}

/**
 * Generate Next.js Metadata object
 */
export function generateMetadata(seo: SEOMetadata): Metadata {
  const {
    title,
    description,
    keywords = [],
    ogImage = OG_IMAGE,
    canonical = SITE_URL,
    noindex = false,
    ogType = 'website',
    geo,
  } = seo;

  const robots = [];
  if (noindex) robots.push('noindex');
  if (!noindex) robots.push('index');
  robots.push('follow', 'max-image-preview:large', 'max-snippet:-1', 'max-video-preview:-1');

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    robots: robots.join(', '),
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: ogType as any,
      locale: 'en_NG',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical,
      languages: {
        'en-ng': canonical,
        'x-default': canonical,
      },
    },
    other: geo
      ? {
          'geo.region': geo.region,
          'geo.placename': geo.placename,
          'geo.position': geo.position,
          ICBM: geo.icbm,
        }
      : {},
  };
}

/**
 * Predefined page metadata
 */
export const PAGE_META: Record<string, SEOMetadata> = {
  home: {
    title: 'Best Web Design Agency in Nigeria | King Praise Web Design',
    description:
      'King Praise Web Design creates conversion-focused websites for businesses in Lagos & Nigeria. Free quotes for web design, e-commerce & custom development.',
    keywords: [
      'web design agency Nigeria',
      'website design Lagos',
      'custom website development',
      'web solutions Nigeria',
      'ecommerce website developer',
      'web design company Lagos',
    ],
    ogType: 'website',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: BRAND_PHONE,
      email: BRAND_EMAIL,
      areaServed: 'Worldwide',
      priceRange: '$$',
      image: `${SITE_URL}/assets/img/logo-full.png`,
      description:
        'Affordable custom website design for small businesses, law firms, real estate agencies and churches.',
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design for Small Businesses' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'E-Commerce Website Development' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile App Development' } },
      ],
    },
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  about: {
    title: 'About King Praise Web Design | Our Story & Team',
    description:
      'Learn about King Praise Web Design — a remote-first web agency building affordable, high-performance websites for businesses across Nigeria and globally.',
    keywords: ['about king praise', 'web design team', 'web agency story', 'custom website design'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
    },
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  services: {
    title: 'Web Design & Development Services | King Praise',
    description:
      'Professional website design, e-commerce development, mobile apps and custom software for small businesses, law firms, real estate agencies and restaurants across Nigeria.',
    keywords: [
      'web design services',
      'website development',
      'custom website',
      'ecommerce website',
      'web solutions',
    ],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
    },
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  blog: {
    title: 'Web Design Blog – Latest Tips, Guides & Case Studies',
    description:
      'Read our latest articles on web design, SEO, e-commerce, and digital marketing tips for small businesses.',
    keywords: ['web design blog', 'web design tips', 'digital marketing', 'seo guide'],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  contact: {
    title: 'Contact King Praise Web Design | Get a Free Quote',
    description:
      'Book a free consultation or get a quote for your website project. Contact our web design team in Lagos, Nigeria.',
    keywords: ['contact', 'get a quote', 'book a call', 'web design consultation'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
    },
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  portfolio: {
    title: 'Web Design Portfolio | Client Projects & Results',
    description:
      'View our latest web design and development projects. See how we help businesses succeed online.',
    keywords: ['portfolio', 'case studies', 'web design examples', 'client projects'],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  pricing: {
    title: 'Web Design Pricing & Packages',
    description:
      'Transparent, affordable web design pricing for small businesses, law firms, and e-commerce stores.',
    keywords: ['web design pricing', 'website cost', 'pricing packages', 'affordable web design'],
    schema: {
      '@context': 'https://schema.org',
      '@type': 'PricingPage',
    },
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
  },

  adminDashboard: {
    title: 'Admin Dashboard | King Praise Web Design',
    description: 'Admin portal for managing website content, projects, and client interactions.',
    noindex: true,
  },

  clientDashboard: {
    title: 'Client Dashboard | Your Project Status',
    description: 'Track your website project status and communicate with the King Praise team.',
    noindex: true,
  },
};

/**
 * Location page metadata (dynamic)
 */
export function getLocationMeta(
  location: import('./data/locations').LocationPage
): SEOMetadata {
  const canonical = `${SITE_URL}/locations/${location.slug}`;
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    telephone: BRAND_PHONE,
    email: BRAND_EMAIL,
    url: canonical,
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.business.addressLocality,
      addressRegion: location.business.addressRegion,
      addressCountry: location.business.addressCountry,
    },
    areaServed: { '@type': 'City', name: location.business.areaServedName },
  };
  if (location.business.latitude && location.business.longitude) {
    schema.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.business.latitude,
      longitude: location.business.longitude,
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: location.keywords,
    canonical,
    geo: location.geo,
    schema,
  };
}

/**
 * Service page metadata (dynamic)
 */
export function getServiceMeta(
  service: import('./data/services').ServicePage
): SEOMetadata {
  const canonical = `${SITE_URL}/services/${service.slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    canonical,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.serviceName,
      provider: {
        '@type': 'Organization',
        name: SITE_NAME,
      },
    },
  };
}

/**
 * Blog post metadata (dynamic)
 */
export function getBlogPostMeta(
  post: {
    title: string;
    excerpt: string;
    slug: string;
    coverImage?: string;
    createdAt: string;
    updatedAt: string;
    author?: { name: string } | string;
  }
): SEOMetadata {
  const authorName = typeof post.author === 'string' ? post.author : post.author?.name || 'King Praise Web Design';

  return {
    title: `${post.title} | Web Design Blog`,
    description: post.excerpt,
    ogType: 'article',
    ogImage: post.coverImage || OG_IMAGE,
    canonical: `${SITE_URL}/blog/${post.slug}`,
    articlePublished: post.createdAt,
    articleModified: post.updatedAt,
    articleAuthor: authorName,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage || OG_IMAGE,
      author: {
        '@type': 'Person',
        name: authorName,
      },
      datePublished: post.createdAt,
      dateModified: post.updatedAt,
    },
  };
}

/**
 * Breadcrumb schema helper
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Organization schema (sitewide)
 */
export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/assets/img/logo-full.png`,
  email: BRAND_EMAIL,
  telephone: BRAND_PHONE,
  areaServed: 'Worldwide',
  sameAs: [
    'https://maps.app.goo.gl/rBd7D72nhfCLi8bRA',
    'https://www.tiktok.com/@king_praise_web_design',
    'https://www.goodfirms.co/company/king-praise-web-design',
  ],
};

/**
 * FAQ schema helper
 */
export function getFAQSchema(
  questions: Array<{
    question: string;
    answer: string;
  }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
}

/**
 * Inject script tag for structured data
 */
export function injectSchema(schema: Record<string, unknown>): React.ReactNode {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default {
  generateMetadata,
  PAGE_META,
  getLocationMeta,
  getServiceMeta,
  getBlogPostMeta,
  getBreadcrumbSchema,
  ORGANIZATION_SCHEMA,
  getFAQSchema,
  injectSchema,
};
