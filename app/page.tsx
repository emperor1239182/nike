import Image from "next/image";
import { FiMessageCircle, FiPenTool } from "react-icons/fi";
import Link from "next/link";
import Arrivals from "@/components/newArrivals";
import { PostFeed } from "@/components/feed";
import { LikeButton } from "@/components/likePost";
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
        <div className="text-[10px] text-gray-500 font-bold mb-4"> {day}, {dateNum} {month}</div>
        <Image
        src="/BasketballTeam.png"
        alt="Basketball Team"
        width={80}
        height={80}
        layout="responsive"
        objectFit="contain"
        />

        
        <Arrivals/>


        {/* Review posts */}

        <section className="postsInteraction my-8">

        <h1 className="font-bold text-2xl">Reviews</h1>
        <p className="review">View reviews, interact and share your thoughts...</p>
        <div className="post mt-1 flex flex-col gap-4">
        <Image 
        src="/GirlsDancing.png"
        alt="girs dancing post"
        width={50}
        height={50}
        layout="responsive"
        objectFit="contain"
        />
        <h1 className="font-bold">Soyeon Dance Challenge</h1>
        <p>Hip hop dancer Soyeon shows us an epic dance challenge in the latest playlist episode</p>

        <div className="flex gap-5 items-center mb-6">
          <LikeButton/>
          <FiMessageCircle/>
        </div>
        </div>

        <PostFeed/>

        </section>

        <div className="flex justify-center">
        <Link href="/shop" className="bg-black text-white rounded-4xl px-15 py-2 text-center ">
        
        <button type="button">Explore</button>
        
        </Link>
        </div>
        
        <div className="penTool">
          <Link href="/post">
          <FiPenTool size={20}/>
          </Link>
        </div>


        </main>

        </section>

        
    </>
  )
}
