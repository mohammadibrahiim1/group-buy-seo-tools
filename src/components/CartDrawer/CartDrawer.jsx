import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";
// FaCartArrowDown

const CartDrawer = () => {
  return (
    <div>
      <div className="indicator ">
        <span className="indicator-item badge badge-secondary">99+</span>
        <button className="btn">
          <FaCartArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartDrawer;
