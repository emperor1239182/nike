import Link from "next/link"
export default function SignUp ()  {
    return (
        <>
        <section className="signUp">

            <div className="intro flex flex-col gap-5 text-white absolute bottom-20">

                <img src="/NikeLogo.png" className="w-20"/>
                
                <p className="font-semibold text-xl"> Nike App <br/> Bringing Nike members the products, inspiration and stories in sport.</p>

                <div className="buttons flex gap-2 justify-center items-center">
                <Link href="/signUp/logIn">
                <button className="signUp-buton">Login</button>
                </Link> 
                <Link href="/signUp/signIn">
                <button className="signUp-buton">Sign in</button>
                </Link>
                </div>

            </div>

            
        </section>
        </>
    )
}