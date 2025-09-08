"use client"
import { NewFetched } from "@/utils/Contexts"
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
                  <img
                  src={products.image}
                  alt="img"
                  className="w-40 h-40 object-cover"
                  />

               <p className="text-[12px]">{products.name}</p>
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