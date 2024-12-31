// Hero.tsx
import React, { JSX } from "react";
import SearchBar from "./SearchBar"; // Import the SearchBar component

const Hero: React.FC = (): JSX.Element => {
  return (
    <div
      className="relative h-auto min-h-[50vh] bg-cover bg-center py-10"
      style={{ backgroundImage: "url('/1.jpg')" }} // Replace '/1.jpg' with the correct path to your image
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-900 opacity-80"></div>
      <div className="relative container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-semibold text-gray-100">
            Find your next stay
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            From cozy country homes to funky city apartments
          </p>
        </div>

        {/* Right Content (SearchBar) */}
        <div className="w-full lg:w-1/3">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
