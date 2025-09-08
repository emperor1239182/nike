"use client"
import { NewFetched } from "@/utils/Contexts"
import { FiHeart } from "react-icons/fi";
export default function Sportwears () {
    const {sportWears, errorMessage} = NewFetched();
    return (
        <>
        <section className="mt-5">
            {sportWears.length > 0? (
                <ul className="productsDisplay">
                    {sportWears.map((items) => (
                        <li key={items.id}>
                            <div className="w-40 h-40 relative">
                            <img src={items.image} 
                            alt="sports"
                           className="w-40 h-40 object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
                                <FiHeart className="text-gray-600 w-3 h-3" />
                            </div>
                            </div>
                            <p className="productName font-bold">{items.name}</p>
                            <p className="productName text-gray-600">{items.description}</p>
                            <p className="productName font-bold">{items.price}</p>
                        </li>
                    ))}
                </ul>
            ) : `${errorMessage}`}
        </section>
        </>
    )
}