"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const waterStack = [
  {
    label: "Citywide demand",
    value: "2,632",
    unit: "MLD",
    pct: 100,
    color: "#0B0D0C",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
  },
  {
    label: "Cauvery piped supply",
    value: "1,460",
    unit: "MLD",
    pct: 55,
    color: "#2B7A52",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
  },
  {
    label: "Decentralised reuse potential",
    value: "615",
    unit: "MLD",
    pct: 23,
    color: "#4DB87A",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
  },
  {
    label: "Vaha target market",
    value: "300",
    unit: "MLD",
    pct: 11,
    color: "#97B5A2",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
  },
];

function AnimatedBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="relative h-2 w-full overflow-hidden rounded-full bg-[#0B0D0C]/8">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={inView ? { width: `${pct}%` } : { width: 0 }}
        transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default function MarketGapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="market-gap" className="bg-[#F4F1EB] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref} className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start">
          {/* Left: Copy + chart */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              The Market Gap
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 text-[#0B0D0C] leading-[1.06]"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                letterSpacing: "-0.03em",
              }}
            >
              Bengaluru&apos;s water crisis is structural, not seasonal.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4 text-[15px] leading-[1.7] text-[#5A5A4A]"
            >
              <p>
                WELL Labs estimates citywide demand at{" "}
                <strong className="text-[#0B0D0C]">2,632 MLD</strong> against
                Cauvery piped supply of{" "}
                <strong className="text-[#0B0D0C]">1,460 MLD</strong>. The city
                has <strong className="text-[#0B0D0C]">3,500+ decentralised STPs</strong>{" "}
                that could support reuse of up to{" "}
                <strong className="text-[#0B0D0C]">615 MLD</strong>.
              </p>
              <p>
                The opportunity sits in the{" "}
                <strong className="text-[#0B0D0C]">300 MLD</strong> apartment surplus
                wedge. Large enough to matter, narrow enough to model.
              </p>
            </motion.div>

            {/* Water stack */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 space-y-6"
            >
              {waterStack.map((item, i) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1.5 text-[13px] text-[#0B0D0C] transition-colors hover:text-[#1A5C3C]"
                    >
                      {item.label}
                      <ExternalLink size={10} className="opacity-0 transition-opacity group-hover:opacity-60" />
                    </a>
                    <span
                      className="text-[13px] font-medium tabular-nums text-[#0B0D0C]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {item.value} <span className="text-[#5A5A4A]">{item.unit}</span>
                    </span>
                  </div>
                  <AnimatedBar pct={item.pct} color={item.color} delay={0.3 + i * 0.1} />
                </div>
              ))}
              <p className="text-[11px] text-[#5A5A4A]/60" style={{ fontFamily: "var(--font-dm-mono)" }}>
                Source: WELL Labs Urban Water Balance Report
              </p>
            </motion.div>
          </div>

          {/* Right: Image + stat callouts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/bengaluru-aerial.png"
                alt="Aerial view of Bengaluru showing apartment complexes and construction sites"
                width={800}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0C]/70 via-transparent to-transparent" />

              {/* Overlay stats */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-px bg-white/10">
                {[
                  { value: "3,500+", label: "Decentralised STPs" },
                  { value: "88%", label: "Users < 2km from DSTP" },
                  { value: "1,162", label: "MLD daily supply gap" },
                  { value: "300", label: "MLD apartment surplus" },
                ].map((s) => (
                  <div key={s.label} className="bg-[#0B0D0C]/80 backdrop-blur-sm p-4 md:p-5">
                    <div
                      className="text-white mb-0.5"
                      style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                    >
                      {s.value}
                    </div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
