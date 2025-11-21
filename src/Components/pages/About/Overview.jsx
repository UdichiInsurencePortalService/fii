import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Overview = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <div className="mt-20 w-full overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="pt-12 sm:pt-16 md:pt-20 bg-gradient-to-br from-emerald-50 to-emerald-100 text-black py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-down">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-emerald-900">
            About FII
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Learn about our foundation, mission, vision, and the organizational
            values that drive the Federation of Indian Industries forward.
          </p>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center" data-aos="fade-up">
        {/* TEXT CONTENT */}
        <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            About FII
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            The Federation of Indian Industries (FII) was founded with the
            vision of supporting industrial growth, innovation, and sustainable
            economic development across India. Our organization is registered
            under the appropriate statutory guidelines and works with multiple
            stakeholders to empower industries.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            We are committed to fostering a collaborative ecosystem where
            businesses can thrive, innovate, and contribute to the nation's
            economic prosperity. Through policy advocacy, industry networking,
            and capacity building initiatives, we serve as a bridge between
            industry, government, and society.
          </p>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
            Our mission encompasses supporting MSMEs, promoting sustainable
            practices, facilitating technology adoption, and creating platforms
            for knowledge exchange that drive industrial excellence and economic
            growth across all sectors.
          </p>
        </div>

        {/* IMAGE */}
        <div className="order-1 md:order-2">
          <img
            src="https://via.placeholder.com/500"
            alt="FII Overview"
            className="rounded-lg sm:rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* FOUNDATION DETAILS */}
      <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md border border-gray-100" data-aos="flip-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl">📅</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center">
              Foundation Year
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 md:mt-3 text-center text-sm sm:text-base md:text-lg">
              2017
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md border border-gray-100" data-aos="flip-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl">📋</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center">
              Registration Number
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 md:mt-3 text-center text-sm sm:text-base md:text-lg">
              2318
            </p>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl shadow-md border border-gray-100 sm:col-span-2 md:col-span-1" data-aos="flip-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
              <span className="text-xl sm:text-2xl md:text-3xl">🏢</span>
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 text-center">
              Organization Type
            </h3>
            <p className="text-gray-600 mt-1 sm:mt-2 md:mt-3 text-center text-sm sm:text-base md:text-lg">
              Non-Government Organization
            </p>
          </div>
        </div>
      </div>

      {/* ORGANIZATIONAL PHILOSOPHY */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 md:py-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
          Organizational Philosophy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-100 flex items-start gap-2 sm:gap-3 md:gap-4" data-aos="fade-right">
            <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">🚀</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Commitment to industrial growth and national development
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-100 flex items-start gap-2 sm:gap-3 md:gap-4" data-aos="fade-left">
            <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">⚖️</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Ethical and transparent work culture
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-100 flex items-start gap-2 sm:gap-3 md:gap-4" data-aos="fade-up-right">
            <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">💼</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Empowerment of MSMEs and new industries
            </p>
          </div>

          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-gray-100 flex items-start gap-2 sm:gap-3 md:gap-4" data-aos="fade-up-left">
            <div className="text-xl sm:text-2xl md:text-3xl flex-shrink-0">🌱</div>
            <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
              Promoting innovation, sustainability, and collaboration
            </p>
          </div>
        </div>
      </div>

      {/* VIDEO INTRODUCTION */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 pb-8 sm:pb-12 md:pb-16">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
          Video Introduction
        </h2>

        <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg border-2 border-emerald-100">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/rKE57SR9SNs?si=POKQLptFwLuXeXaT"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* MAP SECTION */}
      <div className="pt-6 sm:pt-8 md:pt-10 pb-8 sm:pb-12 md:pb-16">
        <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[450px]">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56069.550158438826!2d77.2169090468399!3d28.559344531544177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59baa903b7f%3A0xfe874d6e20431af5!2sSiddhi%20Rubber%20Udyog!5e0!3m2!1sen!2sin!4v1763366044138!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Overview;