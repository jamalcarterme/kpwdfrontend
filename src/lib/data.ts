export const site = {
  name: "NMC Technology",
  tagline: "Turning Ideas Into Reality",
  domain: "https://www.nmctechnology.com",
  description:
    "NMC Technology provides innovative electrical, solar, security, and automation solutions for homes, offices, and businesses. Solar power installation, CCTV security, smart electrical automation, and smart home automation.",
  phones: [
    { display: "0901 040 0711", href: "+2349010400711" },
    { display: "0916 456 7887", href: "+2349164567887" },
  ],
  whatsapp: "2349010400711",
  address: "Plot 4A, Block XIV, Opposite Unipetrol Estate, Satellite Town, Lagos, Nigeria",
  addressShort: "Satellite Town, Lagos",
  tiktok: "https://www.tiktok.com/@nmc_solar.ng_1",
  email: "nmctechnologi@gmail.com",
};

export const serviceCategories = [
  { label: "Solar Power Installation", icon: "Sun", href: "/services/solar" },
  { label: "CCTV Camera Installation", icon: "Camera", href: "/services/cctv" },
  { label: "Smart Electrical Automation", icon: "Zap", href: "/services/automation" },
  { label: "Smart Home Automation", icon: "Wifi", href: "/services/smart-home" },
];

export const waLink = (message: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: "8+", label: "Years of engineering expertise" },
  { value: "500+", label: "Projects completed" },
  { value: "4", label: "Core service categories" },
  { value: "24/7", label: "Support available" },
];

export const services = [
  {
    title: "Solar Power Installation",
    description:
      "Efficient solar power systems for homes, offices, and businesses. Complete solutions from panel installation to battery storage.",
    icon: "Home",
    image: "/images/rooftop-panels-2.jpg",
    href: "/services/solar",
  },
  {
    title: "CCTV Security Systems",
    description:
      "Professional surveillance and security camera installations. Remote monitoring and HD systems for properties of all sizes.",
    icon: "Camera",
    image: "https://images.unsplash.com/photo-1589935447067-5531094415d1?auto=format&fit=crop&w=1200&q=80",
    href: "/services/cctv",
  },
  {
    title: "Smart Electrical Automation",
    description:
      "Transform conventional systems into intelligent, efficient electrical solutions with automated controls and protection.",
    icon: "Zap",
    image: "https://images.unsplash.com/photo-1780342506044-7f4913fe294a?auto=format&fit=crop&w=1200&q=80",
    href: "/services/automation",
  },
  {
    title: "Smart Home Automation",
    description:
      "Advanced automation for lighting, climate control, security, and energy management across your entire home.",
    icon: "Wifi",
    image: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152?auto=format&fit=crop&w=1200&q=80",
    href: "/services/smart-home",
  },
  {
    title: "Custom Solutions",
    description:
      "Integrated technology solutions tailored to your specific needs, budget, and space requirements.",
    icon: "Wrench",
    image: "/images/breaker-board.jpg",
  },
  {
    title: "Professional Support",
    description:
      "Expert consultation, system assessment, maintenance, troubleshooting, and technical support after installation.",
    icon: "ClipboardCheck",
    image: "/images/control-tech.jpg",
  },
];

export const process = [
  {
    title: "Consultation",
    description:
      "We listen to your requirements and understand your needs for power, security, electrical, or automation solutions.",
  },
  {
    title: "Assessment",
    description:
      "We assess your property, existing systems, and requirements to understand your specific project objectives.",
  },
  {
    title: "Design",
    description:
      "We develop a customized solution that balances performance, safety, reliability, and your budget.",
  },
  {
    title: "Installation",
    description:
      "Our professional team executes the installation with attention to quality, safety, and workmanship standards.",
  },
  {
    title: "Testing & Commissioning",
    description:
      "We thoroughly test all systems to ensure everything operates correctly before final handover.",
  },
  {
    title: "Support",
    description:
      "We remain available for maintenance, troubleshooting, upgrades, and ongoing technical support as needed.",
  },
];

export type Package = {
  kva: string;
  price: number;
  battery: string;
  panels: string;
  backup: string;
  load: string;
};

export type PackageGroup = {
  id: string;
  label: string;
  suitability: string;
  tiers: Package[];
};

export const packageGroups: PackageGroup[] = [
  {
    id: "3-5kva",
    label: "3.5KVA",
    suitability: "Suitable for 1–2 bedroom apartments",
    tiers: [
      {
        kva: "3.5KVA",
        price: 3000000,
        battery: "5KWH Lithium-Ion",
        panels: "4 solar panels",
        backup: "4–6 hours",
        load: "2 TVs, lights, 2 fans, 1 small fridge & sockets",
      },
      {
        kva: "3.5KVA",
        price: 3600000,
        battery: "7.5KWH Lithium-Ion",
        panels: "6 solar panels",
        backup: "4–6 hours",
        load: "2 TVs, lights, 2 fans, 1 fridge, sockets & pressure pump",
      },
      {
        kva: "3.5KVA",
        price: 3900000,
        battery: "10KWH Lithium-Ion",
        panels: "6 solar panels",
        backup: "6–10 hours",
        load: "2 TVs, lights, 2 fans, 1 fridge, sockets & pressure pump",
      },
    ],
  },
  {
    id: "5kva",
    label: "5KVA",
    suitability: "Suitable for 2–3 bedroom apartments",
    tiers: [
      {
        kva: "5KVA",
        price: 4500000,
        battery: "10KWH Lithium-Ion",
        panels: "6 solar panels",
        backup: "4–6 hours",
        load: "1 x 1.5HP inverter AC, lights, 2–3 fans, 1 fridge or freezer, sockets",
      },
      {
        kva: "5KVA",
        price: 5500000,
        battery: "15KWH Lithium-Ion",
        panels: "10 solar panels",
        backup: "6–10 hours",
        load: "1 x 1.5HP inverter AC, lights, 2–3 fans, 1 fridge or freezer, sockets",
      },
      {
        kva: "5KVA",
        price: 7500000,
        battery: "20KWH Lithium-Ion",
        panels: "16 solar panels",
        backup: "7–12 hours",
        load: "1 x 1.5HP inverter AC, lights, 2–3 fans, 1 fridge, 1 freezer, sockets",
      },
    ],
  },
  {
    id: "6kva",
    label: "6KVA",
    suitability: "Suitable for 2–3 bedroom apartments",
    tiers: [
      {
        kva: "6KVA",
        price: 7500000,
        battery: "15KWH Lithium-Ion",
        panels: "12 solar panels",
        backup: "4–6 hours",
        load: "1 x 1.5HP inverter AC, lights, 2–3 fans, 1 fridge, 1 freezer, sockets",
      },
    ],
  },
  {
    id: "10kva",
    label: "10KVA",
    suitability: "Suitable for 3–4 bedroom homes",
    tiers: [
      {
        kva: "10KVA",
        price: 10500000,
        battery: "16KWH Lithium-Ion",
        panels: "12 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "10KVA",
        price: 11500000,
        battery: "20KWH Lithium-Ion",
        panels: "16 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "10KVA",
        price: 13500000,
        battery: "30KWH Lithium-Ion",
        panels: "24 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
    ],
  },
  {
    id: "12kva",
    label: "12KVA",
    suitability: "Suitable for 3–4 bedroom homes",
    tiers: [
      {
        kva: "12KVA",
        price: 10800000,
        battery: "16KWH Lithium-Ion",
        panels: "12 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "12KVA off-grid",
        price: 12000000,
        battery: "20KWH Lithium-Ion",
        panels: "16 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "12KVA off-grid",
        price: 15000000,
        battery: "30KWH Lithium-Ion",
        panels: "20 solar panels",
        backup: "4–6 hours",
        load: "1 x 2HP AC, 1 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
    ],
  },
  {
    id: "15kva",
    label: "15KVA",
    suitability: "Full off-grid independence for larger homes",
    tiers: [
      {
        kva: "15KVA off-grid",
        price: 21000000,
        battery: "60KWH Lithium-Ion",
        panels: "30 panels · 13,200W array",
        backup: "18–24 hours",
        load: "1 x 2HP AC, 3 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "15KVA off-grid",
        price: 25000000,
        battery: "75KWH Lithium-Ion",
        panels: "36 solar panels",
        backup: "18–24 hours",
        load: "1 x 2HP AC, 3 x 1.5HP AC, lights, 3–5 fans, fridge, freezer, pressure pump, sockets",
      },
    ],
  },
  {
    id: "24kva",
    label: "24KVA",
    suitability: "Suitable for 5–6 bedroom homes",
    tiers: [
      {
        kva: "24KVA",
        price: 23000000,
        battery: "32KWH Lithium-Ion",
        panels: "26 solar panels",
        backup: "12–15 hours",
        load: "3 x 2HP AC, 2 x 1.5HP AC, lights, 5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "24KVA off-grid",
        price: 27000000,
        battery: "64KWH Lithium-Ion",
        panels: "36 solar panels",
        backup: "18–24 hours",
        load: "3 x 2HP AC, 2 x 1.5HP AC, 5 fans, fridge, freezer, pressure pump, sockets",
      },
      {
        kva: "24KVA off-grid",
        price: 30000000,
        battery: "75KWH Lithium-Ion",
        panels: "38 solar panels",
        backup: "18–24 hours",
        load: "3 x 2HP AC, 2 x 1.5HP AC, 5 fans, fridge, freezer, pressure pump, sockets",
      },
    ],
  },
  {
    id: "30kva",
    label: "30KVA",
    suitability: "Suitable for 5–6 bedroom homes & duplexes",
    tiers: [
      {
        kva: "30KVA",
        price: 32200000,
        battery: "62KWH Lithium-Ion",
        panels: "40 solar panels",
        backup: "12–15 hours",
        load: "3 x 2HP AC, 5 x 1.5HP AC, lights, 2 fridges, 2 freezers, pressure pump, elevator, sockets",
      },
      {
        kva: "30KVA",
        price: 35200000,
        battery: "75KWH Lithium-Ion",
        panels: "46 solar panels",
        backup: "12–15 hours",
        load: "3 x 2HP AC, 5 x 1.5HP AC, lights, 2 fridges, 2 freezers, pressure pump, elevator, sockets",
      },
    ],
  },
];

export const testimonials = [
  {
    name: "Galant Dance360",
    text: "The services are top notch, they are swift to respond to any complaints or challenges you may encounter with your system.",
    rating: 5,
  },
  {
    name: "Precious Phonics",
    text: "I'm living evidence — tasted and trusted. The surest solar plug in the market.",
    rating: 5,
  },
];

export const brands = ["Growatt", "Deye", "Sirne"];
