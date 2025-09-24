import type { Product } from "@/utils/types";
export default async function Arrivals () {
  const response = await fetch("http://localhost:3000/Products.json", {
    cache : "no-cache"
  })
  
  if(!response.ok){
    throw new Error ("Failed to get new products");
  }

  const data = await response.json();
  const products = data.Products;

  return (
    <div className="new mt-10 w-full">
        <h1 className="font-bold text-sm">Whats new</h1>
        <p className="text-[20px] text-gray-400">The latest arrivals from Nike</p>
      
        {products.length > 0? 
        (
        <ul className="arrivals hide-scrollbar">
          {products.slice(1, 9).map((product : Product) => (
            <li
              key={product.id}
              className="flex-shrink-0 w-[80%] md:w-[60%] lg:w-[40%] snap-center transition-all duration-500 ease-in-out transform hover:scale-[1.02]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-2xl shadow-xl transition-all duration-500 ease-in-out"
              />
            </li>
          ))}
        </ul>

        ) : (<p>No products</p>)
      }
    </div>
  )
}