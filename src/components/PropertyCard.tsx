// components/PropertyCard.tsx
import React from "react";
import { Property } from "@/types/Property";
import { FaWifi, FaSwimmingPool, FaUtensils, FaHome } from "react-icons/fa";
import { FaKitchenSet,FaBottleWater } from "react-icons/fa6";
import { MdAir ,MdElectricBolt } from "react-icons/md";
interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-md overflow-hidden text-gray-600">
      <img
        src={property.images[0]}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <p className="text-gray-500">{property.location}</p>
        <div className="flex items-center gap-2 mt-2">
          {property.features.pool && <span className="bg-blue-600 text-white rounded-xl p-1"><FaSwimmingPool /></span>}
          {property.features.water && <span className="bg-blue-600 text-white rounded-xl p-1"><FaBottleWater /></span>}
          {property.features.electricity && <span className="bg-blue-600 text-white rounded-xl p-1"><MdElectricBolt/></span>}
          {property.features.balcony  && <span className="bg-blue-600 text-white rounded-xl p-1"><MdAir /></span>}
          {property.features.kitchen && <span className="bg-blue-600 text-white rounded-xl p-1"><FaKitchenSet /></span>}
          {property.features.wifi && <span className="bg-blue-600 text-white rounded-xl p-1"><FaWifi /></span>}
          {property.features.restaurant && <span className="bg-blue-600 text-white rounded-xl p-1"><FaUtensils /></span>}
          {property.features.kitchen && <span className="bg-blue-600 text-white rounded-xl p-1"><FaHome /></span>}
        </div>
        <p className="mt-4 text-lg font-bold">${property.price} / night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
