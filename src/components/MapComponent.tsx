"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Marker Icon Setup (Wrapped to Run on Client Only)
const getMarkerIcon = () => {
  if (typeof window !== "undefined") {
    const L = require("leaflet");
    return new L.Icon({
      iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
    });
  }
  return null;
};

const markerIcon = getMarkerIcon();

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

interface MapComponentProps {
  listings: Listing[];
  onMarkerClick: (listing: Listing) => void;
}

// Dynamically import react-leaflet components
const DynamicMapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const DynamicTileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const DynamicMarker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const DynamicTooltip = dynamic(() => import("react-leaflet").then((mod) => mod.Tooltip), { ssr: false });

const MapComponent: React.FC<MapComponentProps> = ({ listings, onMarkerClick }) => {
  const [isClient, setIsClient] = useState(false);

  // Ensure the component only renders on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevent rendering on the server

  return (
    <div className="w-full h-screen bg-gradient-to-r from-green-700 to-green-900">
      <DynamicMapContainer
        center={[18.0735, -15.9582]} // Centered on Nouakchott
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
      >
        <DynamicTileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {listings.map((listing) => (
          <DynamicMarker
            key={listing.id}
            position={listing.position}
            icon={markerIcon}
            eventHandlers={{
              click: () => onMarkerClick(listing),
            }}
          >
            <DynamicTooltip
              className="!bg-transparent !border-none !shadow-none"
              direction="top"
              offset={[0, -20]}
              permanent
            >
              <span className="bg-gradient-to-r from-green-700 to-green-900 px-2 py-1 rounded-md shadow text-white font-medium">
                MRU {listing.price}
              </span>
            </DynamicTooltip>
          </DynamicMarker>
        ))}
      </DynamicMapContainer>
    </div>
  );
};

export default MapComponent;
