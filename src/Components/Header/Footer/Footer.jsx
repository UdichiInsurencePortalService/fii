import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div>
        <footer className="w-full bg-gray-900 text-gray-300 py-12">
          <div className="max-w-7xl mx-auto px-6">
            {/* TOP GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h3>
                <ul className="space-y-2">
                 <li> <Link to="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link to="overview" className="hover:text-white transition">About Us</Link></li>
                 <li> <Link to="/Gallery" className="hover:text-white transition">Gallery</Link> </li>
                 <li> <Link to="/Contact" className="hover:text-white transition">Contact</Link></li>
                </ul>
              </div>

              {/* Address */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Address
                </h3>
                <p className="text-sm ">
                  Federation of Institute & Industries (FII) <br />
                  Plot No- C, 127, C Block, Sector 10, Noida, Uttar Pradesh 201301 Uttar Pradesh 
                  <br />
                  Pin: 201301
                </p>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Contact
                </h3>
                <p className="cursor-pointer">Email: fiiofficial184@gmail.com</p>
                <p>Phone: +91 08069409202</p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">
                  Follow Us
                </h3>
                <div className="flex space-x-4 text-2xl">
                  <a className="hover:text-white transition" href="#">
                    🌐
                  </a>
                  <a className="hover:text-white transition" href="#">
                    👍
                  </a>
                  <a className="hover:text-white transition" href="#">
                    📸
                  </a>
                  <a className="hover:text-white transition" href="#">
                    🐦
                  </a>
                </div>
              </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Federation of Institute & Industries.
              All Rights Reserved. |{" "}
              <span className="hover:text-white cursor-pointer">
                Privacy Policy
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
