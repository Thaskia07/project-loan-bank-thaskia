import React from "react";
import { Star, Clock, Home, Target } from "lucide-react";

function ProductCard({ bank }) {
  return (
    <div className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-xl shadow-sm p-4 mb-4 hover:shadow-md transition-all">
      {/* Logo */}
      <div className="flex justify-center items-center sm:w-28 w-full mb-3 sm:mb-0">
        <img
          src={bank.logo}
          alt={bank.name}
          className="w-20 h-10 object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex-1 sm:ml-4">
        <h3 className="font-semibold text-blue-700 text-sm">
          {bank.name}{" "}
          <span className="text-gray-800 font-normal">{bank.product}</span>
        </h3>

        <div className="flex items-center text-xs text-gray-400 mt-1 mb-2">
          <Star className="w-3 h-3 text-yellow-400 mr-1" /> Rating: ★★★★☆
        </div>

        <div className="flex flex-wrap text-xs text-gray-600 gap-x-5 gap-y-1">
          <div className="flex items-center">
            <Clock className="w-3.5 h-3.5 mr-1 text-gray-400" /> {bank.tenor}
          </div>
          <div className="flex items-center">
            <Home className="w-3.5 h-3.5 mr-1 text-gray-400" /> {bank.segment}
          </div>
          <div className="flex items-center">
            <Target className="w-3.5 h-3.5 mr-1 text-gray-400" /> {bank.target}
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-3 sm:mt-0 sm:ml-4 flex justify-end">
        <button className="text-xs border border-blue-600 text-blue-600 px-3 py-1 rounded-lg hover:bg-blue-600 hover:text-white transition">
          Detail
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
