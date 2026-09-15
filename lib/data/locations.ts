export interface LocationFAQ {
  question: string;
  answer: string;
}

export interface LocationGeo {
  region: string; // meta geo.region e.g. NG-LA
  placename: string; // meta geo.placename
  position: string; // meta geo.position "lat;lng"
  icbm: string; // meta ICBM "lat, lng"
}

export interface LocationBusiness {
  addressLocality: string;
  addressRegion: string;
  addressCountry: string;
  areaServedName: string;
  latitude?: number;
  longitude?: number;
}

export interface LocationPage {
  slug: string;
  cityName: string;
  region: string;
  h1: string;
  badge: string;
  intro: string;
  body: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  geo?: LocationGeo;
  business: LocationBusiness;
  faqs?: LocationFAQ[];
}

// Slugs match the destinations already wired into next.config.js redirects.
// Content restored 1:1 from the original static HTML pages.
export const locations: LocationPage[] = [
  {
    slug: 'lagos',
    cityName: 'Lagos',
    region: 'Lagos State, Nigeria',
    badge: 'Lagos, Lagos State',
    h1: 'Web Design Company in Lagos, Nigeria',
    intro:
      'Custom, fast-loading websites for Lagos businesses, from Victoria Island law firms to Lekki real estate agencies, built to convert local traffic into customers.',
    body: [
      "Lagos is Nigeria's most competitive digital market, and a slow or generic website gets buried fast. We build custom, SEO-friendly websites for Lagos businesses across Victoria Island, Lekki, Ikeja and the Mainland, engineered to load fast and rank for local search.",
    ],
    metaTitle: 'Web Design Company in Lagos | King Praise Web Design',
    metaDescription:
      'Website design and development company in Lagos, Nigeria, custom sites for law firms, real estate, restaurants and small businesses. Fast, SEO-friendly, affordable.',
    keywords: [
      'web design company lagos',
      'website designer in lagos',
      'website developers in lagos',
      'web design agency lagos nigeria',
    ],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
    business: {
      addressLocality: 'Lagos',
      addressRegion: 'Lagos State',
      addressCountry: 'NG',
      areaServedName: 'Lagos',
      latitude: 6.5244,
      longitude: 3.3792,
    },
    faqs: [
      {
        question: 'How much does a website cost from a web design company in Lagos?',
        answer:
          'Pricing starts at \u20a650K for small business sites and scales to \u20a6500K+ for e-commerce stores. Most professional websites fall in the \u20a6100K\u2013\u20a6250K range.',
      },
      {
        question: 'How long does it take to build a website?',
        answer: '2\u20134 weeks depending on complexity. We work fast without cutting corners on quality.',
      },
      {
        question: 'Do you build e-commerce websites with online payment in Lagos?',
        answer: 'Yes. We integrate Flutterwave, Paystack and other Nigerian payment gateways.',
      },
      {
        question: 'Will my website rank on Google?',
        answer: 'Every site we build includes on-page SEO fundamentals. We optimize for keyword rankings from day one.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'You get 30 days of free bug fixes and ongoing support. We offer monthly SEO optimization as an add-on.',
      },
    ],
  },
  {
    slug: 'abuja',
    cityName: 'Abuja',
    region: 'Federal Capital Territory, Nigeria',
    badge: 'Abuja, FCT',
    h1: 'Web Design Company in Abuja, Nigeria',
    intro:
      'Professional, credible websites for Abuja businesses, consultancies and organizations, built to reflect the trust your brand needs in the capital.',
    body: [
      'Abuja businesses, from consultancies to law firms and NGOs, need websites that project credibility as much as speed. We design and build custom sites for Abuja-based organizations, optimized for local search and mobile use across the FCT.',
    ],
    metaTitle: 'Web Design Company in Abuja | King Praise Web Design',
    metaDescription:
      'Website design and development for businesses in Abuja, Nigeria, corporate, government-adjacent and small business websites built for credibility and speed.',
    keywords: [
      'web design company abuja',
      'website developer in abuja',
      'website design fct nigeria',
      'abuja web design agency',
    ],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
    business: {
      addressLocality: 'Abuja',
      addressRegion: 'FCT',
      addressCountry: 'NG',
      areaServedName: 'Abuja',
    },
  },
  {
    slug: 'benin-city',
    cityName: 'Benin City',
    region: 'Edo State, Nigeria',
    badge: 'Benin City, Edo State',
    h1: 'Web Design Company in Benin City, Edo State',
    intro:
      "Affordable, professional websites for Benin City businesses and entrepreneurs, built remotely, delivered fast, no compromise on quality.",
    body: [
      "Benin City's growing small business scene needs websites that compete beyond the local market. We build affordable, SEO-friendly websites for Edo State businesses, entrepreneurs and startups, delivered remotely with the same quality as our Lagos and Abuja projects.",
    ],
    metaTitle: 'Web Design Company in Benin City | King Praise Web Design',
    metaDescription:
      'Website design and development for businesses in Benin City, Edo State, affordable, SEO-friendly websites for small businesses and entrepreneurs.',
    keywords: [
      'web design company benin city',
      'website designer benin city edo state',
      'website developer benin city nigeria',
    ],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
    business: {
      addressLocality: 'Benin City',
      addressRegion: 'Edo State',
      addressCountry: 'NG',
      areaServedName: 'Benin City',
    },
  },
  {
    slug: 'ibadan',
    cityName: 'Ibadan',
    region: 'Oyo State, Nigeria',
    badge: 'Ibadan, Oyo State',
    h1: 'Web Design Company in Ibadan, Oyo State',
    intro:
      'Affordable, custom websites for Ibadan businesses, schools and startups, designed to help you stand out and get found online.',
    body: [
      "Ibadan's business and education sectors are growing fast, and a strong website is often the first impression a customer or student gets. We build affordable, SEO-friendly websites for Oyo State businesses, schools and startups, with the same craftsmanship as our Lagos projects.",
    ],
    metaTitle: 'Web Design Company in Ibadan | King Praise Web Design',
    metaDescription:
      'Website design and development for businesses in Ibadan, Oyo State, affordable, SEO-friendly websites for small businesses, schools and startups.',
    keywords: [
      'web design company ibadan',
      'website designer ibadan oyo state',
      'website developer ibadan nigeria',
    ],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
    business: {
      addressLocality: 'Ibadan',
      addressRegion: 'Oyo State',
      addressCountry: 'NG',
      areaServedName: 'Ibadan',
    },
  },
  {
    slug: 'port-harcourt',
    cityName: 'Port Harcourt',
    region: 'Rivers State, Nigeria',
    badge: 'Port Harcourt, Rivers State',
    h1: 'Web Design Company in Port Harcourt, Rivers State',
    intro:
      'Custom websites for Port Harcourt businesses, vendors and agencies, built to load fast and generate leads in a competitive local market.',
    body: [
      'From oil & gas service vendors to real estate agencies, Port Harcourt businesses need websites that build trust quickly. We design and build custom, fast-loading sites for Rivers State businesses, optimized for local search visibility.',
    ],
    metaTitle: 'Web Design Company in Port Harcourt | King Praise Web Design',
    metaDescription:
      'Website design and development for businesses in Port Harcourt, Rivers State, custom sites for oil & gas vendors, real estate and small businesses.',
    keywords: [
      'web design company port harcourt',
      'website designer port harcourt rivers state',
      'website developer port harcourt nigeria',
    ],
    geo: { region: 'NG-LA', placename: 'Lagos, Nigeria', position: '6.5244;3.3792', icbm: '6.5244, 3.3792' },
    business: {
      addressLocality: 'Port Harcourt',
      addressRegion: 'Rivers State',
      addressCountry: 'NG',
      areaServedName: 'Port Harcourt',
    },
  },
  {
    slug: 'nigeria',
    cityName: 'Nigeria',
    region: 'Nationwide',
    badge: 'Nigeria',
    h1: 'Web Design Company Nigeria | Premium Sites Built Fast',
    intro:
      'King Praise Web Design is a remote-first web design company serving all of Nigeria. We create conversion-focused websites for businesses across Lagos, Abuja, Port Harcourt, and beyond.',
    body: [
      'We create conversion-focused websites engineered to turn visitors into paying customers. Our process is transparent with dedicated support throughout. On average, our clients see a 200\u2013300% increase in qualified inquiries in the first quarter after launch.',
      'King Praise Web Design transformed our online presence. Within 3 months, inquiries increased by 340%. The investment paid for itself in 2 weeks.',
    ],
    metaTitle: 'Web Design Company Nigeria | Premium Sites Built Fast',
    metaDescription:
      'Web design company in Nigeria serving Lagos, Abuja, Port Harcourt. Custom websites for small businesses, law firms, e-commerce and startups.',
    keywords: [],
    business: {
      addressLocality: 'Lagos',
      addressRegion: 'Lagos',
      addressCountry: 'NG',
      areaServedName: 'Nigeria',
      latitude: 6.5244,
      longitude: 3.3792,
    },
  },
  {
    slug: 'victoria-island',
    cityName: 'Victoria Island',
    region: 'Lagos, Nigeria',
    badge: 'Victoria Island',
    h1: 'Website Designer Victoria Island Lagos | Local Professional',
    intro:
      'Looking for a website designer in Victoria Island? King Praise is based in Lagos with deep knowledge of VI businesses. We build conversion-focused websites for local professionals.',
    body: [
      'We create conversion-focused websites engineered to turn visitors into paying customers. Our process is transparent with dedicated support throughout. On average, our clients see a 200\u2013300% increase in qualified inquiries in the first quarter after launch.',
      'King Praise Web Design transformed our online presence. Within 3 months, inquiries increased by 340%. The investment paid for itself in 2 weeks.',
    ],
    metaTitle: 'Website Designer Victoria Island Lagos | Local Professional',
    metaDescription:
      'Website designer in Victoria Island Lagos. Local professional for law firms, real estate agencies, and businesses in Victoria Island and Lekki.',
    keywords: [],
    business: {
      addressLocality: 'Lagos',
      addressRegion: 'Lagos',
      addressCountry: 'NG',
      areaServedName: 'Victoria Island',
      latitude: 6.5244,
      longitude: 3.3792,
    },
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}
