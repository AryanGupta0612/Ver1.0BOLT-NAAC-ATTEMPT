import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const PrincipalInterview: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 bg-gray-50 dark:bg-dark-800 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`transition-all duration-700 delay-200 ${
            isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Message from the Principal
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Welcome to Sardar Patel Institute of Technology, where we are committed to nurturing 
                the next generation of engineers and technologists. Our NAAC accreditation reflects 
                our dedication to maintaining the highest standards of academic excellence.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                At S.P.I.T., we believe in holistic development that combines rigorous academic 
                training with practical industry exposure. Our state-of-the-art facilities, 
                experienced faculty, and strong industry partnerships ensure that our students 
                are well-prepared for the challenges of tomorrow.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We continue to evolve and adapt to the changing technological landscape while 
                maintaining our core values of integrity, innovation, and excellence.
              </p>
            </div>
            <div className="mt-8">
              <div className="font-semibold text-gray-900 dark:text-white">Dr. [Principal Name]</div>
              <div className="text-primary-600 dark:text-accent-teal">Principal, S.P.I.T.</div>
            </div>
          </div>

          {/* Image */}
          <div className={`transition-all duration-700 delay-400 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
          }`}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary-100 to-accent-teal/20 dark:from-dark-700 dark:to-accent-purple/20 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg"
                  alt="Principal Interview"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="text-dark-900 font-bold text-lg">S.P.I.T.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};