"use client"
import Link from "next/link";
import { useState } from "react";

export const PostFields = ({post, setPost, submitting, handleSubmit, type}) => {
    const [text, setText] = useState(false);
    return (
        <>
        <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-20 w-full mt-8"
        >

        <textarea
        placeholder="Share your thoughts..."
        onChange={(e)=> setPost({...post, text : e.target.value})}
        cols={6}
        rows={8}
        className={`${text ? "textField" : ""}`}
        onClick={()=> setText(true)}
        />

        <div className="inline-block">
        <input type="file" 
        id="image"
        accept="image" 
        name="image" 
        placeholder="SelectImage"
        multiple
        onChange={(e)=> setPost({...post, image : e.target.value })}
        className="hidden"
        />
        </div>


        <label htmlFor="image" className=" bg-blue-500 rounded-2xl text-center text-white text-sm px-2 py-1 w-25">Select Media</label>

        <div className="flex gap-5 items-center justify-end">
         <Link href="/" className="font-bold">Cancel</Link> 
        <button
        type="submit"
        disabled={submitting}
        className="signUp-buton"
        >
            {submitting ? `${type}...` : type}
        </button>

        </div>

        </form>
        </>
    )
}