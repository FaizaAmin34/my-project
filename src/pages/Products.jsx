import React from "react";  
import { Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Aasan Tarjuma Quran",
    author: "Dr. Israr Ahmed",
    price: "₨3,500.00",
    image: "https://bookfair.pk/wp-content/uploads/2022/03/Asaan-Quran-scaled.jpg",
    description:
      "آسان ترجمہ قرآن مختصر تفسیر کے ساتھ۔ از ڈاکٹر اسرار احمد رحمۃ اللہ۔",
  },
  {
    id: 2,
    title: "Seerat Un Nabi (SAW)",
    author: "Dr. Israr Ahmed",
    price: "₨999.00",
    image: "https://bookfair.pk/wp-content/uploads/2022/02/22-4.jpg",
    description:
      "رسول ﷺ کی حیاتِ مبارکہ پر جامع کتاب — دلوں کو جھنجھوڑ دینے والی ایمان افروز تحریر۔",
  },
  {
    id: 3,
    title: "Khutbat-e-Seerat un Nabi (SAW)",
    author: "Allama Peer Muhammad Saqib Mustafai",
    price: "₨1,295.00",
    image: "https://bookfair.pk/wp-content/uploads/2025/05/65.jpg",
    description:
      "خطباتِ سیرت النبی ﷺ — آقائے نامدار حضرت محمد ﷺ کی سیرت کا عاشقانہ بیان۔",
  },
];

const Products = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 font-sans">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3 tracking-tight">
          Our <span className="text-blue-700">Book Collection</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Explore a curated selection of Islamic books — deeply inspiring and beautifully written.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Book Image */}
            <div className="overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Book Details */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1 italic">By {book.author}</p>
              <p className="text-blue-700 font-bold text-lg mb-3">{book.price}</p>
              <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-1">
                {book.description}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-3">
                <Link
                  to={`/book/${book.id}`}
                  className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition shadow-sm text-center"
                >
                  View Details
                </Link>

                <a
                  href={`https://wa.me/923706518163?text=Hi!%20I%20would%20like%20to%20order%20the%20book:%20${encodeURIComponent(
                    book.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-semibold text-center transition shadow-sm"
                >
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
