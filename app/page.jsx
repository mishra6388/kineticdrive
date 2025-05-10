

import Hero from "@/components/Hero";
// import { MacbookScroll } from "@/components/macbook";
import SeoExpertise from "@/components/Seoexperties";
import TechStack from "@/components/Techstack";
import WhatweDo from "@/components/WhatweDo"
import WhyChoose from "@/components/WhyChoose"


export default function Home() {
  return (
    <>
    {/* <MacbookScroll/> */}
     <Hero/>
     <WhatweDo/>
     <WhyChoose/>
     <TechStack/>
     <SeoExpertise/>
    </>
    
    
  );
}
