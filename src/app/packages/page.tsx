import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import PageHero from "@/components/PageHero";
import Packages from "@/components/Packages";
import QuoteForm from "@/components/QuoteForm";
import { Container, Eyebrow } from "@/components/ui";
import { packagesFaqs, packagesInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Packages & Pricing",
  description:
    "Transparent solar inverter, battery and panel packages from 3.5KVA to 30KVA, with pricing, backup times and what each tier can power.",
  alternates: { canonical: "/packages" },
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/rooftop-panels-3.jpg"
          eyebrow="NMC Technology"
          title="Solar Packages"
          subtitle="Explore NMC Technology packages and select the capacity that best suits your property."
        />
        <Packages />

        <section className="bg-charcoal py-24 md:py-28">
          <Container className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <Eyebrow>Before you choose</Eyebrow>
              <h2 className="balance mt-4 text-[28px] font-semibold leading-tight text-paper sm:text-[32px]">
                Get A Package
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
                To move ahead with any of our packages, kindly fill the form and our team will reach out to you as soon as possible with next steps and a confirmed site survey date.
              </p>
              <ul className="mt-6 flex flex-col gap-3 text-[14px] leading-relaxed text-paper/60">
                <li>• Installation logistics are confirmed after a free site survey.</li>
                <li>• Prices reflect current equipment costs and may be revised without prior notice.</li>
                <li>• A rough appliance list speeds up an accurate recommendation.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-paper/10 bg-ink p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] md:p-10">
              <h3 className="font-display text-[20px] font-semibold text-paper">
                Request your free quote
              </h3>
              <p className="mt-2 text-[15px] text-paper/60">
                Tell us about your property and we&apos;ll recommend the right package.
              </p>
              <div className="mt-7">
                <QuoteForm compact />
              </div>
            </div>
          </Container>
        </section>

        <InfoSection
          eyebrow="Understanding the numbers"
          title="How to choose the right package for your property"
          blocks={packagesInfo}
          className="bg-ink"
        />
        <Faq
          title="Packages & pricing FAQs"
          items={packagesFaqs}
          className="bg-charcoal"
        />
      </main>
      <Footer />
    </>
  );
}
