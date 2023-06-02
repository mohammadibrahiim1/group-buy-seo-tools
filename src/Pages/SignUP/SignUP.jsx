import React from "react";
import "./SignUP.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUP = () => {
  return (
    <div>
      <section>
        <div className="signUp-page pt-28 pb-12 ">
          <div className="flex justify-evenly align-center mt-10 mb-10 w-10/12 mx-auto">
            <div className=" bg-info w-full ">
              <h1 className="text-4xl text-primary font-semibold w-96 pt-20 pb-6 mx-auto">
                You order and we deliver
              </h1>

              <img
                src="https://i.ibb.co/qMDcmvY/signup.png"
                alt=""
                className="w-96 mx-auto  mt-5 mb-5"
              />
            </div>

            <div className="input-form w-full bg-white ">
              <form action="" className="sign-up-form w-8/12 mx-auto pt-20">
                <div>
                  <h1 className="text-4xl text-primary font-semibold mb-5">
                    Create Account
                  </h1>
                  <div>
                    <button className="btn capitalize w-60 h-12 mr-5 text-primary font-semibold ">
                      {" "}
                      <FcGoogle className="w-5 h-5 me-2" /> Sign up with Google
                    </button>
                    <button className="btn capitalize w-60 h-12 text-primary font-semibold ">
                      {" "}
                      <FaFacebook className="w-5 h-5 me-2 text-primary" /> Sign
                      up with Facebook
                    </button>
                  </div>
                </div>

                <div className=" input-field">
                  <div className="mt-10 mb-10">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input input-bordered input-md w-full max-w-xs focus:outline-0"
                    />
                  </div>
                  <div className="mt-10 mb-10">
                    <input
                      type="email"
                      placeholder="Email"
                      className="input input-bordered input-md w-full max-w-xs focus:outline-0"
                    />
                  </div>
                  <div className="mt-10 mb-10">
                    <input
                      type="password"
                      placeholder="Password"
                      className="input input-bordered input-md w-full max-w-xs focus:outline-0"
                    />
                  </div>
                </div>

                <div>
                  <button class="btn btn-wide ">Create Account</button>
                </div>
                <div className="flex justify-between align-center w-96 mt-10 mb-10 ">
                  <p className="text-primary font-semibold">
                    Already Have An Account?{" "}
                  </p>
                  <Link
                    to="/logIn"
                    className="text-error text-semibold border pe-4 ps-4 border-error rounded "
                  >
                    Login{" "}
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUP;