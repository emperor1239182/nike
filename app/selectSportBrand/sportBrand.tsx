"use client"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
export const Brands = () => {40
    const [activities, setActivities] = useState("");

    const activity = {
        running : {
            image: <Image src="/Ellipse 1 (4).png" alt="running" width={40} height={40}/> ,
             text: "Running",
              element: <input type="radio" onChange={()=> setActivities("running")} checked={ activities === "running"}/>
             },
        lifestyle : {
            image: <Image src="/Ellipse 1 (5).png" alt="lifestyle" width={40} height={40}/>,
             text: "Lifestyle",
              element: <input type="radio" onChange={()=> setActivities("lifestyle")} checked={ activities === "lifestyle"}/>
            },
        basketball : {
            image: <Image src="/Ellipse 1 (6).png" alt="basketball" width={40} height={40}/>,
             text: "Basketball", 
             element: <input type="radio" onChange={()=> setActivities("basketball")} checked={ activities === "basketball"}/>
            },
        soccer : {
            image: <Image src="/Ellipse 1 (7).png" alt="soccer" width={40} height={40}/>, 
            text: "Socccer", 
            element: <input type="radio" onChange={()=> setActivities("soccer")} checked={ activities === "soccer"}/>
        },
        jordan : {
            image: <Image src="/Dunk.png" alt="Jordan" width={40} height={40}/>,
             text: "Jordan",
             element: <input type="radio" onChange={()=> setActivities("jordan")} checked={ activities === "jordan"}/>
            },
        nikeByYou : {
            image: <Image src="/Tennis.png" alt="Nike By You" width={40} height={40} className="rounded-full"/>, 
            text: "Nike By You", 
            element: <input type="radio" onChange={()=> setActivities("nikeByYou")} checked={ activities === "nikeByYou"}/>
        }        
    }

    return (
        <section className="productSelect">
            <h1 className="selectionIntro">What sports, brand and collections are you interested in?</h1>

            {Object.entries(activity).map(([key, {image,text,element}])=>(
                <div key={key} className="flex justify-between">
                    <div className="flex gap-3 items-center">
                    {image}
                    <p className="font-semibold">{text}</p>
                    </div>
                    {element}
                </div>
            ))}

             <Link href="/selectShoeSize" className="regularButton">
            <button type="button">
                Next
            </button>
            </Link>

            

        </section>
    )
}