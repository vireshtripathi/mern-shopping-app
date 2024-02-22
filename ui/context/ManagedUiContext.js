// contexts/ThemeContext.js
import React, { createContext, useState, useContext, useEffect } from "react";

import { viewCartItem } from "@/services/cart.service";

const ThemeContext = createContext();

const ManagedUIContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const cartItem = async () => {
    const items = await viewCartItem();
    setCart(items);
    setCartCount(items.length);
  };
  useEffect(() => {
    cartItem();
  }, []);
  const value = {
    id: 1,
    text: "Viresh",
    cart,
    setCart,
    cartCount,
    setCartCount,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const uiContext = () => {
  return useContext(ThemeContext);
};

export { ManagedUIContext, uiContext };
