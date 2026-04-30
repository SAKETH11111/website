"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShieldCheck } from "lucide-react";

const controls = [
  {
    title: "Non-potable use cases only",
    body: "Staying within non-potable use removes the most demanding quality thresholds and keeps the regulatory path clear.",
  },
  {
    title: "Short route distances",
    body: "Keeping routes local preserves the economic window and reduces the risk of quality degradation in transit.",
  },
  {
    title: "Documented source reports",
    body: "Every source must have a recent, compliant lab report before a route is created. No report, no dispatch.",
  },
  {
    title: "Pre-dispatch signoff required",
    body: "The buyer reviews the Water Acceptance Pack and signs off before the tanker moves. This is the trust checkpoint.",
  },
  {
    title: "Rejected loads as learning events",
    body: "A rejected load is not routine friction. It triggers a root-cause review before the next dispatch is permitted.",
  },
];

export default function RiskSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="risk" className="bg-[#060908] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#4DB87A] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Risk and Control
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 max-w-[700px] text-white leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            The core risk is not water scarcity. It is repeatability failure.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mb-14 max-w-[540px] text-[15px] leading-[1.7] text-white/45"
          >
            The central risk is that trust failures, route inconsistency, or weak
            documentation make repeatability impossible. That is why the first
            version is designed around control rather than breadth.
          </motion.p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {controls.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#1A5C3C]/20 border border-[#4DB87A]/20">
                <ShieldCheck size={20} className="text-[#4DB87A]" strokeWidth={1.5} />
              </div>
              <div
                className="mb-3 text-[16px] text-white"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                {c.title}
              </div>
              <p className="text-[13px] leading-[1.7] text-white/45">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
