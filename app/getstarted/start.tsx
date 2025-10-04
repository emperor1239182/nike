"use client"
import Link from "next/link"
export const Start = () => {
    return (
        <section className="personalize">
            <p className="absolute top-10 w-[80%] text-white font-bold text-xl">
                To personallze your experience and connect you to sport, weve got a few questions for you.
            </p>

            <Link href="/selectProducts" className="regularButton absolute bottom-20 right-[25%] left-[25%]">
            <button type="button" >
                Get Started
            </button>
            </Link>

        </section >
    )
}