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
            <p className="font-serif text-xl text-[#3CB371]">
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
                  className="btn bg-gray-200 text-[#3CB371] hover:bg-[#3CB371]  hover:text-[#FFFFFF] border-none"
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
                  className="btn bg-gray-200 text-[#3CB371] hover:bg-[#3CB371]  hover:text-[#FFFFFF] border-none"
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
                  className="btn bg-gray-200 text-[#3CB371] hover:bg-[#3CB371]  hover:text-[#FFFFFF] border-none"
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
                  className="btn bg-gray-200 text-[#3CB371] hover:bg-[#3CB371]  hover:text-[#FFFFFF] border-none"
                >
                  Call Now
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
      {/* Faq section */}
      <section className="bg-gray-100 text-[#3CB371]">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl py-8 font-semibold sm:text-4xl text-center">
            Questions on Seo Services?
          </h2>

          <div className=" flex justify-evenly align-center ">
            <div className="faq-container ">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  What does Group Buy mean?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371] ">
                  Group Buy Means you get a Seo tools access on an <br />{" "}
                  affordable price as compared to original price. These accounts{" "}
                  <br /> are for the medium users of SEO Tools. If you are heavy
                  usage <br /> people, please don’t purchase.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Do you provide login details to the seo tools? How do I get
                  access to the accounts?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  No, you will need to install our Chrome extension and then you
                  can use the tools through it. You will receive video tutorial.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Are there any limitations in the accounts?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  Yes there are daily limits of few tools. Check here
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Do you Guaranty All tools work All the time?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  No we don't guaranty that all tools will work all the time
                  fluently. Since they are shared account, if users do something
                  wrong then the account may get banned and will take a little
                  time to resolve. Or every tools have some limits. Which is
                  divided among all the users. You have to use keeping it in
                  mind.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Can I share your SEO Tools with Others?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  No never, If you are reselling customer or you want to shared
                  with any one, Our system catches your IP and if it is used on
                  2nd IP then you’ll be banned immediately.
                </p>
              </details>
            </div>
            <div className="faq-container">
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Are these shared accounts or dedicated accounts?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  Yes, Group Buy means shared. All accounts are shared with the
                  other people or multiple user.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  How do I get help if I need any?What are your support details?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  We provide support on Skype Support, Email Support and Website
                  Support IF you have any query fell free to ask on our Support
                  form.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Do we support Refund?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  Please check our detailed refund policy guide Here.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Is this tools available for MAC?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  Yes almost all tools runs on Any OS.
                </p>
              </details>
              <details className="w-full border rounded-lg">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-600">
                  Do you have a Guide or Video on how to open the Firefox
                  Portable?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-[#3CB371]">
                  Yes, we provide you video tutorial and complete guide and if
                  get any error we help you using Teamviewer or Skype Screen
                  Share.
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
