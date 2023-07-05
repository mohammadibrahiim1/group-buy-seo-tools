import React, { useContext, useState } from "react";
import Tool from "../Tool/Tool";
import "./Tools.css";
// import { Link } from "react-router-dom";
import { ApiContext } from "../../Context/DataContext";
import { Button } from "@mantine/core";

const Tools = () => {
  const { tools } = useContext(ApiContext);
  const [showMore, setShowMore] = useState(8);
  const showMoreTools = () => {
    setShowMore((preValue) => preValue + 4);
  };

  return (
    <div>
      <section className="tools-section pt-52">
        <div className=" text-center">
          <h1 className="text-primary text-center text-5xl capitalize font-semibold">
            Our seo Tools
          </h1>
          <p className="text-error text-sm font-bond">
            Always Know What You Are Pricing
          </p>
        </div>
        <div className="w-3/4 mx-auto grid grid-cols-4 gap-4 pt-12 ">
          {tools &&
            tools
              ?.slice(0, showMore)
              .map((tool) => <Tool tool={tool} key={tool.id}></Tool>)}
        </div>
        <div className="flex justify-between items-center mt-10 w-3/4 mx-auto">
          <Button
            variant="light"
            color="red"
            fullWidth
            mt="md"
            radius="md"
            onClick={showMoreTools}
          >
            Show more
          </Button>
          <Button
            component="a"
            href="/allTools"
            variant="light"
            color="red"
            fullWidth
            mt="md"
            radius="md"
          >
            See all tools
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Tools;
