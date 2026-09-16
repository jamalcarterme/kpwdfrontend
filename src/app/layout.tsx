import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import CtaBar from "@/components/CtaBar";
import { site } from "@/lib/data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "NMC Technology | Solar Power Installation",
    template: "%s | NMC Technology",
  },
  description: site.description,
  keywords: [
    "solar installation",
    "solar power Nigeria",
    "inverter and battery system",
    "off-grid solar system",
    "lithium battery inverter",
    "solar panel installer",
    "NMC Technology",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  applicationName: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: site.domain,
    siteName: site.name,
    title: "NMC Technology | Premium Solar Power Systems",
    description: site.description,
    images: [{ url: "/images/hero-panels.jpg", width: 1600, height: 1200, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NMC Technology | Premium Solar Power Systems",
    description: site.description,
    images: ["/images/hero-panels.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  category: "Solar Energy Installation",
};

export const viewport: Viewport = {
  themeColor: "#0a0f14",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.domain}/#business`,
  name: site.name,
  alternateName: "NMC Solar",
  description: site.description,
  image: `${site.domain}/images/hero-panels.jpg`,
  logo: `${site.domain}/images/logo.png`,
  url: site.domain,
  telephone: site.phones.map((p) => `+${p.href}`).join(", "),
  email: site.email,
  priceRange: "₦₦₦",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 4A, Block XIV, Opposite Unipetrol Estate",
    addressLocality: "Satellite Town",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
  sameAs: [site.tiktok],
  makesOffer: [
    "Home solar power systems",
    "Off-grid solar installation",
    "Commercial solar installation",
    "Inverter and lithium battery systems",
    "Automatic transfer switch panels",
    "Solar system maintenance and repair",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link
          rel="preload"
          as="video"
          href="/background-video.mp4"
          type="video/mp4"
        />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <CtaBar />
      </body>
    </html>
  );
}
