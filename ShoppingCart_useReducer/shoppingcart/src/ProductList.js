import React from "react";
import ProductItem from "./ProductItem";
import { useAppContext } from "./context/AppContext";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { category } = useParams();
  const { state } = useAppContext();

  let filteredProducts = state.products; // Initialize with all products

  if (category) {
    // Only filter if category is defined
    filteredProducts =
      category && state.search
        ? filteredProducts
            .filter(
              (p) =>
                p.category &&
                p.category.toLowerCase() === category.toLowerCase()
            ) //check p.category also
            .filter((p) =>
              p.name.toLowerCase().includes(state.search.toLowerCase())
            )
        : filteredProducts.filter(
            (p) =>
              p.category && p.category.toLowerCase() === category.toLowerCase()
          ); //check p.category also
  } else if (state.search) {
    // Filter by search if no category
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  return (
    <div className="p-4">
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600">No products found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
