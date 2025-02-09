import React, { createContext, useReducer, useContext, useEffect } from "react";
import { reducer, initialState } from "../reducer";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET_PRODUCTS", payload: data }));
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
