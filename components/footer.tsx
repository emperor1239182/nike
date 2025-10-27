"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTrademark } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Logo and Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-white text-2xl font-extrabold tracking-widest">NIKE</h1>
          <p className="text-sm text-gray-400 mt-2">
            Empowering athletes. Inspiring movement.
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-6 text-sm font-medium">
          <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
          <li><a href="#" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>

        {/* Social Media */}
        <div className="flex gap-5 text-gray-400">
          <a href="#" className="hover:text-white transition-colors"><FaFacebookF size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><FaInstagram size={18} /></a>
          <a href="#" className="hover:text-white transition-colors"><FaLinkedinIn size={18} /></a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 my-6 w-[90%] mx-auto"></div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500">
        <p className="flex items-center justify-center gap-1">
          Copyright <FaTrademark size={12} /> 2025 Emperor. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
