import { NextResponse } from "next/server";
import { ConnectToDB } from "../../../../utils/database";
import Post from "../../../models/post";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (req) => {
  try {
    await ConnectToDB();

    const formData = await req.formData();
    const userId = formData.get("userId");
    const postText = formData.get("post");
    const imageFile = formData.get("image");


    let imageUrl = "";

    if (imageFile && typeof imageFile === "object") {
      const arrayBuffer = await imageFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const base64Image = `data:${imageFile.type};base64,${buffer.toString("base64")}`;

      const uploadResponse = await cloudinary.uploader.upload(base64Image, {
        folder: "nike_reviews", 
      });

      imageUrl = uploadResponse.secure_url; 
    }

    const newPost = new Post({
      creator: userId,
      post: postText,
      image: imageUrl,
    });

    await newPost.save();

    return NextResponse.json( {post: newPost, message : "Sent Successfully"}, { status: 201 });
  } catch (error) {
    console.error(" Error creating post:", error);
    return new NextResponse("Failed to create post", { status: 500 });
  }
};
