"use client"
import { useState, useEffect } from "react"
import Image from "next/image";
import type { Post } from "@/utils/types";
import { FiMessageCircle } from "react-icons/fi";
import { LikeButton } from "./likePost";

export const PostFeed = () => {
    const [reviews, setReviews] = useState<Post[]>([]);
    

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
                {reviews.length > 0 ? 
                    <div className="userPosts">
                        {reviews.map((post) => (
                            <div key={post._id} className="flex flex-col gap-1">

                                <p className="font-semibold text-gray-700">
                                    {post.creator
                                    ? `${post.creator.firstName} ${post.creator.surName}`
                                    : "Unknown User"}
                                </p>
                                <p className="postText">{post.post}</p>

                                {post.image && (
                                    <Image
                                    src={post.image}
                                    width={100}
                                    height={200}
                                    alt={post.post || "Post image"}
                                    className="w-full h-auto object-contain rounded-2xl"
                                    />
                                )}
                                <div className="flex gap-5 items-center">
                                    <LikeButton/>
                                    <FiMessageCircle/>
                                </div>
                            
                            </div>
                        ))}
                    </div> 
                    : " "
                }
        </section>
    )
}