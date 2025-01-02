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

  return (
    <div className="flex flex-col min-h-full">
      <div className="sticky top-0">
        <div className="mb-5 border bg-orange-400 h-16 flex items-center rounded-br-3xl">
          <p className=" text-xl font-bold pl-3 text-white">NgLearn</p>
        </div>
        <div>
          <ul>
            <li
              className={`flex items-center pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "dev" ? "border-r-4 border-orange-500" : ""
                }`}
              onClick={() => handleRoleClick("dev")}
            >
              <img src={devIcon} className="w-auto h-6 mr-2 bg-cover" />
              <p className='pl-2.5'>Developer</p>
            </li>
            <li
              className={`flex items-center pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "test" ? "border-r-4 border-orange-500" : ""
                }`}
              onClick={() => handleRoleClick("test")}
            >
              <img src={TeIcon} className="w-auto h-6 mr-2 bg-cover" />
              <p className='pl-2.5'>Tester</p>
            </li>
            <li
              className={`flex items-center pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "ba" ? "border-r-4 border-orange-500" : ""
                }`}
              onClick={() => handleRoleClick("ba")}
            >
              <img src={BaIcon} className="w-auto h-6 mr-2 bg-cover" />
              <p className='pl-2.5'>Business Analysis</p>
            </li>
            <li
              className={`flex items-center pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRole === "ma" ? "border-r-4 border-orange-500" : ""
                }`}
              onClick={() => handleRoleClick("manager")}
            >
              <img src={MaIcon} className="w-auto h-6 mr-2 bg-cover" />
              <p className='pl-1'>Manager</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}