import Link from "next/link";
import { BatteryCharging, Building2, SunMedium, Zap } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const tiers = [
  { label: "3.5KVA – 5KVA", note: "1–3 bedroom apartments", icon: BatteryCharging },
  { label: "10KVA – 12KVA", note: "3–4 bedroom homes", icon: SunMedium },
  { label: "15KVA – 24KVA", note: "Full off-grid independence", icon: Zap },
  { label: "30KVA & Custom", note: "Estates & commercial sites", icon: Building2 },
];

export default function PackagesTeaser() {
  return (
    <section className="border-t border-paper/10 bg-charcoal py-24 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Packages &amp; pricing</Eyebrow>
        <h2 className="balance mt-4 max-w-xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
          Solar Packages For Every Property
        </h2>
        <p className="mt-4 max-w-lg text-[16px] leading-relaxed text-paper/65">
          Every tier includes the inverter, battery, panels and professional installation. Compare capacity, backup time and pricing on the packages page.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.label} className="flex flex-col items-center gap-3">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <tier.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-paper">
                {tier.label}
              </p>
              <p className="text-[13px] text-paper/55">{tier.note}</p>
            </div>
          ))}
        </div>

        <Link
          href="/packages"
          className="mt-14 inline-flex items-center justify-center rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold uppercase tracking-wide text-ink transition-colors hover:bg-gold-light"
        >
          See Package Details
        </Link>
      </Container>
    </section>
  );
}
