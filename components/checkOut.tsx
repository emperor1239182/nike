"use client"
import { useCart } from "@/utils/Contexts"
import { useState } from "react";


export const Order = () => {
    const [openSection, setOpenSection] = useState<null | "delivery" | "payment">(null);
    const {cartItems} = useCart();
    return (
    <section className="checkout checkoutDetails h-auto hide-scrollbar">
            {cartItems &&
             (cartItems.map((bags)=> (
                <div key={bags.id} className="my-2">
                <p className="font-bold">{bags.name}</p>
                </div>
            ))
            )}

            <div className="paymentOptions my-4">
                <div className="options border-t-1 border-gray-400 p-3">
                    <h3 className="font-bold">Delivery</h3>
                    <p className="text-red-500" onClick={()=> setOpenSection(openSection === "delivery" ? null : "delivery")}>Select Delivery +</p>
                </div>

                {openSection === "delivery" && (
                    <div className="delivery my-3">
                        <div className="flex gap-2">
                            <input type="radio" id="freeDelivery"/>
                            <div className="flex flex-col">
                                <p className="font-bold">Free Delivery</p>
                                <p className="text-gray-500">Arrives in 3 days from now</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" id="freeDelivery"/>
                            <div className="flex flex-col">
                                <p className="font-bold">Pick-Up</p>
                                <p className="text-gray-500">Find a Location</p>
                            </div>
                        </div>
                    </div>
                    )}

                <div className="options border-t-1 border-gray-400 p-3">
                    <h3 className="font-bold">Payment</h3>
                    <p className="text-red-500" onClick={()=> setOpenSection(openSection === "payment" ? null : "payment")}>Select Payment +</p>
                </div>

                {openSection === "payment" && (
                    <div className="cardTypes my-3">
                        <div className="flex flex-col gap-2">
                            <button type="button" className="cards">Add Credit Card</button>
                            <button type="button" className="cards">Add Gift Card</button>
                            <button type="button" className="cards">Paypal</button>
                        </div>
                    </div>
                    )}

                <div className="options border-t-1 border-gray-400 p-3">
                    <h3 className="font-bold">Purchase Summary</h3>
                    <p className="text-red-500">Select Delivery +</p>
                </div>
            </div>
            <button type="button" className="signUp-buton">Submit Payment</button>
        </section>
    )
}