'use client';
import React from 'react';
import HeroFormSection from './_components/HeroFormSection';
import TrustSection from '../website-design-development/_components/TrustSection';
import WhyChoose from './_components/WhyChoose';
import ServicesSection from './_components/ServicesSection';
import ProcessTimeline from './_components/ProcessTimeline';
import ToolsWeUse from './_components/ToolsWeUse';
import TestimonialsSection from '../website-design-development/_components/TestimonialsSection';
import FAQSection from './_components/FAQSection';
import FinalCTA from './_components/FinalCTA';

export default function DigitalMarketingLandingPage() {
  return (
    <main className="bg-[#050508] text-white min-h-screen">
      <HeroFormSection />
      <TrustSection />
      <WhyChoose />
      <ServicesSection />
      <ProcessTimeline />
      <ToolsWeUse />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />
    </main>
  );
}