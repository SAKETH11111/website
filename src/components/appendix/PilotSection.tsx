"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const pilotValidation = [
  "The source is real, compliant, and consistently producing surplus treated water.",
  "The buyer already uses non-potable tanker water and has a real receiving workflow on site.",
  "The tanker partner can complete the route inside the economic window.",
  "The Water Acceptance Pack is strong enough for pre-dispatch signoff.",
  "The payment and proof-of-delivery flow makes the next route easier, not harder.",
];

export default function PilotSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const proofRef = useRef(null);
  const proofInView = useInView(proofRef, { once: true, margin: "-80px" });

  return (
    <section id="pilot" className="bg-[#F4F1EB] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Pilot Plan
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-[720px] text-[#0B0D0C] leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            One corridor. One proof point. One repeatable loop.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mb-14 max-w-[560px] text-[15px] leading-[1.7] text-[#5A5A4A]"
          >
            The first pilot corridor is the Bellandur to Kadubeesanahalli
            stretch of Outer Ring Road. This geography concentrates apartment
            supply, active construction demand, and short route distances in one
            place.
          </motion.p>
        </div>

        {/* The 90-day milestone */}
        <motion.div
          ref={proofRef}
          initial={{ opacity: 0, y: 24 }}
          animate={proofInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 overflow-hidden rounded-xl bg-[#0B0D0C] shadow-2xl shadow-[#0B0D0C]/10"
        >
          <div className="p-8 md:p-12">
            <div
              className="mb-4 text-[11px] uppercase tracking-[0.2em] text-[#4DB87A]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              First 90 days
            </div>
            <div
              className="max-w-[800px] text-white leading-[1.06]"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                letterSpacing: "-0.03em",
              }}
            >
              One route. Thirty paid deliveries. Zero rejected loads.
            </div>

            <div className="mt-12 grid gap-6 border-t border-white/10 pt-8 md:grid-cols-4">
              {[
                { count: "1", label: "Apartment STP source" },
                { count: "1", label: "Construction buyer" },
                { count: "1", label: "Tanker partner" },
                { count: "1", label: "Quality and signoff workflow" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={proofInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <div
                    className="mb-2 text-[#4DB87A]"
                    style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem" }}
                  >
                    {item.count}
                  </div>
                  <div className="text-[13px] text-white/50">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Validation sequence */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={proofInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-xl border border-[#0B0D0C]/8 bg-white p-8 md:p-10"
        >
          <div
            className="mb-8 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C]"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            What the pilot must prove
          </div>
          <div className="grid gap-x-12 gap-y-6 md:grid-cols-2">
            {pilotValidation.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={proofInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.08 }}
                className="flex gap-4"
              >
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-[#4DB87A]" strokeWidth={2} />
                <p className="text-[14px] leading-[1.6] text-[#5A5A4A]">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
