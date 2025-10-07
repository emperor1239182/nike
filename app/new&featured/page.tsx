import { NewProducts } from "./new";
import type { Product } from "@/utils/types";
export default async function NewFeatured () {
    const request = await fetch("http://localhost:3000/New.json", {
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