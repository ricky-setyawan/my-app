import React from "react";

const NeonSearchSections = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center space-y-6 px-4">
      {/* First Section */}
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-full p-2 shadow-lg max-w-xs sm:max-w-lg w-full relative border-2 border-purple-500">
        <div className="flex items-center px-4 py-2 bg-gray-700 rounded-full mb-2 sm:mb-0">
          <span className="text-white">^P</span>
        </div>
        <div className="flex-1 px-4 text-white text-center sm:text-left">
          Press / Input
        </div>
        <button className="text-white px-4 py-2 bg-gray-700 rounded-full mt-2 sm:mt-0 sm:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute inset-0 rounded-full border border-purple-500 opacity-20 pointer-events-none"></div>
      </div>

      {/* Second Section */}
      <div className="flex flex-col sm:flex-row items-center bg-gray-800 rounded-full p-2 shadow-lg max-w-xs sm:max-w-lg w-full relative border-2 border-blue-500">
        <div className="flex items-center px-4 py-2 bg-gray-700 rounded-full mb-2 sm:mb-0">
          <span className="text-white">^P</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="flex-1 px-4 bg-transparent text-white outline-none text-center sm:text-left"
        />
        <button className="text-white px-4 py-2 bg-gray-700 rounded-full mt-2 sm:mt-0 sm:ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div className="absolute inset-0 rounded-full border border-blue-500 opacity-20 pointer-events-none"></div>
      </div>
    </div>
  );
};

export default NeonSearchSections;
