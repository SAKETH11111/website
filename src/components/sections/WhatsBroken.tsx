"use client";

import { motion } from "motion/react";

const gaps = [
  "No logistics layer",
  "No trusted quality handoff",
  "No market maker",
];

export default function WhatsBroken() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Full-width headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B0D0C] leading-[1.1] mb-20 max-w-[780px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          The water problem is not treatment. It is trust, transport, and coordination.
        </motion.h2>

        {/* CSS Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          {/* Desktop diagram */}
          <div className="hidden md:block relative">
            {/* Gap annotations above lines */}
            <div className="flex justify-center mb-3">
              <div className="flex-1 max-w-[140px]" />
              <div className="flex-1 flex flex-col gap-4 items-stretch px-8">
                {gaps.map((gap, i) => (
                  <div
                    key={gap}
                    className="text-center"
                    style={{ marginBottom: i < gaps.length - 1 ? "0" : "0" }}
                  >
                    <span
                      className="text-[11px] text-[#6A6A58] tracking-wide"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {gap}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex-1 max-w-[140px]" />
            </div>

            {/* Main diagram row */}
            <div className="flex items-center gap-0">
              {/* SUPPLY block */}
              <div
                className="shrink-0 w-[140px] h-[88px] bg-[#0B0D0C] flex flex-col items-center justify-center"
              >
                <span
                  className="text-white text-[11px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  SUPPLY
                </span>
                <span className="text-white/40 text-[10px]">
                  Treated water exists
                </span>
              </div>

              {/* Dashed lines area */}
              <div className="flex-1 px-8 flex flex-col gap-5 justify-center">
                {gaps.map((gap) => (
                  <div
                    key={gap}
                    className="w-full border-t-2 border-dashed border-[#0B0D0C]/20"
                  />
                ))}
              </div>

              {/* DEMAND block */}
              <div
                className="shrink-0 w-[140px] h-[88px] bg-[#0B0D0C] flex flex-col items-center justify-center"
              >
                <span
                  className="text-white text-[11px] tracking-[0.18em] uppercase mb-1"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  DEMAND
                </span>
                <span className="text-white/40 text-[10px]">
                  Real need exists
                </span>
              </div>
            </div>
          </div>

          {/* Mobile diagram: vertical */}
          <div className="md:hidden flex flex-col items-center gap-0">
            <div className="w-full max-w-[200px] h-[80px] bg-[#0B0D0C] flex flex-col items-center justify-center">
              <span
                className="text-white text-[11px] tracking-[0.18em] uppercase mb-1"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                SUPPLY
              </span>
              <span className="text-white/40 text-[10px]">Treated water exists</span>
            </div>

            <div className="flex flex-col items-center py-4 gap-4">
              {gaps.map((gap) => (
                <div key={gap} className="flex flex-col items-center gap-1.5">
                  <div className="h-6 border-l-2 border-dashed border-[#0B0D0C]/20" />
                  <span
                    className="text-[11px] text-[#6A6A58] text-center"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {gap}
                  </span>
                </div>
              ))}
              <div className="h-6 border-l-2 border-dashed border-[#0B0D0C]/20" />
            </div>

            <div className="w-full max-w-[200px] h-[80px] bg-[#0B0D0C] flex flex-col items-center justify-center">
              <span
                className="text-white text-[11px] tracking-[0.18em] uppercase mb-1"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                DEMAND
              </span>
              <span className="text-white/40 text-[10px]">Real need exists</span>
            </div>
          </div>
        </motion.div>

        {/* Verdict box */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#0B0D0C]/15 p-8 md:p-10"
        >
          <p
            className="text-[#0B0D0C] text-center"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1rem, 1.8vw, 1.35rem)",
              letterSpacing: "-0.01em",
            }}
          >
            Supply exists. Demand exists. Policy exists. The exchange layer does not.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
