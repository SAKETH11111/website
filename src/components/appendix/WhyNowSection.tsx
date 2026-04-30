"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ExternalLink } from "lucide-react";

const cards = [
  {
    title: "Policy unlock",
    stat: "50%",
    statNote: "of treated STP water can be sold",
    body: "BWSSB enabled apartment communities to commercially sell up to 50% of treated STP water for non-potable applications.",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/apartments-sign-pact-withbwssb-to-sell-stp-water/articleshow/109259296.cms",
    source: "BWSSB",
  },
  {
    title: "Construction demand",
    stat: "Ready",
    statNote: "buyers already use tanker water",
    body: "Construction sites already purchase non-potable water and receive tanker deliveries for curing, dust suppression, wheel wash, and site cleaning.",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/kspcb-warns-no-oc-if-treated-water-not-used-for-construction-works/articleshow/110545705.cms",
    source: "KSPCB",
  },
  {
    title: "The timing window",
    stat: "~10yr",
    statNote: "infrastructure without a market",
    body: "For almost a decade, the infrastructure existed without a clean commercial route. Today the infrastructure and the legal opening both exist.",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-water-supply-and-sewerage-boards-push-for-treated-water-stalled-by-lack-of-norms/articleshow/130360512.cms",
    source: "BWSSB & BAF",
  },
];

export default function WhyNowSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-now" className="bg-[#EEE8DE] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#1A5C3C] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Why Bengaluru, Why Now
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 max-w-[760px] text-[#0B0D0C] leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            The infrastructure exists. The legal opening exists. The operating layer does not.
          </motion.h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-xl border border-[#0B0D0C]/8 bg-[#F4F1EB] p-7 transition-all duration-300 hover:border-[#0B0D0C]/15 hover:shadow-lg hover:shadow-[#0B0D0C]/5"
            >
              {/* Stat highlight */}
              <div className="mb-5">
                <div
                  className="text-[#1A5C3C]"
                  style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem", letterSpacing: "-0.02em" }}
                >
                  {card.stat}
                </div>
                <div className="text-[10px] text-[#5A5A4A] uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  {card.statNote}
                </div>
              </div>

              <div
                className="mb-3 text-[15px] text-[#0B0D0C]"
                style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
              >
                {card.title}
              </div>
              <p className="mb-5 text-[13px] leading-[1.7] text-[#5A5A4A]">{card.body}</p>
              <a
                href={card.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-[#0B0D0C]/60 transition-colors hover:text-[#1A5C3C]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {card.source}
                <ExternalLink size={10} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
