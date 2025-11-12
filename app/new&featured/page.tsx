import { NewProducts } from "./new";
import type { Product } from "@/utils/types";
export default async function NewFeatured () {
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/New.json`, {
        cache : "default"
      })
    
      if(!request.ok){
        throw new Error("Failed to fetch all products");
      }
    
      const response  = await request.json()
      const data : Product[] = response.New;
    
    return (
        <>
        <NewProducts data={data}/>
        </>
    )
}