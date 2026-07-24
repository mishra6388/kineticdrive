'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function KineticDriveNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [clickedDropdown, setClickedDropdown] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (clickedDropdown && !event.target.closest('.dropdown-container')) {
        setClickedDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [clickedDropdown]);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { name: 'Anchors', href: '/anchors' },
    { name: 'About', href: '/about' },
    {
      name: 'Services',
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Web Development', href: '/web-services' },
        { name: 'App Development', href: '/app-services' },
        { name: 'Digital Marketing', href: '/digital-services' }
      ]
    },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/90 backdrop-blur-lg border-b border-gray-800/50'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center h-16 sm:h-20">

          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => router.push('/')}>
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg p-1 group-hover:scale-110 transition-transform duration-300">
              <img
                src="/logo.png"
                alt="kineticDrive Logo"
                className="w-full h-full object-contain"
              />
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
              >
                {item.hasDropdown ? (
                  <div className="flex items-center">
                    <a
                      href={item.href}
                      className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2 group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <button
                      onClick={() => setClickedDropdown(clickedDropdown === item.name ? null : item.name)}
                      className="ml-1 p-1 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${clickedDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                    </button>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 py-2 group"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500 group-hover:w-full transition-all duration-300"></span>
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && clickedDropdown === item.name && (
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

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              onClick={() => router.push('/contact')}
            >
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
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen
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
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1 mt-1">
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

            {/* Mobile CTA Button */}
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <button
                className="block w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  router.push('/contact');
                }}
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