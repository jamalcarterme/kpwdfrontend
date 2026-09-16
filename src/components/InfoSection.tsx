import { Container, Eyebrow } from "./ui";

export type InfoBlock = { heading: string; paragraphs: string[]; list?: string[] };

export default function InfoSection({
  eyebrow,
  title,
  intro,
  blocks,
  className = "bg-ink",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  blocks: InfoBlock[];
  className?: string;
}) {
  return (
    <section className={`${className} py-24 md:py-28`}>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="balance mt-4 text-[32px] font-semibold leading-tight text-paper sm:text-[38px]">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-[16px] leading-relaxed text-paper/70">{intro}</p>
          )}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-x-12">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h3 className="font-display text-[19px] font-semibold text-paper">
                {block.heading}
              </h3>
              {block.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="mt-3 text-[15px] leading-relaxed text-paper/65"
                >
                  {p}
                </p>
              ))}
              {block.list && (
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {block.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[15px] leading-relaxed text-paper/65"
                    >
                      <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
