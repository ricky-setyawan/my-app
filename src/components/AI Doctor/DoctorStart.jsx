import React from 'react';
import DoctorLogo from'../../images/AI doctor1.png' 
import HeaderComponent from '../Header';

const DoctorStart = ({ next }) => {

    // const showProfileImage = false;
    // const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    // const toggleSidebar = () => {
    //   setSidebarOpen(!isSidebarOpen);
    // };
  

    return (
        
        <div className="h-screen flex flex-col items-center justify-center bg-[#2d2d2d] text-white">
            {/* <HeaderComponent toggleSidebar={toggleSidebar} toggleProfileImage={showProfileImage} className="hover:px-10 hover:py-10"/> */}
            <div className="text-center">
                <img src={DoctorLogo} alt="Doctor AI Icon" className="mb-6 h-1/2 px-6 w-full" />
                <h1 className="text-4xl font-semibold mb-10">AI Doctor</h1>
                <button 
                    className="bg-teal-800 hover:bg-teal-700 text-white font-semibold py-2 px-6 rounded-full"
                    onClick={next}
                >
                    Click here to get started
                </button>
            </div>
            <p className="text-sm mt-4 px-12 sm:px-20">
                By starting the symptom checker, you agree to the Privacy Policy and <a href="#" className="underline">Terms of Use</a>
            </p>
        </div>
    );
};

export default DoctorStart;
