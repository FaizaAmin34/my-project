import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 py-12 px-4 sm:px-6 md:px-16 lg:px-24 font-sans">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 tracking-tight">
          Welcome to <span className="text-blue-700">BookBazar_Online</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          At <strong>BookBazar-Online</strong>, we believe that{" "}
          <span className="text-blue-700 font-semibold">seeking knowledge is a form of worship</span>. 
          Inspired by the words of the Prophet Muhammad ﷺ: 
          <em className="block mt-2 text-gray-600 italic text-sm sm:text-base">“Seeking knowledge is obligatory upon every Muslim.” (Ibn Majah)</em>
        </p>
      </div>

      {/* Sections Container */}
      <div className="space-y-8 sm:space-y-10">
        {/* Our Story */}
        <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            We noticed that students, professionals, and book lovers often struggled to find the right books locally—especially religious, educational, and rare titles. 
            This inspired us to create a <strong>platform where knowledge, both worldly and spiritual, is easily available</strong> for everyone.
          </p>
        </section>

        {/* Our Mission */}
        <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            To empower individuals with knowledge, promote learning, and provide access to both academic and Islamic literature that benefits the mind and soul.
          </p>
        </section>

        {/* Our Vision */}
        <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
            To be Pakistan’s most trusted online bookstore, spreading knowledge and wisdom in a way that aligns with Islamic values of service, honesty, and community support.
          </p>
        </section>

        {/* What Makes Us Unique */}
        <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">What Makes Us Unique?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg">
            <li><strong>Wide Selection of Books:</strong> Including Islamic, educational, academic, and general knowledge.</li>
            <li><strong>Rare & Hard-to-Find Titles:</strong> Books that are often unavailable elsewhere.</li>
            <li><strong>User-Friendly Platform:</strong> Simple navigation, smart search, and recommendations.</li>
            <li><strong>Fast & Reliable Delivery:</strong> Across Pakistan with care and precision.</li>
            <li><strong>Flexible Payment Options:</strong> Including online gateways and Cash on Delivery.</li>
            <li><strong>Dedicated Customer Support:</strong> Helping you find books that benefit both your knowledge and spiritual growth.</li>
            <li><strong>Community Focused:</strong> Encouraging reading, learning, and sharing knowledge as a means of collective benefit.</li>
          </ul>
        </section>

        {/* Our Values */}
        <section className="bg-white shadow-lg rounded-2xl p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-lg">
            <li><strong>Knowledge is Sacred:</strong> Every book and lesson is a step toward enlightenment.</li>
            <li><strong>Integrity & Trust:</strong> Honesty in every transaction, reflecting Islamic principles.</li>
            <li><strong>Service to Others:</strong> Promoting learning as a way to benefit society.</li>
          </ul>
        </section>
      </div>

      {/* Closing Statement */}
      <div className="text-center max-w-3xl mx-auto mt-10 sm:mt-16">
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          At <span className="text-blue-700 font-semibold">BookBazar-Online</span>, reading is a journey of the mind and soul. 
          Join us in spreading knowledge, enriching lives, and honoring the timeless Islamic tradition of learning.
        </p>
      </div>
    </div>
  );
};

export default About;
