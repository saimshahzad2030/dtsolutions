import { Hero } from "@/components/sections/Hero";
import { StatsBanner } from "@/components/sections/StatsBanner";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { ActiveProjectsSection } from "@/components/sections/ActiveProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <ServicesSection />
      <WhyChooseSection />
      <ActiveProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <ContactCtaSection />
    </>
  );
}

