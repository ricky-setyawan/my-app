import React from 'react';
import HeaderComponent from '../Header';

const ClinicalNotesSubjectivePage = ({ next, prev }) => {
  const showProfileImage = false;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d] text-white relative px-4">
      {/* HEADER  */}
      <HeaderComponent toggleProfileImage={showProfileImage}/>
      
      <button className="absolute top-4 left-4 text-white" onClick={prev}>&lt; Back</button>
      {/* <button className="absolute top-4 right-4 text-white">✕</button> */}
      <div className="text-center mt-8">
        <img src="logo.png" alt="AI Clinical Notes Logo" className="mx-auto mb-4" />
        <h1 className="text-3xl font-bold">Ai Clinical Notes</h1>
        <h2 className="text-2xl mt-4">Subjective</h2>
        <div className="mt-8 text-left w-full max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">Chief Complaints</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>High blood sugar</li>
            <li>Cholesterol levels</li>
            <li>Blood pressure</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">HPI</h3>
          <p className="mt-2">
            <strong>HPI:</strong> History of Present Illness (HPI) The HPI is a chronological description of the development of the patient's present illness from the first sign and/or symptom or from the previous encounter to the present.
          </p>

          <h3 className="text-lg font-semibold mt-6">Review of Symptoms</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Lower back pain on the left side</li>
            <li>Alternate heat and cold</li>
            <li>Antacids (such as Tums and Rolaids)</li>
          </ul>
        </div>
        <button
          className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-400 transition-all duration-200 ease-in-out"
          onClick={next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ClinicalNotesSubjectivePage;
