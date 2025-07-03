import React from "react";

function HeroSection() {
  return (
    <div className="relative w-full h-screen pt-16">
      <img src="/hero.jpg" alt="Hero" />

      <div className="absolute inset-0 flex items-center justify-center flex-col text-white z-20">
        <h1 className="text-[80px] font-semibold text-gray-800 hover:text-transparent hover:[-webkit-text-stroke:2px_white] transition duration-500">
          Your Dullness Can Be Cured Here!
        </h1>
        <button className="mt-4 text-white text-2xl font-medium border-2 border-gray-800 rounded-lg py-3.5 px-[70px] hover:bg-gray-800 hover:border-gray-800 transition duration-300">
          JOIN NOW
        </button>
      </div>
    </div>
  );
}

export default HeroSection;
