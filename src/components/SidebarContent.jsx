import React, { useState } from "react";
import settinglogo from '../../src/images/setting.png'
import chatlogo from '../../src/images/chat.png'
import settings from '../../src/images/settings.png'
import neww from '../images/new.png' 
const SidebarContent = ({
  toggleAuthForm,
  onShowDoctorLandingPage,
  toggleUpgradePlan,
  onShowLawyerLandingPage,
  onShowStockPredictor,
  onShowClinicalNotesPage,
}) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleMore = () => setIsMoreOpen(!isMoreOpen);

  return (
    // <div className={
    //   `${isServicesOpen  ? "fixed inset-0 z-50 md:relative md:w-auto" : "md:relative"}
    //    ${isServicesOpen ? "w-full" : "md:w-64"}
    //    ${isServicesOpen ? "" : "w-auto"}`}>
    <div className="flex flex-col h-full bg-[#2d2d2d] p-4 space-y-4">
      {/* Services Button */}
      <button
        className="flex items-center justify-center w-full bg-[#494949] text-white font-bold p-2 rounded-md"
        onClick={toggleServices}
      >
        <img
          src={settinglogo} // Replace with your image path
          alt="Services"
          className="h-5 w-5 mr-2"  // Adjust the height and width as needed
        />
        Services
      </button>

      {/* Dropdown Menu */}
      {isServicesOpen && (
        <div className="flex flex-col w-full bg-[#2d2d2d] mt-2 rounded-md shadow-lg space-y-2 p-4">
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md"
            onClick={onShowStockPredictor}
          >
            <img
              src="/path/to/stock-predictor-icon.png"  // Replace with your image path
              alt="AI Stock Predictor"
              className="h-5 w-5 mr-2"
            />
            <span className="text-white font-bold">AI Stock Predictor</span>
          </div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md"
            onClick={onShowDoctorLandingPage}
          >
            <img
              src="/path/to/doctor-icon.png"  // Replace with your image path
              alt="AI Doctor"
              className="h-5 w-5 mr-2"
            />
            <span className="text-white font-bold">AI Doctor</span>
          </div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md"
            onClick={onShowLawyerLandingPage}
          >
            <img
              src="/path/to/lawyer-icon.png"  // Replace with your image path
              alt="AI Lawyer"
              className="h-5 w-5 mr-2"
            />
            <span className="text-white font-bold">AI Lawyer</span>
          </div>
          <div
            className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md"
            onClick={onShowClinicalNotesPage}
          >
            <img
              src="/path/to/clinical-notes-icon.png"  // Replace with your image path
              alt="AI Clinical Notes"
              className="h-5 w-5 mr-2"
            />
            <span className="text-white font-bold">AI Clinical Notes</span>
          </div>
          <div
            className="text-center text-white font-bold mt-2 cursor-pointer hover:bg-[#494949] rounded-md p-2"
            onClick={toggleMore}
          >
            {isMoreOpen ? "Less" : "More..."}
          </div>
          {isMoreOpen && (
            <>
              <div className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md">
                <img
                  src="/path/to/prompt-optimizer-icon.png"  // Replace with your image path
                  alt="AI Prompt Optimizer"
                  className="h-5 w-5 mr-2"
                />
                <span className="text-white font-bold">AI Prompt Optimizer</span>
              </div>
              <div className="flex items-center p-2 cursor-pointer hover:bg-[#494949] rounded-md">
                {/* <img
                  src="/path/to/add-icon.png"  // Replace with your image path
                  alt="Add Your Own"
                  className="h-5 w-5 mr-2"
                /> */}
                {/* <span className="text-white font-bold">Add Your Own</span> */}
              </div>
            </>
          )}
        </div>
      )}

      {/* Other Sidebar Buttons */}
      <button className="flex items-center justify-center w-full bg-[#494949] text-white font-bold p-2 rounded-md">
        <img
          src={chatlogo}  // Replace with your image path
          alt="New Chat"
          className="h-5 w-5 mr-2"
        />
        New Chat
      </button>

      <div className="flex items-center bg-[#494949] p-2 rounded-md">
        <input
          type="text"
          placeholder="Search Chats.."
          className="bg-transparent text-white flex-grow focus:outline-none font-bold"
        />
        {/* <img
          // src={settinglogo}  // Replace with your image path
          // alt="Search"
          className="h-5 w-5 ml-2 text-gray-400"
        /> */}
      </div>

      <div className="flex justify-between items-center text-white font-bold p-2 rounded-md bg-[#494949]">
        <span>Teach me English</span>
        <img
          src={neww} // Replace with your image path
          alt="Close"
          className="h-5 w-5 text-white"
        />
      </div>

      <div className="flex-grow"></div>

      <div className="mt-auto flex flex-col items-center">
        <div className="w-full bg-gray-600 rounded-full h-2 mb-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: '80%' }}></div>
        </div>
        <span className="text-gray-400 text-sm mb-2">4/5 Free Generations</span>
        <button
          className="w-full bg-[#0fa37f] text-white p-2 rounded-md mb-2 font-bold"
          onClick={toggleAuthForm}
        >
          Login/Sign Up
        </button>
        <button
          className="w-full bg-[#0fa37f] text-white p-2 rounded-md mb-2 font-bold"
          onClick={toggleUpgradePlan}
        >
          Upgrade Plan
        </button>
        <button className="flex items-center justify-center w-full bg-[#494949] text-white font-bold p-2 rounded-md">
          <img
            src={settings} // Replace with your image path
            alt="Settings"
            className="h-5 w-5 mr-2"
          />
          Settings
        </button>
      </div>
    </div>
  );
};

export default SidebarContent;
