"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { site, waLink } from "@/lib/data";

export default function CtaBar() {
  return (
    <>
      <a
        href={waLink("Hi NMC Technology, I'd like to start a project.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-[68px] left-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.6)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" fill="white" strokeWidth={0} />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center gap-4 border-t border-paper/10 bg-paper px-4 py-3 text-center sm:gap-6">
        <p className="text-[13px] font-semibold text-ink sm:text-[15px]">
          Do you want to start a project with {site.name.split(" ")[0]}?
        </p>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[13px] font-semibold text-ink transition-colors hover:bg-gold-light"
        >
          Get Started
        </Link>
      </div>
    </>
  );
}
