import React, { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("newCart") || "[]"
);
const DataContext = ({ children }) => {
  const [tools, setTools] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const addToCart = (tool) => {
    let newCart = [];
    const exists = cart.find((item) => item.id === tool.id);
    if (!exists) {
      tool.quantity = 1;
      newCart = [...cart, tool];
    } else {
      const rest = cart.filter((item) => item.id !== tool.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    console.log(newCart);
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  const handleRemoveProduct = (id) => {
    const updatedItems = [...cart];
    updatedItems.splice(id, 1);
    localStorage.setItem("newCart", JSON.stringify(updatedItems));
    setCart(updatedItems);
  };

  useEffect(() => {
    fetch("http://localhost:5000/tools")
      .then((res) => res.json())
      .then((data) => {
        setTools(data);
      });
  }, []);

  const data = {
    tools,
    addToCart,
    cart,
    handleRemoveProduct,
  };
  return (
    <div>
      <ApiContext.Provider value={data}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
