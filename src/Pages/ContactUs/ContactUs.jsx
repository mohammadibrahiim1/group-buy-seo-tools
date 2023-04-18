import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <section className="py-6 sm:py-12 bg-gray-100 text-gray-800 contact-info">
        <div className="w-8/12 p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p className="font-serif text-xl text-gray-600">
              We are best among all the providers.Get 5 minutes from your time
              and have a discussion with us why we can serve you with best!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-gray-50 h-72 w-72 border rounded">
              <img
                alt=""
                className="object-cover h-20  w-20  mx-auto rounded-md m-4"
                src="https://i.ibb.co/py29KyK/facebook-logo.webp"
              />

              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-[#dc160c]  border-none"
                >
                  send a message
                </Link>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 h-72 w-72 border rounded">
              <img
                alt=""
                className="object-cover h-20  w-20  mx-auto rounded-md m-4"
                src="https://i.ibb.co/1G6gtpr/gmail.webp"
              />
              {/* </Link> */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-[#dc160c]  border-none"
                >
                  Email Now
                </Link>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 h-72 w-72 border rounded">
              <img
                alt=""
                className="object-cover h-20  w-20  mx-auto rounded-md m-4"
                src="https://i.ibb.co/ZLGpHD4/live-chat.webp"
              />
              {/* </Link> */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-[#dc160c]  border-none"
                >
                  Chat Now
                </Link>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50 h-72 w-72 border rounded">
              <img
                alt=""
                className="object-cover h-20  w-20  mx-auto rounded-md m-4"
                src="https://i.ibb.co/BVx6CKS/phone.webp"
              />
              {/* </Link> */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-[#dc160c]  border-none"
                >
                  Call Now
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Faq section */}
      <section className="bg-gray-100 text-gray-800">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 text-gray-600">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className=" flex ">
            <div className="">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Ex orci laoreet egestas sapien magna egestas scelerisque?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                  nullam taciti at adipiscing est.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                  odio?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                  porttitor egestas tincidunt neque vehicula potenti.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                  suscipit erat?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Justo libero tellus integer tincidunt justo semper consequat
                  venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                  pretium sodales vel magna et massa euismod vulputate sed.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                  suscipit erat?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Justo libero tellus integer tincidunt justo semper consequat
                  venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                  pretium sodales vel magna et massa euismod vulputate sed.{" "}
                </p>
              </details>
            </div>
            <div className="">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Ex orci laoreet egestas sapien magna egestas scelerisque?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                  nullam taciti at adipiscing est.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                  odio?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                  porttitor egestas tincidunt neque vehicula potenti.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                  suscipit erat?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Justo libero tellus integer tincidunt justo semper consequat
                  venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                  pretium sodales vel magna et massa euismod vulputate sed.{" "}
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                  suscipit erat?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                  Justo libero tellus integer tincidunt justo semper consequat
                  venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                  pretium sodales vel magna et massa euismod vulputate sed.{" "}
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
