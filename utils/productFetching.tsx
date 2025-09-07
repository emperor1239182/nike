"use client"
import { useState, useEffect, createContext, useContext } from "react"
import type { ReactNode } from "react";

type ProviderProps = { children: ReactNode };




const productsContext = createContext(null);

export const GetProducts = ({children} : ProviderProps) => {
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [newProducts, setNewProducts] = useState([])

    const fetchNew = async () => {

        try {
        const response = await fetch ('/Products.json');
        setLoading(true);

        if (!response.ok){
           throw new Error("failed to fetch products");
           setLoading(false);
        }

        const data = await response.json();

        if (data.Products){
            setNewProducts(data.Products);
            console.log("products fetched successfully");
            setLoading(false);
        }
    } catch (error) {
        console.log(error);
        setErrorMessage("unable to fetch products");
        setLoading(false);
    }
        
    }

    useEffect(()=>{
        fetchNew();
    }, [])

    return (
        <productsContext.Provider value={{errorMessage, newProducts, loading}}>
            {children}
        </productsContext.Provider>
    )
    
}

export const NewFetched = ()=> useContext(productsContext);

