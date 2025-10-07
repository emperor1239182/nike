import type { Product } from "@/utils/types";
import { Recommend } from "./recommended";
export default async function Recommended () {
    const request = await fetch("http://localhost:3000/Products.json", {
    cache : "default"
  })

  if(!request.ok){
    throw new Error("Failed to fetch all products");
  }

  const response  = await request.json()
  const data : Product[] = response.Products;
    return (
        <>
        <Recommend data={data}/>
        </>
    )
}