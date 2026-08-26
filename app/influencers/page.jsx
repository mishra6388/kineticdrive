import InfluencerHero from '@/components/influencers/InfluencerHero';
import WhyRegisterWithUs from '@/components/influencers/WhyRegisterWithUs';
import InfluencerBenefits from '@/components/influencers/InfluencerBenefits';
import HowItWorks from '@/components/influencers/HowItWorks';
import InfluencerRegistrationForm from '@/components/influencers/InfluencerRegistrationForm';

export const metadata = {
  title: 'Influencer & Creator Partnership — KineticDrive',
  description:
    'Join the KineticDrive Creator Network. Grow your influence, manage your brand, and connect with professional collaboration opportunities.',
  keywords: [
    'KineticDrive',
    'Influencer Partnership',
    'Creator Program',
    'Brand Collaboration',
    'Social Media Management',
    'Content Creator',
    'Digital Growth',
  ],
};

export default function InfluencersPage() {
  return (
    <>
      <InfluencerHero />
      <WhyRegisterWithUs />
      <InfluencerBenefits />
      <HowItWorks />
      <InfluencerRegistrationForm />
    </>
  );
}
