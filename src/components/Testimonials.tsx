"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ink py-24 md:py-28">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Client reviews</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Trusted by the homes and businesses we power
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((review, i) => (
            <motion.figure
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-paper/12 bg-paper/[0.03] p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-gold" />
                ))}
              </div>
              <blockquote className="mt-5 text-[17px] leading-relaxed text-paper/85">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[14px] font-semibold text-paper/50">
                {review.name} · Google Review
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
