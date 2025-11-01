"use client" 
import { PostFields } from "./postFields";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const ShareReview = () => {
    const [submitting, setSubmitting] = useState(false);
    const [postMessage, setPostMessage] = useState("")
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
            const formData = new FormData();
            formData.append("userId", session?.user?.id);
            formData.append("post", post.text);
            if(post.image) formData.append("image", post.image )

            const res = await fetch('/api/review/new', {
                method : "POST",
                body : formData
            })

            const data = await res.json();
            if(res.ok){
                route.push("/");
                const form = e.target;
                form.reset();
                setPostMessage(data.message);
            }
        } catch(error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section>
            <div className="message">{postMessage}</div>
            <h1 className="font-bold text-2xl">Post Review</h1>
            <p className="review font-mono">Share your thoughts, feedback and also interact with fellow Nike members</p>
            <p>{postMessage}</p>
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