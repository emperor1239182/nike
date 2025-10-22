import User from "../../../models/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ConnectToDB } from "../../../../utils/database";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            
            async authorize(credentials) {
                const {email, password} = credentials;
                
                try{
                    await ConnectToDB();
                    const user = await User.findOne({email});
                    
                    if(!user){
                        return null;
                    }
                    
                    const passwordsMatch = await bcrypt.compare(password, user.password);
                    
                    if(!passwordsMatch){
                        return null;
                    }
                    
                    return user;
                } catch (error) {
                    console.log("Error:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/signUp/login",
    }, 
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};