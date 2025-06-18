import React from 'react';

export const TopNavbar: React.FC = () => {
  return (
    <div className="bg-primary-800 dark:bg-primary-900 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Logo and Text */}
        <div className="flex items-center space-x-4">
          {/* SPIT Logo */}
          <div className="flex-shrink-0">
            <img
              src="/SPIT_logo.png"
              alt="SPIT Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <div className="text-white text-xs font-normal leading-tight">
              Bharatiya Vidya Bhavans
            </div>
            <div className="text-white text-lg font-bold leading-tight">
              Sardar Patel Institute of Technology
            </div>
            <div className="text-white text-xs font-normal leading-tight">
              Autonomous Institute Affiliated to Mumbai University
            </div>
          </div>
        </div>

        {/* Right side - Back to Home Page Link */}
        <div className="flex-shrink-0">
          <a
            href="/"
            className="text-white hover:text-accent-gold transition-colors duration-200 text-sm font-medium px-4 py-2 rounded-md hover:bg-white/10"
          >
            Back to Home Page
          </a>
        </div>
      </div>
    </div>
  );
};