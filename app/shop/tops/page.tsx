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
                        <li key={shirt.id} className="w-full">
                            <div className="imageContainer">
                            <img src={shirt.image}
                            alt="Tops and shirt"
                            className="productImage"
                            />
                            <div className="favorite">
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