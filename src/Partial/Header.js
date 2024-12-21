import React from "react";

export default function Header({ search, setSearch }) {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4 text-orange-400 flex items-start">
        User Account Management
      </div>
      <div>
        <input
          type="search"
          placeholder="Search name"
          className="pl-3 border border-gray-300 rounded px-2 py-1 h-10 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}