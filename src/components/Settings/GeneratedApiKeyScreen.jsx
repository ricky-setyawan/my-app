import React from "react";

const GeneratedApiKeyScreen = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col justify-center items-center p-4">
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-4xl text-center">
        <h2 className="text-4xl font-semibold mb-4">Your Generated API Key</h2>
        <p className="text-gray-400 text-2xl mb-8">
          Lorem ipsum dolor sit amet consectetur. Aliquam eu praesent faucibus morbi dolor mi. Feugiat id at ornare at donec ante massa. Sit volutpat elementum et consequat amet aliquet scelerisque. Hendrerit amet mauris quis faucibus scelerisque risus.
        </p>

        <div className="flex items-center justify-center mb-8">
          <input
            type="text"
            readOnly
            value="123232242@#56%^&*())(*&54%*(8&^$EDFHFGStghjytdfcgUY&^^$%"
            className="bg-gray-700 text-3xl p-4 rounded-lg flex-1 text-center"
          />
          <button className="ml-4 bg-green-600 hover:bg-green-700 transition duration-200 text-3xl px-6 py-4 rounded-lg">
            Copy
          </button>
        </div>

        <button className="bg-green-600 hover:bg-green-700 transition duration-200 text-3xl px-6 py-4 rounded-lg">
          Close
        </button>
      </div>

      <div className="absolute bottom-4 left-4">
        <button className="bg-gray-700 hover:bg-gray-600 transition duration-200 text-3xl px-6 py-4 rounded-lg flex items-center">
          <span className="mr-2">⚙️</span> Settings
        </button>
      </div>
    </div>
  );
};

export default GeneratedApiKeyScreen;
