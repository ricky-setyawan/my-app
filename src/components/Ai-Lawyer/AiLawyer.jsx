import React from 'react';
import LawyerLogo from '../../images/AI Lawyer.png';

const AiLawyer = ( {next}) => {
  return (
    <div className="bg-[#2d2d2d] min-h-screen flex justify-center items-center p-4">
      <div className="bg-[#2d2d2d] p-10 rounded-lg shadow-lg text-center text-white w-full max-w-md mx-auto">
        {/* Image */}
        <img src={LawyerLogo} alt="AI Lawyer" className="mx-auto mb-5 w-24 h-24 object-cover" />

        {/* Heading */}
        <h1 className="text-3xl mb-8">Ai Lawyer</h1>

        {/* Radio Button Options */}
        <div className="space-y-4">

          <label className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-150">
            <div className="flex items-center space-x-3">
              <span className="material-icons-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
              </span>
              <span>I’m legal consumer</span>
            </div>
            <input type="radio" name="user-type" className="form-radio" />
          </label>

          <label className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-150">
            <div className="flex items-center space-x-3">
              <span className="material-icons-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </span>
              <span>I’m a lawyer</span>
            </div>
            <input type="radio" name="user-type" className="form-radio" />
          </label>

          <label className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-150">
            <div className="flex items-center space-x-3">
              <span className="material-icons-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </span>
              <span>I’m a law student</span>
            </div>
            <input type="radio" name="user-type" className="form-radio" />
          </label>

          <label className="flex items-center justify-between p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 transition-all duration-150">
            <div className="flex items-center space-x-3">
              <span className="material-icons-outlined">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </span>
              <span>Other</span>
            </div>
            <input type="radio" name="user-type" className="form-radio" />
          </label>

        </div>

        {/* Button */}
        <button 
        className="bg-yellow-600 text-black py-3 px-6 rounded-full mt-8 hover:bg-yellow-500 transform hover:scale-105 transition-transform duration-200"
        onClick={next}>
          Choose and continue
        </button>

        {/* Footer */}
        <p className="text-gray-400 text-xs mt-4">
          By starting the symptom checker, you agree to the 
          <a href="#" className="text-blue-500 underline"> Privacy Policy </a> 
          and 
          <a href="#" className="text-blue-500 underline"> Terms of Use</a>.
        </p>
      </div>
    </div>
  );
};

export default AiLawyer;
