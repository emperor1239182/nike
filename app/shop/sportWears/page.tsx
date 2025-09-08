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
                        <li key={items.id} className="w-full">
                            <div className="imageContainer">
                            <img src={items.image} 
                            alt="sports"
                           className="productImage"
                            />
                            <div className="favorite">
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