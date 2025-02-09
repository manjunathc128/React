import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext";

const ProductItem = ({ product }) => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition">
      <img
        src={`/${product.image}`}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
        onClick={() => navigate(`/${product.category}/${product.id}`)}
      />
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-700 font-bold">₹{product.price}</p>
      <p className="text-red-500 text-sm">🔥 {product.discount}% OFF</p>
      <button
        onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
