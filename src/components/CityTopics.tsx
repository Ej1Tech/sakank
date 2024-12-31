import React from "react";

interface CityTopicsProps {
  cities: string[];
  onSelectCity: (city: string) => void;
}

const CityTopics: React.FC<CityTopicsProps> = ({ cities, onSelectCity }) => {
  return (
    <div className="flex gap-4 bg-gradient-to-r from-green-600 to-green-900 overflow-x-auto p-4 scrollbar-hide">
      {cities.map((city, index) => (
        <button
          key={index}
          onClick={() => onSelectCity(city)}
          className="px-4 py-2 text-sm font-medium text-gray-900 bg-green-300 rounded-full hover:bg-gradient-to-r from-green-700 to-green-900 hover:text-white transition-colors whitespace-nowrap"
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default CityTopics;
