import type { Product } from "@/utils/types";
import { TopsProducts } from "./topsProducts";

export default async function Shirts() {
   
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Shirt.json`, {
        cache : "no-store"
    });


    if(!request.ok){
        throw new Error ("Unable to get tops&shirts");
    }
    

    const response = await request.json();
    const data : Product[] = response.Shirt;
    
    return (
      <TopsProducts data={data}/>
    )
    
}