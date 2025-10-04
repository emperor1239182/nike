"use client"
import { useCart, useFavorite } from "@/utils/Contexts";
import Link from "next/link";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import {useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

export const NavBar = () => {
  const {cartItems} = useCart();
  const router = useRouter();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth < 1024);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
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
                  <FiHeart size={18} />
                  <p className="listText">Favourites</p>
                </li>
              </Link>

                <li
                  className="navList lg:cursor-not-allowed lg:pointer-events-none lg:opacity-60"
                  onClick={isSmallScreen ? () => router.push("/bag") : undefined}
                >
                  <FiShoppingBag size={18} />
                  <p className="listText">Bag</p>
                  <span className="absolute -top-3 -right-2 sm:-left-2 sm:-right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartItems.length}</span>
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