"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQS = [
  {
    q: "How can a Facebook Ads agency help my startup generate qualified leads?",
    a: "A specialized Facebook Ads agency creates high-performing campaigns that target your ideal audience with precision. Our data-driven strategies help you stop wasting ad spend and start generating leads through custom audiences and lookalike audiences built from your actual buyer data — not guesswork.",
  },
  {
    q: "What makes KineticDrive's Facebook advertising services different?",
    a: "We don't rotate account managers or hand you cookie-cutter strategies. Every startup gets a dedicated strategist, a written weekly optimization log, creative & copy included in the retainer, and transparent pricing before the first call.",
  },
  {
    q: "How does your Facebook advertising process work for startups?",
    a: "We start with a deep audience mapping session to build your Ideal Customer Profile. Then we launch 3–5 creative variants, let data pick the winner, optimize bids daily in week one, and scale proven campaigns in controlled steps — all with plain-language weekly reports.",
  },
  {
    q: "What ad budget should a startup allocate for Facebook ad campaigns?",
    a: "We typically recommend starting with ₹25,000–₹50,000/month to gather enough data for meaningful optimization. That said, we'll use keyword research and competitor analysis to suggest a budget tailored to your industry and goals.",
  },
  {
    q: "How do you measure Facebook advertising campaign performance?",
    a: "We track ROAS, CPL, CTR, conversion rate, frequency, and audience saturation. You receive a weekly change log and a plain-language dashboard — no jargon, just what improved, what was cut, and why.",
  },
  {
    q: "How does Facebook Ads integrate with other digital marketing solutions?",
    a: "We connect your campaigns to your CRM, landing pages, WhatsApp, and email sequences so leads flow directly into your sales pipeline. We also coordinate with Google Ads where applicable to maintain consistent messaging across channels.",
  },
  {
    q: "What targeting capabilities make Facebook Ads valuable for startups?",
    a: "Facebook's targeting is uniquely powerful: interest stacking, custom audiences from your customer list, lookalike audiences from top buyers, retargeting website visitors, and engagement-based audiences. We layer these to find your buyers at the lowest possible CPL.",
  },
  {
    q: "How long does it take to see results from Facebook advertising?",
    a: "You'll see impressions and clicks within 24 hours of launch. Meaningful conversion data typically emerges in 7–14 days. Full campaign optimization — where ROAS stabilizes and scaling begins — usually takes 4–6 weeks.",
  },
  {
    q: "How do you handle leads generated through Facebook ad campaigns?",
    a: "We set up instant lead notifications, CRM integrations (HubSpot, Zoho, Sheets), and WhatsApp auto-responders so no lead goes cold. We also review lead quality weekly and adjust targeting to improve downstream conversion.",
  },
];

export default function FacebookFaqAccordion() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-20 px-6 bg-[#0F0F18]/20 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-amber-500 uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-2">
            Facebook Ads Agency FAQs
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
            Everything startups ask before partnering with us — answered straight.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = expanded === idx;
            return (
              <div
                key={idx}
                className={`bg-[#0F0F18] border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-amber-500/30" : "border-white/5"
                }`}
              >
                <button
                  onClick={() => setExpanded(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-white hover:text-amber-400 transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-amber-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
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
