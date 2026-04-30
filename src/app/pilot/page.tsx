import Nav from "@/components/Nav";
import PilotCorridor from "@/components/sections/PilotCorridor";
import Footer from "@/components/Footer";
import Link from "next/link";

const validationConditions = [
  {
    n: "01",
    title: "Source is real, compliant, producing surplus",
    detail:
      "The apartment STP is operational, permitted, and producing treated water beyond its own consumption needs on a consistent basis.",
  },
  {
    n: "02",
    title: "Buyer already uses tanker water with a receiving workflow",
    detail:
      "The construction site currently takes tanker deliveries. No new infrastructure is needed — we route into a workflow that already exists.",
  },
  {
    n: "03",
    title: "Tanker partner can complete route within economic window",
    detail:
      "The logistics provider can cover the route distance and deliver within the price window that makes the transaction viable for all three parties.",
  },
  {
    n: "04",
    title: "Water Acceptance Pack strong enough for pre-dispatch signoff",
    detail:
      "The WAP parameters and signoff workflow are sufficient for the buyer's site manager to approve the load before it leaves the source.",
  },
  {
    n: "05",
    title: "Payment and proof-of-delivery flow enables the next route",
    detail:
      "The financial settlement and delivery record create the foundation for repeat transactions — not just a one-time pilot.",
  },
];

export default function PilotPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header section */}
        <section className="bg-[#060908] pt-[clamp(7rem,14vw,12rem)] pb-[clamp(4rem,8vw,7rem)]">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <div
              className="text-[10px] tracking-[0.22em] uppercase text-white/30 mb-6"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Pilot
            </div>
            <h1
              className="text-white leading-[1.05] mb-6 max-w-[700px]"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 4rem)",
                letterSpacing: "-0.025em",
              }}
            >
              One corridor. One repeatable loop.
            </h1>
            <p
              className="text-white/40 text-base leading-relaxed max-w-[480px]"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              The first 90-day proof point for Vaha&apos;s route model.
            </p>
          </div>
        </section>

        {/* Pilot corridor component */}
        <PilotCorridor />

        {/* Validation conditions */}
        <section className="bg-[#F4F1EB] py-[clamp(4rem,8vw,7rem)] border-t border-[#0B0D0C]/10">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">

            <h2
              className="text-[#0B0D0C] leading-[1.1] mb-14 max-w-[560px]"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 700,
                fontSize: "clamp(1.4rem, 2.8vw, 2.25rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Five conditions the pilot must prove.
            </h2>

            <div className="border-t border-[#0B0D0C]/10">
              {validationConditions.map(({ n, title, detail }) => (
                <div
                  key={n}
                  className="grid grid-cols-12 gap-6 py-8 border-b border-[#0B0D0C]/8"
                >
                  <div className="col-span-1 pt-0.5">
                    <span
                      className="text-[11px] tabular-nums text-[#6A6A58]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {n}
                    </span>
                  </div>
                  <div className="col-span-11 md:col-span-4">
                    <h3
                      className="text-[#0B0D0C]"
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 600,
                        fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {title}
                    </h3>
                  </div>
                  <div className="col-span-11 md:col-span-6 col-start-2 md:col-start-auto">
                    <p className="text-[#6A6A58] text-sm leading-relaxed">{detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom links */}
        <section className="bg-[#F4F1EB] py-12 border-t border-[#0B0D0C]/8">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14 flex flex-wrap items-center gap-6">
            <Link
              href="/"
              className="text-xs tracking-widest uppercase text-[#6A6A58] hover:text-[#0B0D0C] transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              ← Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-[#0B0D0C] text-[#F4F1EB] text-xs tracking-widest uppercase font-semibold px-8 py-4 hover:bg-[#1A5C3C] transition-colors"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Get involved
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
