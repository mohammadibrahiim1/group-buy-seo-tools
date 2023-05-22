import React from "react";
import "./Tool.css";

const Tool = ({ tool }) => {
  const { image, name, price } = tool.profile;
  //   console.log(tool);
  return (
    <div className="tool-info">
      <div className="card w-96 h-56  bg-base-100 shadow-xl image-full">
        <figure>
          <img src={image} alt="Shoes" className="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base-100">{name}</h2>
          <p className="text-accent">${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-success">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tool;
