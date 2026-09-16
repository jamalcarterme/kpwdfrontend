import type { InfoBlock } from "@/components/InfoSection";
import type { FaqItem } from "@/components/Faq";

export const homeInfo: InfoBlock[] = [
  {
    heading: "Professional expertise and in-house installation",
    paragraphs: [
      "Whether it's solar power, security systems, electrical automation, or smart home solutions, every project is handled by our own trained technicians. We don't outsource installation work — this means we stand behind the quality and workmanship long after the project is complete.",
      "Keeping design, installation, and support under one team is what separates us. When something isn't right, there's no finger-pointing between a designer and an installer — we're responsible for the entire outcome.",
    ],
  },
  {
    heading: "Customized solutions for your specific needs",
    paragraphs: [
      "One solar package doesn't fit everyone. Same goes for security, automation, and smart home solutions. We start every project with a consultation to understand exactly what you need, then design a solution around your requirements, budget, and available space.",
      "This is true for solar load assessment, security camera placement, electrical system design, or home automation features. We listen first, then recommend what actually makes sense for your situation.",
    ],
  },
  {
    heading: "Quality equipment and proven brands",
    paragraphs: [
      "We work with established, proven equipment from trusted brands rather than chasing the cheapest option every month. This consistency means we know the equipment inside and out — its performance, its failure points, its realistic lifespan.",
      "Whether it's inverters, cameras, automation controllers, or any other component, we install equipment we're confident will perform reliably for years.",
    ],
  },
  {
    heading: "Where we work",
    paragraphs: [
      "We take on projects wherever you're located, from local installations to larger commercial and estate work further afield. Wherever your property is, contact us on WhatsApp and we'll confirm coverage and logistics before you commit.",
    ],
  },
];

export const homeFaqs: FaqItem[] = [
  {
    question: "How do I know which service is right for me?",
    answer:
      "Each service solves a different need. Solar provides reliable backup power. CCTV secures your property. Electrical automation optimizes your power management. Smart home automation adds convenience and control. You can also combine services — for example, solar with automation. Contact us and we'll recommend what matches your priorities.",
  },
  {
    question: "Do you provide free consultations?",
    answer:
      "Yes. Whether it's a solar site survey, security system assessment, automation consultation, or smart home planning, initial consultations are free and carry no obligation. We listen to your needs, assess your property or situation, and recommend solutions that fit.",
  },
  {
    question: "How long does a typical installation take?",
    answer:
      "This varies by service and project scope. Most residential installations are completed in 1-3 days once planning is confirmed. Larger projects, estates, or commercial work may take longer. We provide timelines upfront during consultation.",
  },
  {
    question: "What happens after installation — do you provide support?",
    answer:
      "Every installation is backed by after-sales support from our own technicians. Call or WhatsApp us anytime for diagnostics, maintenance, troubleshooting, or upgrades. We keep records of what we installed so follow-up work is faster and more accurate.",
  },
  {
    question: "Do you offer financing or payment plans?",
    answer:
      "For larger projects, we can discuss staged payment arrangements on a case-by-case basis. Message us on WhatsApp with details of what you're interested in and your budget, and we'll explain current options.",
  },
  {
    question: "How far do you travel for a project?",
    answer:
      "We take on residential, commercial, estate, and specialty projects well beyond our home base. Send us your location on WhatsApp and we'll confirm feasibility and any travel costs upfront.",
  },
];

export const servicesInfo: InfoBlock[] = [
  {
    heading: "Home solar systems, sized to your appliances",
    paragraphs: [
      "A home solar installation from NMC Technology begins with understanding exactly what you run day to day — televisions, fans, air conditioners, a pressure pump, a fridge and freezer — rather than pushing a fixed package regardless of fit. From there we recommend an inverter capacity (3.5KVA through 30KVA), a lithium battery size, and a panel count that keeps that load running through outages without you rationing power.",
    ],
  },
  {
    heading: "Off-grid independence for homes and estates",
    paragraphs: [
      "For clients who want to cut ties with the grid entirely, we design fully off-grid systems with larger battery banks — 60KWH and above — and panel arrays big enough to fully recharge overnight usage the following day. These systems are built for households running multiple air conditioners, elevators, pumping systems and freezers around the clock, with 18 to 24 hours of backup as standard on our larger tiers.",
    ],
  },
  {
    heading: "Commercial and estate-scale solar",
    paragraphs: [
      "Offices, schools, hotels, estates and light industrial sites carry heavier and less predictable daily loads than a typical home. We handle these projects with multi-inverter banks, larger rooftop or ground-mounted arrays, and distribution designs that let the site keep operating even if part of the system needs maintenance — instead of a single point of failure taking the whole building down.",
    ],
  },
  {
    heading: "Automatic transfer panels and distribution work",
    paragraphs: [
      "A solar and battery system is only as reliable as the switching gear behind it. We build and install automatic transfer switch (ATS) panels that move cleanly between solar, generator and grid supply, plus the breaker and distribution board work needed to wire it safely into an existing property — new build or retrofit.",
    ],
  },
  {
    heading: "Repairs, upgrades and second opinions",
    paragraphs: [
      "Not every system we touch is one we installed. We regularly diagnose underperforming solar setups — batteries that no longer hold charge, inverters that trip under load, wiring that was never sized correctly — and either repair the existing equipment or recommend a targeted upgrade rather than a full replacement where one isn't needed.",
    ],
  },
  {
    heading: "Free site survey and consultation",
    paragraphs: [
      "Every project, large or small, starts with a free load assessment — either a site visit or a detailed conversation about your appliances and daily routine. This is what lets us quote a system that is neither over-priced nor under-powered, and it costs nothing to find out where you stand.",
    ],
  },
];

export const servicesFaqs: FaqItem[] = [
  {
    question: "Which solar service is right for a new building under construction?",
    answer:
      "If your building is still at the planning or wiring stage, our team can design the solar-ready conduit and distribution layout alongside your electrician, so the eventual inverter, battery and panel installation is straightforward rather than retrofitted.",
  },
  {
    question: "Can you upgrade an existing solar system instead of replacing it?",
    answer:
      "Often, yes. If your inverter is healthy but your battery has degraded, or your panel count is simply too low for your current load, we can upgrade just the underperforming component rather than replacing the whole system.",
  },
  {
    question: "Do you service inverters and batteries from other installers?",
    answer:
      "Yes, we regularly diagnose and repair systems we did not originally install, including Deye, Growatt and other hybrid inverter brands, along with lithium and lead-acid battery banks.",
  },
  {
    question: "What is included in a free site survey?",
    answer:
      "We review your appliance list, check your existing wiring and roof or mounting space where applicable, and walk you through inverter, battery and panel options that fit your budget and load — with no obligation to proceed.",
  },
];

export const packagesInfo: InfoBlock[] = [
  {
    heading: "How our package tiers are structured",
    paragraphs: [
      "Each capacity tier on our Packages page — from 3.5KVA through 30KVA — includes multiple battery sizes so you can choose between a lower entry price with shorter backup, or a larger lithium battery bank that carries your appliances for longer between charges. Panel counts scale alongside battery size so the system can fully recharge within a normal daily cycle.",
      "Every listed price includes the inverter, battery, panels, mounting hardware, cabling and professional installation by our own technicians — not just equipment supply. The only variable that can shift the final figure is what a site survey uncovers about your existing wiring or roof access.",
    ],
  },
  {
    heading: "Matching a tier to your property",
    paragraphs: [
      "As a rough guide, 3.5KVA and 5KVA systems suit one to three-bedroom apartments running lights, fans, a fridge and a single air conditioner. 10KVA and 12KVA tiers step up to three to four-bedroom homes running two air conditioners, a freezer and a pressure pump. Our 15KVA, 24KVA and 30KVA off-grid tiers are built for five-to-six-bedroom homes, duplexes and properties that want full independence from the grid, including elevators and multiple large appliances.",
      "These are starting guides, not fixed rules — a smaller apartment with heavy appliance use can outgrow a 3.5KVA system quickly, which is exactly why we confirm sizing with a load assessment before you commit to a tier.",
    ],
  },
];

export const packagesFaqs: FaqItem[] = [
  {
    question: "Why do prices vary within the same KVA tier?",
    answer:
      "Within each capacity tier, the price difference comes from battery size and panel count. A 5KVA system with a 10KWH battery and 6 panels costs less than a 5KVA system with a 20KWH battery and 16 panels, because the larger battery gives you significantly more backup hours.",
  },
  {
    question: "What is included in the listed package price?",
    answer:
      "The inverter, the battery bank, the solar panels, mounting structure, cabling and professional installation by our technicians are all included. Optional add-ons like automatic transfer switches for generator integration are quoted separately if you need them.",
  },
  {
    question: "Can I start with a smaller package and upgrade later?",
    answer:
      "Yes. Many clients start with a 5KVA or 6KVA system and add battery capacity or panels once their needs grow, provided the initial inverter has headroom for it — we'll flag this during your consultation if it's relevant to you.",
  },
  {
    question: "Do the backup hours listed assume full load or reduced load?",
    answer:
      "Backup hour ranges assume the typical appliance load listed for that tier. Running fewer appliances than listed extends backup time; running more heavy appliances at once will shorten it.",
  },
];

export const aboutInfo: InfoBlock[] = [
  {
    heading: "How NMC Technology started",
    paragraphs: [
      "NMC Technology was built on a simple frustration shared by most homeowners: paying for solar equipment that was either wrongly sized, poorly installed, or abandoned by the seller the moment something needed fixing. We set out to be the company that designs, sells and installs a system with the same team from first phone call to years-later maintenance call.",
      "That decision to keep installation in-house rather than outsourcing to third-party electricians is still what separates how we work today. When our engineers design a system, they are the same people wiring it into your distribution board — so nothing gets lost in translation, and there's no finger-pointing between a seller and an installer if something isn't right.",
    ],
  },
  {
    heading: "Our approach to equipment and workmanship",
    paragraphs: [
      "We deliberately work with a narrow set of proven brands — Deye, Growatt and Sirne — rather than chasing the cheapest inverter on the market each month. Consistency in the equipment we install means we know its failure points, its firmware quirks and its realistic lifespan, which makes our maintenance and troubleshooting faster and more accurate.",
      "On the installation side, every rooftop mount, cable run and distribution board we touch is done to the same internal standard regardless of project size, from a single studio apartment to a multi-inverter commercial site.",
    ],
  },
  {
    heading: "Life after installation",
    paragraphs: [
      "A solar system is a ten-to-twenty-year investment, and most of that lifespan happens after our van leaves your compound. We stay reachable by phone and WhatsApp for diagnostics, battery health checks, firmware updates and physical repairs — and because we keep records of exactly what we installed at your property, a call three years later doesn't start from zero.",
    ],
  },
];

export const aboutFaqs: FaqItem[] = [
  {
    question: "Where is NMC Technology based?",
    answer:
      "Our main office is at Plot 4A, Block XIV, Opposite Unipetrol Estate, Satellite Town, Lagos, and our installation teams take on projects well beyond that.",
  },
  {
    question: "Are your technicians employed directly or outsourced?",
    answer:
      "Every installation is carried out by our own trained technicians. We do not outsource wiring or panel mounting to third-party contractors, which is how we're able to stand behind the workmanship long-term.",
  },
  {
    question: "How long has NMC Technology been installing solar systems?",
    answer:
      "We have spent over 8 years designing and installing inverter, battery and solar panel systems for homes and businesses, with more than 500 properties powered to date.",
  },
];

export const projectsInfo: InfoBlock[] = [
  {
    heading: "Our projects include",
    paragraphs: [
      "We have experience delivering technology and electrical solutions across residential, commercial, and business environments. Every project is an opportunity to demonstrate quality, professionalism, and engineering excellence.",
    ],
    list: [
      "Residential solar installations",
      "Commercial solar power systems",
      "Inverter and lithium battery installations",
      "CCTV security installations",
      "Smart home projects",
      "Electrical automation",
      "Generator automation",
      "Load management systems",
      "Surge and lightning protection",
      "Custom electrical solutions",
    ],
  },
  {
    heading: "What goes into every installation you see here",
    paragraphs: [
      "Each project in our gallery — from rooftop panel arrays to plant-room inverter banks — represents the same process: a free load assessment, a system design matched to that specific property's appliances, and installation carried out entirely by our in-house technicians rather than subcontracted labour.",
      "We photograph completed installations partly for our own records and partly so prospective clients can see the standard of cable management, panel mounting and distribution board work they can expect before a single naira changes hands.",
    ],
  },
];

export const reviewsInfo: InfoBlock[] = [
  {
    heading: "What clients tell us matters most",
    paragraphs: [
      "Across the feedback we receive, two things come up repeatedly: how quickly we respond when something needs attention after installation, and whether the system actually performs the way it was described before purchase. Both are a direct result of keeping design, sales and installation inside one team rather than splitting them across different companies.",
      "We share reviews here as they come in through Google and direct client feedback, unedited beyond basic formatting. If you'd like to speak to a recent client directly about a similar-sized project to yours, ask us on WhatsApp and we'll try to connect you.",
    ],
  },
];

export const contactInfo: InfoBlock[] = [
  {
    heading: "The fastest way to reach us",
    paragraphs: [
      "WhatsApp is the quickest way to get a response from our team during business hours, and it's how most of our clients complete their initial enquiry — send your appliance list, property type and location, and we can usually give you a starting recommendation the same day.",
      "If you'd rather speak by phone, all three numbers listed here reach our sales and support desk directly, not a call centre.",
    ],
  },
  {
    heading: "What to have ready before you contact us",
    paragraphs: [
      "A quicker, more accurate quote usually comes down to three details: the number of bedrooms or the size of the space you want powered, a rough list of appliances you need to run (with quantities, e.g. 2 air conditioners, 1 freezer), and whether you want grid-tied backup or full off-grid independence. You don't need technical knowledge beyond that — we handle the sizing.",
    ],
  },
];

export const contactFaqs: FaqItem[] = [
  {
    question: "What are your working hours?",
    answer: "We're reachable Monday to Saturday, 8:00 AM to 6:00 PM, with WhatsApp messages typically answered within minutes during that window.",
  },
  {
    question: "Do you offer free site visits?",
    answer:
      "Yes, site surveys are free and carry no obligation to proceed. We use the visit to confirm roof access, wiring condition and your actual load before finalising a quote.",
  },
  {
    question: "How quickly can installation start after I confirm a package?",
    answer:
      "Once a package and site survey are confirmed, most home installations are scheduled within a few days, subject to equipment availability for your chosen battery and panel configuration.",
  },
];
