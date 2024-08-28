import React, { useState } from "react";
import LawyerLogo from "../../images/AI Lawyer.png";

const AiLawyerPage = ({ next, prev, close }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-[#2d2d2d] min-h-screen flex flex-col justify-center items-center text-white relative">
      {/* Top Section with Back and Cancel Buttons */}
      <div className="flex justify-between items-center w-full px-6 py-4 absolute top-0 left-0">
        <button
          className="text-white flex items-center space-x-2"
          onClick={prev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          <span>Back</span>
        </button>
        <button className="text-white" onClick={close}>
          <span className="material-icons-outlined">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            close
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-[#2d2d2d] p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-xs sm:max-w-md w-full mt-16 sm:mt-24">
        {/* Image */}
        <img src={LawyerLogo} alt="AI Lawyer" className="mx-auto mb-5" />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl mb-4">AI Lawyer</h1>

        {/* Description Text */}
        <p className="text-gray-400 text-xs sm:text-sm mb-8">
          AI Lawyer GPT by StartupTechLaw.com Does not constitute lawyer-client
          privilege and is NOT legal advice. For information and entertainment
          purposes only.
        </p>

        {/* Button Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <button
            className={`py-2 px-4 sm:py-3 sm:px-4 rounded-md ${
              selectedOption === "reviewDocument"
                ? "bg-yellow-500 text-black"
                : "bg-transparent border border-gray-500 text-white"
            }`}
            onClick={() => handleOptionClick("reviewDocument")}
          >
            Review my document
          </button>
          <button
            className={`py-2 px-4 sm:py-3 sm:px-4 rounded-md ${
              selectedOption === "fileDivorce"
                ? "bg-yellow-500 text-black"
                : "bg-transparent border border-gray-500 text-white"
            }`}
            onClick={() => handleOptionClick("fileDivorce")}
          >
            How can I file for divorce?
          </button>
          <button
            className={`py-2 px-4 sm:py-3 sm:px-4 rounded-md ${
              selectedOption === "setupLLC"
                ? "bg-yellow-500 text-black"
                : "bg-transparent border border-gray-500 text-white"
            }`}
            onClick={() => handleOptionClick("setupLLC")}
          >
            Should I setup an LLC or Corporate?
          </button>
          <button
            className={`py-2 px-4 sm:py-3 sm:px-4 rounded-md ${
              selectedOption === "needNDA"
                ? "bg-yellow-500 text-black"
                : "bg-transparent border border-gray-500 text-white"
            }`}
            onClick={() => handleOptionClick("needNDA")}
          >
            I need an NDA
          </button>
        </div>

        {/* Choose and Continue Button */}
        <button
          className="bg-yellow-600 text-black py-2 px-6 sm:py-3 sm:px-6 rounded-full mb-8 hover:bg-yellow-500"
          onClick={next}
        >
          Choose and continue
        </button>

        {/* Footer Text */}
        <p className="text-gray-400 text-xs">
          By starting the symptom checker, you agree to the
          <a href="#" className="text-blue-500 underline">
            {" "}
            Privacy Policy{" "}
          </a>
          and
          <a href="#" className="text-blue-500 underline">
            {" "}
            Terms of Use
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default AiLawyerPage;
