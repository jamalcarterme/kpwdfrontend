import { Award, HeartHandshake, Target, Eye } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const items = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide reliable, innovative, and professional technology solutions that improve the way people power, protect, and automate their homes and businesses.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become a trusted technology and engineering brand recognized for quality, innovation, professionalism, and exceptional customer service.",
  },
  {
    icon: Award,
    title: "Quality Equipment",
    text: "We source and install proven, reliable equipment and solutions matched to your specific requirements and budget.",
  },
  {
    icon: HeartHandshake,
    title: "Lasting Support",
    text: "Our relationship doesn't end at handover — we remain available for maintenance, troubleshooting, upgrades and technical support.",
  },
];

export default function MissionGrid() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>What drives us</Eyebrow>
          <h2 className="balance mt-4 text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
            Mission &amp; Values
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <span className="flex h-24 w-24 items-center justify-center rounded-full border border-paper/25 text-paper">
                <item.icon className="h-8 w-8" strokeWidth={1.5} />
              </span>
              <h3 className="font-display mt-6 text-[15px] font-semibold uppercase tracking-wide text-paper">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
