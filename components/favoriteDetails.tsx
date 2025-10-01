"use client"
import Image from "next/image";
import { useCart } from "@/utils/Contexts";

export const FavoriteDetails = ({ selectedProduct, setSelectedProduct }) => {
    const {addToCart} = useCart();
  return (
    <>
      {selectedProduct && (
        <div className="fixed inset-0 z-40 flex justify-center items-end">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 opacity-100"
            onClick={() => setSelectedProduct(null)} 
          />

          <div
            className={`productDetails z-50 ${
              selectedProduct ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-2 right-4 text-gray-500 text-lg hover:text-black"
            >
              ✕
            </button>

            <div className="flex justify-between gap-4 border-b-2 border-gray-400 p-2">
              <Image
                src={selectedProduct.image}
                width={150}
                height={100}
                alt={selectedProduct.name}
                className="w-40 h-40 object-cover"
              />
              <div className="flex flex-col h-auto">
                <div>
                  <p className="mt-2 font-semibold">{selectedProduct.name}</p>
                  <p className="text-gray-600">{selectedProduct.description}</p>
                </div>
                <p className="font-bold mt-auto">{selectedProduct.price}</p>
              </div>
            </div>

            <div className="mt-3">
              <h4 className="text-lg font-bold mb-2">Size</h4>
              <div className="arrivals px-0 hide-scrollbar gap-2">
                <p className="size">L (W 10-13/M 8-12)</p>
                <p className="size">M (W 8-10/M 6-8)</p>
                <p className="size">S (W 6-8/M 4-6)</p>
                <p className="size">XL (W 12-14/M 10-12)</p>
              </div>
            </div>

            <button
              type="button"
              className="signUp-buton !bg-black !text-white mt-8 w-full py-2 rounded-4xl"
              onClick={()=> {addToCart(selectedProduct);  setSelectedProduct(null)}}
            >
              Add To Bag
            </button>

       
          </div>
          
        </div>
      )}

    </>
  );
};
