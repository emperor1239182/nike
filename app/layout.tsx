import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/nav";
import { Suspense } from "react";
import { FavoriteProvider, CartProvider, RecommendedProvider, FilterProvider } from "@/utils/Contexts";
import { CartItems } from "./bag/cart";
import { AuthProvider } from "./providers";
import { Footer } from "@/components/footer";
import AOSInit from "@/components/aos";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nike",
  description: "E-commerce web app, built for robust and modern e-commerce shopping application",
  icons: {
    icon: [
      {
        url: "/NikeLogo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/NikeLogo.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/NikeLogo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <CartProvider>
        <FavoriteProvider>
          <RecommendedProvider>
            <FilterProvider>
              <AuthProvider>
          
        <Suspense fallback={<GlobalLoading />}>

        <div className="flex justify-between gap-10 flex-1">

        <NavBar/>
        
        <AOSInit/>

          <div className="w-full sm:max-w-xl lg:max-w-3xl sm:mx-auto p-2 sm:h-[100vh] overflow-y-auto hide-scrollbar">
             {children} 
             </div>

          <div className="w-full lg:max-w-[350px] hidden lg:block h-screen overflow-y-auto hide-scrollbar p-4 ">
            <CartItems/>
          </div>

          </div>

          <Footer/>

        
       </Suspense>

       </AuthProvider>
       </FilterProvider>
       </RecommendedProvider>
       </FavoriteProvider>
       </CartProvider>
      </body>
    </html>
  );
}



function GlobalLoading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 animate-pulse text-lg">Loading page...</p>
    </div>
  );
}