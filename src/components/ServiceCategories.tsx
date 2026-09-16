import Link from "next/link";
import { Camera, Sun, Wifi, Zap, type LucideIcon } from "lucide-react";
import { serviceCategories } from "@/lib/data";
import { Container, Eyebrow } from "./ui";

const icons: Record<string, LucideIcon> = { Sun, Camera, Zap, Wifi };

export default function ServiceCategories() {
  return (
    <section className="border-t border-paper/10 bg-charcoal py-16 md:py-20">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>What we offer</Eyebrow>
          <h2 className="mt-3 font-display text-[22px] font-semibold text-paper sm:text-[26px]">
            Our Services
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {serviceCategories.map((item) => {
            const Icon = icons[item.icon];
            return (
              <Link
                key={item.label}
                href={item.href || "#"}
                className="group flex flex-col items-center text-center transition-all hover:scale-105"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors group-hover:border-gold/60 group-hover:bg-gold/20">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <p className="mt-3 text-[14px] font-semibold leading-snug text-paper/85 transition-colors group-hover:text-gold">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
