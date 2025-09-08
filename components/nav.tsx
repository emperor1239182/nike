import Link from "next/link";
import { FiHeart, FiHome, FiUser, FiSearch, FiShoppingBag } from "react-icons/fi";


export const NavBar = () => {
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

              <Link href={"/shop"}>
              <li className="navList">
                <FiSearch size={18} />
                <p className="listText">Shop</p>
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