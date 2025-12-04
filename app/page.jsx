import GoogleReview from "@/components/GoogleReview";
import Hero from "@/components/Hero";
// import { MacbookScroll } from "@/components/macbook";
import SeoExpertise from "@/components/Seoexperties";
import TechStack from "@/components/Techstack";
import UnderMaintenance from "@/components/UnderMaintenance";
import WhatweDo from "@/components/WhatweDo"
import WhyChoose from "@/components/WhyChoose"
import Contact from "@/components/Contact";
export const metadata = {
  title: "Kinetic Drive | Digital Marketing, App & Web Development",
  description: "Boost your business with Kinetic Drive — your trusted partner in SEO, web development, app development, and digital marketing solutions.",
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
    "Marketing Agency"
  ],
};


export default function Home() {
  return (
    <>
    {/* <MacbookScroll/> */}
     <Hero/>
     {/* <UnderMaintenance/> */}
     <WhatweDo/>
     <WhyChoose/>
     <GoogleReview/>
     <TechStack/>
     <SeoExpertise/>
     <Contact/>
    </>
    
    
  );
}
