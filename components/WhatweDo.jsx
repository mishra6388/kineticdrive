import React from "react";

const services = [
  {
    title: "App Development",
    img: "/images/mobileapp.png",
    alt: "Mobile App Development Mockup",
  },
  {
    title: "Web Development",
    img: "/images/webdevelopement.png",
    alt: "Web Development Mockup",
  },
  {
    title: "SEO Services",
    img: "/images/seo.png",
    alt: "SEO Services Mockup",
  },
];

const ServiceCard = ({ title, img, alt }) => {
  return (
    <div className="group relative p-[2px] rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg hover:scale-105 transition-transform duration-300">
      <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col">
        <img
          src={img}
          alt={alt}
          className="w-full h-80 md:h-[400px] object-contain p-4 bg-white transition duration-300"
        />
        <div className="text-center py-4 px-3">
          <h3 className="text-xl md:text-2xl font-semibold text-black">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="bg-black py-16 px-4 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-yellow-400 mb-14">
        Our Services
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            img={service.img}
            alt={service.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
