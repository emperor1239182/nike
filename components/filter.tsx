import { FaCircleXmark } from "react-icons/fa6";
import { useReducer } from "react";
import { useRouter } from "next/navigation";
import { Product, FilterState, FilterAction, SearchFilterProps } from "@/utils/types";
import { useFilterContext } from "@/utils/Contexts";

const ACTIONS = {
  SET_GENDER: 'SET_GENDER',
  SET_PRICE_RANGE: 'SET_PRICE_RANGE',
  SET_CATEGORY: 'SET_CATEGORY',
  SET_SORT: 'SET_SORT',
  RESET_FILTERS: 'RESET_FILTERS'
} as const;

const initialState: FilterState = {
  gender: [],
  priceRange: [],
  category: [],
  sort: 'featured'
};

function filterReducer(state: FilterState, action: FilterAction): FilterState {
  switch (action.type) {
    case ACTIONS.SET_GENDER:
      return { ...state, gender: action.payload };
    case ACTIONS.SET_PRICE_RANGE:
      return { ...state, priceRange: action.payload };
    case ACTIONS.SET_CATEGORY:
      return { ...state, category: action.payload };
    case ACTIONS.SET_SORT:
      return { ...state, sort: action.payload };
    case ACTIONS.RESET_FILTERS:
      return initialState;
    default:
      return state;
  }
}

export const SearchFilter = ({ setFilter }: SearchFilterProps) => {
  const [filter, dispatch] = useReducer(filterReducer, initialState);
  const { setFilteredProducts } = useFilterContext();
  const router = useRouter();

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET_FILTERS });
  };

  const handleSortChange = (value: string) => {
    dispatch({ type: ACTIONS.SET_SORT, payload: value });
  };

  const handleCheckboxChange = (
    actionType: 'SET_GENDER' | 'SET_PRICE_RANGE' | 'SET_CATEGORY',
    value: string,
    currentArray: string[]
  ) => {
    const newArray = currentArray.includes(value)
      ? currentArray.filter(item => item !== value)
      : [...currentArray, value];
    dispatch({ type: actionType, payload: newArray });
  };

  const filters = {
    featured: { 
      element: <input type="radio" id="featured" name="sort" value="featured" onChange={(e) => handleSortChange(e.target.value)} checked={filter.sort === 'featured'} />, 
      label: <label htmlFor="featured">Featured</label> 
    },
    newest: { 
      element: <input type="radio" id="newest" name="sort" value="newest" onChange={(e) => handleSortChange(e.target.value)} checked={filter.sort === 'newest'} />, 
      label: <label htmlFor="newest">Newest</label> 
    },
    price: { 
      element: <input type="radio" id="price" name="sort" value="price" onChange={(e) => handleSortChange(e.target.value)} checked={filter.sort === 'price'} />, 
      label: <label htmlFor="price">Price : Low-High</label> 
    },
    price2: { 
      element: <input type="radio" id="price2" name="sort" value="price2" onChange={(e) => handleSortChange(e.target.value)} checked={filter.sort === 'price2'} />, 
      label: <label htmlFor="price2">Price : High-Low</label> 
    }
  };

  const genders = {
    male: { 
      element: <input type="checkbox" id="male" checked={filter.gender.includes('male')} onChange={() => handleCheckboxChange(ACTIONS.SET_GENDER, 'male', filter.gender)} />, 
      label: <label htmlFor="male">Male</label> 
    },
    female: { 
      element: <input type="checkbox" id="female" checked={filter.gender.includes('female')} onChange={() => handleCheckboxChange(ACTIONS.SET_GENDER, 'female', filter.gender)} />, 
      label: <label htmlFor="female">Female</label> 
    },
    unisex: { 
      element: <input type="checkbox" id="unisex" checked={filter.gender.includes('unisex')} onChange={() => handleCheckboxChange(ACTIONS.SET_GENDER, 'unisex', filter.gender)} />, 
      label: <label htmlFor="unisex">Unisex</label> 
    }
  };

  const priceRanges = {
    low: { 
      element: <input type="checkbox" id="low" checked={filter.priceRange.includes('low')} onChange={() => handleCheckboxChange(ACTIONS.SET_PRICE_RANGE, 'low', filter.priceRange)} />, 
      label: <label htmlFor="low">$0-$25</label> 
    },
    medium: { 
      element: <input type="checkbox" id="medium" checked={filter.priceRange.includes('medium')} onChange={() => handleCheckboxChange(ACTIONS.SET_PRICE_RANGE, 'medium', filter.priceRange)} />, 
      label: <label htmlFor="medium">$25-$50</label> 
    },
    high: { 
      element: <input type="checkbox" id="high" checked={filter.priceRange.includes('high')} onChange={() => handleCheckboxChange(ACTIONS.SET_PRICE_RANGE, 'high', filter.priceRange)} />, 
      label: <label htmlFor="high">$50-$100</label> 
    },
    extra: { 
      element: <input type="checkbox" id="extra" checked={filter.priceRange.includes('extra')} onChange={() => handleCheckboxChange(ACTIONS.SET_PRICE_RANGE, 'extra', filter.priceRange)} />, 
      label: <label htmlFor="extra">over $100</label> 
    },
  };

  const sports = {
    running: { 
      element: <input type="checkbox" id="running" checked={filter.category.includes('running')} onChange={() => handleCheckboxChange(ACTIONS.SET_CATEGORY, 'running', filter.category)} />, 
      label: <label htmlFor="running">Running</label> 
    },
    training: { 
      element: <input type="checkbox" id="training" checked={filter.category.includes('training')} onChange={() => handleCheckboxChange(ACTIONS.SET_CATEGORY, 'training', filter.category)} />, 
      label: <label htmlFor="training">Training & Gym</label> 
    },
    basketball: { 
      element: <input type="checkbox" id="basketball" checked={filter.category.includes('basketball')} onChange={() => handleCheckboxChange(ACTIONS.SET_CATEGORY, 'basketball', filter.category)} />, 
      label: <label htmlFor="basketball">Basketball</label> 
    },
  };

  const getFilters = async () => {
    const req = await fetch("http://localhost:3000/Products.json");
    const res = await req.json();
    const data: Product[] = res.Products;

    const parsePrice = (priceStr: string): number => {
      return parseInt(priceStr.replace('$', '').replace(',', ''));
    };

    const getPriceRange = (price: number): string => {
      if (price < 25) return 'low';
      if (price >= 25 && price < 50) return 'medium';
      if (price >= 50 && price < 100) return 'high';
      return 'extra';
    };

    const filteredSearch = data.filter((item) => {
      if (
        filter.gender.length === 0 &&
        filter.priceRange.length === 0 &&
        filter.category.length === 0
      ) {
        return true;
      }

      const genderMatch = 
        filter.gender.length === 0 || 
        filter.gender.includes(item.gender?.toLowerCase());

      const itemPriceRange = getPriceRange(parsePrice(item.price));
      const priceMatch = 
        filter.priceRange.length === 0 || 
        filter.priceRange.includes(itemPriceRange);

      const categoryMatch = 
        filter.category.length === 0 || 
        filter.category.includes(item.category?.toLowerCase());

      return genderMatch && priceMatch && categoryMatch;
    });

    setFilteredProducts(filteredSearch);
    setFilter(false); 
    router.push('/filterSearch'); 
  };

  return (
    <section className="filter">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Filter</h1>
        <FaCircleXmark size={23} onClick={() => setFilter(false)} />
      </div>

      <div className="sort">
        <h4 className="font-bold mb-4">Sort By</h4>
        <ul>
          {Object.entries(filters).map(([key, { element, label }]) => (
            <div key={key} className="filterText">
              <div>{element}</div>
              <p>{label}</p>
            </div>
          ))}
        </ul>
      </div>

      <div className="sort">
        <h4 className="font-bold mb-4">Gender</h4>
        <ul>
          {Object.entries(genders).map(([key, { element, label }]) => (
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
          {Object.entries(priceRanges).map(([key, { element, label }]) => (
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
          {Object.entries(sports).map(([key, { element, label }]) => (
            <div key={key} className="filterText">
              {element}
              <p>{label}</p>
            </div>
          ))}
        </ul>
      </div>

      <div className="flex justify-center gap-3 mt-5">
        <button className="signUp-buton" onClick={() => { handleReset(); setFilteredProducts([]); }}>Reset</button>
        <button className="signUp-buton" onClick={getFilters}>Apply</button>
      </div>
    </section>
  );
};