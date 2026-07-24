'use client';
import React from 'react';
import HeroFormSection from './_components/HeroFormSection';
import SocialProof from './_components/SocialProof';
import WhyChoose from './_components/WhyChoose';
import ServicesSection from './_components/ServicesSection';
import ProcessTimeline from './_components/ProcessTimeline';
import TechStack from './_components/TechStack';
import OurWork from "@/components/OurWork";
import TestimonialsSection from './_components/TestimonialsSection';
import FAQSection from './_components/FAQSection';
import FinalCTA from './_components/FinalCTA';

export default function WebDevelopmentLandingPage() {
  return (
    <main className="bg-[#050508] text-white min-h-screen">
     
      <HeroFormSection />
      <SocialProof />
      <WhyChoose />
      <ServicesSection />

      
      <ProcessTimeline />

     
      <TechStack />

      
      <OurWork />

      
      <TestimonialsSection />

      
      <FAQSection />

     
      <FinalCTA />
    </main>
  );
}