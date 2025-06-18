import React from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const achievements = [
  {
    id: 1,
    title: "National Coding Championship",
    description: "First place in national level programming competition",
    icon: Trophy,
    color: "from-accent-gold to-yellow-500"
  },
  {
    id: 2,
    title: "Innovation Award",
    description: "Best innovative project in engineering category",
    icon: Award,
    color: "from-accent-teal to-green-500"
  },
  {
    id: 3,
    title: "Research Excellence",
    description: "Outstanding research paper publication",
    icon: Star,
    color: "from-accent-purple to-purple-500"
  },
  {
    id: 4,
    title: "Industry Recognition",
    description: "Best internship project award",
    icon: Medal,
    color: "from-primary-500 to-blue-500"
  },
  {
    id: 5,
    title: "Hackathon Winner",
    description: "24-hour coding marathon champion",
    icon: Trophy,
    color: "from-red-500 to-pink-500"
  },
  {
    id: 6,
    title: "Academic Excellence",
    description: "Highest CGPA in department",
    icon: Award,
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 7,
    title: "Sports Achievement",
    description: "Inter-college sports competition winner",
    icon: Medal,
    color: "from-orange-500 to-red-500"
  },
  {
    id: 8,
    title: "Cultural Excellence",
    description: "Best performance in cultural fest",
    icon: Star,
    color: "from-indigo-500 to-purple-500"
  }
];

export const StudentAchievements: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section 
      ref={ref}
      className={`py-16 lg:py-24 bg-white dark:bg-dark-900 transition-all duration-700 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 delay-200 ${
          isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Student Achievements
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Celebrating the outstanding accomplishments of our students across various domains
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.id}
                className={`group relative bg-white dark:bg-dark-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-dark-700 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
                }`}
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-accent-teal transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-teal/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <a
            href="/achievements"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All Achievements
            <Trophy className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};