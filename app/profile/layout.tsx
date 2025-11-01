import { UserProfile } from "@/components/profile"
export default function ShopLayout ({children} : {children : React.ReactNode}) {
    return (
        <>
        <UserProfile/>
        {children}
      
        </>
    )
}