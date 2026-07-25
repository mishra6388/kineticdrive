'use client';
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingActions({ phoneNumber = "7388100850", whatsappMessage = "Hi, I am looking for website development services." }) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#1ebd58] text-white rounded-full shadow-2xl transition-transform hover:scale-110 cursor-pointer group"
        >
          <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75" />
          <MessageCircle className="w-8 h-8 relative z-10" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white border-t border-gray-100 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] p-3">
        <div className="flex items-center gap-3 max-w-sm mx-auto">
          <a
            href={callUrl}
            className="flex-1 flex items-center justify-center gap-2 bg-gray-900 text-white font-bold py-3.5 rounded-xl shadow-lg active:scale-95 transition-transform"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-[#25D366]/20 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
