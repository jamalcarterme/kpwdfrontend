import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-wide text-gold">
      <span className="h-[6px] w-[6px] rounded-full bg-gold" />
      {children}
    </span>
  );
}

export function PrimaryLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-light active:bg-gold-dark ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}) {
  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <Link
      href={href}
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-current/25 px-6 py-3.5 text-[15px] font-semibold transition-colors hover:border-current/50 ${className}`}
    >
      {children}
    </Link>
  );
}

export function formatNaira(value: number) {
  return `₦${value.toLocaleString("en-NG")}`;
}
