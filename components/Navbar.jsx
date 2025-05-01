"use client";

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [activeLink, setActiveLink] = useState("/");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <div className="absolute top-3 left-0 w-full flex justify-center z-50">
      <div className="px-4 py-2 w-full max-w-3xl bg-black bg-opacity-80 backdrop-blur-sm rounded-full border border-amber-300/30 shadow-lg shadow-amber-200/10 flex items-center justify-center">
        {/* Navigation links always visible */}
        <ul className="flex space-x-4 sm:space-x-6 items-center flex-wrap justify-center">
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
    </div>
  );
}

export default Navbar;
