import React from "react";
import menuIcon from "../images/drop.png";
import user from "../images/user.png";
import SidebarContent from "./SidebarContent";

const HeaderComponent = ({  toggleSidebar, toggleProfileImage, className }) => {

    const handleSidebarToggle = () => {
        // console.log("Toggling sidebar..."); I used this to debug -FAITH
        toggleSidebar();
      };
    

  return (
    <div className={`flex justify-between items-center p-4 ${className}`}>
    <div 
        className="flex items-center cursor-pointer" 
        onClick={handleSidebarToggle}>
    <img src={menuIcon} alt="Menu" className="h-6 w-6" />
    <span className="ml-2 text-white font-extrabold text-2xl">
      Cerina
      </span>
    </div>
    {toggleProfileImage && (
            <div className="flex items-center">
            <img src={user} 
                alt="Profile" 
                className="h-6 w-8 sm:h-8 sm:w-10 rounded-full" />
            </div>
    )} 
    </div>
  );
}




export default HeaderComponent;
