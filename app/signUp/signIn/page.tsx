"use client"
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function SignIn () {
    const [inputs, setInputs] = useState({
        email : "",
        password : "",
        firstName : "",
        surName : "",
        DOB : ""
    })
    const [error, setError] = useState("");

    console.log(inputs);
    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try{

            const resUser = await fetch("/api/userExists", {
                method : "POST",
                headers : {
                    "content-type" : "application/json"
                },
                body : JSON.stringify({email : inputs.email})
            });

            const {user} = await resUser.json();

            if(user){
                setError("User already exists");
                return;
            }

            const res = await fetch("/api/register", {
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(inputs)
            });

            const data = await res.json();

            if(res.ok){
                const form = e.target;
                form.reset();
                setError(data.message);
                router.push('/signUP/login');
            } else {
                console.log("User registration failed")
                setError(data.message);
            }

        } catch(error){
            console.log(error);
            setError("Something went wrong. Please try again.");
        }
    }

    return (
        <>
        <section className="signIn flex flex-col justify-center">
            <div>
            <Image
            src="/NikeLogo.png"
            width={50}
            height={50}
            alt="nikeLogo"
            />
            <p className="text-xl font-semibold max-w-2xl">Now lets make you a Nike Member</p>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                    {error}
                </div>
            )}
            <form onSubmit={handleSubmit} className="w-[100%] max-w-[500px] mt-5 relative flex flex-col gap-2 px-2">

                <div>
                <label htmlFor="email">Your email address</label> <br/>
                <input 
                type="email" 
                id="email" 
                required 
                placeholder="enter your email" 
                className="signInInputs w-full"
                onChange={(e) => setInputs({...inputs, email: e.target.value})}
                />
                </div>

                <div className="fields">
                    <div>
                        <label htmlFor="firstName">First name</label> <br/>
                        <input 
                        type="text" 
                        id="firstName" 
                        required 
                        placeholder="First name" 
                        className="signInInputs"
                        onChange={(e) => setInputs({...inputs, firstName: e.target.value})}
                        />
                    </div>

                    <div>
                        <label htmlFor="surnName">Surname name</label> <br/>
                        <input 
                        type="text" 
                        id="surnName" 
                        required 
                        placeholder="Surn name" 
                        className="signInInputs"
                        onChange={(e) => setInputs({...inputs, surName: e.target.value})}
                        />
                    </div>

                </div>

                    <div>
                        <label htmlFor="password">Password</label> <br/>
                        <input 
                        type="password" 
                        id="password" 
                        required 
                        placeholder="password" 
                        className="signInInputs w-full"
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                        <p className="passCheck">Minimun of 8 characters</p>
                        <p className="passCheck">Uppercase, lowercase letters and one number</p>
                    </div>

                    <div>
                        <label htmlFor="DOB">D.O.B</label> <br/>
                        <input 
                        type="date" 
                        id="DOB" 
                        required 
                        placeholder="date of birth" 
                        className="signInInputs w-full"
                        onChange={(e) => setInputs({...inputs, DOB: e.target.value})}
                        />
                        <p className="passCheck">Get a Nike member reward on your birthday</p>
                    </div>    

                    <div className="flex text-sm items-center gap-3">
                        <input type="checkbox"/>
                        <p>Sign up for emails to get updates from Nike on producs, offers and your member benefits</p>
                    </div>

                    <div className="flex text-sm items-center gap-3">
                        <input type="checkbox" required/>
                        <p>I agree to Nikes privacy policy and terms of use</p>
                    </div>

                    
                    <button type="submit" className="signUp-buton w-[300px] m-auto mt-10">
                        Create Account
                    </button>
                   
            </form>

        </section>
        </>
    )
}