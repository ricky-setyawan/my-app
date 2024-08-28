import React, { useState } from 'react';

const PromptOptimizePage = () => {
  const [autoGenerate, setAutoGenerate] = useState(true);

  const handleToggle = () => {
    setAutoGenerate(!autoGenerate);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative px-4">
      <button className="absolute top-4 right-4 text-white">✕</button>
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Ai Prompt Optimize</h1>
        <h2 className="text-xl mt-6">Prompt to optimize</h2>
        <textarea
          placeholder='E.g. “Debug a snippet of code”'
          className="mt-4 p-4 w-full max-w-lg h-40 text-black rounded resize-none"
        />
        <div className="w-full max-w-lg mt-6">
          <h3 className="text-lg text-left">Variables</h3>
          <p className="mt-2 text-sm text-gray-400 text-left">
            Prompt variables are snippets of text that you can dynamically fill later in order to make your prompt reusable.
          </p>
          <div className="flex items-center mt-4">
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input 
                type="checkbox" 
                name="toggle" 
                id="toggle" 
                checked={autoGenerate}
                onChange={handleToggle}
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
              />
              <label 
                htmlFor="toggle" 
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
            <span className="ml-2">Auto-generate variables to use</span>
          </div>
        </div>
        <button className="mt-6 bg-gradient-to-r from-blue-400 to-blue-600 text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ease-in-out transform hover:scale-105">
          Optimize Prompt
        </button>
        <p className="mt-8 text-sm text-gray-400">
          By starting the symptom checker, you agree to the <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.
        </p>
      </div>
    </div>
  );
};

export default PromptOptimizePage;
