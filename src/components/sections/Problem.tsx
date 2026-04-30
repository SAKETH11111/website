"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set([".prob-left", ".prob-right"], { opacity: 0 });
      gsap.set(".prob-left", { x: -32 });
      gsap.set(".prob-right", { x: 32 });
      gsap.set(".prob-divider", { scaleY: 0, transformOrigin: "top center" });
      gsap.set(".prob-verdict", { opacity: 0, y: 24 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".prob-left", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" })
        .to(".prob-divider", { scaleY: 1, duration: 0.55, ease: "power2.inOut" }, "-=0.5")
        .to(".prob-right", { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, "-=0.55")
        .to(".prob-verdict", { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "+=0.05");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-[#060908] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">

          {/* Left: treated water */}
          <div className="prob-left pr-0 md:pr-16 pb-14 md:pb-0">
            <span
              className="block text-[10px] tracking-[0.22em] uppercase text-white/30 mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Treated water
            </span>
            <span
              className="block text-sm text-white/40 mb-8"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 500 }}
            >
              Treated. Underused. Discharged.
            </span>
            <div
              className="text-white leading-none mb-4 tabular-nums"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Rs 120–960
            </div>
            <div
              className="text-white/30 text-sm mb-1"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              / 12,000L load
            </div>
            <div
              className="text-white/18 text-xs"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Equivalent to Rs 10–80 /kL
            </div>
          </div>

          {/* Divider */}
          <div className="prob-divider hidden md:block bg-white/12 w-px self-stretch" />

          {/* Right: tanker water */}
          <div className="prob-right pl-0 md:pl-16 pt-14 md:pt-0 border-t border-white/10 md:border-0">
            <span
              className="block text-[10px] tracking-[0.22em] uppercase text-white/30 mb-2"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Tanker water
            </span>
            <span
              className="block text-sm text-white/40 mb-8"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 500 }}
            >
              Paid for. Delivered. Overpriced.
            </span>
            <div
              className="text-white leading-none mb-4 tabular-nums"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2.8rem, 7vw, 6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Up to Rs 2,400
            </div>
            <div
              className="text-white/30 text-sm mb-1"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              / 12,000L load
            </div>
            <div
              className="text-white/18 text-xs"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Equivalent to Rs 200 /kL
            </div>
          </div>
        </div>

        {/* Verdict */}
        <div className="prob-verdict mt-16 pt-10 border-t border-white/10">
          <p
            className="text-white leading-[1.1] max-w-[640px]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.8vw, 2.25rem)",
              letterSpacing: "-0.02em",
            }}
          >
            The water exists. The buyer exists.{" "}
            <span className="text-white/40">The market does not.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
