import React, { useState } from "react";
import "./CartTool.css";
import { FaTrash } from "react-icons/fa";

const CartTool = ({ tool, handleRemoveProduct }) => {
  const [productQuantity, setProductQuantity] = useState(1);

  const increaseQuantity = () => {
    setProductQuantity(productQuantity + 1);
  };
  const decreaseQuantity = () => {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  };

  const { image, name, price, _id } = tool;
  const newPrice = price * productQuantity;
  localStorage.setItem("Price", newPrice);

  // const getTotalPrice = (items) => {
  //   const total = items
  //     .map((item) => item.newPrice)
  //     .reduce((acc, value) => acc + value, 0);
  //   return total;
  // };

  // const result = getTotalPrice(tool);
  // console.log({ result });
  return (
    <div>
      <div class="justify-between mb-4 mt-4 rounded-lg bg-white p-3  shadow-md sm:flex sm:justify-start">
        <img src={image} alt="" srcset="" className="h-12 w-12 rounded-full" />
        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div class="mt-5 sm:mt-0">
            <h2 class="text-sm font-semibold text-primary">{name}</h2>
            <p class="mt-1 text-xs text-error">total : {newPrice} BDT</p>
          </div>
          <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div class="flex justify-between items-center   border-gray-100">
              {/* <div className="mr-5"> */}
              <span
                onClick={decreaseQuantity}
                class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                -{" "}
              </span>

              <input
                class="h-8 w-8 border bg-white text-center text-xs outline-none"
                type="text"
                value={productQuantity}
                // min="1"
              />
              <span
                onClick={increaseQuantity}
                class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 mr-5 duration-100 hover:bg-blue-500 hover:text-blue-50"
              >
                {" "}
                +{" "}
              </span>
              {/* </div> */}
              <span onClick={() => handleRemoveProduct(_id)}>
                <FaTrash className="text-error cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTool;
