/**
 * Root Layout
 * Wraps all pages
 * Sets up:
 * - Global metadata
 * - Google Fonts with optimization
 * - Theme provider (dark/light mode)
 * - Analytics (GA + GTM)
 * - Global styles
 * - Error boundaries
 */

import type { Metadata } from 'next';
// Vercel Analytics is optional — install `@vercel/analytics` and re-add
// `import { Analytics } from '@vercel/analytics/next';` + `<Analytics />` in the body if you deploy there.
import Script from 'next/script';
import { ORGANIZATION_SCHEMA } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Chatbot from '@/components/Chatbot';
import './globals.css';

// ===== Optimize Google Fonts =====
// Only load essential weights to reduce blocking
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import Preloader from '@/components/Preloader';

// ===== Global Metadata =====
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng'),
  title: {
    default: 'Best Web Design Agency in Nigeria | King Praise Web Design',
    template: '%s | King Praise Web Design',
  },
  description:
    'King Praise Web Design creates conversion-focused websites for businesses in Lagos & Nigeria. Free quotes for web design, e-commerce & custom development.',
  keywords: [
    'web design agency Nigeria',
    'website design Lagos',
    'custom website development',
    'web solutions Nigeria',
    'ecommerce website developer',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
    siteName: 'King Praise Web Design',
    images: [
      {
        url: '/assets/img/og-image.png',
        width: 1200,
        height: 630,
        alt: 'King Praise Web Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@king_praise_web_design',
  },
  alternates: {
    languages: {
      'en-ng': process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
      'x-default': process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kingpraisewebdesign.name.ng',
    },
  },
  other: {
    'geo.region': 'NG-LA',
    'geo.placename': 'Lagos, Nigeria',
    'geo.position': '6.5244;3.3792',
    ICBM: '6.5244, 3.3792',
  },
  manifest: '/site.webmanifest',
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'King Praise Web Design',
  },
};

/**
 * Root Layout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en" data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <noscript><style>{`#preloader{display:none!important}`}</style></noscript>

        {/* ===== Preconnect to External Services ===== */}
        <link rel="preconnect" href="https://res.cloudinary.com" />

        {/* ===== DNS Prefetch ===== */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ===== Icons (King Praise Web Design "KP" mark) ===== */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" sizes="256x256" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />

        {/* ===== Google Analytics (GA4) ===== */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-2BBFZB00KV'}`}
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID || 'G-2BBFZB00KV'}');
            `,
          }}
        />

        {/* ===== Google Tag Manager (GTM) ===== */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KGCCDXX9');
            `,
          }}
        />

        {/* ===== Organization Schema (Sitewide) ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORGANIZATION_SCHEMA),
          }}
        />
      </head>

      <body
        className="bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-200"
        suppressHydrationWarning
      >
        <Preloader />
        {/* ===== Google Tag Manager NoScript (for JS-disabled users) ===== */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KGCCDXX9"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* ===== Page Loader (initial load only) ===== */}
        <div
          id="page-loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[var(--bg-primary)]"
        >
          <div className="loader-ring">
            <img
              src="/assets/img/logo-icon.png"
              alt="Loading"
              className="w-14 h-14 rounded-full object-cover"
            />
          </div>
        </div>

        {/* ===== Main Content ===== */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <WhatsAppFloat />
        <Chatbot />

        {/* Add <Analytics /> here if you install @vercel/analytics and deploy on Vercel */}

        {/* ===== Remove Page Loader on Load ===== */}
        <Script id="hide-loader" strategy="afterInteractive">
          {`
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', () => {
                document.getElementById('page-loader')?.remove();
              });
            } else {
              document.getElementById('page-loader')?.remove();
            }
          `}
        </Script>
      </body>
    </html>
  );
}
