import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { ConnectToDB } from "./utils/database";
import User from "./app/models/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Missing credentials");
                }

                try {
                    await ConnectToDB();
                    
                    const user = await User.findOne({ email: credentials.email });
                    
                    if (!user) {
                        throw new Error("No user found");
                    }
                    
                    const passwordsMatch = await bcrypt.compare(
                        credentials.password, 
                        user.password
                    );
                    
                    if (!passwordsMatch) {
                        throw new Error("Incorrect password");
                    }
                    
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: `${user.firstName} ${user.surName}`
                    };
                } catch (error) {
                    console.error("Authorization error:", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/signUp/login"
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
            }
            return session;
        }
    }
});