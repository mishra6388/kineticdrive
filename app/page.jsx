// app/page.jsx

import SeoHead from "@/components/SeoHead";
import Hero from "@/components/Hero";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import WhatweDo from "@/components/WhatweDo";
import IndustrygrowthSection from "@/components/industrygrowthsection";
import WhyChoose from "@/components/WhyChoose";
import DigitalMarketingServices from "@/components/DigitalMarketingServices";
import GoogleReview from "@/components/GoogleReview";
import TechStack from "@/components/Techstack";
import SeoExpertise from "@/components/Seoexperties";
import Contact from "@/components/Contact";
import BrandsThatBelieve from "@/components/BrandsThatBelieve";
import WhyChooseKineticDrive from "@/components/WhyChooseKineticDrive";

export const metadata = {
  title: "Kinetic Drive | Digital Marketing, App & Web Development",
  description:
    "Boost your business with Kinetic Drive — your trusted partner in SEO, web development, app development, and digital marketing solutions.",
  keywords: [
    "Kineticdrive",
    "Digital Marketing",
    "SEO Services",
    "Web Development",
    "App Development",
    "Website Design",
    "Social Media Marketing",
    "Mobile App Development",
    "Flutter Developer",
    "React Developer",
    "Lead Generation",
    "Online Branding",
    "Software Company Allahabad",
    "Full Stack Development",
    "Marketing Agency",
  ],
};

export default function Home() {
  return (
    <>
      {/* SEO meta tags */}
      <SeoHead
        title="Kinetic Drive – Digital Marketing & Web Development"
        description="Boost your business with Kinetic Drive — SEO, web, app development, and digital marketing solutions."
      />

      {/* Main sections */}
      {/* <MacbookScroll/> */}
      <Hero />
      <LeadCaptureSection />
      <WhatweDo />
      <IndustrygrowthSection />
      <WhyChoose />

      {/* Digital Marketing Services Grid */}
      <DigitalMarketingServices />

      {/* Footer sections */}
      <GoogleReview />
      <TechStack />
      <SeoExpertise />
      <BrandsThatBelieve />
      <WhyChooseKineticDrive />
      <Contact />
    </>
  );
}
