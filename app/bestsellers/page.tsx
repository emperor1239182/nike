import { BestSales } from "./best";
import type { Product } from "@/utils/types";
export default async function BestSellers () {
    const request = await fetch("http://localhost:3000/Bestsellers.json", {
        cache : "default"
      })
    
      if(!request.ok){
        throw new Error("Failed to fetch all products");
      }
    
      const response  = await request.json()
      const data : Product[] = response.BestSellers;
    
    return (
        <>
        <BestSales data={data} />
        </>
    )
}