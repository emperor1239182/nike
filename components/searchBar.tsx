"use client"
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center">
      <div
        className={`flex items-center rounded-full px-2 transition-all duration-500 overflow-hidden
          ${open ? "w-64 border bg-white shadow" : "w-12"} `}
      >
        <FiSearch
          className="text-gray-700 cursor-pointer text-xl"
          onClick={() => setOpen(!open)}
        />
        <input
          type="text"
          placeholder="Search..."
          className={`ml-2 outline-none flex-1 transition-all duration-300
          ${open ? "opacity-100 w-full" : "opacity-0 w-0"}`}
        />
      </div>
    </div>
  );
}

