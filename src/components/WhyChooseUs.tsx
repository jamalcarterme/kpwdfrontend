import { Container, Eyebrow } from "./ui";

const reasons = [
  {
    title: "Professional Expertise",
    text: "We approach every project with technical knowledge, proper planning, and attention to detail.",
  },
  {
    title: "Quality Products",
    text: "We prioritize reliable and quality equipment designed to deliver dependable performance.",
  },
  {
    title: "Customized Solutions",
    text: "Every project is different. We design our systems according to the client's needs, budget, and available space.",
  },
  {
    title: "Safety First",
    text: "From protective devices to proper earthing and installation practices, safety is a key part of every project we undertake.",
  },
  {
    title: "Clean Installation",
    text: "We believe a professional installation should not only work properly but also look neat, organized, and professional.",
  },
  {
    title: "Customer Satisfaction",
    text: "Our goal is to build lasting relationships with our clients by delivering quality work and dependable service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-charcoal py-24 md:py-28">
      <Container>
        <div className="flex flex-col items-center text-center">
          <Eyebrow>Why choose us</Eyebrow>
          <h2 className="balance mt-4 max-w-2xl text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            Why Choose NMC Technology?
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="rounded-2xl border border-paper/10 bg-ink p-7">
              <h3 className="font-display text-[18px] font-semibold text-paper">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-paper/65">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
