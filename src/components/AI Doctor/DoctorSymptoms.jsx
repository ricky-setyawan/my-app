import React, { useState } from 'react';
import DoctorLogo2 from '../../images/AI doctor 2.png'
import GoBack from '../../images/go back.png'

const DoctorSymptoms = ({ next, prev, skip }) => {
  const [Symptoms, setSymptoms] = useState('');
  return (
    <div className="min-h-screen bg-[#2d2d2d] text-white flex flex-col items-center justify-center">
      <img src={DoctorLogo2} alt="Doctor AI Logo" className="mx-auto mb-6" />
      <h1 className="text-4xl font-bold mb-4">AI Doctor</h1>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <div className="bg-gray-800 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '80%' }}></div>
          </div>
          <button 
            className=" text-center font-bold flex justfy-evenly mb-4 mt-3"
            onClick={prev}
            >
            <img src={GoBack} className="h-[3vh] mr-2 mt-1" />
            <button className="text-back-green">Back</button>
          </button>
        </div>
        
        <form>
          <h2 className="mb-2">What are the other symptoms that are bothering you currently? (Up to three)</h2>
          <p className="py-2 mb-2 text-gray-400">ADHD</p>
          <input type="text" 
          className="w-full p-2 bg-gray-800 rounded mb-2 outline-none" 
          value={Symptoms}
          onChange={(e) => setSymptoms(e.target.value)}/>
          <p className="py-2 mb-2 text-gray-400 font-semibold">Common Searches</p>
          <div className="flex flex-wrap space-x-2 space-y-3 mb-4">
              {/* later on create a function to handle only move to next if three symptoms have been choosen */}
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Fever</button>
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Headache</button>
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Back Pain</button>
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Diarrhea</button>
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Cough</button>
            <button className="bg-gray-700 px-6 py-1  rounded-full hover:bg-teal-800" 
            onClick={(e) => setSymptoms(e.target.value)}>Sore throat</button>
          </div>
          <div className="flex mt-6">
            <button onClick={next} className="px-4 py-1 bg-teal-800 text-white mr-4 rounded-full hover:bg-teal-700">Next</button>
            <button onClick={skip} className="text-white px-4 hover:rounded-full hover:bg-teal-700 hover:px-4">Skip</button>
          </div>
        </form>


      </div>
    </div>
  );
};

export default DoctorSymptoms;
