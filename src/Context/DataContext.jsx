import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const ApiContext = createContext();
const cartFromLocalStorage = JSON.parse(localStorage.getItem("newCart") || "[]" || "[]");
const DataContext = ({ children }) => {
  const [tools, setTools] = useState([]);
  const [cart, setCart] = useState(cartFromLocalStorage);

  const addToCart = (selectItem) => {
    let newCart = [];
    const exists = cart.find((item) => item._id === selectItem._id);
    if (!exists) {
      selectItem.quantity = 1;
      newCart = [...cart, selectItem];
    } else {
      const rest = cart.filter((item) => item._id !== selectItem._id);
      // exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    toast.success(`${selectItem.name} added successfully`);
    setCart(newCart);
    localStorage.setItem("newCart", JSON.stringify(newCart));
  };

  const handleRemoveProduct = (id) => {
    const updatedItems = [...cart];
    updatedItems.splice(id, 1);
    localStorage.setItem("newCart", JSON.stringify(updatedItems));
    toast.error(` item delete successfully`);
    setCart(updatedItems);
    console.log(updatedItems);
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
