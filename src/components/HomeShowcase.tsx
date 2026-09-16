"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { services } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

export default function HomeShowcase() {
  const slides = useMemo(() => chunk(services, 2), []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="border-t border-paper/10 bg-ink py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
            Manage Every Part of Your Property
          </h2>
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/65">
            From backup power to security and automation, our technicians handle the full scope of work — designed, installed and supported by one team.
          </p>
        </div>

        <div className="mt-14 min-h-[420px] sm:min-h-[440px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid gap-8 sm:grid-cols-2"
            >
              {slide.map((service) => (
                <div key={service.title}>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-paper/10 sm:h-72">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display mt-6 text-[20px] font-semibold text-paper">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                    {service.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2.5">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-7 bg-gold" : "w-2.5 bg-paper/25 hover:bg-paper/40"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold/10"
          >
            View All Services
          </Link>
        </div>
      </Container>
    </section>
  );
}
