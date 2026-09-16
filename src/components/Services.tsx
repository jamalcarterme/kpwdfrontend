"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BatteryCharging,
  Building2,
  ClipboardCheck,
  Lightbulb,
  Home,
  Wrench,
  Zap,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

const icons: Record<string, LucideIcon> = {
  Home,
  Camera: Building2,
  BatteryCharging,
  Lightbulb,
  Wrench,
  ClipboardCheck,
  Zap,
  Wifi,
};

export default function Services() {
  return (
    <section id="services" className="bg-ink py-24 md:py-28">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>What we do</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Comprehensive technology and engineering solutions
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            We design and install solutions tailored to your specific needs.
            Whether power, security, automation, or integration, we handle the full scope of work from consultation to long-term support.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -80px 0px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              >
                {service.href ? (
                  <Link
                    href={service.href}
                    className="group overflow-hidden rounded-2xl border border-paper/10 bg-charcoal transition-colors hover:border-gold/40 h-full flex flex-col cursor-pointer"
                  >
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                      <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ink/80 text-gold backdrop-blur-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <div className="p-7 pt-5 flex-grow">
                      <h3 className="font-display text-[19px] font-semibold text-paper">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                        {service.description}
                      </p>
                    </div>
                  </Link>
                ) : (
                  <div className="group overflow-hidden rounded-2xl border border-paper/10 bg-charcoal transition-colors hover:border-gold/40 h-full flex flex-col">
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                      <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-ink/80 text-gold backdrop-blur-sm">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <div className="p-7 pt-5 flex-grow">
                      <h3 className="font-display text-[19px] font-semibold text-paper">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                        {service.description}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
