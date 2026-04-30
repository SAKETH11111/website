"use client";

import { motion } from "motion/react";

const stats = [
  {
    value: "2,700+",
    label: "Documented decentralised STPs",
  },
  {
    value: "615 MLD",
    label: "Treated daily by decentralised STPs",
  },
  {
    value: "300 MLD",
    label: "Apartment STP surplus market",
  },
];

export default function WhyBengaluru() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B0D0C] leading-[1.1] mb-16 max-w-[700px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Bengaluru is the best place on Earth to solve this first.
        </motion.h2>

        {/* Three huge stats */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr_1px_1fr] gap-0 mb-16">
          {stats.map(({ value, label }, i) => (
            <div key={value} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="py-10 px-0 md:px-10"
              >
                <div
                  className="text-[#0B0D0C] leading-none mb-4"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(3rem, 7vw, 6rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {value}
                </div>
                <div className="text-[#6A6A58] text-sm leading-snug">
                  {label}
                </div>
              </motion.div>
              {i < stats.length - 1 && (
                <div className="hidden md:block bg-[#0B0D0C]/12 w-px self-stretch" />
              )}
            </div>
          ))}
        </div>

        {/* Ruled line + closing */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="pt-10 border-t border-[#0B0D0C]/12"
        >
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
          <p className="text-[#6A6A58] text-sm leading-relaxed max-w-[640px]">
            Cities from Nairobi to São Paulo face the same pattern: rising demand, weak reuse, and infrastructure lag.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
