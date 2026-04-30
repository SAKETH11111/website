"use client";

import { motion } from "motion/react";

export default function Paradox() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-14"
        >
          <span className="w-5 h-px bg-[#1A5C3C]" />
          <span
            className="text-[11px] tracking-[0.22em] uppercase text-[#1A5C3C]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            The Paradox
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: large stat block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="border-l-2 border-[#1A5C3C] pl-8">
              <div
                className="text-[#0B0D0C] leading-none mb-3"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                600
                <span
                  className="text-[#1A5C3C]"
                  style={{ fontSize: "0.45em", verticalAlign: "super", marginLeft: "0.1em" }}
                >
                  MLD
                </span>
              </div>
              <p
                className="text-[#6A6A58] text-sm leading-relaxed"
                style={{ maxWidth: 260 }}
              >
                of treated STP water discharged into Bengaluru's lakes and drains daily — unused, unrouted, unrevenued.
              </p>
            </div>
          </motion.div>

          {/* Right: editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <p
              className="text-[#0B0D0C] leading-[1.2] mb-8"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 600,
                fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                letterSpacing: "-0.01em",
              }}
            >
              The city's construction sector pays crores annually to truck in
              unverified water. Meanwhile, 500+ apartment STPs discharge
              treated water with nowhere to go.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-[#0B0D0C]/8">
              {[
                { n: "500+", label: "Active apartment STPs in Bengaluru" },
                { n: "₹800–1,200", label: "Per tanker load, unverified" },
                { n: "0", label: "Routing infrastructure connecting them" },
                { n: "Today", label: "The window to build the layer" },
              ].map(({ n, label }) => (
                <div key={label}>
                  <div
                    className="text-[#0B0D0C] leading-none mb-1.5"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 700,
                      fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {n}
                  </div>
                  <div className="text-[#6A6A58] text-xs leading-snug">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
