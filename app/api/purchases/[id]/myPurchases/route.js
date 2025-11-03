import { ConnectToDB } from "../../../../../utils/database";
import Purchases from "../../../../models/purchases";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
    try {
        await ConnectToDB();

        const { id } = await params;

        const bags = await Purchases.find({creator : id}).populate("creator");

        return NextResponse.json({myPurchases : bags}, {status : 200});

    } catch(error) {
        console.error(error);
        return NextResponse.json({error : "Couldnt get purchased items"}, {status : 500})
    }
}