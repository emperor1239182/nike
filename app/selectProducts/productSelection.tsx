"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
export const ProductSelection = () => {
    const [selectedGender, setSelectedGender] = useState("")
    const [kids, setKids] = useState("");
    return (
        <section className="productSelect" data-aos="zoom-in" suppressHydrationWarning>
            <h1 className="selectionIntro">
                First up, which product do you use the most?
            </h1>

            <div className="flex justify-between">

                <div className="flex gap-2">
                <Image src="/Jhon.png" alt="men" width={40} height={40}/>
                <p>Mens</p>
                </div>

                <input 
                type="radio" 
                id="men" 
                name="gender"
                onChange={()=> setSelectedGender("men")}
                checked={selectedGender === "men"}
                />
            </div>

            <div className="flex justify-between">

                <div className="flex gap-2">
                <Image src="/Mairah.png" alt="women" width={40} height={40}/>
                <p>Womens</p>
                </div>

                <input 
                type="radio" 
                id="women" 
                name="gender"
                onChange={()=> setSelectedGender("women")}
                checked={selectedGender === "women"}
                />
            </div>

            <p className="font-bold text-lg">Any Others?</p>

            <div className="flex justify-between">

                <div className="flex gap-2">
                <Image src="/Boy.png" alt="Boys" width={40} height={40}/>
                <p>Boys</p>
                </div>

                <input 
                type="radio" 
                id="boys" 
                name="kids"
                onChange={()=> setKids("boys")}
                checked={kids === "boys"}
                />
            </div>

            <div className="flex justify-between">

                <div className="flex gap-2">
                <Image src="/Girl.png" alt="Girls" width={40} height={40}/>
                <p>Girls</p>
                </div>

                <input 
                type="radio" 
                id="girl" 
                name="kids"
                onChange={()=> setKids("girls")}
                checked={kids === "girls"}
                />
            </div>

            <Link href="/selectSportBrand" className="regularButton">
            <button type="button">
                Next
            </button>
            </Link>

        </section>
    )
}