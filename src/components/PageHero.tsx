import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "./ui";

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="hero-chevron-cut relative flex min-h-[440px] items-center justify-center overflow-hidden bg-ink pb-24 pt-32 text-center sm:min-h-[500px] md:pt-40">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/70" />
      <Container className="relative flex flex-col items-center">
        {eyebrow && (
          <p className="text-[13px] font-semibold uppercase tracking-widest text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="balance mt-3 max-w-2xl text-[34px] font-bold uppercase leading-[1.15] tracking-tight text-paper sm:text-[44px]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-paper/80">
            {subtitle}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
