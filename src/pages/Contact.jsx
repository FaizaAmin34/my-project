import React, { useState } from "react";
import { FaInstagram, FaTiktok, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mpwowpyl", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus("Oops! There was a problem.");
      }
    } catch (error) {
      setStatus("Oops! There was a problem.");
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Contact <span className="text-blue-700">BookBazar_Online</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Got a question, feedback, or collaboration idea? We’d love to hear from you! Reach out and we’ll get back to you promptly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Side - Contact Info */}
        <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl sm:text-3xl font-semibold text-blue-600 mb-6">Get in Touch</h3>
          <p className="flex items-center gap-3 text-gray-700 mb-4 text-sm sm:text-base">
            <FaPhone className="text-blue-500 w-5 h-5" /> 03706518163
          </p>
          <p className="flex items-center gap-3 text-gray-700 mb-6 text-sm sm:text-base">
            <FaEnvelope className="text-blue-500 w-5 h-5" /> farhanbashir0463@gmail.com
          </p>

          <div className="flex gap-6 text-2xl mt-6 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/book_bazaaronline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@book_bazaaronline"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-gray-700 transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://www.facebook.com/share/1CvF3Q3g8Y/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition flex flex-col"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition text-sm sm:text-base"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition text-sm sm:text-base"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            className="w-full mb-4 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none transition text-sm sm:text-base"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition text-sm sm:text-base"
          >
            Send Message
          </button>

          {status && (
            <p className="mt-4 text-green-600 font-semibold text-sm sm:text-base">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
