import React from 'react';
import HeaderComponent from '../Header';

const ClinicalNotesPlanPage = ({ prev }) => {
  const showProfileImage = false;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d] text-white relative px-4">
      {/* HEADER  */}
      <HeaderComponent toggleProfileImage={showProfileImage}/>
      
      <button className="absolute top-4 left-4 text-white" onClick={prev}>&lt; Back</button>
      {/* <button className="absolute top-4 right-4 text-white">✕</button> */}
      <div className="text-center mt-8">
        <img src="logo.png" alt="AI Clinical Notes Logo" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Ai CLinical Notes</h1>
        <h2 className="text-2xl mt-4">Plan</h2>
        <div className="mt-8 text-left w-full max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">Vitals</h3>
          <p className="mt-2">
            On your test report, you may see these terms:
          </p>
          <ol className="list-decimal ml-6 mt-2">
            <li>Negative or normal. This means "No, the test didn't find what it was looking for."...</li>
            <li>Positive or abnormal. This means, "Yes, the test found what it was looking for."...</li>
            <li>Inconclusive or uncertain. This means "not sure."</li>
          </ol>
          <div className="flex justify-center mt-6">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all duration-200 ease-in-out mr-2">
              Copy
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-200 ease-in-out">
              Edit
            </button>
          </div>
          <h2 className="text-xl font-semibold mt-8">Visit Summary</h2>
          <p className="mt-2">CHARACTERISTICS OF A DIAGNOSTIC SUMMARY3 Define culture, ...</p>
        </div>
      </div>
    </div>
  );
};

export default ClinicalNotesPlanPage;
