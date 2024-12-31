"use client"
import React, { useState } from "react"; 
import ListingCard from "@/components/ListingCard";
import MapWithDetails from "@/components/MapWithDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import CityTopics from "@/components/CityTopics";

const Home: React.FC = () => {
  const allListings = [
    {
      images: ["1.jpg", "2.jpg", "3.jpg"],
      location: "Nouakchott",
      hostName: "Ksar, Nouakchott",
      rating: 5.0,
      pricePerNight: 100,
      dates: "Feb 16–21",
    },
    {
      images: ["3.jpg", "2.jpg", "1.jpg"],
      location: "Nouakchott",
      hostName: "Tevragh Zeina, Nouakchott",
      rating: 4.99,
      pricePerNight: 100,
      dates: "Jan 7–12",
    },
    {
      images: ["2.jpg", "4.jpg", "3.jpg"],
      location: "Nouadhibou",
      hostName: "Downtown, Nouadhibou",
      rating: 4.93,
      pricePerNight: 200,
      dates: "Feb 16–21",
    },
    {
      images: ["4.jpg", "2.jpg", "1.jpg"],
      location: "Nouadhibou",
      hostName: "Harbor View, Nouadhibou",
      rating: 4.95,
      pricePerNight: 150,
      dates: "Jan 6–11",
    },
    {
      images: ["2.jpg", "4.jpg", "3.jpg"],
      location: "Chinguetti",
      hostName: "Desert Oasis, Chinguetti",
      rating: 4.9,
      pricePerNight: 300,
      dates: "Mar 10–15",
    },
  ];

  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const filteredListings = selectedCity
    ? allListings.filter((listing) => listing.location === selectedCity)
    : allListings;

  return (
    <div className="flex flex-col">
      {/* Header */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* City Filter */}
      <div className="">
        <CityTopics
          cities={["Nouakchott", "Nouadhibou", "Chinguetti"]}
          onSelectCity={(city) => setSelectedCity(city)}
        />
      </div>
      {/* Listings Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 p-4">
          {filteredListings.map((listing, index) => (
            <ListingCard key={index} {...listing} />
          ))}
      </div>
      {/* Map Section */}
      <div className="bg-gradient-to-r from-green-700 to-green-900 overflow-y-hidden p-4 mb-3 relative">
        <MapWithDetails />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
