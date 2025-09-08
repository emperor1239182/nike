"use client"
import type { ReactNode } from "react"
import { useEffect, useState, createContext, useContext } from "react"

type ProviderProps = { children: ReactNode };
const productsContext = createContext(null);

export const GetProducts = ({children} : ProviderProps) => {
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [newProducts, setNewProducts] = useState([]);
    const [slides, setSlides] = useState([]);
    const [sportWears, setSportWears] = useState([]);
    const [shirts, setShirt] = useState([]);
    

    const fetchNew = async () => {
        setLoading(true);
        
        try {
            const response = await fetch ('/Products.json');

            if(!response.ok){
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            if(data.Products){
                setNewProducts(data.Products);
                console.log('Products fetched successfully');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Unable to fetch products');
        } finally{
            setLoading(false);
        }
    }

    {/* fetch slide products */}
    const fetchSlides = async () => {
        setLoading(true);
        
        try {
            const response = await fetch ('/Slides.json');

            if(!response.ok){
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            if(data.Slides){
                setSlides(data.Slides);
                console.log('Products fetched successfully');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Unable to fetch products');
        } finally{
            setLoading(false);
        }
    }

    {/* fetch sportwears products */}
    const fetchSportWears = async () => {
        setLoading(true);
        
        try {
            const response = await fetch ('/Sportwears.json');

            if(!response.ok){
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            if(data.Sportwears){
                setSportWears(data.Sportwears);
                console.log('Products fetched successfully');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Unable to fetch products');
        } finally{
            setLoading(false);
        }
    }

    const fetchShirt = async () => {
        setLoading(true);
        
        try {
            const response = await fetch ('/Shirt.json');

            if(!response.ok){
                throw new Error('Failed to fetch products');
            }
            const data = await response.json();

            if(data.Shirt){
                setShirt(data.Shirt);
                console.log('Products fetched successfully');
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Unable to fetch products');
        } finally{
            setLoading(false);
        }
    }

    {/* call the fetch sportwears function */}
    const handleFetchSportwears = () => {
        fetchSportWears();
    }

    {/* call the fetch slides function */}
     const handleFetchSlides = () => {
        fetchSlides();
    }

    {/* call the fetch shirts function */}
    const handleFetchShirts = () => {
        fetchShirt();
    }

   

    useEffect(()=>{
        fetchNew();
        
    }, []);



    return (
        <productsContext.Provider value={{errorMessage, loading, newProducts, slides, sportWears, shirts, handleFetchSportwears, handleFetchSlides, handleFetchShirts}}>
            {children}
        </productsContext.Provider>
    )
}

export const NewFetched = () => useContext(productsContext);