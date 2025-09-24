"use client"
import { useState, createContext, useContext, useEffect } from "react"
import type { FavoritesContextType, Product} from "@/utils/types";

const FavouriteContext = createContext <FavoritesContextType | undefined > (undefined);


export const FavoriteProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [favorites, setFavorites] = useState <Product []> (()=>{
        if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

    // Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


    const addToFavorites = (product : Product) => {
        setFavorites((prev)=> {

            //check if product already is a favorite

            if(!prev.some((item)=> item.id === product.id)){
                return [...prev, product];
            }
            return prev;
        })
    }

    const removeFromFavorites = (productId : number) => {
        setFavorites((prev)=> prev.filter((item)=> item.id !== productId ));
    }

    const isFavorite = (productId : number) => {
        return favorites.some((item)=> item.id === productId);
    }

    return (
        <FavouriteContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite
        }}
        >
            {children}
        </FavouriteContext.Provider>
    )
}

export const useFavorite = () => {
    const context = useContext(FavouriteContext);
    if(!context){
        throw new Error ('useFavorites must be used within a FavoritesProvider')
    }
    return context;
}