"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Login () {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Check if email exists
            const res = await fetch("/api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });


            if(!res.ok) {
                setError("Email not found");
                console.log("No user")
                return;
            }

            // Store email in sessionStorage and go to password page
            sessionStorage.setItem("loginEmail", email);
            router.push("/signUp/logIn/password");

        } catch (error) {
             console.log(error);
             setError("Something went wrong. Please try again.");
        }
    }

    return ( 
        <section className="login p-4">
            <div>
                <Image
                    src="/NikeLogo.png"
                    width={100}
                    height={50}
                    alt="nikeLogo"
                    className="mx-auto my-3"
                />
                <p className="formIntro">Enter your email to login</p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email address</label> 
                <input 
                    type="email" 
                    id="email" 
                    required 
                    className="signInInputs"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                /> 

                {error && (
                    <p className="text-red-500 mt-2">{error}</p>
                )}
                
                <button type="submit" className="signUp-buton mt-10">
                    Next
                </button>
            </form>
        </section>
    )
}