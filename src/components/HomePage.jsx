import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import logo from "../images/tecosys.png";
import SidebarContent from "./SidebarContent";
import AuthForm from "./AuthForm";

import HeaderComponent from "./Header";
import DoctorLandingPage from "./AI Doctor/DoctorLandingPage";
import UpgradePlan from "../components/Upgrade/UpgradePlan";
import LawyerLandingPage from "../components/Ai-Lawyer/LawyerLandingPage";
import StockPredictorHome from "../components/Ai Stocker/StockPredictorHome";
import ClinicalNotesPage from "../components/Ai Clinical Notes/ClinicalNotesFlow";

// Import your new icons here
import micIcon from "../images/mic.png";
import sendIcon from "../images/send.png";
import attachmentIcon from "../images/attach.png";

import "./HomePage.css";
const CerinaPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isMicActive, setIsMicActive] = useState(false);
  const [showUpgradePlan, setShowUpgradePlan] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showDoctorLandingPage, setShowDoctorLandingPage] = useState(false);
  const [showLawyerLandingPage, setShowLawyerLandingPage] = useState(false);
  const [showStockPredictorHome, setShowStockPredictorHome] = useState(false);
  const [showClinicalNotesPage, setShowClinicalNotesPage] = useState(false);
  const [accessToken, setAccessToken] = useState(""); // Store the access token
  const [query, setQuery] = useState(""); // Store the user's query
  const [conversation, setConversation] = useState([]); // Store the conversation history
  const fileInputRef = useRef(null);
  const sidebarRef = useRef(null); 

  const showProfileImage = true;

  useEffect(() => {
    const handleEnterPress = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSearch();
      }
    };
    window.addEventListener("keydown", handleEnterPress);
    return () => window.removeEventListener("keydown", handleEnterPress);
  }, [query]);

  const handleMicClick = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setIsMicActive(true);
        console.log("Microphone permission granted");
      })
      .catch((error) => {
        console.error("Microphone permission denied", error);
      });
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleAttachmentClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
    }
  };

  const handleShowDoctorLandingPage = () => {
    setShowDoctorLandingPage(!showDoctorLandingPage);
    setSidebarOpen(!isSidebarOpen); 
    setShowUpgradePlan(false);
    setShowLawyerLandingPage(false);
    setShowStockPredictorHome(false);
    setShowClinicalNotesPage(false);
  };

  const toggleUpgradePlan = () => {
    setShowUpgradePlan(!showUpgradePlan);
    setSidebarOpen(!isSidebarOpen); 
    setShowDoctorLandingPage(false);
    setShowLawyerLandingPage(false);
    setShowStockPredictorHome(false);
    setShowClinicalNotesPage(false);
  };

  const handleShowLawyerLandingPage = () => {
    setShowLawyerLandingPage(!showLawyerLandingPage);
    setSidebarOpen(!isSidebarOpen); 
    setShowDoctorLandingPage(false);
    setShowUpgradePlan(false);
    setShowStockPredictorHome(false);
    setShowClinicalNotesPage(false);
  };

  const handleShowStockPredictorHome = () => {
    setShowStockPredictorHome(!showStockPredictorHome);
    setSidebarOpen(!isSidebarOpen); 
    setShowDoctorLandingPage(false);
    setShowUpgradePlan(false);
    setShowLawyerLandingPage(false);
    setShowClinicalNotesPage(false);
  };

  const handleShowClinicalNotesPage = () => {
    setShowClinicalNotesPage(!showClinicalNotesPage);
    setSidebarOpen(!isSidebarOpen); 
    setShowDoctorLandingPage(false);
    setShowUpgradePlan(false);
    setShowLawyerLandingPage(false);
    setShowStockPredictorHome(false);
  };

  const handleSearch = async () => {
    if (!query) {
      console.error("Query is missing");
      return;
    }

    if (!accessToken) {
      // Add a message to the conversation indicating that the user needs to log in
      const newEntry = {
        user: query,
        bot: "It seems some error occured... Ensure you have logged in",
      };

      setConversation([...conversation, newEntry]);
      setQuery(""); // Clear the input field after adding the message
      return;
    }

    try {
      const response = await axios.post(
        "https://beta-api.tecosys.ai/user/chat/",
        { query }, // Sending the query in the body
        {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Including the access token in the header
          },
        }
      );

      if (response.status === 200) {
        console.log("Search result:", response.data);
        const newEntry = {
          user: query,
          bot: response.data.bot_response,
        };
        setConversation([...conversation, newEntry]); // Append the new conversation
        setQuery(""); // Clear the input field after search
      } else {
        console.error("Search failed", response.data);
      }
    } catch (error) {
      console.error("Error during search", error);
    }
  };


  // This is to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSidebarOpen && sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        // Check if the click is outside the sidebar
        if (window.innerWidth <= 768) { // Assume 768px as mobile breakpoint
          setSidebarOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);


  return (
    <div className="relative min-h-screen bg-[#252525] text-white flex flex-col md:flex-row">
      {/* Sidebar */}

      <div 
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-80 h-full bg-[#2d2d2d] z-10 shadow-2xl shadow-black transition-transform transform ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>

        <SidebarContent
          toggleAuthForm={() => setShowAuthForm(true)}
          onShowDoctorLandingPage={handleShowDoctorLandingPage}
          toggleUpgradePlan={toggleUpgradePlan}
          onShowLawyerLandingPage={handleShowLawyerLandingPage}
          onShowStockPredictor={handleShowStockPredictorHome}
          onShowClinicalNotesPage={handleShowClinicalNotesPage}
        />
      </div>

      {/* Main Content */}

      <div className={`flex-1 flex flex-col ${
        isSidebarOpen ? "lg:ml-80 md:ml-80 sm:flex" : ""
        } transition-all duration-300 ${showAuthForm ? "blur-md" : ""}`}>

        {showDoctorLandingPage ? (
          <DoctorLandingPage />
        ) : showUpgradePlan ? (
          <UpgradePlan />
        ) : showLawyerLandingPage ? (
          <LawyerLandingPage />
        ) : showStockPredictorHome ? (
          <StockPredictorHome />
        ) : showClinicalNotesPage ? (
          <ClinicalNotesPage />
        ) : (
          <>
            {/* Header */}
            <HeaderComponent 
            toggleSidebar={toggleSidebar} 
            toggleProfileImage={showProfileImage} 
            />
            {/* Conversation Section */}
            <div className="flex-grow flex flex-col items-center justify-start px-4">
              {/* Display the conversation */}
              {conversation.length > 0 && (
                <div className="mt-8 bg-[#252525] p-4 rounded-lg w-full max-w-3xl text-left mb-4 z-10 flex-grow overflow-y-auto">
                  {conversation.map((entry, index) => (
                    <div key={index} className="mb-4">
                      <div className="text-right text-white mb-2 ml-32 sm:ml-10">
                        <p className="bg-blue-500 p-2 rounded-lg inline-block text-left">
                          <strong>User:</strong> {entry.user}
                        </p>
                      </div>
                      <div className="text-left text-white">
                        <div className="bg-[#2d2d2d] p-2 rounded-lg inline-block">
                          <strong></strong>{" "}
                          <ReactMarkdown
                            components={{
                              p: ({ children }) => <span>{children}</span>,
                              ul: ({ children }) => (
                                <ul className="list-disc ml-6">{children}</ul>
                              ),
                            }}
                          >
                            {entry.bot}
                          </ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <img
                src={logo}
                alt="Tecsys Logo"
                className="h-40 w-auto glowing-logo mb-4 sm:ml-10 "
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: "0",
                  opacity: "1", // Adjust the opacity for better visibility
                }}
              />
            </div>

            {/* Input Section */}
            <div className="flex-none p-4 w-full bg-[#252525] flex items-center justify-center">
              <button
                className={`p-2 ${isMicActive ? "bg-[#252525]" : ""}`}
                onClick={handleMicClick}
              >
            <img src={micIcon} alt="Mic" className="h-6 w-5" />
              </button>
              <input
                type="text"
                placeholder="Press / Input"
                className="flex-grow bg-[#1c1c1c] text-white p-3 mx-4 rounded-lg w-full max-w-xxl text-xl font-semibold border border-black-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />

              <button
                className="p-2 bg-[#252525] rounded-full"
                onClick={handleSearch}
              >
              <img src={sendIcon} alt="Send" className="h-6 w-6" />
              </button>
              <button className="p-2 ml-2" onClick={handleAttachmentClick}>
              <img
                  src={attachmentIcon}
                  alt="Attachment"
                  className="h-6 w-5"
                />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </>
        )}
      </div>


      {showAuthForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <AuthForm closeForm={() => setShowAuthForm(false)} 
          onLoginSuccess={setAccessToken} 
          />
        </div>
      )}
    </div>
  );
};

export default CerinaPage;
