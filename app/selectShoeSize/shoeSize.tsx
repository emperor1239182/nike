"use client"
import Link from "next/link";
import { useState } from "react";
export const ShoeSize = () => {
    const [selectedSize, setSelectedSize] = useState<number | null>(null);

        const sizes: number[] = [];
        for (let num = 4; num <= 16; num += 0.5) {
            sizes.push(num);
        }

        return (
                <section className="productSelect" data-aos="zoom-in-down" suppressHydrationWarning>
                        <h1 className="selectionIntro">Whats Your Shoe Size?</h1>
                        <div className="grid grid-cols-4 gap-5">
                            {sizes.map(size => (
                                <div 
                                    key={size} 
                                    className={`${selectedSize === size ? "bg-white text-black" : "bg-gray-500"} p-3 rounded text-[12px] text-center cursor-pointer`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>

                        <Link href="/" className="regularButton">
            <button type="button">
                Finish
            </button>
            </Link>
                </section>
        )
}