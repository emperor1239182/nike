import Image from "next/image";
import { NewArrivals } from "@/components/newArrivals";
export default function Home() {

  const days : string[] = [
       "Sunday", 
       "Monday", 
       "Tuesday", 
       "Wednessday", 
       "Thursday", 
       "Friday", 
       "Saturday"
    ]
    const months : string[] = [
        "January",
        "February", 
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const date = new Date()
    const day = days[date.getDay()]
    const dateNum = date.getDate()
    const month = months[date.getMonth()]



  return (
    <>
    <section className="min-h-screen flex ">
        <main  className="flex-1 max-w-2xl w-full p-3 justify-center ">

        <h1 className="font-bold text-[20px] ">Discover</h1>
        <div className="text-[10px] text-gray-500 font-bold"> {day}, {dateNum} {month}</div>
        <Image
        src="/BasketballTeam.png"
        alt="Basketball Team"
        width={100}
        height={100}
        layout="responsive"
        objectFit="contain"
        />

        <NewArrivals/>
        


        </main>

        </section>

        
    </>
  )
}
