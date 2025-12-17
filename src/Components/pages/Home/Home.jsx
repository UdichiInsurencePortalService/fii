import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import img1 from "../../../assets/photo4.jpg";
import img2 from "../../../assets/photo5.jpg";
import img3 from "../../../assets/photo6.jpg";
import { CalendarDays } from "lucide-react";
// import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [img1, img2, img3];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false, // ⭐ important if you want re-animation every time
    });
  }, []);

  const items = [
    {
      icon: "🎓",
      label: "Institutes Connected",
      value: "120+",
    },
    {
      icon: "🏭",
      label: "Industries Onboard",
      value: "85+",
    },
    {
      icon: "🤝",
      label: "Collaborations",
      value: "45+",
    },
    {
      icon: "💡",
      label: "Research Projects",
      value: "30+",
    },
  ];

  const cards = [
    {
      icon: "🛠️",
      title: "Skill Development",
      description:
        "Providing hands-on training, workshops, and certification programs to enhance student and faculty skillsets.",
    },
    {
      icon: "💡",
      title: "Innovation & Research",
      description:
        "Encouraging collaborative research, innovation projects, and industry-driven problem solving.",
    },
    {
      icon: "🤝",
      title: "Industry Collaboration",
      description:
        "Building strong partnerships between institutes and industries for training, internships, and real-world exposure.",
    },
    {
      icon: "🚀",
      title: "Employment & Entrepreneurship",
      description:
        "Empowering students with career opportunities, startup support, and entrepreneurship development programs.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="section pt-14">
        <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      alt=""
      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
        ${currentIndex === index ? "opacity-100" : "opacity-0"}
      `}
    />
  ))}

  {/* Previous Button */}
  <button
    onClick={prevSlide}
    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
  >
    ❮
  </button>

  {/* Next Button */}
  <button
    onClick={nextSlide}
    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full z-10"
  >
    ❯
  </button>
</div>


        {/*Overlay text: section  */}
        <div className="w-full bg-gray-50 text-black px-6 py-10 flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-2xl md:text-4xl font-bold leading-tight">
              Bridging Academia and Industry for a Sustainable Future
            </h1>

            <p className="mt-4 text-sm md:text-base text-gray-700">
              Empowering Institutions and Enterprises through Collaboration,
              Innovation & Skill Development.
            </p>

            <div className="mt-8 flex sm:flex-row justify-center gap-4">
              <Link>
                <button className="px-4 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
                  Join Now
                </button>
              </Link>

              <Link>
                <button className="px-4 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600 transition">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* overlay text: section end */}

        {/* QuickInfoStrip section start */}

        <section className="QuickInfoStrip w-full bg-white py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
            Quick Highlights
          </h2>

          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 items-stretch">
              {items.map((it, ind) => (
                <article
                  key={ind}
                  className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
                  data-aos="zoom-in"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 text-xl mb-3">
                    <span>{it.icon}</span>
                  </div>

                  <p className="text-sm text-gray-600">{it.label}</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {it.value}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About short section start  */}
        <div className="about w-full text-black bg-gray-50 flex justify-center py-16 px-4 sm:px-10 md:px-16">
          <div className="flex flex-col w-full max-w-5xl text-center mx-auto">
            <h1 className="text-lg sm:text-lg md:text-3xl font-semibold italic leading-relaxed font-sans">
              The Federation of Institute and Industries (FII), headquartered in
              Delhi, is a national-level alliance working to integrate academia
              and industry for research, training, innovation, and employability
              enhancement.
            </h1>

            <div className="mt-8 flex sm:flex-row justify-center gap-4">
              <Link>
                <button className="px-4 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition">
                  Read More
                </button>
              </Link>

              <Link>
                <button className="px-4 py-3 bg-gray-700 text-white rounded-xl hover:bg-gray-800 transition">
                  About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
        {/* About short section End */}
        <div className="section2 w-full bg-amber-50 py-12">
          <div className="max-w-6xl mx-auto px-4">
            {/* Section Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
              Our Key Focus Areas
            </h2>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {cards.map((card, ind) => (
                <article
                  key={ind}
                  className="flex flex-col text-center items-center p-6 bg-amber-100 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                  data-aos="flip-down"
                >
                  {/* Icon circle */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-300 text-blue-800 text-3xl mb-4">
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-lg sm:text-xl font-bold mb-2">
                    {card.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-700">
                    {card.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* call To Action Section  */}

        <div className="w-full bg-indigo-600 py-14 px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* CTA Heading */}
            <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-snug">
              Join the Federation and Build the Future Together
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4">
              {/* Primary Button */}
              <button className="px-8 py-3 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-200 transition">
                Become a Member
              </button>

              {/* Secondary Button */}
              <Link
                to="/Contact"
                className="px-8 py-3 border border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
