import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InfoSection from "@/components/InfoSection";
import Testimonials from "@/components/Testimonials";
import { reviewsInfo } from "@/lib/content";

export const metadata: Metadata = {
  title: "Client Reviews",
  description:
    "See what homes and businesses say about their solar installation experience with NMC Technology.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Testimonials />
        <InfoSection
          eyebrow="Feedback"
          title="What clients tell us matters most"
          blocks={reviewsInfo}
          className="bg-charcoal"
        />
      </main>
      <Footer />
    </>
  );
}
