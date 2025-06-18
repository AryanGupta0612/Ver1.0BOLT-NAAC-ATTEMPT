import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavItem {
  label: string;
  href?: string;
  submenu?: NavItem[];
}

const navigationItems: NavItem[] = [
  {
    label: 'About',
    submenu: [
      { label: 'Institute', href: '/about/institute' },
      { label: 'Vision & Mission', href: '/about/vision' },
      { label: 'Leadership', href: '/about/leadership' },
    ]
  },
  {
    label: 'Academics',
    submenu: [
      { label: 'Departments', href: '/academics/departments' },
      { label: 'Programs', href: '/academics/programs' },
      { label: 'Curriculum', href: '/academics/curriculum' },
    ]
  },
  { label: 'Students', href: '/students' },
  { label: 'Research', href: '/research' },
  { label: 'Library', href: '/library' },
  { label: 'Placements', href: '/placements' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Exam', href: '/exam' },
  { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
  { label: 'IQAC', href: '/iqac' },
  { label: 'Entrepreneurship', href: '/entrepreneurship' },
  { label: 'NIRF', href: '/nirf' },
  { label: 'Tender', href: '/tender' },
  { label: 'IBM', href: '/ibm' },
  { label: 'Career@SPIT', href: '/careers' },
  { label: 'Procurement', href: '/procurement' },
  { label: 'Micro Specializations', href: '/micro-specializations' },
  { label: 'Annual Report', href: '/annual-report' },
  { label: 'Shrestha Club', href: '/shrestha-club' },
  { label: 'Achievements', href: '/achievements' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

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
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-accent-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg lg:text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-playfair font-bold text-lg lg:text-xl text-gray-900 dark:text-white">
                  S.P.I.T.
                </h1>
                <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">NAAC Portal</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.slice(0, 8).map((item) => (
                <div key={item.label} className="relative group">
                  <button
                    className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200 relative"
                    onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.label}
                    {item.submenu && <ChevronDown className="ml-1 w-4 h-4" />}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {/* Dropdown */}
                  {item.submenu && activeDropdown === item.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 py-2 animate-slide-down"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* More dropdown for remaining items */}
              <div className="relative group">
                <button
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200 relative"
                  onMouseEnter={() => setActiveDropdown('more')}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  More
                  <ChevronDown className="ml-1 w-4 h-4" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-accent-teal transition-all duration-300 group-hover:w-full"></span>
                </button>

                {activeDropdown === 'more' && (
                  <div
                    className="absolute top-full right-0 mt-1 w-56 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 py-2 animate-slide-down"
                    onMouseEnter={() => setActiveDropdown('more')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {navigationItems.slice(8).map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-700 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-700 animate-slide-down">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.label)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-md transition-colors duration-200"
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-accent-teal transition-colors duration-200"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-md transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};