import Image from "next/image";
import { FavoriteButton } from "@/components/favoriteButton";
import type { Product } from "@/utils/types";

export default async function Shop () {
  const response = await fetch("http://localhost:3000/Products.json", {
    cache : "no-cache"
  })

  if(!response.ok){
    throw new Error("Failed to fetch all products");
  }

  const data = await response.json()
  const shopProducts = data.Products;
  return (
    <section className="mt-5">
    
        {shopProducts.length > 0? 
        (
          <ul className="productsDisplay">
            {shopProducts.map((product : Product) => (
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
  )
}