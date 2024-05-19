import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartAdded, setCartAdded] = useState([]);
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        data,
        setData,
        loading,
        setLoading,
        cartAdded,
        setCartAdded, 
        cartLength,
        setCartLength
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
