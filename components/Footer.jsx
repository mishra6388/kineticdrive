'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 pt-12 pb-6 w-full">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Company info section */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Kineticdrive</span>
            </h3>
            <p className="text-gray-400 mb-6">Creating exceptional digital experiences that transform businesses and delight users.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick links section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-amber-400 transition-colors py-1">About</Link>
              <Link href="/services" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Services</Link>
              <Link href="/contact" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Contact</Link>
              <Link href="/portfolio" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Portfolio</Link>
              <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Blog</Link>
              <Link href="/careers" className="text-gray-400 hover:text-amber-400 transition-colors py-1">Careers</Link>
              <Link href="/faq" className="text-gray-400 hover:text-amber-400 transition-colors py-1">FAQ</Link>
            </div>
          </div>

          {/* Contact info section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:info@kineticdrive.in" className="text-gray-400 hover:text-amber-400 transition-colors">
                    info@kineticdrive.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+917388100750" className="text-gray-400 hover:text-amber-400 transition-colors">
                    +91 7388100750
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-amber-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300">Address</p>
                  <address className="text-gray-400 not-italic">
                    Lucknow, Prayagraj
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div className="border-t border-gray-800 pt-8 pb-10">
          <div className="max-w-md mx-auto md:mx-0">
            <h4 className="text-white text-lg font-medium mb-3">Subscribe to our newsletter</h4>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and offers.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-400 w-full"
              />
              <button className="bg-gradient-to-r from-amber-300 to-amber-500 text-black font-medium px-4 py-2 rounded-r-lg hover:shadow-lg hover:shadow-amber-300/10 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-2 md:mb-0">© {new Date().getFullYear()} Kineticdrive. All rights reserved.</p>
          <div className="space-x-4">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Terms of Service</Link>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
