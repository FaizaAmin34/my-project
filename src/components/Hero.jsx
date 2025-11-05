import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Hero() {
  const slides = [
    {
      id: 1,
      image: "/hero1.jpg",
      title: "Discover Your Next Favorite Book",
      text: "Explore bestsellers, new arrivals, and timeless classics — all in one place.",
    },
    {
      id: 2,
      image: "/hero2.jpg",
      title: "Exclusive Deals & Discounts",
      text: "Get amazing offers on your favorite titles — limited time only!",
    },
    {
      id: 3,
      image: "/hero3.jpg",
      title: "Read. Learn. Grow.",
      text: "Thousands of books waiting to inspire your next chapter.",
    },
  ];

  return (
    <section className="relative w-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text Content */}
              <div className="relative text-center px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
                  {slide.title}
                </h1>
                <p className="max-w-xl mx-auto text-gray-200 text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                  {slide.text}
                </p>

                <Link
                  to="/products"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition shadow-md"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
