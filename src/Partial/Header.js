import React from "react";
import UserIcon from "../Icon/user.png"
import GridIcon from "../Icon/grid.png"
import { Input } from "antd";

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
          <input
            type="search"
            name="search"
            className="peer block w-full border rounded-md px-3 pt-4 pb-2 text-sm text-gray-900 placeholder-transparent
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 border-gray-300"
            placeholder="Search name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <label
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10
            origin-[0] bg-neutral-50 dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 
            peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
            peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-[10px]"
          >
            Search name
          </label>
          <Input size="large" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
      </div>
    </div>
  );
}