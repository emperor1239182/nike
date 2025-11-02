import { ConnectToDB } from "../../../utils/database";
import User from "../../models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { email } = await req.json();

        if (!email) {
            return NextResponse.json(
                { user: null, message: "Email is required" }, 
                { status: 400 }
            );
        }

        await ConnectToDB();
        
        const user = await User.findOne({ email }).select("_id");
        console.log("user:", user);
        
        return NextResponse.json({ user });

    } catch (error) {
        console.error("Error checking user:", error);
        return NextResponse.json(
            { user: null, message: "An error occurred", error: error.message }, 
            { status: 500 }
        );
    }
}