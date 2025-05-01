"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import this

function Navbar() {
  const pathname = usePathname(); // Get current path

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="absolute top-3 left-0 w-full flex justify-center z-50">
      <div className="px-4 py-2 w-full max-w-3xl bg-black bg-opacity-80 backdrop-blur-sm rounded-full border border-amber-300/30 shadow-lg shadow-amber-200/10 flex items-center justify-center">
        <ul className="flex space-x-4 sm:space-x-6 items-center flex-wrap justify-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative px-2 py-0.5 text-sm font-medium transition-all duration-300 hover:text-amber-200 ${
                    isActive ? "text-amber-300" : "text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-amber-200 to-amber-400 rounded-full"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
