"use client"
import type { Product } from "@/utils/types";
import { useState } from "react";
import { ProductDetails } from "./productDetails"

interface FilteredResultProps {
  sorted: Product[];
  setSorted: () => void;
}

export const FilteredResult = ({ sorted, setSorted }: FilteredResultProps) => {
    const[selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    
    return (
        <section className="suggestions">
            {sorted.length > 0 ? (
                <div> 
                    <p className="text-blue" onClick={setSorted}>Clear All</p>
                    {sorted.map((filtered : Product) => (
                        <div key={filtered.id}>
                            <p 
                                onClick={() => setSelectedProduct(filtered)}
                                className="cursor-pointer hover:underline z-20"
                            >
                                {filtered.name}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No Results</p>
            )}

            <ProductDetails 
                selectedProduct={selectedProduct} 
                setSelectedProduct={setSelectedProduct}
            />
        </section>
    )
}