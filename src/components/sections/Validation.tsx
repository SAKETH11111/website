"use client";

import { motion } from "motion/react";

const quoteCards = [
  {
    type: "Operator validation",
    name: "Vikas Brahmavar",
    title: "CEO, Boson Whitewater",
    quote: "Quality, reliability, and cost — that makes all the difference.",
  },
  {
    type: "Buyer-side validation",
    name: "Practicing civil engineer",
    title: "",
    quote: "The big hurdle is trust. Site managers need assurances before they will consider alternatives.",
  },
];

const marketProof = [
  {
    source: "WELL Labs spatial analysis",
    detail:
      "88% of potential users are within 2 km of an existing or planned DSTP. Demand is nearly 3× decentralised supply.",
  },
  {
    source: "South City, Bengaluru",
    detail:
      "South City already sells surplus treated water in Bengaluru.",
  },
  {
    source: "Christian Binz, Eawag",
    detail:
      "“Bengaluru is a potential global lighthouse case.”",
  },
];

export default function Validation() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B0D0C] leading-[1.1] mb-14"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          We validated three things.
        </motion.h2>

        {/* Two quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B0D0C]/10 mb-px">
          {quoteCards.map(({ type, name, title, quote }, i) => (
            <motion.div
              key={type}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-[#F4F1EB] p-8 md:p-10"
            >
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
              {title && (
                <div className="text-xs text-[#6A6A58] mb-6">{title}</div>
              )}
              {!title && <div className="mb-6" />}
              <p
                className="text-[#0B0D0C]/70 text-sm leading-relaxed italic"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                &ldquo;{quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Market proof band */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#0B0D0C]/12 mb-12"
        >
          <div
            className="px-8 py-4 border-b border-[#0B0D0C]/10 text-[10px] tracking-[0.2em] uppercase text-[#6A6A58]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Market proof
          </div>
          {marketProof.map(({ source, detail }, i) => (
            <div
              key={source}
              className={`px-8 py-5 flex flex-col md:flex-row md:items-start gap-3 md:gap-10 ${
                i < marketProof.length - 1 ? "border-b border-[#0B0D0C]/8" : ""
              }`}
            >
              <div
                className="shrink-0 text-[11px] tracking-wide text-[#0B0D0C] md:w-[220px]"
                style={{ fontFamily: "var(--font-dm-mono)", fontWeight: 500 }}
              >
                {source}
              </div>
              <p className="text-[#6A6A58] text-sm leading-relaxed flex-1">
                {detail}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Closing verdict box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="border border-[#0B0D0C]/15 px-8 py-8 text-center"
        >
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
        </motion.div>

      </div>
    </section>
  );
}
