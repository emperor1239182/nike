"use client";
import { useFavorite } from "@/utils/Contexts";
import type { Product } from "@/utils/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";

export const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorite();
  const [clientFavorites, setClientFavorites] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
 
  // Sync clientFavorites with favorites after mount
  useEffect(() => {
    setClientFavorites(favorites);
  }, [favorites]);

  const handleRemoveFromFavorites = (productId: number) => {
    console.log("Removing product from favorites:", productId);
    removeFromFavorites(productId);
  };

  const handleProductDetails = (product: Product) => {
    setSelectedProduct(product); // store the clicked product
  };

  return (
    <div className="container mx-auto p-2">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>

      {clientFavorites.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clientFavorites.map((product) => (
            <div key={product.id} className="imageContainer">
              <Image
                src={product.image}
                alt={product.name}
                width={100}
                height={48}
                className="productImage cursor-pointer"
                onClick={() => handleProductDetails(product)}
              />
              <p className="productName font-bold mt-2">{product.name}</p>
              <p className="productName text-gray-600">{product.description}</p>
              <p className="productName font-semibold">{product.price}</p>

              <button
                onClick={() => handleRemoveFromFavorites(product.id)}
                className="mt-2 flex items-center gap-2 text-[12px] hover:text-red-700 rounded-2xl border-2 p-1 text-gray-400"
              >
                <FiHeart className="fill-red-500" /> Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    
      {selectedProduct && (
        <div className={`productDetails ${
    selectedProduct ? "translate-y-0" : "translate-y-full"
  }`}>
          <h2 className="text-xl font-bold mb-2">Product Details</h2>
          <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-2 right-4 text-gray-500 text-lg hover:text-black"
      >
        ✕
      </button>
          <Image
            src={selectedProduct.image}
            width={200}
            height={200}
            alt={selectedProduct.name}
          />
          <p className="mt-2 font-semibold">{selectedProduct.name}</p>
          <p className="text-gray-600">{selectedProduct.description}</p>
          <p className="font-bold">{selectedProduct.price}</p>
          <button type="button" className="signUp-buton m-auto">
            Add To Bag
          </button>
        </div>
      )}
    </div>
  );
};
