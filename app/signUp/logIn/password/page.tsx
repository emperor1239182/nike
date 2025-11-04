"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";

export default function Password () {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    useEffect(() => {
        // Get email from sessionStorage
        const storedEmail = sessionStorage.getItem("loginEmail");
        if (!storedEmail) {
            router.push("/signUp/login");  // Redirect if no email
        } else {
            setEmail(storedEmail);
        }
    }, [router]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email,
                password,
                redirect: false
            });

            if(res.error) {
                setError("Invalid password");
                return;
            }

            sessionStorage.removeItem("loginEmail");  // Clean up
            router.push("/welcome");

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
                    width={50}
                    height={50}
                    alt="nikeLogo"
                    className="mx-auto my-3"
                />
                <p className="formIntro">What`&apos;`s your password?</p>
            </div>

            <form className="form" onSubmit={handleSubmit}>
                <p className="text-sm text-gray-600">{email}</p>
                <label htmlFor="password">Enter your password</label> 
                <input 
                    type="password" 
                    id="password" 
                    required 
                    className="signInInputs"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                {error && (
                    <p className="text-red-500 mt-2">{error}</p>
                )}
                
                <button type="submit" className="signUp-buton mt-10">
                    Login
                </button>
            </form>
        </section>
    )
}