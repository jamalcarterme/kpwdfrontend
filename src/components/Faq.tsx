import { Container, Eyebrow } from "./ui";

export type FaqItem = { question: string; answer: string };

export default function Faq({
  title,
  intro,
  items,
  className = "bg-charcoal",
}: {
  title: string;
  intro?: string;
  items: FaqItem[];
  className?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className={`${className} py-24 md:py-28`}>
      <Container>
        <div className="max-w-xl">
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-[16px] leading-relaxed text-paper/70">{intro}</p>
          )}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-paper/10 bg-paper/[0.03] p-6 open:border-gold/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[17px] font-semibold text-paper">
                {item.question}
                <span className="shrink-0 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/65">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
