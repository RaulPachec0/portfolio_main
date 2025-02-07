//Military.jsx
import React from "react";


const Military = () => {
  return (
    <div className="flex flex-col bg-[#0a192f] items-center w-full min-h-screen p-4">
    {/* Title */}
    <h1 className="text-3xl text-gray-300 md:text-4xl font-bold text-center mb-6">
      Military Experience
    </h1>

    {/* Responsive Red Square */}
    <div className="w-full max-w-4xl h-[50vh] bg-red-600 flex flex-col md:flex-row text-white p-6 rounded-lg shadow-lg">
      {/* Left Side - Text */}
      <div className="flex-1 flex items-center justify-center p-4">
        <p className="text-lg md:text-xl font-medium text-center md:text-left">
          Dedicated veteran with hands-on experience in technical operations,
          leadership, and problem-solving in dynamic environments.
        </p>
      </div>

      {/* Right Side - Space for Images */}
      <div className="flex-1 flex items-center justify-center p-4">
        {/* Placeholder for Images */}
        <div className="w-32 h-32 md:w-48 md:h-48 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  </div>
  );
};


export default Military;