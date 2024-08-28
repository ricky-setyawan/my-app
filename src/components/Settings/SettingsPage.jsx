import React from 'react';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-6">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl">Settings</h1>
        <button className="text-3xl">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>

          
        </button>
      </div>

      <div className="flex">
        {/* Sidebar Section */}
        <div className="w-64 mr-10">
          <ul className="space-y-4">
            <li className="flex items-center space-x-4 text-white">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 3m-9 4h14a2 2 0 002-2V8a2 2 0 00-2-2h-1.5l-1.75-3.5a2 2 0 00-1.79-1H9.04c-.785 0-1.505.41-1.789 1.07L5.5 6H4a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="font-bold">General</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V5a3 3 0 00-6 0v6m6 0v6a3 3 0 01-6 0v-6m6 0h-6"
                  />
                </svg>
              </span>
              <span>Personalization</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 17l4-4 4 4m0 0V7m0 14V7m-4 10l-4-4-4 4m0-14v14"
                  />
                </svg>
              </span>
              <span>Data controls</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 7l7-4-7-4-7 4 7 4z"
                  />
                </svg>
              </span>
              <span>Builder Profile</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.24 7.76L7.76 16.24M19 12a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <span>Security</span>
            </li>
            <li className="flex items-center space-x-4">
              <span className="p-2 bg-gray-800 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v8m4-4H8"
                  />
                </svg>
              </span>
              <span>Your API's</span>
            </li>
          </ul>
        </div>

        {/* Settings Content */}
        <div className="flex-1 space-y-6">
          {/* Theme */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Theme</span>
            <select className="bg-black text-white border border-gray-700 p-2 rounded-md">
              <option>System</option>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>

          {/* Always show code */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Always show code while using data analytics</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>

          {/* Language */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Language</span>
            <select className="bg-black text-white border border-gray-700 p-2 rounded-md">
              <option>Auto-detect</option>
              <option>English</option>
              <option>Spanish</option>
            </select>
          </div>

          {/* Archived chat */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Archived chat</span>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Manage</button>
          </div>

          {/* Archive all chats */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Archive all chats</span>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Archive all</button>
          </div>

          {/* Delete all */}
          <div className="flex justify-between items-center border-b border-gray-700 pb-4">
            <span>Delete chat</span>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md">Delete all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
