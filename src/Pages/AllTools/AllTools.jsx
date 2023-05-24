import React, { useContext, useState } from "react";
// import DisplayTools from "../../Components/DisplayTools/DisplayTools";
import "./AllTools.css";
import ToolsModal from "../../Components/ToolsModal/ToolsModal";
import { ApiContext } from "../../Context/DataContext";
import CartDrawer from "../../Components/CartDrawer/CartDrawer";

const AllTools = () => {
  const { tools } = useContext(ApiContext);
  const [toolDetails, setToolDetails] = useState();

  return (
    <div className="bg-base-100">
      <div className="allTools-section">
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
                {/* <div class="flex items-center px-6 py-3 bg-gray-900">
                <svg
                  class="h-6 w-6 text-white fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z" />
                </svg>
                <h1 class="mx-3 text-white font-semibold text-lg">Focusing</h1>
              </div> */}
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
                    <button class="px-2 text-sm p-1 rounded-md btn-secondary">
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
          <CartDrawer></CartDrawer>
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
