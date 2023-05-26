import React from "react";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineSupport } from "react-icons/md";
import { FaCheck, FaDollarSign } from "react-icons/fa";
const ServiceCard = () => {
  return (
    <div className="pt-32">
      <div className="py-12">
        <h1 className="text-5xl font-semibold text-center text-primary  capitalize">
          Our Group Buy SEO Tools Service Benefit
        </h1>
      </div>
      <div className="grid grid-cols-4 w-3/4 mx-auto gap-5">
        <div>
          <div class="relative flex items-start justify-between h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8">
            <div class="pt-4 text-gray-500">
              <GiNetworkBars class="h-8 w-8 sm:h-10 sm:w-10 text-warning" />

              <h3 class="mt-4 text-lg font-bold  text-primary sm:text-xl">
                Tools Uptime
              </h3>

              <p class="mt-2 hidden text-sm sm:block">
                We take care about tools uptime. We always try our best to keep
                our tools active maximum time.
              </p>
            </div>

            <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              4.3
            </span>
          </div>
        </div>
        <div>
          <div
            to="/"
            class="relative flex items-start justify-between h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="pt-4 text-gray-500">
              <FaCheck class="h-8 w-8 sm:h-10 sm:w-10 text-warning " />

              <h3 class="mt-4 text-lg font-semibold text-primary sm:text-xl">
                Instant Access
              </h3>

              <p class="mt-2 hidden text-sm sm:block">
                Instant Access after Purchase. One click to Access System
              </p>
            </div>

            <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              4.3
            </span>
          </div>
        </div>
        <div>
          <div
            to="/"
            class="relative flex items-start justify-between h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="pt-4 text-gray-500">
              <FaDollarSign class="h-8 w-8 sm:h-10 sm:w-10 text-warning" />

              <h3 class="mt-4 text-lg font-bold text-primary sm:text-xl">
                Easy Payment Gateway
              </h3>

              <p class="mt-2 hidden text-sm sm:block">
                We accept PayPal internationally and locally bKash, Rocket and
                Nagad.
              </p>
            </div>

            <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              4.3
            </span>
          </div>
        </div>
        <div>
          <div
            to="/"
            class="relative flex items-start justify-between h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="pt-4 text-gray-500">
              <MdOutlineSupport class="h-8 w-8 sm:h-10 sm:w-10 text-warning" />

              <h3 class="mt-4 text-lg font-bold text-primary sm:text-xl">
                Quality Support
              </h3>

              <p class="mt-2 hidden text-sm sm:block">
                You can contact us directly via chat or facebook.
              </p>
            </div>

            <span class="rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600">
              4.3
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
