"use client";

import { motion } from "motion/react";

const firstNinetyDays = [
  "1 apartment STP source",
  "1 construction buyer",
  "1 tanker partner",
  "1 quality workflow",
];

export default function PilotCorridor() {
  return (
    <section id="pilot" className="bg-[#F4F1EB] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Three blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#0B0D0C]/10 mb-14">

          {/* Block 1: Pilot corridor */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-[#F4F1EB] p-8 md:p-10"
          >
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Pilot corridor
            </div>

            {/* Route visual: two dots connected by line */}
            <div className="flex flex-col gap-0 mb-6">
              <div className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full border-2 border-[#0B0D0C] shrink-0"
                />
                <span
                  className="text-[13px] text-[#0B0D0C]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Bellandur
                </span>
              </div>
              <div className="ml-[5px] w-px h-8 bg-[#0B0D0C]/30 border-l border-dashed border-[#0B0D0C]/30" />
              <div className="flex items-center gap-3">
                <span
                  className="w-2.5 h-2.5 rounded-full bg-[#0B0D0C] shrink-0"
                />
                <span
                  className="text-[13px] text-[#0B0D0C]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Kadubeesanahalli
                </span>
              </div>
            </div>

            <div
              className="text-[11px] text-[#6A6A58] leading-snug"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Outer Ring Road, Bengaluru
            </div>
          </motion.div>

          {/* Block 2: First 90 days */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
            className="bg-[#F4F1EB] p-8 md:p-10"
          >
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              First 90 days
            </div>
            <div className="space-y-3">
              {firstNinetyDays.map((item, i) => (
                <div key={item} className="flex items-start gap-3">
                  <span
                    className="text-[10px] tabular-nums text-[#6A6A58]/60 mt-0.5 shrink-0"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    {i + 1}.
                  </span>
                  <span className="text-sm text-[#0B0D0C]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Block 3: Success metric */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.16, ease: "easeOut" }}
            className="bg-[#F4F1EB] p-8 md:p-10"
          >
            <div
              className="text-[10px] tracking-[0.2em] uppercase text-[#6A6A58] mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Success metric
            </div>

            <div className="space-y-6">
              <div>
                <div
                  className="text-[#0B0D0C] leading-none mb-1.5"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  30
                </div>
                <div className="text-[#6A6A58] text-xs">paid deliveries</div>
              </div>

              <div>
                <div
                  className="text-[#0B0D0C] leading-none mb-1.5"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  0
                </div>
                <div className="text-[#6A6A58] text-xs">rejected loads</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Closing */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-[#6A6A58] text-sm leading-relaxed"
        >
          The first loop proves the route. The next loops scale it.
        </motion.p>

      </div>
    </section>
  );
}
