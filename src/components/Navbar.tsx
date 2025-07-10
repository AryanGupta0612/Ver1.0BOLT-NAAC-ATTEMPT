import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-dark-700/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo and Institute Info */}
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <img
                  src="/SPIT_logo.png"
                  alt="SPIT Logo"
                  className="h-12 w-12 lg:h-14 lg:w-14 object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-white dark:text-gray-300 font-normal leading-tight">
                  Bharatiya Vidya Bhavans
                </div>
                <h1 className="font-playfair font-bold text-base lg:text-lg text-white dark:text-white leading-tight whitespace-nowrap">
                  Sardar Patel Institute of Technology
                </h1>
                <div className="text-xs text-white dark:text-gray-300 font-normal leading-tight">
                  Autonomous Institute Affiliated to Mumbai University
                </div>
              </div>
            </div>

            {/* Right Side - Back to Home Page & Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <a
                href="/"
                className="hidden md:block text-white dark:text-gray-200 hover:text-[#FFD700] dark:hover:text-accent-teal transition-colors duration-200 text-sm font-medium px-3 py-2 rounded-md hover:bg-[#540D6E] dark:hover:bg-dark-800/50"
              >
                Back to Home Page
              </a>
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <a
                href="/"
                className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-md transition-colors duration-200 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Back to Home Page
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};