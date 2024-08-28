import React, { useState } from "react";

const ApiKeySettings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col relative">
      <div className="w-full h-full bg-gray-800 p-8 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl sm:text-5xl font-semibold">Settings</h1>
          <button className="text-4xl sm:hidden" onClick={toggleSidebar}>
            ☰
          </button>
        </div>

        <div className="flex flex-grow flex-col sm:flex-row">
          {/* Sidebar */}
          <div
            className={`w-64 bg-gray-700 p-8 rounded-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out sm:translate-x-0 sm:relative sm:block fixed inset-y-0 left-0 z-50`}
          >
            <ul className="space-y-6 text-lg sm:text-2xl">
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>⚙️</span>
                <a
                  href="#general"
                  className="hover:text-blue-400 transition duration-200"
                >
                  General
                </a>
              </li>
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>👤</span>
                <a
                  href="#personalization"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Personalization
                </a>
              </li>
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>💾</span>
                <a
                  href="#data-controls"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Data controls
                </a>
              </li>
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>📁</span>
                <a
                  href="#builder-profile"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Builder Profile
                </a>
              </li>
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>🔒</span>
                <a
                  href="#security"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Security
                </a>
              </li>
              <li className="flex items-center space-x-4 hover:bg-gray-600 p-2 rounded-lg transition duration-200">
                <span>🔑</span>
                <a
                  href="#your-apis"
                  className="hover:text-blue-400 transition duration-200"
                >
                  Your API's
                </a>
              </li>
            </ul>
          </div>

          {/* Content Area */}
          <div className="flex-1 ml-0 sm:ml-8 p-4 sm:p-8">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-8">
              Create new API Key
            </h2>
            <form className="flex flex-col justify-between h-full">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
                  <input
                    type="radio"
                    name="ownedBy"
                    id="you"
                    className="form-radio text-blue-600 w-6 h-6"
                  />
                  <label htmlFor="you" className="text-lg sm:text-2xl">
                    You
                  </label>
                  <input
                    type="radio"
                    name="ownedBy"
                    id="serviceAccount"
                    className="form-radio text-blue-600 w-6 h-6"
                  />
                  <label
                    htmlFor="serviceAccount"
                    className="text-lg sm:text-2xl"
                  >
                    Service Account
                  </label>
                </div>

                <p className="text-gray-400 text-lg sm:text-xl mb-8">
                  Lorem ipsum dolor sit amet consectetur. Ac at et metus
                  consectetur. Amet bibendum amet in dui viverra malesuada
                  cursus quis.
                </p>

                <div className="mb-8">
                  <label
                    htmlFor="apiKeyName"
                    className="block text-lg sm:text-2xl font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="apiKeyName"
                    className="w-full bg-gray-700 border border-gray-600 rounded p-4 mt-4 text-lg sm:text-xl"
                    placeholder="new"
                  />
                </div>

                <div className="mb-8">
                  <label className="block text-lg sm:text-2xl font-medium mb-4">
                    Permissions
                  </label>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                    <button className="py-4 px-8 bg-blue-600 rounded text-lg sm:text-2xl hover:bg-blue-700 transition duration-200">
                      All
                    </button>
                    <button className="py-4 px-8 bg-gray-700 rounded text-lg sm:text-2xl hover:bg-gray-600 transition duration-200">
                      Restricted
                    </button>
                    <button className="py-4 px-8 bg-gray-700 rounded text-lg sm:text-2xl hover:bg-gray-600 transition duration-200">
                      Read Only
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4 sm:space-x-8">
                <button
                  type="button"
                  className="py-4 px-8 bg-gray-700 rounded text-lg sm:text-2xl hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-4 px-8 bg-green-600 rounded text-lg sm:text-2xl hover:bg-green-700 transition duration-200"
                >
                  Create API Key
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Settings Button */}
      <div className="absolute bottom-4 left-4">
        <button className="bg-gray-700 hover:bg-gray-600 transition duration-200 text-lg sm:text-2xl px-6 py-4 rounded-lg flex items-center">
          <span className="mr-2">⚙️</span> Settings
        </button>
      </div>
    </div>
  );
};

export default ApiKeySettings;
