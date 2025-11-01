"use client"
import { useState, useEffect } from "react"
import Image from "next/image";

export const PostFeed = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const req = await fetch("/api/review");
                const res = await req.json();
                setReviews(res);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        }

        fetchPost();
    }, [])

    return (
        <section className="postFeed">
            <div>
                {reviews.length > 0 ? 
                    <div>
                        {reviews.map((post) => (
                            <div key={post._id}>

                                {post.image && (
                                    <Image
                                        src={post.image}
                                        width={100}
                                        height={200}
                                        alt={post.post || "Post image"}
                                        layout="responsive"
                                         objectFit="contain"
                                    />
                                )}
                                
                                <p>{post.post}</p>
                            
                            </div>
                        ))}
                    </div> 
                    : <p className="font-bold text-lg">No Post Yet</p>
                }
            </div>
        </section>
    )
}