"use client"
import { useState } from "react";
import type { Product } from "@/utils/types";
import { useFilterContext } from "@/utils/Contexts"; 
import { ProductDetails } from "@/components/productDetails"; 
import Image from "next/image";
import { FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";

export const Suggestions = () => {
  const { filteredProducts, setFilteredProducts } = useFilterContext();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClearAll = () => {
    setFilteredProducts([]);
  };

  const router = useRouter()

  return (
    <section className="p-3">
      <div className="flex justify-between items-center mb-6">

        <div className="flex gap-3 items-center">
        <FiArrowLeft onClick={() => router.back()}/>
        <h1 className="text-xl font-bold">
          Top Matches {filteredProducts.length > 0 && `(${filteredProducts.length})`}
        </h1>
        </div>

        {filteredProducts.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="text-blue-500 hover:text-blue-700 underline"
          >
            Clear All
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product: Product) => (
            <div 
              key={product.id} 
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="flex items-center gap-4">
                {product.image && (
                  <Image
                    src={product.image} 
                    alt={product.name}
                    width={20}
                    height={20}
                    className="w-20 h-20 object-cover rounded"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg hover:underline">
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.category}</p>
                  <p className="text-gray-500 text-sm">{product.gender}</p>
                  <p className="font-bold text-lg mt-2">{product.price}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No results found</p>
            <p className="text-gray-400 mt-2">Try adjusting your filters</p>
          </div>
        )}
      </div>

      <ProductDetails 
        selectedProduct={selectedProduct} 
        setSelectedProduct={setSelectedProduct}
      />
    </section>
  );
}