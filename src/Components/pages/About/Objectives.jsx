import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";   // ⭐ This is required


const Objectives = () => {

      useEffect(() => {
      AOS.init({
        duration: 800,
        once: false, // ⭐ important if you want re-animation every time
      });
    
    }, []);
    

  const Objectiv = [
    {
      title: "Strengthen Industry-Institute partnerships",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Facilitate skill development programs",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      title: "Encourage applied research & innovation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      gradient: "from-teal-500 to-emerald-500"
    },
    {
      title: "Promote employability & entrepreneurship",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-emerald-500 to-green-500"
    },
    {
      title: "Represent members in national and global forums",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      gradient: "from-green-500 to-lime-500"
    }
  ];

  return (
    <div className=" pt-30 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Objectives & Functions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Driving excellence through strategic initiatives and collaborative partnerships
          </p>
        </div>

        {/* Objectives List */}
        <div className="space-y-4">
          {Objectiv.map((objective, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Gradient Line */}
              <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${objective.gradient} transform group-hover:w-2 transition-all duration-300`}></div>
              
              <div className="flex items-center p-6 pl-8" data-aos="fade-right">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${objective.gradient} rounded-lg flex items-center justify-center text-white mr-5 group-hover:scale-110 transition-transform duration-300`}>
                  {objective.icon}
                </div>
                
                {/* Text Content */}
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                    {objective.title}
                  </h3>
                </div>

                {/* Arrow Icon */}
                <div className="flex-shrink-0 ml-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className={`absolute inset-0 bg-gradient-to-r ${objective.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="font-medium">Our Commitment to Excellence</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Objectives;