import { ConnectToDB } from "../../../utils/database";
import Post from "../../models/post";
import { NextResponse } from "next/server";

export const GET = async(req) => {
    try {
        await ConnectToDB();

        const posts = await Post.find({}).populate("creator");

        return NextResponse(JSON.stringify(posts ), {
            status : 200
        })
    } catch {
        return NextResponse("Failed to fecth posts", {
            status : 500
        })
    }
}