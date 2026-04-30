"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import UnicornScene from "unicornstudio-react/next";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden bg-[#060908]"
    >
      {/* Interactive background */}
      <div className="absolute inset-0 z-0">
        <div className="vaha-unicorn-scene h-full w-full opacity-75">
          <UnicornScene
            projectId="9vVHfRqwOkJH2hYVQvHa"
            width="100%"
            height="100%"
            scale={1}
            dpi={1.5}
            lazyLoad={false}
            ariaLabel="Animated background scene"
            className="h-full w-full"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(6,9,8,0.12),rgba(6,9,8,0.54)_30%,rgba(6,9,8,0.84)_60%,rgba(6,9,8,0.96)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060908]/36 via-[#060908]/18 to-[#060908]/36" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060908]/50 via-transparent to-[#060908]/92" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-[240px] -translate-x-1/2 bg-[#060908]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 items-center justify-center">
        <div className="mx-auto flex w-full max-w-[1320px] justify-center px-6 pt-28 pb-24 md:px-10 lg:px-14">
          <div className="flex w-full max-w-[1100px] -translate-x-[1.5vw] -translate-y-[2.5vh] flex-col items-center text-center md:-translate-x-[2vw] md:-translate-y-[6.5vh]">
              <motion.h1
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.68, ease: [0.16, 1, 0.3, 1] }}
                className="mb-14 max-w-full text-[#EDE9D8] leading-[0.8] tracking-[-0.045em] md:mb-16"
                style={{
                  fontFamily: "var(--font-hero)",
                  fontWeight: 800,
                  fontSize: "clamp(8.35rem, 27vw, 19.5rem)",
                  textShadow: "0 10px 34px rgba(6, 9, 8, 0.3)",
                }}
              >
                Vaha
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mb-10 max-w-[720px] text-xl leading-[1.38] text-[#EDE9D8]/72 md:text-2xl"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Vaha turns surplus treated water into verified local supply
                for construction, using the infrastructure the city already has.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a
                  href="#how"
                  className="group inline-flex items-center gap-2 self-start rounded-full bg-[#E1E0CC] py-1 pl-5 pr-1 text-sm text-[#060908] transition-all hover:gap-3 sm:text-base"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  See how it works
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#060908] text-[#E1E0CC] transition-transform group-hover:scale-110 sm:h-10 sm:w-10">
                    <ArrowRight size={16} />
                  </span>
                </a>
                <Link
                  href="/pilot"
                  className="inline-flex items-center gap-2 border border-white/25 text-white/80 px-6 py-3 text-base tracking-widest uppercase hover:border-white/50 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  View pilot route
                </Link>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
