"use client"
import { useCart, useFavorite } from "@/utils/Contexts";
import Link from "next/link";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const {cartItems} = useCart();
  const {favorites} = useFavorite();
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle screen size changes
  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Handle client-side mounting
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMounted(true);
    }
    return () => setMounted(false);
  }, []);


 

    return (
    <>
    <nav className="menu">
            <ul className="navListContainer">
    
              <li className="navlist hidden sm:block text-xl font-extrabold">
                <Link href={"/"}>Nike</Link>
              </li>
    
              <Link href={"/"}>
                <li className="navList">
                  <FiHome size={18} />
                  <p className="listText">Home</p>
                </li>
              </Link>

              <Link href={"/collections"}>
              <li className="navList">
                <FiSearch size={18} />
                <p className="listText">Collections</p>
              </li>
              </Link>
    
              <Link href={"/favourites"}>
                <li className="navList">
                  <div className="relative">
                    <FiHeart size={18} />
                    {mounted && favorites.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[20px] h-[20px] flex items-center justify-center rounded-full">
                        {favorites.length}
                      </span>
                    )}
                  </div>
                  <p className="listText">Favourites</p>
                </li>
              </Link>

                <li
                  className="navList lg:cursor-not-allowed lg:pointer-events-none lg:opacity-60"
                  onClick={isSmallScreen ? () => router.push("/bag") : undefined}
                >
                  <div className="relative">
                    <FiShoppingBag size={18} />
                    {mounted && cartItems.length > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold min-w-[20px] h-[20px] flex items-center justify-center rounded-full">
                        {cartItems.length}
                      </span>
                    )}
                  </div>
                  <p className="listText">Bag</p>
                </li>
              

      
            <Link href={"/profile"}>
                <li className="navList">
                  <FiUser size={18} />
                  <p className="listText">Profile</p>
                </li>
              </Link>
    
            </ul>
            </nav>
    
    </>
    )
}