import React,{useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";   // ⭐ This is required

import photo from "../../../assets/image.png";

import Malabika from "../../../assets/Council-Members/Malabika.png";
import Ashishsinha from "../../../assets/Council-Members/Ashish-sinha.png";
import BiswapatiChatterjee from "../../../assets/Council-Members/Biswapati-Chatterjee.png";
import Somasaha from "../../../assets/Council-Members/Soma-saha.png";
import Sarmitasaha from "../../../assets/Council-Members/Sarmita-saha.png";
import Dineshkumar from "../../../assets/Council-Members/Dinesh-kumar.png";

const Governing = () => {

  useEffect(() => {
        AOS.init({
          duration: 800,
          once: false, // ⭐ important if you want re-animation every time
        });
      
      }, []);


  // Chairperson Data
  const chairperson = {
    name: "Mr. Sandip Basu",
    position: "Chairperson",
    photo: photo,
    bio: "Mr. Sandip Basu brings over 52 years of industry experience in manufacturing and innovation. He has been instrumental in shaping policies that support industrial growth and sustainable development across India.",
    email: "sandip.basu2403@gmail.com",
    linkedin: "#",
  };

  
  // Council Members
  const councilMembers = [
    {
      name: "Dinesh Kumar ",
      position: "Treasure",
      photo: Dineshkumar,
    },
    {
      name: "Ashish Sinha ",
      position: "Executive Asisistant",
      photo: Ashishsinha,
    },
    {
      name: "Biswapati Chatterjee",
      position: "President",
      photo: BiswapatiChatterjee,
    },
    {
      name: "soma Saha",
      position: " Secretary",
      photo: Somasaha,
    },
    {
      name: "Sarmita Saha",
      position: "Jt Secretary",
      photo: Sarmitasaha,
    },
    {
      name: "Malbika Mukherji",
      position: "Member",
      photo: Malabika,
    },
    
  ];

  // Advisory Board
  const advisoryBoard = [
    {
      name: "VIJAY COLLEGE OF PHARMACY",
      Address: "Street No. 12, Chikkadpally",
      photo: "",
      credentials: "Former Director, IIT Delhi",
    },
    {
      name: "COLLEGE OF AGRICULTURAL ENGINEERING",
      Address: "Advisory Member",
      photo: "",
      credentials: "Industry Policy Expert",
    },
    {
      name: "SAIRAM INSTITUTE OF BUSINESS ADMINISTRATION",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "SUVERNA INSTITUTE OF MANAGEMENT STUDIES",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "INTERNATIONAL INSTITUTE OF TECHNOLOGY & MANAGEMENT",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "Pt. L.R. College of Architecture",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },

    {
      name: "ASIAN INSTITUTE OF MANAGEMENT STUDIES",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "IMRAN RURAL ENGINEERING COLLEGE,GULBARGA",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "Ahalia Group of Instititions",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "Re Birth Education & Research Foundation",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "SRI BALAJI INSTITUTE OF TECHNOLOGY & SCIENCES, JAIPUR",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
    {
      name: "SKR Engineering College",
      position: "",
      photo: "",
      credentials: "Veteran Industrialist",
    },
  
  ];

  return (
    <div className="mt-20 w-full bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" data-aos="fade-right">
            Governing Council
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed opacity-90" data-aos="fade-left">
            Meet the dedicated leaders driving FII's vision and mission forward
          </p>
        </div>
      </div>

      {/* Chairperson Section */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <div className="bg-white rounded-lg sm:rounded-xl lg:rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Photo Section */}
            <div className="lg:col-span-1 bg-gradient-to-br from-indigo-600 to-blue-600 p-6 sm:p-8 md:p-10 flex flex-col items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20"></div>
                <img
                  src={chairperson.photo}
                  alt={chairperson.name}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-white shadow-2xl"
                />
              </div>
              <div className="mt-6 text-center">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-white font-semibold text-sm sm:text-base">
                    {chairperson.position}
                  </span>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="lg:col-span-2 p-6 sm:p-8 md:p-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" data-aos="fade-right">
                {chairperson.name}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6" data-aos="fade-left">
                {chairperson.bio}
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href={`mailto:${chairperson.email}`}
                  className="inline-flex items-center gap-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">Email</span>
                </a>
                <a
                  href={chairperson.linkedin}
                  className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 px-4 py-2 rounded-lg transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Council Members */}
      <div className="bg-white/50 backdrop-blur-sm py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">
            Council Members
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {councilMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden text-center group" data-aos="flip-left" 
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-48 sm:h-56 object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-4 sm:p-5">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                    {member.position}
                  </p>
                    
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advisory Board */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-12 sm:py-16 md:py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3 sm:mb-4">
          Advisory Board & Honorary Members
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          Distinguished experts providing strategic guidance and mentorship
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {advisoryBoard.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-lg sm:rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 sm:p-6 border border-gray-100 group" data-aos="flip-right"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-blue-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <img
                    src={member.photo}
                    // alt={member.name}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                {/* <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                  {member.position}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 italic">
                  {member.credentials}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12 sm:py-16 px-3 sm:px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Join Our Network
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8">
            Collaborate with industry leaders and contribute to India's
            industrial growth
          </p>
          <button className="bg-white text-indigo-600 hover:bg-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold text-sm sm:text-base transition-colors duration-300 shadow-lg hover:shadow-xl">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Governing;
