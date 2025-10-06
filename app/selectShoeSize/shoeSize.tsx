"use client"
export const ShoeSize = () => {

        const sizes: number[] = [];
        for (let num = 4; num <= 16; num += 0.5) {
            sizes.push(num);
        }
        
        return (
                <section>
                        <h1>Whats Your Shoe Size?</h1>
                        <div className="flex flex-wrap gap-2">
                            {sizes.map(size => (
                                <span key={size} className="px-2 py-1 bg-gray-100 rounded">{size}</span>
                            ))}
                        </div>
                </section>
        )
}