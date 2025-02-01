import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, dispatch }) => {
  return (
    <div className="p-4">
      {products.length === 0 ? (
        <p className="text-center text-gray-600">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              dispatch={dispatch}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
