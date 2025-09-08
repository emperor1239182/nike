"use client"
import { NewFetched } from "@/utils/Contexts"
import Image from "next/image";
export default function Sportwears () {
    const {sportWears, errorMessage} = NewFetched();
    return (
        <>
        <section className="mt-5">
            {sportWears.length > 0? (
                <ul className="productsDisplay">
                    {sportWears.map((items) => (
                        <li key={items.id}>
                            <img src={items.image} 
                            alt="sports"
                           className="w-40 h-40 object-cover"
                            />
                            <p className="text-[12px]">{items.name}</p>
                        </li>
                    ))}
                </ul>
            ) : `${errorMessage}`}
        </section>
        </>
    )
}