"use client"
import { FaCircleXmark } from "react-icons/fa6";
export const SearchFilter = () => {

const filters = {
  featured: { element: <input type="radio" id="featured" />, label: <label htmlFor="featured">Featured</label> },
  newest: { element: <input type="radio" id="newest" />, label: <label htmlFor="newest">Newest</label> },
  price: { element: <input type="radio" id="price"/>, label: <label htmlFor="price">Price : Low-High</label> },
  price2: { element: <input type="radio" id="price2"/>, label: <label htmlFor="price2">Price : High-Low</label>}
};

const genders = {
    male: { element : <input type="checkbox" id="male"/>, label: <label htmlFor="male">Male</label> },
    female: { element : <input type="checkbox" id="female"/>, label: <label htmlFor="female">Female</label>},
    unisex: { element : <input type="checkbox" id="unisex" />, label: <label htmlFor="unisex">Unisex</label>}
}

const priceRanges = {
    low: { element : <input type="checkbox" id="low"/>, label: <label htmlFor="low">$0-$25</label> },
    medium: { element : <input type="checkbox" id="medium"/>, label: <label htmlFor="medium">$25-$50</label> },
    high: { element : <input type="checkbox" id="high"/>, label: <label htmlFor="high">$50-$100</label> },
    extra: { element : <input type="checkbox" id="extra"/>, label: <label htmlFor="extra">over $100</label> },
}

const sports = {
    running: { element : <input type="checkbox" id="running"/>, label: <label htmlFor="low">Running</label> },
    training: { element : <input type="checkbox" id="training"/>, label: <label htmlFor="medium">Training & Gym</label> },
    basketball: { element : <input type="checkbox" id="high"/>, label: <label htmlFor="high">Basketball</label> },
}

    return (
        <section className="filter">

            <div className="flex justify-between">
            <h1 className="text-xl font-bold">Filter</h1>
            <FaCircleXmark/>
            </div>

            <div className="sort ">
                <h4 className="font-bold mb-4">Sort By</h4>

                <ul>
                    {Object.entries(filters).map(([key, {element, label}])=>(
                        <div key={key} className="filterText">
                            {element}
                            <p>{label}</p>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="sort">
                <h4 className="font-bold mb-4">Gender(1)</h4>

                <ul>
                    {Object.entries(genders).map(([key, {element, label}])=>(
                        <div key={key} className="filterText">
                            {element}
                            <p>{label}</p>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="sort">
                <h4 className="font-bold mb-4">Shop by price</h4>

                <ul>
                    {Object.entries(priceRanges).map(([key, {element, label}])=>(
                        <div key={key} className="filterText">
                            {element}
                            <p>{label}</p>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="sort">
                <h4 className="font-bold mb-4">Sport & Activities</h4>

                <ul>
                    {Object.entries(sports).map(([key, {element, label}])=>(
                        <div key={key} className="filterText">
                            {element}
                            <p>{label}</p>
                        </div>
                    ))}
                </ul>
            </div>

            <div className="flex justify-center gap-3 mt-5">
                <button className="signUp-buton">Reset</button>
                <button className="signUp-buton">Apply</button>
            </div>
        </section>
    )
}