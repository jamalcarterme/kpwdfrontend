import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import ServiceCategories from "@/components/ServiceCategories";
import Services from "@/components/Services";
import { servicesFaqs, servicesInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Home solar systems, off-grid power, commercial & estate solar, automatic transfer panels, upgrades and repairs — installed by NMC Technology.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <ServiceCategories />
        <Services />
        <InfoSection
          eyebrow="In depth"
          title="A closer look at every service we offer"
          intro="From a single studio apartment to a multi-inverter commercial site, here's exactly what each service involves."
          blocks={servicesInfo}
          className="bg-charcoal"
        />
        <Faq
          title="Common questions about our services"
          items={servicesFaqs}
          className="bg-ink"
        />
      </main>
      <Footer />
    </>
  );
}
