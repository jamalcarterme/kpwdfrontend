/**
 * Fallback content
 * Rendered whenever the backend API returns no rows yet (fresh database) or
 * is unreachable, so pages such as Portfolio, Blog and the homepage sections
 * never ship blank / "coming soon" states to visitors or crawlers.
 * Replace or supplement via the CMS/admin dashboard once the database is seeded
 * (see backend/scripts/seed.js).
 */

export interface FallbackProject {
  _id: string;
  title: string;
  client?: string;
  category: string;
  description: string;
  country?: string;
  tags?: string[];
  isFeatured?: boolean;
  order?: number;
  image?: { url?: string };
  liveUrl?: string;
}

export const fallbackProjects: FallbackProject[] = [
  {
    _id: 'martins-realties',
    title: 'Martins Realties Property Platform',
    client: "D'S Martins Nig Enterprise",
    category: 'Web Application',
    country: 'Nigeria',
    description:
      'A full-stack real estate platform for a Lekki Phase 1 property firm — property listings with search and filters, a cart-to-order checkout flow, Cloudinary image uploads, review moderation and an admin dashboard with aggregated stats.',
    tags: ['Node.js', 'MongoDB', 'Real Estate', 'Admin Dashboard'],
    isFeatured: true,
    order: 1,
    image: { url: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=600&q=80' },
  },
  {
    _id: 'neristay',
    title: 'Neristay Shortlet Apartments',
    client: 'Neristay',
    category: 'Web Application',
    country: 'Nigeria',
    description:
      'A shortlet apartment booking platform for Abuja hosts — fully dynamic property listings and blog powered by a Node.js/Express API, an AI-assisted chat concierge, and a booking form with WhatsApp fallback for instant enquiries.',
    tags: ['Node.js', 'MongoDB', 'Hospitality', 'AI Chat'],
    isFeatured: true,
    order: 2,
    image: { url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&h=600&q=80' },
  },
  {
    _id: 'last-bus-stop-ministry',
    title: 'Last Bus Stop Ministry Church App',
    client: 'Last Bus Stop Ministry',
    category: 'Custom Software',
    country: 'Nigeria',
    description:
      'A church management application with 15+ data models, role-based access for admins, department heads and members, in-app notifications, audit logging and an analytics dashboard — delivered as a hash-routed single-page app.',
    tags: ['Node.js', 'MongoDB', 'JWT Auth', 'Dashboards'],
    isFeatured: true,
    order: 3,
    image: { url: 'https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=800&h=600&q=80' },
  },
  {
    _id: 'tasty-chops',
    title: 'Tasty Chops Foods & Events',
    client: 'Tasty Chops',
    category: 'Website',
    country: 'Nigeria',
    description:
      'A conversion-focused ordering and events website for a Festac Town food business, with a fixed authentication flow, clean responsive layout and fast load times tuned for mobile customers.',
    tags: ['Website', 'Food & Events'],
    order: 4,
    image: { url: '/assets/img/portfolio-tasty-chops.png' },
  },
  {
    _id: 'russell-solar-energy',
    title: 'Russell Solar Energy',
    client: 'Russell Solar Energy',
    category: 'Website',
    country: 'Nigeria',
    description:
      'A two-page marketing site for a Port Harcourt solar energy company, with a dark navy and amber design system, structured data for local SEO, and a WhatsApp-based contact flow.',
    tags: ['Website', 'Energy', 'SEO'],
    order: 5,
    image: { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&h=600&q=80' },
  },
  {
    _id: 'kaimas-beauty-med-spa',
    title: "Kaima's Beauty & Med Spa",
    client: "Kaima's Beauty & Med Spa",
    category: 'Website',
    country: 'Nigeria',
    description:
      'A premium single-page site for a Lagos med spa, built around a forest-green and rose brand palette with scroll animations and local business structured data to attract nearby clients.',
    tags: ['Website', 'Beauty', 'Med Spa'],
    order: 6,
    image: { url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&h=600&q=80' },
  },
  {
    _id: 'whitehouse-design-curators',
    title: 'Whitehouse Design Curators',
    client: 'Whitehouse Design Curators',
    category: 'Website',
    country: 'Nigeria',
    description:
      'A luxury interior design and real estate consultancy site for a Lekki Phase 1 client, featuring a Ken Burns hero, a masonry portfolio gallery and low-competition local SEO targeting.',
    tags: ['Website', 'Interior Design', 'Real Estate'],
    order: 7,
    image: { url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80' },
  },
];

export interface FallbackTeamMember {
  _id: string;
  name: string;
  role: string;
  bio?: string;
  order?: number;
  photo?: { url?: string };
  socials?: { linkedin?: string; twitter?: string; github?: string; instagram?: string };
}

export const fallbackTeam: FallbackTeamMember[] = [
  {
    _id: 'king-praise',
    name: 'King Praise',
    role: 'Founder & Full-Stack Developer',
    bio: 'A young entrepreneur in Nigeria and the founder of King Praise Web Design, building conversion-focused websites and custom software for small businesses, law firms, real estate agencies and churches — with direct access to the founder on every project.',
    order: 1,
  },
];

export interface FallbackTestimonial {
  _id: string;
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
}

export const fallbackTestimonials: FallbackTestimonial[] = [
  {
    _id: 't1',
    name: 'D. Martins',
    role: 'Director',
    company: "D'S Martins Nig Enterprise",
    quote:
      'King Praise built our property platform from the ground up — listings, checkout and an admin dashboard we actually use every day. Communication was direct and fast throughout.',
    rating: 5,
  },
  {
    _id: 't2',
    name: 'Neristay Team',
    role: 'Operations',
    company: 'Neristay',
    quote:
      'Our shortlet listings went from static pages to a fully dynamic booking experience, including an AI chat assistant for guest questions. Bookings and enquiries are up since launch.',
    rating: 5,
  },
  {
    _id: 't3',
    name: 'Ministry Admin Team',
    role: 'Administration',
    company: 'Last Bus Stop Ministry',
    quote:
      'The church management app has made tracking departments, members and attendance far easier, with a dashboard our volunteers can actually navigate.',
    rating: 5,
  },
];

export interface FallbackBlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: { _id: string; name: string };
  views: number;
  createdAt: string;
  status: 'published';
  coverImage?: { url: string; publicId?: string };
}

export const fallbackBlogPosts: FallbackBlogPost[] = [
  {
    _id: 'b1',
    slug: 'how-much-does-a-website-cost-in-nigeria',
    title: 'How Much Does a Website Cost in Nigeria in 2026?',
    excerpt:
      'A breakdown of realistic website pricing for small businesses, law firms and e-commerce stores in Nigeria, and what actually drives the cost up or down.',
    content:
      '<p>Website pricing in Nigeria varies widely depending on scope, features and who is building it. A simple brochure site for a small business typically starts in the low hundreds of dollars, while an e-commerce store with payment integration, inventory management and a custom admin dashboard costs significantly more.</p><p>The biggest cost drivers are the number of unique page designs, whether the site needs a custom backend (bookings, dashboards, user accounts), payment gateway integration such as Flutterwave or Paystack, and how much content and photography you can supply versus needing it created.</p><p>Our advice: start with a clear list of the pages and features you actually need, get a fixed quote instead of an hourly estimate, and confirm what is included after launch — such as bug fixes and minor content updates — before you sign off.</p>',
    category: 'Pricing',
    tags: ['pricing', 'small business', 'nigeria'],
    author: { _id: 'king-praise', name: 'King Praise' },
    views: 0,
    createdAt: '2026-02-10T00:00:00.000Z',
    status: 'published',
    coverImage: { url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1000&h=560&q=80' },
  },
  {
    _id: 'b2',
    slug: 'website-design-for-law-firms-in-lagos',
    title: 'What Makes a Great Website for a Law Firm in Lagos',
    excerpt:
      'Law firm websites need to build trust fast. Here is what we prioritize when designing for legal practices in Lagos and across Nigeria.',
    content:
      '<p>Prospective clients researching a law firm online are often anxious and comparing several practices at once. A great law firm website needs to establish credibility within seconds — clear practice areas, real attorney profiles, and an obvious way to book a consultation.</p><p>We typically structure law firm sites around a confident homepage, dedicated pages per practice area (family law, corporate law, property law, etc.), a simple client intake form, and structured data so the firm shows up correctly in local search results.</p><p>Fast load times and mobile responsiveness matter more than most firms expect, since a large share of legal searches happen on a phone, often outside business hours.</p>',
    category: 'Industry Guides',
    tags: ['law firms', 'lagos', 'web design'],
    author: { _id: 'king-praise', name: 'King Praise' },
    views: 0,
    createdAt: '2026-03-04T00:00:00.000Z',
    status: 'published',
    coverImage: { url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1000&h=560&q=80' },
  },
  {
    _id: 'b3',
    slug: 'ecommerce-website-nigeria-flutterwave-paystack',
    title: 'Building an E-Commerce Website in Nigeria with Flutterwave & Paystack',
    excerpt:
      'A practical look at what goes into a Nigerian e-commerce build, from payment gateway choice to inventory and delivery logistics.',
    content:
      '<p>Launching an online store in Nigeria means choosing a payment gateway that your customers already trust — Flutterwave and Paystack both support local cards, bank transfers and USSD, which still make up a large share of online payments.</p><p>Beyond checkout, a solid Nigerian e-commerce build needs simple inventory management so out-of-stock items do not embarrass the brand, clear delivery zones and fees (especially for Lagos versus nationwide delivery), and a mobile-first layout since most shoppers browse and buy from their phones.</p><p>We build stores on the MERN stack (MongoDB, Express, React, Node.js), which keeps the storefront fast while giving the business owner a real admin dashboard instead of a rigid template.</p>',
    category: 'E-Commerce',
    tags: ['ecommerce', 'flutterwave', 'paystack'],
    author: { _id: 'king-praise', name: 'King Praise' },
    views: 0,
    createdAt: '2026-04-18T00:00:00.000Z',
    status: 'published',
    coverImage: { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&h=560&q=80' },
  },
];
