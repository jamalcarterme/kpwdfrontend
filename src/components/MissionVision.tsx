import { Container, Eyebrow } from "./ui";

export default function MissionVision() {
  return (
    <section className="bg-ink py-24 md:py-28">
      <Container className="grid gap-14 md:grid-cols-2">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="balance mt-4 text-[28px] font-semibold leading-tight text-paper sm:text-[32px]">
            Our Mission
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            To provide reliable, innovative, and professional technology solutions that improve the way people power, protect, and automate their homes and businesses.
          </p>
        </div>
        <div>
          <Eyebrow>Our vision</Eyebrow>
          <h2 className="balance mt-4 text-[28px] font-semibold leading-tight text-paper sm:text-[32px]">
            Our Vision
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-paper/70">
            To become a trusted technology and engineering brand recognized for quality, innovation, professionalism, and exceptional customer service.
          </p>
        </div>
      </Container>
    </section>
  );
}
