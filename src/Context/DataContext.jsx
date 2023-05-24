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
    localStorage.setItem("tool", JSON.stringify(newCart));
  };

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTools(data);
      });
  }, []);
  //   useEffect(() => {
  //     fetch("tools.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         seeAllTools(data);
  //       });
  //   }, []);
  const data = {
    tools,
    addToCart,
    cart
  };
  return (
    <div>
      <ApiContext.Provider value={data}> {children} </ApiContext.Provider>
    </div>
  );
};

export default DataContext;
