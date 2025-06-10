"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="sticky top-3 left-0 w-full flex justify-center z-50 mt-5">
      <div className="px-4 py-2 w-full max-w-4xl bg-black bg-opacity-70 backdrop-blur-md rounded-full border border-amber-300/20 shadow-xl shadow-amber-200/20 flex items-center justify-center transition-all duration-500 hover:bg-opacity-90 hover:shadow-amber-300/30 hover:shadow-2xl hover:border-amber-300/50">
        
        <ul className="flex space-x-2 sm:space-x-4 items-center justify-center text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`
                    relative px-2 py-1 sm:px-3 sm:py-2 font-medium rounded-full
                    transition-all duration-300 ease-in-out
                    hover:bg-amber-400/10 hover:text-amber-200 hover:shadow-lg hover:shadow-amber-300/30
                    hover:scale-105 hover:-translate-y-0.5
                    ${
                      isActive
                        ? "text-amber-300 bg-amber-400/5 shadow-md shadow-amber-300/20"
                        : "text-white hover:text-amber-200"
                    }
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-full animate-pulse"></span>
                  )}
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-300/0 via-amber-300/5 to-amber-300/0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></span>
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
