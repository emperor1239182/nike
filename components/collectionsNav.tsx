"use client"
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import {  useRef } from "react";
export const CollectionNav = () => {

const router = useRouter();
const pathname = usePathname();
const initialPath = useRef(pathname);



    return (
        <section>
            <nav>
            <ul className="flex justify-between items-center">
                
                    <FiArrowLeft onClick={() => router.back()}/>

                {(pathname !== initialPath.current ) && (
                  <h1 className="font-bold text-xl text-center">Nike Collections</h1>
                )}
                <div className="flex gap-2 text-right">
                    <FiFilter/>
                    <FiSearch/>
                </div>
            </ul>
        </nav>
        
        </section>
    )
}