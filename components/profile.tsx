"use client"
import { signOut,  useSession} from "next-auth/react";
import { FiUser } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const UserProfile = () => {

    const {data} = useSession();
    const name = data?.user?.name?.split("  ");
    const route = useRouter();

    return (
        <section className="flex flex-col gap-10">

            <div className="details mx-auto">
                <div className="rounded-full w-12 h-12 flex justify-center items-center bg-gray-400 o mx-auto"><FiUser/></div>
                <p className="font-bold">{name}</p>
                <button  onClick={()=> signOut()} type="button" className="rounded-full px-4 py-2 border-1 text-sm font-bold">Logout</button>
            </div>

            <div className="userNav">
                <p onClick={()=> route.push("/profile")}>Posts</p>
                <p onClick={()=> route.push("/purchases")}>Purchases</p>
            </div>

        </section>
    )
}