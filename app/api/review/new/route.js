import { ConnectToDB } from "../../../../utils/database";
import Post from "../../../models/post";
import { NextResponse } from "next/server";

export const POST = async(req) => {
    const {userId, post, image} = await req.json();

    try {
        await ConnectToDB();

        const newPost = new Post({
            creator : userId,
            post,
            image
        })

        await newPost.save();
        
        return NextResponse(JSON.stringify(newPost), {
            status : 201
        })
    } catch {
        return NextResponse("failed to create Prompt", {
            status : 500
        })
    }
}