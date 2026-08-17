import { Suspense } from 'react';

import HeroSection from './_components/HeroSection';
import TrustSection from './_components/TrustSection';
import PortfolioSection from './_components/PortfolioSection';
import ServicesSection from './_components/ServicesSection';
import WhyChooseUsSection from './_components/WhyChooseUsSection';
import OurProcessSection from './_components/OurProcessSection';
import PricingSection from './_components/PricingSection';
import TestimonialsSection from './_components/TestimonialsSection';
import FaqSection from './_components/FaqSection';
import ContactSection from './_components/ContactSection';
import FinalCtaSection from './_components/FinalCtaSection';



export const metadata = {
  title: 'Professional Website Development Services | KineticDrive',
  description: 'KineticDrive offers premium website development, ecommerce solutions, and custom landing pages to help your business grow online. Fast, secure, and SEO optimized.',
  keywords: ['Website Development', 'Web Design', 'Ecommerce Development', 'Landing Page', 'KineticDrive'],
};

export default function WebsiteDesignDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-amber-500 selection:text-black scroll-smooth font-sans">
      {/* Local Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800/50">
        <div className="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg p-1">
              <img
                src="/logo.png"
                alt="kineticDrive Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">
              kineticDrive
            </span>
          </div>
          
          <a
            href="tel:+917388100850"
            className="hidden sm:inline-flex items-center gap-2 border border-amber-500/30 hover:border-amber-500 bg-amber-500/5 hover:bg-amber-500/10 text-amber-400 font-bold px-4 py-2 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Call Us: +91 7388100850
          </a>
        </div>
      </header> */}
      
      <main>
        <Suspense fallback={<div className="h-screen bg-gray-50" />}>
          <HeroSection />
        </Suspense>

        <TrustSection />
        
        <PortfolioSection />
        
        <ServicesSection />
        
        <WhyChooseUsSection />
        
        <OurProcessSection />
        
        <PricingSection />
        
        <TestimonialsSection />
        
        <FaqSection />
        
        <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
          <ContactSection />
        </Suspense>
        
        <FinalCtaSection />
      </main>

      
      
    </div>
  );
}
