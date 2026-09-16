import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Container, Eyebrow } from "./ui";
import QuoteForm from "./QuoteForm";

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Eyebrow>Get in touch</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Let&apos;s find the right solution for you
          </h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-paper/70">
            Call, WhatsApp or send your details — we&apos;ll respond with
            a recommendation the same day.
          </p>

          <div className="mt-10 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Call or WhatsApp
                </p>
                <div className="mt-1 flex flex-col gap-0.5">
                  {site.phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={`tel:${phone.href}`}
                      className="text-[16px] font-medium text-paper hover:text-gold"
                    >
                      {phone.display}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Mail className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-[16px] font-medium text-paper hover:text-gold"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <MapPin className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Office
                </p>
                <p className="mt-1 max-w-xs text-[16px] font-medium leading-snug text-paper">
                  {site.address}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/12 text-gold">
                <Clock className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-wide text-paper/45">
                  Working hours
                </p>
                <p className="mt-1 text-[16px] font-medium text-paper">
                  Mon – Sat, 8:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-paper/10 bg-ink p-8 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)] md:p-10">
          <h3 className="font-display text-[20px] font-semibold text-paper">
            Request your free quote
          </h3>
          <p className="mt-2 text-[15px] text-paper/60">
            Tell us about your property and we&apos;ll recommend the right
            package.
          </p>
          <div className="mt-7">
            <QuoteForm compact />
          </div>
        </div>
      </Container>
    </section>
  );
}
