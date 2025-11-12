import type { Product } from "@/utils/types";
import {ShoeProducts} from "@/app/shop/shoes/products"

export default async function NikeShoes () {
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Slides.json`, { cache: 'no-store' });
    
    if(!request){
        throw new Error("Unable to fetch products");
    }

    const response = await request.json();
    console.log("fetched successfully");
    const data : Product [] = response.Slides

    return (
      <ShoeProducts data={data}/>
    )
}