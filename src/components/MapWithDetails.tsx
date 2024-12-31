"use client";
import React, { useState } from "react";
import MapComponent from "./MapComponent";
import DetailsComponent from "./DetailsComponent";

interface Listing {
  id: number;
  position: [number, number];
  price: number;
  details: {
    location: string;
    title: string;
    description: string;
    guests: number;
    rooms: number;
    baths: number;
    rating: number;
    images: string[];
  };
}

const MapWithDetails: React.FC = () => {
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);

  const listings: Listing[] = [
    {
      id: 1,
      position: [18.0863, -15.9777],
      price: 300,
      details: {
        location: "Tevragh Zeina, Nouakchott",
        title: "Cozy Apartment",
        description: "2 guests • 1 bed • 1 bath",
        guests: 2,
        rooms: 1,
        baths: 1,
        rating: 4.8,
        images: ["1.jpg", "2.jpg", "3.jpg"],
      },
    },
    {
      id: 2,
      position: [18.0985, -15.9528],
      price: 100,
      details: {
        location: "Ksar, Nouakchott",
        title: "Modern Villa",
        description: "4 guests • 2 beds • 2 baths",
        guests: 4,
        rooms: 2,
        baths: 2,
        rating: 4.9,
        images: ["4.jpg", "3.jpg", "2.jpg"],
      },
    },
  ];

  const handleCloseDetails = () => {
    setSelectedListing(null);
  };

  return (
    <div className="flex">
      {/* Map Section */}
      <div className="z-99 w-full h-screen">
        <MapComponent
          listings={listings}
          onMarkerClick={(listing) => setSelectedListing(listing)}
        />
      </div>
      {/* Details Section */}
      <DetailsComponent listing={selectedListing} onClose={handleCloseDetails} />
    </div>
  );
};

export default MapWithDetails;
