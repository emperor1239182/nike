"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import type { PostFieldsProps } from "@/utils/types";



export const PostFields: React.FC<PostFieldsProps> = ({ post, setPost, submitting, handleSubmit, type }) => {
  const [text, setText] = useState(false);

  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPost({ ...post, image: file, imagePreview: previewUrl });
    }
  };

  
  useEffect(() => {
    return () => {
      if (post.imagePreview) {
        URL.revokeObjectURL(post.imagePreview);
      }
    };
  }, [post.imagePreview]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full mt-8">
        <textarea
          placeholder="Share your thoughts..."
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          cols={6}
          rows={4}
          className={`${text ? "textField" : ""}`}
          onClick={() => setText(true)}
          required
        />

        {/* Image preview */}
        {post.imagePreview && (
          <div className="mt-4">
            <Image
              src={post.imagePreview}
              alt="Selected"
              className="max-w-[200px] max-h-[200px] object-contain"
              width={100}
              height={100}
            />
          </div>
        )}

        <div className="inline-block">
          <input
            type="file"
            id="image"
            accept="image/*" 
            name="image"
            multiple 
            onChange={handleImageChange} 
            className="hidden"
          />
        </div>

        <label
          htmlFor="image"
          className="bg-blue-500 rounded-2xl text-center text-white text-sm px-2 py-1 w-25 cursor-pointer"
        >
          Select Media
        </label>


        <div className="flex gap-5 items-center justify-end">
          <Link href="/" className="font-bold">
            Cancel
          </Link>
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
  );
};