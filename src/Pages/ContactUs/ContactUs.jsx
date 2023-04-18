import React from "react";
import "./ContactUs.css";
import { Link } from "react-router-dom";

const ContactUs = () => {
  //       {/* <a href="https://ibb.co/FbMYDqj"><img src="https://i.ibb.co/BVx6CKS/phone.webp" alt="phone" border="0"></a>
  {
    /* <a href="https://ibb.co/4mKnsrv"><img src="https://i.ibb.co/ZLGpHD4/live-chat.webp" alt="live-chat" border="0"></a> */
  }
  {
    /* <a href="https://ibb.co/nMCGNV7"><img src="https://i.ibb.co/1G6gtpr/gmail.webp" alt="gmail" border="0"></a> */
  }
  {
    /* <a href="https://ibb.co/9tnC4t4"><img src="https://i.ibb.co/py29KyK/facebook-logo.webp" alt="facebook-logo" border="0"></a> */
  }

  return (
    <div>
      <section className="py-6 sm:py-12 bg-gray-100 text-gray-800 contact-info">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
            <p className="font-serif text-sm text-gray-600">
              Qualisque erroribus usu at, duo te agam soluta mucius.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col bg-gray-50 h-72 w-72 border rounded">
              <img
                alt=""
                className="object-cover h-20  w-20  mx-auto rounded-md m-4"
                src="https://i.ibb.co/py29KyK/facebook-logo.webp"
              />
              {/* </Link> */}
              <div className="flex flex-col flex-1 p-6">
                {/* <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link> */}
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-red-500 hover:bg-red-500 border-none"
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
                {/* <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link> */}
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-red-500 hover:bg-red-500 border-none"
                >
                  send a message
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
                {/* <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link> */}
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-red-500 hover:bg-red-500 border-none"
                >
                  send a message
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
                {/* <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link> */}
                <h3 className="flex-1 py-2 text-xl text-center font-semibold leading-snug">
                  Leave us a message on our Facebook page
                </h3>
                <Link
                  to="https://www.facebook.com/"
                  className="btn bg-red-500 hover:bg-red-500 border-none"
                >
                  send a message
                </Link>
              </div>
            </article>
            {/* <article className="flex flex-col bg-gray-50">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?2"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                  <span>June 2, 2020</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?3"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                  <span>June 3, 2020</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col bg-gray-50">
              <Link
                rel="noopener noreferrer"
                href="#"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 bg-gray-500"
                  src="https://source.unsplash.com/200x200/?fashion?4"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="text-xs tracking-wider uppercase hover:underline text-violet-600"
                >
                  Convenire
                </Link>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                  Te nulla oportere reprimique his dolorum
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                  <span>June 4, 2020</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
