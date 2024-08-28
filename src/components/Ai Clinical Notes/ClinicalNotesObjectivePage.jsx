import React from 'react';
import logo from '../../images/Clinical.png'

const ClinicalNotesObjectivePage = ({ next, prev }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2d2d2d] text-white relative px-4">
      <button className="absolute top-4 left-4 text-white" onClick={prev}>&lt; Back</button>
      <button className="absolute top-4 right-4 text-white">✕</button>
      <div className="text-center mt-8">
      <img src={logo} alt="AI Clinical Notes Logo" className="mx-auto mb-1 w-32 h-auto" />

        <h1 className="text-3xl font-bold">Ai CLinical Notes</h1>
        <h2 className="text-2xl mt-4">Objective</h2>
        <div className="mt-8 text-left w-full max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold">Vitals</h3>
          <p className="mt-2">
            The 7 Vital Signs are:
          </p>
          <ul className="list-disc ml-6 mt-2">
            <li>Body Temperature</li>
            <li>Pulse Rate</li>
            <li>Respiration Rate</li>
            <li>Blood Pressure</li>
            <li>Blood Oxygen</li>
            <li>Weight</li>
            <li>Blood Glucose Level</li>
          </ul>

          <h3 className="text-lg font-semibold mt-6">Diagnostic Test Results and Labs:</h3>
          <ul className="list-disc ml-6 mt-2">
            <li>Biopsy. A biopsy helps your doctor diagnose a medical condition.</li>
            <li>Colonoscopy. A colonoscopy is a procedure to view the inside of the large bowel.</li>
            <li>CT scan. A computed tomography (CT) scan is a 3D image of the inside of your body.</li>
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

export default ClinicalNotesObjectivePage;
