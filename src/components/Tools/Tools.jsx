import React, { useContext, useState } from "react";
// import { useEffect } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";
import { Link } from "react-router-dom";
import { ApiContext } from "../../Context/DataContext";

const Tools = () => {
  const { tools } = useContext(ApiContext);
  const [showMore, setShowMore] = useState(6);
  const showMoreTools = () => {
    setShowMore((preValue) => preValue + 3);
  };

  return (
    <div>
      <section className="tools-section pt-52">
        <div className=" text-center  ">
          <h1 className="text-primary text-center text-5xl capitalize font-semibold">
           Our seo Tools 
          </h1>
          <p className="text-error text-sm font-bond">
            Always Know What You Are Pricing
          </p>
        </div>
        <div className="grid grid-cols-3 gap-y-4 pt-12 ">
          {tools &&
            tools
              ?.slice(0, showMore)
              .map((tool) => <Tool tool={tool} key={tool.id}></Tool>)}
        </div>
        <div className="text-center mt-5">
          {" "}
          <button
            className="btn btn-secondary  btn-sm rounded-full text-xs"
            onClick={showMoreTools}
          >
            show more
          </button>{" "}
          <Link
            to="/allTools"
            className=" btn btn-secondary  btn-sm rounded-full text-xs"
          >
            See all tools
          </Link>{" "}
        </div>
      </section>
    </div>
  );
};

export default Tools;
