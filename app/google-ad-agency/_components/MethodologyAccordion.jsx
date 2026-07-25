import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const howWeDoItItems = [
  {
    title: "Research & Keyword Selection",
    content: "It's the most crucial and important step to choose the perfect keyword which delivers better results. We perform intensive research for every individual campaign to choose the best performing keywords which give higher ROI. Even one wrong keyword can spoil your campaign's performance. It is noticed that most of your competition wastes 3/4th of their ad budget just because of poor keyword selection. That's why we make it a habit of researching and choosing the right keyword for every specific campaign at the very initial stage."
  },
  {
    title: "Creating Ad Copy",
    content: "Writing & Creating an eye-catching ad is another important factor of successful ad campaigns. Once you choose a set of perfect keywords for your ad campaign, the next step is to attract and prompt your potential customers to click your ads. Whether it's a text ad or an image ad, we create the best for your business to bring your target audience to your landing page or app, focusing on obtaining higher Click-Through Rates (CTR)."
  },
  {
    title: "Landing Page Optimization",
    content: "A landing page is where your target audience will be directed after clicking on your ad. So optimizing your landing page is another crucial step in the success of your PPC campaign. We create and design landing pages that sync perfectly with your target keywords and ad copy to engage your audience and drive massive conversions."
  },
  {
    title: "Location Targeting Optimization",
    content: "Location targeting allows advertisers to run ads by targeting an audience of specific locations or regions. We show your ads to an audience who is in that specific location and restrict it on other locations, saving ad-spend by preventing click from restricted locations."
  },
  {
    title: "Campaign Management",
    content: "We manage your ad campaigns with complete transparency. You will get weekly attention and reports on how your campaigns are improving and what steps are taken to improve further. We have years of experience delivering result-driven ad campaigns with higher returns on investments."
  },
  {
    title: "Analyzing The Competitor",
    content: "Competitor Analysis is a very important aspect of the PPC campaign strategy. By analyzing your competitors, we understand their strengths and weaknesses to capitalize on areas where we can take advantage. We track impression share, overlap rate, top of page rate, and outranking share."
  },
  {
    title: "Conversion Tracking",
    content: "Conversion tracking helps you to know how many actual conversions you are getting from PPC Ads, and which keywords and ads are performing or wasting your money. This is done by installing robust tracking codes on your landing pages or websites."
  },
  {
    title: "ROI Tracking",
    content: "Tracking ROI lets you know exactly how much you have spent on ad campaigns and the revenue you have earned. We use 12 data metrics for not just calculating ROI but continuously enhancing it for your business."
  },
  {
    title: "A/B Testing",
    content: "One of the best ways to optimize the performance of your PPC campaign is through A/B Testing. We perform A/B Testing at 4 different levels: Headlines, PPC Ad Copy, Landing Pages, and Keywords."
  }
];

export default function MethodologyAccordion() {
  const [expandedHow, setExpandedHow] = useState(0);

  return (
    <section className="py-20 px-6 bg-[#050508] border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">Methodology</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">How We Deliver Higher ROI</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-xs md:text-sm mt-4">
            It is a precise blend of years of experience and regular testing. Here is a brief look at our process.
          </p>
        </div>

        <div className="space-y-4">
          {howWeDoItItems.map((item, idx) => {
            const isExpanded = expandedHow === idx;
            return (
              <div key={idx} className="bg-[#0F0F18] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setExpandedHow(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-amber-400 font-bold transition-colors cursor-pointer"
                >
                  <span>{item.title}</span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/5">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
