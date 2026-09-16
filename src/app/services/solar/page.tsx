import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Packages from "@/components/Packages";
import Process from "@/components/Process";
import { Container, Eyebrow } from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Solar Power Installation | NMC Technology",
  description:
    "Professional solar power system installation for homes and businesses. Inverters, lithium batteries, solar panels, and complete energy solutions, wherever you're located.",
  alternates: { canonical: "/services/solar" },
};

const solarInfo = [
  {
    heading: "Why solar power matters",
    paragraphs: [
      "Grid power remains unpredictable in many places, and running a generator daily costs significantly more than most households realize once fuel, servicing, and maintenance are considered. A properly sized solar inverter and battery system removes that daily fuel burden and provides reliable power with no noise, emissions, or early-morning fuel runs.",
      "NMC Technology has spent over 8 years designing and installing these systems for homes and businesses. Because we install every system ourselves rather than subcontracting, we stand behind the workmanship long after installation — which is critical if something needs attention.",
    ],
  },
  {
    heading: "System sizing and load assessment",
    paragraphs: [
      "The biggest mistake in solar purchasing is under-sizing. We start every project with a detailed load assessment: what appliances you run, for how long, and when. This lets us recommend whether a 3.5KVA hybrid setup, a 10KVA system, or a 30KVA off-grid installation suits your actual needs.",
      "Getting the sizing right the first time is far cheaper than upgrading later. We provide honest recommendations based on your appliances, not on pushing the most expensive package.",
    ],
  },
  {
    heading: "Our solar solutions include",
    paragraphs: [],
    list: [
      "Solar panel installation",
      "Hybrid and off-grid solar systems",
      "Inverter installation",
      "Lithium battery storage systems",
      "Solar system upgrades",
      "Solar system maintenance",
      "Energy assessment and system sizing",
      "Generator integration",
      "Automated generator start/stop solutions",
    ],
  },
  {
    heading: "Equipment and brands we install",
    paragraphs: [
      "We work exclusively with proven inverter brands including Deye, Growatt, and Sirne, paired with high-capacity lithium-ion battery banks. Lithium batteries are our standard recommendation over older lead-acid technology because they charge faster, last significantly longer, and maintain capacity better in hot climates.",
      "Every installation is mounted and wired to withstand seasonal rain and harmattan dust, with distribution boards and automatic transfer switches built so your system fails safely rather than silently.",
    ],
  },
];

const solarFaqs = [
  {
    question: "How much does a complete solar system cost?",
    answer:
      "Complete systems from NMC Technology start from around ₦3,000,000 for a 3.5KVA studio or one-bedroom setup and scale up to ₦30,000,000+ for full off-grid systems on larger properties. See our Packages page for detailed pricing by tier, or send your appliance list on WhatsApp for an exact quote.",
  },
  {
    question: "How long does a solar installation take?",
    answer:
      "Most home installations are completed in 1-3 days once the site survey, equipment, and wiring plan are confirmed. Larger commercial or off-grid projects with bigger panel arrays may take up to a week depending on roof access and distribution board work.",
  },
  {
    question: "Can solar run my air conditioners?",
    answer:
      "Yes, provided the inverter and battery are sized appropriately. Our 5KVA and above packages are built to run at least one 1.5HP inverter AC alongside lights, fans, fridges, and sockets. We confirm exact AC coverage during your free load assessment.",
  },
  {
    question: "Do you offer financing or payment plans?",
    answer:
      "We can discuss staged payment arrangements for larger systems on a case-by-case basis. Message us on WhatsApp with your target package and we will explain current options.",
  },
  {
    question: "What happens if something fails after installation?",
    answer:
      "Every system we install is backed by after-sales support from our own technicians. Call or WhatsApp us and we will diagnose the issue remotely first, then schedule a visit if a physical fix is needed.",
  },
  {
    question: "Can I upgrade my system later?",
    answer:
      "Yes. Many clients start with a 5KVA or 6KVA system and add battery capacity or panels as their needs grow, provided the initial inverter has headroom. We advise on this during your consultation.",
  },
];

export default function SolarPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
          <Container>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>Solar Power Installation</Eyebrow>
              <h1 className="mt-3 font-display text-[28px] font-semibold text-paper sm:text-[32px]">
                Professional Solar Solutions for Homes & Businesses
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                Reliable power systems designed around your actual appliances and lifestyle. From 3.5KVA apartment setups to 30KVA off-grid independence, we install complete solar solutions with inverters, lithium batteries, and panel arrays engineered for performance and longevity.
              </p>
            </div>
          </Container>
        </section>

        <InfoSection
          eyebrow="Solar power, done right"
          title="Everything you need to know about solar installation"
          intro="From sizing and equipment to why solar matters, here's the full picture."
          blocks={solarInfo}
          className="bg-ink"
        />

        <Packages />

        <Process />

        <section className="bg-charcoal py-16 md:py-20">
          <Container>
            <div className="text-center">
              <Eyebrow>Ready to get started?</Eyebrow>
              <h2 className="mt-3 font-display text-[26px] font-semibold text-paper sm:text-[30px]">
                Let's design your solar system
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                Book your free load assessment and site survey today. No obligation, no cost.
              </p>
              <div className="mt-8 flex flex-col gap-3 justify-center sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
                >
                  Request Free Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <Faq
          title="Solar installation questions"
          intro="Answers to the most common questions from clients before they book a site survey."
          items={solarFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
