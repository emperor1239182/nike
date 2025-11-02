import { ConnectToDB } from "../../../utils/database";
import Purchases from "../../models/purchases";

export const POST = async (req) => {

    try{
        const {name, image} = req.json()
        await ConnectToDB();
    } catch {

    }
}