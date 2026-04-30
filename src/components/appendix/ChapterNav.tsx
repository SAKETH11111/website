"use client";

import { useEffect, useState } from "react";
import { FileDown, FileText } from "lucide-react";

const chapters = [
  { label: "Market Gap", href: "#market-gap" },
  { label: "Why Now", href: "#why-now" },
  { label: "The Problem", href: "#problem" },
  { label: "Vaha", href: "#what-vaha-does" },
  { label: "Economics", href: "#economics" },
  { label: "Validation", href: "#validation" },
  { label: "Pilot", href: "#pilot" },
  { label: "Risk", href: "#risk" },
  { label: "Sources", href: "#sources" },
];

export default function ChapterNav() {
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
      const sectionEls = chapters
        .map((c) => ({
          id: c.href.replace("#", ""),
          el: document.getElementById(c.href.replace("#", "")),
        }))
        .filter((c) => c.el);

      let current = "";
      for (const { id, el } of sectionEls) {
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-16 z-40 border-b border-[#0B0D0C]/10 bg-[#F4F1EB]/90 backdrop-blur-md transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div className="flex items-center justify-between gap-4 overflow-x-auto py-3 scrollbar-hide">
          {/* Chapter links */}
          <div className="flex items-center gap-1 shrink-0">
            {chapters.map((c) => {
              const id = c.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={c.href}
                  href={c.href}
                  className={`whitespace-nowrap px-3 py-1.5 text-[10px] uppercase tracking-[0.16em] transition-all ${
                    isActive
                      ? "bg-[#0B0D0C] text-[#F4F1EB]"
                      : "text-[#6A6A58] hover:text-[#0B0D0C]"
                  }`}
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {c.label}
                </a>
              );
            })}
          </div>

          {/* Downloads */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="/vaha_judge_appendix%20(1).pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#0B0D0C]/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#6A6A58] transition-colors hover:border-[#0B0D0C]/30 hover:text-[#0B0D0C]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <FileDown size={11} />
              PDF
            </a>
            <a
              href="/Vaha%20-%20earthshot.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border border-[#0B0D0C]/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-[#6A6A58] transition-colors hover:border-[#0B0D0C]/30 hover:text-[#0B0D0C]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              <FileText size={11} />
              Deck
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
