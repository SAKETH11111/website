"use client";

import { motion } from "motion/react";

const qualityParams = [
  { param: "pH", value: "7.1", range: "(6.5–8.5)" },
  { param: "BOD (mg/L)", value: "4.6", range: "(<6)" },
  { param: "COD (mg/L)", value: "19.2", range: "(<25)" },
  { param: "TSS (mg/L)", value: "12.2", range: "(<20)" },
  { param: "Fecal col.", value: "<D", range: "(<100)" },
];

const steps = [
  {
    n: "1",
    label: "Match",
    body: "Apartment source to nearby construction buyer",
  },
  {
    n: "2",
    label: "Verify",
    body: "Water Acceptance Pack before dispatch",
  },
  {
    n: "3",
    label: "Deliver",
    body: "Existing tankers move water into existing site workflows",
  },
];

export default function HowVahaWorks() {
  return (
    <section className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-[#0B0D0C] leading-[1.1] mb-16 max-w-[680px]"
          style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 700,
            fontSize: "clamp(1.6rem, 3.2vw, 2.75rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Vaha turns surplus STP water into a verified local supply loop.
        </motion.h2>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B0D0C]/10 mb-16">
          {steps.map(({ n, label, body }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="bg-[#F4F1EB] p-8 md:p-10"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="text-[11px] tabular-nums text-[#6A6A58]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {n}.
                </span>
                <span
                  className="text-xs tracking-[0.18em] uppercase text-[#0B0D0C]"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 600 }}
                >
                  {label}
                </span>
              </div>
              <p className="text-[#6A6A58] text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* WAP Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border border-[#0B0D0C] bg-white p-8 md:p-10 mb-12"
          style={{ fontFamily: "var(--font-dm-mono)" }}
        >
          {/* WAP Header */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 pb-6 border-b border-[#0B0D0C]/15 gap-2">
            <span
              className="text-[11px] tracking-[0.18em] uppercase text-[#0B0D0C] font-medium"
            >
              WATER ACCEPTANCE PACK
            </span>
            <span className="text-[11px] text-[#6A6A58]">
              PACK ID: WMP-25-05-1902
            </span>
          </div>

          {/* Source / Destination */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 pb-6 border-b border-[#0B0D0C]/10">
            <div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-1.5">SOURCE</div>
              <div className="text-[13px] text-[#0B0D0C]">Prestige Lake Ridge STP</div>
              <div className="text-[12px] text-[#6A6A58]">Bengaluru, KA</div>
            </div>
            <div>
              <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-1.5">DESTINATION</div>
              <div className="text-[13px] text-[#0B0D0C]">Construction Site — North Gate</div>
              <div className="text-[12px] text-[#6A6A58]">Bengaluru, KA</div>
            </div>
          </div>

          {/* Dispatch Details */}
          <div className="mb-8 pb-6 border-b border-[#0B0D0C]/10">
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-3">DISPATCH DETAILS</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2">
              {[
                ["Date", "17 May 2025"],
                ["Time", "06:45 AM"],
                ["Vehicle", "KA 05 AB 1234"],
                ["Tanker No.", "TN08"],
              ].map(([key, val]) => (
                <div key={key}>
                  <div className="text-[10px] text-[#6A6A58] mb-0.5">{key}</div>
                  <div className="text-[12px] text-[#0B0D0C]">{val}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality parameters */}
          <div className="mb-8 pb-6 border-b border-[#0B0D0C]/10">
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-3">WATER QUALITY (TEST)</div>
            <table className="w-full text-[12px]">
              <tbody>
                {qualityParams.map(({ param, value, range }) => (
                  <tr key={param} className="border-b border-[#0B0D0C]/6 last:border-0">
                    <td className="py-1.5 text-[#6A6A58] w-[140px]">{param}</td>
                    <td className="py-1.5 text-[#0B0D0C] w-[80px] tabular-nums">{value}</td>
                    <td className="py-1.5 text-[#6A6A58]/60 flex-1">{range}</td>
                    <td className="py-1.5 text-right">
                      <span style={{ color: "#1A5C3C", fontWeight: 600 }}>✓</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Approved by */}
          <div>
            <div className="text-[10px] tracking-[0.15em] uppercase text-[#6A6A58] mb-2">APPROVED BY (QMS)</div>
            <div className="text-[12px] text-[#0B0D0C]">Rudaiba Tarannum</div>
            <div className="text-[11px] text-[#6A6A58]">2 May 2025, 11:30 AM</div>
          </div>
        </motion.div>

        {/* Quality parameter band */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="border border-[#0B0D0C]/12 px-6 py-4 mb-10"
        >
          <p
            className="text-[11px] text-[#6A6A58] text-center tracking-wide"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            pH 6.5–8.5 · BOD &lt;6 · COD &lt;25 · TSS &lt;20 · Fecal coliform &lt;100
          </p>
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-[#6A6A58] text-sm leading-relaxed max-w-[580px]"
        >
          Every core piece already exists. Vaha makes the route trusted and repeatable.
        </motion.p>

      </div>
    </section>
  );
}
