"use client"; 
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ListingDetails {
  location: string;
  title: string;
  description: string;
  guests: number;
  rooms: number;
  baths: number;
  rating: number;
  images: string[];
}

interface DetailsComponentProps {
  listing: {
    price: number;
    details: ListingDetails;
  } | null;
  onClose: () => void; // Close handler passed from the parent component
}

const DetailsComponent: React.FC<DetailsComponentProps> = ({ listing, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!listing) {
    return (
      <></>
    );
  }

  const { details, price } = listing;

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === details.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? details.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="absolute top-10 right-10 z-0 w-auto md:w-1/3 rounded-lg bg-gradient-to-r from-green-700 to-green-900 text-white shadow-lg p-2 overflow-y-auto">
      
      {/* Image Slider */}
      <div className="relative">
        <img
          src={details.images[currentImageIndex]} // Display the current image
          alt={details.title}
          className="w-full h-56 object-cover rounded-md z-0"
        />
        {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute w-10 h-10 top-1 z-99 right-1 bg-gradient-to-r from-green-700 to-green-900 text-white p-2 rounded-full shadow-lg hover:bg-red-700"
      >
        ×
      </button>
        {/* Left Button */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={handlePreviousImage}
        >
          <FaChevronLeft />
        </button>
        {/* Right Button */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
          onClick={handleNextImage}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Listing Details */}
      <div className="flex items-center justify-between mt-4">
      <h2 className="text-2xl font-bold flex justify-between items-center">{details.title} </h2>

        <span className="font-medium text-yellow-300">
          ⭐ {details.rating}
        </span>
      </div>
      <div className="flex items-center justify-between">
      <p className="text-gray-300">{details.location}</p>
      <p className="font-semibold">MRU {price} / night</p> 
      </div>
      <p className="text-sm text-gray-200 mt-2">{details.description}</p>
      <div className="flex items-center justify-between mb-2">
        
                    <span>Guests:{details.guests}</span>
                    <span>Rooms:{details.rooms}</span>
                    <span>Baths:{details.baths}</span>
       
      </div>
    </div>
  );
};

export default DetailsComponent;
