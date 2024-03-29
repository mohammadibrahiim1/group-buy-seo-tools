import { Text } from "@mantine/core";
import React, { useEffect, useState } from "react";

const Pricing = () => {
  const [pricingData, setPricingData] = useState([]);

  useEffect(() => {
    fetch("pricing.json")
      .then((res) => res.json())
      .then((data) => {
        setPricingData(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="text-center">
        <Text
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          mt={100}
          h={50}
          className="text-[#89D6F3] text-4xl font-bold"
        >
          Our Pricing Plans
        </Text>
        <Text variant="gradient" gradient={{ from: "teal", to: "lime", deg: 105 }} className="text-gray-500">
          choose your favorite packages
        </Text>
      </div>
      <div className="grid grid-cols-3 justify-items-center">
        {pricingData.map((pricing) => (
          <>
            <div class="w-[340px] ] p-4 bg-white shadow-lg rounded-2xl dark:bg-gray-800 my-5">
              <p class="mb-4 text-xl font-medium text-gray-800 dark:text-gray-50">{pricing.name} Package</p>
              <div className="flex justify-between items-center ">
                <p class="text-lg font-bold text-purple-900 dark:text-white">
                  ${pricing.price.monthly}
                  <span class="text-sm text-purple-900">/ month</span>
                </p>
                <p class="text-lg font-bold text-orange-500 dark:text-white">
                  ${pricing.price.annually}
                  <span class="text-sm text-orange-500">/ annually</span>
                </p>
              </div>
              <p class="mt-4 text-xs text-gray-600 dark:text-gray-100">{pricing.discretion}</p>
              {pricing?.features?.map((feature) => (
                <>
                  <ul class="w-full mt-6 mb-6 text-sm text-gray-600 dark:text-gray-100">
                    <li class="mb-3 flex items-center ">
                      <svg
                        class="w-6 h-6 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="6"
                        stroke="currentColor"
                        fill="#10b981"
                        viewBox="0 0 1792 1792"
                      >
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                      </svg>
                      {feature}
                    </li>
                  </ul>
                </>
              ))}
              <button
                type="button"
                class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Buy Now
              </button>
            </div>{" "}
          </>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
