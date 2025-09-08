"use client"
import { NewFetched } from "@/utils/Contexts"
import { FiHeart } from "react-icons/fi";
export default function Shoes() {
     const {slides, errorMessage} = NewFetched();
    return (
        <>
        <section className="mt-5"> 
            {slides.length > 0? (
                <ul className="productsDisplay">
                    {slides.map((shoe)=>(
                        <li key={shoe.id}>
                            <div className="w-40 h-40 relative">
                            <img src={shoe.image}
                            alt="Shoes"
                            className="w-40 h-40 object-cover"
                            />
                            <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-md">
                                <FiHeart className="text-gray-600 w-3 h-3" />
                            </div>
                            </div>
                            <p className="productName font-bold">{shoe.name}</p>
                            <p className="productName text-gray-600">{shoe.description}</p>
                            <p className="productName font-bold">{shoe.price}</p>
                        </li>
                    ))}
                </ul>
            ): `${errorMessage}`}

        </section>
        </>
    )
}