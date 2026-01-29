// app/services/page.jsx

import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Services | Kinetic Drive",
  description:
    "Explore our wide range of services at Kinetic Drive – including web and app development, UI/UX design, SEO, digital marketing, and custom software solutions.",
  keywords: [
    "Kinetic Drive services",
    "web development",
    "mobile app development",
    "UI/UX design",
    "SEO services",
    "search engine optimization",
    "digital marketing",
    "custom software",
    "tech consulting",
    "digital solutions",
  ],
  openGraph: {
    title: "Services | Kinetic Drive",
    description:
      "Empowering your business with expert digital services – including SEO, development, design, and marketing at Kinetic Drive.",
    url: "https://kineticdrive.in/services",
    siteName: "Kinetic Drive",
    type: "website",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
