import React, { useReducer, useEffect } from "react";
import { reducer, initialState } from "./reducer";
import ProductList from "./ProductList";
import Cart from "./Cart";
import "./index.css";

import "tailwindcss/tailwind.css";
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }));
  }, []);

  const filteredProducts = state.products
    .filter((p) => p.category === state.category)
    .filter((p) => p.name.toLowerCase().includes(state.search.toLowerCase()));

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <header className="flex justify-between items-center bg-blue-600 text-white p-4">
        <h1 className="text-xl font-bold">E-Commerce</h1>
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 rounded text-black"
          value={state.search}
          onChange={(e) =>
            dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
          }
        />
        <button
          className="p-2 bg-yellow-400 text-black rounded"
          onClick={() => dispatch({ type: "TOGGLE_CART" })}
        >
          🛒 Cart ({state.cart.length})
        </button>
      </header>

      <div className="flex gap-4 my-4">
        {["Grocery", "Electronics", "Fashion", "Beauty", "Toys"].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded ${
              state.category === cat
                ? "bg-blue-500 text-white"
                : "bg-white text-black border"
            }`}
            onClick={() => dispatch({ type: "SET_CATEGORY", payload: cat })}
          >
            {cat}
          </button>
        ))}
      </div>

      {state.cartVisible ? (
        <Cart cart={state.cart} dispatch={dispatch} />
      ) : (
        <ProductList products={filteredProducts} dispatch={dispatch} />
      )}
    </div>
  );
};

export default App;
