import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";
import Marquee from "react-fast-marquee";
import Payment from "../../Components/Payment/Payment";

const AllTools = () => {
  const { tools, addToCart } = useContext(ApiContext);
  const [toolDetails, setToolDetails] = useState();

  return (
    <div className="bg-base-100">
      {/* <div className="pt-28 pb-12 text-center">
        <h1 className="text-5xl text-primary font-semibold  underline">See All Tools</h1>
      </div> */}
      <div className="all-tools-header-section">
        <div className="text-center p-60">
          <div>
            <h1 className="text-5xl font-semibold w-3/4 mx-auto leading-tight ">
              All in One Package $50/30days.Save $200+ now!
            </h1>
            <p className=" w-3/4 mx-auto leading-tight text-white">
              you'll get all your available tools in this packages
            </p>

            {/* <p className="font-semibold text-sm pt-6 lh-1  text-neutral  ">
              As a SEO / Digital Marketer / Website owner, you know how
              important the SEO is. As a result, you're looking for ways to
              improve your ranking on search engines so more users can find you
              on the World Wide Web. If you're looking for affordable SEO tools,
              look no further than Group Buy SEO Tools XYZ. This company offers
              SEO tools for all sizes of businesses, at prices everyone can
              afford. India, Bangladesh, Pakistan, Nepal, United States, Saudi
              Arabia, Malaysia, and many more countries peoples also can
              purchase our service. Our maximum tools have simple access system
              (One click to access system) - hope you'll like this system!
            </p> */}
            <div className="">
              <div className=" font-semibold leading-tight pt-4">
                <Marquee>
                  {" "}
                  Best Price * Don't Miss Out * Risk Free Refund Policy
                </Marquee>
              </div>
              <div className="font-semibold leading-tight text-secondary pt-2">
                <Marquee>
                  {" "}
                  Choose / Add to cart multiple tools, then our system will show
                  you package price. Package price start from 10$ to 39$
                  maximum.
                </Marquee>
              </div>
            </div>
          </div>
          {/* <div>
              <div style={{ width: 660, height: "auto" }}>
                <Ratio aspectRatio="16x9">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/TOfeDuAYUUI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </Ratio>
              </div>
            </div> */}
        </div>
      </div>

      <div>
        <p className="text-4xl text-primary font-semibold text-center underline ">
          See All Tools
        </p>
      </div>
      <div className="allTools-section pt-12 ">
        <div className="grid grid-cols-4 gap-4  ">
          {tools.map((tool) => (
            <>
              {/* <p>new tools</p> */}
              {/* <!-- component --> */}
              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img
                  class="w-full h-56 p-2 rounded-md object-cover object-center"
                  src={tool.image}
                  alt="avatar"
                />

                <div class="py-4 px-6">
                  <h1 class="text-xl font-semibold text-primary">
                    {tool.name}
                  </h1>
                  <div className="flex justify-between">
                    <p class="py-2 text-sm text-success font-semibold">
                      {tool.status}
                    </p>
                    <p class="py-2 text-sm text-success font-semibold">
                      {tool.price} BDT
                    </p>
                  </div>
                  <div class="flex justify-between mt-4 text-gray-700">
                    <button
                      class="px-2 text-sm p-1 rounded-md btn-secondary"
                      onClick={() => addToCart(tool)}
                    >
                      add to cart
                    </button>
                    <label
                      onClick={() => setToolDetails(tool)}
                      htmlFor="my-modal-3"
                      className="px-2 text-sm p-1 rounded-md btn-info cursor-pointer"
                    >
                      details
                    </label>
                  </div>

                  <div class="flex items-center mt-4 text-gray-700">
                    <h1 class="px-2 text-sm text-primary font-semibold">
                      limits : {tool?.limit?.slice(0, 23)}...
                    </h1>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="cart-section">
          <CartDrawer addToCart={addToCart}></CartDrawer>
        </div>
        <div>
          {toolDetails && (
            <ToolsModal
              toolDetails={toolDetails}
              key={toolDetails.id}
            ></ToolsModal>
          )}
        </div>
      </div>

      <div>
        <Payment></Payment>
      </div>
    </div>
  );
};

export default AllTools;
