import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VideoHero from "@/components/appendix/VideoHero";
import ChapterNav from "@/components/appendix/ChapterNav";
import MarketGapSection from "@/components/appendix/MarketGapSection";
import EconomicsSection from "@/components/appendix/EconomicsSection";
import PilotSection from "@/components/appendix/PilotSection";
import SourcesSection from "@/components/appendix/SourcesSection";
import WhyNowSection from "@/components/appendix/WhyNowSection";
import ProblemSection from "@/components/appendix/ProblemSection";
import WhatVahaSection from "@/components/appendix/WhatVahaSection";
import ValidationSection from "@/components/appendix/ValidationSection";
import RiskSection from "@/components/appendix/RiskSection";

export const metadata = {
  title: "Vaha: Appendix and Article",
  description:
    "The complete native web version of the Vaha appendix. Market analysis, economics, pilot plan, validation, and source trail for Bengaluru's water exchange layer.",
};

export default function AppendixPage() {
  return (
    <>
      <Nav />
      <main>
        <VideoHero />
        <ChapterNav />
        <MarketGapSection />
        <WhyNowSection />
        <ProblemSection />
        <WhatVahaSection />
        <EconomicsSection />
        <ValidationSection />
        <PilotSection />
        <RiskSection />
        <SourcesSection />
      </main>
      <Footer />
    </>
  );
}
