import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Process from "@/components/Process";
import { Container, Eyebrow } from "@/components/ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Smart Electrical Automation | NMC Technology",
  description:
    "Professional electrical automation services including ATS systems, generator automation, load management, surge protection, and smart controls for homes and businesses.",
  alternates: { canonical: "/services/automation" },
};

const automationInfo = [
  {
    heading: "Why electrical automation matters",
    paragraphs: [
      "Manual switching between power sources is inefficient and error-prone. Automated electrical systems handle power transitions seamlessly — from grid to generator to solar — without interrupting your appliances or requiring manual intervention.",
      "Smart electrical systems also protect your equipment through surge protection, voltage regulation, and intelligent load management, extending the lifespan of expensive appliances and preventing costly damage.",
    ],
  },
  {
    heading: "Our automation solutions include",
    paragraphs: [],
    list: [
      "Automated changeover systems",
      "ATS solutions",
      "Generator automation",
      "Remote generator start/stop",
      "Smart load management",
      "Surge protection",
      "Lightning protection",
      "Earthing systems",
      "Voltage protection",
      "Electrical control systems",
    ],
  },
  {
    heading: "Automatic Transfer Panels (ATS)",
    paragraphs: [
      "An ATS panel automatically switches your property between different power sources — mains supply, generator, solar inverter — based on availability and demand. This eliminates manual switching, prevents electrical damage from incorrect sequencing, and ensures uninterrupted power.",
      "We design and build custom ATS panels matched to your property's electrical capacity and power sources, ensuring safe, reliable operation.",
    ],
  },
  {
    heading: "Generator automation and remote control",
    paragraphs: [
      "We integrate generators with automated start/stop systems that activate the generator when mains power fails and shut it down when power returns. This reduces fuel consumption, minimizes noise, and eliminates the need for manual operation.",
      "Optional remote control allows you to start or stop your generator from your phone, giving you full control even when you're away.",
    ],
  },
  {
    heading: "Protection and smart controls",
    paragraphs: [
      "Beyond automation, we install surge protectors, lightning arrestors, earthing systems, and voltage regulators to shield your equipment from electrical faults. Smart load management systems prevent overload by intelligently prioritizing which appliances receive power during high demand.",
      "These systems work together to keep your electrical infrastructure safe, efficient, and reliable.",
    ],
  },
];

const automationFaqs = [
  {
    question: "What is an Automatic Transfer Switch (ATS)?",
    answer:
      "An ATS is a device that automatically switches your electrical supply between different sources — like mains power, a generator, or a solar inverter. When one source fails or is unavailable, the ATS instantly switches to another, keeping your appliances running without manual intervention.",
  },
  {
    question: "Can I automate my existing generator?",
    answer:
      "Yes. We can retrofit automation onto most existing generator setups. This includes installing start/stop controls, ATS switches, and optional remote control via mobile app.",
  },
  {
    question: "Does automation work during power outages?",
    answer:
      "Yes, as long as your generator or backup power source is available. The ATS switches automatically, so your property stays powered. If you want remote control, you'll need a backup internet connection (like mobile data) to access the system.",
  },
  {
    question: "What's the difference between surge protection and lightning protection?",
    answer:
      "Surge protection guards against electrical surges (sudden increases in voltage). Lightning protection is more comprehensive — it intercepts lightning strikes through external arrestors and grounds them safely before they can enter your building. Both are important for complete protection.",
  },
  {
    question: "Can I monitor my automation system remotely?",
    answer:
      "Yes. We can integrate remote monitoring and control capabilities so you can check system status, start/stop generators, and receive alerts from your phone or computer.",
  },
  {
    question: "How much does electrical automation cost?",
    answer:
      "Cost depends on the complexity of your system and what automation features you need. A basic ATS panel might cost from ₦500,000 to ₦2,000,000, while a complete automated system with remote monitoring costs more. We provide a detailed quote after assessing your property.",
  },
];

export default function AutomationPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
          <Container>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>Smart Electrical Automation</Eyebrow>
              <h1 className="mt-3 font-display text-[28px] font-semibold text-paper sm:text-[32px]">
                Intelligent Electrical Control Systems
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                Transform conventional electrical systems into smarter, safer, and more efficient installations. Automated power switching, generator control, load management, and comprehensive protection systems for homes and businesses.
              </p>
            </div>
          </Container>
        </section>

        <InfoSection
          eyebrow="Electrical Automation"
          title="Smart control systems for reliable power management"
          intro="From automated switching to generator controls and protection systems, here's what electrical automation includes."
          blocks={automationInfo}
          className="bg-ink"
        />

        <Process />

        <section className="bg-charcoal py-16 md:py-20">
          <Container>
            <div className="text-center">
              <Eyebrow>Automate your power</Eyebrow>
              <h2 className="mt-3 font-display text-[26px] font-semibold text-paper sm:text-[30px]">
                Get a custom automation system assessment
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                We'll evaluate your current system and design an automation solution matched to your needs.
              </p>
              <div className="mt-8 flex flex-col gap-3 justify-center sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
                >
                  Request Free Assessment
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
          title="Electrical automation questions"
          intro="Answers to common questions about automation systems and controls."
          items={automationFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
