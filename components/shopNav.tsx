"use client" 
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/navigation";



export const ShopNav = () => {
     const router = useRouter();
    return (
        <>
        <nav>
            <ul className="flex justify-between items-center ">
                <FiArrowLeft onClick={() => router.back()}/>
                <h1 className="font-bold text-xl text-center">Shop</h1>
                <div className="flex gap-2">
                    <FiFilter/>
                    <FiSearch/>
                </div>
            </ul>
        </nav>

        <div className="categories">

           <Link href="/shop">
            <p>All</p> 
            </Link>

            <Link href="/shop/tops" >
            <p>Tops & T-Shirts</p> 
            </Link>

            <Link href="/shop/sportWears">
            <p className="cursor-pointer">Sport Wears</p>
            </Link>

            <Link href="/shop/shoes" >
            <p>Shoes</p> 
            </Link>
            
        
        </div>
        </>
    )
}