import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-full sm:w-48 md:w-56 lg:w-64 h-60 bg-gray-200 rounded-lg overflow-hidden animate-pulse">
      {/* Image placeholder */}
      <div className="h-36 bg-gray-300"></div>

      {/* Text placeholders */}
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default ShimmerCard;
