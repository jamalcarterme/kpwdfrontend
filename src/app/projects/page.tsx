import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import { projectsInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Recent Projects",
  description:
    "A look at solar installations NMC Technology has completed — rooftop arrays, inverter rooms and distribution panels, installed in-house.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Gallery />
        <InfoSection
          eyebrow="Our projects"
          title="From Ideas to Reality"
          blocks={projectsInfo}
          className="bg-charcoal"
        />
      </main>
      <Footer />
    </>
  );
}
