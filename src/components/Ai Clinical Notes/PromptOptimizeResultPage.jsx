import React from 'react';

const PromptOptimizeResultPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative px-4">
      <button className="absolute top-4 left-4 text-white">&lt; Back</button>
      <div className="text-center mt-8 w-full">
        <h1 className="text-3xl font-bold">Ai Prompt Optimize</h1>
        <div className="flex justify-between items-center mt-8 w-full max-w-4xl mx-auto">
          <h2 className="text-xl">Optimize Prompt</h2>
          <button className="bg-transparent border border-gray-400 text-gray-400 px-3 py-1 rounded hover:bg-gray-700 transition-all">
            Copy to clipboard
          </button>
        </div>
        <textarea
          placeholder="The optimized prompt will be generated here."
          className="mt-6 p-4 w-full max-w-4xl h-64 text-black rounded resize-none mx-auto"
        />
      </div>
    </div>
  );
};

export default PromptOptimizeResultPage;
