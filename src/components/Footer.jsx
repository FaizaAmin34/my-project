import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* 🔹 Left: Brand Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Book<span className="text-blue-500">Bazar_Online</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 mb-4">
            Your trusted online bookstore — where stories meet readers. Discover your next favorite book today!
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base mb-1">
            <FaPhone className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" /> 03706518163
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-sm sm:text-base">
            <FaEnvelope className="text-blue-400 w-4 h-4 sm:w-5 sm:h-5" /> farhanbashir0463@gmail.com
          </p>
        </div>

        {/* 🔹 Middle: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-400 transition">
                Book
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Right: Social Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-5 text-2xl">
            <a
              href="https://www.facebook.com/share/1CvF3Q3g8Y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/book_bazaaronline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@book_bazaaronline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-300 transition"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm sm:text-base text-gray-500">
        © {new Date().getFullYear()} BookBazar_Online. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
