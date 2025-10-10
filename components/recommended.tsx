"use client"
import { useRecommended } from "@/utils/Contexts";
import Image from "next/image";
import type { ProductDetailsProps } from "@/utils/types";

export const Recommended = ({ selectedProduct } : ProductDetailsProps) => {
    const {recommendedShoes,recommendedClothes,recommendedSports} = useRecommended();

  const getRecommendedByCategory = (category : string | "") => {
    switch(category){
      case "Shoe" : 
       return recommendedShoes;
      case "Clothing" :
       return recommendedClothes;
      case "Sport" :
        return recommendedSports;
        default :
         return [];
    }
  }

  const recommendedProducts = getRecommendedByCategory(selectedProduct?.category || "");
    return (
        <>
        {/* Recommended section*/}
      <div className="my-7">
        <h1 className="text-lg font-bold mb-3">Recommended For You</h1>
        <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
          {recommendedProducts && recommendedProducts.length > 0 ? (
            recommendedProducts.map((items) => (
              <div key={items.id} className="flex-shrink-0">
                <Image
                  src={items.image}
                  width={150}
                  height={150}
                  alt={items.name}
                  className="w-40 h-40 object-cover rounded-lg"
                  
                />
                <p className="text-sm mt-1">{items.name}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No recommendations available</p>
          )}
        </div>
      </div>
        </>
    )
}