"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Appendix", href: "/appendix" },
  { label: "Pilot", href: "/pilot" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / scroll
  useEffect(() => {
    if (menuOpen) setMenuOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  return (
    <>
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

            {/* Desktop nav links */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map(({ label, href }) => (
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

            <div className="flex items-center gap-2">
              {/* CTA — desktop only */}
              <Link
                href="/contact"
                className={`hidden md:inline-flex text-base tracking-widest uppercase px-4 py-2 border transition-colors ${
                  scrolled
                    ? "border-[#0B0D0C]/20 text-[#0B0D0C] hover:bg-[#0B0D0C] hover:text-[#F4F1EB]"
                    : "border-white/25 text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                Get in touch
              </Link>

              {/* Hamburger — mobile only */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden p-2 -mr-1 transition-colors ${
                  scrolled ? "text-[#0B0D0C]" : "text-white"
                }`}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "visible" : "invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[#060908] border-b border-white/10 transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <div className="px-6 py-5 flex flex-col">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-4 text-sm tracking-widest uppercase text-white/70 hover:text-white transition-colors border-b border-white/8 last:border-0"
                style={{ fontFamily: "var(--font-pixel)" }}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 py-4 text-center text-sm tracking-widest uppercase bg-white text-[#060908] font-medium"
              style={{ fontFamily: "var(--font-pixel)" }}
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
