import { AllProducts } from "./allProducts";
import type { Product } from "@/utils/types";

export default async function Shop () {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Products.json`, {
    cache : "no-store"
  })

  if(!request.ok){
    throw new Error("Failed to fetch all products");
  }

  const response  = await request.json()
  const data : Product[] = response.Products;

  return (
    <AllProducts data={data}/>
  )
}