import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const newsEvents = [
  {
    id: 1,
    title: "NAAC Peer Team Visit Scheduled",
    date: "2024-03-15",
    time: "10:00 AM",
    category: "Important",
    description: "NAAC peer team visit for accreditation assessment scheduled for next week."
  },
  {
    id: 2,
    title: "Annual Technical Symposium 2024",
    date: "2024-03-20",
    time: "9:00 AM",
    category: "Event",
    description: "Join us for the biggest technical event of the year with industry experts."
  },
  {
    id: 3,
    title: "Placement Drive - TCS",
    date: "2024-03-25",
    time: "2:00 PM",
    category: "Placement",
    description: "TCS campus placement drive for final year students."
  },
  {
    id: 4,
    title: "Research Paper Publication Guidelines",
    date: "2024-03-18",
    time: "11:00 AM",
    category: "Academic",
    description: "New guidelines for research paper publication and journal submissions."
  },
  {
    id: 5,
    title: "Industry Expert Lecture Series",
    date: "2024-03-22",
    time: "3:00 PM",
    category: "Lecture",
    description: "Weekly lecture series by industry experts on emerging technologies."
  },
  {
    id: 6,
    title: "Student Project Exhibition",
    date: "2024-03-28",
    time: "10:00 AM",
    category: "Exhibition",
    description: "Annual exhibition showcasing innovative student projects."
  }
];

const categoryColors = {
  Important: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  Event: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  Placement: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  Academic: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  Lecture: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  Exhibition: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300"
};

export const NewsEvents: React.FC = () => {
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
            News & Events
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest happenings and upcoming events at S.P.I.T.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsEvents.map((item, index) => (
            <article
              key={item.id}
              className={`group bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-200 dark:border-dark-700 ${
                isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'
              }`}
              style={{ animationDelay: `${index * 100 + 400}ms` }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category as keyof typeof categoryColors]}`}>
                  {item.category}
                </span>
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {item.time}
                </div>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-accent-teal transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Date and Read More */}
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(item.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </div>
                <button className="flex items-center text-primary-600 dark:text-accent-teal hover:text-primary-700 dark:hover:text-accent-teal/80 transition-colors duration-300 text-sm font-medium group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-accent-teal/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className={`text-center mt-12 transition-all duration-700 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <a
            href="/news-events"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-teal text-white font-semibold rounded-lg hover:from-primary-700 hover:to-accent-teal/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View All News & Events
            <Calendar className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};