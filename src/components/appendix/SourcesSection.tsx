"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const sources = [
  {
    title: "WELL Labs, How Water Flows Through Bengaluru: Urban Water Balance Report",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
    tag: "Market data",
  },
  {
    title: "WELL Labs, Strategies to Catalyse Safe, Efficient, and Reliable Decentralised Water Reuse in Bengaluru",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
    tag: "Reuse strategy",
  },
  {
    title: "WELL Labs, Experts Explore Scaling of Wastewater Reuse in Urban India",
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
    tag: "Market proof",
  },
  {
    title: "Times of India, KSPCB warns no OC if treated water not used for construction works",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/kspcb-warns-no-oc-if-treated-water-not-used-for-construction-works/articleshow/110545705.cms",
    tag: "Regulation",
  },
  {
    title: "Times of India, Apartments sign pact with BWSSB to sell STP water",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/apartments-sign-pact-withbwssb-to-sell-stp-water/articleshow/109259296.cms",
    tag: "Policy",
  },
  {
    title: "Times of India, BWSSB's push for treated water stalled by lack of norms",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-water-supply-and-sewerage-boards-push-for-treated-water-stalled-by-lack-of-norms/articleshow/130360512.cms",
    tag: "Policy",
  },
  {
    title: "Times of India, Apartments not finding tankers to sell treated water",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/city-apartments-not-finding-tankers-to-sell-treated-water/articleshow/108958603.cms",
    tag: "Coordination gap",
  },
  {
    title: "Bangalore Mirror, Apartment complexes can sell treated water",
    href: "https://bangaloremirror.indiatimes.com/bangalore/others/apartment-complexes-can-sell-treated-water/amp_articleshow/108717307.cms",
    tag: "Policy",
  },
  {
    title: "Urban Acres, Bengaluru residences intensify water management post summer water scarcity",
    href: "https://urbanacres.in/bengaluru-residences-intensify-water-management-post-summer-water-scarcity/",
    tag: "Market proof",
  },
  {
    title: "Boson Whitewater official site",
    href: "https://bosonwhitewater.com/",
    tag: "Competitive",
  },
  {
    title: "News Karnataka, Bengaluru turns to treated wastewater as industrial water demand surges",
    href: "https://newskarnataka.com/bengaluru/bengaluru-turns-to-treated-wastewater-as-industrial-water-demand-surges/31012026",
    tag: "Competitive",
  },
];

const tagColors: Record<string, string> = {
  "Market data": "bg-[#1A5C3C]/10 text-[#1A5C3C]",
  "Reuse strategy": "bg-[#1A5C3C]/10 text-[#1A5C3C]",
  "Market proof": "bg-[#0B0D0C]/5 text-[#0B0D0C]/80",
  Regulation: "bg-amber-500/10 text-amber-700",
  Policy: "bg-blue-500/10 text-blue-700",
  "Coordination gap": "bg-red-500/10 text-red-700",
  Competitive: "bg-purple-500/10 text-purple-700",
};

export default function SourcesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sources" className="bg-[#F4F1EB] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Sources
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-[640px] text-[#0B0D0C] leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Every major claim has a visible source trail.
          </motion.h2>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {sources.map((s, i) => (
            <motion.a
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
              className="group flex flex-col justify-between gap-4 rounded-xl border border-[#0B0D0C]/8 bg-white p-5 transition-all duration-200 hover:border-[#0B0D0C]/20 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-[14px] leading-[1.6] text-[#0B0D0C]">
                  {s.title}
                </span>
                <ExternalLink
                  size={14}
                  className="mt-1 shrink-0 text-[#0B0D0C]/30 transition-colors group-hover:text-[#0B0D0C]"
                />
              </div>
              <div>
                <span
                  className={`inline-flex items-center rounded-md px-2.5 py-1 text-[10px] font-medium ${tagColors[s.tag] || "bg-gray-100 text-gray-700"}`}
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  {s.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing statement */}
        <div className="mt-32 rounded-2xl bg-[#0B0D0C] px-8 py-20 text-center md:px-16">
          <p
            className="mx-auto max-w-[900px] text-white leading-[1.1]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.8vw, 3.4rem)",
              letterSpacing: "-0.03em",
            }}
          >
            Bengaluru does not need to wait for more water. It needs a better
            way to move the water it already has.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-transparent px-8 text-[13px] font-medium text-white transition-all hover:bg-white/10"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-white px-8 text-[13px] font-medium text-[#0B0D0C] transition-all hover:bg-[#E5E2DC]"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Get in touch
              <ExternalLink size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
