'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';

export default function KineticDriveNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Products', 
      href: '#products',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Applications', href: '#web-apps' },
        { name: 'Mobile Solutions', href: '#mobile' },
        { name: 'Cloud Services', href: '#cloud' },
        { name: 'AI Integration', href: '#ai' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '#solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise', href: '#enterprise' },
        { name: 'Startups', href: '#startups' },
        { name: 'E-commerce', href: '#ecommerce' },
        { name: 'Healthcare', href: '#healthcare' }
      ]
    },
    { name: 'Company', href: '#company' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
              kineticDrive
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a 
                  href={item.href}
                  className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2 group"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-lg border border-gray-800 rounded-xl shadow-2xl shadow-black/50 py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors duration-200 font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-900/50 backdrop-blur-lg rounded-xl mt-4 p-4 border border-gray-800">
            
            {/* Mobile Navigation Items */}
            <div className="space-y-1 mb-6">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a 
                    href={item.href}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {item.dropdownItems.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-400 hover:text-gray-300 hover:bg-gray-800/30 rounded-lg transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <button 
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </button>
              <button 
                className="block w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}