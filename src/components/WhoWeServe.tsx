import { Container, Eyebrow } from "./ui";

const segments = [
  {
    title: "Residential",
    text: "Reliable power, security, and smart automation solutions for modern homes.",
  },
  {
    title: "Commercial",
    text: "Professional energy, security, and automation systems for offices and businesses.",
  },
  {
    title: "Industrial",
    text: "Engineered electrical and energy solutions designed for demanding applications.",
  },
  {
    title: "Property Developers",
    text: "Integrated technology solutions for estates, apartments, and modern developments.",
  },
];

export default function WhoWeServe() {
  return (
    <section className="bg-charcoal py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Who we serve</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Who We Serve
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((segment) => (
            <div key={segment.title} className="text-center sm:text-left">
              <h3 className="font-display text-[18px] font-semibold text-paper">
                {segment.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                {segment.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
