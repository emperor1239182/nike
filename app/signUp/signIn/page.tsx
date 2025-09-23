import Image from "next/image"
export default function SignIn () {
    return (
        <>
        <section className="signIn">
            <div>
            <Image
            src="/NikeLogo.png"
            width={50}
            height={50}
            alt="nikeLogo"
            />
            <p className="text-xl font-semibold max-w-2xl">Now lets make you a Nike Member</p>
            </div>

            <form className="w-[500px] max-w-[500px] mt-5 relative flex flex-col gap-2">
                <div>
                <label htmlFor="email">Your email address</label> <br/>
                <input type="email" id="email" required placeholder="enter your email" className="signInInputs w-full"/>
                </div>
                <div className="fields">
                    <div>
                        <label htmlFor="firstName">First name</label> <br/>
                        <input type="text" id="firstName" required placeholder="First name" className="signInInputs"/>
                    </div>

                    <div>
                        <label htmlFor="surnName">Surname name</label> <br/>
                        <input type="text" id="surnName" required placeholder="Surn name" className="signInInputs"/>
                    </div>
                </div>

                    <div>
                        <label htmlFor="password">Password</label> <br/>
                        <input type="password" id="password" required placeholder="password" className="signInInputs w-full"/>
                        <p className="passCheck">Minimun of 8 characters</p>
                        <p className="passCheck">Uppercase, lowercase letters and one number</p>
                    </div>

                    <div>
                        <label htmlFor="DOB">D.O.B</label> <br/>
                        <input type="date" id="DOB" required placeholder="date of birth" className="signInInputs w-full"/>
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