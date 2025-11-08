import type { Product } from "@/utils/types";
import {ShoeProducts} from "@/app/shop/shoes/products"


export default async function NikeShoes () {
    const request = await fetch("http://localhost:3000/Slides.json");

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