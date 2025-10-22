"use client"
import Link from "next/link"
import Image from "next/image"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export const SetUp = () => {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/signUp/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    const firstName = session?.user?.name?.split(" ")[0] || "there";

    return (
        <section className="setup">
            <Image
                src="/NikeLogo.png"
                width={70}
                height={70}
                alt="nikeLogo"
            /> 
            <p>
                Hi <span className="font-bold text-xl">{firstName}</span>,
                Welcome to Nike.
                Thanks for becoming
                a Member!
            </p>

            <Link href="/getstarted" className="regularButton">
                <button type="button">
                    Let's get you started
                </button>
            </Link>
        </section>
    )
}