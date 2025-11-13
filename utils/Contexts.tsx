"use client"
import { useState, createContext, useContext, useEffect, ReactNode} from "react"
import type { FavoritesContextType, CartContextType, Product, Recommended, FilterContextType} from "@/utils/types";

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

    const clearAllFavorites = () => {
    setFavorites([]);
    setMessage("All favorites removed");
    setTimeout(() => setMessage(""), 2000);
    }

    
    return (
        <FavouriteContext.Provider value={{
            favorites,
            addToFavorites,
            removeFromFavorites,
            isFavorite,
            message,
            clearAllFavorites
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
  const [purchasedMessage, setPurchasedMessage] = useState("")

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

    const purchased = () => {
    setPurchasedMessage("Successfully purchsed all items");
    setCartItems([]);
}

const clearAllCart = () => {
    setCartItems([]);
    setMessage("All favorites removed");
    setTimeout(() => setMessage(""), 2000);
    }





    return (
        <CartContext.Provider value={{
            cartItems,
            message,
            addToCart,
            removeFromCart,
            isCart,
            purchased,
            purchasedMessage,
            setPurchasedMessage,
            clearAllCart
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

//Recommended products context

const RecommendedContext = createContext<Recommended | null>(null);

export const RecommendedProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [recommendedShoes, setRecommendedShoes] = useState<Product[]>([]);
    const [recommendedClothes, setRecommendedClothes] = useState<Product[]>([]);
    const [recommendedSports, setRecommendedSports] = useState<Product[]>([]);
    
    useEffect(() => {
        const recommend = async () => {
            try {
                const req = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/Products.json`);
                const res = await req.json();
                const data: Product[] = res.Products;
                
                const recommendedShoeProducts = data.filter((items) => items.category === "Shoe");
                const recommendedClothProducts = data.filter((items) => items.category === "Clothing");
                const recommendedSportProducts = data.filter((items) => items.category === "Sport");

                setRecommendedShoes(recommendedShoeProducts);
                setRecommendedClothes(recommendedClothProducts);
                setRecommendedSports(recommendedSportProducts);

            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        recommend();
    }, []); 

    return (
        <RecommendedContext.Provider value={{
            recommendedShoes,
            recommendedClothes,
            recommendedSports
        }}>
            {children}
        </RecommendedContext.Provider>
    );
}

export const useRecommended = () => {
    const context = useContext(RecommendedContext);
    if (!context) {
        throw new Error("useRecommended must be used within a RecommendedProvider");
    }
    return context; 
}





const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  return (
    <FilterContext.Provider value={{ filteredProducts, setFilteredProducts }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilterContext must be used within FilterProvider');
  }
  return context;
};