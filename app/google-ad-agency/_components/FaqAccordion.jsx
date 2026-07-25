import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: "What are Google Ads?",
    a: "Google Ads is a paid online advertising platform offered by Google. It allows businesses to run ads across Google's massive network, including Google Search (showing ads on search results for specific keywords), Google Display Network (millions of partner websites, blogs, and portals), YouTube, Gmail, and Mobile Apps."
  },
  {
    q: "How can I start using Google Ads?",
    a: "Anyone can register and start promoting their products on Google Ads. However, it is a highly complex web application with many variables. To avoid wasting money, expert-level knowledge and professional management are highly recommended."
  },
  {
    q: "Is there any minimum budget to start Google Ads?",
    a: "There is no minimum or maximum budget for starting your Google Ads campaigns. You can start with any budget. We can help you estimate required budgets using keyword research and competitor analysis."
  },
  {
    q: "How much does Google Ads cost?",
    a: "You only pay when people click on your ads (Pay-Per-Click) or call your business. You control your daily budget cap and can start or pause campaigns at any time."
  },
  {
    q: "What payment methods are available for Google Ads?",
    a: "Depending on your country, Google support Automatic (post-paid) and Prepay billing. You can pay via Credit/Debit Cards, Money Transfers, Net Banking, and Payment Wallets."
  },
  {
    q: "What are Google Ads Management Services?",
    a: "It is the professional management of your Google Ads account by certified experts to optimize keywords, ad copy, landing pages, and budgets, guaranteeing higher conversion rates and maximum ROI."
  },
  {
    q: "What are the different types of Google Ads Campaigns?",
    a: "Google offers several key campaign types: Search Ads, Display Ads, Shopping Ads (Product Listing Ads), Video Ads (YouTube), App Promotions, and Smart/Local Campaigns."
  },
  {
    q: "How much do I need to invest in Google Ads?",
    a: "The investment varies depending on your business goals, target audience, and industry competitiveness. We perform an in-depth keyword analysis to suggest a budget that yields a positive return."
  },
  {
    q: "Do you guarantee the #1 ranking for my ads in Google?",
    a: "No trustworthy agency can guarantee a permanent #1 ad rank. Google Ad rankings depend on dynamic auction factors like Quality Score, bid amount, search intent, location, and competitor actions."
  },
  {
    q: "How long will it take to see the desired results with Google Ads?",
    a: "You will start seeing impressions and clicks almost immediately after the ads go live. However, gathering enough data to analyze and optimize for conversions and ROI typically takes from a few days to a few weeks."
  },
  {
    q: "Do you offer custom Google Ads Packages?",
    a: "Yes, we build tailor-made Google Ads management packages based on your specific requirements, business scale, and digital goals."
  },
  {
    q: "Can I switch between PPC Packages?",
    a: "Absolutely. You can switch between different service levels or customized packages as your business requirements scale."
  }
];

export default function FaqAccordion() {
  const [expandedFaq, setExpandedFaq] = useState(null);

  return (
    <section className="py-20 px-6 bg-[#0F0F18]/20 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Common Questions Answered</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {faqItems.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div key={idx} className="bg-[#0F0F18] border border-white/5 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setExpandedFaq(isExpanded ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left text-white hover:text-amber-400 font-bold transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-amber-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                </button>
                
                {isExpanded && (
                  <div className="px-5 pb-5 pt-1 text-gray-300 text-sm md:text-base leading-relaxed border-t border-white/5">
                    {faq.a}
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
