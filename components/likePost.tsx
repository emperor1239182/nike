"use client";
import { FiHeart } from "react-icons/fi";
import { useState} from "react";

export const LikeButton = () => {
  const [isProductFavorite, setIsProductFavorite] = useState(false);

 return (
  <>
    <FiHeart
      className={`${
        isProductFavorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
      } w-6 h-6 p-1 rounded-full cursor-pointer`} 
      onClick={()=>setIsProductFavorite(!isProductFavorite)}
    />

  </>
)
}