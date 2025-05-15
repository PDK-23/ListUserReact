import React, { useState } from 'react';
import BaIcon from "../Icon/ba.png";
import devIcon from "../Icon/developer.png";
import MaIcon from "../Icon/manager.png";
import TeIcon from "../Icon/tester.png";

export default function Sidebar({ setRole }) {
  const [activeRole, setActiveRole] = useState("dev");

  const handleRoleClick = (role) => {
    setActiveRole(role);
    setRole(role);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="hidden md:flex flex-col min-h-full h-screen">
      <div className="sticky top-0">
        <div onClick={handleClick} className="mb-5 border bg-orange-400 h-16 flex items-center cursor-pointer rounded-br-3xl">
          <p className="text-lg md:text-xl font-bold pl-3 text-white">NgLearn</p>
        </div>
        
        <ul>
          <li
            className={`flex items-center pl-3 md:pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "dev" ? "border-r-4 border-orange-500" : ""
              }`}
            onClick={() => handleRoleClick("dev")}
          >
            <img src={devIcon} alt="" className="w-auto h-5 md:h-6 mr-1 md:mr-2 bg-cover" />
            <p className='pl-1 md:pl-2.5 text-sm md:text-base'>Developer</p>
          </li>
          <li
            className={`flex items-center pl-3 md:pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "test" ? "border-r-4 border-orange-500" : ""
              }`}
            onClick={() => handleRoleClick("test")}
          >
            <img src={TeIcon} alt="" className="w-auto h-5 md:h-6 mr-1 md:mr-2 bg-cover" />
            <p className='pl-1 md:pl-2.5 text-sm md:text-base'>Tester</p>
          </li>
          <li
            className={`flex items-center pl-3 md:pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "ba" ? "border-r-4 border-orange-500" : ""
              }`}
            onClick={() => handleRoleClick("ba")}
          >
            <img src={BaIcon} alt="" className="w-auto h-5 md:h-6 mr-1 md:mr-2 bg-cover" />
            <p className='pl-1 md:pl-2.5 text-sm md:text-base'>Business Analysis</p>
          </li>
          <li
            className={`flex items-center pl-3 md:pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "manager" ? "border-r-4 border-orange-500" : ""
              }`}
            onClick={() => handleRoleClick("manager")}
          >
            <img src={MaIcon} alt="" className="w-auto h-5 md:h-6 mr-1 md:mr-2 bg-cover" />
            <p className='pl-1 text-sm md:text-base'>Manager</p>
          </li>
        </ul>
      </div>
    </div>
  );
}