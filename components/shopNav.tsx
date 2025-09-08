"use client" 
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi"
import Link from "next/link"
export const ShopNav = () => {
    return (
        <>
        <nav>
            <ul className="flex justify-between items-center">
                <FiArrowLeft/>
                <h1 className="font-bold text-2xl text-center">Shop</h1>
                <div className="flex gap-2">
                    <FiFilter/>
                    <FiSearch/>
                </div>
            </ul>
        </nav>

        <div className="categories flex">
            <p>All</p>
            <p>All</p>
            <p>All</p>
            <p>All</p>
            <p>All</p>
            <p>All</p>
        </div>
        </>
    )
}