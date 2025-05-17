import React from "react";
import UserIcon from "../Icon/user.png"
import GridIcon from "../Icon/grid.png"
// import { Input } from "antd";

export default function Header({ search, setSearch }) {
  return (
    <div>
      <div className="mb-4 text-orange-400 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-semibold">User Account Management</h1>
        <div className="flex items-center">
          <img src={UserIcon} alt="" className="w-auto h-5 md:h-6 mx-2 bg-cover" />
          <img src={GridIcon} alt="" className="w-auto h-5 md:h-6 bg-cover" />
        </div>
      </div>
      <div className="w-full">
        <div className="relative">
          
          {/* <Input size="large" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/> */}
        </div>
      </div>
    </div>
  );
}