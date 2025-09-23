import Image from "next/image";

export default function Password () {
    return (
        <section>
         <div >
            <Image
            src="/NikeLogo.png"
            width={50}
            height={50}
            alt="nikeLogo"
            />
            <p className="text-2xl font-semibold max-w-2xl">Whats your password?</p>
            </div>

            <form className="w-[500px] max-w-[500px] mt-5 relative flex flex-col gap-2">
                <label htmlFor="password">Enter your password</label> 
                    <input type="password" id="password" required className="signInInputs"/>
                
                <button type="submit" className="signUp-buton  mt-10">
                        Login
                    </button>
            </form>
        </section>
    )
}