import React, { useState } from "react";
import HeaderComponent from '../Header';
// import SidebarContent from '../SidebarContent';

const ClinicalNotesPage = ({ next }) => {
  const showProfileImage = false;
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d] text-white relative">
      {/* <button className="absolute top-4 right-4 text-white">✕</button> */}
      {/* HEADER  */}
      <HeaderComponent toggleSidebar={toggleSidebar} toggleProfileImage={showProfileImage}/>

      <div className="text-center mt-8 px-4">
        <h1 className="text-3xl font-bold">AI Clinical Notes</h1>
        <h2 className="text-xl mt-2">Enter Patient</h2>
        <input
          type="text"
          placeholder="Type here"
          className="mt-8 p-4 w-full max-w-md text-black rounded"
        />
        <p className="mt-4">Click on the Microphones icon showing “Create Visit”.</p>
        <div className="flex flex-col items-center">
          <button className="mt-4">
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
          <button
            className="mt-4 bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-400 transition-all duration-200 ease-in-out transform hover:scale-105"
            onClick={next}
          >
            Next
          </button>
        </div>
        <p className="mt-8 text-sm text-gray-400">
          By starting the symptom checker, you agree to the 
          <a href="#" className="underline">Privacy Policy</a> and 
          <a href="#" className="underline">Terms of Use</a>.
        </p>
      </div>
    </div>
  );
};

export default ClinicalNotesPage;
