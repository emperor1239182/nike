import { FiHeart } from "react-icons/fi"
import Image from "next/image";
export default async function Sportwears () {
    const request = await fetch("http://localhost:3000/Sportwears.json", {
        cache : "no-cache"
    })

    if(!request.ok){
        throw new Error("Failed to get products");
    }


    const response = await request.json();
    const data = response.Sportwears;

    return (
        <>
        <section className="mt-5">
    
        {data.length > 0? 
        (
          <ul className="productsDisplay">
            {data.map((product) => (
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
                    <FiHeart className="text-gray-600 w-3 h-3" />
                  </div>
                </div>

                <p className="productName font-bold mt-2">{product.name}</p>
                <p className="productName text-gray-600">{product.description}</p>
                <p className="productName font-semibold">{product.price}</p>
              </li>
            ))}
          </ul>

        ) : (<p>No Product found</p>)
      }
      </section>
        </>
    )
}