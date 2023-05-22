import React, { useEffect, useState } from "react";

const AllTools = () => {
  const [allTools, seeAllTools] = useState([]);
  useEffect(() => {
    fetch("tools.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seeAllTools(data);
      });
  }, []);
  return <div>{allTools.length}</div>;
};

export default AllTools;
