import React from "react";
import "./Counter.css";
import { BiWorld } from "react-icons/bi";
import { FaUserCheck, FaUserAlt } from "react-icons/fa";
import { BsIncognito } from "react-icons/bs";

const Counters = () => {
  return (
    <div>
      <div className="pt-32">
        {/* <div className="py-12">
          <h1 className="text-5xl font-semibold text-center text-primary  capitalize">
            Our Group Buy SEO Tools Service Benefit
          </h1>
        </div> */}
        <div className="grid grid-cols-4 w-3/4 mx-auto gap-5">
          <div>
            <div class=" h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div class="pt-4 text-gray-500">
                <FaUserAlt class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

                <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
                  5605
                </h3>

                <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
                  Total Users
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div class="pt-4 text-gray-500">
                <FaUserCheck class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

                <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
                  193
                </h3>

                <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
                  Active Users
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div class="pt-4 text-gray-500">
                <BiWorld class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

                <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
                  105
                </h3>

                <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
                  Countries
                </p>
              </div>
            </div>
          </div>
          <div>
            <div class="  h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
              <div class="pt-4 text-gray-500">
                <BsIncognito class="h-8 w-8 sm:h-10 sm:w-10 text-warning text-center mx-auto" />

                <h3 class="mt-4 text-5xl font-semibold  text-error text-center sm:text-xl">
                  2018
                </h3>

                <p class="mt-2 text-5xl font-semibold text-center uppercase  text-primary sm:text-xl">
                  Since
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counters;
