import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { ApiContext } from "../../Context/DataContext";
import CartTool from "../../Pages/Cart/CartTool";
// FaCartArrowDown

const CartDrawer = () => {
  const [openToggler, setOpenToggler] = useState(false);
  const { cart, handleRemoveProduct } = useContext(ApiContext);
  console.log(cart);
  return (
    <div>
      <div className="indicator" onClick={() => setOpenToggler(!openToggler)}>
        <span className="indicator-item badge badge-warning">
          {cart.length}
        </span>
        <button className=" btn btn-sm btn-primary flex flex-column">
          <span>
            {" "}
            {openToggler ? "" : <FaCartArrowDown className=" h-5 w-5" />}
          </span>{" "}
          <br />
          <span className="text-xs ms-1">see cart</span>
        </button>
      </div>
      <div
        className={`cart-item bg-base-100  ${
          openToggler ? "cart-item-open" : "cart-item-closed"
        }`}
      >
        <div className="text-end" onClick={() => setOpenToggler(!openToggler)}>
          <button className="btn btn-sm">
            {" "}
            {openToggler ? <MdClose className="h-5 w-5 " /> : ""}
          </button>
        </div>
        <div className="text-center">
          <p className="text-sm text-error">
            all in one package($250) 50$/30days
          </p>
          <p className="text-xs text-warning">save $200+ now</p>
          <div>
            {cart.map((tool) => (
              <CartTool
                tool={tool}
                handleRemoveProduct={handleRemoveProduct}
                key={tool.id}
              ></CartTool>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
