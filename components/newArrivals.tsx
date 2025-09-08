"use client"
import { NewFetched } from "@/utils/Contexts";
import Image from "next/image";
export const NewArrivals = () => {
      const {newProducts, loading, errorMessage} = NewFetched();
    return (
        <>
        <div className="new mt-10 w-full">
        <h1 className="font-bold text-sm">Whats new</h1>
        <p className="text-[20px] text-gray-400">The latest arrivals from Nike</p>
        {loading && 
        <p>Loading....</p>
        }
        {newProducts.length > 0? 
        (
        <ul className="arrivals hide-scrollbar">
          {newProducts.slice(1, 9).map((product) => (
            <li
              key={product.id}
              className="flex-shrink-0 w-[80%] md:w-[60%] lg:w-[40%] snap-center transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out"
              />
            </li>
          ))}
        </ul>

        ) : `${errorMessage}`
      }
        </div>
        </>
    )
}