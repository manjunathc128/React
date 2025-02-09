import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext";

const CategoryNav = () => {
  const { state, dispatch } = useAppContext();
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [selectedSubcategory, setSelectedSubcategory] = useState(""); // Track selected subcategory

  const categories = {
    grocery: [
      "Dal and pulses",
      "Masala and Spices",
      "flour and grains",
      "oil and ghee",
    ],
    electronics: ["Smartphones", "Laptops", "smart watches", "Audio"],
    fashion: [
      "Men's Fashion",
      "Women's Fashion",
      "Kids' Fashion",
      "Accessories",
    ],
    beauty: ["Skincare", "Makeup", "Haircare", "Fragrances"],
    toys: ["Action Figures", "Board Games", "Puzzles", "Dolls"],
  };

  const handleCategoryChange = (category) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
    setSelectedSubcategory(""); // Reset subcategory selection
    navigate(`/category/${category.toLowerCase()}`); // Navigate to main category page
  };

  const handleSubcategoryChange = (category, subcategory) => {
    setSelectedSubcategory(subcategory);
    navigate(
      `/category/${category.toLowerCase()}?subcategory=${subcategory.toLowerCase()}`
    );
  };

  return (
    <div className="flex gap-4 my-4">
      {Object.keys(categories).map((category) => (
        <div key={category} className="relative">
          <select
            className={`px-4 py-2 rounded ${
              state.category === category
                ? "bg-blue-500 text-white"
                : "bg-white text-black border"
            }`}
            value={state.category === category ? category : ""}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="" disabled>
              {category}
            </option>

            {categories[category].map((subcategory) => (
              <option
                key={subcategory}
                value={category}
                onChange={(e) =>
                  handleSubcategoryChange(category, e.target.value)
                }
              >
                {subcategory}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default CategoryNav;
