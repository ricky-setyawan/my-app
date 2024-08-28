import React from 'react';
import HeaderComponent from '../Header';


const ClinicalNotesPromptPage = ({ next, prev }) => {
    const showProfileImage = false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d] text-white relative px-4">
      {/* HEADER  */}
      <HeaderComponent toggleProfileImage={showProfileImage}/>
      
      
      <button className="absolute top-4 left-4 text-white" onClick={prev}>&lt; Back</button>
      {/* <button className="absolute top-4 right-4 text-white">✕</button> */}
      <div className="text-center mt-8">
        <img src="logo.png" alt="AI Clinical Notes Logo" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Ai Clinical Notes</h1>
        <p className="mt-4">Click on the Microphones icon showing “Create Visit”.</p>
        <div className="flex flex-col items-center mt-6">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder=" "
            className="mt-6 p-4 w-full max-w-md text-black rounded-full border border-gray-300"
          />
          <button
            className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition-all duration-200 ease-in-out"
            onClick={next}
          >
            Next
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          By starting the symptom checker, you agree to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.
        </p>
      </div>
    </div>
  );
};

export default ClinicalNotesPromptPage;
