import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { MdClose } from "react-icons/md";
// FaCartArrowDown

const CartDrawer = () => {
  const [openToggler, setOpenToggler] = useState(false);
  return (
    <div>
      <div className="indicator" onClick={() => setOpenToggler(!openToggler)}>
        <span className="indicator-item badge badge-secondary">99+</span>
        <button className=" btn btn-sm btn-primary flex flex-column">
          <span>
            {" "}
            {openToggler ? "" : <FaCartArrowDown className=" h-5 w-5" />}
          </span>{" "}
          <br />
          <span className=""> 100 BDT</span>
        </button>
      </div>
      <div
        className={`cart-item bg-base-100 ${
          openToggler ? "cart-item-open" : "cart-item-closed"
        }`}
      >
        <div
          className="logo text-end mt-3"
          onClick={() => setOpenToggler(!openToggler)}
        >
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
          <ul>
            <li>item-1</li>
            <li>item-2</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
