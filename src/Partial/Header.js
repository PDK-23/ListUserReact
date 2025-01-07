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

          <Input size="large" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>
    </div>
  );
}