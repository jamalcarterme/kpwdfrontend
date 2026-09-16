"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BatteryFull, Check, SunMedium, Timer } from "lucide-react";
import { packageGroups, waLink } from "@/lib/data";
import { Container, Eyebrow, formatNaira } from "./ui";

export default function Packages() {
  const [active, setActive] = useState(packageGroups[0].id);
  const group = packageGroups.find((g) => g.id === active) ?? packageGroups[0];

  return (
    <section id="packages" className="bg-ink py-24 md:py-28">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Packages & pricing</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Transparent solar packages, sized by capacity
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/60">
            Pick your inverter capacity to compare battery size, panel count
            and what each tier can comfortably power. Every price includes
            supply and professional installation.
          </p>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {packageGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[14px] font-semibold transition-colors ${
                active === g.id
                  ? "border-gold bg-gold text-ink"
                  : "border-paper/15 text-paper/60 hover:border-paper/35 hover:text-paper"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="mt-6 text-[14px] font-medium text-gold">{group.suitability}</p>

            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {group.tiers.map((tier, i) => {
                const popular = group.tiers.length === 3 && i === 1;
                return (
                  <div
                    key={`${tier.kva}-${tier.price}`}
                    className={`relative flex flex-col rounded-2xl border p-7 ${
                      popular
                        ? "border-gold bg-gradient-to-b from-gold/[0.08] to-transparent"
                        : "border-paper/12 bg-paper/[0.03]"
                    }`}
                  >
                    {popular && (
                      <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-ink">
                        Most chosen
                      </span>
                    )}
                    <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                      {tier.kva} Inverter System
                    </p>
                    <p className="font-display mt-3 text-[30px] font-semibold text-paper">
                      {formatNaira(tier.price)}
                    </p>

                    <ul className="mt-6 flex flex-col gap-3 text-[14px] text-paper/70">
                      <li className="flex items-start gap-2.5">
                        <BatteryFull className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {tier.battery}
                      </li>
                      <li className="flex items-start gap-2.5">
                        <SunMedium className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {tier.panels}
                      </li>
                      <li className="flex items-start gap-2.5">
                        <Timer className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {tier.backup} battery backup
                      </li>
                    </ul>

                    <div className="mt-6 border-t border-paper/10 pt-5">
                      <p className="text-[13px] font-semibold text-paper/45">Runs comfortably:</p>
                      <p className="mt-2 flex items-start gap-2.5 text-[14px] leading-relaxed text-paper/70">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {tier.load}
                      </p>
                    </div>

                    <a
                      href={waLink(
                        `Hi NMC Technology, I'm interested in the ${tier.kva} package at ${formatNaira(
                          tier.price
                        )}. Please share more details.`
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-[14px] font-semibold transition-colors ${
                        popular
                          ? "bg-gold text-ink hover:bg-gold-light"
                          : "border border-paper/20 text-paper hover:border-paper/45"
                      }`}
                    >
                      Get this package
                    </a>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-8 text-center text-[13px] text-paper/40">
          Prices reflect current equipment costs and may be revised without prior notice. Final quote confirmed after a free site survey.
        </p>

        <p className="mt-6 text-center text-[15px] text-paper/70">
          Need something custom that isn&apos;t here?{" "}
          <a
            href={waLink(
              "Hi NMC Technology, I need a custom solar package that isn't in your listed options. Can you help?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold underline decoration-gold/40 underline-offset-4 hover:text-gold-light"
          >
            Chat with us on WhatsApp
          </a>
        </p>
      </Container>
    </section>
  );
}
