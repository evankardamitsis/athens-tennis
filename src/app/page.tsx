import { CalendarEmbed } from "@/components/CalendarEmbed";
import { CTASection } from "@/components/CTASection";
import { Features } from "@/components/Features";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveStats } from "@/components/LiveStats";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { SponsorsStrip } from "@/components/SponsorsStrip";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { ViberJoin } from "@/components/ViberJoin";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative flex flex-col overflow-hidden pt-24">
        <Hero />
        <Features />
        <HowItWorks />
        <TrustBar />
        <LiveStats />
        <ViberJoin />
        <CalendarEmbed />
        <Testimonials />
        <SponsorsStrip />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
