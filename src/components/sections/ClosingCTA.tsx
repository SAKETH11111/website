"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".cta-headline", { opacity: 0, y: 24 });
      gsap.set(".cta-sub", { opacity: 0, y: 14 });
      gsap.set(".cta-btn", { opacity: 0, y: 12 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".cta-headline", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to(".cta-sub", { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.3")
        .to(".cta-btn", {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.08,
        }, "-=0.2");
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="bg-[#060908] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        <h2
          className="cta-headline text-white leading-[1.05] mb-10"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 800,
            fontSize: "clamp(2rem, 5.5vw, 5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          Bengaluru does not need
          <br />
          to wait for more water.
          <br />
          It needs a better way to move
          <br />
          <span className="text-white/50">the water it already has.</span>
        </h2>

        <p
          className="cta-sub text-white/55 text-base md:text-lg leading-relaxed mb-14 max-w-[520px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          That is what Vaha is building.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/contact"
            className="cta-btn inline-block bg-white text-[#0B0D0C] text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-[#F4F1EB] transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Talk to us
          </Link>
          <Link
            href="/pilot"
            className="cta-btn inline-block border border-white/20 text-white text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-white/[0.08] transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            See the pilot
          </Link>
        </div>

      </div>
    </section>
  );
}
