import type { Product } from "@/utils/types";
import { SportProducts } from "./sportProducts";
export default async function Sportwears () {
    const request = await fetch("http://localhost:3000/Sportwears.json", {
        cache : "default"
    })

    if(!request.ok){
        throw new Error("Failed to get products");
    }


    const response = await request.json();
    const data : Product[] = response.Sportwears;

    return (
        <>
        <SportProducts data={data}/>
        </>
    )
}