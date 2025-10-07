"use client";
import { useCart } from "@/utils/Contexts";
import type { FavoriteButtonProps } from "@/utils/types";
import { useState, useEffect } from "react";

export const CartButton: React.FC<FavoriteButtonProps> = ({ product }) => {
  const { addToCart, removeFromCart, isCart, message} = useCart();
  const [isProductCart, setIsProductCart] = useState(false);

  // Update isProductCart only on the client after mount
  useEffect(() => {
    setIsProductCart(isCart(product.id));
  }, [isCart, product.id]);

  const handleCart = () => {
    if (isProductCart) {
      removeFromCart(product.id);
      setIsProductCart(false);
    } else {
      addToCart(product);
      setIsProductCart(true);
    }
  };

 return (
  <>
      <button
              type="button"
              className="signUp-buton !bg-black !text-white mt-8 w-full py-2 rounded-4xl"
              onClick={handleCart}
            >
              {isProductCart ? "Remove from Bag" : "Add to Bag"}
            </button>

    {message && (
      <div className="message">
        {message}
      </div>
    )}
  </>
);
};

