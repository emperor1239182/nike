"use client" 
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi"
import Link from "next/link"
import { NewFetched } from "@/utils/Contexts"
import { useRouter } from "next/navigation";



export const ShopNav = () => {
     const router = useRouter();
    const {handleFetchSportwears, handleFetchSlides} = NewFetched();
    return (
        <>
        <nav>
            <ul className="flex justify-between items-center">
                <FiArrowLeft onClick={() => router.back()}/>
                <h1 className="font-bold text-2xl text-center">Shop</h1>
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

            <Link href="/tops">
            <p>Tops & T-Shirts</p> 
            </Link>

            <Link href="/shop/sportWears" onClick={() => {
            console.log('Fetched sports');
            handleFetchSportwears();
            }}>
            <p className="cursor-pointer">Sport Wears</p>
            </Link>

            <Link href="/shoes">
            <p>Shoes</p> 
            </Link>
            
        
        </div>
        </>
    )
}