"use client";

import { motion } from "motion/react";

export default function Problem() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Full-width headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B0D0C] leading-[1.1] mb-16 max-w-[860px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Bengaluru is wasting treated water while overpaying for fresh water next door.
        </motion.h2>

        {/* Two-column confrontation */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] gap-0">

          {/* Left: Treated water */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pr-0 md:pr-16 pb-12 md:pb-0"
          >
            <span
              className="block text-[10px] tracking-[0.22em] uppercase text-[#6A6A58] mb-1"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              TREATED WATER
            </span>
            <span
              className="block text-xs text-[#6A6A58] mb-8"
            >
              Treated. Underused. Discharged.
            </span>

            <div
              className="text-[#0B0D0C] leading-none mb-3"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Rs 120–960
            </div>

            <div
              className="text-[#6A6A58] text-sm mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              / 12,000L load
            </div>

            <div
              className="text-xs text-[#6A6A58]/60"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Equivalent to Rs 10–80 /kL
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div className="hidden md:block bg-[#0B0D0C]/12 w-px self-stretch" />

          {/* Right: Tanker water */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="pl-0 md:pl-16 pt-12 md:pt-0 border-t border-[#0B0D0C]/12 md:border-t-0"
          >
            <span
              className="block text-[10px] tracking-[0.22em] uppercase text-[#6A6A58] mb-1"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              TANKER WATER
            </span>
            <span
              className="block text-xs text-[#6A6A58] mb-8"
            >
              Paid for. Delivered. Overpriced.
            </span>

            <div
              className="text-[#0B0D0C] leading-none mb-3"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(3rem, 8vw, 7rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Up to Rs 2,400
            </div>

            <div
              className="text-[#6A6A58] text-sm mb-3"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              / 12,000L load
            </div>

            <div
              className="text-xs text-[#6A6A58]/60"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Equivalent to Rs 200 /kL
            </div>
          </motion.div>
        </div>

        {/* Full-width closing verdict */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-16 pt-10 border-t border-[#0B0D0C]/12"
        >
          <p
            className="text-[#0B0D0C] leading-[1.1]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 600,
              fontSize: "clamp(1.4rem, 2.8vw, 2.25rem)",
              letterSpacing: "-0.015em",
            }}
          >
            &ldquo;The water exists. The buyer exists. The market does not.&rdquo;
          </p>
        </motion.div>

      </div>
    </section>
  );
}
