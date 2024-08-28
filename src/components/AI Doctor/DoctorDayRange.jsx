import React, { useState } from 'react';
import DoctorLogo2 from '../../images/AI doctor 2.png'
import GoBack from '../../images/go back.png'

const DoctorDayRange = ({ next, prev, skip }) => {
  const [SymptomStart, setSymptomStart] = useState('');
  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white flex flex-col items-center justify-center">
      <img src={DoctorLogo2} alt="Doctor AI Logo" className="mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">AI Doctor</h1>


      <div className="w-full max-w-md">
        
        <div className="mb-4">
          <div className="bg-gray-800 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
          <button 
            className="text-center font-bold flex justfy-evenly mb-4 mt-3"
            onClick={prev}
            >
            <img src={GoBack} className="h-[3vh] mr-2 mt-1" />
            <button className="text-back-green">Back</button>
          </button>
        </div>

        <h2 className="mb-2">When did you start having this symptom?</h2>
        <p className="py-2 mb-2 text-gray-400 font-semibold">It started about </p>
        <div className="flex items-center justify-between space-x-4 text-center">
          <input type="number" 
          placeholder="0"
          value={SymptomStart} 
          className=" p-2 bg-gray-800 outline-none rounded mb-4 no-spinner " 
          onChange={(e) => setSymptomStart(e.target.value)} />
          <div className="flex items-center justify-around">
            <input type="text" 
            placeholder="Days"
            className=" p-2 bg-gray-800 outline-none rounded mb-4 read-only pointer-events-none border-x-white w-1/2" 
            />
            <p className="w-1/2 mb-4 text-800 p-2">Ago</p>
          </div>
        </div>
        
        <div className="flex justify-between">
          <button onClick={next} className="px-4 py-1 bg-teal-800 text-white mr-4 rounded-full hover:bg-teal-700">Next</button>
          <button onClick={skip} className="text-white px-4 hover:rounded-full hover:bg-teal-700 hover:py-1 hover:px-4">Skip</button>
        </div>
      </div>

    </div>
  );
};

export default DoctorDayRange;
