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
  title: "CCTV Camera Installation | NMC Technology",
  description:
    "Professional CCTV surveillance and security camera system installation for homes and businesses. IP cameras, HD monitoring, and remote access wherever you're located.",
  alternates: { canonical: "/services/cctv" },
};

const cctvInfo = [
  {
    heading: "Why CCTV security matters",
    paragraphs: [
      "Property security is a growing concern everywhere. A professionally designed and installed CCTV system provides peace of mind whether you're home or away, deterring theft and providing evidence in the event of an incident.",
      "Unlike DIY camera systems, professional installations ensure optimal camera placement, proper wiring, reliable storage, and the infrastructure needed for consistent, round-the-clock monitoring.",
    ],
  },
  {
    heading: "Our CCTV services include",
    paragraphs: [],
    list: [
      "CCTV camera installation",
      "IP camera systems",
      "HD surveillance systems",
      "Remote monitoring",
      "DVR/NVR installation",
      "Residential security systems",
      "Commercial security systems",
      "CCTV system upgrades and maintenance",
    ],
  },
  {
    heading: "System design and installation",
    paragraphs: [
      "We design CCTV systems based on your property's layout, vulnerable points, and security concerns. Whether you need coverage of a single entrance or a multi-building estate, we recommend camera types, placement, and storage capacity to match your actual security needs.",
      "Every installation includes proper cable routing, weatherproof housing for outdoor cameras, secure power supply, and backup systems so your security doesn't fail when you need it most.",
    ],
  },
  {
    heading: "Remote monitoring and access",
    paragraphs: [
      "Once installed, your CCTV system connects to a secure DVR or NVR that stores recorded footage. You can monitor live feed from your phone or computer, receive alerts for motion detection, and review recordings from anywhere.",
      "We configure the system to your preferences and ensure you understand how to use all features before we leave your property.",
    ],
  },
];

const cctvFaqs = [
  {
    question: "How many cameras do I need for my property?",
    answer:
      "This depends on your property layout and security priorities. A small apartment might need 1-2 cameras covering entry points, while a larger home or business may need 4-8 cameras for comprehensive coverage. We assess your property during a free consultation and recommend a system matched to your actual needs.",
  },
  {
    question: "Can I monitor my cameras remotely?",
    answer:
      "Yes. All our systems include mobile app access so you can view live feed and recordings from your phone or tablet anywhere with internet connection. You can also configure motion alerts to receive notifications immediately.",
  },
  {
    question: "How long is footage stored?",
    answer:
      "Storage depends on the system you choose and how many cameras are recording. We typically recommend storage capacity that keeps 2-4 weeks of continuous recording, though this can be customized. Cloud storage options are also available.",
  },
  {
    question: "Do I need fast internet for CCTV monitoring?",
    answer:
      "You don't need high-speed internet for the system to work locally. However, remote monitoring via mobile app works better with stable internet. We recommend minimum 2Mbps upload speed for reliable remote access.",
  },
  {
    question: "What happens if the system loses power?",
    answer:
      "Our installations include backup power options. We can integrate your system with a generator or UPS (uninterruptible power supply) so recording continues even during power outages.",
  },
  {
    question: "Can you upgrade an existing CCTV system?",
    answer:
      "Yes. We regularly upgrade older or underperforming systems by adding cameras, replacing worn DVRs, upgrading to HD or IP cameras, or improving storage capacity. Contact us for a system audit.",
  },
];

export default function CCTVPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
          <Container>
            <div className="flex flex-col items-center text-center">
              <Eyebrow>CCTV Camera Installation</Eyebrow>
              <h1 className="mt-3 font-display text-[28px] font-semibold text-paper sm:text-[32px]">
                Professional Security Surveillance Systems
              </h1>
              <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-paper/70">
                Protect your property with professionally designed CCTV systems. We install IP cameras, HD surveillance, and remote monitoring solutions for homes and businesses.
              </p>
            </div>
          </Container>
        </section>

        <InfoSection
          eyebrow="CCTV Security"
          title="Everything you need to know about surveillance systems"
          intro="From system design to remote monitoring, here's what a professional CCTV installation includes."
          blocks={cctvInfo}
          className="bg-ink"
        />

        <Process />

        <section className="bg-charcoal py-16 md:py-20">
          <Container>
            <div className="text-center">
              <Eyebrow>Secure your property</Eyebrow>
              <h2 className="mt-3 font-display text-[26px] font-semibold text-paper sm:text-[30px]">
                Get a professional security system assessment
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
                We'll evaluate your property and recommend a CCTV system matched to your security needs.
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
          title="CCTV system questions"
          intro="Answers to common questions about security camera installation and monitoring."
          items={cctvFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
