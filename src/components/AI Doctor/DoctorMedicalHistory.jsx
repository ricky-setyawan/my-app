import React, { useState } from 'react';
import DoctorLogo2 from '../../images/AI doctor 2.png'
import GoBack from '../../images/go back.png'
import Close from '../../images/x.png'

const DoctorMedicalHistory = ({ next, prev, skip }) => {
  const [MedicalHistory, setMedicalHistory] = useState('');

  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white flex flex-col items-center justify-center">
      <img src={DoctorLogo2} alt="Doctor AI Logo" className="mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">AI Doctor</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <div className="bg-gray-800 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
        <button 
            className="text-center font-bold flex justfy-evenly mb-4"
            onClick={prev}
            >
            <img src={GoBack} className="h-[3vh] mr-2 mt-1" />
        <button className="text-back-green">Back</button>
                </button>
        <h2 className="mb-2">What conditions(s) are you currently diagnosed with?</h2>
        <p className="mb-4 text-gray-400">This data can improve the accuracy in predicting your possible conditions.</p>
        <input type="text" className="w-full p-2 bg-gray-800 rounded mb-2 outline-none" />
        <div className="flex items-center mb-4">
          <input type="radio" id="noHistory" name="condition" className="mr-2" onClick={next} onChange={(e) => setMedicalHistory(e.target.value)}/>
          <label htmlFor="noHistory" >No past medical history</label>
        </div>
        <p className="py-2 mb-2 text-gray-400 font-semibold">Common Conditions</p>
        <div className="flex space-x-2 mb-4">
          <button onClick={next} 
          value={MedicalHistory} 
          onChange={(e) => setMedicalHistory(e.target.value)} className="bg-gray-700 px-4 py-1 rounded-full hover:bg-teal-800">Anxiety</button>
          <button onClick={next} 
          value={setMedicalHistory} 
          onChange={(e) => setMedicalHistory(e.target.value)} className="bg-gray-700 px-4 py-1 rounded-full hover:bg-teal-800">Depression</button>
          <button onClick={next} 
          value={setMedicalHistory} 
          onChange={(e) => setMedicalHistory(e.target.value)} className="bg-gray-700 px-4 py-1 rounded-full hover:bg-teal-800">Heart Attack</button>
        </div>
        <div className="flex mt-6">
          <button onClick={next} className="px-4 py-1 bg-teal-800 text-white mr-4 rounded-full hover:bg-teal-700">Next</button>
          <button onClick={skip} className="text-white hover:rounded-full hover:px-4 px-4 hover:bg-teal-700">Skip</button>
        </div>
      </div>
    </div>
  );
};

export default DoctorMedicalHistory;
