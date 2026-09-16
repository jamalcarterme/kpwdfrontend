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
  title: "Smart Home Automation | NMC Technology",
  description:
    "Professional smart home automation systems for lighting, temperature, security, and energy management. Custom automation solutions for modern homes, wherever you are.",
  alternates: { canonical: "/services/smart-home" },
};

const smartHomeInfo = [
  {
    heading: "Why smart home automation",
    paragraphs: [
      "A smart home makes daily life more convenient, comfortable, and secure. Imagine controlling lights, air conditioning, security systems, and appliances from a single app or voice command — whether you're home or away.",
      "Beyond convenience, smart automation improves energy efficiency by automating how and when appliances run, reducing waste and lowering your power consumption.",
    ],
  },
  {
    heading: "Our smart home solutions include",
    paragraphs: [],
    list: [
      "Smart lighting",
      "Smart switches",
      "Automated curtains",
      "Smart sockets",
      "Home security automation",
      "Remote control systems",
      "Energy management",
      "Customized home automation",
    ],
  },
  {
    heading: "Smart lighting and controls",
    paragraphs: [
      "Replace conventional switches with smart alternatives that let you control lights from your phone, set automation schedules, or adjust brightness and color temperature. Lights can turn on automatically when you arrive home, brighten gradually in the morning, or dim for movie time.",
      "Smart outlets let you control any plugged-in device remotely, create schedules for appliances, and monitor power consumption.",
    ],
  },
  {
    heading: "Climate and comfort automation",
    paragraphs: [
      "Set your air conditioning to turn on 30 minutes before you arrive home, automatically adjust temperature based on time of day, or switch to energy-saving mode when nobody's home. Smart thermostats learn your preferences and optimize comfort while reducing energy waste.",
      "Automated curtains complement climate control by managing sunlight, reducing heat gain in summer and retaining warmth in winter.",
    ],
  },
  {
    heading: "Security and energy management",
    paragraphs: [
      "Integrate your smart home with security systems for automated alerts, smart locks, and remote access monitoring. Know instantly if doors unlock or motion is detected, and control access remotely.",
      "Energy management systems monitor and report power consumption by device, helping you identify where energy is being wasted and optimize your usage patterns.",
    ],
  },
];

const smartHomeFaqs = [
  {
    question: "Do I need to replace all my switches and outlets?",
    answer:
      "No. You can start with key areas like bedroom lighting or common spaces and expand gradually. Smart bulbs, switches, and outlets work with existing wiring — we don't need to tear walls apart to install smart home automation.",
  },
  {
    question: "What if my internet goes down?",
    answer:
      "Most smart home systems include local control options, so key functions still work even without internet. You lose remote access, but things like lighting schedules and local automation continue operating independently.",
  },
  {
    question: "Is smart home automation expensive?",
    answer:
      "It depends on how comprehensive you want. Starting with smart lighting or a few smart switches can be affordable, from ₦50,000 to ₦200,000 per room. A complete whole-home system costs more, but we can build it gradually as your budget allows.",
  },
  {
    question: "Can I integrate different smart home brands?",
    answer:
      "Most popular brands are compatible through common platforms. We design systems using interoperable equipment so you're not locked into one brand and can mix products as your needs evolve.",
  },
  {
    question: "How secure is a smart home system?",
    answer:
      "Modern smart home systems use encryption and secure authentication. We configure your system with strong passwords, regular updates, and network security to protect against unauthorized access.",
  },
  {
    question: "Can I control smart home devices when I'm away?",
    answer:
      "Yes. With secure mobile app access, you can control and monitor your smart home from anywhere with internet connection. This includes checking cameras, locking doors, adjusting climate, and controlling lights.",
  },
];

export default function SmartHomePage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
          <Container>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>Smart Home Automation</Eyebrow>
              <h1 className="mt-3 font-display text-[28px] font-semibold text-paper sm:text-[32px]">
                Make Your Home More Comfortable, Convenient & Secure
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                Control your home intelligently from a single convenient system. Smart lighting, automated climate control, security automation, energy management, and remote access for modern homes.
              </p>
            </div>
          </Container>
        </section>

        <InfoSection
          eyebrow="Smart Home Living"
          title="Transform your home with intelligent automation"
          intro="From smart lighting to climate control and security, here's what smart home automation includes."
          blocks={smartHomeInfo}
          className="bg-ink"
        />

        <Process />

        <section className="bg-charcoal py-16 md:py-20">
          <Container>
            <div className="text-center">
              <Eyebrow>Design your smart home</Eyebrow>
              <h2 className="mt-3 font-display text-[26px] font-semibold text-paper sm:text-[30px]">
                Get a custom smart home plan
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                We'll design a smart home automation system tailored to your lifestyle and budget.
              </p>
              <div className="mt-8 flex flex-col gap-3 justify-center sm:flex-row">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
                >
                  Request Free Consultation
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
          title="Smart home automation questions"
          intro="Answers to common questions about smart home systems and automation."
          items={smartHomeFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
