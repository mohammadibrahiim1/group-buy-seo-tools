import React, { useState } from "react";
import { useEffect } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [showMore, setShowMore] = useState(6);
  const showMoreTools = () => {
    setShowMore((preValue) => preValue + 3);
  };

  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTools(data);
      });
  }, []);

  return (
    <div>
      <section className="tools-section">
        {/* <p>{tools.length}</p> */}
        <div className="grid grid-cols-3 gap-y-6">
          {tools.slice(0, showMore).map((tool) => (
            <Tool tool={tool} key={tool.id}></Tool>
          ))}
        </div>
        <div className="text-center mt-5">
          {" "}
          <button className="btn btn-primary" onClick={showMoreTools}>
            show more
          </button>{" "}
        </div>
      </section>
    </div>
  );
};

export default Tools;
