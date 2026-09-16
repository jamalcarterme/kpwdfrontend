"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import { Container } from "./ui";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink/95 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 ${
        scrolled || open
          ? "lg:bg-ink/95 lg:backdrop-blur-md lg:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "lg:bg-transparent lg:shadow-none lg:backdrop-blur-0"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-mark.png"
            alt={`${site.name} logo`}
            width={112}
            height={112}
            className="h-12 w-12 shrink-0 drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)] sm:h-14 sm:w-14"
            priority
          />
          <span className="font-display text-lg font-semibold leading-tight text-paper sm:text-xl">
            NMC <span className="text-gold">Technology</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-paper/80 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${site.phones[0].href}`}
            className="flex items-center gap-2 text-[15px] font-semibold text-paper/90 hover:text-gold"
          >
            <Phone className="h-4 w-4 text-gold" />
            {site.phones[0].display}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:bg-gold-light"
          >
            Get Free Quote
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-paper/20 text-paper lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-paper/10 bg-ink lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[16px] font-medium text-paper/85 hover:bg-paper/5 hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={`tel:${site.phones[0].href}`}
                className="mt-2 flex items-center gap-2 px-3 py-2 text-[15px] font-semibold text-paper/90"
              >
                <Phone className="h-4 w-4 text-gold" /> {site.phones[0].display}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gold px-5 py-3 text-[15px] font-semibold text-ink"
              >
                Get Free Quote
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
