import { BestSales } from "./best";
import type { Product } from "@/utils/types";

export default async function BestSellers () {
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Bestsellers.json`, {
        cache : "no-store"
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