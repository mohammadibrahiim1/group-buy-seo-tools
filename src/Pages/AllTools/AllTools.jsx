import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";

const AllTools = () => {
  const { tools, addToCart } = useContext(ApiContext);
  const [toolDetails, setToolDetails] = useState();

  return (
    <div className="bg-base-100">
      <div className="pt-28 pb-12 text-center">
        <h1 className="text-5xl text-primary font-semibold  underline">See All Tools</h1>
      </div>
      <div className="allTools-section ">
        <div className="grid grid-cols-4 gap-4  ">
          {tools.map((tool) => (
            <>
              {/* <!-- component --> */}
              <div class="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden my-4">
                <img
                  class="w-full h-56 p-2 rounded-md object-cover object-center"
                  src={tool.profile.image}
                  alt="avatar"
                />

                <div class="py-4 px-6">
                  <h1 class="text-xl font-semibold text-primary">
                    {tool.profile.name}
                  </h1>
                  <div className="flex justify-between">
                    <p class="py-2 text-sm text-success font-semibold">
                      {tool.profile.status}
                    </p>
                    <p class="py-2 text-sm text-success font-semibold">
                      {tool.profile.price} BDT
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
                      limits : {tool.profile.limit.slice(0, 23)}...
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
    </div>
  );
};

export default AllTools;
