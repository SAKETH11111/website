"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#060908]">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
          aria-hidden="true"
        >
          <source src="/exosphere_remix_scene.webm" type="video/webm" />
        </video>
        {/* Gradient overlay: stronger at bottom to ease into next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060908]/40 via-[#060908]/20 to-[#060908]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="mx-auto max-w-[1320px] w-full px-6 md:px-10 lg:px-14 pt-28 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left: headline block */}
            <div className="lg:col-span-7">
              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.25, 0, 0, 1] }}
                className="text-white leading-[1.04] mb-8"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Route the water.
              </motion.h1>

              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
                className="text-white/55 leading-relaxed mb-10 max-w-[520px]"
                style={{ fontSize: "clamp(1rem, 1.5vw, 1.125rem)" }}
              >
                Vaha turns surplus treated water into verified local supply
                for construction, using the infrastructure the city already has.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28, ease: "easeOut" }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 bg-white text-[#0B0D0C] px-6 py-3 text-xs tracking-widest uppercase font-semibold hover:bg-[#F4F1EB] transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  See how it works
                  <ArrowRight size={13} />
                </a>
                <a
                  href="#pilot"
                  className="inline-flex items-center gap-2 border border-white/25 text-white/80 px-6 py-3 text-xs tracking-widest uppercase font-medium hover:border-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  View pilot route
                </a>
              </motion.div>
            </div>

            {/* Right: exchange layer panel */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0, 0, 1] }}
                className="w-full max-w-[400px] border border-white/10 bg-[#060908]/80 backdrop-blur-sm"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {/* Panel header */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8">
                  <span className="text-[10px] tracking-[0.22em] uppercase text-white/40">
                    Vaha Exchange Layer
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="vaha-live w-1.5 h-1.5 rounded-full bg-[#4DB87A]" />
                    <span className="text-[10px] tracking-widest text-[#4DB87A]/70 uppercase">
                      Live
                    </span>
                  </div>
                </div>

                {/* Route */}
                <div className="px-5 py-4 border-b border-white/8">
                  <div className="text-[10px] tracking-[0.18em] uppercase text-white/30 mb-2.5">
                    Route
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-white/80">
                    <span>Bellandur</span>
                    <span className="flex-1 border-t border-dashed border-white/15 mx-1" />
                    <span>Kadubwis</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="px-5 pt-4 pb-3 border-b border-white/8 space-y-5">
                  {[
                    {
                      n: "01",
                      label: "Source",
                      value: "Apartment STP",
                      meta: "Treated output · Class A",
                    },
                    {
                      n: "02",
                      label: "Verify",
                      value: "Water Acceptance Pack",
                      meta: "Quality gate · Passed",
                    },
                    {
                      n: "03",
                      label: "Deliver",
                      value: "Existing tanker route",
                      meta: "Last mile · Confirmed",
                    },
                  ].map(({ n, label, value, meta }) => (
                    <div key={n} className="flex gap-4">
                      <span
                        className="text-[11px] tabular-nums mt-0.5 shrink-0"
                        style={{ color: "#4DB87A", opacity: 0.7 }}
                      >
                        {n}
                      </span>
                      <div>
                        <div className="text-[10px] tracking-[0.16em] uppercase text-white/30 mb-0.5">
                          {label}
                        </div>
                        <div className="text-[13px] text-white/80">{value}</div>
                        <div className="text-[11px] text-white/30 mt-0.5">{meta}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Status footer */}
                <div className="px-5 py-3.5 space-y-2">
                  {[
                    { label: "Route logic", value: "Under 2 km" },
                    { label: "Load status", value: "Verified" },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex items-center justify-between">
                      <span className="text-[11px] text-white/30">{label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-white/55">{value}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4DB87A]/60" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="relative z-10 flex justify-center pb-10"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.22em] uppercase text-white/25"
            style={{ fontFamily: "var(--font-syne)" }}>
            Scroll
          </span>
          <span className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
    >
      <path d="M2 6.5h9M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
