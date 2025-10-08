"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login () {
    const route = useRouter();
    return (
        <>
        <section className="login p-4">
            <div >
            <Image
            src="/NikeLogo.png"
            width={100}
            height={50}
            alt="nikeLogo"
            className="mx-auto my-3"
            />
            <p className="formIntro">Enter your email to login</p>
            </div>

            <form className="form">
                
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