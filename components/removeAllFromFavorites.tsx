"use client"
import { useFavorite } from "@/utils/Contexts";
import { useState } from "react";

export const RemoveAllFavorites = () => {
      const [deleteAll, setDeleteAll] = useState(false);
      const {clearAllFavorites} = useFavorite();
    return (
        <>
        <div className="flex justify-between items-center mb-10">
      <h1 className="text-2xl font-bold">Favorites</h1>
      
      <div className="relative">
        {/* Menu Button */}
        <button
          onClick={() => setDeleteAll(!deleteAll)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Menu"
        >
          <span className="text-3xl font-light text-gray-600">•••</span>
        </button>

        {/* Dropdown Menu */}
        {deleteAll && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Menu Item */}
            <button
              onClick={() => {
                clearAllFavorites();
                setDeleteAll(false);
              }}
              className="w-full px-4 py-3 text-left text-red-500 hover:bg-gray-50 transition-colors duration-150 font-medium text-sm flex items-center gap-3 border-b border-gray-100 last:border-b-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Remove All
            </button>
          </div>
        )}

        {/* Overlay to close menu */}
        {deleteAll && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setDeleteAll(false)}
          />
        )}
      </div>
    </div>
        </>
    )
}