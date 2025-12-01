import React, { useEffect, useState } from "react";

import g1 from "../../../assets/Galleryphotos/images1.jpg";
import g2 from "../../../assets/Galleryphotos/images2.jpg";
import g3 from "../../../assets/Galleryphotos/images3.jpg";
import g4 from "../../../assets/Galleryphotos/images4.jpg";
import g5 from "../../../assets/Galleryphotos/images5.jpg";
import g6 from "../../../assets/Galleryphotos/images6.jpg";
import g7 from "../../../assets/Galleryphotos/images7.png";
import g8 from "../../../assets/Galleryphotos/images8.jpg";
import g9 from "../../../assets/Galleryphotos/images9.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Simulated images - replace with your actual imports
  const images = [
    { image: g1},
    { image: g2},
    { image:  g3},
    { image:  g4},
    { image:  g5},
    { image: g6},
    { image:  g7},
    { image: g8},
    { image:  g9},
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".gallery-item").forEach(item => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center opacity-0 animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gallery</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore our stunning collection of moments captured in time
        </p>
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((item, index) => (
          <div
            key={index}
            className="gallery-item opacity-0 cursor-pointer"
            style={{ 
              animationDelay: `${index * 100}ms`,
              transitionDelay: `${index * 50}ms`
            }}
            onClick={() => setSelectedImage(item)}
          >
            <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 aspect-square bg-slate-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
             

              {/* Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-purple-400 transition-colors duration-300 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">{selectedImage.title}</p>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.4s ease-out forwards;
        }

        .gallery-item.animate-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Gallery;