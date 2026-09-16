import { brands } from "@/lib/data";
import { Container } from "./ui";

export default function TrustBar() {
  return (
    <div className="border-t border-paper/10 bg-ink py-8">
      <Container className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-paper/40">
          Equipment brands we install & support
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {brands.map((brand) => (
            <li
              key={brand}
              className="font-display text-[17px] font-semibold text-paper/70"
            >
              {brand}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
