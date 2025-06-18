import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-900 to-accent-purple dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Sardar Patel Institute of Technology
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            NAAC Accredited Institution - Committed to Excellence in Technical Education
          </p>
          
          {/* NAAC Undertaking */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="/naac-undertaking.pdf"
              className="inline-flex items-center px-6 py-3 bg-accent-gold hover:bg-accent-gold/90 text-dark-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Download className="w-5 h-5 mr-2" />
              NAAC Undertaking PDF
            </a>
            <a
              href="#main-content"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-dark-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Explore Portal
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">A+</div>
              <div className="text-gray-300 font-medium">NAAC Grade</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-teal mb-2">50+</div>
              <div className="text-gray-300 font-medium">Years Legacy</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-gold mb-2">10K+</div>
              <div className="text-gray-300 font-medium">Alumni</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent-teal mb-2">95%</div>
              <div className="text-gray-300 font-medium">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};