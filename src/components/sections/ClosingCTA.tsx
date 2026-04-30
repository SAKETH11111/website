"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function ClosingCTA() {
  return (
    <section id="contact" className="bg-[#060908] py-[clamp(5rem,10vw,9rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

        {/* Large statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2
            className="text-white leading-[1.05]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5.5vw, 5rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Bengaluru does not need
            <br />
            to wait for more water.
            <br />
            It needs a better way to move
            <br />
            the water it already has.
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-white/60 text-base md:text-lg leading-relaxed mb-14 max-w-[520px]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          That is what Vaha is building.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0B0D0C] text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-[#F4F1EB] transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Talk to us
          </Link>
          <Link
            href="/pilot"
            className="inline-block border border-white/20 text-white text-xs tracking-widest uppercase font-medium px-8 py-4 hover:bg-white/8 transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            See the pilot
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
