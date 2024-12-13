import React from "react";

const StarRating = ({ rating, totalStars = 5 }) => (
  <div className="flex gap-1">
    {[...Array(totalStars)].map((_, index) => (
      <span
        key={index}
        className={`text-2xl ${index < rating ? "text-[#fdcc63]" : "text-gray-400"} opacity-70`}
      >
        ★
      </span>
    ))}
  </div>
);

export default StarRating;
