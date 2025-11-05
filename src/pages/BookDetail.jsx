import React from "react";
import { useParams, Link } from "react-router-dom";

const books = [
  {
    id: 1,
    title: "Aasan Tarjuma Quran",
    author: "Dr. Israr Ahmed",
    price: "₨3,500.00",
    image: "https://bookfair.pk/wp-content/uploads/2022/03/Asaan-Quran-scaled.jpg",
    description:
      "آسان ترجمہ قرآن، مختصر تفسیر کے ساتھ۔ یہ کتاب ڈاکٹر اسرار احمد رحمۃ اللہ علیہ کی علمی خدمات کا نچوڑ ہے۔ قرآن فہمی کے لیے ایک لازمی رہنما۔",
  },
  {
    id: 2,
    title: "Seerat Un Nabi (SAW)",
    author: "Dr. Israr Ahmed",
    price: "₨999.00",
    image: "https://bookfair.pk/wp-content/uploads/2022/02/22-4.jpg",
    description:
      "یہ کتاب رسول ﷺ کی حیاتِ مبارکہ پر جامع تحقیق ہے۔ ایمان کو تازگی بخشنے والی، دل کو جھنجھوڑ دینے والی تحریر جو سیرتِ نبوی ﷺ کے روشن پہلوؤں کو اجاگر کرتی ہے۔",
  },
  {
    id: 3,
    title: "Khutbat-e-Seerat un Nabi (SAW)",
    author: "Allama Peer Muhammad Saqib Mustafai",
    price: "₨1,295.00",
    image: "https://bookfair.pk/wp-content/uploads/2025/05/65.jpg",
    description:
      "آقائے نامدار حضرت محمد ﷺ کی سیرت طیبہ پر خطبات کا مجموعہ۔ اس کتاب میں عشقِ رسول ﷺ کی جھلک نمایاں ہے۔",
  },
];

const BookDetail = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book)
    return (
      <div className="text-center text-red-600 py-16 text-lg font-semibold">
        Book not found!
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex gap-10 p-8 md:p-10 items-center">
        {/* Book Image */}
        <div className="w-full md:w-1/2">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-auto rounded-xl object-contain hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1 mt-8 md:mt-0">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            {book.title}
          </h1>
          <p className="text-gray-600 text-lg mb-2 italic">
            Author: {book.author}
          </p>
          <p className="text-blue-700 text-2xl font-semibold mb-5">
            {book.price}
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            {book.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/923264439348?text=Hello!%20I%20want%20to%20order%20${encodeURIComponent(
                book.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Order via WhatsApp
            </a>
            <Link
              to="/products"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
            >
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetail;
