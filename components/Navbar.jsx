"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // optional icons, or use emoji

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setMenuOpen(false);
  };

  return (
    <div className="absolute top-3 left-0 w-full flex justify-center z-50">
      <div className="px-4 py-2 w-full max-w-3xl bg-black bg-opacity-80 backdrop-blur-sm rounded-full border border-amber-300/30 shadow-lg shadow-amber-200/10 flex items-center justify-between md:justify-center">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white hover:text-amber-300"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`relative px-2 py-0.5 text-sm font-medium transition-all duration-300 hover:text-amber-200 ${
                  activeLink === link.path ? "text-amber-300" : "text-white"
                }`}
                onClick={() => handleLinkClick(link.path)}
              >
                {link.name}
                {activeLink === link.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-4 right-4 bg-black bg-opacity-90 rounded-xl shadow-lg p-3 flex flex-col items-center space-y-3 md:hidden z-50">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-medium ${
                activeLink === link.path ? "text-amber-300" : "text-white"
              } hover:text-amber-200 transition`}
              onClick={() => handleLinkClick(link.path)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
