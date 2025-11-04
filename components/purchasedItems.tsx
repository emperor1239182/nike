"use client"
import { useState, useEffect } from "react";
import { useSession} from "next-auth/react";
import type { Product } from "@/utils/types";
import Image from "next/image";

export const PurchasedItems = () => {
    const [userPurchases, setUserPurchases] = useState<Product[]>([])
    const {data} = useSession();

    useEffect(()=>{

        const fetchPurchases = async () => {
        try {
            const req = await fetch(`/api/purchases/${data?.user?.id}/myPurchases`);
            const res = await req.json();
            setUserPurchases(res.myPurchases);
        } catch {
            console.log("error fetching user purchases")
        }
    }
    if(data?.user?.id) {
        fetchPurchases();
    }

    }, [data?.user?.id])

    
    return (
        <section className="mt-10">
            <div>
                {userPurchases.length > 0? 
                <ul className=" productsDisplay">
                    {userPurchases.map((purchases)=> (
                        <li key={purchases._id} className="w-full">
                            <div className="imageContainer">
                            {purchases.image &&
                            <Image
                                src={purchases.image}
                                width={100}
                                height={100}
                                alt={purchases.name}
                                className="productImage cursor-pointer"
                            />
                            }
                            </div>
                            <p className="postText">{purchases.name} </p>
                            <p className="postText">{purchases.price} </p>  
                          
                        </li>
                    ))}
                </ul> 
                : <p className="font-bold text-sm my-10">Your Purchase history will appear here</p>
                }
            </div>

        </section>
    )
}