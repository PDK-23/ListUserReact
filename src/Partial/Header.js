import React from "react";
import UserIcon from "../Icon/user.png"
import GridIcon from "../Icon/grid.png"
// import { Input } from "antd";

export default function Header({ search, setSearch }) {
  return (
    <div>
      <div className="mb-4 text-orange-400 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">User Account Management</h1>
        <div className="flex items-center">
          <img src={UserIcon} className="w-auto h-6 mx-2 bg-cover" />
          <img src={GridIcon} className="w-auto h-6 bg-cover" />
        </div>
      </div>
      <div>
        <div className="relative">
          
          {/* <Input size="large" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/> */}
        </div>
      </div>
    </div>
  );
}