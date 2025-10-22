import { ConnectToDB } from "../../../utils/database";
import User from "../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
    try{
        const {email, firstName, surName, DOB, password} = await req.json();
        const hashedPassword = await bcrypt.hash(password, 10);

        console.log("Email :", email);

        await ConnectToDB();

        await User.create({email, firstName, surName, DOB, password : hashedPassword});

        return NextResponse.json({message: "User registered successfully"}, {status: 201});

    } catch(error){
          if(error.code === 11000){
            return NextResponse.json(
                {message: "Email address already exists!"}, 
                {status: 400}
            );
        }
        
          if(error.name === 'ValidationError'){
            return NextResponse.json(
                {message: error.message}, 
                {status: 400}
            );
        }
        return NextResponse.json({message: "An error occured while registering user"}, {status: 500});
    }
}
