import React, { useState } from 'react';
import LawyerLogo from '../../images/AI Lawyer.png';

const AiLawyerAskQuestion = ({ next, prev, close }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-[#2d2d2d] min-h-screen flex flex-col justify-center items-center text-white relative">
      {/* Top Section with Back and Cancel Buttons */}
      <div className="flex justify-between items-center w-full px-6 py-4 absolute top-0 left-0">
        <button className="text-white flex items-center space-x-2" onClick={prev}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
          </svg>
          <span>Back</span>
        </button>
        <button className="text-white" onClick={close}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span className="material-icons-outlined">close</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-[#2d2d2d] p-6 sm:p-10 rounded-lg shadow-lg text-center max-w-xs sm:max-w-md w-full mt-16 sm:mt-24">
        {/* Image */}
        <img src={LawyerLogo} alt="AI Lawyer" className="mx-auto mb-5" />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl mb-4">AI Lawyer</h1>

        {/* Subheading */}
        <h2 className="text-lg sm:text-xl mb-6 sm:mb-8">Ask Question?</h2>

        {/* Button Options */}
        <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
          {['Provide examples of [legal case / issue]', 'What is the history of [legal case / issue]', 'Draft a demand letter for a slip and fall case', 'Provide a template for a Promissory Note'].map((option, index) => (
            <button
              key={index}
              className={`bg-transparent border border-gray-500 text-white py-2 sm:py-3 px-4 rounded-md w-full ${selectedOption === option ? 'bg-yellow-600 text-black' : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* Select and Next Button */}
        <button
          className="bg-yellow-600 text-black py-2 sm:py-3 px-6 rounded-full mb-6 sm:mb-8 hover:bg-yellow-500"
          onClick={next}
          disabled={!selectedOption} // Disable if no option selected
        >
          Select and Next
        </button>

        {/* Footer Text */}
        <p className="text-gray-400 text-xs">
          By starting the symptom checker, you agree to the 
          <a href="#" className="text-blue-500 underline"> Privacy Policy </a> 
          and 
          <a href="#" className="text-blue-500 underline"> Terms of Use</a>.
        </p>
      </div>
    </div>
  );
};

export default AiLawyerAskQuestion;
