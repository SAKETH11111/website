"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const firstNinetyDays = [
  "1 apartment STP source",
  "1 construction buyer",
  "1 tanker partner",
  "1 quality workflow",
];

export default function PilotCorridor() {
  const sectionRef = useRef<HTMLElement>(null);
  const routeLineRef = useRef<SVGLineElement>(null);
  const metric30Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.set(".pc-block", { opacity: 0, y: 18 });
      gsap.set(".pc-closing", { opacity: 0, y: 12 });

      // Route line draw
      if (routeLineRef.current) {
        gsap.set(routeLineRef.current, {
          strokeDasharray: 80,
          strokeDashoffset: 80,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".pc-block", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      });

      // Route line draws
      if (routeLineRef.current) {
        tl.to(routeLineRef.current, {
          strokeDashoffset: 0,
          duration: 0.5,
          ease: "power2.inOut",
        }, "-=0.3");
      }

      // Count up 30
      if (metric30Ref.current) {
        const counter = { val: 0 };
        tl.to(counter, {
          val: 30,
          duration: 1.0,
          ease: "power2.out",
          onUpdate() {
            if (metric30Ref.current) {
              metric30Ref.current.textContent = Math.round(counter.val).toString();
            }
          },
        }, "-=0.5");
      }

      tl.to(".pc-closing", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="pilot"
      ref={sectionRef}
      className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B0D0C]/10 mb-14">

          {/* Block 1: Pilot corridor */}
          <div className="pc-block bg-[#F4F1EB] p-8 md:p-10">
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Pilot corridor
            </div>

            <div className="flex flex-col gap-0 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full border-2 border-[#0B0D0C] shrink-0" />
                <span
                  className="text-[13px] text-[#0B0D0C]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Bellandur
                </span>
              </div>

              {/* Animated route line */}
              <div className="ml-[4px] my-1" style={{ height: 32 }}>
                <svg width="2" height="32" viewBox="0 0 2 32" fill="none">
                  <line
                    ref={routeLineRef}
                    x1="1" y1="0" x2="1" y2="32"
                    stroke="#0B0D0C"
                    strokeWidth="1.5"
                    strokeDasharray="4 3"
                    strokeOpacity="0.4"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0B0D0C] shrink-0" />
                <span
                  className="text-[13px] text-[#0B0D0C]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Kadubeesanahalli
                </span>
              </div>
            </div>

            <div
              className="text-[11px] text-[#6A6A58] leading-snug"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Outer Ring Road, Bengaluru
            </div>
          </div>

          {/* Block 2: First 90 days */}
          <div className="pc-block bg-[#F4F1EB] p-8 md:p-10">
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              First 90 days
            </div>
            <div className="space-y-3">
              {firstNinetyDays.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="text-[10px] tabular-nums text-[#6A6A58]/60 mt-0.5 shrink-0"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {i + 1}.
                  </span>
                  <span className="text-sm text-[#0B0D0C]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Success metrics */}
          <div className="pc-block bg-[#F4F1EB] p-8 md:p-10">
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Success metric
            </div>

            <div className="space-y-6">
              <div>
                <div
                  ref={metric30Ref}
                  className="text-[#0B0D0C] leading-none mb-1.5 tabular-nums"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  0
                </div>
                <div className="text-[#6A6A58] text-xs">paid deliveries</div>
              </div>

              <div>
                <div
                  className="text-[#0B0D0C] leading-none mb-1.5 tabular-nums"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  0
                </div>
                <div className="text-[#6A6A58] text-xs">rejected loads</div>
              </div>
            </div>
          </div>
        </div>

        <p className="pc-closing text-[#6A6A58] text-sm leading-relaxed">
          The first loop proves the route. The next loops scale it.
        </p>

      </div>
    </section>
  );
}
