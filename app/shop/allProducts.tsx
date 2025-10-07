"use client"
import { FavoriteButton } from "@/components/favoriteButton"
import { ProductDetails } from "@/components/productDetails"
import type { Product } from "@/utils/types"
import Image from "next/image"
import { useState } from "react"


export const AllProducts = ({data} : {data : Product[]} ) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductDetails = (product: Product) => {
      setSelectedProduct(product); // store the clicked product
    };

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
                    className="productImage cursor-pointer"
                    onClick={() => handleProductDetails(product)}
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

      <ProductDetails selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      </section>
        </>
    )
}

