import { Navbar } from "@/components/shared";
import { Hero } from "@/components/hero";
import { HeroSecondary } from "@/components/hero";
import { HowItWorks } from "@/components/structure";
import { Facilities } from "@/components/facilities";
import { Features } from "@/components/why-us";
import { CTASection } from "@/components/registration-banner";
import { ProblemSolve } from "@/components/problem-solve";
import { Testimonials } from "@/components/our-philosophy";
import { CalendarEmbed } from "@/components/rankings";
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
        <HowItWorks />
        <Facilities />
        <Features />
        <CTASection />
        <ProblemSolve />
        <Testimonials />
        <CalendarEmbed />
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
