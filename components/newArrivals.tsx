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
          <ul className="arrivals">
            {newProducts.slice(1, 9).map((products) => (
              <li key={products.id}>
                  <img
                  src={products.image}
                  alt="img"
                  className="w-40 h-40"
                  />

               <p className="text-[12px]">{products.name}</p>
              </li>
            ))
          }
          </ul>
        ) : `${errorMessage}`
      }
        </div>
        </>
    )
}