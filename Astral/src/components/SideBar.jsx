import React, { useState } from "react";

const SideBar = ({ title, explanation }) => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleDescription = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 sm:p-6 lg:p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold">{title}</h1>
        <button
          onClick={toggleDescription}
          className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 transition-all"
          aria-label="Toggle Description"
        >
          <i
            className={`ri-arrow-${isHidden ? "left" : "right"}-line text-xl sm:text-2xl`}
          ></i>
        </button>
      </div>

      {/* Animated Scrolling Explanation Section */}
      <div
        className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
          isHidden
            ? "max-h-0 opacity-0 transform scale-y-0"
            : "max-h-48 opacity-100 transform scale-y-100"
        }`}
      >
        <div className="relative h-48">
          <div
            className="absolute inset-0 animate-scroll text-sm sm:text-base p-4 bg-gray-800 bg-opacity-25 rounded-md shadow-md overflow-auto"
            style={{ whiteSpace: "pre-wrap" }}
          >
            {explanation}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
