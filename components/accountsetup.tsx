"use client" 
import Link from "next/link"
import Image from "next/image"
export const SetUp = () => {
    return (
        <section className="setup">
            <Image
            src="/NikeLogo.png"
            width={70}
            height={70}
            alt="nikeLogo"
            /> 
            <p>
            Hi John,
            Welcome to Nike.
            Thanks for becoming
            a Member !
            </p>

            <Link href="/getstarted" className="regularButton">
            <button type="button">
                lets get you started
            </button>
            </Link>
        </section>
    )
}