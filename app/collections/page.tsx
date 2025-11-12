import Image from "next/image"
import Link from "next/link";
import { CollectionNav } from "@/components/collectionsNav"
import type { Product } from "@/utils/types";
export default async function Collections () {
    const req = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Products.json`, {
        cache : "no-cache"
    })
    if(!req){
        throw new Error ("Failed to get new products");
    }
    const res = await req.json();
    const Data = res.Products;

    {/*fetch shirts */}
    const shopRequest = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/Shirt.json`,{
        cache : "no-cache"
    })
    if(!shopRequest){
        throw new Error ("Failed to fecth collections");
    }
    const response = await shopRequest.json();
    const products = response.Shirt;

    return (
        <section>
        <CollectionNav/>
        <ul className="genders">
            <li>Men</li>
            <li>Women</li>
        </ul>
        <p className="font-semibold mt-3">Must-Haves, Best Sellers & More</p>

        <ul className="flex gap-2">
        <div className="mt-4">

        <Link href="/bestsellers">
        <Image 
            src="/BoyCart.png"
            width={180}
            height={180}
            alt="best sellers"
            style={{ aspectRatio: '1 / 1' }}
            className="w-auto h-auto"
        />
        </Link>
        <p className="card">Best Sellers</p>
        </div>

        <div className="mt-4">
        <Image 
        src="/BallSpinning.png"
        width={180}
        height={180}
        alt="featured in Air Nike"
        style={{ aspectRatio: '1 / 1' }}
        className="w-auto h-auto"
        />
        <p className="card">Featured in Air Nike</p>
        </div>
        </ul>

        <Link href="/new&featured">
        <div className="mt-9 relative">
        <Image 
        src="/AlbinoGirl.png"
        width={800}
        height={50}
        alt="New and featured"
        />
        <p className="font-semibold absolute left-6 top-[50%] text-white">New & Featured</p>
        </div>
        </Link>

        <Link href="newInSport">
        <div className="mt-1 relative">
        <Image 
        src="/HolidayGirls.png"
        width={800}
        height={50}
        alt="New and featured"
        />
        <p className="font-semibold absolute left-6 top-[50%] text-white">New In Sport</p>
        </div>
        </Link>

        <div className="newCollections mt-9">
            <div className="flex justify-between">
                <h3 className="font-bold">New Arrivals</h3>
                <Link href="/new&featured">
                <p className="text-gray text-[13px]">View All</p>
                </Link>
            </div>
            
        {Data.length > 0? 
        (
        <ul className="arrivals hide-scrollbar mt-6">
          {Data.slice(1, 9).map((product : Product) => (
            <li
              key={product.id}
              className="imageTransition"
            >
              <Image
              width={100}
              height={64}
              src={product.image}
              alt={product.name}
              className="imageCard"
              />
              <p className="productName">{product.name}</p>
              <p className="productsPrice">{product.price}</p>
            </li>
          ))}
        </ul>

        ) : (<p>No products</p>)
      }
      </div>

      <div className="newCollections mt-9">
            <div className="flex justify-between">
                <h3 className="font-bold">Shop by Collection</h3>
                <Link href="/shop" className="text-gray text-[13px]">View All</Link>
            </div>
            
        {products.length > 0? 
        (
        <ul className="arrivals hide-scrollbar mt-6">
          {products.slice(1, 9).map((product : Product) => (
            <li
              key={product.id}
              className="imageTransition"
            >
              <Image
              width={100}
              height={64}
              src={product.image}
              alt={product.name}
              className="imageCard"
              />
              <p className="productName">{product.name}</p>
              <p className="productsPrice">{product.price}</p>
            </li>
          ))}
        </ul>

        ) : (<p>No products</p>)
      }
      </div>

      <div className="newCollections mt-9">
            <div className="flex justify-between">
                <h3 className="font-bold">Recommended for You</h3>
                <Link href="/recommended">
                <p className="text-gray text-[13px]">View All</p>
                </Link>
            </div>
            
        {Data.length > 0? 
        (
        <ul className="arrivals hide-scrollbar mt-6">
          {Data.slice(13, 20).map((product : Product) => (
            <li
              key={product.id}
              className="imageTransition"
            >
              <Image
              width={100}
              height={64}
              src={product.image}
              alt={product.name}
              className="imageCard"
              />
              <p className="productName">{product.name}</p>
              <p className="productsPrice">{product.price}</p>
            </li>
          ))}
        </ul>

        ) : (<p>No products</p>)
      }
      </div>


        </section>
    )
}