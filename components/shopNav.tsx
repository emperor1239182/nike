"use client" 
import { FiArrowLeft} from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { SearchBar } from "./searchBar";
import { usePathname } from "next/navigation";
import { useDebounce } from "react-use";
import { useState, useEffect} from "react";
import { ProductDetails } from "@/components/productDetails"
import type { Product } from "@/utils/types";

export const ShopNav = () => {
    const[debouncedSearch, setDebouncedSearch] = useState("");
    const[search, setSearch] = useState("")
    const[suggestions, setSuggestions] = useState([]);
    const[selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    
    
    const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSearch(""); 
    setDebouncedSearch(""); 
    setSuggestions([]); 

};

     const router = useRouter();
     const pathName = usePathname();

     useDebounce(()=> setDebouncedSearch(search), 1000, [search]);
     
     
     useEffect(()=>{
        const getSearchedTerm = async() => {
            try{

            const req = await fetch("http://localhost:3000/Products.json");
            const res = await req.json();
            const data = res.Products;
            const term = data.filter((items : Product) => 
            items.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || 
            items.category.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
            setSuggestions(term);

            } catch{
                throw new Error("Couldn'nt load serach terms");
            }
            

        }

        getSearchedTerm();
     }, [debouncedSearch])

    return (
        <>
        <nav>
            <ul className="flex justify-between items-center ">
                <FiArrowLeft onClick={() => router.back()}/>
                <h1 className="font-bold text-xl text-center">Shop</h1>
                <SearchBar setSearch={setSearch}/>
            </ul>
        </nav>

      {debouncedSearch ? (
    <div className="suggestions">
        {suggestions.map((suggest: Product) => (
            <div key={suggest.id}>
                <p onClick={() => handleProductClick(suggest)}>{suggest.name}</p>
            </div>
        ))}
    </div>
 ) : ""}

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
        <ProductDetails selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
        </>
    )
}
