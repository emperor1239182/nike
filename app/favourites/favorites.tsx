"use client";
import { useFavorite, useCart } from "@/utils/Contexts";
import type { Product } from "@/utils/types";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FiHeart } from "react-icons/fi";
import { FavoriteDetails } from "@/components/favoriteDetails";
import { RemoveAllFavorites } from "@/components/removeAllFromFavorites";

export const FavoritesPage = () => {
  const { favorites, removeFromFavorites } = useFavorite();
  const {message} = useCart();
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

      <RemoveAllFavorites/>

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
          
          {message && (
      <div className="message">
        {message}
      </div>
    )}
        </div>
      )}
    
      <FavoriteDetails selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
    </div>
  );
};
