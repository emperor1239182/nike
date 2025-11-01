"use client"
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Post } from "@/utils/types";
 

export const UserPosts = () => {

    const [profileReviews, setProfileReviews] = useState<Post[]>([]);
    const {data} = useSession();

    useEffect(()=> {
        const fetchPost = async () => {
            try{
                const req = await fetch(`/api/users/${data?.user?.id}/posts`);
                const res = await req.json();
                setProfileReviews(res);
            } catch {
                console.log("error fetching user posts")
            }
            
        }

        if(data?.user?.id) {
            fetchPost();
        } 
    }, [data?.user?.id])
    return (
        <section>
            <div>
                {profileReviews.length > 0? 
                <div>
                    {profileReviews.map((posts)=> (
                        <div key={posts._id}>
                            <p>{posts.post} </p>
                            {posts.image &&
                            <Image
                            src={posts.image}
                            width={100}
                            height={200}
                            alt={posts.post}
                            />
                            }
                            
                            </div>
                    ))}
                </div> 
                : <p className="font-bold text-lg">No Post Yet</p>
                }
            </div>

        </section>
    )
}