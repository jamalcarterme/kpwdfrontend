export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServicePage {
  slug: string;
  serviceName: string;
  h1: string;
  intro: string;
  features: string[];
  body: string[];
  faqs?: ServiceFAQ[];
  metaTitle: string;
  metaDescription: string;
}

// Slugs match the destinations already wired into next.config.js redirects.
// Content restored 1:1 from the original static HTML pages.
export const services: ServicePage[] = [
  {
    slug: 'ecommerce',
    serviceName: 'E-Commerce Development',
    h1: 'E-Commerce Website Developer | Online Stores Built Fast',
    metaTitle: 'E-Commerce Website Developer Nigeria | Online Stores Built Fast',
    metaDescription:
      'E-commerce website developer in Nigeria. We build online stores with Flutterwave & Paystack integration for restaurants, fashion, retail and food businesses.',
    intro:
      'King Praise builds e-commerce websites for Nigerian businesses. We integrate Flutterwave, Paystack, and other payment gateways to help restaurants, fashion brands, and retail businesses sell online.',
    features: [
      'Product catalog with categories, search and filters',
      'Paystack & Flutterwave checkout for Naira payments',
      'Order & inventory management dashboard',
      'Delivery/pickup options for Abuja & nationwide shipping',
      'Mobile-first design for on-the-go shoppers',
      'Local SEO to rank for local shopping searches',
    ],
    body: [
      "An ecommerce website lets businesses sell products online with a shopping cart, secure Naira checkout, and order tracking, without depending only on social media DMs. We build custom stores (not generic templates) for retailers, boutiques and wholesalers.",
      'Fashion and beauty retailers, electronics and gadget sellers, food and grocery vendors, and wholesalers who currently sell via Instagram or WhatsApp and are ready for a dedicated online store that can process payments and track orders automatically.',
      'King Praise Web Design transformed our online presence. Within 3 months, inquiries increased by 340%. The investment paid for itself in 2 weeks.',
    ],
    faqs: [
      {
        question: 'How much does an ecommerce website cost in Abuja?',
        answer:
          'Pricing depends on catalog size and payment/shipping complexity, see our pricing page for starting packages, then we scope a fixed quote on a free call.',
      },
      {
        question: 'Can you integrate Paystack or Flutterwave for local payments?',
        answer:
          'Yes, every store we build in Abuja supports Naira payments via Paystack and/or Flutterwave, plus card and bank transfer options.',
      },
      {
        question: 'Do I get an admin dashboard to manage products and orders?',
        answer:
          'Yes, you get a simple dashboard to add products, track inventory, and manage incoming orders without needing a developer.',
      },
      {
        question: 'Will my online store work well on mobile?',
        answer: 'Every store is mobile-first, since most online shopping in Abuja happens on phones.',
      },
    ],
  },
  {
    slug: 'restaurant',
    serviceName: 'Restaurant Website Design',
    h1: 'Restaurant Websites That Take Orders, Not Just Show Menus',
    metaTitle: 'Restaurant Website Design in Nigeria | Online Ordering & Menus',
    metaDescription:
      'Restaurant website design for Nigerian food businesses, online menus, ordering and reservations, with Flutterwave payment integration and SEO.',
    intro:
      'A mouth-watering online menu, ordering system and reservation flow built to turn hungry visitors into paying customers.',
    features: [
      'Digital menu with categories & photos',
      'Online ordering with Flutterwave payment',
      'Table reservation form',
      'Delivery/pickup options',
      'Mobile-first ordering flow',
      'Local SEO for food searches',
    ],
    body: [
      'Customers bounce when they have to download a PDF just to see prices and dishes. Without a website ordering flow, restaurants lose delivery and pickup sales to third-party apps that take a cut of every order. Without SEO, restaurants are invisible to hungry customers searching for food nearby.',
      "A fast, photo-rich menu that's easy to browse and always up to date, direct online ordering with Flutterwave payment integration so you keep more of every sale, and content structured for searches like restaurants and food delivery near your location.",
    ],
    faqs: [
      {
        question: 'Can customers pay online through the website?',
        answer: 'Yes, we integrate Flutterwave so customers can pay for orders directly on your site.',
      },
      {
        question: 'Can I update the menu myself?',
        answer: 'Yes, we can set up an easy way for you to update menu items and prices without touching code.',
      },
      {
        question: 'Do you build reservation forms too?',
        answer:
          "Yes, we can add a table reservation form alongside online ordering, depending on what your restaurant needs.",
      },
    ],
  },
  {
    slug: 'real-estate',
    serviceName: 'Real Estate Website Design',
    h1: 'Real Estate Websites Built to Sell Listings, Not Just Show Them',
    metaTitle: 'Real Estate Website Design in Nigeria | Property Listings & Lead Gen',
    metaDescription:
      'Real estate website design for agencies and agents in Nigeria, searchable property listings, lead capture forms and SEO to fill your pipeline.',
    intro:
      'Searchable property listings, agent profiles and lead capture forms designed to turn site visitors into scheduled viewings.',
    features: [
      'Searchable & filterable property listings',
      'Property detail pages with photo galleries',
      'Listing inquiry forms',
      'Agent profile pages',
      'Map-friendly location data',
      'Mobile-first, fast-loading design',
    ],
    body: [
      'Static PDF flyers or unsearchable pages frustrate buyers, who leave for a site with proper filters and photos. Without inquiry forms tied to specific listings, agents lose track of who\u2019s interested in which property. Agencies without SEO miss out on buyers actively searching \u201cproperty for sale in Lagos\u201d and similar terms.',
      'Filterable property grids with photos, price and location so buyers find what they want fast, inquiry forms tied to each property so agents know exactly which listing generated the lead, and pages structured around neighborhoods and property types to capture local search traffic.',
    ],
    faqs: [
      {
        question: 'Can you build a property listing website with search filters?',
        answer:
          'Yes, we build searchable, filterable listing pages so buyers can browse by price, location and property type.',
      },
      {
        question: 'Do you integrate a CRM or lead notifications?',
        answer:
          'We set up inquiry forms that notify you instantly by email, and can integrate with a CRM depending on your workflow.',
      },
      {
        question: 'Will the site work well on mobile for buyers on the go?',
        answer: 'Every site we build is mobile-first, since most property searches happen on phones.',
      },
    ],
  },
  {
    slug: 'med-spa',
    serviceName: 'Med Spa & Wellness Website Design',
    h1: 'Med Spa Websites That Look as Premium as Your Treatments',
    metaTitle: 'Med Spa & Wellness Website Design in Nigeria | King Praise Web Design',
    metaDescription:
      'Med spa and wellness clinic website design in Nigeria, service menus, online booking and a premium look built to attract high-value clients.',
    intro:
      'A polished, calming website with service menus and online booking, built to attract clients willing to pay for quality.',
    features: [
      'Service & treatment menu pages',
      'Online appointment booking',
      'Before/after gallery support',
      'Staff / practitioner profiles',
      'Mobile-first, elegant design',
      'Treatment-specific local SEO',
    ],
    body: [
      'A generic template makes a premium spa look like a budget business, which hurts pricing power. Without online booking, potential clients have to call during business hours or give up entirely. Without SEO around specific treatments, spas miss clients searching for exact services they offer.',
      'Visual design that reflects the quality of your treatments and puts high-value clients at ease before they even visit, a booking flow that lets clients reserve a treatment slot anytime without a phone call, and pages built around individual treatments so you rank for the specific services people search for.',
    ],
    faqs: [
      {
        question: 'Can clients book appointments directly on the website?',
        answer: 'Yes, we set up an online booking flow so clients can reserve appointments without calling.',
      },
      {
        question: 'Can you showcase before-and-after results?',
        answer: 'Yes, we can build a gallery section for before-and-after photos where relevant.',
      },
      {
        question: 'Will the design feel premium enough for a high-end spa?',
        answer: 'Yes, we design around a calm, premium aesthetic that matches the quality of your treatments.',
      },
    ],
  },
  {
    slug: 'law-firms',
    serviceName: 'Web Design for Law Firms',
    h1: 'Website Design for Law Firms That Wins Client Trust',
    metaTitle: 'Website Design for Law Firms in Lagos & Nigeria | King Praise Web Design',
    metaDescription:
      'Custom website design for law firms in Nigeria, client intake forms, practice area pages and SEO built to earn trust and generate consultation requests.',
    intro:
      'A polished, credible website built to turn website visitors into consultation requests, with practice area pages, attorney profiles and secure client intake.',
    features: [
      'Practice area landing pages',
      'Attorney profile pages',
      'Secure client intake forms',
      'Case results / testimonials section',
      'Mobile-first, fast-loading pages',
      'Local SEO & Google Business alignment',
    ],
    body: [
      'Outdated templates and stock photography make even experienced law firms look unproven, so prospects click away to a competitor\u2019s site. Many firm sites bury contact details or lack an intake form, so serious leads give up and call someone else instead. Without SEO built around terms like \u201clawyer near me\u201d or practice-specific keywords, firms lose potential clients to competitors who rank first.',
      'Clean, professional layouts with attorney bios, credentials and case results front and center to build instant credibility, secure contact and case-inquiry forms that route straight to your inbox, and on-page SEO structured around your practice areas and location.',
    ],
    faqs: [
      {
        question: 'How much does a law firm website cost in Nigeria?',
        answer:
          'Pricing depends on the number of practice area pages and features you need. See our pricing page or book a free call for a custom quote.',
      },
      {
        question: 'Can you add an intake form for new case inquiries?',
        answer:
          'Yes, every law firm site we build includes a secure client intake form that routes inquiries straight to your email.',
      },
      {
        question: 'Will my law firm website rank on Google?',
        answer:
          'We build every site with on-page SEO fundamentals, clean code, fast load times and location-optimized content, so you have a strong foundation to rank.',
      },
    ],
  },
  {
    slug: 'landing-page',
    serviceName: 'Landing Page Design',
    h1: 'Landing Pages Built to Convert Clicks Into Customers',
    metaTitle: 'Landing Page Design in Nigeria | High-Converting Pages | KPWD',
    metaDescription:
      'Custom landing page design in Nigeria for ads, launches and campaigns, fast-loading, conversion-focused pages built to turn clicks into leads.',
    intro:
      'Fast, focused, single-purpose pages designed for ad campaigns, product launches and lead generation, built to convert, not just look good.',
    features: [
      'Single-goal, distraction-free layout',
      'Fast-loading, mobile-first build',
      'Lead capture / signup forms',
      'Social proof & testimonial sections',
      'A/B-friendly structure',
      'Analytics & conversion tracking setup',
    ],
    body: [
      'Sending ad traffic to a homepage full of distractions kills conversion rates and wastes ad spend. Every extra second of load time costs conversions, especially on mobile ad traffic. Pages with too many competing links confuse visitors instead of guiding them to convert.',
      "One clear goal per page, whether that's a signup, purchase or inquiry, with distractions stripped away; lightweight, fast-loading code so ad traffic doesn't bounce before the page even renders; and clear headlines, social proof and a single strong call to action guiding visitors to convert.",
    ],
    faqs: [
      {
        question: 'How fast can you deliver a landing page?',
        answer:
          'Most single landing pages can be designed and launched in days rather than weeks, depending on content readiness.',
      },
      {
        question: 'Can you connect the landing page to my ad campaigns?',
        answer: 'Yes, we build pages with tracking and conversion events set up to work with your ad platform of choice.',
      },
      {
        question: 'Do you write the copy too, or do I need to provide it?',
        answer:
          "We can work from your copy or help shape messaging, either way, we design around what converts best.",
      },
    ],
  },
  {
    slug: 'corporate',
    serviceName: 'Corporate Website Design',
    h1: 'Corporate Website Designer Lagos | Professional Enterprise Sites',
    metaTitle: 'Corporate Website Designer Lagos | Professional Enterprise Sites',
    metaDescription:
      'Corporate website designer in Lagos for large businesses, law firms, consulting companies. Professional enterprise web design with advanced features.',
    intro:
      'King Praise Web Design creates enterprise-grade websites for corporations, law firms, and consulting companies. We build scalable, secure sites with advanced features and dedicated support.',
    features: [
      'Enterprise-grade, scalable builds',
      'Advanced features for larger organizations',
      'Dedicated support throughout',
      'Secure, reliable hosting and deployment',
    ],
    body: [
      'We create conversion-focused websites engineered to turn visitors into paying customers. Our process is transparent with dedicated support throughout. On average, our clients see a 200\u2013300% increase in qualified inquiries in the first quarter after launch.',
      'King Praise Web Design transformed our online presence. Within 3 months, inquiries increased by 340%. The investment paid for itself in 2 weeks.',
    ],
  },
  {
    slug: 'logistics',
    serviceName: 'Logistics & Supply Chain Website Design',
    h1: 'Website Design for Logistics Companies | B2B Web Solutions',
    metaTitle: 'Website Design for Logistics Companies | B2B Web Solutions',
    metaDescription:
      'Website design for logistics companies, shipping firms, and supply chain businesses in Nigeria. Custom B2B sites with shipment tracking and quote forms.',
    intro:
      'King Praise specializes in website design for logistics companies. We build B2B platforms with shipment tracking, quote management, and lead generation features.',
    features: [
      'Shipment tracking features',
      'Quote request and management forms',
      'B2B lead generation focus',
    ],
    body: [
      'We create conversion-focused websites engineered to turn visitors into paying customers. Our process is transparent with dedicated support throughout. On average, our clients see a 200\u2013300% increase in qualified inquiries in the first quarter after launch.',
      'King Praise Web Design transformed our online presence. Within 3 months, inquiries increased by 340%. The investment paid for itself in 2 weeks.',
    ],
  },
  {
    slug: 'seo',
    serviceName: 'SEO Services for Small Business',
    h1: 'SEO Services Built to Get Your Small Business Found',
    metaTitle: 'SEO Services for Small Business in Nigeria | King Praise Web Design',
    metaDescription:
      'SEO-friendly website design and optimization for small businesses in Nigeria, on-page SEO, technical fixes and local search visibility that drives leads.',
    intro:
      'On-page SEO, technical fixes and local search optimization so customers find you on Google before they find your competitors.',
    features: [
      'Keyword & on-page optimization',
      'Technical SEO & Core Web Vitals tuning',
      'Local Business schema markup',
      'Google Business Profile alignment',
      'Analytics & reporting setup',
      'Ongoing SEO-friendly content structure',
    ],
    body: [
      'Without SEO fundamentals, even a great website stays invisible to the customers searching for what you offer. Poor code and slow load times push potential customers away and hurt your search rankings. Without local SEO, nearby customers searching for your services find competitors first.',
      "Keyword-optimized titles, headings and content structured around what your customers actually search for, clean code and fast-loading pages that satisfy both users and Google's ranking signals, and structured data with location-optimized content to help you show up for nearby searches.",
    ],
    faqs: [
      {
        question: 'How long does SEO take to show results?',
        answer:
          'SEO is a gradual process; most small businesses start seeing measurable movement within a few months of consistent optimization.',
      },
      {
        question: 'Do you offer SEO as a standalone service or only with website design?',
        answer:
          'We offer SEO both bundled with a new website build and as a standalone optimization service for existing sites.',
      },
      {
        question: 'Can you help my business rank for local searches?',
        answer: 'Yes, we optimize for local intent, including location-based keywords and Local Business schema markup.',
      },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return services.find((s) => s.slug === slug);
}
