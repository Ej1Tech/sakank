"use client";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [destination, setDestination] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for ${destination}`);
    // Add your search logic here
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-gradient-to-r from-green-700 to-green-900 p-1 rounded-lg shadow-md w-full flex items-center justify-between"
    >
      <input
        type="text"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        placeholder="Enter a city or region"
        className="mr-1 block w-full border border-green-500 rounded-md p-2 text-gray-700"
        required
      />
      <button
        type="submit"
        className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
