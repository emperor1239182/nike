export interface Product {
    id : number;
    name : string;
    price : number;
    image : string;
    description : string
}

export interface FavoritesContextType {
    favorites : Product [];
    addToFavorites : (product : Product) => void;
    removeFromFavorites : (product : number) => void;
    isFavorite : (productId : number) => boolean;
    message : string;
}

export interface CartContextType {
    cartItems : Product [];
    addToCart : (product : Product) => void;
    removeFromCart : (product : number) => void;
    isCart : (productId : number) => boolean;
    message : string;
}
export type FavoriteButtonProps = {
    product : Product
}