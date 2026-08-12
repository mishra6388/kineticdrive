"use client";

import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "917388100850"; 
  const message = "Hello Kinetic Drive! I'm interested in your services (App/Web Development, Digital Marketing, SEO) and would like to know more.";
  
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[999] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp className="text-2xl md:text-3xl" />
    </a>
  );
};

export default WhatsAppButton;
