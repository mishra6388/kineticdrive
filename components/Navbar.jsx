"use client"

import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [activeLink, setActiveLink] = useState('/home');
  
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];
  
  return (
    <div className="absolute top-8 w-full flex justify-center z-10">
      <div className="px-8 py-3 bg-black bg-opacity-80 backdrop-blur-sm rounded-full border border-amber-300/30 shadow-lg shadow-amber-200/10">
        <ul className="flex space-x-8 items-center">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                href={link.path}
                className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 hover:text-amber-200 ${
                  activeLink === link.path ? 'text-amber-300' : 'text-white'
                }`}
                onClick={() => setActiveLink(link.path)}
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