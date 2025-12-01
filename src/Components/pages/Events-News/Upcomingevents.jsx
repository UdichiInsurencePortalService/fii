import React, { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Filter } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UpcomingEvents = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }, []);

  const events = [
    {
      id: 1,
      title: "India Fence Expo",
      date: "November 27-29, 2025",
      location: "YashoBhoomi, Dwarka, New Delhi",
      category: "Trade Show",
      description: "Leading exhibition for fencing, gates, and perimeter security solutions.",
      color: "from-blue-500 to-cyan-500",
      status: "upcoming"
    },
    {
      id: 2,
      title: "People Matters Total Rewards & Wellbeing Conference",
      date: "November 27, 2025",
      location: "The Leela Ambience, Gurugram",
      category: "Conference",
      description: "Exploring the future of employee rewards and workplace wellbeing strategies.",
      color: "from-purple-500 to-pink-500",
      status: "upcoming"
    },
    {
      id: 3,
      title: "States' Policy Conclave",
      date: "December 11, 2025",
      location: "Le Meridien New Delhi",
      category: "Conference",
      description: "Strategic policy discussions with state government representatives.",
      color: "from-orange-500 to-red-500",
      status: "upcoming"
    },
    {
      id: 4,
      title: "India Supply Chain Summit (ISCS)",
      date: "December 12, 2025",
      location: "The Grand New Delhi",
      category: "Conference",
      description: "Premier summit addressing supply chain innovation and logistics excellence.",
      color: "from-green-500 to-teal-500",
      status: "upcoming"
    },
    {
      id: 5,
      title: "IHGF Delhi Fair (Spring) 2026",
      date: "February 14-18, 2026",
      location: "India Expo Centre & Mart, Greater Noida",
      category: "Trade Show",
      description: "India's largest handicrafts and home décor exhibition.",
      color: "from-indigo-500 to-purple-500",
      status: "upcoming"
    },
    {
      id: 6,
      title: "AI Impact Summit",
      date: "February 19-20, 2026",
      location: "Bharat Mandapam, New Delhi",
      category: "Conference",
      description: "Exploring artificial intelligence's transformative impact across industries.",
      color: "from-cyan-500 to-blue-500",
      status: "upcoming"
    },
    {
      id: 7,
      title: "Bharat Buildcon 2026",
      date: "April 29-May 2, 2026",
      location: "Yashobhoomi, Dwarka, New Delhi",
      category: "Trade Show",
      description: "International construction technology and building materials exhibition.",
      color: "from-amber-500 to-orange-500",
      status: "upcoming"
    }
  ];

  const filteredEvents = filter === 'all' 
    ? events 
    : events.filter(event => event.category.toLowerCase() === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto text-center" data-aos="fade-down">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Upcoming Events
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Join us at industry-leading tradeshows and conferences across India
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              <span className="font-semibold">{events.length}</span> Events
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-white">
              Multiple Venues
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-4" data-aos="fade-up">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Filter className="w-5 h-5 text-gray-600" />
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('trade show')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'trade show'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Trade Shows
            </button>
            <button
              onClick={() => setFilter('conference')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === 'conference'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Conferences
            </button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
              
              {/* Category Badge */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${event.color}`}>
                    {event.category}
                  </span>
                  <span className="text-xs font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {event.status.toUpperCase()}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-start text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 flex-shrink-0 text-blue-500 mt-0.5" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-start text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-red-500 mt-0.5" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {event.description}
                </p>

                {/* Learn More Button */}
                <button className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <div className="text-gray-400 mb-4">
              <Calendar className="w-16 h-16 mx-auto mb-4" />
              <p className="text-xl font-semibold">No events found</p>
              <p className="text-gray-500 mt-2">Try adjusting your filters</p>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to receive updates about upcoming events and exclusive opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            Stay connected with the latest industry events and networking opportunities
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;