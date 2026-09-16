"use client";

import { motion } from "framer-motion";
import { process, waLink } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

export default function Process() {
  return (
    <section className="bg-charcoal py-24 md:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-lg">
            <Eyebrow>Our approach</Eyebrow>
            <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
              From consultation to complete support
            </h2>
          </div>
          <a
            href={waLink("Hi NMC Technology, I'd like to learn more about your services.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-full bg-gold px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pl-0"
            >
              <div className="flex items-center gap-4">
                <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-paper/20 text-[16px] font-semibold text-paper">
                  {i + 1}
                </span>
                {i < process.length - 1 && (
                  <span className="hidden h-px flex-1 bg-paper/15 lg:block" />
                )}
              </div>
              <h3 className="font-display mt-5 text-[18px] font-semibold text-paper">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-paper/65">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
