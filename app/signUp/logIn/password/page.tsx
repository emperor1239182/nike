"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Password () {
    const route = useRouter()


    return (
        <section>
         <div >
            <Image
            src="/NikeLogo.png"
            width={50}
            height={50}
            alt="nikeLogo"
            className="mx-auto my-3"
            />
            <p className="formIntro">Whats your password?</p>
            </div>

            <form className="form">
                <label htmlFor="password">Enter your password</label> 
                    <input type="password" id="password" required className="signInInputs"/>
                
                <button type="submit" className="signUp-buton  mt-10" onClick={(e)=> { route.push("/welcome"); e.preventDefault()}}>
                        Login
                    </button>
            </form>
        </section>
    )
}