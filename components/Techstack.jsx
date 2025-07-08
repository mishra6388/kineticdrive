'use client';

import React from "react";
import { useRouter } from "next/navigation";
import { ExternalLink } from "lucide-react";

const services = [
  {
    title: "WordPress Development",
    description: "Create dynamic websites and blogs with customizable WordPress solutions.",
    logoUrl: "/technology/wordpress.png",
  },
  {
    title: "Next.js Development",
    description: "Build fast, scalable, and SEO-optimized web apps with Next.js.",
    logoUrl: "/technology/next.js.png",
  },
  {
    title: "React Native Apps",
    description: "Develop native mobile apps for iOS and Android using React Native.",
    logoUrl: "/technology/react.png",
  },
  {
    title: "AppSheet Solutions",
    description: "Build business apps fast without writing code using AppSheet.",
    logoUrl: "/technology/appsheet (2).png",
  },
  {
    title: "Flutter Development",
    description: "Build cross-platform, high-performance apps with Flutter and Dart.",
    logoUrl: "/flutter.png",
  },
];

const KineticDriveServices = () => {
  const router = useRouter(); // ✅ Initialize the router

  return (
    <div className="min-h-screen w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
            Our Technologies & Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We empower businesses with modern tools and technologies for stunning apps and websites.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 p-6 rounded-3xl hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-yellow-500/30"
            >
              <div className="mb-4">
                <img
                  src={service.logoUrl}
                  alt={`${service.title} logo`}
                  className="w-12 h-12 object-contain rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-lg border border-gray-800/50 rounded-3xl p-10 shadow-xl">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let’s Build Something Extraordinary Together
          </h3>
          <p className="text-gray-400 mb-6 text-lg max-w-2xl">
            Partner with Kinetic Drive to turn your ideas into impactful digital products using the most reliable technologies.
          </p>
          <button
            className="inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition duration-300"
            onClick={() => router.push('/contact')}
          >
            Contact Us
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KineticDriveServices;
