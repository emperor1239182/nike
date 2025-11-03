import { ConnectToDB } from "../../../utils/database";
import Purchases from "../../models/purchases";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const {items, userId} = await req.json(); 
        
        await ConnectToDB();

        // Create multiple purchase records
        const createdPurchases = await Purchases.insertMany(
            items.map((item) => ({
                name: item.name,
                image: item.image,
                creator: userId
            }))
        );

        return NextResponse.json(
            { ok: true, purchases: createdPurchases }, 
            { status: 200 }
        );
    } catch(error) {
        console.log(error);
        return NextResponse.json(
            { ok: false, error: "Failed to save purchases" }, 
            { status: 500 }
        );
    }
}