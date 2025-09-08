"use client"
import { NewFetched } from "@/utils/Contexts"
import { FiHeart } from "react-icons/fi";
export default function Shirts() {
     const {shirts, errorMessage} = NewFetched();
    return (
        <>
        <section className="mt-5"> 
            {shirts.length > 0? (
                <ul className="productsDisplay">
                    {shirts.map((shirt)=>(
                        <li key={shirt.id}>
                            <div className="w-40 h-40 relative">
                            <img src={shirt.image}
                            alt="Tops and shirt"
                            className="w-40 h-40 object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
                                <FiHeart className="text-gray-600 w-3 h-3" />
                            </div>
                            </div>
                            <p className="productName font-bold">{shirt.name}</p>
                            <p className="productName text-gray-600">{shirt.description}</p>
                            <p className="productName font-bold">{shirt.price}</p>
                        </li>
                    ))}
                </ul>
            ): `${errorMessage}`}

        </section>
        </>
    )
}