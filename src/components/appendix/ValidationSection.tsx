"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";

const layers = [
  {
    title: "Operator-side",
    stat: "3 pillars",
    statNote: "quality, reliability, cost",
    body: "Vikas Brahmavar of Boson Whitewater confirmed that adoption comes down to quality, reliability, and cost. Those are the same three pillars Vaha is designed around.",
    href: "https://bosonwhitewater.com/",
    source: "Boson Whitewater",
  },
  {
    title: "Buyer-side",
    stat: "Trust first",
    statNote: "documentation before price",
    body: "Site managers do not switch just because water is cheaper. They switch when they believe the source is trustworthy and the handoff is properly documented.",
    href: "",
    source: "Field interviews",
  },
  {
    title: "Market proof",
    stat: "88%",
    statNote: "users within 2km of a DSTP",
    body: "WELL Labs found demand is significantly larger than decentralised supply. Urban Acres reports that South City already processes and sells surplus treated water.",
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
    source: "WELL Labs",
  },
];

export default function ValidationSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="validation" className="bg-[#EEE8DE] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Validation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-[680px] text-[#0B0D0C] leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Operator logic, buyer logic, and market evidence already line up.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-xl border border-[#0B0D0C]/8 bg-[#F4F1EB] p-7 transition-all duration-300 hover:border-[#0B0D0C]/15 hover:shadow-lg hover:shadow-[#0B0D0C]/5"
            >
              <div className="mb-5">
                <div
                  className="text-[#1A5C3C]"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.8rem", letterSpacing: "-0.02em" }}
                >
                  {layer.stat}
                </div>
                <div className="text-[10px] text-[#5A5A4A] uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  {layer.statNote}
                </div>
              </div>

              <div
                className="mb-3 text-[15px] text-[#0B0D0C]"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                {layer.title}
              </div>
              <p className="mb-5 text-[13px] leading-[1.75] text-[#5A5A4A]">{layer.body}</p>
              {layer.href ? (
                <a
                  href={layer.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] text-[#0B0D0C]/60 transition-colors hover:text-[#1A5C3C]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {layer.source}
                  <ExternalLink size={10} />
                </a>
              ) : (
                <span className="text-[11px] text-[#5A5A4A]/50" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  {layer.source}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 rounded-xl border border-[#0B0D0C]/8 bg-white p-10 text-center"
        >
          <p
            className="mx-auto max-w-[700px] text-[#0B0D0C]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 700,
              fontSize: "clamp(1.2rem, 2.2vw, 1.7rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.3,
            }}
          >
            The transaction is already possible. It is just not yet organized
            into a repeatable local market.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
