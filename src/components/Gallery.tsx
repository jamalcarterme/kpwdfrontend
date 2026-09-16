import Image from "next/image";
import { Container, Eyebrow } from "./ui";

const photos = [
  {
    src: "/images/hero-panels.jpg",
    alt: "Rooftop solar panel array overlooking the city skyline",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/inverter-room-deye-1.jpg",
    alt: "Deye hybrid inverters and battery bank installed in a plant room",
    span: "",
  },
  {
    src: "/images/installer-panel-1.jpg",
    alt: "NMC Technology technician installing a rooftop solar panel",
    span: "",
  },
  {
    src: "/images/inverter-room-growatt.jpg",
    alt: "Growatt inverter bank with distribution board wiring",
    span: "",
  },
  {
    src: "/images/panelboard-tech.jpg",
    alt: "Technician wiring a solar distribution and breaker panel",
    span: "",
  },
  {
    src: "/images/rooftop-panels-3.jpg",
    alt: "Solar panel installation on a commercial rooftop",
    span: "lg:col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="projects" className="bg-ink py-24 md:py-28">
      <Container>
        <div className="max-w-xl">
          <Eyebrow>Recent projects</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Real installations, by our own technicians
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            A look at homes and facilities we&apos;ve powered —
            from rooftop arrays to the plant rooms that keep them running.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[220px]">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`group relative aspect-square overflow-hidden rounded-2xl bg-charcoal lg:aspect-auto ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
