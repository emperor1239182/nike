"use client"
import { NewFetched } from "@/utils/productFetching";
export const NewArrivals = () => {
      const {newProducts, errorMessage, loading} = NewFetched();
    return (
        <>
        <div className="new mt-10">
        <h1 className="font-bold text-sm">Whats new</h1>
        <p className="text-[20px] text-gray-400">The latest arrivals from Nike</p>
        {loading && 
        <p>Loading....</p>
        }
        {newProducts.length > 0? 
        (
          <ul className="arrivals">
            {newProducts.slice(1, 17).map((products) => (
              <li key={products.id}>
               <img src={products.image} className="w-40 h-40 object-fill"/>
               <p className="text-[10px]">{products.name}</p>
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