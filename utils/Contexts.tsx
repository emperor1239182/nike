"use client"
import { useState, createContext, useContext, useEffect } from "react"
import type { FavoritesContextType, CartContextType, Product} from "@/utils/types";

const FavouriteContext = createContext <FavoritesContextType | undefined > (undefined);


export const FavoriteProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
    const [favorites, setFavorites] = useState <Product []> (()=>{
        if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  const [message, setMessage] = useState("");


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
        setMessage("Item Added To Favorites");
        setTimeout(()=> setMessage(""), 2000)
        
    }

    const removeFromFavorites = (productId : number) => {
        setFavorites((prev)=> prev.filter((item)=> item.id !== productId ));
       setMessage("Item Removed From Favorites")
       setTimeout(()=> setMessage(""), 2000)
    }

    const isFavorite = (productId : number) => {
        return favorites.some((item)=> item.id === productId);
    }

    
    return (
        <FavouriteContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite,
            message
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

//cart context

const CartContext = createContext<CartContextType | null> (null);

export const CartProvider : React.FC<{children : React.ReactNode}> = ({children}) => {
      const [cartItems, setCartItems] = useState <Product []> (()=>{
    if(typeof window !== 'undefined'){
        const saved = localStorage.getItem('cart');
        return saved? JSON.parse(saved) : [];
    }
    return [];
  })
  const [message, setMessage] = useState("")

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (productId : Product) => {
    
        setCartItems((prev)=> {

            if(!prev.some((item)=> item.id === productId.id)){
                return [...prev, productId];
            }
            return prev;
        })
        setMessage("Added To Bag");
        setTimeout(()=> setMessage(""), 2000)
        
    }

    const removeFromCart = (productId : number) => {
        setCartItems((prev)=> prev.filter((item)=> item.id !== productId ));
       setMessage("Item Removed From Bag")
       setTimeout(()=> setMessage(""), 2000)
    }

    const isCart = (productId : number) => {
        return cartItems.some((item)=> item.id === productId);
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            message,
            addToCart,
            removeFromCart,
            isCart
        }}
        >
        {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const useCart = useContext(CartContext);
    if(!useCart){
        throw new Error("useCart must be used within a cartProvider")
    }
    return useCart;
}