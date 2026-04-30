"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid, Cell } from "recharts";

const routeRows = [
  { component: "Site pays per 12,000L load", amount: "Rs 1,200", note: "Below crisis tanker pricing" },
  { component: "Apartment payout", amount: "Rs 120", note: "Rs 10 per kL equivalent" },
  { component: "Tanker logistics", amount: "Rs 700\u2013740", note: "Local short-route assumption" },
  { component: "Vaha gross margin", amount: "Rs 340\u2013380", note: "Before overhead", highlight: true },
];

const scaleData = [
  { capture: "1%", margin: 3.29, loads: 250, usd: "$353K" },
  { capture: "5%", margin: 16.43, loads: 1250, usd: "$1.77M" },
  { capture: "10%", margin: 32.85, loads: 2500, usd: "$3.53M" },
  { capture: "20%", margin: 65.7, loads: 5000, usd: "$7.06M" },
];

const chartConfig = {
  margin: {
    label: "Annual Gross Margin (Cr)",
    color: "#1A5C3C",
  },
} satisfies ChartConfig;

const barSegments = [
  { label: "Apartment", value: 120, color: "#E5E2DC" },
  { label: "Logistics", value: 720, color: "#97B5A2" },
  { label: "Vaha margin", value: 360, color: "#1A5C3C" },
];

function StackedBarVisual() {
  const total = barSegments.reduce((a, b) => a + b.value, 0);

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-mono)" }}>
          One 12,000L load
        </span>
        <span className="text-xs text-white/60" style={{ fontFamily: "var(--font-dm-mono)" }}>
          Rs 1,200 total
        </span>
      </div>
      <div className="flex h-12 w-full overflow-hidden rounded-md">
        {barSegments.map((seg) => (
          <div
            key={seg.label}
            className="flex items-center justify-center text-[10px] font-medium transition-all duration-500"
            style={{
              width: `${(seg.value / total) * 100}%`,
              backgroundColor: seg.color,
              color: seg.color === "#1A5C3C" ? "white" : "#0B0D0C",
              fontFamily: "var(--font-dm-mono)",
            }}
          >
            {seg.value >= 200 && `Rs ${seg.value}`}
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {barSegments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-sm" style={{ backgroundColor: seg.color }} />
            <span className="text-[11px] text-white/50" style={{ fontFamily: "var(--font-dm-mono)" }}>
              {seg.label}: Rs {seg.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EconomicsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="economics" className="bg-[#060908] py-[clamp(6rem,12vw,10rem)]">
      <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
        <div ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.2em] text-[#4DB87A] font-medium"
            style={{ fontFamily: "var(--font-dm-mono)" }}
          >
            Unit Economics
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 max-w-[700px] text-white leading-[1.06]"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              letterSpacing: "-0.03em",
            }}
          >
            The route model is simple, local, and legible.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mb-14 max-w-[520px] text-[15px] leading-[1.7] text-white/45"
          >
            One unit: a 12,000L tanker load. That keeps the math
            consistent from pitch to operations.
          </motion.p>
        </div>

        <Tabs defaultValue="route" className="w-full">
          <TabsList className="mb-10 bg-transparent border border-white/10 p-0.5 h-auto rounded-lg w-fit">
            <TabsTrigger
              value="route"
              className="text-[11px] uppercase tracking-[0.12em] text-white/40 data-[state=active]:bg-white data-[state=active]:text-[#0B0D0C] px-5 py-2.5 rounded-md transition-all"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Route Breakdown
            </TabsTrigger>
            <TabsTrigger
              value="scale"
              className="text-[11px] uppercase tracking-[0.12em] text-white/40 data-[state=active]:bg-white data-[state=active]:text-[#0B0D0C] px-5 py-2.5 rounded-md transition-all"
              style={{ fontFamily: "var(--font-dm-mono)" }}
            >
              Scale Scenarios
            </TabsTrigger>
          </TabsList>

          {/* Route breakdown */}
          <TabsContent value="route">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid gap-8 lg:grid-cols-2"
            >
              {/* Visual bar */}
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <StackedBarVisual />
                <div className="mt-8 border-t border-white/8 pt-6 text-[12px] leading-relaxed text-white/30">
                  Crisis tanker benchmark: up to <strong className="text-white/50">Rs 2,400</strong> per load.
                  Vaha at Rs 1,200 saves the buyer meaningfully while generating a real margin.
                </div>
              </div>

              {/* Breakdown table */}
              <div className="rounded-xl border border-white/8 bg-white/[0.03] p-8">
                <div className="space-y-0">
                  {routeRows.map((row) => (
                    <div
                      key={row.component}
                      className={`flex items-start justify-between gap-4 py-4 border-b border-white/6 last:border-0 ${
                        row.highlight ? "rounded-lg bg-[#1A5C3C]/12 -mx-4 px-4" : ""
                      }`}
                    >
                      <div>
                        <div className={`text-[13px] ${row.highlight ? "text-[#4DB87A] font-medium" : "text-white/75"}`}>
                          {row.component}
                        </div>
                        <div className="mt-0.5 text-[11px] text-white/30">{row.note}</div>
                      </div>
                      <div
                        className={`shrink-0 text-[13px] font-medium tabular-nums ${row.highlight ? "text-[#4DB87A]" : "text-white"}`}
                        style={{ fontFamily: "var(--font-dm-mono)" }}
                      >
                        {row.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </TabsContent>

          {/* Scale scenarios with actual bar chart */}
          <TabsContent value="scale">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-xl border border-white/8 bg-white/[0.03] p-8"
            >
              <div className="mb-6 flex items-baseline justify-between">
                <span className="text-xs text-white/40 uppercase tracking-wider" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Annual gross margin by capture rate
                </span>
                <span className="text-[11px] text-white/25" style={{ fontFamily: "var(--font-dm-mono)" }}>
                  Before overhead
                </span>
              </div>

              <ChartContainer
                config={chartConfig}
                className="h-[340px] w-full [&_.recharts-cartesian-axis-tick_text]:!fill-white/40 [&_.recharts-cartesian-grid_line]:!stroke-white/8"
              >
                <BarChart
                  data={scaleData}
                  margin={{ top: 8, right: 8, bottom: 8, left: 0 }}
                >
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis
                    dataKey="capture"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12, fontFamily: "var(--font-dm-mono)" }}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11, fontFamily: "var(--font-dm-mono)" }}
                    tickFormatter={(v) => `${v} Cr`}
                    width={60}
                  />
                  <ChartTooltip
                    content={
                      <ChartTooltipContent
                        formatter={(value, name, item) => (
                          <div className="flex flex-col gap-1">
                            <span className="font-medium">Rs {String(value)} Cr/year</span>
                            <span className="text-[10px] text-muted-foreground">
                              {item.payload?.loads?.toLocaleString()} loads/day · {item.payload?.usd}
                            </span>
                          </div>
                        )}
                      />
                    }
                  />
                  <Bar
                    dataKey="margin"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={80}
                  >
                    {scaleData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index === scaleData.length - 1 ? "#4DB87A" : "#1A5C3C"}
                        opacity={0.6 + index * 0.13}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>

              {/* Bottom row stats */}
              <div className="mt-6 grid grid-cols-4 gap-px rounded-lg overflow-hidden bg-white/6">
                {scaleData.map((s) => (
                  <div key={s.capture} className="bg-[#060908] p-4 text-center">
                    <div className="text-[11px] text-white/30" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {s.capture} capture
                    </div>
                    <div className="mt-1 text-sm font-medium text-white" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {s.usd}
                    </div>
                    <div className="mt-0.5 text-[10px] text-white/25" style={{ fontFamily: "var(--font-dm-mono)" }}>
                      {s.loads.toLocaleString()} loads/day
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
