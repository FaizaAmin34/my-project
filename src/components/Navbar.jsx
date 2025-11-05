import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold text-gray-800 hover:text-blue-700 transition-colors"
        >
          Book<span className="text-blue-700">Bazar_Online</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-5 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Books</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-blue-700 transition"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner animate-slide-down">
          <div className="px-4 py-4 space-y-3">
            <nav className="flex flex-col space-y-3 text-gray-700 font-medium">
              <Link
                to="/"
                className="hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Books
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
