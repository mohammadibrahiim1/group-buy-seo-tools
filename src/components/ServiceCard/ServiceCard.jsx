import React from "react";
import { Link } from "react-router-dom";
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
          <div
            to="/"
            class="relative flex items-start justify-between h-56 rounded-xl border border-gray-100 p-4 shadow-xl sm:p-6 lg:p-8"
          >
            <div class="pt-4 text-gray-500">
              <GiNetworkBars class="h-8 w-8 sm:h-10 sm:w-10" />
              {/* <svg
                class="h-8 w-8 sm:h-10 sm:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg> */}

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
              <FaCheck class="h-8 w-8 sm:h-10 sm:w-10" />

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
              <FaDollarSign class="h-8 w-8 sm:h-10 sm:w-10" />
              {/* <svg
                class="h-8 w-8 sm:h-10 sm:w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                ></path>
              </svg> */}

              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
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
              <MdOutlineSupport class="h-8 w-8 sm:h-10 sm:w-10" />

              <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
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
