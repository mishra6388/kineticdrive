/* components/WebsitePreviewsSection.jsx */
"use client";

import WebsitePreview from "@/components/WebsitePreview";

/**
 * Section displaying multiple SEO‑optimized website preview cards.
 * Each card is rendered using the reusable `WebsitePreview` component.
 * Layout is a responsive grid that stacks on mobile and shows three columns on larger screens.
 */
export default function WebsitePreviewsSection() {
  const previews = [
    {
      title: "Stunning Landing Page",
      subtitle: "Optimized for conversions",
      description:
        "A clean, fast‑loading landing page that ranks high on Google and turns visitors into leads instantly.",
      imageUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "E‑Commerce Storefront",
      subtitle: "Secure, scalable, and SEO friendly",
      description:
        "Shopify‑style product listings with blazing‑fast performance and built‑in SEO best practices.",
      imageUrl:
        "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Portfolio",
      subtitle: "Professional and sleek",
      description:
        "Showcase your brand, services, and case studies with a modern design that boosts authority in search results.",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          Our Recent Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previews.map((p, idx) => (
            <WebsitePreview
              key={idx}
              title={p.title}
              subtitle={p.subtitle}
              description={p.description}
              imageUrl={p.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
