import type { Metadata } from "next";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import MissionGrid from "@/components/MissionGrid";
import PageHero from "@/components/PageHero";
import WhoWeServe from "@/components/WhoWeServe";
import { aboutFaqs, aboutInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "NMC Technology is a solar engineering company installing inverter, lithium battery and panel systems for homes and businesses since day one, in-house.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/team-photo.jpg"
          eyebrow="NMC Technology"
          title="About Us"
          subtitle="Engineering technology, powering possibilities — for homes and businesses across Nigeria."
        />
        <About />
        <InfoSection
          eyebrow="Our story"
          title="Why we install everything ourselves"
          blocks={aboutInfo}
          className="bg-charcoal"
        />
        <MissionGrid />
        <WhoWeServe />
        <Faq title="About NMC Technology" items={aboutFaqs} className="bg-ink" />
      </main>
      <Footer />
    </>
  );
}
