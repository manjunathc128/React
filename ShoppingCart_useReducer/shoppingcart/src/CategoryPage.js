import React from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
import ProductList from "./ProductList";

const CategoryPage = () => {
  const { category } = useParams();
  const { state } = useAppContext();
  const products = state.products.filter(
    (p) => p.category.toLowerCase() === category
  );

  return <ProductList products={products} />;
};

export default CategoryPage;
