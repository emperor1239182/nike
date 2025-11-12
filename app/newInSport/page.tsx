import type { Product } from "@/utils/types";
import { NewSport } from "./newSport";

export default async function NewSports () {
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/SportWears.json`, {
    cache : "no-store"
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
