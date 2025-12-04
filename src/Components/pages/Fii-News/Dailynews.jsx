import React, { useState } from 'react';
import { Calendar, Building2, TrendingUp, Shield, Award } from 'lucide-react';

import img1 from "../../../assets/Fii-news-photo/img1.png";
import img2 from "../../../assets/Fii-news-photo/img2.png";
import img3 from "../../../assets/Fii-news-photo/img3.png";
import img4 from "../../../assets/Fii-news-photo/img4.png";
import img5 from "../../../assets/Fii-news-photo/img5.png";

const NewsCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const icons = {
    0: Calendar,
    1: Building2,
    2: TrendingUp,
    3: Shield,
    4: Award
  };
  
  const colors = {
    0: 'from-purple-500 to-pink-500',
    1: 'from-blue-500 to-cyan-500',
    2: 'from-green-500 to-emerald-500',
    3: 'from-orange-500 to-red-500',
    4: 'from-indigo-500 to-purple-500'
  };
  
  const Icon = icons[index];
  
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
      }}
    >
      {/* Gradient Header */}
      <div className={`h-2 bg-gradient-to-r ${colors[index]}`}></div>
      
      {/* Card Content */}
      <div className="p-6">
        {/* Icon and Number */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${colors[index]} shadow-lg transform transition-transform group-hover:scale-110 group-hover:rotate-3`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className={`text-4xl font-bold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent`}>
            {index + 1}
          </div>
        </div>
        
        {/* Image */}
        <div className="mb-4 rounded-xl overflow-hidden h-48 relative group-hover:scale-105 transition-transform duration-500 shadow-md">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
        </div>
        
        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-3">
          {item.title}
        </h3>
        
        {/* Description */}
        <p className={`text-sm text-gray-600 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
          {item.description}
        </p>
        
        {/* Read More Button */}
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className={`mt-4 text-sm font-semibold bg-gradient-to-r ${colors[index]} bg-clip-text text-transparent hover:underline transition-all`}
        >
          {isExpanded ? 'Show Less' : 'Read More'} →
        </button>
      </div>
      
      {/* Animated Border */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${colors[index]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} 
           style={{ padding: '2px', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}>
      </div>
    </div>
  );
};

const Dailynews = () => {
  const newsItems = [
    {
      title: "100 Days Intensive Awareness Campaign - Child Marriage Free Bharat",
      description: "The campaign will be launched on 4th December at 10:30 AM at Vigyan Bhawan, New Delhi, by Union WCD Minister Smt. Annapurna Devi, in the esteemed presence of WCD MoS Smt. Savitri Thakur. This initiative aims to create widespread awareness and take concrete steps towards eliminating child marriage across India.",
      image: img1
    },
    {
      title: "Activities in Ministries",
      description: "Various governmental ministries are actively engaged in implementing programs and initiatives aimed at social welfare, economic development, and public service delivery. These coordinated efforts demonstrate the government's commitment to comprehensive national development and citizen welfare.",
      image: img2
    },
    {
      title: "HCC Stock Analysis - Technical Breakout",
      description: "HCC Getting Ready for the Big Move on Upside. Key indicators: Inverted Head & Shoulder Formation, Curved Trendline Breakout, Morning Star on Weekly Basis, Triple Bottom, Volume Pop Up. Targets: 35, 47, 57. Time Frame: 10 to 20 Months. Technical analysis suggests strong bullish momentum.",
      image: img3
    },
    {
      title: "NATRAX POSH Awareness Session",
      description: "NATRAX, a division of NAB and an autonomous body under the Ministry of Heavy Industries (MHI), organized a POSH Awareness Session in alignment with the Government's mandate to ensure regular sensitization, effective implementation, and continual reinforcement of workplace safety and protection policies across organizations.",
      image: img4
    },
    {
      title: "ARAI@60 Diamond Jubilee Celebration",
      description: "Hon'ble Union Minister Shri H D Kumaraswamy unveiled the ARAI@60 Diamond Jubilee logo, marking six decades of ARAI's pioneering contributions to India's automotive research and innovation ecosystem. Automotive Research Association of India - ARAI, an autonomous body under the Ministry of Heavy Industries, has played a vital role in shaping India's mobility landscape. The milestone reaffirms ARAI's commitment to future-ready mobility, advanced safety standards, and technological excellence.",
      image: img5
    }
  ];

  return (
    <div className="pt-25 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-4"
            style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          FII Daily News
        </h1>
        <p className="text-gray-600 text-lg"
           style={{ animation: 'fadeInUp 0.8s ease-out 0.2s both' }}>
          Stay informed with the most recent news and developments
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item, index) => (
          <NewsCard key={index} item={item} index={index} />
        ))}
      </div>
      
      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-16 text-center text-gray-500 text-sm"
           style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}>
        <p>© 2026 All Rights Reserved | Designed with care</p>
      </div>
    </div>
  );
};

export default Dailynews;