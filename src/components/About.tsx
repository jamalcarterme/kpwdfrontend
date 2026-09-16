"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, HeartHandshake, Users } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const points = [
  {
    icon: Users,
    title: "Professional installation team",
    text: "Every project is executed by our own trained technicians with expertise across all four service categories — never outsourced.",
  },
  {
    icon: Award,
    title: "Quality equipment and products",
    text: "We source and install proven, reliable equipment and solutions matched to your specific requirements and budget.",
  },
  {
    icon: HeartHandshake,
    title: "Lasting support and service",
    text: "Our relationship doesn't end at handover — we remain available for maintenance, troubleshooting, upgrades and technical support.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/team-photo.jpg"
            alt="The NMC Technology professional team"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div>
          <Eyebrow>About NMC Technology</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Engineering Technology. Powering Possibilities.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-paper/70">
            NMC Technology is a professional technology and engineering company focused on delivering reliable, innovative, and quality solutions for residential, commercial, and industrial clients. We specialize in solar power systems, CCTV security systems, smart electrical automation, and smart home automation. Our approach combines engineering expertise, quality equipment, proper system design, and professional installation to deliver solutions built for performance, safety, and long-term reliability.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {points.map((point) => (
              <div key={point.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper">
                  <point.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-paper">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-paper/65">
                    {point.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
