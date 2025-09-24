"use cient"
import { FavoriteButton } from "@/components/favoriteButton"
import type { Product } from "@/utils/types"
import Image from "next/image"

export const TopsProducts = ({data }) => {
    return (
        <>
       <section className="mt-5">
    
        {data.length > 0? 
        (
          <ul className="productsDisplay">
            {data.map((product : Product) => (
              <li key={product.id} className="w-full">
                <div className="imageContainer">
                 <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="productImage"
                />
                  <div className="favorite">
                    <FavoriteButton product={product}/>
                  </div>
                </div>

                <p className="productName font-bold mt-2">{product.name}</p>
                <p className="productName text-gray-600">{product.description}</p>
                <p className="productName font-semibold">{product.price}</p>
              </li>
            ))}
          </ul>

        ) : (<p>No product found</p>)
      }
      </section>
        </>
    )
}
