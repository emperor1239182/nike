"use client"
import { useState } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { SearchFilter } from "./filter";

export function SearchBar({setSearch} : {setSearch : (value : string)=> void}) {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <div className="flex items-center gap-2">
            <FiFilter className="text-xl" onClick={()=>setFilter(!filter)}/>
            <div
              className={`flex items-center rounded-full px-2 transition-all duration-500 overflow-hidden
              ${open ? "absolute left-0 top-2 w-full sm:relative bg-white border shadow px-4 py-3 sm:py-2" : "w-10"} `}
            >
              <FiSearch
                className="text-gray-700 cursor-pointer text-xl"
                onClick={() => setOpen(true)}
              />
              <input
                type="text"
                placeholder="Search..."
                className={`ml-2 outline-none flex-1 transition-all duration-500 ${open ? "opacity-100 w-full" : "opacity-0 w-0"}`}
                onChange={(e)=> setSearch(e.target.value)}
              />
              {open && (
                <p
                  className="ml-2 text-sm text-blue-500 cursor-pointer"
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </p>
              )}
            </div>
            {filter && (
              <SearchFilter setFilter={setFilter}/>
            )}
            </div>
  );
}

