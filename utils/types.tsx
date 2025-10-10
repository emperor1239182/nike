export interface Product {
    id : number;
    name : string;
    price : number;
    image : string;
    description : string;
    overview : string;
    category : string
}

export interface FavoritesContextType {
    favorites : Product [];
    addToFavorites : (product : Product) => void;
    removeFromFavorites : (product : number) => void;
    isFavorite : (productId : number) => boolean;
    message : string;
    clearAllFavorites : () => void;
}

export interface CartContextType {
    cartItems : Product [];
    addToCart : (product : Product) => void;
    removeFromCart : (product : number) => void;
    isCart : (productId : number) => boolean;
    purchased : () => void;
    message : string;
    purchasedMessage : string;
    setPurchasedMessage : (msg: string) => void;
    clearAllCart : () => void;
}
export type FavoriteButtonProps = {
    product : Product
}

export type Recommended = {
    recommendedShoes : Product [];
    recommendedClothes : Product [];
    recommendedSports : Product [];
}

export interface ProductDetailsProps {
  selectedProduct: Product | null;
  setSelectedProduct?: (product: Product | null) => void;
}
