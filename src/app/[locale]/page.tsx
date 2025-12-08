import { Navbar } from "@/components/shared";
import { Hero } from "@/components/hero";
import { HeroSecondary } from "@/components/hero";
import { Structure } from "@/components/structure/Structure";
import { Facilities } from "@/components/facilities";
import { WhyUs } from "@/components/why-us/WhyUs";
import { RegistrationBanner } from "@/components/registration-banner";
import { OurPhilosophy } from "@/components/our-philosophy";
import { Rankings } from "@/components/rankings";
import { Pricing } from "@/components/pricing";
import { LiveStats } from "@/components/live-stats";
import { ViberJoin } from "@/components/viber-group";
import { FAQ } from "@/components/faq";
import { TouristsBanner } from "@/components/tourists-banner";
import { SponsorsStrip } from "@/components/sponsors";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F3F5F7]">
      <Navbar />
      <main className="relative mx-auto flex max-w-[1440px] flex-col overflow-hidden pt-24">
        <Hero />
        <HeroSecondary />
        <Structure />
        <Facilities />
        <WhyUs />
        <RegistrationBanner />
        <OurPhilosophy />
        <Rankings />
        <Pricing />
        <LiveStats />
        <ViberJoin />
        <FAQ />
        <TouristsBanner />
        <SponsorsStrip />
      </main>
      <Footer />
    </div>
  );
}
