"use client";
import Image from 'next/image';

/**
 * A reusable component that showcases a filled‑in website preview.
 * It includes a headline, a short SEO‑optimized description, and a responsive image.
 */
export default function WebsitePreview({
  title = 'Fully Optimized Landing Page',
  subtitle = 'Fast, responsive, and SEO‑friendly',
  description = 'Our platform provides a modern, glassmorphic UI with smooth animations, perfect for capturing leads and converting visitors into customers.',
  imageUrl = 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  imageAlt = 'Website preview screenshot',
}) {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2
          className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl transform transition hover:scale-105"
        >
          {title}
        </h2>
        <p className="mt-4 text-lg text-gray-300">{subtitle}</p>
        <p className="mt-6 text-base text-gray-400">{description}</p>
        <div className="mt-8 flex justify-center">
          <div className="transform transition hover:scale-105">
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={800}
              height={450}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


