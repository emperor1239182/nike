import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

export default NextAuth(authConfig).auth;

export const config = {
    matcher: ["/profile/:path*", "/welcome/:path*", "/getstarted/:path*", "/post/:path*"]
};