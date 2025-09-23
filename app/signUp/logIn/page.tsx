"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login () {
    const route = useRouter();
    return (
        <>
        <section className="login">
            <div >
            <Image
            src="/NikeLogo.png"
            width={50}
            height={50}
            alt="nikeLogo"
            />
            <p className="text-2xl font-semibold max-w-2xl">Enter your email to log in</p>
            </div>

            <form className="w-[500px] max-w-[500px] mt-5 relative flex flex-col gap-2">
                
                    <label htmlFor="email">Enter your email address</label> 
                    <input type="email" id="email" required className="signInInputs"/> 
                

                <button type="button" className="signUp-buton  mt-10" onClick={()=> route.push("/signUp/logIn/password")}>
                        Next
                    </button>
            </form>
        </section>
        </>
    )
}