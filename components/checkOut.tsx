"use client"
import { useCart } from "@/utils/Contexts"
import { useState } from "react";
import { FiArrowLeft} from "react-icons/fi"
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export const Order = () => {
    const [openSection, setOpenSection] = useState<null | "delivery" | "payment">(null);
    const [selectedDelivery, setSelectedDelivery] = useState("");
    const [selectedPayment, setSelectedPayment] = useState("");

    const {cartItems, purchased, purchasedMessage, setPurchasedMessage} = useCart();
    const router = useRouter();
    const {data} = useSession();

    const total = cartItems.reduce((acc, product) => {
    const price = parseFloat(String(product.price).replace(/[^0-9.]/g, ""));
    return acc + (isNaN(price) ? 0 : price);
    }, 0);

    const handlePurchases = async () => {
   
    if (!selectedDelivery || !selectedPayment) {
        console.log("Please select delivery and payment options");
        return;
    }

    try {
        const req = await fetch("/api/purchased", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                items : cartItems,
                userId : data?.user?.id
            }),
        });
        const res = await req.json();

        if (res.ok) {
            router.push("/");
        } else {
            console.log("Couldn't purchase all items:", res.error);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}


    return (
        <>
        <div className="flex items-center gap-3">
         <FiArrowLeft onClick={() => router.back()} />
           <h1 className="font-bold text-xl">Checkout</h1>
        </div>
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
                    <p className={`${selectedDelivery ? "text-black" : "text-red-500"}` } onClick={()=> setOpenSection(openSection === "delivery" ? null : "delivery")}>Select Delivery +</p>
                </div>

                {openSection === "delivery" && (
                    <div className="delivery my-3">
                        <div className="flex gap-2">
                            <input
                              type="radio"
                              id="freeDelivery"
                              name="deliveryOption"
                              checked={selectedDelivery === "freeDelivery"}
                              onChange={() => setSelectedDelivery("freeDelivery")}
                            />
                            <div className="flex flex-col">
                                <p className="font-bold">Free Delivery</p>
                                <p className="text-gray-500">Arrives in 3 days from now</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input
                              type="radio"
                              id="pickUp"
                              name="deliveryOption"
                              checked={selectedDelivery === "pickUp"}
                              onChange={() => setSelectedDelivery("pickUp")}
                            />
                            <div className="flex flex-col">
                                <p className="font-bold">Pick-Up</p>
                                <p className="text-gray-500">Find a Location</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="options border-t-1 border-gray-400 p-3">
                    <h3 className="font-bold">Payment</h3>
                    <p className={`${selectedPayment ? "text-black" : "text-red-500"}` } onClick={()=> setOpenSection(openSection === "payment" ? null : "payment")}>Select Payment +</p>
                </div>

                    {openSection === "payment" && (
                        <div className="cardTypes my-3">
                            <div className="flex flex-col gap-2">
                                <button
                                    type="button"
                                    className={`cards ${selectedPayment === "credit" ? "!bg-black !text-white" : ""}`}
                                    onClick={() => setSelectedPayment("credit")}
                                >
                                    Add Credit Card
                                </button>
                                <button
                                    type="button"
                                    className={`cards ${selectedPayment === "gift" ? "!bg-black !text-white" : ""}`}
                                    onClick={() => setSelectedPayment("gift")}
                                >
                                    Add Gift Card
                                </button>
                                <button
                                    type="button"
                                    className={`cards ${selectedPayment === "paypal" ? "!bg-black !text-white" : ""}`}
                                    onClick={() => setSelectedPayment("paypal")}
                                >
                                    Paypal
                                </button>
                            </div>
                        </div>
                    )}

                <div className="options border-t-1 border-gray-400 p-3">
                    <h3 className="font-bold text-[px]">Purchase Summary</h3>
                    <h3 className="text-lg font-bold">Total : ${total}</h3>
                </div>
            </div>
            <button 
            type="button" 
            className="signUp-buton"
            onClick={()=>{purchased(); handlePurchases()}}
            >
                Submit Payment
            </button>

                        {purchasedMessage && (
            <div className="message">
                {purchasedMessage} <br/> <br/>
                <p
                    className="bg-white text-black rounded p-2 text-center"
                    onClick={() => {
                        setPurchasedMessage("");
                        router.push("/");
                    }}
                >
                    Go to home
                </p>
            </div>
        )}
        </section>
        </>
    )
}