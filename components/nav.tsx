"use client"
import { useCart, useFavorite } from "@/utils/Contexts";
import Link from "next/link";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";
import {useState, useEffect} from 'react'

export const NavBar = () => {
  const {cartItems} = useCart();


 

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
    
              <Link href={"/bag"}>
                <li className="navList">
                  <FiShoppingBag size={18} />
                  <p className="listText">Bag</p>
                  <span className="absolute -top-3 -right-2 sm:-left-2 sm:-right-0 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{cartItems.length}</span>
                </li>
              </Link>

      
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