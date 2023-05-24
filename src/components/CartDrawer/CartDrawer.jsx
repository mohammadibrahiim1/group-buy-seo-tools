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
         <span> {openToggler ? "" : <FaCartArrowDown className=" h-5 w-5" />}</span> <br />
          <span className=""> 100 BDT</span>
        </button>
      </div>
      <div
        className={`cart-item ${
          openToggler ? "cart-item-open" : "cart-item-closed"
        }`}
      >
        <div className="logo " onClick={() => setOpenToggler(!openToggler)}>
          {openToggler ? <MdClose className="h-8 w-8 " /> : ""}
        </div>
        <ul>
          <li>item-1</li>
          <li>item-2</li>
        </ul>
      </div>
    </div>
  );
};

export default CartDrawer;
