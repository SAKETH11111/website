"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Match",
    body: "Identify apartment STP surplus and pair it with nearby construction demand. Proximity-first routing keeps costs inside the economic window.",
  },
  {
    number: "02",
    title: "Verify",
    body: "Issue a Water Acceptance Pack before dispatch so the buyer can review the source, intended use, and quality documentation.",
  },
  {
    number: "03",
    title: "Deliver",
    body: "Use existing tanker operators and existing site workflows. No new infrastructure. No owned fleet.",
  },
];

const packItems = [
  "Source STP name and location",
  "Buyer and site name",
  "Intended use classification",
  "Latest lab report date",
  "Tested parameters",
  "Tanker ID",
  "Pickup timestamp",
  "Delivery timestamp",
  "Buyer signoff",
  "Complaint and escalation protocol",
];

export default function WhatVahaSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const packRef = useRef(null);
  const packInView = useInView(packRef, { once: true, margin: "-80px" });

  return (
    <>
      {/* What Vaha Does */}
      <section id="what-vaha-does" className="relative bg-[#060908] py-[clamp(6rem,12vw,10rem)] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/water-abstract.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#060908] via-[#060908]/80 to-[#060908]" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
          <div ref={ref}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#4DB87A] font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              How Vaha Works
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
              Surplus STP water becomes a verified local supply loop.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mb-14 max-w-[480px] text-[15px] leading-[1.7] text-white/45"
            >
              STPs exist. Tankers exist. Buyers exist. Vaha creates the
              trusted protocol that lets these systems transact cleanly.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm"
              >
                <div
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A5C3C]/30 text-[#4DB87A] text-sm font-medium"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {step.number}
                </div>
                <div
                  className="mb-3 text-lg text-white"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 700, letterSpacing: "-0.01em" }}
                >
                  {step.title}
                </div>
                <p className="text-[13px] leading-[1.75] text-white/45">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Acceptance Pack */}
      <section className="bg-[#EEE8DE] py-[clamp(5rem,10vw,8rem)]">
        <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
          <div ref={packRef}>
            <motion.p
              initial={{ opacity: 0 }}
              animate={packInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              The Water Acceptance Pack
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={packInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 max-w-[640px] text-[#0B0D0C] leading-[1.06]"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                letterSpacing: "-0.03em",
              }}
            >
              How trust becomes an operating workflow.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={packInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mb-10 max-w-[500px] text-[14px] leading-[1.7] text-[#5A5A4A]"
            >
              Every delivery carries a full documentation trail. The buyer
              reviews and signs off before a single litre moves.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {packItems.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-[#0B0D0C]/8 bg-white p-4 text-[13px] text-[#0B0D0C]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
