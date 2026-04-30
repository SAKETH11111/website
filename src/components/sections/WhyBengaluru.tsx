"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const stats = [
  { prefix: "", target: 2700, suffix: "+", label: "Documented decentralised STPs" },
  { prefix: "", target: 615, suffix: " MLD", label: "Treated daily by decentralised STPs" },
  { prefix: "", target: 300, suffix: " MLD", label: "Apartment STP surplus market" },
];

export default function WhyBengaluru() {
  const sectionRef = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(".why-headline", { opacity: 0, y: 20 });
      gsap.set(".why-stat", { opacity: 0, y: 28 });
      gsap.set(".why-closing", { opacity: 0, y: 16 });

      gsap.to(".why-headline", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      });

      gsap.to(".why-stat", {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".why-stats-grid",
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      // countup for each number
      stats.forEach(({ target, suffix }, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const counter = { val: 0 };
        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          delay: i * 0.15,
          onUpdate() {
            el.textContent =
              Math.round(counter.val).toLocaleString() + suffix;
          },
          scrollTrigger: {
            trigger: ".why-stats-grid",
            start: "top 65%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.to(".why-closing", {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-closing",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
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
          className="why-headline text-[#0B0D0C] leading-[1.1] mb-16 max-w-[700px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Bengaluru is the best place on Earth to solve this first.
        </h2>

        <div className="why-stats-grid grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          {stats.map(({ suffix, label }, i) => (
            <div
              key={label}
              className={`why-stat py-10 px-0 md:px-10 ${
                i < stats.length - 1
                  ? "border-b border-[#0B0D0C]/12 md:border-b-0 md:border-r md:border-[#0B0D0C]/12"
                  : ""
              }`}
            >
              <div
                ref={(el) => { numRefs.current[i] = el; }}
                className="text-[#0B0D0C] leading-none mb-4 tabular-nums"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(3rem, 7vw, 6rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                0{suffix}
              </div>
              <div className="text-[#6A6A58] text-sm leading-snug">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="why-closing pt-10 border-t border-[#0B0D0C]/12">
          <p
            className="text-[#0B0D0C] mb-3"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              letterSpacing: "-0.01em",
            }}
          >
            &ldquo;Bengaluru is a global lighthouse case for decentralised water reuse.&rdquo;
          </p>
          <a
            href="https://welllabs.org/workshop-decentralised-wastewater-reuse/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mb-3 text-[11px] text-[#6A6A58] underline-offset-4 hover:text-[#0B0D0C] hover:underline"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Christian Binz, Eawag
            <ArrowUpRight size={12} strokeWidth={1.8} />
          </a>
          <p className="text-[#6A6A58] text-sm leading-relaxed max-w-[640px]">
            Cities from Nairobi to São Paulo face the same pattern: rising demand, weak reuse, and infrastructure lag.
          </p>
        </div>

      </div>
    </section>
  );
}
