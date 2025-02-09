import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
// import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
// import CategoryPage from "./CategoryPage";
import Footer from "./Footer";
import Header from "./Header"; // New component for header
import CategoryNav from "./CategoryNav"; // New component for category navigation
import { AppProvider } from "./context/AppContext";
import "./index.css";
import "tailwindcss/tailwind.css";

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <CategoryNav />
                <ProductList />
                <Footer />
              </>
            }
          />
          <Route
            path="/category/:category"
            element={
              <>
                <Header />
                <CategoryNav />
                <ProductList />
                <Footer />
              </>
            }
          />
          <Route // Corrected Route!
            path="/product/:id" // Added /product/ to make it more specific
            element={
              <>
                <Header />
                <CategoryNav />
                <ProductDetail />
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </AppProvider>
  );
};

export default App;
