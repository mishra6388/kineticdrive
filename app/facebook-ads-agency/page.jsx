import HeroSection from "./_components/HeroSection";
import TrustStrip from "./_components/TrustStrip";
import AZOptimization from "./_components/AZOptimization";
import SeeOurProcess from "./_components/SeeOurProcess";
import ProcessSteps from "./_components/ProcessSteps";
import ComparisonSection from "./_components/ComparisonSection";
import FacebookFaqAccordion from "./_components/FacebookFaqAccordion";
import DetailedLeadForm from "./_components/DetailedLeadForm";

export const metadata = {
  title: "Facebook Ads Agency | KineticDrive",
  description:
    "KineticDrive builds Facebook & Instagram ad campaigns around precision audience targeting — not just reach. Get a free targeting audit.",
};

export default function FacebookAdsAgencyPage() {
  return (
    <main className="bg-[#050508]">
      <HeroSection />
      <TrustStrip />
      <AZOptimization />
      <SeeOurProcess />
      <ProcessSteps />
      <ComparisonSection />
      <FacebookFaqAccordion />
      <DetailedLeadForm />
    </main>
  );
}
