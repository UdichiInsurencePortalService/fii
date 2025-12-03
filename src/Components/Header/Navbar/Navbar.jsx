import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../../../assets/logo.png";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate(); // FIXED

  // ✔ Handle Click Function (Only 4 links show error)
  const handleClick = (e, subItem) => {
    const errorPaths = [
      "/Institutional",
      "/industry",
      "/individual-associate",
      // "/benefits",
      "/Research",
      "/workshops-seminars",
      "/csr-social-impact",
      "/media-gallery",
    ];

    if (errorPaths.includes(subItem.path)) {
      e.preventDefault();
      toast.error("🚧 This page is under development!");
    } else {
      navigate(subItem.path);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/", subItems: [] },
    {
      name: "About",
      subItems: [
        { name: "Overview", path: "/overview" },
        { name: "Vision & Mission", path: "/visionmission" },
        { name: "Objectives & Functions", path: "/Objectives" },
        { name: "Governing Council", path: "/Governing" },
      ],
    },
    {
      name: "Members",
      subItems: [
        { name: "Institutional Members", path: "/Institutional" },
        { name: "Industry Members", path: "/industry" },
        {
          name: "Individual / Associate Members",
          path: "/individual-associate",
        },
        { name: "Membership Advantage", path: "/apply#Advantage" },
        { name: "Apply for Membership", path: "/apply" },
      ],
    },
    {
      name: "Activities",
      subItems: [
        { name: "Skill Development", path: "/Skill" },
        { name: "Research & Innovation", path: "/Research" },
        { name: "Workshops / Seminars", path: "/workshops-seminars" },
        { name: "CSR & Social Impact", path: "/csr-social-impact" },
      ],
    },
    {
      name: "Events & News",
      subItems: [
        { name: "Upcoming Events", path: "/Upcomingevents" },
        { name: "News & Press Releases", path: "/Pressreleases" },
        { name: "Media Gallery", path: "/media-gallery" },
      ],
    },
    {
      name: "FII in News",
      subItems: [
        { name: "FII Daily Business News Updates", path: "/Skill" },
        // { name: "Industry Members", path: "/industry" },
      ],
    },
    // { name: "Collaboration", path: "/collaboration", subItems: [] },
    { name: "Gallery", path: "/Gallery", subItems: [] },
    // { name: "Join FII", path: "/join-fii", subItems: [] },
    { name: "Contact", path: "/Contact", subItems: [] },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Link to="/" className="flex flex-col items-center text-center">
              <img src={logo} alt="FII Logo" height={70} width={65} />
              <h1 className="text-white text-sm font-medium">
                FEDERATION OF Institutes & Industries
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-1">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  <Link
                    to={item.path}
                    className="text-white px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                  >
                    {item.name}
                    {item.subItems.length > 0 && (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Link>

                  {/* Desktop Dropdown */}
                  {item.subItems.length > 0 && (
                    <div className="absolute left-0 mt-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white rounded-lg shadow-xl py-2">
                        {item.subItems.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            onClick={(e) => {
                              handleClick(e, subItem);
                              closeMenu(); // 👈 MENU CLOSE ADDED
                            }}
                            className="block px-4 py-2.5 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="px-2 pt-2 pb-3 space-y-1 bg-indigo-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <div>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    className="text-white flex-1 px-3 py-2.5 rounded-md text-base"
                    onClick={(e) => {
                      if (item.subItems.length > 0) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    {item.name}
                  </Link>

                  {item.subItems.length > 0 && (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="text-white p-2"
                    >
                      <ChevronDown
                        className={`w-5 h-5 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Dropdown */}
                {item.subItems.length > 0 && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdown === index ? "max-h-96 mt-1" : "max-h-0"
                    }`}
                  >
                    <div className="ml-4 p-2 bg-indigo-800 rounded-lg">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          onClick={(e) => {
                            handleClick(e, subItem);
                            closeMenu(); // 👈 MENU CLOSE ADDED
                          }}
                          className="block px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-20 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
