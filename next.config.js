/** @type {import('next').NextConfig} */

const nextConfig = {
  // ===== Optimizations =====
  compress: true,
  poweredByHeader: false,
  
  // ===== Images =====
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year (cache busting via filename)
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },

  // ===== Security Headers =====
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      // Cache static assets (images, fonts)
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Short cache for HTML (for revalidation)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'content-type',
            value: 'text/html',
          },
        ],
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },

  // ===== 301 Redirects (Old HTML URLs → New Routes) =====
  redirects: async () => {
    return [
      // Main pages
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/services.html', destination: '/services', permanent: true },
      { source: '/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/pricing.html', destination: '/pricing', permanent: true },
      { source: '/blog.html', destination: '/blog', permanent: true },
      { source: '/blog-post.html', destination: '/blog', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },

      // Admin & Client areas
      { source: '/admin/dashboard.html', destination: '/admin/dashboard', permanent: true },
      { source: '/admin/login.html', destination: '/admin/login', permanent: true },
      { source: '/client/dashboard.html', destination: '/client/dashboard', permanent: true },
      { source: '/client/login.html', destination: '/client/login', permanent: true },
      { source: '/client/register.html', destination: '/client/register', permanent: true },

      // Location pages → /locations/[slug]
      { source: '/web-design-lagos.html', destination: '/locations/lagos', permanent: true },
      { source: '/web-design-abuja.html', destination: '/locations/abuja', permanent: true },
      { source: '/web-design-benin-city.html', destination: '/locations/benin-city', permanent: true },
      { source: '/web-design-ibadan.html', destination: '/locations/ibadan', permanent: true },
      { source: '/web-design-port-harcourt.html', destination: '/locations/port-harcourt', permanent: true },
      { source: '/web-design-agency-lagos.html', destination: '/locations/lagos', permanent: true },
      { source: '/web-design-company-lagos.html', destination: '/locations/lagos', permanent: true },
      { source: '/web-design-company-nigeria.html', destination: '/locations/nigeria', permanent: true },
      { source: '/website-design-company-nigeria.html', destination: '/locations/nigeria', permanent: true },
      { source: '/website-designer-lagos.html', destination: '/locations/lagos', permanent: true },
      { source: '/website-designer-victoria-island.html', destination: '/locations/victoria-island', permanent: true },

      // Service pages → /services/[service]
      { source: '/ecommerce-web-design-abuja.html', destination: '/services/ecommerce', permanent: true },
      { source: '/ecommerce-developer-nigeria.html', destination: '/services/ecommerce', permanent: true },
      { source: '/restaurant-website-design.html', destination: '/services/restaurant', permanent: true },
      { source: '/real-estate-website-design.html', destination: '/services/real-estate', permanent: true },
      { source: '/med-spa-web-design.html', destination: '/services/med-spa', permanent: true },
      { source: '/web-design-for-law-firms.html', destination: '/services/law-firms', permanent: true },
      { source: '/landing-page-design.html', destination: '/services/landing-page', permanent: true },
      { source: '/corporate-website-designer-lagos.html', destination: '/services/corporate', permanent: true },
      { source: '/website-design-logistics.html', destination: '/services/logistics', permanent: true },
      { source: '/seo-services-for-small-business.html', destination: '/services/seo', permanent: true },
    ];
  },

  // ===== Rewrites (Internal, no 301) =====
  rewrites: async () => {
    return {
      beforeFiles: [
        // Route admin & client dashboards to API if needed
        // (optional — usually not needed for Next.js CSR pages)
      ],
      afterFiles: [
        // Fallback to 404 page
      ],
    };
  },

  // ===== Environment Variables =====
  env: {
    // No hardcoded fallback here — leave unset in this env block so
    // lib/api.ts's own localhost-vs-production fallback (mirroring the
    // original site's assets/js/config.js) takes effect instead of
    // silently pinning every deploy to localhost:5000.
    NEXT_PUBLIC_API_BASE: process.env.NEXT_PUBLIC_API_BASE,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-2BBFZB00KV',
    // Google Search Console ownership verification (Audit item #9). Set this to the
    // content value from Search Console > Settings > Ownership verification > HTML tag.
    NEXT_PUBLIC_GSC_VERIFICATION: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
  },

  // ===== TypeScript =====
  typescript: {
    tsconfigPath: './tsconfig.json',
  },

  // ===== Experimental (for performance) =====
  experimental: {
    // Not critical for this migration, but useful for future
  },
};

module.exports = nextConfig;
