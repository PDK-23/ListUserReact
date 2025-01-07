import React from 'react';
// import devIcon from "../../Icon/developer.png";

export function ListComponent({activeRoles, onClick, value, title, icon}) {
  return (
    <li
      className={`flex items-center pl-5 w-full mt-4 h-12 cursor-pointer hover:border-r-4 hover:border-orange-400 ${activeRoles === value ? "border-r-4 border-orange-500" : ""}`}
      onClick={() => onClick(value)}
    >
      <img src={icon} className="w-auto h-6 mr-2 bg-cover" />
      <p className='pl-2.5'>{title}</p>
    </li>
  );
}
