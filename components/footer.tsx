"use client";
import { FaWhatsapp, FaTwitter, FaTrademark } from "react-icons/fa";
import { SiGmail, SiDiscord } from "react-icons/si";

import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-white text-2xl font-extrabold tracking-widest">NIKE</h1>
          <p className="text-sm text-gray-400 mt-2">
            Empowering athletes. Inspiring movement.
          </p>
        </div>

        
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="shop" className="hover:text-white transition-colors">Shop</Link></li>
          <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
          <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
        </ul>

        
        <div className="flex gap-5 text-gray-400">
          <Link href="https://wa.me/+2349031493999" className="hover:text-white transition-colors"><FaWhatsapp size={18} /></Link>
          <Link href="https://x.com/emperor_dev01" className="hover:text-white transition-colors"><FaTwitter size={18} /></Link>
          <Link href="https://discord.gg/S8xesNw5" className="hover:text-white transition-colors"><SiDiscord size={18} /></Link>
          <Link href="mailto:emmybanks03@gmail.com" className="hover:text-white transition-colors"><SiGmail size={18} /></Link>
        </div>
      </div>

      <div className="border-t border-gray-800 my-6 w-[90%] mx-auto"></div>

      <div className="text-center text-sm text-gray-500">
        <p className="flex items-center justify-center gap-1">
          Copyright <FaTrademark size={12} /> 2025 Emperor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
