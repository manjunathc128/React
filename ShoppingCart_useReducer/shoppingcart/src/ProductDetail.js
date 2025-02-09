// import React from "react";
// import { useParams } from "react-router-dom";
// import { useAppContext } from "./context/AppContext";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { state } = useAppContext();
//   const product = state.products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-semibold">{product.name}</h2>
//       <img
//         src={`/${product.image}`}
//         alt={product.name}
//         className="w-full h-64 object-cover"
//       />
//       <p className="text-gray-700">Price: ₹{product.price}</p>
//       <p className="text-red-500">Discount: {product.discount}% OFF</p>
//     </div>
//   );
// };

// export default ProductDetail;
import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "./context/AppContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { state, dispatch } = useAppContext(); // Access dispatch
  const product = state.products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="p-4 flex flex-col md:flex-row">
      {" "}
      {/* Use flexbox for layout */}
      <div className="md:w-1/2">
        {" "}
        {/* Image takes half width on medium screens and up */}
        <img
          src={`/${product.image}`}
          alt={product.name}
          className="w-full h-auto object-cover rounded-md" // Maintain aspect ratio
        />
      </div>
      <div className="md:w-1/2 md:pl-4">
        {" "}
        {/* Details take half width with padding */}
        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-700 font-bold text-lg">
          ₹{product.price}{" "}
          <span className="line-through text-gray-500 text-sm">
            ₹{/* Original price */}
          </span>
        </p>{" "}
        {/* Add original price if available */}
        <p className="text-red-500 text-sm mb-4">{product.discount}% OFF</p>
        {/* Star rating and reviews */}
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-yellow-500 mr-1">★</span>
          <span className="text-yellow-500 mr-1">☆</span>
          <span className="text-gray-500 ml-2">(1 reviews)</span>
        </div>
        <p className="text-gray-700 mb-4">
          {product.description || "No description available"}
        </p>{" "}
        {/* Add description */}
        {/* Size selection (if applicable) */}
        <div className="mb-4">
          <label htmlFor="size" className="block text-gray-700 font-medium">
            Size:
          </label>
          <select
            id="size"
            name="size"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 sm:text-sm"
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
            {/* Add more sizes */}
          </select>
        </div>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
