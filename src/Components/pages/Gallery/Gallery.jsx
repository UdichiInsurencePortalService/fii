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

import g10 from "../../../assets/Galleryphotos/images10.png";
import g11 from "../../../assets/Galleryphotos/images11.jpg";
import g12 from "../../../assets/Galleryphotos/images12.jpg";
import g13 from "../../../assets/Galleryphotos/images13.jpg";
import g14 from "../../../assets/Galleryphotos/images14.jpg";
import g15 from "../../../assets/Galleryphotos/images15.jpg";
import g16 from "../../../assets/Galleryphotos/images16.jpg";
import g17 from "../../../assets/Galleryphotos/images17.jpg";
import g18 from "../../../assets/Galleryphotos/images18.jpg";
import g19 from "../../../assets/Galleryphotos/images19.jpg";
import g20 from "../../../assets/Galleryphotos/images20.jpg";

import g21 from "../../../assets/Galleryphotos/images21.jpg";
import g22 from "../../../assets/Galleryphotos/images22.jpg";
import g23 from "../../../assets/Galleryphotos/images23.jpg";
import g24 from "../../../assets/Galleryphotos/images24.jpg";
import g25 from "../../../assets/Galleryphotos/images25.jpg";
import g26 from "../../../assets/Galleryphotos/images26.jpg";
import g27 from "../../../assets/Galleryphotos/images27.jpg";
import g28 from "../../../assets/Galleryphotos/images28.jpg";
import g29 from "../../../assets/Galleryphotos/images29.jpg";
import g30 from "../../../assets/Galleryphotos/images30.jpg";

import g31 from "../../../assets/Galleryphotos/images31.jpg";
import g32 from "../../../assets/Galleryphotos/images32.jpg";
import g33 from "../../../assets/Galleryphotos/images33.jpg";
import g34 from "../../../assets/Galleryphotos/images34.jpg";
import g35 from "../../../assets/Galleryphotos/images35.jpg";
import g36 from "../../../assets/Galleryphotos/images36.jpg";
import g37 from "../../../assets/Galleryphotos/images37.jpg";
import g38 from "../../../assets/Galleryphotos/images38.jpg";
import g39 from "../../../assets/Galleryphotos/images39.jpg";
import g40 from "../../../assets/Galleryphotos/images40.jpg";

import g41 from "../../../assets/Galleryphotos/images41.jpg";
import g42 from "../../../assets/Galleryphotos/images42.jpg";
import g43 from "../../../assets/Galleryphotos/images43.jpg";
import g44 from "../../../assets/Galleryphotos/images44.jpg";
import g45 from "../../../assets/Galleryphotos/images45.jpg";
import g46 from "../../../assets/Galleryphotos/images46.jpg";
import g47 from "../../../assets/Galleryphotos/images47.jpg";
import g48 from "../../../assets/Galleryphotos/images48.jpg";
import g49 from "../../../assets/Galleryphotos/images49.jpg";
import g50 from "../../../assets/Galleryphotos/images50.jpg";

import g51 from "../../../assets/Galleryphotos/images51.jpg";
import g52 from "../../../assets/Galleryphotos/images52.jpg";
import g53 from "../../../assets/Galleryphotos/images53.jpg";
import g54 from "../../../assets/Galleryphotos/images54.jpg";
import g55 from "../../../assets/Galleryphotos/images55.jpg";
import g56 from "../../../assets/Galleryphotos/images56.jpg";
import g57 from "../../../assets/Galleryphotos/images57.jpg";
import g58 from "../../../assets/Galleryphotos/images58.jpg";
import g59 from "../../../assets/Galleryphotos/images59.jpg";
import g60 from "../../../assets/Galleryphotos/images60.jpg";

import g61 from "../../../assets/Galleryphotos/images61.jpg";
import g62 from "../../../assets/Galleryphotos/images62.jpg";
import g63 from "../../../assets/Galleryphotos/images63.jpg";
import g64 from "../../../assets/Galleryphotos/images64.jpg";
import g65 from "../../../assets/Galleryphotos/images65.jpg";
import g66 from "../../../assets/Galleryphotos/images66.jpg";
import g67 from "../../../assets/Galleryphotos/images67.jpg";
import g68 from "../../../assets/Galleryphotos/images68.jpg";
import g69 from "../../../assets/Galleryphotos/images69.jpg";
import g70 from "../../../assets/Galleryphotos/images70.jpg";

import g71 from "../../../assets/Galleryphotos/images71.jpg";
import g72 from "../../../assets/Galleryphotos/images72.jpg";
import g73 from "../../../assets/Galleryphotos/images73.jpg";
import g74 from "../../../assets/Galleryphotos/images74.jpg";
import g75 from "../../../assets/Galleryphotos/images75.jpg";
import g76 from "../../../assets/Galleryphotos/images76.jpg";
import g77 from "../../../assets/Galleryphotos/images77.jpg";
import g78 from "../../../assets/Galleryphotos/images78.jpg";
import g79 from "../../../assets/Galleryphotos/images79.jpg";
import g80 from "../../../assets/Galleryphotos/images80.jpg";

import g81 from "../../../assets/Galleryphotos/images81.jpg";

import g82 from "../../../assets/Galleryphotos/images82.jpg";

import g83 from "../../../assets/Galleryphotos/images83.jpg";

import g84 from "../../../assets/Galleryphotos/images84.jpg";

import g85 from "../../../assets/Galleryphotos/images85.jpg";

import g86 from "../../../assets/Galleryphotos/images86.jpg";

import g87 from "../../../assets/Galleryphotos/images87.jpg";

import g88 from "../../../assets/Galleryphotos/images88.jpg";

import g89 from "../../../assets/Galleryphotos/images89.jpg";

import g90 from "../../../assets/Galleryphotos/images90.jpg";


const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Simulated images - replace with your actual imports
  const images = [
    
    { image: g11 },
    { image: g12 },
    { image: g13 },
    { image: g14 },
    { image: g15 },
    { image: g16 },
    { image: g17 },
    { image: g18 },
    { image: g19 },
    { image: g20 },
    { image: g21 },
    { image: g22 },
    { image: g23 },
    { image: g24 },
    { image: g25 },
    { image: g26 },
    { image: g27 },
    { image: g28 },
    { image: g29 },
    { image: g30 },
    { image: g31 },
    { image: g32 },
    { image: g33 },
    { image: g34 },
    { image: g35 },
    { image: g36 },
    { image: g37 },
    { image: g38 },
    { image: g39 },
    { image: g40 },
    { image: g41 },
    { image: g42 },
    { image: g43 },
    { image: g44 },
    { image: g45 },
    { image: g46 },
    { image: g47 },
    { image: g48 },
    { image: g49 },
    { image: g50 },
    { image: g51 },
    { image: g52 },
    { image: g53 },
    { image: g54 },
    { image: g55 },
    { image: g56 },
    { image: g57 },
    { image: g58 },
    { image: g59 },
    { image: g60 },
    { image: g61 },
    { image: g62 },
    { image: g63 },
    { image: g64 },
    { image: g65 },
    { image: g66 },
    { image: g67 },
    { image: g68 },
    { image: g69 },
    { image: g70 },
    { image: g71 },
    { image: g72 },
    { image: g73 },
    { image: g74 },
    { image: g75 },
    { image: g76 },
    { image: g77 },
    { image: g78 },
    { image: g79 },
    { image: g80 },
    { image: g81 },
    { image: g82 },
    { image: g83 },
    { image: g84 },
    { image: g85 },
    { image: g86 },
    { image: g87 },
    { image: g88 },
    { image: g89 },
    { image: g90 },
    { image: g1 },
    { image: g2 },
    { image: g3 },
    { image: g4 },
    { image: g5 },
    { image: g6 },
    { image: g7 },
    { image: g8 },
    { image: g9 },
    { image: g10 },

  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".gallery-item").forEach((item) => {
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="mt-15 min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 text-center opacity-0 animate-fade-in">
        <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Gallery
          </span>
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
              transitionDelay: `${index * 50}ms`,
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
          <div
            className="max-w-5xl max-h-[90vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-semibold">
              {selectedImage.title}
            </p>
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
