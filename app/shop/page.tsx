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
            {newProducts.map((product) => (
              <li key={product.id} className="w-full">
                <div className="imageContainer">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="productImage"
                  />
                  <div className="favorite">
                    <FiHeart className="text-gray-600 w-3 h-3" />
                  </div>
                </div>

                <p className="productName font-bold mt-2">{product.name}</p>
                <p className="productName text-gray-600">{product.description}</p>
                <p className="productName font-bold">{product.price}</p>
              </li>
            ))}
          </ul>

        ) : `${errorMessage}`
      }
      </section>
        </>
    )
}