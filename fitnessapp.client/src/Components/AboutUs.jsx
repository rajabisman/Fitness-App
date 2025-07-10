import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Utility/About.css";

function AboutUs() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-200 via-pink-100 to-blue-200 space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">About Us</h1>
        <div className="h-1 w-24 bg-gray-800 mx-auto rounded-full" />
      </div>

      {/* Outer container */}
      <div className="relative w-[800px] h-[300px] overflow-hidden rounded-2xl border-4 border-white shadow-lg bg-white">
        {/* Left Half */}
        <div
          data-aos="fade-right"
          className="half-card-left w-full h-full absolute top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/diet.jpg')` }} // Remove /public
        >
          <div className="flex flex-col items-center justify-center h-full bg-black/40 text-white px-4">
            <div className="mr-100">
              <h2 className="text-4xl font-bold">FITMEN’s</h2>
              <h3 className="text-4xl font-bold">JOURNEY</h3>
            </div>
          </div>
        </div>

        {/* Right Half */}
        <div
          data-aos="fade-left"
          className="half-card-right w-full h-full absolute top-0 left-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/diet.jpg')` }}
        >
          <div className="flex items-center justify-center h-full bg-black/50 px-6">
            <p className="text-white text-lg leading-relaxed text-center ml-100">
              FitMen is more than just workouts. We inspire healthier lives by
              combining personalized training, expert guidance, and a supportive
              community — because every journey begins with a single step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
