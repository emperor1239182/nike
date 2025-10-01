"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useCart } from "@/utils/Contexts"
import { Product } from "@/utils/types"
import { FiShoppingBag } from "react-icons/fi"
import Link from "next/link"
export const CartItems = () => {
    const [bag, setBag] = useState <Product []>([]);
    const {cartItems, removeFromCart} = useCart();

    useEffect(()=>{
        setBag(cartItems);
    }, [cartItems]);

    return (
        <section className="mx-auto p-2">
            <h3 className="text-xl font-bold mb-4">Bag</h3>

            {bag.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {bag.map((product)=>(
                        <div key={product.id} className="imageContainer">
                            <Image
                            alt={product.name}
                            src={product.image}
                            width={100}
                            height={100}
                            className="productImage cursor-pointer"
                            />
                            <p className="productName font-bold mt-2">{product.name}</p>
                            <p className="productName text-gray-600">{product.description}</p>
                            <p className="productName font-semibold">{product.price}</p>
                            <button
                            onClick={() => removeFromCart(product.id)}
                            className="mt-2  flex items-center gap-2 text-[12px] hover:text-red-700 rounded-2xl border-2 p-1 text-gray-400"
                            >
                            Remove from bag
                            </button>
                        </div>
                    ))}

                    <Link href="/checkout" className="signUp-buton col-span-auto sm:col-span-3 row-span-2">
                    <button type="button">Proceed to checkout</button>
                    </Link>

                </div>
            ) : (
            
            <div className="flex flex-col gap-10 justify-center items-center mt-20 ">
                <div className="border-1 border-black rounded-full p-2">
                    <FiShoppingBag/>
                </div>
                <p className="text-2xl text-center">Your bag is empty.  When you add products they will appear here.</p>
                
                <Link href="/shop" className="cursor-pointer">
                <button type="button" className="signUp-buton">
                    Shop Now
                </button>
                </Link>
            </div>
        )}
        </section>
    )
}