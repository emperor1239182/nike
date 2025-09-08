"use client"
import { NewFetched } from "@/utils/Contexts"
import { FiHeart } from "react-icons/fi";
export default function Shop () {
    const {newProducts, errorMessage} = NewFetched();
    return (
        <>
        <section className="mt-5">
        {newProducts.length > 0? 
        (
          <ul className="productsDisplay">
            {newProducts.map((products) => (
              <li key={products.id}>
                <div className="w-40 h-40 relative">
                  <img
                  src={products.image}
                  alt="img"
                  className="w-40 h-40 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
                    <FiHeart className="text-gray-600 w-3 h-3" />
                  </div>

                </div>

               <p className="productName font-bold">{products.name}</p>
               <p className="productName text-gray-600">{products.description}</p>
               <p className="productName font-bold">{products.price}</p>
              </li>
            ))
          }
          </ul>
        ) : `${errorMessage}`
      }
      </section>
        </>
    )
}