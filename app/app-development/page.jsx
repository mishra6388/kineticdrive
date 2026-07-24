'use client';
import React from 'react';
import HeroFormSection from './_components/HeroFormSection';
import SocialProof from '../web-development/_components/SocialProof';
import WhyChoose from './_components/WhyChoose';
import ServicesSection from './_components/ServicesSection';
import ProcessTimeline from './_components/ProcessTimeline';
import TechStack from './_components/TechStack';
import TestimonialsSection from '../web-development/_components/TestimonialsSection';
import ProjectsSection from './_components/ProjectsSection';
import FAQSection from './_components/FAQSection';
import FinalCTA from './_components/FinalCTA';

export default function AppDevelopmentLandingPage() {
  return (
    <main className="bg-[#050508] text-white min-h-screen">
      <HeroFormSection />      {/* form visible immediately, no scroll */}
      <SocialProof />
      <WhyChoose />
      <ServicesSection />
      <ProcessTimeline />
      <TechStack />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTA />             {/* second chance to convert after they've scrolled */}
    </main>
  );
}