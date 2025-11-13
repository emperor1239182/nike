"use client"
import { FiArrowLeft} from "react-icons/fi"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {  useEffect, useRef, useState} from "react";
import { SearchBar } from "./searchBar";
import type { Product } from "@/utils/types";
import { useDebounce } from "react-use";
import { ProductDetails } from "./productDetails";

export const CollectionNav = () => {

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
const pathname = usePathname();
const initialPath = useRef(pathname);

useDebounce(()=> setDebouncedSearch(search), 1000, [search]);
     
     
     useEffect(()=>{
        const getSearchedTerm = async() => {
            try{

            const req = await fetch("/Products.json");
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
        <section>
            <nav>
            <ul className="flex justify-between items-center">
                    <FiArrowLeft onClick={() => router.back()}/>
                        <h2 className="font-bold text-lg">Collections</h2>

                {(pathname !== initialPath.current ) && (
                  <h1 className="font-bold text-xl text-center">Nike Collections</h1>
                )}
        <SearchBar search={search} setSearch={setSearch}/>
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
        
        <ProductDetails selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
        </section>
    )
}