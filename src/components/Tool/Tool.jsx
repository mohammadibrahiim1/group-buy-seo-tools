import React from "react";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { image, name, price, status } = tool.profile;
  //   console.log(tool);
  return (
    <div className="tool-info">
      <div className="card w-96 h-56  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-100">{name}</h2>

          <p className="text-accent">{price} BDT</p>

          <div className="card-actions justify-end mt-5">
            <p className="text-accent">{status}</p>
            <button className="btn btn-secondary  btn-sm rounded-full text-xs">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
