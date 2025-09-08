import { ShopNav } from "@/components/shopNav"
export default function ShopLayout ({children}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <>
        
        <ShopNav/>
        {children}
      
        </>
    )
}