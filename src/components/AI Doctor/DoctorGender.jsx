import React, { useState } from 'react';
import DoctorLogo2 from '../../images/AI doctor 2.png'
import GoBack from '../../images/go back.png'


const DoctorGender = ({ next, prev, skip }) => {
    const [sex, setSex] = useState('');

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-[#2d2d2d] text-white">
            <img src={DoctorLogo2} alt="Doctor AI Logo" className="mb-6" />
            <h1 className="text-4xl font-bold mb-4">AI Doctor</h1>

            <div className=" mb-4 px-10 lg:px-4 w-full  mx-6 lg:mx-2 max-w-md">
                <div className="bg-gray-800 rounded-full h-2 mr-6">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <button 
                    className="text-center font-bold flex justfy-evenly mb-4 mt-3 mr-6"
                    onClick={prev}
                    >
                    <img src={GoBack} className="h-[3vh] mr-2 mt-1" alt="Go Back" />
                    <button className="text-back-green">Back</button>
                </button>
            </div>

            
            <div ClassName="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between">
                <form >
                    <p className="mb-4 lg:text-justify text-center">You have come to the right place. Cerina is here to help.</p>
                    <p className="mb-4 lg:text-justify text-center">Please select your sex at birth</p>
                    <div className="flex flex-col text-justify space-y-4 ">
                        <label className="inline-flex items-center mr-10">
                            <input onClick={next}
                                type="radio" 
                                className="form-radio h-4 w-4 text-green-600" 
                                name="sex" 
                                value="male" 
                                onChange={(e) => setSex(e.target.value)}
                            />
                            <span className="ml-2">Male</span>
                        </label>
                        <label className="inline-flex items-center mr-10">
                            <input onClick={next}
                                type="radio" 
                                className="form-radio h-4 w-4 text-green-600" 
                                name="sex" 
                                value="female"
                                onChange={(e) => setSex(e.target.value)}  
                            />
                            <span className="ml-2">Female</span>
                        </label>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center mt-6">
                        <button 
                            className="bg-teal-800 text-white mb-4 lg:mb-0 lg:mr-4 rounded-full px-4 py-1 hover:bg-teal-700"
                            onClick={next}
                            >
                            Next
                        </button>
                        <button 
                            className="text-white mb-4 lg:mb-0 lg:mr-4 px-4 py-1 hover:bg-teal-700 hover:rounded-full hover:px-4"
                            onClick={skip}
                            >
                            Skip
                        </button>
                    </div>
        
                </form>
            </div>
        </div>
    );
};

export default DoctorGender;
