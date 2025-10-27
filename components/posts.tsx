"use client" 
import { PostFields } from "./postFields";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const ShareReview = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        image : "",
        text : ""
    });

    const route = useRouter();
    const {data : session} = useSession();

    const createPost = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const res = await fetch('/api/review/new', {
                method : "POST",
                body : JSON.stringify({
                    post : post.text,
                    image : post.image,
                    userId : session?.user.id
                })
            })
            if(res.ok){
                route.push("/")
            }
        } catch(error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section>
            <h1 className="font-bold text-2xl">Post Review</h1>
            <p className="review font-mono">Share your thoughts, feedback and also interact with fellow Nike members</p>

            <PostFields
            type = "Post"
            post = {post}
            setPost = {setPost}
            submitting = {submitting}
            handleSubmit = {createPost}
            />

        </section>
    )
}