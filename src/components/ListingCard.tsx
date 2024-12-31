"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ListingCardProps {
  images: string[]; // Array of image URLs
  location: string;
  hostName: string;
  rating: number;
  pricePerNight: number;
  dates: string;
}

const ListingCard: React.FC<ListingCardProps> = ({
  images,
  location,
  hostName,
  rating,
  pricePerNight,
  dates,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-60 rounded-lg border bg-gradient-to-r from-green-700 to-green-900 shadow-sm overflow-hidden">
      {/* Image Slider */}
      <div className="relative">
        <img
          src={images[currentImageIndex]}
          alt={location}
          className="h-40 w-full object-cover"
        />
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          <FaChevronLeft />
        </button>
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{location}</h3>
        <p className="text-sm text-gray-500">{hostName}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-yellow-500 font-medium">⭐ {rating.toFixed(2)}</span>
          <span className="text-gray-500 text-xs">{dates}</span>
        </div>
        <p className="mt-2 font-semibold text-sm">{pricePerNight} MRU / night</p>

        {/* Book Now Button */}
        <button className="w-full mt-4 py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-500">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
