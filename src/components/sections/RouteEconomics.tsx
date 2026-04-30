"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const scaleTable = [
  { capture: "1%", loads: "250", margin: "~$350K" },
  { capture: "5%", loads: "1,250", margin: "~$1.8M" },
  { capture: "10%", loads: "2,500", margin: "~$3.5M" },
  { capture: "20%", loads: "5,000", margin: "~$7.1M" },
];

const parties = [
  { label: "Apartment", sub: "gets paid for surplus water" },
  { label: "Vaha", sub: "earns the coordination margin" },
  { label: "Construction site", sub: "buys cheaper non-potable water" },
];

// target widths as percentages
const barSegments = [
  { pct: 10, bg: "bg-[#F4F1EB] border border-[#0B0D0C]/20", label: "Apartment gets: Rs 120 / load" },
  { pct: 60, bg: "bg-[#6A6A58]/20", label: "Logistics: Rs 700–740 / load" },
  { pct: 30, bg: "bg-[#0B0D0C]", label: "Vaha gross margin: ~Rs 360 / load" },
];

export default function RouteEconomics() {
  const sectionRef = useRef<HTMLElement>(null);
  const segRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(".re-headline", { opacity: 0, y: 18 });
      gsap.set(".re-parties", { opacity: 0, y: 16 });
      gsap.set(".re-bar-label", { opacity: 0, y: 6 });
      gsap.set(".re-table", { opacity: 0, x: 20 });

      // Set bar segments to zero width
      segRefs.current.forEach((el) => {
        if (el) gsap.set(el, { width: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".re-headline", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".re-parties", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.05")
        .to(".re-table", { opacity: 1, x: 0, duration: 0.65, ease: "power3.out" }, "-=0.3");

      // Animate bar segments after parties
      segRefs.current.forEach((el, i) => {
        if (!el) return;
        tl.to(
          el,
          {
            width: `${barSegments[i].pct}%`,
            duration: 0.55,
            ease: "power2.inOut",
          },
          i === 0 ? "-=0.3" : "-=0.35"
        );
      });

      tl.to(".re-bar-label", {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.07,
      }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        <h2
          className="re-headline text-[#0B0D0C] leading-[1.1] mb-14 max-w-[600px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Repeatable local routes create a scalable business.
        </h2>

        {/* Three parties */}
        <div className="re-parties grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-0 mb-16 border border-[#0B0D0C]/12">
          {parties.map(({ label, sub }, i) => (
            <div key={label} className="contents">
              <div className="px-8 py-6 text-center">
                <div
                  className="text-[#0B0D0C] mb-1"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {label}
                </div>
                <div className="text-[#6A6A58] text-xs">{sub}</div>
              </div>
              {i < parties.length - 1 && (
                <div className="hidden md:block bg-[#0B0D0C]/12 w-px self-stretch" />
              )}
            </div>
          ))}
        </div>

        {/* Two-column: bar + table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left: stacked bar */}
          <div>
            <div
              className="text-xs text-[#6A6A58] uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              One 12,000L load
            </div>
            <div
              className="text-xs text-[#6A6A58] mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Site pays: Rs 1,200 / load
            </div>

            {/* Bar — overflow hidden so segments reveal L→R */}
            <div className="flex w-full h-14 mb-5 overflow-hidden">
              {barSegments.map(({ bg }, i) => (
                <div
                  key={i}
                  ref={(el) => { segRefs.current[i] = el; }}
                  className={`h-full ${bg}`}
                  style={{ width: 0, flexShrink: 0 }}
                />
              ))}
            </div>

            {/* Legend */}
            <div className="space-y-2.5">
              {barSegments.map(({ bg, label }) => (
                <div key={label} className="re-bar-label flex items-center gap-3">
                  <span className={`w-3 h-3 shrink-0 ${bg}`} />
                  <span
                    className="text-[11px] text-[#6A6A58]"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: scale table */}
          <div className="re-table">
            <div
              className="text-xs text-[#6A6A58] uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              What scale looks like
            </div>

            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#0B0D0C]/12">
                  {["Market capture", "Loads / day", "Annual gross margin"].map((h) => (
                    <th
                      key={h}
                      className="text-left text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] pb-3 pr-6 font-normal last:pr-0"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scaleTable.map(({ capture, loads, margin }, i) => (
                  <tr key={capture} className="border-b border-[#0B0D0C]/8 last:border-0">
                    <td
                      className="py-3 pr-6 text-[13px] text-[#0B0D0C] tabular-nums"
                      style={{ fontFamily: "var(--font-dm-mono)", fontWeight: i === 0 ? 500 : 400 }}
                    >
                      {capture}
                    </td>
                    <td
                      className="py-3 pr-6 text-[13px] text-[#6A6A58] tabular-nums"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {loads}
                    </td>
                    <td
                      className="py-3 text-[13px] text-[#0B0D0C] tabular-nums"
                      style={{ fontFamily: "var(--font-dm-mono)", fontWeight: 500 }}
                    >
                      {margin}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              className="mt-4 text-[10px] text-[#6A6A58]/60 leading-relaxed"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Annual gross margin before overhead. Based on 300 MLD apartment surplus market, Rs 360 / load midpoint.
            </p>
          </div>

        </div>

        {/* Closing */}
        <p
          className="mt-16 pt-10 border-t border-[#0B0D0C]/12 text-[#6A6A58] text-sm leading-relaxed max-w-[560px]"
        >
          The first corridor proves the route model. Bengaluru scales it.
        </p>

      </div>
    </section>
  );
}
