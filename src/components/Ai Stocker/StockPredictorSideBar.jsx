import React, { useState } from "react";
import logo from "../../images/tecosys.png";
import user from "../../images/user.png";
import SidebarContent from "../SidebarContent"; // Use SidebarContent
import AuthForm from "../../components/AuthForm";
import WatchlistModal from "./WatchlistModal";
import StockAnalysisView from "./StockAnalysisView";

const StockPredictorHome = () => {
  const [isMicActive, setMicActive] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [showWatchlistModal, setShowWatchlistModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleMicClick = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        setMicActive(true);
        console.log("Microphone permission granted");
      })
      .catch((error) => {
        console.error("Microphone permission denied", error);
      });
  };

  const handleStockSelect = (stock) => {
    setSelectedStock(stock);
    setShowWatchlistModal(false);
  };

  return (
    <div className="flex min-h-screen bg-[#1e1e1e] text-white">
      {/* Sidebar */}
      <div className="w-80 bg-[#252525] shadow-2xl shadow-black">
        <SidebarContent toggleAuthForm={() => setShowAuthForm(true)} />
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-[#252525]">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">Cerina</span>
            <svg
              className="ml-1 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">AI Stock Predictor</h1>
          <img src={user} alt="Profile" className="h-8 w-8 rounded-full" />
        </div>

        {/* Main Content Area */}
        <div className="flex-grow p-4">
          {selectedStock ? (
            <StockAnalysisView
              stock={selectedStock}
              onClose={() => setSelectedStock(null)}
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <img
                src={[]}
                alt="Tecsys Logo"
                className="w-auto animate-pulse"
              />
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="flex items-center p-4 bg-[#252525] m-4 rounded-lg">
          <button
            className={`p-2 ${isMicActive ? "text-blue-500" : "text-gray-400"}`}
            onClick={handleMicClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
          </button>

          <input
            type="text"
            placeholder="Press / Input"
            className="flex-grow bg-transparent text-white p-2 mx-2 focus:outline-none"
          />

          <button className="p-2 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </button>

          <button
            className="p-2 text-gray-400"
            onClick={() => setShowWatchlistModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Authentication Form */}
      {showAuthForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <AuthForm closeForm={() => setShowAuthForm(false)} />
        </div>
      )}

      {/* Watchlist Modal */}
      {showWatchlistModal && (
        <WatchlistModal
          closeModal={() => setShowWatchlistModal(false)}
          onStockSelect={handleStockSelect}
        />
      )}
    </div>
  );
};

export default StockPredictorHome;
