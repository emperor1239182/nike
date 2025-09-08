"use client"
import { NewFetched } from "@/utils/Contexts"
export default function Shop () {
    const {slides, errorMessage} = NewFetched();
    return (
        <>
        {slides.length > 0? 
        (
          <ul className="arrivals">
            {slides.map((products) => (
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
        </>
    )
}