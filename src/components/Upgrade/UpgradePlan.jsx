import React, { useState } from "react";
import plus from './plus.png';
import team from './team-icon.png';
const UpgradePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState("personal");

  return (
    <div className="bg-[#2d2d2d] min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#2d2d2d] text-white p-10 rounded-lg w-full max-w-4xl mx-auto text-center">
        <h1 className="text-3xl mb-5">Upgrade your plan</h1>
        <div className="flex flex-col md:flex-row justify-center mb-7 space-y-4 md:space-y-0 md:space-x-4">
          <button
            className={`bg-gray-700 px-5 py-2 rounded-full transition-colors ${
              selectedPlan === "personal" ? "bg-white text-black" : "text-white hover:bg-gray-600"
            }`}
            onClick={() => setSelectedPlan("personal")}
          >
            Personal
          </button>
          <button
            className={`bg-[#2d2d2d] px-5 py-2 rounded-full transition-colors ${
              selectedPlan === "business" ? "bg-white text-black" : "text-white hover:bg-gray-600"
            }`}
            onClick={() => setSelectedPlan("business")}
          >
            Business
          </button>
        </div>

        {selectedPlan === "personal" && (
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-[#2d2d2d] p-5 rounded-lg w-full max-w-md">
              <h2 className="text-xl mb-3">Free</h2>
              <p className="text-lg mb-5">USD $0/month</p>
              <button className="bg-gray-700 text-white px-5 py-2 rounded-full w-full mb-5 hover:bg-gray-600">
                Your current plan
              </button>
              <ul className="font-semibold text-left text-gray-400">
                <li className="mb-2">Assistance with writing, problem solving and more</li>
                <li className="mb-2">Access to GPT-4o mini</li>
                <li className="mb-2">Limited access to GPT-4o</li>
                <li className="mb-2">Limited access to advanced data analysis, file uploads, vision, web browsing, and custom GPTs</li>
              </ul>
              <p className="text-sm text-gray-500 mt-5">
                Have an existing plan? See <a href="#" className="text-green-500">billing help</a>
              </p>
            </div>
            <div className="bg-[#2d2d2d] p-5 rounded-lg w-full max-w-md">
              <h2 className="text-xl mb-3 flex items-center justify-center">
                <img src={plus} alt="Plus" className="w-5 h-5 mr-2" />
                Plus
              </h2>
              <p className="text-lg mb-5">USD $20/month</p>
              <button className="bg-green-600 text-white font-bold px-5 py-2 rounded-full w-full mb-5 hover:bg-green-700">
                Upgrade to Plus
              </button>
              <ul className="font-semibold text-left text-gray-400">
                <li className="mb-2">Early access to new features</li>
                <li className="mb-2">Access to GPT-4o, GPT-4o mini, GPT-4</li>
                <li className="mb-2">Up to 5x more messages for GPT-4o</li>
                <li className="mb-2">Access to advanced data analysis, file uploads, vision, and web browsing</li>
                <li className="mb-2">DALL·E image generation</li>
                <li className="mb-2">Create and use custom GPTs</li>
              </ul>
              <p className="text-sm text-gray-500 mt-5">
                <a href="#" className="text-green-500">Limits apply</a>
              </p>
            </div>
          </div>
        )}

        {selectedPlan === "business" && (
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="bg-[#2d2d2d] p-5 rounded-lg w-full max-w-md">
              <h2 className="text-xl mb-3 flex items-center justify-center">
                <img src={team} alt="Team" className="w-5 h-5 mr-2" />
                Team
              </h2>
              <p className="text-lg mb-5">USD $25 per person/month*</p>
              <button className="bg-blue-600 text-white font-bold px-5 py-2 rounded-full w-full mb-5 hover:bg-blue-700">
                Upgrade to Team
              </button>
              <ul className="font-semibold text-left text-gray-400">
                <li className="mb-2">Everything in Plus, and:</li>
                <li className="mb-2">Higher limits for GPT-4, GPT-4o, and tools like DALL·E image generation, advanced data analysis, web browsing, and more</li>
                <li className="mb-2">Create and share GPTs with your workspace</li>
                <li className="mb-2">Admin console for workspace management</li>
                <li className="mb-2">Team data excluded from training by default. <a href="#" className="text-green-500">Learn more</a></li>
              </ul>
              <p className="text-sm text-gray-500 mt-5">
                * Price billed annually, minimum 2 users
              </p>
            </div>
          </div>
        )}

        <footer className="mt-7 text-sm text-gray-500">
          <p>
            Need more capabilities for your business? See{" "}
            <a href="#" className="text-green-500">ChatGPT Enterprise</a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default UpgradePlan;
