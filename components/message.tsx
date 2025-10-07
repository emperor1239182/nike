"use client"
import { useCart } from "@/utils/Contexts"
export const Message = () => {
    const {message} = useCart();
    return (
        <>
        {message && (
      <div className="message">
        {message}
      </div>
    )}
        </>
    )
}