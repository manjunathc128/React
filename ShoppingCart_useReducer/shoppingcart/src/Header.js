import React from "react";
import { useAppContext } from "./context/AppContext";

const Header = () => {
  const { state, dispatch } = useAppContext();

  return (
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
  );
};

export default Header;
