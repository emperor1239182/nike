"use client";
import { useFavorite } from "@/utils/Contexts";
import type { Product } from "@/utils/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";

export const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorite();
  const [clientFavorites, setClientFavorites] = useState<Product[]>([]);

  // Sync clientFavorites with favorites after mount
  useEffect(() => {
    setClientFavorites(favorites);
  }, [favorites]);

  const handleRemoveFromFavorites = (productId: number) => {
    console.log("Removing product from favorites:", productId);
    removeFromFavorites(productId);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Favorite Products</h1>
      {clientFavorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clientFavorites.map((product) => (
            <div key={product.id} className=" p-4 rounded">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={48}
                className="w-full h-48 object-cover"
              />
              <p className="font-bold mt-2">{product.name}</p>
              <p className="text-gray-600">{product.description}</p>
              <p className="font-semibold">{product.price}</p>
              <button
                onClick={() => handleRemoveFromFavorites(product.id)}
                className="mt-2 flex items-center gap-2 text-[12px] hover:text-red-700 rounded-2xl border-2 p-1 text-gray-400"
              >
                <FiHeart className="fill-red-500" />
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};