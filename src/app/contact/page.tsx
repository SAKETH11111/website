"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  org: z.string().min(1, "Organisation is required"),
  email: z.string().email("Valid email required"),
  role: z.enum(
    [
      "STP Operator",
      "Construction Developer",
      "Tanker Operator",
      "Investor",
      "Researcher",
      "Other",
    ],
    { error: "Please select a role" }
  ),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const roles = [
  "STP Operator",
  "Construction Developer",
  "Tanker Operator",
  "Investor",
  "Researcher",
  "Other",
] as const;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 600));
    console.log(data);
    setSubmitted(true);
  };

  return (
    <>
      <Nav />
      <main>
        <section className="bg-[#060908] pt-[clamp(7rem,14vw,12rem)] pb-[clamp(5rem,10vw,9rem)]">
          <div className="mx-auto max-w-[1320px] px-6 md:px-10 lg:px-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

              {/* Left: statement */}
              <div className="lg:col-span-5">
                <div
                  className="text-[10px] tracking-[0.22em] uppercase text-white/30 mb-8"
                  style={{ fontFamily: "var(--font-dm-mono)" }}
                >
                  Contact
                </div>
                <h1
                  className="text-white leading-[1.05] mb-8"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  Build the water layer with us.
                </h1>
                <p
                  className="text-white/35 text-sm leading-relaxed max-w-[380px] mb-12"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  We are looking for STP operators, construction developers, tanker
                  operators, and infrastructure investors in the Bengaluru corridor.
                  If you operate in this space, we want to talk.
                </p>

                <div className="pt-8 border-t border-white/8">
                  <p
                    className="text-[11px] text-white/20 leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-mono)" }}
                  >
                    Vaha is building the exchange layer for Bengaluru&apos;s treated
                    water surplus. Pilot launches Q3 2025. Bellandur corridor, first route.
                  </p>
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-6 lg:col-start-7">
                {submitted ? (
                  <div className="border border-white/10 p-10 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4DB87A]" />
                      <span
                        className="text-[11px] tracking-widest uppercase text-[#4DB87A]"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        Received
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">
                      We&apos;ll be in touch within two business days.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="border border-white/10 space-y-0"
                  >
                    {/* Name */}
                    <ContactRow label="Name" error={errors.name?.message}>
                      <input
                        {...register("name")}
                        placeholder="Your name"
                        className="w-full bg-transparent text-white/80 placeholder:text-white/20 text-sm py-4 px-5 outline-none focus:bg-white/[0.03] transition-colors"
                      />
                    </ContactRow>

                    {/* Organisation */}
                    <ContactRow label="Organisation" error={errors.org?.message}>
                      <input
                        {...register("org")}
                        placeholder="Company or project"
                        className="w-full bg-transparent text-white/80 placeholder:text-white/20 text-sm py-4 px-5 outline-none focus:bg-white/[0.03] transition-colors"
                      />
                    </ContactRow>

                    {/* Email */}
                    <ContactRow label="Email" error={errors.email?.message}>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-transparent text-white/80 placeholder:text-white/20 text-sm py-4 px-5 outline-none focus:bg-white/[0.03] transition-colors"
                      />
                    </ContactRow>

                    {/* Role */}
                    <ContactRow label="Role" error={errors.role?.message}>
                      <select
                        {...register("role")}
                        className="w-full bg-transparent text-white/80 text-sm py-4 px-5 outline-none focus:bg-white/[0.03] transition-colors appearance-none"
                        defaultValue=""
                      >
                        <option value="" disabled className="bg-[#060908] text-white/40">
                          Select your role
                        </option>
                        {roles.map((r) => (
                          <option key={r} value={r} className="bg-[#060908] text-white/80">
                            {r}
                          </option>
                        ))}
                      </select>
                    </ContactRow>

                    {/* Message */}
                    <div className="border-t border-white/8">
                      <div className="px-5 pt-3">
                        <span
                          className="text-[10px] tracking-[0.18em] uppercase text-white/25"
                          style={{ fontFamily: "var(--font-syne)" }}
                        >
                          Message
                        </span>
                      </div>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="What do you want to explore? (optional)"
                        className="w-full bg-transparent text-white/80 placeholder:text-white/20 text-sm py-3 px-5 outline-none focus:bg-white/[0.03] transition-colors resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <div className="border-t border-white/8 p-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-white text-[#0B0D0C] text-xs tracking-widest uppercase font-semibold py-3.5 hover:bg-[#F4F1EB] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{ fontFamily: "var(--font-syne)" }}
                      >
                        {isSubmitting ? "Sending…" : "Send message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ContactRow({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-white/8">
      <div className="flex items-center justify-between px-5 pt-3">
        <span
          className="text-[10px] tracking-[0.18em] uppercase text-white/25"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          {label}
        </span>
        {error && (
          <span className="text-[10px] text-red-400/70">{error}</span>
        )}
      </div>
      {children}
    </div>
  );
}
