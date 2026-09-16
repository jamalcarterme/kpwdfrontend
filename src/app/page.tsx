import About from "@/components/About";
import AutomationGrid from "@/components/AutomationGrid";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeShowcase from "@/components/HomeShowcase";
import PackagesTeaser from "@/components/PackagesTeaser";
import ServiceCategories from "@/components/ServiceCategories";
import TrustBar from "@/components/TrustBar";
import { Container, Eyebrow } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <HomeShowcase />
        <About />
        <PackagesTeaser />
        <AutomationGrid />
        <TrustBar />

        <section className="bg-charcoal py-24 md:py-28 border-t border-paper/10">
          <Container className="text-center">
            <Eyebrow>Need a solution?</Eyebrow>
            <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
              Let&apos;s Turn Your Idea Into Reality.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[16px] leading-relaxed text-paper/70">
              Whether you are planning a solar installation, upgrading your electrical system, securing your property with CCTV, or building a smart home, NMC Technology is ready to help.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
            >
              Request a Quote
            </a>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
