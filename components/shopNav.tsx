"use client" 
import { FiArrowLeft} from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { SearchBar } from "./searchBar";
import { usePathname } from "next/navigation";

export const ShopNav = () => {

     const router = useRouter();
     const pathName = usePathname();

    return (
        <>
        <nav>
            <ul className="flex justify-between items-center ">
                <FiArrowLeft onClick={() => router.back()}/>
                <h1 className="font-bold text-xl text-center">Shop</h1>
                <SearchBar/>
            </ul>
        </nav>

        <div className="categories">

           <Link href="/shop" className={`${pathName === "/shop" ? "activeLinks" : ""}`}>
            <p>All</p> 
            </Link>

            <Link href="/shop/tops" className={`${pathName === "/shop/tops" ? "activeLinks" : ""}`}>
            <p>Tops & T-Shirts</p> 
            </Link>

            <Link href="/shop/sportWears" className={`${pathName === "/shop/sportWears" ? "activeLinks" : ""}`}>
            <p className="cursor-pointer">Sport Wears</p>
            </Link>

            <Link href="/shop/shoes" className={`${pathName === "/shop/shoes" ? "activeLinks" : ""}`}>
            <p>Shoes</p> 
            </Link>
            
        
        </div>
        </>
    )
}