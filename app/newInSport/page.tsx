import type { Product } from "@/utils/types";
import { NewSport } from "./newSport";
export default async function NewSports () {
    const request = await fetch("http://localhost:3000/SportWears.json", {
    cache : "default"
  })

  if(!request.ok){
    throw new Error("Failed to fetch all products");
  }

  const response  = await request.json()
  const data : Product[] = response.Sportwears;
    return (
        <>
        <NewSport data={data}/>
        </>
    )
}
