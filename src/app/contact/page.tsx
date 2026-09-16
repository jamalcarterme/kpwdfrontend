import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import PageHero from "@/components/PageHero";
import { Container } from "@/components/ui";
import { contactFaqs, contactInfo } from "@/lib/content";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Call, WhatsApp or send your details to NMC Technology for a free solar site survey and quote.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/control-tech.jpg"
          eyebrow="Get in touch"
          title="Our Contacts"
        >
          <a
            href={`tel:${site.phones[0].href}`}
            className="mt-6 inline-flex items-center gap-2.5 text-[16px] font-semibold text-paper hover:text-gold"
          >
            Click to Call: {site.phones[0].display}
          </a>
        </PageHero>

        <div className="bg-ink">
          <Container className="py-16 md:py-20">
            <div className="overflow-hidden rounded-2xl border border-paper/10">
              <iframe
                title="NMC Technology location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                width="100%"
                height="360"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Container>
        </div>

        <Contact />
        <InfoSection
          eyebrow="Before you reach out"
          title="Get the fastest, most accurate response"
          blocks={contactInfo}
          className="bg-ink"
        />
        <Faq title="Contact FAQs" items={contactFaqs} className="bg-charcoal" />
      </main>
      <Footer />
    </>
  );
}
