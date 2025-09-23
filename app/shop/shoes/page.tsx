import Image from "next/image";
import { FavoriteButton } from "@/components/favoriteButton";
import type { Product } from "@/utils/types";


export default async function NikeShoes () {
    const request = await fetch("http://localhost:3000/Slides.json", {
        cache : "no-cache"
    });

    if(!request){
        throw new Error("Unable to fetch products");
    }

    const response = await request.json();
    console.log("fetched successfully");
    const data = response.Slides

    return (
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
    )
}