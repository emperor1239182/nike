import Image from "next/image"
import { CollectionNav } from "@/components/collectionsNav"
export default function Collections () {
    return (
        <section>
        <CollectionNav/>
        <h2 className="font-bold text-lg mt-10">Collections</h2>
        <ul className="genders">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <p className="font-bold mt-3">Must-Haves, Best Sellers & More</p>

        <ul className="flex gap-4">
        <div className="mt-4">
        
        <Image 
            src="/BoyCart.png"
            width={150}
            height={150}
            alt="best sellers"
            layout="intrinsic"
            style={{ aspectRatio: '1 / 1' }}
        />
        <p className="cards">Best Sellers</p>
        </div>
        
        <div className="mt-4">
        <Image 
        src="/BallSpinning.png"
        width={150}
        height={150}
        alt="featured in Air Nike"
        layout="intrinsic"
        style={{ aspectRatio: '1 / 1' }}
        />
        <p className="cards">Featured in Air Nike</p>
        </div>
        </ul>


        </section>
    )
}