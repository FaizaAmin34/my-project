import React from "react";
import Hero from "../components/Hero"; // Slider component import
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="bg-gray-50 font-sans">

      {/* Hero Section */}
      <Hero />

      {/* Featured Section */}
      <section className="py-16 px-6 text-center bg-white text-black">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Welcome to <span className="text-blue-600">BookBazar_Online</span>
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Discover a wide range of books — from timeless Islamic knowledge to modern learning guides.
          Each book is carefully selected to enlighten, inspire, and help you grow.
        </p>

        <div className="mt-10">
          <Link
            to="/products" // Make sure this route exists in App.jsx
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition shadow-md"
          >
            Explore Books
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-blue-50 text-center text-black">
        <h3 className="text-2xl md:text-3xl font-bold mb-8">
          What Our Readers Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="italic">
              "BookBazar_Online is my go-to place for authentic Islamic literature. The quality and service are excellent!"
            </p>
            <h4 className="mt-4 font-semibold text-blue-600">— Ahmad Raza</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="italic">
              "I love the quick WhatsApp ordering! Super easy and convenient. Highly recommended."
            </p>
            <h4 className="mt-4 font-semibold text-blue-600">— Fatima Noor</h4>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
            <p className="italic">
              "Great collection and affordable prices. Will definitely order again!"
            </p>
            <h4 className="mt-4 font-semibold text-blue-600">— Usman Ali</h4>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-center text-black">
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Start Your Reading Journey Today 📚
        </h3>
        <p className="text-black text-lg mb-8">
          Order your favorite books directly via WhatsApp — simple, fast, and secure!
        </p>
        <a
          href="https://wa.me/923264439348?text=Hello%20BookBazar_Online!%20I%20would%20like%20to%20order%20a%20book."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-700 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition shadow-md"
        >
          Order on WhatsApp
        </a>
      </section>

    </main>
  );
}

export default Home;
