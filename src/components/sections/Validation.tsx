"use client";

import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const quoteCards = [
  {
    type: "Operator validation",
    name: "Vikas Brahmavar",
    title: "CEO, Boson Whitewater",
    quote: "Quality, reliability, and cost — that makes all the difference.",
    href: "https://bosonwhitewater.com/",
  },
  {
    type: "Buyer-side validation",
    name: "Practicing civil engineer",
    title: "",
    quote: "The big hurdle is trust. Site managers need assurances before they will consider alternatives.",
    href: "",
  },
];

const marketProof = [
  {
    source: "WELL Labs spatial analysis",
    detail: "88% of potential users are within 2 km of an existing or planned DSTP. Demand is nearly 3× decentralised supply.",
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
  },
  {
    source: "South City, Bengaluru",
    detail: "South City already sells surplus treated water in Bengaluru.",
    href: "https://urbanacres.in/bengaluru-residences-intensify-water-management-post-summer-water-scarcity/",
  },
  {
    source: "Christian Binz, Eawag",
    detail: '“Bengaluru is a potential global lighthouse case.”',
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
  },
];

export default function Validation() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".val-headline", { opacity: 0, y: 18 });
      gsap.set(".val-card", { opacity: 0, y: 20 });
      gsap.set(".val-proof", { opacity: 0, y: 14 });
      gsap.set(".val-verdict", { opacity: 0, y: 12 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          toggleActions: "play none none none",
        },
      });

      tl.to(".val-headline", { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" })
        .to(".val-card", {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
        }, "+=0.05")
        .to(".val-proof", { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" }, "-=0.3")
        .to(".val-verdict", { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, "-=0.15");
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
          className="val-headline text-[#0B0D0C] leading-[1.1] mb-14"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          We validated three things.
        </h2>

        {/* Two quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B0D0C]/10 mb-px">
          {quoteCards.map(({ type, name, title, quote, href }) => (
            <div key={type} className="val-card bg-[#F4F1EB] p-8 md:p-10">
              <div
                className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-5"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {type}
              </div>
              <div
                className="text-[#0B0D0C] mb-1"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 600,
                  fontSize: "clamp(0.95rem, 1.3vw, 1.05rem)",
                }}
              >
                {name}
              </div>
              {title ? (
                <div className="mb-6">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-[#6A6A58] underline-offset-4 hover:text-[#0B0D0C] hover:underline transition-colors"
                    >
                      {title}
                      <ArrowUpRight size={12} strokeWidth={1.8} />
                    </a>
                  ) : (
                    <div className="text-xs text-[#6A6A58]">{title}</div>
                  )}
                </div>
              ) : (
                <div className="mb-6" />
              )}
              <p
                className="text-[#0B0D0C]/70 text-sm leading-relaxed italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Market proof band */}
        <div className="val-proof border border-[#0B0D0C]/12 mb-12">
          <div
            className="px-8 py-4 border-b border-[#0B0D0C]/10 text-[10px] tracking-[0.2em] uppercase text-[#6A6A58]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Market proof
          </div>
          {marketProof.map(({ source, detail, href }, i) => (
            <div
              key={source}
              className={`px-8 py-5 flex flex-col md:flex-row md:items-start gap-3 md:gap-10 ${
                i < marketProof.length - 1 ? "border-b border-[#0B0D0C]/8" : ""
              }`}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex shrink-0 items-center gap-1.5 text-[11px] tracking-wide text-[#0B0D0C] md:w-[220px] underline-offset-4 hover:underline"
                style={{ fontFamily: "var(--font-dm-mono)", fontWeight: 500 }}
              >
                {source}
                <ArrowUpRight size={12} strokeWidth={1.8} />
              </a>
              <p className="text-[#6A6A58] text-sm leading-relaxed flex-1">{detail}</p>
            </div>
          ))}
        </div>

        {/* Verdict */}
        <div className="val-verdict border border-[#0B0D0C]/15 px-8 py-8 text-center">
          <p
            className="text-[#0B0D0C]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.8vw, 1.3rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Vaha turns isolated reuse into a repeatable exchange layer.
          </p>
        </div>

      </div>
    </section>
  );
}
