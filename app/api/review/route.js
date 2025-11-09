import { ConnectToDB } from "../../../utils/database";
import Post from "../../models/post";
import { NextResponse } from "next/server";

export const GET = async() => {
    try {
        await ConnectToDB();

        const posts = await Post.find({}).populate("creator", "firstName surName").sort({createdAt: -1});
        return NextResponse.json(posts, { status: 200 });
        
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json(
            { error: "Failed to fetch posts" }, 
            { status: 500 }
        );
    }
}