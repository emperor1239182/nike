"use client"
import type { FavoriteButtonProps } from "@/utils/types"
import { useFavorite } from "@/utils/Contexts"
import { FiHeart } from "react-icons/fi";

export const FavoriteButton : React.FC<FavoriteButtonProps> = ({product}) => {

    const {addToFavorites, removeFromFavorites, isFavorite} = useFavorite();

    const isProductFavorite = isFavorite(product.id);

    const handleToggleFavorite = () => {
        if(isProductFavorite){
            removeFromFavorites(product.id);
        } else{
            addToFavorites(product);
        }
    }
    return (
        <FiHeart 
        onClick={handleToggleFavorite}
        className={`${isProductFavorite ? "bg-red-500 text-white" : "bg-gray-200 text gray-800  w-3 h-3"}`}
        />
    )
}