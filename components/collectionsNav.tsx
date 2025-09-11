"use client"
import { FiArrowLeft, FiFilter, FiSearch } from "react-icons/fi"
import { useRouter } from "next/navigation";
export const CollectionNav = () => {
const router = useRouter();
    return (
        <section>
            <nav>
            <ul className="flex justify-between items-center">
                <FiArrowLeft onClick={() => router.back()}/>
                <h1 className="font-bold text-2xl text-center">Nike Collections</h1>
                <div className="flex gap-2">
                    <FiFilter/>
                    <FiSearch/>
                </div>
            </ul>
        </nav>
        </section>
    )
}