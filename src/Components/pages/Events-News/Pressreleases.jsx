import React, { useEffect } from 'react';
import { Newspaper, Calendar, ArrowRight, ExternalLink, TrendingUp } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PressReleases = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50
    });
  }, []);

  const pressReleases = [
    {
      id: 1,
      title: "Breaking: Major Economic Reforms Announced",
      date: "November 24, 2025",
      category: "Business",
      description: "The government has announced sweeping economic reforms aimed at boosting industrial growth and attracting foreign investment. These reforms include tax incentives, streamlined regulations, and enhanced infrastructure development initiatives.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: true
    },
    {
      id: 2,
      title: "Tech Sector Growth Surges to Record Highs",
      date: "November 23, 2025",
      category: "Technology",
      description: "India's technology sector has witnessed unprecedented growth with a 45% increase in startup funding. Major tech hubs in Bangalore, Hyderabad, and Pune are leading the charge with innovative solutions in AI, fintech, and healthcare technology.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: false
    },
    {
      id: 3,
      title: "Green Energy Initiative Launched Nationwide",
      date: "November 22, 2025",
      category: "Energy",
      description: "A comprehensive green energy initiative has been launched with a target of achieving 500 GW of renewable energy capacity by 2030. The program focuses on solar, wind, and hydrogen energy projects across multiple states.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: false
    },
    {
      id: 4,
      title: "Manufacturing Sector Reports Strong Q3 Performance",
      date: "November 21, 2025",
      category: "Manufacturing",
      description: "The manufacturing sector has reported robust growth in Q3 2025, with PMI reaching a 10-year high. Automobile, electronics, and pharmaceutical industries are driving the expansion with increased production and exports.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: false
    },
    {
      id: 5,
      title: "Digital Payment Revolution Transforms Rural India",
      date: "November 20, 2025",
      category: "Fintech",
      description: "Digital payment adoption in rural India has crossed 200 million users, marking a significant milestone in financial inclusion. The initiative has empowered small businesses and farmers with seamless access to digital financial services.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: false
    },
    {
      id: 6,
      title: "Infrastructure Investment Reaches All-Time High",
      date: "November 19, 2025",
      category: "Infrastructure",
      description: "Record infrastructure investments totaling ₹10 lakh crore have been approved for highways, railways, and urban development projects. The ambitious plan aims to enhance connectivity and boost economic growth across the nation.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop",
      link: "https://timesofindia.indiatimes.com/business",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto text-center" data-aos="fade-down">
          <div className="mt-10 inline-flex items-center justify-center p-2 bg-blue-500/20 rounded-full mb-6">
            <Newspaper className="w-8 h-8 text-blue-300" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Press Releases
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed with the latest news, announcements, and industry insights
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <TrendingUp className="w-4 h-4 inline mr-2" />
              <span className="font-semibold">Latest Updates</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white border border-white/20">
              <Calendar className="w-4 h-4 inline mr-2" />
              <span className="font-semibold">November 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Featured Article */}
        <div data-aos="fade-up" className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-3xl transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={pressReleases[0].image} 
                  alt={pressReleases[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    FEATURED
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold">
                    {pressReleases[0].category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {pressReleases[0].date}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {pressReleases[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {pressReleases[0].description}
                </p>
                <a
                  href={pressReleases[0].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl group/btn"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressReleases.slice(1).map((release, index) => (
            <div
              key={release.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={release.image} 
                  alt={release.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-bold">
                    {release.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{release.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {release.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                  {release.description}
                </p>

                <a
                  href={release.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-16 px-4" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <Newspaper className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Never Miss an Update
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our press releases and get the latest news delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg"
            />
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressReleases;