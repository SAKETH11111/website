"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

const barriers = [
  {
    title: "Trust",
    body: "Buyers ask whether they can rely on what is being delivered, whether it matches the intended use, and who is accountable if something goes wrong.",
    gradient: "from-[#1A5C3C]/10 to-transparent",
  },
  {
    title: "Transport",
    body: "Even when a source and buyer are nearby, there is no default, trusted, repeatable route that moves treated water from apartment STPs to site sumps.",
    gradient: "from-[#2B7A52]/10 to-transparent",
  },
  {
    title: "Coordination",
    body: "Supply, demand, and policy all exist. But there is no standardized layer handling quality documentation, dispatch, chain-of-custody, and payment flow.",
    gradient: "from-[#4DB87A]/10 to-transparent",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="bg-[#F4F1EB] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Why This Has Not Been Solved
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
            The problem is not treatment. It is trust, transport, and coordination.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {barriers.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-xl border border-[#0B0D0C]/8 p-8 bg-gradient-to-b ${b.gradient} backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-[#0B0D0C]/5`}
            >
              <div
                className="mb-4 text-lg text-[#0B0D0C]"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 800, letterSpacing: "-0.02em" }}
              >
                {b.title}
              </div>
              <p className="text-[13px] leading-[1.75] text-[#5A5A4A]">{b.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
