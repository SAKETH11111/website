"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F4F1EB]/90 backdrop-blur-md border-b border-black/8"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between h-16">

          {/* Wordmark */}
          <Link
            href="/#hero"
            className={`text-sm tracking-[0.18em] uppercase transition-colors ${
              scrolled ? "text-[#0B0D0C]" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            VAHA
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Appendix", href: "/appendix" },
              { label: "Pilot", href: "/pilot" },
              { label: "Contact", href: "/contact" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className={`text-xs tracking-widest uppercase font-medium transition-colors ${
                  scrolled
                    ? "text-[#6A6A58] hover:text-[#0B0D0C]"
                    : "text-white/60 hover:text-white"
                }`}
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className={`text-base tracking-widest uppercase px-4 py-2 border transition-colors ${
              scrolled
                ? "border-[#0B0D0C]/20 text-[#0B0D0C] hover:bg-[#0B0D0C] hover:text-[#F4F1EB]"
                : "border-white/25 text-white hover:bg-white/10"
            }`}
            style={{ fontFamily: "var(--font-pixel)" }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
