export interface Product {
    _id : "";
    id: number;
    name: string;
    price: string; 
    image: string;
    description: string;
    overview: string;
    category: string;
    gender: string;
}

export interface FavoritesContextType {
    favorites: Product[];
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (product: number) => void;
    isFavorite: (productId: number) => boolean;
    message: string;
    clearAllFavorites: () => void;
}

export interface CartContextType {
    cartItems: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (product: number) => void;
    isCart: (productId: number) => boolean;
    purchased: () => void;
    message: string;
    purchasedMessage: string;
    setPurchasedMessage: (msg: string) => void;
    clearAllCart: () => void;
}

export type FavoriteButtonProps = {
    product: Product;
}

export type Recommended = {
    recommendedShoes: Product[];
    recommendedClothes: Product[];
    recommendedSports: Product[];
}

export interface ProductDetailsProps {
    selectedProduct: Product | null;
    setSelectedProduct?: (product: Product | null) => void;
}

export interface FilterState {
    gender: string[];
    priceRange: string[];
    category: string[];
    sort: string;
}

export type FilterAction =
    | { type: 'SET_GENDER'; payload: string[] }
    | { type: 'SET_PRICE_RANGE'; payload: string[] }
    | { type: 'SET_CATEGORY'; payload: string[] }
    | { type: 'SET_SORT'; payload: string }
    | { type: 'RESET_FILTERS' }; 

export interface SearchFilterProps {
    setFilter: (value: boolean) => void;
}

export interface FilterContextType {
    filteredProducts: Product[];
    setFilteredProducts: (products: Product[]) => void;
}

export interface Post {
    _id: string;
    post: string;
    image?: string;
    creator: {
        _id: string;
        firstName: string;
        surName: string;
    };
}
export type PostField = {
  image?: File | null;
  imagePreview?: string | null;
  text?: string;
};

export interface PostFieldsProps {
  post: PostField;
  setPost: React.Dispatch<React.SetStateAction<PostField>>;
  submitting: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  type: string;
};


