import React from 'react';
import { GraduationCap, Users, Award, TrendingUp } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const programs = [
  {
    category: 'Undergraduate Programs',
    icon: <GraduationCap className="w-8 h-8" />,
    programs: [
      {
        name: 'Computer Engineering (CE)',
        duration: '4 Years',
        description: 'Comprehensive program covering software development, computer systems, algorithms, and emerging technologies.',
        highlights: ['Software Engineering', 'Data Structures & Algorithms', 'Computer Networks', 'Database Systems', 'Machine Learning']
      },
      {
        name: 'Computer Science and Engineering (CSE)',
        duration: '4 Years',
        description: 'Advanced program focusing on theoretical foundations and practical applications of computer science.',
        highlights: ['Programming Languages', 'Artificial Intelligence', 'Cybersecurity', 'Cloud Computing', 'Software Architecture']
      },
      {
        name: 'Electronics and Telecommunication (EXTC)',
        duration: '4 Years',
        description: 'Specialized program in electronics, communication systems, and telecommunications technology.',
        highlights: ['Digital Signal Processing', 'Wireless Communication', 'VLSI Design', 'Embedded Systems', '5G Technology']
      }
    ]
  },
  {
    category: 'PG Programs',
    icon: <Award className="w-8 h-8" />,
    programs: [
      {
        name: 'Master of Computer Applications (MCA)',
        duration: '2 Years',
        description: 'Advanced program designed to develop expertise in computer applications and software development.',
        highlights: ['Advanced Programming', 'Software Project Management', 'Web Technologies', 'Mobile App Development', 'Data Analytics']
      },
      {
        name: 'Master of Technology (M.Tech)',
        duration: '2 Years',
        description: 'Research-oriented program offering specializations in various engineering disciplines.',
        highlights: ['Research Methodology', 'Advanced Engineering Concepts', 'Industry Collaboration', 'Innovation Projects', 'Technical Leadership']
      }
    ]
  }
];

const stats = [
  { icon: <Users className="w-6 h-6" />, value: '2000+', label: 'Students Enrolled' },
  { icon: <GraduationCap className="w-6 h-6" />, value: '95%', label: 'Placement Rate' },
  { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Industry Partners' },
  { icon: <TrendingUp className="w-6 h-6" />, value: '15 LPA', label: 'Highest Package' }
];

export const Programs: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 bg-gray-50 dark:bg-dark-800 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Academic Programs
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive programs designed to prepare students for successful careers in technology and innovation
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 transition-all duration-700 delay-400 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-white rounded-lg mb-4">
                {stat.icon}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-gray-300 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="space-y-16">
          {programs.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${
                isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${600 + categoryIndex * 200}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-4 bg-white dark:bg-dark-700 px-8 py-4 rounded-2xl shadow-lg border border-gray-200 dark:border-dark-600">
                  <div className="text-primary-600 dark:text-accent-teal">
                    {category.icon}
                  </div>
                  <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Programs Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.programs.map((program, programIndex) => (
                  <div
                    key={program.name}
                    className={`group bg-white dark:bg-dark-700 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-dark-600 overflow-hidden transition-all duration-300 hover:scale-105 animate-scale-in`}
                    style={{ animationDelay: `${800 + categoryIndex * 200 + programIndex * 100}ms` }}
                  >
                    {/* Program Header */}
                    <div className="bg-gradient-to-r from-primary-600 to-accent-teal p-6">
                      <h4 className="font-playfair text-xl font-bold text-white mb-2">
                        {program.name}
                      </h4>
                      <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full">
                        <span className="text-white text-sm font-medium">
                          {program.duration}
                        </span>
                      </div>
                    </div>

                    {/* Program Content */}
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {program.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Key Highlights:
                        </h5>
                        <div className="space-y-2">
                          {program.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                              <span className="text-gray-600 dark:text-gray-300 text-sm">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Program Footer */}
                    <div className="px-6 pb-6">
                      <button className="w-full bg-gradient-to-r from-primary-600 to-accent-teal text-white py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 group-hover:shadow-lg">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-primary-600 to-accent-teal rounded-2xl p-8 lg:p-12">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful graduates who have built their careers with our world-class programs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Apply Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};