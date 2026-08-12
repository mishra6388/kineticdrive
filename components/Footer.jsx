'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
  { label: 'Portfolio', href: '/portfolio' },
];

const serviceLinks = [
  { label: 'Web Development', href: '/web-development' },
  { label: 'App Development', href: '/app-development' },
  { label: 'Digital Marketing', href: '/digital-marketing' },
  { label: 'SEO Services', href: '/services' },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/kineticdrive.in/', label: 'Instagram' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/kinetic-drive-tech-solutions', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Youtube, href: 'https://www.youtube.com/results?search_query=suno+prayagraj', label: 'YouTube' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Data Deletion', href: '/data-deletion' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6 bg-[#050508]">
      {/* Top accent glow */}
      <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="pointer-events-none absolute -top-12 left-1/2 h-32 w-96 -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl" />

      {/* Main grid */}
      <div className="mx-auto max-w-7xl px-4 pt-14 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1.5">
                <img src="/logo.png" alt="Kinetic Drive logo" className="h-full w-full object-contain" />
              </div>
              <span className="text-xl font-bold text-white">kineticDrive</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 mb-6">
              Creating exceptional digital experiences that transform businesses across India and beyond.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/7 bg-white/4 text-gray-500 transition-all duration-200 hover:border-amber-400/30 hover:bg-amber-400/8 hover:text-amber-400">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-300">Company</h4>
            <ul className="space-y-3">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="text-sm text-gray-500 transition-colors duration-200 hover:text-amber-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-300">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href}
                    className="text-sm text-gray-500 transition-colors duration-200 hover:text-amber-400">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-widest text-gray-300">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:info@kineticdrive.in"
                  className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-amber-400">
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-amber-400/70 group-hover:text-amber-400" />
                  info@kineticdrive.in
                </a>
              </li>
              <li>
                <a href="tel:+917388100850"
                  className="group flex items-start gap-3 text-sm text-gray-500 transition-colors hover:text-amber-400">
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-amber-400/70 group-hover:text-amber-400" />
                  +91 7388100850
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-7">
              <p className="mb-3 text-sm font-medium text-gray-400">Stay updated</p>
              <div className="flex overflow-hidden rounded-xl border border-white/7">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-white/4 px-3 py-2.5 text-sm text-white placeholder-gray-600 outline-none"
                />
                <button className="flex-shrink-0 bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2.5 text-sm font-bold text-black transition-all hover:brightness-110">
                  Go
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/6 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Kineticdrive. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <Link key={label} href={href}
                className="text-xs text-gray-600 transition-colors hover:text-amber-400">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
