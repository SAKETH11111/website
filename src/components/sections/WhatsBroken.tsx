"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const gaps = [
  "No logistics layer",
  "No trusted quality handoff",
  "No market maker",
];

const LINE_LENGTH = 800;

export default function WhatsBroken() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(".wb-headline", { opacity: 0, y: 20 });
      gsap.set(".wb-block", { opacity: 0, scale: 0.96 });
      gsap.set(".wb-verdict", { opacity: 0, y: 16 });

      // Set up SVG line draw
      lineRefs.current.forEach((line) => {
        if (!line) return;
        gsap.set(line, {
          strokeDasharray: LINE_LENGTH,
          strokeDashoffset: LINE_LENGTH,
        });
      });
      gsap.set(labelRefs.current.filter(Boolean), { opacity: 0, y: 6 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".wb-headline", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".wb-block", {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.15,
        }, "+=0.1")
        .to(
          lineRefs.current.filter(Boolean),
          {
            strokeDashoffset: 0,
            duration: 0.7,
            ease: "power2.inOut",
            stagger: 0.12,
          },
          "-=0.3"
        )
        .to(
          labelRefs.current.filter(Boolean),
          { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", stagger: 0.1 },
          "-=0.4"
        )
        .to(".wb-verdict", { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "+=0.1");
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
          className="wb-headline text-[#0B0D0C] leading-[1.1] mb-20 max-w-[780px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          The water problem is not treatment. It is trust, transport, and coordination.
        </h2>

        {/* Desktop diagram */}
        <div className="hidden md:block mb-16">
          <div className="relative flex items-center">
            {/* SUPPLY block */}
            <div className="wb-block shrink-0 w-[148px] h-[100px] bg-[#0B0D0C] flex flex-col items-center justify-center z-10">
              <span
                className="text-white text-[11px] tracking-[0.18em] uppercase mb-1.5"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Supply
              </span>
              <span className="text-white/40 text-[10px]">Treated water exists</span>
            </div>

            {/* SVG lines with labels */}
            <div className="flex-1 relative" style={{ height: 100 }}>
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 800 100"
              >
                {gaps.map((_, i) => {
                  const y = 20 + i * 30;
                  return (
                    <line
                      key={i}
                      ref={(el) => { lineRefs.current[i] = el; }}
                      x1="0"
                      y1={y}
                      x2="800"
                      y2={y}
                      stroke="#0B0D0C"
                      strokeWidth="1.5"
                      strokeDasharray="6 5"
                      strokeOpacity="0.22"
                    />
                  );
                })}
              </svg>
              {/* Labels */}
              <div className="absolute inset-0 flex flex-col justify-around py-[10px] px-8">
                {gaps.map((gap, i) => (
                  <div key={gap} className="flex justify-center">
                    <span
                      ref={(el) => { labelRefs.current[i] = el; }}
                      className="text-[11px] text-[#6A6A58] bg-[#F4F1EB] px-2"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {gap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DEMAND block */}
            <div className="wb-block shrink-0 w-[148px] h-[100px] bg-[#0B0D0C] flex flex-col items-center justify-center z-10">
              <span
                className="text-white text-[11px] tracking-[0.18em] uppercase mb-1.5"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Demand
              </span>
              <span className="text-white/40 text-[10px]">Real need exists</span>
            </div>
          </div>
        </div>

        {/* Mobile diagram */}
        <div className="md:hidden flex flex-col items-center gap-0 mb-16">
          <div className="wb-block w-full max-w-[200px] h-[80px] bg-[#0B0D0C] flex flex-col items-center justify-center">
            <span className="text-white text-[11px] tracking-[0.18em] uppercase mb-1" style={{ fontFamily: "var(--font-dm-mono)" }}>Supply</span>
            <span className="text-white/40 text-[10px]">Treated water exists</span>
          </div>
          <div className="flex flex-col items-center py-4 gap-3">
            {gaps.map((gap) => (
              <div key={gap} className="flex flex-col items-center gap-1.5">
                <div className="h-5 border-l border-dashed border-[#0B0D0C]/25" />
                <span
                  className="text-[11px] text-[#6A6A58] text-center"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {gap}
                </span>
              </div>
            ))}
            <div className="h-5 border-l border-dashed border-[#0B0D0C]/25" />
          </div>
          <div className="wb-block w-full max-w-[200px] h-[80px] bg-[#0B0D0C] flex flex-col items-center justify-center">
            <span className="text-white text-[11px] tracking-[0.18em] uppercase mb-1" style={{ fontFamily: "var(--font-dm-mono)" }}>Demand</span>
            <span className="text-white/40 text-[10px]">Real need exists</span>
          </div>
        </div>

        {/* Verdict */}
        <div className="wb-verdict border border-[#0B0D0C]/15 p-8 md:p-10">
          <p
            className="text-[#0B0D0C] text-center"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Supply exists. Demand exists. Policy exists.{" "}
            <span className="text-[#6A6A58]">The exchange layer does not.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
