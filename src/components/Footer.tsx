import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, PhoneCall } from "lucide-react";
import { nav, site, waLink } from "@/lib/data";
import { Container } from "./ui";
import TikTokIcon from "./TikTokIcon";

const serviceLinks = [
  { label: "Solar Power Installation", href: "/services/solar" },
  { label: "CCTV Camera Installation", href: "/services/cctv" },
  { label: "Smart Electrical Automation", href: "/services/automation" },
  { label: "Smart Home Automation", href: "/services/smart-home" },
];

export default function Footer() {
  return (
    <footer className="footer-glow relative overflow-hidden bg-ink pb-24 pt-20 md:pb-20">
      <Container className="relative grid gap-12 border-b border-paper/10 pb-16 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo-mark.png"
              alt={`${site.name} logo`}
              width={112}
              height={112}
              className="h-14 w-14 shrink-0"
            />
            <span className="font-display text-xl font-semibold text-paper">
              NMC <span className="text-gold">Technology</span>
            </span>
          </Link>
          <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-paper/55">
            {site.tagline}. Innovative electrical, solar, security, and automation solutions for homes and businesses, wherever you are.
          </p>
          <a
            href={waLink("Hi NMC Technology, I'd like to speak with your team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-[14px] font-semibold text-ink hover:bg-gold-light"
          >
            <PhoneCall className="h-4 w-4" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/70">
            Explore
          </p>
          <span className="mt-2 block h-[2px] w-8 bg-gold" />
          <ul className="mt-5 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[15px] text-paper/65 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/70">
            Services
          </p>
          <span className="mt-2 block h-[2px] w-8 bg-gold" />
          <ul className="mt-5 flex flex-col gap-3">
            {serviceLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[15px] text-paper/65 hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/70">
            Contact
          </p>
          <span className="mt-2 block h-[2px] w-8 bg-gold" />
          <ul className="mt-5 flex flex-col gap-3 text-[15px] text-paper/65">
            {site.phones.map((phone) => (
              <li key={phone.href} className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                <a href={`tel:${phone.href}`} className="hover:text-gold">
                  {phone.display}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
              <span className="max-w-[220px] text-paper/55">{site.address}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <TikTokIcon className="h-4 w-4 shrink-0 text-gold" />
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                TikTok @nmc_solar.ng_1
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 py-8 text-[13px] text-paper/40 sm:flex-row">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Technology & engineering solutions for homes and businesses.</p>
      </Container>
    </footer>
  );
}
