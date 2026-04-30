import Nav from "@/components/Nav";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhyBengaluru from "@/components/sections/WhyBengaluru";
import WhatsBroken from "@/components/sections/WhatsBroken";
import HowVahaWorks from "@/components/sections/HowVahaWorks";
import RouteEconomics from "@/components/sections/RouteEconomics";
import Validation from "@/components/sections/Validation";
import PilotCorridor from "@/components/sections/PilotCorridor";
import ClosingCTA from "@/components/sections/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <WhyBengaluru />
        <WhatsBroken />
        <HowVahaWorks />
        <RouteEconomics />
        <Validation />
        <PilotCorridor />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
