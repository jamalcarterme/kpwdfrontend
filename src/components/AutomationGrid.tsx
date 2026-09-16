import Image from "next/image";
import { ClipboardCheck, Wrench, Zap } from "lucide-react";
import { Container, Eyebrow } from "./ui";

const items = [
  {
    title: "Smart Electrical Automation",
    text: "Transform conventional systems into intelligent, efficient electrical solutions with automated controls and protection.",
    image: "/images/panelboard-tech.jpg",
    icon: Zap,
  },
  {
    title: "Custom Solutions",
    text: "Integrated technology solutions tailored to your specific needs, budget, and space requirements.",
    image: "/images/breaker-board.jpg",
    icon: Wrench,
  },
  {
    title: "Professional Support",
    text: "Expert consultation, system assessment, maintenance, troubleshooting, and technical support after installation.",
    image: "/images/control-tech.jpg",
    icon: ClipboardCheck,
  },
];

export default function AutomationGrid() {
  return (
    <section className="border-t border-paper/10 bg-ink py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Intelligent automation</Eyebrow>
          <h2 className="balance mt-4 max-w-xl text-[30px] font-semibold uppercase tracking-tight text-paper sm:text-[36px]">
            Built To Run Without You Thinking About It
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="relative mx-auto h-44 w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <span className="mx-auto -mt-7 flex h-14 w-14 items-center justify-center rounded-full border-4 border-ink bg-gold text-ink">
                <item.icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <h3 className="font-display mt-4 text-[13px] font-semibold uppercase tracking-wide text-paper">
                {item.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-paper/65">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
