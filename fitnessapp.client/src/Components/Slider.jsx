// src/components/Slider.jsx
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  const slides = [
    {
      image: "/hero.jpg",
      heading: "Build Strength with Us",
      subheading: "Unleash your potential today!",
    },
    {
      image: "/banner.jpg",
      heading: "Train Like a Pro",
      subheading: "Custom workouts that fit your goals.",
    },
    {
      image: "/diet.jpg",
      heading: "Join the FitMen Family",
      subheading: "Where fitness meets lifestyle.",
    },
  ];

  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="h-screen w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-screen overflow-hidden">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Overlay content */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                {slide.heading}
              </h2>
              <p className="mt-4 text-lg md:text-xl">{slide.subheading}</p>
              <Link
                to="/register"
                className="mt-6 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
