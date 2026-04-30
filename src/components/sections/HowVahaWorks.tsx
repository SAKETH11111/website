"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const qualityParams = [
  { param: "pH", value: "7.1", range: "(6.5–8.5)" },
  { param: "BOD (mg/L)", value: "4.6", range: "(<6)" },
  { param: "COD (mg/L)", value: "19.2", range: "(<25)" },
  { param: "TSS (mg/L)", value: "12.2", range: "(<20)" },
  { param: "Fecal col.", value: "<D", range: "(<100)" },
];

const steps = [
  { n: "01", label: "Match", body: "Apartment source to nearby construction buyer." },
  { n: "02", label: "Verify", body: "Water Acceptance Pack issued before every dispatch." },
  { n: "03", label: "Deliver", body: "Existing tankers move water into existing site workflows." },
];

export default function HowVahaWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".hvw-headline", { opacity: 0, y: 20 });
      gsap.set(".hvw-step", { opacity: 0, x: -20 });
      gsap.set(".hvw-wap", { opacity: 0, x: 40 });
      gsap.set(".hvw-closing", { opacity: 0, y: 14 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".hvw-headline", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".hvw-step", {
          opacity: 1,
          x: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.1,
        }, "+=0.05")
        .to(".hvw-wap", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.5")
        .to(".hvw-closing", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="how"
      ref={sectionRef}
      className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        <h2
          className="hvw-headline text-[#0B0D0C] leading-[1.1] mb-16 max-w-[680px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Vaha turns surplus STP water into a verified local supply loop.
        </h2>

        {/* Two-column: steps + WAP card */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

          {/* Left: steps */}
          <div className="flex flex-col gap-0 border-t border-[#0B0D0C]/12">
            {steps.map(({ n, label, body }) => (
              <div
                key={n}
                className="hvw-step py-8 border-b border-[#0B0D0C]/12 grid grid-cols-[3rem_1fr] gap-4"
              >
                <span
                  className="text-[11px] tabular-nums text-[#6A6A58] pt-0.5"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {n}
                </span>
                <div>
                  <div
                    className="text-xs tracking-[0.16em] uppercase text-[#0B0D0C] mb-2"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                  >
                    {label}
                  </div>
                  <p className="text-[#6A6A58] text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}

            <p className="hvw-closing text-[#6A6A58] text-sm leading-relaxed pt-8 max-w-[420px]">
              Every core piece already exists. Vaha makes the route trusted and repeatable.
            </p>
          </div>

          {/* Right: WAP card */}
          <div
            className="hvw-wap border border-[#0B0D0C] bg-white"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            {/* WAP Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start px-7 py-5 border-b border-[#0B0D0C]/15 gap-1.5">
              <span className="text-[11px] tracking-[0.18em] uppercase text-[#0B0D0C] font-medium">
                Water Acceptance Pack
              </span>
              <span className="text-[11px] text-[#6A6A58]">WMP-25-05-1902</span>
            </div>

            {/* Source / Destination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-7 py-5 border-b border-[#0B0D0C]/10">
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-1.5">Source</div>
                <div className="text-[13px] text-[#0B0D0C]">Prestige Lake Ridge STP</div>
                <div className="text-[12px] text-[#6A6A58]">Bengaluru, KA</div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-1.5">Destination</div>
                <div className="text-[13px] text-[#0B0D0C]">Construction Site — North Gate</div>
                <div className="text-[12px] text-[#6A6A58]">Bengaluru, KA</div>
              </div>
            </div>

            {/* Dispatch details */}
            <div className="px-7 py-5 border-b border-[#0B0D0C]/10">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-3">Dispatch Details</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3">
                {[
                  ["Date", "17 May 2025"],
                  ["Time", "06:45 AM"],
                  ["Vehicle", "KA 05 AB 1234"],
                  ["Tanker", "TN-08"],
                ].map(([key, val]) => (
                  <div key={key}>
                    <div className="text-[10px] text-[#6A6A58] mb-0.5">{key}</div>
                    <div className="text-[12px] text-[#0B0D0C]">{val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality table */}
            <div className="px-7 py-5 border-b border-[#0B0D0C]/10">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-3">Water Quality (Test)</div>
              <table className="w-full text-[12px]">
                <tbody>
                  {qualityParams.map(({ param, value, range }) => (
                    <tr key={param} className="border-b border-[#0B0D0C]/6 last:border-0">
                      <td className="py-1.5 text-[#6A6A58] w-[130px]">{param}</td>
                      <td className="py-1.5 text-[#0B0D0C] w-[70px] tabular-nums">{value}</td>
                      <td className="py-1.5 text-[#6A6A58]/55">{range}</td>
                      <td className="py-1.5 text-right">
                        <span style={{ color: "#1A5C3C", fontWeight: 600 }}>✓</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Approved by */}
            <div className="px-7 py-5">
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-2">Approved by (QMS)</div>
              <div className="text-[12px] text-[#0B0D0C]">Rudaiba Tarannum</div>
              <div className="text-[11px] text-[#6A6A58]">2 May 2025, 11:30 AM</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
