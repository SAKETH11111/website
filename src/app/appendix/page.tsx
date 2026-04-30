import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  ExternalLink,
  FileDown,
  FileText,
  PlayCircle,
} from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const appendixPdfHref = "/vaha_judge_appendix%20(1).pdf";
const pitchDeckHref = "/Vaha%20-%20earthshot.pdf";
const pitchVideoHref = "/Vaha-project.mp4";

const marketStats = [
  {
    label: "Citywide demand",
    value: "2,632 MLD",
    note: "WELL Labs urban water balance",
    width: "100%",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
  },
  {
    label: "Cauvery piped supply",
    value: "1,460-1,470 MLD",
    note: "Current city supply baseline",
    width: "56%",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
  },
  {
    label: "Decentralised reuse potential",
    value: "615 MLD",
    note: "Existing treated wastewater capacity",
    width: "23%",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
  },
  {
    label: "Apartment surplus wedge",
    value: "300 MLD",
    note: "Focused exchange market for Vaha",
    width: "11%",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
  },
];

const vahaSteps = [
  {
    number: "01",
    title: "Match",
    body: "Identify apartment STP surplus and pair it with nearby construction demand.",
  },
  {
    number: "02",
    title: "Verify",
    body: "Issue a Water Acceptance Pack before dispatch so the buyer can review source, intended use, and quality documentation.",
  },
  {
    number: "03",
    title: "Deliver",
    body: "Use existing tanker operators and existing site workflows to complete the route.",
  },
];

const acceptancePackItems = [
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

const routeEconomics = [
  {
    component: "Site pays per 12,000L load",
    amount: "Rs 1,200",
    interpretation: "Materially below crisis tanker pricing",
  },
  {
    component: "Apartment payout",
    amount: "Rs 120",
    interpretation: "Rs 10/kL equivalent",
  },
  {
    component: "Tanker logistics",
    amount: "Rs 700-740",
    interpretation: "Local short-route assumption",
  },
  {
    component: "Vaha gross margin",
    amount: "Rs 340-380",
    interpretation: "Gross margin before overhead",
  },
];

const loadComparison = [
  {
    label: "Treated water equivalent",
    value: "Rs 120-960",
    width: "40%",
    tone: "bg-[#E3DDD3] text-[#0B0D0C]",
  },
  {
    label: "Logistics cost window",
    value: "Rs 700-740",
    width: "30%",
    tone: "bg-[#97B5A2] text-[#0B0D0C]",
  },
  {
    label: "Vaha route margin",
    value: "~Rs 360",
    width: "18%",
    tone: "bg-[#1A5C3C] text-white",
  },
  {
    label: "Crisis tanker benchmark",
    value: "Up to Rs 2,400",
    width: "12%",
    tone: "bg-[#0B0D0C] text-white",
  },
];

const scaleScenarios = [
  {
    capture: "1%",
    loads: "250 / day",
    inr: "Rs 3.29 Cr / year",
    usd: "~$353K",
  },
  {
    capture: "5%",
    loads: "1,250 / day",
    inr: "Rs 16.43 Cr / year",
    usd: "~$1.77M",
  },
  {
    capture: "10%",
    loads: "2,500 / day",
    inr: "Rs 32.85 Cr / year",
    usd: "~$3.53M",
  },
  {
    capture: "20%",
    loads: "5,000 / day",
    inr: "Rs 65.70 Cr / year",
    usd: "~$7.06M",
  },
];

const validationLayers = [
  {
    title: "Operator-side validation",
    body: "In a direct exchange, Vikas Brahmavar of Boson Whitewater confirmed that adoption comes down to quality, reliability, and cost. Those are the same three pillars Vaha is designed around.",
    href: "https://bosonwhitewater.com/",
    source: "Boson Whitewater",
  },
  {
    title: "Buyer-side validation",
    body: "Buyer-side discovery reinforced the same point from the opposite direction: site managers do not switch just because water is cheaper. They switch when they believe the source is trustworthy and the handoff is properly documented.",
    href: "",
    source: "Field interviews",
  },
  {
    title: "Market proof",
    body: "WELL Labs found that 88% of potential users are within 2 km of an existing or planned DSTP and that demand is significantly larger than decentralised supply. Urban Acres reports that South City already processes and sells surplus treated water in Bengaluru.",
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
    source: "WELL Labs and Urban Acres",
  },
];

const pilotConditions = [
  "One apartment STP source",
  "One construction buyer",
  "One tanker partner",
  "One quality and signoff workflow",
];

const pilotValidation = [
  "The source is real, compliant, and consistently producing surplus treated water.",
  "The buyer already uses non-potable tanker water and has a real receiving workflow.",
  "The tanker partner can complete the route inside the economic window.",
  "The Water Acceptance Pack is strong enough for pre-dispatch signoff.",
  "The payment and proof-of-delivery flow makes the next route easier, not harder.",
];

const outreachTracks = [
  {
    title: "Source discovery",
    body: "Identify apartments with recent compliant lab reports and real surplus volume.",
  },
  {
    title: "Buyer discovery",
    body: "Validate which construction sites already pay for tanker water in the same geography and what assurance they need to switch.",
  },
  {
    title: "Logistics discovery",
    body: "Confirm route costs, turnaround constraints, and reliability with tanker partners.",
  },
];

const riskControls = [
  "Stay within non-potable use cases",
  "Keep route distances short",
  "Use documented source reports",
  "Require pre-dispatch signoff",
  "Treat rejected loads as a critical learning event",
];

const sourceList = [
  {
    title: "WELL Labs, How Water Flows Through Bengaluru: Urban Water Balance Report",
    href: "https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf",
  },
  {
    title: "WELL Labs, Strategies to Catalyse Safe, Efficient, and Reliable Decentralised Water Reuse in Bengaluru",
    href: "https://welllabs.org/strategies-safe-reliable-decentralised-water-reuse-bengaluru/",
  },
  {
    title: "WELL Labs, Experts Explore Scaling of Wastewater Reuse in Urban India",
    href: "https://welllabs.org/workshop-decentralised-wastewater-reuse/",
  },
  {
    title: "Times of India, KSPCB warns no OC if treated water not used for construction works",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/kspcb-warns-no-oc-if-treated-water-not-used-for-construction-works/articleshow/110545705.cms",
  },
  {
    title: "Times of India, Apartments sign pact with BWSSB to sell STP water",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/apartments-sign-pact-withbwssb-to-sell-stp-water/articleshow/109259296.cms",
  },
  {
    title: "Times of India, BWSSB's push for treated water stalled by lack of norms",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-water-supply-and-sewerage-boards-push-for-treated-water-stalled-by-lack-of-norms/articleshow/130360512.cms",
  },
  {
    title: "Times of India, Apartments not finding tankers to sell treated water",
    href: "https://timesofindia.indiatimes.com/city/bengaluru/city-apartments-not-finding-tankers-to-sell-treated-water/articleshow/108958603.cms",
  },
  {
    title: "Bangalore Mirror, Apartment complexes can sell treated water",
    href: "https://bangaloremirror.indiatimes.com/bangalore/others/apartment-complexes-can-sell-treated-water/amp_articleshow/108717307.cms",
  },
  {
    title: "Urban Acres, Bengaluru residences intensify water management post summer water scarcity",
    href: "https://urbanacres.in/bengaluru-residences-intensify-water-management-post-summer-water-scarcity/",
  },
  {
    title: "Boson Whitewater official site",
    href: "https://bosonwhitewater.com/",
  },
  {
    title: "News Karnataka, Bengaluru turns to treated wastewater as industrial water demand surges",
    href: "https://newskarnataka.com/bengaluru/bengaluru-turns-to-treated-wastewater-as-industrial-water-demand-surges/31012026",
  },
];

function SectionIntro({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mb-10 max-w-[760px]">
      <div
        className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[#6A6A58]"
        style={{ fontFamily: "var(--font-dm-mono)" }}
      >
        {eyebrow}
      </div>
      <h2
        className="mb-4 text-[#0B0D0C] leading-[1.06]"
        style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      <p className="text-sm leading-relaxed text-[#6A6A58] md:text-[15px]">
        {body}
      </p>
    </div>
  );
}

function SourceAnchor({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-2 underline-offset-4 hover:underline ${className}`}
    >
      <span>{children}</span>
      <ExternalLink size={14} strokeWidth={1.8} />
    </a>
  );
}

export default function AppendixPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#F4F1EB]">
        <section className="bg-[#060908] pt-[clamp(7rem,14vw,12rem)] pb-[clamp(4.5rem,8vw,7rem)] text-white">
          <div className="mx-auto grid max-w-[1320px] gap-12 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-14">
            <div>
              <div
                className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/35"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Appendix / Article
              </div>
              <h1
                className="mb-6 max-w-[720px] leading-[1.02]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2.2rem, 5vw, 4.8rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                The full Vaha case, rendered for the web.
              </h1>
              <p className="mb-8 max-w-[620px] text-base leading-relaxed text-white/58">
                This is the complete native version of the appendix and supporting
                material: the pitch film, the judge appendix, the economics,
                the pilot logic, and the source trail behind the claims.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={pitchVideoHref}
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 text-[#0B0D0C] transition-colors hover:bg-[#F4F1EB]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <PlayCircle size={16} />
                  Watch the film
                </a>
                <a
                  href={appendixPdfHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white transition-colors hover:bg-white/8"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <FileDown size={16} />
                  Download appendix PDF
                </a>
                <a
                  href={pitchDeckHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white/80 transition-colors hover:border-white/40 hover:text-white"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  <FileText size={16} />
                  Open pitch deck
                </a>
              </div>
            </div>

            <div className="border border-white/10 bg-white/4 p-3 backdrop-blur-sm">
              <video
                controls
                playsInline
                className="aspect-video w-full bg-black object-cover"
              >
                <source src={pitchVideoHref} type="video/mp4" />
              </video>
              <div className="grid gap-4 border-t border-white/10 px-3 py-4 md:grid-cols-3">
                {[
                  { label: "Format", value: "Video pitch + appendix" },
                  { label: "Focus", value: "Route trust layer" },
                  { label: "Pilot", value: "Bellandur corridor" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      className="mb-1 text-[10px] uppercase tracking-[0.18em] text-white/28"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {item.label}
                    </div>
                    <div className="text-sm text-white/70">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#0B0D0C]/8 bg-[#EEE8DE] py-5">
          <div className="mx-auto flex max-w-[1320px] flex-wrap gap-3 px-6 md:px-10 lg:px-14">
            {[
              { label: "Market gap", href: "#market-gap" },
              { label: "Economics", href: "#unit-economics" },
              { label: "Validation", href: "#validation" },
              { label: "Pilot", href: "#pilot-plan" },
              { label: "Sources", href: "#sources" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="inline-flex items-center gap-2 border border-[#0B0D0C]/10 px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-[#6A6A58] transition-colors hover:border-[#0B0D0C]/20 hover:text-[#0B0D0C]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <div className="border border-[#0B0D0C]/12 bg-[#F8F5EF] p-8 md:p-10">
              <p
                className="max-w-[940px] text-[#0B0D0C] leading-relaxed"
                style={{ fontFamily: "var(--font-inter)", fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
              >
                <strong>Vaha</strong> is the missing exchange layer for Bengaluru&apos;s
                treated water. Apartment complexes already generate treated
                wastewater through on-site STPs. Construction sites nearby already
                buy tanker water for non-potable use. What is missing is the trusted
                system that turns those two facts into a repeatable market. Vaha
                supplies that system through matching, verification, documentation,
                and route coordination.
              </p>
            </div>
          </div>
        </section>

        <section id="market-gap" className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="1. The Market Gap"
              title="Bengaluru's problem is structural, not seasonal."
              body="The city already treats water every day. The market failure is that treated water and nearby non-potable demand remain disconnected."
            />

            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="space-y-5 text-sm leading-relaxed text-[#6A6A58] md:text-[15px]">
                <p>
                  WELL Labs' urban water balance work estimates citywide demand
                  at roughly <strong className="text-[#0B0D0C]">2,632 MLD</strong>,
                  against Cauvery-derived piped supply of roughly{" "}
                  <strong className="text-[#0B0D0C]">1,460-1,470 MLD</strong>.{" "}
                  <SourceAnchor
                    href="https://welllabs.org/wp-content/uploads/2023/10/WELL-Labs_Bengaluru-Urban-Water-Balance-Report.pdf"
                    className="text-[#0B0D0C]"
                  >
                    WELL Labs urban water balance
                  </SourceAnchor>
                </p>
                <p>
                  At the same time, decentralised treatment capacity already
                  exists at meaningful scale. WELL Labs' Bengaluru reuse strategy
                  states that the city has{" "}
                  <strong className="text-[#0B0D0C]">3,500+ decentralised STPs</strong>
                  {" "}and that current systems could support reuse of up to{" "}
                  <strong className="text-[#0B0D0C]">615 MLD</strong> of treated
                  wastewater.
                </p>
                <p>
                  Public reporting and stakeholder discourse consistently frame
                  the apartment-surplus opportunity around roughly{" "}
                  <strong className="text-[#0B0D0C]">300 MLD</strong>. That is
                  the wedge Vaha is designed around, because it is large enough
                  to matter and narrow enough to model clearly.
                </p>
              </div>

              <div className="border border-[#0B0D0C]/10 bg-white p-6 md:p-8">
                <div
                  className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#6A6A58]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Bengaluru water stack
                </div>
                <div className="space-y-5">
                  {marketStats.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex items-baseline justify-between gap-4">
                        <SourceAnchor
                          href={item.href}
                          className="text-sm text-[#0B0D0C]"
                        >
                          {item.label}
                        </SourceAnchor>
                        <span
                          className="text-sm text-[#0B0D0C]"
                          style={{ fontFamily: "var(--font-dm-mono)", fontWeight: 500 }}
                        >
                          {item.value}
                        </span>
                      </div>
                      <div className="h-3 bg-[#E9E4D9]">
                        <div
                          className="h-full bg-[#0B0D0C]"
                          style={{ width: item.width }}
                        />
                      </div>
                      <div className="mt-2 text-xs text-[#6A6A58]">{item.note}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#0B0D0C]/8 bg-[#EEE8DE] py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="2. Why Bengaluru, and Why Now"
              title="The infrastructure exists, and now the legal opening does too."
              body="Apartment STPs were built into Bengaluru's residential growth pattern long before a resale market existed. Today, the infrastructure exists and the legal opening exists. The operating layer still does not."
            />
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border border-[#0B0D0C]/10 bg-[#F4F1EB] p-6">
                <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Policy unlock
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6A6A58]">
                  BWSSB enabled apartment communities to commercially sell up to
                  50% of treated STP water for non-potable applications such as construction.
                </p>
                <SourceAnchor
                  href="https://timesofindia.indiatimes.com/city/bengaluru/apartments-sign-pact-withbwssb-to-sell-stp-water/articleshow/109259296.cms"
                  className="text-[11px] text-[#0B0D0C]"
                >
                  BWSSB reporting
                </SourceAnchor>
              </div>
              <div className="border border-[#0B0D0C]/10 bg-[#F4F1EB] p-6">
                <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Construction demand
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6A6A58]">
                  Construction is the right first buyer because it already purchases
                  non-potable water and already receives tanker deliveries for curing,
                  dust suppression, wheel wash, and site cleaning.
                </p>
                <SourceAnchor
                  href="https://timesofindia.indiatimes.com/city/bengaluru/kspcb-warns-no-oc-if-treated-water-not-used-for-construction-works/articleshow/110545705.cms"
                  className="text-[11px] text-[#0B0D0C]"
                >
                  KSPCB and IISc coverage
                </SourceAnchor>
              </div>
              <div className="border border-[#0B0D0C]/10 bg-[#F4F1EB] p-6">
                <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Timing
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6A6A58]">
                  For almost a decade, the infrastructure existed without a clean
                  commercial route. That makes this a market-creation problem,
                  not a science problem.
                </p>
                <SourceAnchor
                  href="https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-water-supply-and-sewerage-boards-push-for-treated-water-stalled-by-lack-of-norms/articleshow/130360512.cms"
                  className="text-[11px] text-[#0B0D0C]"
                >
                  BWSSB / BAF follow-up
                </SourceAnchor>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="3. Why This Has Not Been Solved Already"
              title="The problem is not treatment. It is trust, transport, and coordination."
              body="Supply exists. Demand exists. Policy exists. But there is no standardized layer handling quality documentation, dispatch, chain-of-custody, and payment flow."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Trust",
                  body: "Construction buyers ask whether they can rely on what is being delivered, whether it matches the intended use, and who is accountable if something goes wrong.",
                },
                {
                  title: "Transport",
                  body: "Even if a source and buyer are close to one another, there is no default, trusted, repeatable route that moves treated water from apartment STPs to site sumps.",
                },
                {
                  title: "Coordination",
                  body: "The facilitator layer is still missing. That is why the BWSSB and BAF initiative matters, and why it still has not turned into a clean operating market.",
                },
              ].map((item) => (
                <div key={item.title} className="border border-[#0B0D0C]/10 p-6">
                  <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                    {item.title}
                  </div>
                  <p className="text-sm leading-relaxed text-[#6A6A58]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0B0D0C]/8 bg-[#060908] py-16 text-white">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="4. What Vaha Actually Does"
              title="Vaha turns surplus STP water into a verified local supply loop."
              body="The point is not to replace the underlying infrastructure. STPs already exist. Tankers already exist. Buyers already exist. Vaha creates the trusted operating protocol that lets those systems transact cleanly and repeatedly."
            />
            <div className="grid gap-px bg-white/12 md:grid-cols-3">
              {vahaSteps.map((step) => (
                <div key={step.number} className="bg-[#060908] p-7">
                  <div className="mb-4 text-[11px] text-[#4DB87A]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                    {step.number}
                  </div>
                  <div className="mb-2 text-white" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem" }}>
                    {step.title}
                  </div>
                  <p className="text-sm leading-relaxed text-white/55">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="5. The Water Acceptance Pack"
              title="This is how trust becomes an operating workflow."
              body="The Water Acceptance Pack turns alternative water into something a site manager can evaluate and approve. It also starts the chain-of-custody record that makes repeat transactions possible."
            />
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
              {acceptancePackItems.map((item) => (
                <div
                  key={item}
                  className="border border-[#0B0D0C]/10 bg-white p-4 text-sm text-[#0B0D0C]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="unit-economics" className="border-y border-[#0B0D0C]/8 bg-[#EEE8DE] py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="6. Unit Economics"
              title="The route model is simple, local, and legible."
              body="Both the problem framing and the economics use the same unit: one 12,000L load. That keeps the route math consistent from pitch to operations."
            />

            <div className="mb-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="border border-[#0B0D0C]/10 bg-white p-6">
                <div
                  className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#6A6A58]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Load comparison
                </div>
                <div className="space-y-4">
                  {loadComparison.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex justify-between gap-4 text-sm">
                        <span className="text-[#0B0D0C]">{item.label}</span>
                        <span style={{ fontFamily: "var(--font-dm-mono)" }}>{item.value}</span>
                      </div>
                      <div className="h-11 bg-[#E7E1D7]">
                        <div
                          className={`flex h-full items-center px-4 text-xs uppercase tracking-[0.16em] ${item.tone}`}
                          style={{ width: item.width, fontFamily: "var(--font-dm-mono)" }}
                        >
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-[#0B0D0C]/10 bg-white p-6">
                <div
                  className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#6A6A58]"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Route economics
                </div>
                <div className="space-y-4">
                  {routeEconomics.map((row) => (
                    <div
                      key={row.component}
                      className="grid gap-2 border-b border-[#0B0D0C]/8 pb-4 last:border-0 last:pb-0 md:grid-cols-[1.2fr_0.6fr_1fr]"
                    >
                      <div className="text-[#0B0D0C]">{row.component}</div>
                      <div
                        className="text-[#0B0D0C]"
                        style={{ fontFamily: "var(--font-dm-mono)", fontWeight: 500 }}
                      >
                        {row.amount}
                      </div>
                      <div className="text-sm text-[#6A6A58]">{row.interpretation}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mb-12 border border-[#0B0D0C]/10 bg-white p-6">
              <div
                className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[#6A6A58]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                How the numbers are calculated
              </div>
              <div className="grid gap-4 md:grid-cols-4">
                {[
                  "300 MLD focused surplus market",
                  "12,000L per route-sized load",
                  "25,000 loads / day at full capture",
                  "Rs 360 midpoint route margin / load",
                ].map((step) => (
                  <div key={step} className="border border-[#0B0D0C]/10 p-4 text-sm text-[#0B0D0C]">
                    {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-[#0B0D0C]/10 bg-white p-6">
              <div
                className="mb-5 text-[10px] uppercase tracking-[0.2em] text-[#6A6A58]"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                Scaling the route model
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {scaleScenarios.map((item) => (
                  <div key={item.capture} className="border border-[#0B0D0C]/10 p-5">
                    <div className="mb-2 text-[11px] text-[#6A6A58]" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      Capture
                    </div>
                    <div className="mb-4 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2rem" }}>
                      {item.capture}
                    </div>
                    <div className="mb-2 text-sm text-[#0B0D0C]">{item.loads}</div>
                    <div className="mb-1 text-sm text-[#6A6A58]">{item.inr}</div>
                    <div className="text-sm text-[#6A6A58]">{item.usd}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="7. Competitive Positioning"
              title="Vaha is not trying to out-Boson Boson."
              body="Boson Whitewater proves that treated-water demand is already real in Bengaluru. Vaha's position is different: it solves the exchange problem by coordinating existing sources, existing carriers, and existing buyers with far less owned infrastructure."
            />
            <div className="grid gap-6 md:grid-cols-2">
              <div className="border border-[#0B0D0C]/10 p-6">
                <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Boson demonstrates
                </div>
                <ul className="space-y-2 text-sm leading-relaxed text-[#6A6A58]">
                  <li>Buyers will pay for alternative water.</li>
                  <li>Quality assurance matters.</li>
                  <li>Tanker-delivered treated-water markets already exist.</li>
                </ul>
              </div>
              <div className="border border-[#0B0D0C]/10 p-6">
                <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  Vaha stays focused
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#6A6A58]">
                  The first version is not broad. It is tightly scoped to one
                  corridor, one buyer segment, and one trust workflow.
                </p>
                <div className="flex flex-wrap gap-3">
                  <SourceAnchor href="https://bosonwhitewater.com/" className="text-[11px] text-[#0B0D0C]">
                    Boson official site
                  </SourceAnchor>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="validation" className="border-y border-[#0B0D0C]/8 bg-[#EEE8DE] py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="8. Validation"
              title="The validation story rests on three layers."
              body="The point is not to imply traction that does not exist. The point is to show that operator logic, buyer logic, and published market evidence already line up."
            />
            <div className="grid gap-px bg-[#0B0D0C]/10 md:grid-cols-3">
              {validationLayers.map((item) => (
                <div key={item.title} className="bg-[#F4F1EB] p-7">
                  <div className="mb-4 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                    {item.title}
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-[#6A6A58]">{item.body}</p>
                  {item.href ? (
                    <SourceAnchor href={item.href} className="text-[11px] text-[#0B0D0C]">
                      {item.source}
                    </SourceAnchor>
                  ) : (
                    <div
                      className="text-[11px] text-[#6A6A58]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {item.source}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-10 border border-[#0B0D0C]/12 bg-white p-8 text-center">
              <p
                className="text-[#0B0D0C]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                The transaction is already possible. It is just not yet organized into a repeatable local market.
              </p>
            </div>
          </div>
        </section>

        <section id="pilot-plan" className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="9. Pilot Plan"
              title="One corridor. One proof point. One repeatable loop."
              body="The first pilot corridor is the Bellandur to Kadubeesanahalli stretch of Outer Ring Road. The first 90 days are designed around the minimum evidence required to show that Vaha is not merely an idea, but a workable operating model."
            />

            <div className="mb-12 border border-[#0B0D0C] bg-[#0B0D0C] px-8 py-10 text-white">
              <div
                className="mb-3 text-[10px] uppercase tracking-[0.22em] text-white/40"
                style={{ fontFamily: "var(--font-dm-mono)" }}
              >
                First 90 days
              </div>
              <div
                className="leading-[1.04]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                  letterSpacing: "-0.03em",
                }}
              >
                One route. Thirty paid deliveries. Zero rejected loads.
              </div>
            </div>

            <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="border border-[#0B0D0C]/10 p-6">
                <div className="mb-4 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  The first phase validates
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-[#6A6A58]">
                  {pilotConditions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="border border-[#0B0D0C]/10 p-6">
                <div className="mb-4 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                  What the pilot must prove in sequence
                </div>
                <div className="space-y-4">
                  {pilotValidation.map((item, index) => (
                    <div key={item} className="grid gap-3 border-b border-[#0B0D0C]/8 pb-4 last:border-0 last:pb-0 md:grid-cols-[40px_1fr]">
                      <div
                        className="text-[#6A6A58]"
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <p className="text-sm leading-relaxed text-[#6A6A58]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {outreachTracks.map((item) => (
                <div key={item.title} className="border border-[#0B0D0C]/10 p-6">
                  <div className="mb-3 text-[#0B0D0C]" style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}>
                    {item.title}
                  </div>
                  <p className="text-sm leading-relaxed text-[#6A6A58]">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[#0B0D0C]/8 bg-[#EEE8DE] py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="10. Risk and Control"
              title="The core risk is not water scarcity. It is repeatability failure."
              body="The central risk is that trust failures, route inconsistency, or weak documentation make repeatability impossible. That is why the first version of the company is designed around control rather than breadth."
            />
            <div className="flex flex-wrap gap-3">
              {riskControls.map((item) => (
                <div
                  key={item}
                  className="border border-[#0B0D0C]/10 bg-[#F4F1EB] px-4 py-3 text-sm text-[#0B0D0C]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="11. Team"
              title="Rudaiba Tarannum"
              body="This version stays aligned with the current final appendix team listing."
            />
          </div>
        </section>

        <section id="sources" className="border-t border-[#0B0D0C]/8 py-16">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <SectionIntro
              eyebrow="12. Sources"
              title="Every major claim has a visible source trail."
              body="The web version keeps the sources close to the claims, but this is the complete reference list used across the appendix."
            />
            <div className="grid gap-3">
              {sourceList.map((item, index) => (
                <SourceAnchor
                  key={item.href}
                  href={item.href}
                  className="justify-between border border-[#0B0D0C]/10 bg-white px-5 py-4 text-sm text-[#0B0D0C] transition-colors hover:border-[#0B0D0C]/20"
                >
                  <span className="flex items-start gap-4">
                    <span
                      className="shrink-0 text-[#6A6A58]"
                      style={{ fontFamily: "var(--font-dm-mono)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.title}</span>
                  </span>
                </SourceAnchor>
              ))}
            </div>
            <div className="mt-14 border-t border-[#0B0D0C]/10 pt-10 text-center">
              <p
                className="mx-auto max-w-[920px] text-[#0B0D0C] leading-[1.08]"
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "clamp(1.4rem, 3vw, 2.6rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                Bengaluru does not need to wait for more water. It needs a better way to move the water it already has.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 border border-[#0B0D0C]/10 px-5 py-3 text-[#0B0D0C] transition-colors hover:border-[#0B0D0C]/20"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  Back to home
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0B0D0C] px-5 py-3 text-white transition-colors hover:bg-[#1A5C3C]"
                  style={{ fontFamily: "var(--font-pixel)" }}
                >
                  Get in touch
                  <ArrowUpRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
